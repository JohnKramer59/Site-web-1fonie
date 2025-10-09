import React from "react";
import { Link } from "react-router-dom";
import Seo from "../../seo/Seo.jsx";
import { CITIES } from "../../seo/cities.js";
import { siteUrl } from "../../seo/schema.js";

export default function MaintenanceInformatique() {
  const title = "Maintenance informatique & infogérance | 1FONIE Pro";
  const description =
    "Contrat de maintenance informatique, infogérance TPE/PME, dépannage informatique, supervision 24/7, EDR, sauvegarde externalisée. Devis 24h.";
  const canonical = `${siteUrl}/services/maintenance-informatique`;

  const P1 = (
    <p className="text-gray-700">
      Notre offre de <strong>maintenance informatique</strong> s’adresse aux TPE/PME qui veulent un SI stable et
      prévisible. Nous opérons en <strong>infogérance</strong> complète ou partagée, avec un{" "}
      <strong>contrat de maintenance informatique</strong> clair: périmètre, responsabilités, niveaux de service. La
      <strong> supervision 24/7</strong>, le <strong>patch management</strong>, l’<strong>antivirus EDR</strong> et la{" "}
      <strong>sauvegarde externalisée</strong> réduisent les incidents et sécurisent postes, serveurs et Microsoft&nbsp;365.
      Objectif: disponibilité élevée, tickets en baisse, coût maîtrisé.
    </p>
  );

  const P2 = (
    <p className="text-gray-700">
      En pratique, nous gérons le <strong>dépannage informatique</strong> via <strong>télémaintenance</strong> et
      <strong> intervention sur site</strong> selon vos <strong>SLA</strong>. Onboarding structuré: <strong>audit du parc</strong>,
      inventaire, durcissement sécurité, politiques M365, plan de <strong>mise à jour</strong>. Le{" "}
      <strong>helpdesk</strong> traite les demandes utilisateurs, et un <strong>reporting mensuel</strong> suit incidents,
      correctifs et prévention. Vous conservez la visibilité, nous prenons la charge opérationnelle.
    </p>
  );

  const P3 = (
    <p className="text-gray-700">
      Trois modes: <strong>forfait d’infogérance</strong> illimitée, <strong>contrat d’assistance</strong> à tickets,
      ou modèle hybride préventif/curatif. Engagements mesurables: baisse des tickets récurrents,{" "}
      <strong>temps de rétablissement</strong> réduit, conformité sauvegardes testées. Vous gagnez en sérénité tout en
      gardant un budget lisible et une montée en maturité progressive.
    </p>
  );

  return (
    <main>
      <Seo title={title} description={description} canonical={canonical} />

      {/* Hero + contenu */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-customblue mb-4">
            Maintenance informatique / Infogérance
          </h1>

          <div className="space-y-4 max-w-3xl">
            {P1}
            {P2}
          </div>

          {/* Bloc visuel central */}
          <figure className="mt-8">
            <img
              src="/pcsecure.jpg"
              alt="Supervision 24/7 et protection des postes en entreprise"
              width="1280"
              height="720"
              className="w-full max-w-4xl rounded-xl shadow-lg mx-auto object-cover"
              loading="lazy"
            />
            <figcaption className="text-sm text-gray-500 text-center mt-3">
              Supervision, mises à jour et sécurité EDR pour un parc maîtrisé.
            </figcaption>
          </figure>

          <div className="space-y-4 max-w-3xl mt-8">
            {P3}
          </div>

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
              Sélectionnez votre ville pour la page locale dédiée à la <strong>maintenance informatique</strong>.
            </p>

            {/* Grille de liens propre et régulière */}
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
                Dépannage urgent ou contrat d’infogérance. Télémaintenance immédiate ou déplacement planifié.
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
