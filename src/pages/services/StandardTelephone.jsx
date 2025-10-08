import React from "react";
import { Link } from "react-router-dom";
import Seo from "../../seo/Seo.jsx";
import { CITIES } from "../../seo/cities.js";
import { serviceSchema, siteUrl } from "../../seo/schema.js";

export default function StandardTelephone() {
  const title = "Standard téléphonique VoIP/Centrex | 1FONIE Pro";
  const description = "SVI, enregistrement, files d’attente, softphone et Teams. Déploiement rapide pour TPE/PME en Hauts-de-France.";
  const canonical = `${siteUrl}/services/standard-telephonique`;
  const jsonLd = serviceSchema({
    name: "Standard téléphonique VoIP / Centrex",
    description,
    areaServed: "Hauts-de-France",
  });

  return (
    <main>
      <Seo title={title} description={description} canonical={canonical} jsonLd={jsonLd} />

      {/* Hero */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-customblue mb-4">Standard téléphonique VoIP / Centrex pour TPE/PME</h1>
          <p className="text-gray-700 max-w-3xl">Passez au standard cloud: SVI, files d’attente, enregistrement d’appels, softphone et intégration Teams. Déploiement rapide, coûts maîtrisés.</p>
        </div>
      </section>

      {/* Contenu + maillage */}
      <section className="py-12 bg-customblue2">
        <div className="container mx-auto px-6 grid lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow lg:col-span-2">
            <h2 className="text-2xl font-semibold text-customblue">Bénéfices clés</h2>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>• Accueil professionnel: SVI, SDA, musiques, horaires</li>
              <li>• Mobilité: softphone PC/mobile, télétravail natif</li>
              <li>• Contrôle qualité: enregistrement, statistiques, supervision</li>
              <li>• Économie: pas de PABX à maintenir, abonnement prévisible</li>
              <li>• Fiabilité voix: priorisation QoS, surveillance proactive</li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 text-customblue">Packs</h3>
            <div className="mt-3 grid md:grid-cols-3 gap-4">
              <div className="border rounded-lg p-4"><h4 className="font-semibold">Essentiel</h4><p className="text-sm text-gray-600 mt-1">SVI simple, softphone</p></div>
              <div className="border rounded-lg p-4"><h4 className="font-semibold">Avancé</h4><p className="text-sm text-gray-600 mt-1">Files d’attente, rapports</p></div>
              <div className="border rounded-lg p-4"><h4 className="font-semibold">Entreprise</h4><p className="text-sm text-gray-600 mt-1">Intégrations + enregistrement</p></div>
            </div>

            <div className="mt-8">
              <Link to="/contact" className="inline-block bg-customblue text-white px-5 py-3 rounded-lg">Demander un devis</Link>
            </div>
          </div>

          <aside className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-semibold text-customblue">Standard téléphonique par ville</h4>
            <ul className="mt-3 space-y-2 max-h-[420px] overflow-auto pr-2">
              {CITIES.map(c => (
                <li key={c.slug}>
                  <Link to={`/villes/${c.slug}/standard-telephonique`} className="underline text-gray-800 hover:opacity-80">À {c.name}</Link>
                </li>
              ))}
            </ul>
            <div className="mt-4"><Link to="/villes" className="underline text-customblue">Voir toutes les villes</Link></div>
          </aside>
        </div>
      </section>
    </main>
  );
}
