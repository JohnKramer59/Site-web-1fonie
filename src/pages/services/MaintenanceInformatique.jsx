// src/pages/services/MaintenanceInformatique.jsx
import React from "react";
import { Link } from "react-router-dom";
import Seo from "../../seo/Seo.jsx";
import { CITIES } from "../../seo/cities.js";
import { siteUrl } from "../../seo/schema.js";

export default function MaintenanceInformatique() {
  const title = "Maintenance informatique & infogérance | 1FONIE Pro";
  const description =
    "Maintenance informatique simple et fiable : supervision 24/7, télémaintenance, sécurité EDR, mises à jour, sauvegarde cloud et infogérance complète.";
  const canonical = `${siteUrl}/services/maintenance-informatique`;

  return (
    <main>
      <Seo title={title} description={description} canonical={canonical} />

      {/* HERO + CONTENU */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-customblue mb-6">
            Maintenance informatique / Infogérance
          </h1>

          <div className="space-y-6 max-w-3xl text-gray-700 leading-relaxed">

            {/* INTRO SIMPLIFIÉE */}
            <p>
              Notre service de <strong>maintenance informatique</strong> permet aux TPE et PME de disposer d’un parc
              informatique stable, sécurisé et opérationnel en permanence. Nous gérons votre environnement en
              <strong> infogérance complète ou partagée</strong>, selon votre organisation.
            </p>

            <p>
              Grâce à la <strong>supervision 24/7</strong>, aux mises à jour automatiques, au <strong>antivirus EDR</strong> et à la
              <strong> sauvegarde externalisée</strong>, les pannes sont réduites au minimum et les données restent protégées.
              L’objectif : moins de problèmes, plus de productivité et un budget maîtrisé.
            </p>

            {/* AVANTAGES */}
            <h2 className="text-2xl font-semibold text-customblue mt-8">
              Les avantages pour votre entreprise
            </h2>

            <p>
              <strong>Sérénité :</strong> vos postes, serveurs, outils Microsoft 365 et connexions sont surveillés en continu.
            </p>

            <p>
              <strong>Réactivité :</strong> prise en charge immédiate en télémaintenance, et intervention sur site si nécessaire.
            </p>

            <p>
              <strong>Sécurité renforcée :</strong> antivirus EDR, durcissement des postes, sauvegardes automatisées et tests réguliers.
            </p>

            <p>
              <strong>Maîtrise des coûts :</strong> contrat clair, forfait d’infogérance complet ou modèle à la demande.
            </p>

            {/* DÉPANNAGE ET HELP DESK */}
            <h2 className="text-2xl font-semibold text-customblue mt-10">
              Support & dépannage rapide
            </h2>

            <p>
              Notre équipe traite les demandes via <strong>télémaintenance</strong> pour une résolution rapide. Lorsque c’est
              nécessaire, un technicien se déplace dans vos locaux selon vos <strong>engagements SLA</strong>.
            </p>

            <p>
              Chaque nouveau client bénéficie d’un onboarding structuré : <strong>audit du parc</strong>, inventaire, sécurisation,
              configuration Microsoft 365, et mise à jour complète du matériel.
            </p>

            <p>
              Un <strong>reporting mensuel</strong> vous donne une vision claire : incidents résolus, actions préventives,
              correctifs, indicateurs de sécurité.
            </p>

            {/* LES FORMES D'ACCOMPAGNEMENT */}
            <h2 className="text-2xl font-semibold text-customblue mt-10">
              Trois modes d’accompagnement
            </h2>

            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Infogérance illimitée :</strong> prise en charge totale, interventions incluses.
              </li>
              <li>
                <strong>Contrat d’assistance :</strong> support à la demande, idéal pour les petites structures.
              </li>
              <li>
                <strong>Modèle hybride :</strong> prévention + interventions curatives selon votre volume.
              </li>
            </ul>

            <p>
              Dans tous les cas, nos engagements sont mesurables : baisse des incidents récurrents,
              <strong> temps de rétablissement réduit</strong>, sauvegardes testées et amélioration continue.
            </p>
          </div>

          {/* IMAGE */}
          <figure className="mt-10">
            <img
              src="/pcsecure.jpg"
              alt="Maintenance informatique, supervision et protection EDR"
              width="1280"
              height="720"
              className="w-full max-w-4xl rounded-xl shadow-lg mx-auto object-cover"
              loading="lazy"
            />
            <figcaption className="text-sm text-gray-500 text-center mt-3">
              Supervision, mises à jour et sécurité EDR pour un parc informatique parfaitement maîtrisé.
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
              Sélectionnez votre ville pour la page locale dédiée à la
              <strong> maintenance informatique</strong>.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {CITIES.map((c) => (
                <Link
                  key={c.slug}
                  to={`/villes/${c.slug}/maintenance-informatique`}
                  className="inline-flex items-center justify-center h-11 px-4 text-sm rounded-full bg-gray-50 border border-gray-200 hover:bg-white hover:border-gray-300 text-gray-800"
                  aria-label={`Maintenance informatique à ${c.name}`}
                >
                  Maintenance à {c.name}
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
                      to={`/villes/${c.slug}/maintenance-informatique`}
                      className="underline text-gray-800 hover:opacity-80"
                    >
                      Maintenance à {c.name}
                    </Link>
                  </li>
                ))}
            </ul>

            <div className="mt-6 border-t border-gray-100 pt-6">
              <p className="text-sm text-gray-600">
                Support rapide, supervision continue, sécurité avancée, dépannage à distance ou sur site.
              </p>
              <Link
                to="/contact"
                className="mt-4 inline-flex justify-center w-full bg-customblue text-white px-4 py-2.5 rounded-md"
              >
                Obtenir une étude gratuite
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
