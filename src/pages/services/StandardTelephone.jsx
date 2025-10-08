import React from "react";
import { Link } from "react-router-dom";
import { CITIES } from "../../seo/cities.js";

export default function StandardTelephone() {
  return (
    <main>
      {/* Hero */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-customblue mb-4">
            Standard téléphonique VoIP / Centrex pour TPE/PME
          </h1>
          <p className="text-gray-700 max-w-3xl">
            Passez au standard cloud: SVI, files d’attente, enregistrement d’appels,
            softphone et intégration Teams. Déploiement rapide, coûts maîtrisés.
          </p>
        </div>
      </section>

      {/* Bénéfices */}
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

            <h3 className="text-xl font-semibold mt-8 text-customblue">Packs & fourchettes</h3>
            <div className="mt-3 grid md:grid-cols-3 gap-4">
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold">Essentiel</h4>
                <p className="text-sm text-gray-600 mt-1">SVI simple, softphone, enregistrement optionnel</p>
              </div>
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold">Avancé</h4>
                <p className="text-sm text-gray-600 mt-1">Files d’attente, groupes, rapports d’appels</p>
              </div>
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold">Entreprise</h4>
                <p className="text-sm text-gray-600 mt-1">Intégration Teams/CRM, enregistrement natif</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold mt-8 text-customblue">Déploiement & délais</h3>
            <ol className="mt-3 list-decimal ml-5 text-gray-700 space-y-1">
              <li>Qualification et numérotation</li>
              <li>Paramétrage SVI / files / SDA</li>
              <li>Tests QoS voix et recette</li>
              <li>Formation utilisateurs et mise en prod</li>
            </ol>

            <div className="mt-8">
              <Link to="/contact" className="inline-block bg-customblue text-white px-5 py-3 rounded-lg">
                Demander un devis
              </Link>
            </div>
          </div>

          {/* Maillage villes */}
          <aside className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-semibold text-customblue">Standard téléphonique par ville</h4>
            <ul className="mt-3 space-y-2 max-h-[420px] overflow-auto pr-2">
              {CITIES.map(c => (
                <li key={c.slug}>
                  <Link to={`/villes/${c.slug}/standard-telephonique`} className="underline text-gray-800 hover:opacity-80">
                    À {c.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <Link to="/villes" className="underline text-customblue">Voir toutes les villes</Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
