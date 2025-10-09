// src/pages/services/InternetFibre.jsx
import React from "react";
import { Link } from "react-router-dom";
import Seo from "../../seo/Seo.jsx";
import { CITIES } from "../../seo/cities.js";
import { siteUrl } from "../../seo/schema.js";

export default function InternetFibre() {
  const title = "Internet fibre & Réseau d’entreprise | 1FONIE Pro";
  const description =
    "Fibre pro FTTH/FTTO, IP fixe, routeurs, SD-WAN, redondance 4G/5G, Wi-Fi 6/7, VLAN et supervision. Réseau fiable pour TPE/PME. Devis 24h.";
  const canonical = `${siteUrl}/services/internet-fibre`;

  const P1 = (
    <p className="text-gray-700">
      Nous dimensionnons votre <strong>accès Internet professionnel</strong> et votre <strong>réseau d’entreprise</strong>
      pour la performance et la disponibilité. Selon les usages, nous proposons <strong>FTTH pro</strong> ou{" "}
      <strong>FTTO</strong> dédiée avec <strong>IP fixe</strong> et garanties adaptées. Côté LAN, nous déployons{" "}
      <strong>routeurs</strong> et <strong>switchs managés</strong>, <strong>VLAN</strong> pour segmenter les flux, et{" "}
      <strong>monitoring</strong> pour prévenir incidents et saturations.
    </p>
  );

  const P2 = (
    <p className="text-gray-700">
      Pour la continuité d’activité, nous mettons en place la <strong>redondance 4G/5G</strong> ou un{" "}
      <strong>SD-WAN multi-liens</strong> qui bascule automatiquement en cas de coupure. Le <strong>Wi-Fi 6/7</strong> est
      conçu pour une densité d’utilisateurs élevée, avec contrôleur et <strong>bornes PoE</strong>. La{" "}
      <strong>QoS téléphonie</strong> protège la voix sur IP, et la sécurité réseau inclut pare-feu,
      filtrage, et durcissement des configurations.
    </p>
  );

  const P3 = (
    <p className="text-gray-700">
      Méthode: éligibilité et <strong>étude de débit</strong>, plan d’adressage, déploiement câblage/baie si besoin,
      installation et recette de performances. Documentation et <strong>supervision</strong> assurent la visibilité au
      quotidien. Résultat: un réseau <strong>fiable</strong>, <strong>scalable</strong> et <strong>sécurisé</strong>, prêt
      pour vos applications métiers et la croissance de votre entreprise.
    </p>
  );

  return (
    <main>
      <Seo title={title} description={description} canonical={canonical} />

      {/* Hero + contenu */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-customblue mb-4">
            Internet fibre & Réseau d’entreprise
          </h1>

          <div className="space-y-4 max-w-3xl">
            {P1}
            {P2}
            {P3}
          </div>

          {/* Image après les 3 paragraphes */}
          <figure className="mt-8">
            <img
              src="/baie.jpg"
              alt="Baie de brassage et équipements réseau professionnels"
              width="1280"
              height="720"
              className="w-full max-w-4xl rounded-xl shadow-lg mx-auto object-cover"
              loading="lazy"
            />
            <figcaption className="text-sm text-gray-500 text-center mt-3">
              FTTH/FTTO, routeurs pro, SD-WAN et Wi-Fi 6/7 pour un réseau fiable et sécurisé.
            </figcaption>
          </figure>

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
              Sélectionnez votre ville pour la page locale dédiée à <strong>Internet fibre & réseau</strong>.
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
                IP fixe, QoS voix, redondance 4G/5G, contrôleur Wi-Fi, supervision réseau.
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
