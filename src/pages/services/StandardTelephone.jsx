// src/pages/services/StandardTelephone.jsx
import React from "react";
import { Link } from "react-router-dom";
import Seo from "../../seo/Seo.jsx";
import { CITIES } from "../../seo/cities.js";
import { siteUrl } from "../../seo/schema.js";

export default function StandardTelephone() {
  const title = "Standard téléphonique VoIP / Centrex | 1FONIE Pro";
  const description =
    "Téléphonie IP entreprise : standard téléphonique, centrex cloud, IVR, files d’attente, enregistrement, softphone, portabilité, supervision.";
  const canonical = `${siteUrl}/services/standard-telephonique`;

  return (
    <main>
      <Seo title={title} description={description} canonical={canonical} />

      {/* NAVIGATION ENTRE SERVICES */}
      <section className="bg-white pt-10 pb-4">
        <div className="container mx-auto px-6 flex flex-wrap gap-3">

          {/* Actif = Standards Téléphoniques */}
          <Link
            to="/services/standard-telephonique"
            className="px-4 py-2 rounded-lg font-semibold text-white bg-orange-600 shadow"
          >
            Standards Téléphoniques
          </Link>

          <Link
            to="/services/telephonie-mobile"
            className="px-4 py-2 rounded-lg font-semibold bg-blue-100 text-blue-700 border border-blue-200"
          >
            Téléphonie Mobile
          </Link>

          <Link
            to="/services/maintenance-informatique"
            className="px-4 py-2 rounded-lg font-semibold bg-green-100 text-green-700 border border-green-200"
          >
            Maintenance Informatique
          </Link>

          <Link
            to="/services/internet-fibre"
            className="px-4 py-2 rounded-lg font-semibold bg-purple-100 text-purple-700 border border-purple-200"
          >
            Réseau & Connectivité
          </Link>

        </div>
      </section>

      {/* HERO + contenu */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-customblue mb-4">
            Standard téléphonique entreprise (VoIP / Centrex)
          </h1>

          <p className="text-gray-700 max-w-3xl leading-relaxed">
            Les standards téléphoniques Centrex permettent de remplacer les systèmes traditionnels
            par une solution moderne, économique et hébergée dans le cloud. Vous profitez d’une
            communication professionnelle plus fiable, plus simple à utiliser et avec des coûts
            parfaitement maîtrisés.
          </p>

          <p className="text-gray-700 max-w-3xl mt-4 leading-relaxed">
            Avec nos solutions VoIP, vous choisissez votre équipement : téléphones fixes IP,
            casques, applications PC (webapp) ou application mobile softphone. Chaque utilisateur
            gagne en flexibilité, où qu’il se trouve.
          </p>

          <p className="text-gray-700 max-w-3xl mt-4 leading-relaxed">
            Les serveurs vocaux interactifs (SVI), files d’attente, statistiques, enregistrement
            des appels, redirections intelligentes et supervision en temps réel permettent
            d’offrir un accueil professionnel optimal.
          </p>
        </div>
      </section>

      {/* ÉQUIPEMENTS & SOFTPHONES */}
      <section className="bg-white pb-12">
        <div className="container mx-auto px-6 max-w-4xl space-y-10 text-gray-700 leading-relaxed">

          <div>
            <h2 className="text-2xl font-semibold text-customblue mb-3">
              Téléphones fixes IP
            </h2>
            <p>
              Les téléphones fixes IP offrent une qualité audio HD, une fiabilité remarquable et une
              utilisation simple. Idéals pour les bureaux et les environnements de travail exigeants,
              ils garantissent une communication claire et stable en permanence.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-customblue mb-3">
              Application Web (PC / Navigateur)
            </h2>
            <p>
              Sans installation, votre poste téléphonique est accessible depuis un simple navigateur web.
              Vous passez vos appels, consultez vos messages, modifiez votre statut et gérez votre file
              d’attente en quelques clics.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-customblue mb-3">
              Softphone sur Smartphone
            </h2>
            <p>
              Votre ligne professionnelle est disponible directement sur votre smartphone, en France comme
              à l’étranger. Une solution parfaite pour les équipes en déplacement ou les télétravailleurs.
            </p>
          </div>
        </div>
      </section>

      {/* IMAGE */}
      <section className="pb-12 bg-white">
        <div className="container mx-auto px-6">
          <figure>
            <img
              src="/ipphone.jpg"
              alt="Standard téléphonique VoIP avec postes IP et softphone"
              className="w-full max-w-4xl rounded-xl shadow-lg mx-auto object-cover"
              loading="lazy"
            />
            <figcaption className="text-sm text-gray-500 text-center mt-3">
              SVI, files d’attente, enregistrement et softphone : une téléphonie d’entreprise moderne.
            </figcaption>
          </figure>

          <div className="mt-10 text-center">
            <Link
              to="/contact"
              className="inline-block bg-customblue text-white px-6 py-3 rounded-lg font-semibold"
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
              Sélectionnez votre ville pour découvrir votre page locale dédiée au
              <strong> standard téléphonique VoIP</strong>.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {CITIES.map((c) => (
                <Link
                  key={c.slug}
                  to={`/villes/${c.slug}/standard-telephonique`}
                  className="inline-flex items-center justify-center h-11 px-4 text-sm rounded-full bg-gray-50 border border-gray-200 hover:bg-white hover:border-gray-300 text-gray-800"
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

          {/* Colonne latérale */}
          <aside className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-customblue">Accès rapide</h3>

            <ul className="mt-3 space-y-2 text-gray-800">
              {["lille", "amiens", "roubaix", "tourcoing", "valenciennes", "arras"]
                .map((slug) => CITIES.find((c) => c.slug === slug))
                .filter(Boolean)
                .map((c) => (
                  <li key={c.slug}>
                    <Link
                      to={`/villes/${c.slug}/standard-telephonique`}
                      className="underline hover:opacity-80"
                    >
                      Standard à {c.name}
                    </Link>
                  </li>
                ))}
            </ul>

            <div className="mt-6 border-t border-gray-100 pt-6">
              <p className="text-sm text-gray-600">
                Migration PABX, portabilité, formations utilisateurs, supervision qualité voix.
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
