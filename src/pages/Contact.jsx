import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service_type: "",
    urgency: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: 'service_nvtel',       // 🔹 Remplace par ton Service ID
          template_id: 'template_ervf3dm',         // 🔹 Remplace par ton Template ID
          user_id: 'Q3c8kN9N5pircpp1R',      // 🔹 Remplace par ta clé publique
          template_params: {
            name: formData.name,
            email: formData.email,
            company: formData.company,
            phone: formData.phone,
            service_type: formData.service_type,
            urgency: formData.urgency,
            message: formData.message,
          },
        }),
      });

      if (response.ok) {
        setSubmitStatus({ type: "success", message: "Message envoyé avec succès !" });
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          service_type: "",
          urgency: "",
          message: "",
        });
      } else {
        setSubmitStatus({ type: "error", message: "Erreur lors de l’envoi du message." });
      }
    } catch {
      setSubmitStatus({ type: "error", message: "Erreur réseau. Réessayez plus tard." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      {/* SECTION CONTACT INFO */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contactez-nous</h2>
          <p className="text-xl text-gray-600 mb-12">
            Prêt à améliorer votre infrastructure IT ? Parlons de votre projet !
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <InfoCard
              color="blue"
              icon={
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              }
              title="Téléphone"
              text="03 20 49 29 00"
            />
            <InfoCard
              color="green"
              icon={
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              }
              title="Email"
              text="contact@1fonie.fr"
            />
            <InfoCard
              color="purple"
              icon={
                <>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </>
              }
              title="Adresse"
              text="France entière"
            />
          </div>
        </div>
      </section>

      {/* FORMULAIRE */}
      <section className="py-20 bg-customblue2">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-customblue mb-4">
                Demandez votre Devis Gratuit
              </h2>
              <p className="text-xl text-customblue">
                Remplissez ce formulaire et nous vous recontacterons dans les 24h
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              {submitStatus && (
                <div
                  className={`p-4 rounded-lg mb-6 ${
                    submitStatus.type === "success"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input label="Nom complet *" name="name" value={formData.name} onChange={handleInputChange} required />
                  <Input label="Email professionnel *" name="email" type="email" value={formData.email} onChange={handleInputChange} required />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Input label="Entreprise *" name="company" value={formData.company} onChange={handleInputChange} required />
                  <Input label="Téléphone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Select
                    label="Service souhaité *"
                    name="service_type"
                    value={formData.service_type}
                    onChange={handleInputChange}
                    required
                    options={[
                      ["", "Sélectionnez un service"],
                      ["telephone_systems", "Standards Téléphoniques"],
                      ["network_maintenance", "Maintenance Informatique"],
                      ["mobile_telephony", "Téléphonie Mobile"],
                      ["network_connectivity", "Réseau & Internet"],
                    ]}
                  />
                  <Select
                    label="Niveau d'urgence"
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleInputChange}
                    options={[
                      ["low", "Faible"],
                      ["medium", "Moyenne"],
                      ["high", "Élevée"],
                    ]}
                  />
                </div>

                <Textarea
                  label="Décrivez votre projet *"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />

                <div className="flex items-center space-x-3 mt-4">
                  <input type="checkbox" id="privacy" required />
                  <label htmlFor="privacy" className="text-sm text-gray-600">
                    J'accepte que mes données soient traitées dans le cadre de cette demande *
                  </label>
                </div>

                <div className="flex justify-center mt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-8 py-4 bg-customblue text-white rounded-lg font-semibold text-lg ${
                      isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? "Envoi..." : "Envoyer ma demande"}
                  </button>
                </div>

                <div className="text-center text-sm text-gray-500">
                  <p>🛡️ Vos données sont sécurisées et ne seront jamais partagées</p>
                  <p>⏰ Réponse garantie sous 24h en jours ouvrés</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* === Composants internes simplifiés === */
function Input({ label, ...props }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <input {...props} className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
    </div>
  );
}

function Textarea({ label, ...props }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <textarea {...props} rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none" />
    </div>
  );
}

function Select({ label, options = [], ...props }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <select {...props} className="w-full px-4 py-3 border border-gray-300 rounded-lg">
        {options.map(([value, text]) => (
          <option key={value} value={value}>{text}</option>
        ))}
      </select>
    </div>
  );
}

function InfoCard({ color, icon, title, text }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className={`bg-${color}-100 p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center`}>
        <svg className={`w-6 h-6 text-${color}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {icon}
        </svg>
      </div>
      <h3 className="font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}
