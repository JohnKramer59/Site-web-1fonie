import React from "react";

export default function Services() {
  return (
    <main className="container mx-auto px-6 py-16">
      <header className="mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-customblue-dark">
          Nos Services
        </h1>
        <p className="text-gray-600 mt-2">
          Des solutions adaptées aux besoins des entreprises.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard
          title="Téléphonie IP"
          description="Installation, maintenance et support de vos systèmes VoIP."
        />
        <ServiceCard
          title="Réseaux & Sécurité"
          description="Routeurs, pare-feu, VLAN et surveillance proactive."
        />
        <ServiceCard
          title="Câblage & Baies"
          description="Conception, pose et certification de votre infrastructure réseau."
        />
        <ServiceCard
          title="Wifi Professionnel"
          description="Déploiement de réseaux Wifi fiables et performants."
        />
        <ServiceCard
          title="Caméras IP"
          description="Installation et configuration de systèmes de vidéosurveillance."
        />
        <ServiceCard
          title="Maintenance & Support"
          description="Suivi régulier, mises à jour et assistance à distance."
        />
      </div>
    </main>
  );
}

function ServiceCard({ title, description }) {
  return (
    <div className="p-6 rounded-xl border bg-white shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-lg font-semibold mb-2 text-customblue-dark">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
