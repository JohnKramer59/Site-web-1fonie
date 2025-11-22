// src/pages/services/TelephonieMobile.jsx
import React from "react";
import { Link } from "react-router-dom";
import Seo from "../../seo/Seo.jsx";
import { CITIES } from "../../seo/cities.js";
import { siteUrl } from "../../seo/schema.js";

export default function TelephonieMobile() {
  const title = "Téléphonie mobile entreprise | 1FONIE Pro";
  const description =
    "Forfaits mobiles pro simples et fiables : 4G/5G, eSIM, gestion de flotte, MDM, smartphones en leasing et suivi des consommations. Déploiement rapide.";
  const canonical = `${siteUrl}/services/telephonie-mobile`;

  return (
    <main>
      <Seo title={title} description={description} canonical={canonical} />

      {/* HERO + CONTENU */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-customblue mb-6">
            Téléphonie mobile entreprise
          </h1>

          <div className="space-y-6 max-w-3xl text-gray-700 leading-relaxed">

            {/* INTRO - SIMPLIFIÉ POUR TOUS */}
            <p>
              Nos solutions de <strong>téléphonie mobile professionnelle</strong> sont conçues pour être simples,
              économiques et fiables. Elles permettent aux collaborateurs de rester joignables partout tout en gardant
              un contrôle total des coûts pour l’entreprise.
            </p>

            <p>
              Nous proposons des <strong>forfaits 4G/5G</strong> avec eSIM, un suivi de consommation en temps réel
              et des options roaming entièrement maîtrisées. Objectif : éviter les surcoûts, garantir la disponibilité
              et faciliter les déploiements.
            </p>

            {/* AVANTAGES */}
            <h2 className="text-2xl font-semibold text-customblue mt-8">
              Les avantages pour votre entreprise
            </h2>

            <p>
              <strong>Économies :</strong> abonnements adaptés aux usages, alertes en cas de dépassement,
              forfaits DATA seuls possibles, leasing des smartphones pour éviter les achats coûteux.
            </p>

            <p>
              <strong>Simplicité :</strong> activation rapide des lignes, eSIM immédiate,
              portail de gestion clair, configuration prête à l’emploi, support unique.
            </p>

            <p>
              <strong>Fiabilité :</strong> réseau 4G/5G performant, roaming sécurisé, et smartphones supervisés pour éviter les risques.
            </p>

            {/* TABLEAU DES FORFAITS */}
            <h2 className="text-2xl font-semibold text-customblue mt-10">
              Forfaits mobiles professionnels
            </h2>

            <div className="overflow-x-auto mt-4">
              <table className="w-full border border-gray-200 rounded-lg overflow-hidden text-sm">
                <thead className="bg-gray-100 text-gray-700">
                  <tr>
                    <th className="px-4 py-3 text-left">Forfait</th>
                    <th className="px-4 py-3 text-left">Prix HT / mois</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3">VOIX / SMS / MMS – sans data</td>
                    <td className="px-4 py-3 font-semibold">5,5 €</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">VOIX / SMS / MMS + 1 Go</td>
                    <td className="px-4 py-3 font-semibold">6 €</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">VOIX / SMS / MMS + 5 Go</td>
                    <td className="px-4 py-3 font-semibold">8 €</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">VOIX / SMS / MMS + 20 Go (5G inclus)*</td>
                    <td className="px-4 py-3 font-semibold">12 €</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">VOIX / SMS / MMS + 50 Go (5G inclus)*</td>
                    <td className="px-4 py-3 font-semibold">16 €</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">VOIX / SMS / MMS + 100 Go (5G inclus)*</td>
                    <td className="px-4 py-3 font-semibold">21 €</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>

          {/* IMAGE */}
          <figure className="mt-10">
            <img
              src="/gsm.jpg"
              alt="Téléphonie mobile entreprise, gestion de flotte et MDM"
              width="1280"
              height="720"
              className="w-full max-w-4xl rounded-xl shadow-lg mx-auto object-cover"
              loading="lazy"
            />
            <figcaption className="text-sm text-gray-500 text-center mt-3">
              Gestion de flotte, sécurité MDM, eSIM, roaming et suivi de consommation en temps réel.
            </figcaption>
          </figure>

          {/* CTA */}
          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-block bg-customblue text-white px-5 py-3 rounded-lg"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </section>

      {/* VILLES */}
      <section className="py-12 bg-customblue2">
        <div className="container mx-auto px-6 grid lg:grid-cols-3 gap-8">
          
          {/* Colonne principale */}
          <div className="bg-white p-6 rounded-xl shadow lg:col-span-2">
            <h2 className="text-2xl font-semibold text-customblue">
              Villes desservies en Hauts-de-France
            </h2>
            <p className="text-gray-700 mt-2">
              Sélectionnez votre ville pour une page locale dédiée à la <strong>téléphonie mobile pro</strong>.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {CITIES.map((c) => (
                <Link
                  key={c.slug}
                  to={`/villes/${c.slug}/telephonie-mobile`}
                  className="inline-flex items-center justify-center h-11 px-4 text-sm rounded-full bg-gray-50 border border-gray-200 hover:bg-white hover:border-gray-300 text-gray-800"
                  aria-label={`Téléphonie mobile à ${c.name}`}
                >
                  Mobile pro à {c.name}
                </Link>
              ))}
            </div>

            <div className="mt-8">
              <Link to="/villes" className="text-customblue underline">
                Voir toutes les villes
              </Link>
            </div>
          </div>

          {/* Colonne latérale */}
          <aside className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-customblue">Accès rapide</h3>

            <ul className="mt-3 space-y-2">
              {["lille", "amiens", "roubaix", "tourcoing", "valenciennes", "arras"]
                .map((slug) => CITIES.find((c) => c.slug === slug))
                .filter(Boolean)
                .map((c) => (
                  <li key={c.slug}>
                    <Link
                      to={`/villes/${c.slug}/telephonie-mobile`}
                      className="underline text-gray-800 hover:opacity-80"
                    >
                      Mobile pro à {c.name}
                    </Link>
                  </li>
                ))}
            </ul>

            <div className="mt-6 border-t border-gray-100 pt-6">
              <p className="text-sm text-gray-600">
                Forfaits pro, eSIM, roaming, sécurité MDM, leasing smartphones et supervision des usages.
              </p>
              <Link
                to="/contact"
                className="mt-4 inline-flex justify-center w-full bg-customblue text-white px-4 py-2.5 rounded-md"
              >
                Obtenir une proposition
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
