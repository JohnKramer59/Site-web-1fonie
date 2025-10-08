import React from "react";
import { Link } from "react-router-dom";
import { CITIES } from "../../seo/cities.js";

export default function InternetFibre() {
  return (
    <main>
      {/* Hero */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-customblue mb-4">
            Internet fibre & Réseau d’entreprise
          </h1>
          <p className="text-gray-700 max-w-3xl">
            FTTH pro ou FTTO dédiée, IP fixe, redondance 4G, SD-WAN, Wi-Fi 6/7.
            Réseau fiable et dimensionné pour vos usages métiers.
          </p>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="py-12 bg-customblue2">
        <div className="container mx-auto px-6 grid lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow lg:col-span-2">
            <h2 className="text-2xl font-semibold text-customblue">Solutions</h2>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>• Accès fibre FTTH pro ou FTTO, SLA adaptés</li>
              <li>• Routeurs pro, IP fixes, QoS voix</li>
              <li>• Wi-Fi 6/7, contrôleurs, bornes PoE</li>
              <li>• Segmentation VLAN, sécurité et supervision</li>
              <li>• Secours 4G/5G et SD-WAN multi-liens</li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 text-customblue">Déploiement & délais</h3>
            <ol className="mt-3 list-decimal ml-5 text-gray-700 space-y-1">
              <li>Vérification d’éligibilité et dimensionnement</li>
              <li>Commande des liens et préparation LAN/Wi-Fi</li>
              <li>Installation, tests de performance et sécurité</li>
              <li>Recette, documentation et monitoring</li>
            </ol>

            <div className="mt-8">
              <Link to="/contact" className="inline-block bg-customblue text-white px-5 py-3 rounded-lg">
                Demander un devis
              </Link>
            </div>
          </div>

          {/* Maillage villes */}
          <aside className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-semibold text-customblue">Internet & réseau par ville</h4>
            <ul className="mt-3 space-y-2 max-h-[420px] overflow-auto pr-2">
              {CITIES.map(c => (
                <li key={c.slug}>
                  <Link to={`/villes/${c.slug}/internet-fibre`} className="underline text-gray-800 hover:opacity-80">
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
