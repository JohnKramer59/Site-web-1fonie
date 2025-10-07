import React, { useState } from "react";

const EMAILJS_SERVICE_ID = "service_nvtel";
const EMAILJS_TEMPLATE_ID = "template_ervf3dm";
const EMAILJS_PUBLIC_KEY = "Q3c8kN9N5pircpp1R";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service_type: "",
    urgency: "medium",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const service_id = EMAILJS_SERVICE_ID.trim();
    const template_id = EMAILJS_TEMPLATE_ID.trim();
    const user_id = EMAILJS_PUBLIC_KEY.trim();

    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id,
          template_id,
          user_id,
          template_params: { ...formData },
        }),
      });

      if (res.ok) {
        setSubmitStatus({ type: "success", message: "Votre demande a été envoyée avec succès ✅" });
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          service_type: "",
          urgency: "medium",
          message: "",
        });
      } else if (res.status === 404) {
        setSubmitStatus({
          type: "error",
          message: "IDs EmailJS introuvables. Vérifie service_id, template_id et user_id EXACTS.",
        });
      } else {
        setSubmitStatus({ type: "error", message: "Erreur lors de l’envoi. Réessayez." });
      }
    } catch {
      setSubmitStatus({ type: "error", message: "Erreur réseau. Réessayez plus tard." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      {/* Contact Info */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contactez-nous</h2>
          <p className="text-xl text-gray-600 mb-12">
            Prêt à améliorer votre infrastructure IT ? Parlons de votre projet !
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <InfoCard title="Téléphone" text="03 20 49 29 00" color="blue" />
            <InfoCard title="Email" text="contact@1fonie.fr" color="green" />
            <InfoCard title="Adresse" text="France entière" color="purple" />
          </div>
        </div>
      </section>

      {/* FORMULAIRE GLOBAL */}
      <section className="py-20 bg-customblue2">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-customblue mb-4">Demandez votre Devis Gratuit</h2>
              <p className="text-xl text-customblue">Réponse sous 24h ouvrées</p>
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
                  <Input label="Email professionnel *" type="email" name="email" value={formData.email} onChange={handleInputChange} required />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Input label="Entreprise *" name="company" value={formData.company} onChange={handleInputChange} required />
                  <Input label="Téléphone" type="tel" name="phone" value={formData.phone} onChange={handleInputChange} />
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
                  <p>🛡️ Données non partagées</p>
                  <p>⏰ Réponse sous 24h</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

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
function InfoCard({ title, text, color }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className={`p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-${color}-100`}>
        <svg className={`w-6 h-6 text-${color}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" strokeWidth="2" />
        </svg>
      </div>
      <h3 className="font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}
