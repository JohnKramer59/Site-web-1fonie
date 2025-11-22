// src/pages/services/PackOptimum.jsx
import React from "react";
import { Link } from "react-router-dom";
import Seo from "../../seo/Seo.jsx";
import { siteUrl } from "../../seo/schema.js";

export default function PackOptimum() {
  const title = "Pack Optimum – Cybersécurité avancée & surveillance 24/7 | 1FONIE Pro";
  const description =
    "Pack Optimum : SOC 24/7, analyse comportementale, tableaux de bord, coordination prestataires, protection renforcée et surveillance continue.";
  const canonical = `${siteUrl}/services/pack-optimum`;

  return (
    <main>
      <Seo title={title} description={description} canonical={canonical} />

      {/* HERO */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-customblue mb-4">
            Offre Pack Optimum
          </h1>

          <p className="text-gray-700 max-w-3xl">
            Le Pack Optimum apporte une cybersécurité de niveau entreprise : surveillance 24/7,
            réponse aux incidents en temps réel, analyse comportementale, coordination technique
            et reporting complet. Une protection maximale pour les structures qui ne peuvent se
            permettre aucune interruption.
          </p>

          {/* PRIX */}
          <div className="bg-gray-50 p-6 mt-8 rounded-xl max-w-3xl">
            <h2 className="text-2xl font-semibold text-customblue mb-2">
              À partir de <strong>89 € / poste / mois</strong>
            </h2>
            <p className="text-gray-700">
              Idéal pour les entreprises nécessitant un haut niveau de sécurité et de supervision.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENU */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-6 max-w-4xl space-y-14 text-gray-700 leading-relaxed">

          {/* SOC 24/7 */}
          <div>
            <h2 className="text-2xl font-semibold text-customblue mb-3">
              Surveillance et protection 24/7 (SOC)
            </h2>
            <p>
              Face aux cybermenaces actuelles, une protection classique ne suffit plus.
              Avec le Pack Optimum, vous bénéficiez d’un <strong>SOC (Security Operations Center)</strong>,
              un centre de cybersécurité dédié qui surveille votre système en continu.
            </p>
            <p className="mt-3">
              Nos analystes examinent en temps réel les journaux systèmes, détectent les comportements
              suspects et neutralisent les menaces avant qu’elles n’impactent votre activité.
              Intelligence artificielle, analyse comportementale et corrélation d’événements garantissent
              une protection maximale.
            </p>

            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Surveillance en temps réel 24/7, jours fériés inclus</li>
              <li>Analyse proactive pour anticiper les attaques</li>
              <li>Réponse immédiate aux incidents</li>
              <li>Protection continue des données et systèmes</li>
            </ul>
          </div>

          {/* TABLEAUX DE BORD */}
          <div>
            <h2 className="text-2xl font-semibold text-customblue mb-3">
              Rapports et tableaux de bord
            </h2>
            <p>
              Vous accédez à un tableau de bord complet regroupant toutes les informations liées à
              votre cybersécurité : alertes détectées, incidents bloqués, actions menées par nos experts,
              état global des postes et serveurs.
            </p>
            <p className="mt-3">
              Ce reporting transparent vous permet de suivre en temps réel la sécurité de votre
              infrastructure et de prendre des décisions éclairées.
            </p>
          </div>

          {/* COORDINATION PRESTATAIRES */}
          <div>
            <h2 className="text-2xl font-semibold text-customblue mb-3">
              Coordination prestataires & partenaires
            </h2>
            <p>
              Votre informatique implique plusieurs intervenants : hébergeur, éditeur métier, fournisseur
              télécom, prestataire réseau, expert-comptable… Pour éviter les erreurs et garantir une
              cohérence technique, nous assurons la coordination entre tous vos prestataires.
            </p>
            <p className="mt-3">
              Nous fournissons des outils sécurisés permettant de partager les bonnes informations,
              centraliser les interventions et garantir un environnement harmonisé et sécurisé.
            </p>
            <p className="mt-3">
              Chaque intervenant dispose d’un cadre clair, ce qui assure un fonctionnement optimal
              sans jamais compromettre l’intégrité de votre système.
            </p>
          </div>

        </div>
      </section>

      {/* IMAGE */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-6">
          <figure>
            <img
              src="/pcsecure.jpg"
              alt="Pack Optimum - Surveillance 24/7 et cybersécurité avancée"
              className="w-full max-w-4xl rounded-xl shadow-lg mx-auto object-cover"
              loading="lazy"
            />
            <figcaption className="text-sm text-gray-500 text-center mt-3">
              SOC 24/7, analyse comportementale, coordination prestataires : la cybersécurité de niveau entreprise.
            </figcaption>
          </figure>

          {/* CTA */}
          <div className="mt-10 text-center">
            <Link
              to="/contact"
              className="inline-block bg-customblue text-white px-6 py-3 rounded-lg font-semibold"
            >
              Demander une présentation du pack
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
