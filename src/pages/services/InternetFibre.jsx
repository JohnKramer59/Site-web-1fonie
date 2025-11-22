// src/pages/services/InternetFibre.jsx
import React from "react";
import { Link } from "react-router-dom";
import Seo from "../../seo/Seo.jsx";
import { CITIES } from "../../seo/cities.js";
import { siteUrl } from "../../seo/schema.js";

export default function InternetFibre() {
  const title = "Internet fibre & Réseau d’entreprise | 1FONIE Pro";
  const description =
    "Fibre pro FTTH/FTTO, IP fixe, routeurs, Wi-Fi 6/7, redondance 4G/5G, SD-WAN, VLAN et supervision. Réseau fiable, sécurisé et performant.";
  const canonical = `${siteUrl}/services/internet-fibre`;

  return (
    <main>
      <Seo title={title} description={description} canonical={canonical} />

      {/* NAVIGATION ENTRE SERVICES */}
      <section className="bg-white pt-10 pb-4">
        <div className="container mx-auto px-6 flex flex-wrap gap-3">

          <Link
            to="/services/standard-telephonique"
            className="px-4 py-2 rounded-lg font-semibold bg-orange-100 text-orange-700 border border-orange-200"
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

          {/* Actif = Internet Fibre */}
          <Link
            to="/services/internet-fibre"
            className="px-4 py-2 rounded-lg font-semibold text-white bg-purple-600 shadow"
          >
            Réseau & Connectivité
          </Link>

        </div>
      </section>

      {/* HERO + CONTENU */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">

          <h1 className="text-4xl font-bold text-customblue mb-6">
            Internet fibre & Réseau d’entreprise
          </h1>

          <div className="space-y-6 max-w-3xl text-gray-700 leading-relaxed">

            <p>
              Nous dimensionnons votre <strong>accès Internet professionnel</strong> et votre
              <strong> réseau interne</strong> pour assurer performance, stabilité et sécurité. Fibre FTTH ou FTTO
              selon les besoins, avec <strong>IP fixe</strong> et garanties opérateur adaptées à vos usages.
            </p>

            <p>
              Côté réseau local (LAN), nous installons <strong>routeurs</strong>, <strong>switchs managés</strong>,
              <strong> VLAN</strong> pour segmenter les flux, et un <strong>monitoring avancé</strong> qui permet d’anticiper les
              saturations et incidents.
            </p>

            <h2 className="text-2xl font-semibold text-customblue mt-10">
              Continuité d’activité & sécurité réseau
            </h2>

            <p>
              Pour garantir la disponibilité, nous ajoutons une <strong>redondance 4G/5G</strong> ou
              un <strong>SD-WAN multi-liens</strong> qui prend automatiquement le relais en cas de coupure.
            </p>

            <p>
              Nous déployons un <strong>Wi-Fi 6/7 haute densité</strong> avec contrôleur centralisé et
              bornes PoE professionnelles. La <strong>QoS téléphonie</strong> assure une VoIP claire et sans coupure.
            </p>

            <p>
              L’ensemble du réseau est protégé par : pare-feu, filtrage, sécurité renforcée et durcissement
              des configurations.
            </p>

            <h2 className="text-2xl font-semibold text-customblue mt-10">
              Méthode de déploiement
            </h2>

            <ul className="list-disc pl-6 space-y-1">
              <li>Étude d’éligibilité & tests de débit</li>
              <li>Plan d’adressage & segmentation VLAN</li>
              <li>Installation baie / câblage si nécessaire</li>
              <li>Mise en service, configuration & recette</li>
              <li>Documentation complète & supervision</li>
            </ul>

            <p className="mt-3">
              Résultat : un réseau <strong>fiable</strong>, <strong>rapide</strong>,
              <strong> sécurisé</strong> et prêt à suivre la croissance de votre entreprise.
            </p>
          </div>

          {/* IMAGE */}
          <figure className="mt-10">
            <img
              src="/baie.jpg"
              alt="Baie de brassage et équipements réseau professionnels"
              width="1280"
              height="720"
              className="w-full max-w-4xl rounded-xl shadow-lg mx-auto object-cover"
              loading="lazy"
            />
            <figcaption className="text-sm text-gray-500 text-center mt-3">
              Fibre pro, SD-WAN, Wi-Fi 6/7, VLAN et supervision réseau.
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

          <div className="bg-white p-6 rounded-xl shadow lg:col-span-2">
            <h2 className="text-2xl font-semibold text-customblue">
              Villes desservies en Hauts-de-France
            </h2>

            <p className="text-gray-700 mt-2">
              Sélectionnez votre ville pour la page locale dédiée à <strong>Internet fibre & réseau</strong>.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {CITIES.map((c) => (
                <Link
                  key={c.slug}
                  to={`/villes/${c.slug}/internet-fibre`}
                  className="inline-flex items-center justify-center h-11 px-4 text-sm rounded-full bg-gray-50 border border-gray-200 hover:bg-white hover:border-gray-300 text-gray-800"
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
                IP fixe, SD-WAN, Wi-Fi 6/7, sécurité réseau et supervision.
              </p>
              <Link
                to="/contact"
                className="mt-4 inline-flex justify-center w-full bg-purple-600 text-white px-4 py-2.5 rounded-md"
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
