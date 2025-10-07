import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ nom: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://www.1fonie.fr/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ nom: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="container mx-auto px-6 py-16 max-w-2xl">
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-customblue-dark">Contactez-nous</h1>
        <p className="text-gray-600 mt-2">
          Remplissez le formulaire ci-dessous, nous vous répondrons rapidement.
        </p>
      </header>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-md">
        <div>
          <label className="block font-semibold mb-1">Nom</label>
          <input
            type="text"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-customblue"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-customblue"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-customblue"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-customblue text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 disabled:opacity-50"
        >
          {status === "loading" ? "Envoi en cours..." : "Envoyer"}
        </button>

        {status === "success" && (
          <p className="text-green-600 mt-3">Message envoyé avec succès !</p>
        )}
        {status === "error" && (
          <p className="text-red-600 mt-3">Erreur lors de l’envoi. Réessayez.</p>
        )}
      </form>
    </main>
  );
}
