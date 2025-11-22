// src/pages/services/InternetFibre.jsx
import React from "react";
import { Link } from "react-router-dom";
import Seo from "../../seo/Seo.jsx";
import { CITIES } from "../../seo/cities.js";
import { siteUrl } from "../../seo/schema.js";

export default function InternetFibre() {
  const title = "Internet fibre & Réseau d’entreprise | 1FONIE Pro";
  const description =
    "Internet fibre pro FTTH/FTTO, réseau d’entreprise fiable, Wi-Fi 6/7, routeurs, sécurité et redondance 4G/5G. Réseau stable et sécurisé pour TPE/PME.";
  const canonical = `${siteUrl}/services/internet-fibre`;

  return (
    <main>
      <Seo title={title} description={description} canonical={canonical} />

      {/* HERO + CONTENU */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-customblue mb-6">
            Internet fibre & Réseau d’entreprise
          </h1>

          <div className="space-y-6 max-w-3xl text-gray-700 leading-relaxed">

            {/* INTRO SIMPLIFIÉE */}
            <p>
              Nous construisons pour votre entreprise une connexion <strong>Internet fiable</strong> et un
              <strong> réseau interne parfaitement stable</strong>. Que vous ayez besoin d’une fibre dédiée (FTTO) ou d’une
              fibre mutualisée pro (FTTH), nous dimensionnons l’installation selon vos usages et vos contraintes.
            </p>

            <p>
              Notre approche vise trois objectifs : <strong>rapidité</strong>, <strong>fiabilité</strong> et
              <strong> sécurité</strong>. Votre réseau devient un outil de travail performant, prêt pour la croissance
              de votre entreprise.
            </p>

            {/* AVANTAGES */}
            <h2 className="text-2xl font-semibold text-customblue mt-8">
              Les bénéfices pour votre entreprise
            </h2>

            <p>
              <strong>Stabilité :</strong> connexions fibre pro, IP fixe, débit garanti selon l’offre, performance constante.
            </p>

            <p>
              <strong>Continuité d’activité :</strong> redondance 4G/5G ou <strong>SD-WAN multi-liens</strong> avec bascule
              automatique en cas de coupure.
            </p>

            <p>
              <strong>Sécurité :</strong> pare-feu, segmentation réseau (VLAN), durcissement des configurations et
              surveillance du trafic.
            </p>

            <p>
              <strong>Productivité :</strong> Wi-Fi 6/7 rapide, couverture optimale et gestion centralisée des bornes.
            </p>

            {/* CONNECTIVITÉ FIBRE */}
            <h2 className="text-2xl font-semibold text-customblue mt-10">
              Connexion Internet professionnelle
            </h2>

            <p>
              Selon la taille de votre entreprise et vos besoins, nous proposons deux types d’accès :
            </p>

            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>FTTH Pro :</strong> fibre économique, très haut débit, idéale pour la majorité des PME.
              </li>
              <li>
                <strong>FTTO dédiée :</strong> lien professionnel garanti, symétrique, avec supervision et engagements forts (SLA).
              </li>
            </ul>

            <p>
              Chaque lien peut être configuré avec une <strong>IP fixe</strong>, indispensable pour la téléphonie VoIP,
              les VPN, les caméras ou les serveurs internes.
            </p>

            {/* RÉSEAU LOCAL & WI-FI */}
            <h2 className="text-2xl font-semibold text-customblue mt-10">
              Réseau interne & Wi-Fi professionnel
            </h2>

            <p>
              Nous installons un réseau local conçu pour durer : <strong>routeurs pro</strong>,
              <strong> switchs managés</strong>, segmentation <strong>VLAN</strong>, et <strong>QoS optimisée</strong> pour la téléphonie VoIP.
            </p>

            <p>
              Le <strong>Wi-Fi 6/7</strong> offre un signal stable, une meilleure portée et un débit très élevé,
              même en forte densité d’utilisateurs. Toutes les bornes sont contrôlées depuis une console unique.
            </p>

            {/* REDONDANCE ET SÉCURITÉ */}
            <h2 className="text-2xl font-semibold text-customblue mt-10">
              Redondance & sécurité réseau
            </h2>

            <p>
              Pour garantir votre activité même en cas de problème, nous mettons en place :
            </p>

            <ul className="list-disc pl-6 space-y-1">
              <li>Bascule automatique 4G/5G en cas de coupure fibre</li>
              <li>SD-WAN multi-liens pour cumuler plusieurs connexions</li>
              <li>Pare-feu professionnel et filtrage avancé</li>
              <li>Surveillance et alertes réseau en temps réel</li>
            </ul>

            {/* MÉTHODE DE DÉPLOIEMENT */}
            <h2 className="text-2xl font-semibold text-customblue mt-10">
              Déploiement & méthode de travail
            </h2>

            <p>
              Notre intervention suit un processus clair :
            </p>

            <ul className="list-disc pl-6 space-y-1">
              <li>Test d’éligibilité et <strong>étude de débit</strong></li>
              <li>Plan d’adressage et segmentation du réseau</li>
              <li>Installation des équipements (câblage, baie, routeur, switchs, bornes Wi-Fi)</li>
              <li>Recette de performance et documentation</li>
              <li><strong>Supervision</strong> continue pour garantir la stabilité</li>
            </ul>

            <p>
              Résultat : un réseau <strong>rapide</strong>, <strong>fiable</strong> et <strong>sécurisé</strong>,
              capable de supporter vos applications métier, votre téléphonie et la croissance de vos équipes.
            </p>
          </div>

          {/* IMAGE */}
          <figure className="mt-10">
            <img
              src="/baie.jpg"
              alt="Installation réseau professionnel, baie de brassage et fibre"
              width="1280"
              height="720"
              className="w-full max-w-4xl rounded-xl shadow-lg mx-auto object-cover"
              loading="lazy"
            />
            <figcaption className="text-sm text-gray-500 text-center mt-3">
              Fibre pro FTTH/FTTO, Wi-Fi 6/7, routeurs et redondance 4G/5G pour une entreprise toujours connectée.
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
              Sélectionnez votre ville pour la page locale dédiée à
              <strong> Internet fibre & réseau d’entreprise</strong>.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {CITIES.map((c) => (
                <Link
                  key={c.slug}
                  to={`/villes/${c.slug}/internet-fibre`}
                  className="inline-flex items-center justify-center h-11 px-4 text-sm rounded-full bg-gray-50 border border-gray-200 hover:bg-white hover:border-gray-300 text-gray-800"
                  aria-label={`Internet fibre & réseau à ${c.name}`}
                >
                  Internet & Réseau à {c.name}
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
                      to={`/villes/${c.slug}/internet-fibre`}
                      className="underline text-gray-800 hover:opacity-80"
                    >
                      Internet & Réseau à {c.name}
                    </Link>
                  </li>
                ))}
            </ul>

            <div className="mt-6 border-t border-gray-100 pt-6">
              <p className="text-sm text-gray-600">
                IP fixe, redondance, Wi-Fi pro, sécurité réseau et supervision 24/7.
              </p>
              <Link
                to="/contact"
                className="mt-4 inline-flex justify-center w-full bg-customblue text-white px-4 py-2.5 rounded-md"
              >
                Obtenir une étude d’éligibilité
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
