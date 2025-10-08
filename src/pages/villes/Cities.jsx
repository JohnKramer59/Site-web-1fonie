import React from "react";
import { Link } from "react-router-dom";
import Seo from "../../seo/Seo.jsx";
import { CITIES } from "../../seo/cities.js";
import { SERVICES } from "../../seo/services.js";
import { siteUrl } from "../../seo/schema.js";

export default function Cities() {
  return (
    <main>
      <Seo
        title="Villes desservies en Hauts-de-France | 1FONIE Pro"
        description="Couverture Hauts-de-France. Téléphonie IP, Internet fibre, maintenance informatique, mobile pro. Devis 24h."
        canonical={`${siteUrl}/villes`}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-customblue mb-6">Villes desservies</h1>
          <p className="text-gray-700 max-w-3xl">Hauts-de-France • Intervention rapide • Devis sous 24h ouvrées.</p>
        </div>
      </section>

      <section className="py-12 bg-customblue2">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {CITIES.map(c => (
              <div key={c.slug} className="bg-white rounded-xl p-6 shadow">
                <h2 className="text-xl font-semibold mb-3 text-customblue">{c.name}</h2>
                <ul className="space-y-2">
                  {SERVICES.map(s => (
                    <li key={s.slug}>
                      <Link to={`/villes/${c.slug}/${s.slug}`} className="text-sm underline text-gray-800 hover:opacity-80">
                        {s.name} à {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-3">
                  <Link to={`/villes/${c.slug}`} className="text-sm text-customblue underline">Voir la page ville</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
