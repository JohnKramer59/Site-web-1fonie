{/* FORMULAIRE GLOBAL */}
<section className="py-20" style={{ backgroundColor: "#0A2540" }}>
  <div className="container mx-auto px-6">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">Demandez votre Devis Gratuit</h2>
        <p className="text-xl text-gray-200">Réponse sous 24h ouvrées</p>
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
            <label htmlFor="privacy" className="text-sm text-gray-700">
              J'accepte que mes données soient traitées dans le cadre de cette demande *
            </label>
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-8 py-4 bg-[#0A2540] text-white rounded-lg font-semibold text-lg ${
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
