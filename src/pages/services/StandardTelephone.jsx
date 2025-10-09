// src/pages/services/StandardTelephone.jsx
import React from "react";
import { Link } from "react-router-dom";
import Seo from "../../seo/Seo.jsx";
import { CITIES } from "../../seo/cities.js";
import { siteUrl } from "../../seo/schema.js";

export default function StandardTelephone() {
  const title = "Standard téléphonique VoIP / Centrex | 1FONIE Pro";
  const description =
    "Téléphonie IP entreprise: standard téléphonique, centrex cloud, SVI, files d’attente, enregistrement d’appels, softphone, portabilité. Devis 24h.";
  const canonical = `${siteUrl}/services/standard-telephonique`;

  const P1 = (
    <p className="text-gray-700">
      Passez à un <strong>standard téléphonique</strong> moderne basé sur la <strong>téléphonie IP</strong> (<strong>VoIP</strong>).
      Nous déployons un <strong>centrex cloud</strong> (PBX hébergé) pour éliminer les matériels obsolètes, garantir la
      continuité d’activité et offrir un <strong>accueil téléphonique</strong> soigné. Postes IP, casques, <strong>softphone</strong> PC/mobile:
      vous choisissez le mix. Objectif: qualité de service, mobilité et coûts prévisibles.
    </p>
  );

  const P2 = (
    <p className="text-gray-700">
      Côté fonctionnalités: <strong>SVI</strong>, <strong>files d’attente</strong>, groupes, <strong>enregistrement d’appels</strong>,
      <strong> SDA</strong>, horaires et musiques, <strong>statistiques</strong> et supervision en temps réel.
      L’intégration <strong>Microsoft Teams</strong>/CRM et la <strong>QoS voix</strong> assurent productivité et fiabilité, y compris en
      télétravail. Administration simple, profils utilisateurs standardisés, droits par rôle.
    </p>
  );

  const P3 = (
    <p className="text-gray-700">
      Méthode de déploiement: audit rapide, <strong>migration PABX vers VoIP</strong>, <strong>portabilité des numéros</strong>,
      mise en service et formation. Packs/licences adaptés au volume d’appels et aux besoins d’agent.
      <strong> SLA voix</strong> et supervision continue. Résultat: image pro, décroché rapide, suivi de la qualité, et budget maîtrisé.
    </p>
  );

  return (
    <main>
      <Seo title={title} description={description} canonical={canonical} />

      {/* Hero + contenu */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-customblue mb-4">
            Standard téléphonique entreprise (VoIP / Centrex)
          </h1>

          <div className="space-y-4 max-w-3xl">
            {P1}
            {P2}
            {P3}
          </div>

          {/* Bloc visuel après les 3 paragraphes */}
          <figure className="mt-8">
            <img
              src="/ipphone.jpg"
              alt="Standard téléphonique VoIP avec postes IP et softphone"
              width="1280"
              height="720"
              className="w-full max-w-4xl rounded-xl shadow-lg mx-auto object-cover"
              loading="lazy"
            />
            <figcaption className="text-sm text-gray-500 text-center mt-3">
              SVI, files d’attente, enregistrement et softphone pour une téléphonie d’entreprise moderne.
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
              Sélectionnez votre ville pour la page locale dédiée au <strong>standard téléphonique</strong>.
            </p>

            {/* Grille de liens propre et régulière */}
            <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {CITIES.map((c) => (
                <Link
                  key={c.slug}
                  to={`/villes/${c.slug}/standard-telephonique`}
                  className="inline-flex items-center justify-center h-11 px-4 text-sm rounded-full bg-gray-50 border border-gray-200 hover:bg-white hover:border-gray-300 text-gray-800"
                  aria-label={`Standard téléphonique à ${c.name}`}
                >
                  Standard à {c.name}
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
                      to={`/villes/${c.slug}/standard-telephonique`}
                      className="underline text-gray-800 hover:opacity-80"
                    >
                      Standard à {c.name}
                    </Link>
                  </li>
                ))}
            </ul>

            <div className="mt-6 border-t border-gray-100 pt-6">
              <p className="text-sm text-gray-600">
                Portabilité de numéros, migration PABX, formation utilisateurs, supervision qualité voix.
              </p>
              <Link
                to="/contact"
                className="mt-4 inline-flex justify-center w-full bg-customblue text-white px-4 py-2.5 rounded-md"
              >
                Obtenir une estimation
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
