// src/pages/services/TelephonieMobile.jsx
import React from "react";
import { Link } from "react-router-dom";
import Seo from "../../seo/Seo.jsx";
import { CITIES } from "../../seo/cities.js";
import { siteUrl } from "../../seo/schema.js";

export default function TelephonieMobile() {
  const title = "Téléphonie mobile entreprise | 1FONIE Pro";
  const description =
    "Forfaits mobiles pro 4G/5G, eSIM, gestion de flotte, MDM, roaming, leasing terminaux et suivi de consommation. Déploiement rapide. Devis 24h.";
  const canonical = `${siteUrl}/services/telephonie-mobile`;

  const P1 = (
    <p className="text-gray-700">
      La <strong>téléphonie mobile entreprise</strong> doit être fiable, maîtrisée et adaptée aux usages terrain.
      Nous proposons des <strong>forfaits mobiles pro</strong> 4G/5G avec <strong>eSIM</strong> et options <strong>roaming</strong>,
      un APN pro si besoin, et un tableau de bord de <strong>suivi de consommation</strong> pour prévenir les dépassements.
      L’objectif: continuité de service, coûts prévisibles et une mise en service rapide pour chaque collaborateur.
    </p>
  );

  const P2 = (
    <p className="text-gray-700">
      La <strong>gestion de flotte</strong> centralise lignes, options et terminaux. Avec le <strong>MDM</strong> (Mobile Device
      Management), nous appliquons chiffrement, codes de verrouillage, inventaire, politiques d’apps et
      effacement à distance en cas de perte. Prise en charge BYOD ou terminaux dédiés, profils par métier,
      et automatisation de l’onboarding pour réduire les temps d’attente.
    </p>
  );

  const P3 = (
    <p className="text-gray-700">
      Côté matériel, nous fournissons un catalogue de smartphones avec <strong>leasing</strong> et SAV.
      Déploiement en 3 étapes: qualification des besoins, portabilité des numéros si nécessaire, puis
      configuration MDM et livraison prête à l’emploi. Résultat: une flotte homogène, sécurisée et pilotée,
      au service des usages de vos équipes.
    </p>
  );

  return (
    <main>
      <Seo title={title} description={description} canonical={canonical} />

      {/* Hero + contenu */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-customblue mb-4">
            Téléphonie mobile entreprise
          </h1>

          <div className="space-y-4 max-w-3xl">
            {P1}
            {P2}
            {P3}
          </div>

          {/* Image après les 3 paragraphes */}
          <figure className="mt-8">
            <img
              src="/gsm.jpg"
              alt="Gestion de flotte mobile, eSIM et MDM pour entreprises"
              width="1280"
              height="720"
              className="w-full max-w-4xl rounded-xl shadow-lg mx-auto object-cover"
              loading="lazy"
            />
            <figcaption className="text-sm text-gray-500 text-center mt-3">
              Forfaits 4G/5G, eSIM, MDM et suivi conso pour une flotte mobile maîtrisée.
            </figcaption>
          </figure>

          <div className="mt-8">
            <Link to="/contact" className="inline-block bg-customblue text-white px-5 py-3 rounded-lg">
              Demander un devis
            </Link>
          </div>
        </div>
      </section>

      {/* Villes — présentation épurée */}
      <section className="py-12 bg-customblue2">
        <div className="container mx-auto px-6 grid lg:grid-cols-3 gap-8">
          {/* Colonne principale */}
          <div className="bg-white p-6 rounded-xl shadow lg:col-span-2">
            <h2 className="text-2xl font-semibold text-customblue">
              Villes desservies en Hauts-de-France
            </h2>
            <p className="text-gray-700 mt-2">
              Sélectionnez votre ville pour la page locale dédiée à la <strong>téléphonie mobile pro</strong>.
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

          {/* Colonne latérale compacte */}
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
                Gestion de flotte, MDM, eSIM, roaming, monitoring des coûts et portabilité des numéros.
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
