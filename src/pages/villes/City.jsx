import React from "react";
import { useParams, Link } from "react-router-dom";
import { CITIES } from "../../seo/cities.js";
import { SERVICES } from "../../seo/services.js";

export default function City() {
  const { city } = useParams();
  const current = CITIES.find(c => c.slug === city);

  if (!current) {
    return (
      <main className="px-6 py-16">
        <h1 className="text-2xl font-semibold text-customblue">Ville introuvable</h1>
        <p className="mt-2"><Link to="/villes" className="underline text-customblue">Retour aux villes</Link></p>
      </main>
    );
  }

  return (
    <main>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-customblue mb-2">
            Téléphonie IP, Réseau & Maintenance à {current.name}
          </h1>
          <p className="text-gray-700 max-w-3xl">
            Interventions TPE/PME à {current.name} et alentours. Délais rapides. Devis sous 24h ouvrées.
          </p>
        </div>
      </section>

      <section className="py-12 bg-customblue2">
        <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map(s => (
            <Link
              key={s.slug}
              to={`/villes/${current.slug}/${s.slug}`}
              className="bg-white rounded-lg p-5 shadow hover:opacity-90"
            >
              <h3 className="font-semibold text-customblue">{s.name}</h3>
              <p className="text-sm text-gray-600 mt-1">Découvrir l’offre à {current.name}</p>
            </Link>
          ))}
        </div>
        <div className="container mx-auto px-6 mt-8">
          <Link to="/villes" className="text-white underline">Voir toutes les villes</Link>
        </div>
      </section>
    </main>
  );
}
