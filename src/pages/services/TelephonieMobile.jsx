import React from "react";
import { Link } from "react-router-dom";
import { CITIES } from "../../seo/cities.js";

export default function TelephonieMobile() {
  return (
    <main>
      {/* Hero */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-customblue mb-4">
            Téléphonie mobile entreprise
          </h1>
          <p className="text-gray-700 max-w-3xl">
            Forfaits pros 4G/5G, eSIM, MDM, leasing de smartphones. Pilotage des
            coûts et mise en service express pour vos équipes.
          </p>
        </div>
      </section>

      {/* Offres */}
      <section className="py-12 bg-customblue2">
        <div className="container mx-auto px-6 grid lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow lg:col-span-2">
            <h2 className="text-2xl font-semibold text-customblue">Offre mobile pro</h2>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>• Forfaits data, voix, roaming selon les profils</li>
              <li>• Gestion de flotte, suivi conso, alertes</li>
              <li>• eSIM, MDM (sécurité, inventaire, politiques)</li>
              <li>• Catalogue terminaux, leasing et SAV</li>
              <li>• Multi-opérateurs pour la meilleure couverture</li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 text-customblue">Packs</h3>
            <div className="mt-3 grid md:grid-cols-3 gap-4">
              <div className="border rounded-lg p-4"><h4 className="font-semibold">Starter</h4><p className="text-sm text-gray-600 mt-1">Lignes clés + suivi conso</p></div>
              <div className="border rounded-lg p-4"><h4 className="font-semibold">Business</h4><p className="text-sm text-gray-600 mt-1">MDM + parc terminaux</p></div>
              <div className="border rounded-lg p-4"><h4 className="font-semibold">Enterprise</h4><p className="text-sm text-gray-600 mt-1">Roaming + sécurité avancée</p></div>
            </div>

            <div className="mt-8">
              <Link to="/contact" className="inline-block bg-customblue text-white px-5 py-3 rounded-lg">
                Demander un devis
              </Link>
            </div>
          </div>

          {/* Maillage villes */}
          <aside className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-semibold text-customblue">Téléphonie mobile par ville</h4>
            <ul className="mt-3 space-y-2 max-h-[420px] overflow-auto pr-2">
              {CITIES.map(c => (
                <li key={c.slug}>
                  <Link to={`/villes/${c.slug}/telephonie-mobile`} className="underline text-gray-800 hover:opacity-80">
                    À {c.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <Link to="/villes" className="underline text-customblue">Voir toutes les villes</Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
