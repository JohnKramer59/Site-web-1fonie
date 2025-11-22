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

          <h1 className="text-4xl font-bold text-customblue mb-6">
            Offre Pack Optimum
          </h1>

          {/* ⭐ Boutons navigation croisée */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link
              to="/services/maintenance-informatique"
              className="w-full sm:w-auto bg-gray-300 hover:bg-gray-400 text-gray-900 px-5 py-3 rounded-lg font-semibold text-center"
            >
              Retour à la maintenance
            </Link>

            <Link
              to="/services/pack-essentiel"
              className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg font-semibold text-center"
            >
              Voir le Pack Essentiel
            </Link>
          </div>

          {/* Accroche marketing */}
          <p className="text-gray-700 max-w-3xl mb-6 leading-relaxed">
            <strong>
              Le Pack Optimum inclut tout le Pack Essentiel, mais va beaucoup plus loin :
              surveillance 24/7, SOC, analyse comportementale, coordination prestataires et
              reporting avancé. C’est la protection la plus complète pour les entreprises qui ne peuvent
              se permettre aucune interruption.
            </strong>
          </p>

          {/* Prix */}
          <div className="bg-gray-50 p-6 mt-6 rounded-xl max-w-3xl">
            <h2 className="text-2xl font-semibold text-customblue mb-2">
              À partir de <strong>89 € / poste / mois</strong>
            </h2>
            <p className="text-gray-700">
              Pour les structures nécessitant un niveau de cybersécurité premium et une supervision totale.
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
              Avec le Pack Optimum, vous bénéficiez d’un <strong>SOC</strong>, un centre de cybersécurité
              qui analyse en temps réel toutes les activités de votre système. Il détecte les intrusions,
              comportements suspects et tentatives d’attaque avant qu’elles n’impactent votre activité.
            </p>

            <p className="mt-3">
              Grâce à l’analyse comportementale, à l’IA et à la corrélation d’événements,
              vos systèmes sont protégés même contre les menaces inconnues.
            </p>

            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Surveillance continue 24/7, week-ends et jours fériés</li>
              <li>Détection proactive des menaces avancées</li>
              <li>Intervention immédiate en cas d’incident</li>
              <li>Protection renforcée des données et systèmes</li>
            </ul>
          </div>

          {/* RAPPORTS */}
          <div>
            <h2 className="text-2xl font-semibold text-customblue mb-3">
              Rapports et tableaux de bord
            </h2>

            <p>
              Un tableau de bord complet centralise toutes les informations : alertes, incidents bloqués,
              tendances de sécurité, statistiques, actions menées par nos analystes.
            </p>

            <p className="mt-3">
              Vous gardez une visibilité totale sur l’état de votre cybersécurité, en temps réel.
            </p>
          </div>

          {/* COORDINATION PRESTATAIRES */}
          <div>
            <h2 className="text-2xl font-semibold text-customblue mb-3">
              Coordination prestataires & partenaires
            </h2>

            <p>
              Votre entreprise repose sur plusieurs acteurs : logiciels métiers, hébergeur,
              opérateur fibre, fournisseur cloud, téléphonie… Le Pack Optimum inclut une
              coordination centralisée afin d’assurer une cohérence parfaite.
            </p>

            <p className="mt-3">
              Nous mettons en place des outils sécurisés pour fluidifier les échanges techniques,
              éviter les conflits entre prestataires et garantir un fonctionnement harmonieux.
            </p>

            <p className="mt-3">
              L’ensemble de votre écosystème informatique fonctionne ainsi dans un cadre
              sécurisé, contrôlé et parfaitement homogène.
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
              alt="Pack Optimum - Cybersécurité avancée"
              className="w-full max-w-4xl rounded-xl shadow-lg mx-auto object-cover"
              loading="lazy"
            />
            <figcaption className="text-sm text-gray-500 text-center mt-3">
              SOC, analyse comportementale et supervision complète.
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
