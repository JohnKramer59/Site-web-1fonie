// src/pages/services/StandardTelephone.jsx
import React from "react";
import { Link } from "react-router-dom";
import Seo from "../../seo/Seo.jsx";
import { CITIES } from "../../seo/cities.js";
import { siteUrl } from "../../seo/schema.js";

export default function StandardTelephone() {
  const title = "Standard téléphonique VoIP / Centrex | 1FONIE Pro";
  const description =
    "Solution Centrex simple et fiable : économies, téléphones IP, application PC et mobile, qualité d’appel, SVI et files d’attente. Téléphonie d’entreprise moderne.";
  const canonical = `${siteUrl}/services/standard-telephonique`;

  return (
    <main>
      <Seo title={title} description={description} canonical={canonical} />

      {/* HERO + CONTENU */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-customblue mb-6">
            Standard téléphonique entreprise (VoIP / Centrex)
          </h1>

          <div className="space-y-6 max-w-3xl text-gray-700 leading-relaxed">
            {/* INTRO SIMPLIFIÉE */}
            <p>
              Notre solution Centrex remplace les anciens standards téléphoniques par un système moderne hébergé dans le cloud.
              Elle permet de réduire les coûts, de simplifier l’utilisation et de garantir une téléphonie fiable et toujours disponible.
              Vous conservez votre numéro et profitez d’un accueil professionnel accessible à tous.
            </p>

            {/* AVANTAGES */}
            <h2 className="text-2xl font-semibold text-customblue mt-6">
              Pourquoi choisir la téléphonie Centrex ?
            </h2>

            <p>
              <strong>Économies :</strong> plus d’achat de matériel PABX, pas d’entretien complexe, abonnements clairs et prévisibles.
            </p>
            <p>
              <strong>Simplicité :</strong> interface intuitive, installation rapide, gestion des utilisateurs en quelques clics.
            </p>
            <p>
              <strong>Fiabilité :</strong> serveurs redondés, supervision continue et excellente qualité d’appel grâce à la VoIP professionnelle.
            </p>

            {/* 3 MODES D’UTILISATION */}
            <h2 className="text-2xl font-semibold text-customblue mt-10">
              Trois façons d’utiliser votre téléphonie
            </h2>

            {/* Téléphones fixes */}
            <h3 className="text-xl font-semibold text-customblue">1. Téléphones fixes IP</h3>
            <p>
              Les postes IP remplacent vos téléphones classiques avec une prise en main identique, mais avec davantage de possibilités.
              Ils offrent une excellente qualité audio et s’installent simplement : un câble suffit. Ils sont parfaits pour les bureaux,
              l’accueil ou les plateaux d’appels.
            </p>

            {/* WebApp PC */}
            <h3 className="text-xl font-semibold text-customblue mt-6">2. Application Web sur PC (WebApp)</h3>
            <p>
              Pas besoin d’installer un logiciel : vous ouvrez votre navigateur et vous passez vos appels depuis votre ordinateur.
              L’interface est simple et permet d'accéder au carnet d’adresses, à l’historique, aux messages vocaux et aux files d’attente.
              Idéal aussi pour le télétravail : un casque suffit.
            </p>

            {/* Mobile Softphone */}
            <h3 className="text-xl font-semibold text-customblue mt-6">3. Application mobile (softphone GSM)</h3>
            <p>
              Votre numéro professionnel devient accessible depuis votre smartphone Android ou iPhone. Vous pouvez appeler, transférer,
              recevoir vos files d’attente ou consulter votre présence, même en déplacement. Un outil indispensable pour les équipes
              mobiles ou en astreinte.
            </p>

            {/* FONCTIONNALITÉS */}
            <h2 className="text-2xl font-semibold text-customblue mt-10">
              Fonctionnalités incluses
            </h2>

            <ul className="list-disc pl-6 space-y-1">
              <li>Serveur vocal interactif (SVI)</li>
              <li>Files d’attente et groupes d’appels</li>
              <li>Enregistrement des conversations</li>
              <li>Numéros directs (SDA)</li>
              <li>Horaires automatiques et musiques personnalisées</li>
              <li>Statistiques détaillées et supervision en temps réel</li>
              <li>Intégration CRM et Microsoft Teams</li>
              <li>Qualité de service optimisée pour la voix</li>
            </ul>

            {/* DÉPLOIEMENT */}
            <h2 className="text-2xl font-semibold text-customblue mt-10">
              Déploiement simple et rapide
            </h2>
            <p>
              Nous réalisons un audit rapide, la migration de votre ancien PABX vers la VoIP, la portabilité de vos numéros,
              puis la mise en service accompagnée d’une formation. Votre téléphonie est supervisée en continu pour garantir une
              qualité d’appel optimale.
            </p>
          </div>

          {/* IMAGE */}
          <figure className="mt-10">
            <img
              src="/ipphone.jpg"
              alt="Téléphonie Centrex avec postes IP et softphone"
              width="1280"
              height="720"
              className="w-full max-w-4xl rounded-xl shadow-lg mx-auto object-cover"
              loading="lazy"
            />
            <figcaption className="text-sm text-gray-500 text-center mt-3">
              Standard Centrex : téléphones IP, application PC et mobile pour une téléphonie moderne.
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
              Sélectionnez votre ville pour la page locale dédiée au
              <strong> standard téléphonique</strong>.
            </p>

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
                Portabilité des numéros, migration PABX, formation utilisateurs et supervision qualité voix.
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
