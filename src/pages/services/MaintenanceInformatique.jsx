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

          {/* ⭐ BOUTONS PACKS (TOP DE PAGE) */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link
              to="/services/pack-essentiel"
              className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg font-semibold text-center"
            >
              Voir le Pack Essentiel
            </Link>

            <Link
              to="/services/pack-optimum"
              className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-lg font-semibold text-center"
            >
              Voir le Pack Optimum
            </Link>
          </div>

          {/* CONTENU PRINCIPAL */}
          <div className="space-y-6 max-w-3xl text-gray-700 leading-relaxed">

            <p>
              Notre service de <strong>maintenance informatique</strong> permet aux TPE et PME de disposer
              d’un parc informatique stable, sécurisé et opérationnel en permanence.
              Nous gérons votre environnement en <strong>infogérance complète ou partagée</strong>,
              selon votre organisation.
            </p>

            <p>
              Grâce à la <strong>supervision 24/7</strong>, aux mises à jour automatiques,
              au <strong>antivirus EDR</strong> et à la <strong>sauvegarde externalisée</strong>,
              les pannes sont réduites au minimum et les données restent protégées.
              L’objectif : moins de problèmes, plus de productivité et un budget maîtrisé.
            </p>

            <h2 className="text-2xl font-semibold text-customblue mt-8">
              Les avantages pour votre entreprise
            </h2>

            <p><strong>Sérénité :</strong> vos postes, serveurs et Microsoft 365 sont surveillés en continu.</p>
            <p><strong>Réactivité :</strong> télémaintenance immédiate, déplacement si nécessaire.</p>
            <p><strong>Sécurité renforcée :</strong> antivirus EDR, durcissement, sauvegardes testées.</p>
            <p><strong>Maîtrise des coûts :</strong> contrat clair, sans surprise.</p>

            <h2 className="text-2xl font-semibold text-customblue mt-10">
              Support & dépannage rapide
            </h2>

            <p>
              Notre équipe traite les demandes via <strong>télémaintenance</strong>. Si nécessaire, un technicien se déplace selon vos <strong>SLA</strong>.
            </p>

            <p>
              Onboarding structuré : <strong>audit</strong>, inventaire, sécurisation,
              configuration Microsoft 365, mises à jour.
            </p>

            <p>
              Un <strong>reporting mensuel</strong> fournit une vision claire : incidents résolus,
              actions préventives, correctifs.
            </p>

            <h2 className="text-2xl font-semibold text-customblue mt-10">
              Modes d’accompagnement
            </h2>

            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Infogérance illimitée</strong></li>
              <li><strong>Contrat d’assistance</strong> à la demande</li>
              <li><strong>Modèle hybride</strong> préventif + curatif</li>
            </ul>

            <p className="mt-3">
              Engagements mesurables : baisse des incidents récurrents,
              <strong> rétablissement rapide</strong>, sauvegardes vérifiées.
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
              Supervision, sécurité EDR et maintenance proactive.
            </figcaption>
          </figure>

          {/* CTA PRINCIPAL */}
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
          
          <div className="bg-white p-6 rounded-xl shadow lg:col-span-2">
            <h2 className="text-2xl font-semibold text-customblue">
              Villes desservies en Hauts-de-France
            </h2>
            <p className="text-gray-700 mt-2">
              Sélectionnez votre ville pour la page locale dédiée à la <strong>maintenance informatique</strong>.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {CITIES.map((c) => (
                <Link
                  key={c.slug}
                  to={`/villes/${c.slug}/maintenance-informatique`}
                  className="inline-flex items-center justify-center h-11 px-4 text-sm rounded-full bg-gray-50 border border-gray-200 hover:bg-white hover:border-gray-300 text-gray-800"
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

          {/* Sidebar */}
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
                Support rapide, supervision continue, sécurité avancée.
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
