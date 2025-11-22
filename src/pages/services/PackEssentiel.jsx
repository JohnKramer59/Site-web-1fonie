// src/pages/services/PackEssentiel.jsx
import React from "react";
import { Link } from "react-router-dom";
import Seo from "../../seo/Seo.jsx";
import { siteUrl } from "../../seo/schema.js";

export default function PackEssentiel() {
  const title = "Pack Essentiel – Maintenance informatique & cybersécurité | 1FONIE Pro";
  const description =
    "Pack Essentiel : supervision 24/7, antivirus avancé, sauvegarde cloud, maintenance préventive, mises à jour, Zero Trust et formations cybersécurité.";
  const canonical = `${siteUrl}/services/pack-essentiel`;

  return (
    <main>
      <Seo title={title} description={description} canonical={canonical} />

      {/* HERO */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">

          <h1 className="text-4xl font-bold text-customblue mb-6">
            Offre Pack Essentiel
          </h1>

          {/* ⭐ Boutons : retour maintenance + aller au Pack Optimum */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link
              to="/services/maintenance-informatique"
              className="w-full sm:w-auto bg-gray-300 hover:bg-gray-400 text-gray-900 px-5 py-3 rounded-lg font-semibold text-center"
            >
              Retour à la maintenance
            </Link>

            <Link
              to="/services/pack-optimum"
              className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-lg font-semibold text-center"
            >
              Passer au Pack Optimum
            </Link>
          </div>

          <p className="text-gray-700 max-w-3xl">
            Le Pack Essentiel réunit toutes les protections indispensables pour les TPE/PME :
            supervision continue, maintenance préventive, sécurité avancée, sauvegarde cloud et
            sensibilisation cybersécurité. Une solution simple, complète et abordable pour un système
            informatique fiable et sécurisé.
          </p>

          {/* PRIX */}
          <div className="bg-gray-50 p-6 mt-8 rounded-xl max-w-3xl">
            <h2 className="text-2xl font-semibold text-customblue mb-2">
              À partir de <strong>48 € / poste / mois</strong>
            </h2>
            <p className="text-gray-700">
              Tarif valable pour une structure jusqu’à 10 postes. Sans engagement caché, sans surprise.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENU */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-6 max-w-4xl space-y-14 text-gray-700 leading-relaxed">

          {/* Supervision */}
          <div>
            <h2 className="text-2xl font-semibold text-customblue mb-3">
              Supervision en temps réel des équipements
            </h2>
            <p>
              La supervision en temps réel est essentielle pour garantir une infrastructure
              informatique performante et sécurisée. Nos outils de monitoring surveillent en continu
              l’état de vos équipements (postes, serveurs, routeurs, pare-feu) afin de détecter
              immédiatement toute anomalie ou menace.
            </p>
            <p className="mt-3">
              Grâce à cette surveillance proactive, nous anticipons les pannes, optimisons les performances
              et intervenons avant que les problèmes n’impactent l’activité. Vous bénéficiez d’une
              disponibilité maximale, sans gérer la technique.
            </p>
          </div>

          {/* Mises à jour */}
          <div>
            <h2 className="text-2xl font-semibold text-customblue mb-3">
              Suivi des mises à jour postes & serveurs
            </h2>
            <p>
              Des équipements mis à jour, c’est une sécurité renforcée et une stabilité optimale.
              Nous gérons l’ensemble des mises à jour critiques et correctifs de sécurité pour prévenir
              les failles exploitées par les cybercriminels.
            </p>
            <p className="mt-3">
              Notre système de déploiement automatisé applique les correctifs après validation de leur
              compatibilité, garantissant une sécurité continue sans interruption pour vos équipes.
            </p>
          </div>

          {/* Maintenance préventive */}
          <div>
            <h2 className="text-2xl font-semibold text-customblue mb-3">
              Maintenance préventive automatisée
            </h2>
            <p>
              La maintenance préventive analyse en continu l’état de vos équipements afin d’anticiper
              les défaillances matérielles ou logicielles. Nous intervenons avant qu’un incident ne
              bloque votre activité.
            </p>
            <p className="mt-3">
              Nettoyage, optimisation, surveillance des ressources critiques : tout est automatisé
              pour garantir un système fluide, réactif et durable.
            </p>
          </div>

          {/* Antivirus & ransomware */}
          <div>
            <h2 className="text-2xl font-semibold text-customblue mb-3">
              Antivirus nouvelle génération & détection ransomware
            </h2>
            <p>
              Nos solutions de sécurité utilisent l’intelligence artificielle et l’analyse comportementale
              pour bloquer les ransomwares et malwares dès les premiers signes suspects.
            </p>
            <p className="mt-3">
              En cas d’activité anormale, le fichier est isolé immédiatement afin d’éviter toute propagation.
              Vous bénéficiez d’une protection robuste et toujours à jour, sans ralentissement.
            </p>
          </div>

          {/* Sensibilisation */}
          <div>
            <h2 className="text-2xl font-semibold text-customblue mb-3">
              Sensibilisation à la cybersécurité
            </h2>
            <p>
              90 % des cyberattaques réussies commencent par une erreur humaine. Nous formons vos équipes
              aux bonnes pratiques : détection du phishing, mots de passe sécurisés, manipulation des données,
              réactions en cas d’incident.
            </p>
            <p className="mt-3">
              Grâce à des tests interactifs et des mises en situation concrètes, vos collaborateurs deviennent
              une véritable barrière contre les menaces numériques.
            </p>
          </div>

          {/* Zero Trust */}
          <div>
            <h2 className="text-2xl font-semibold text-customblue mb-3">
              1FONIE Protect – Sécurité Zero Trust
            </h2>
            <p>
              Avec notre solution Zero Trust, seules les applications autorisées peuvent s’exécuter. Toute
              application inconnue est bloquée par défaut, même si elle n’a jamais été identifiée comme une menace.
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Contrôle total sur les logiciels autorisés</li>
              <li>Blocage des menaces inconnues</li>
              <li>Protection anti-ransomware maximale</li>
              <li>Réduction drastique de la surface d’attaque</li>
            </ul>
          </div>

          {/* Sauvegarde */}
          <div>
            <h2 className="text-2xl font-semibold text-customblue mb-3">
              Sauvegarde image PC / Serveur dans le cloud
            </h2>
            <p>
              Une sauvegarde automatique toutes les 2 heures protège vos fichiers, bases de données et configurations
              système. Vos données sont chiffrées, stockées dans le cloud et restaurables en quelques minutes.
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Sauvegarde toutes les 2 heures</li>
              <li>Stockage chiffré et sécurisé</li>
              <li>Restauration rapide en cas d’incident</li>
              <li>Conformité totale aux normes de protection des données</li>
            </ul>
          </div>
        </div>
      </section>

      {/* IMAGE */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-6">
          <figure>
            <img
              src="/pcsecure.jpg"
              alt="Pack Essentiel - Maintenance informatique & cybersécurité"
              className="w-full max-w-4xl rounded-xl shadow-lg mx-auto object-cover"
              loading="lazy"
            />
            <figcaption className="text-sm text-gray-500 text-center mt-3">
              Supervision 24/7, sauvegarde, Zero Trust et sécurité avancée : le pack essentiel pour une informatique fiable.
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
