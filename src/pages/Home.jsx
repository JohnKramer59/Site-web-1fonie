import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-r from-customblue-dark to-customblue text-white text-center py-24 px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Téléphonie, Réseaux et Cybersécurité pour TPE & PME
        </h1>
        <p className="mt-4 text-lg text-white/90">
          Déploiements fiables, maintenance proactive, protection concrète.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/contact"
            className="bg-white text-customblue-dark px-6 py-3 rounded-lg font-semibold"
          >
            Demander un devis
          </Link>
          <Link
            to="/services"
            className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10"
          >
            Voir nos services
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Nos expertises
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="Routeurs & Pare-feu" text="Installation, configuration et sécurité réseau." />
          <Card title="Câblage & Baies" text="Câblage structuré, brassage et tests certifiés." />
          <Card title="Wifi d’entreprise" text="Études de couverture et déploiement professionnel." />
        </div>
      </section>
    </main>
  );
}

function Card({ title, text }) {
  return (
    <div className="p-6 rounded-xl border bg-white shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-lg font-semibold mb-2 text-customblue-dark">{title}</h3>
      <p className="text-gray-600 text-sm">{text}</p>
    </div>
  );
}
