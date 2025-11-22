import React from "react";

export default function Services() {
  const openServiceForm = (key) => {
    console.log("demande devis:", key);
  };

  return (
    <main className="bg-white">
      {/* Titre */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-customblue mb-4">
            Nos Services Spécialisés
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            1Fonie accompagne les TPE et PME dans l’installation et la maintenance de leur réseau informatique sécurisé
            (routeurs, switches, WiFi professionnel, téléphonie d’entreprise).
          </p>
        </div>
      </section>

      {/* Cartes services */}
      <section className="pb-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">

          {/* Standards Téléphoniques */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="bg-orange-100 p-4 rounded-lg mr-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-customblue">Standards Téléphoniques (Centrex)</h3>
            </div>

            <img
              src="https://www.yealink.com/website-service/attachment/editor/upload/image/20240927/1727406300006080457.jpg"
              alt="Standards téléphoniques"
              className="w-full h-48 object-cover rounded-lg mb-6"
              loading="lazy"
            />

            <p className="text-gray-700 mb-6">
              Modernisez vos communications d’entreprise avec nos solutions Centrex cloud &amp; IP : des fonctionnalités avancées pour une efficacité optimale.
            </p>

            <ul className="space-y-2 mb-8 text-gray-700">
              <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>Installation et configuration de centraux téléphoniques</li>
              <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>Solutions VoIP et téléphonie IP</li>
              <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>Serveurs vocaux interactifs (SVI)</li>
              <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>Formation utilisateurs et support technique</li>
            </ul>

            <a
              href="/services/StandardTelephone.jsx"
              className="w-full block bg-orange-300 text-white px-6 py-3 rounded-lg hover:bg-orange-400 font-semibold mb-3 text-center"
            >
              En savoir plus
            </a>

            <button
              onClick={() => openServiceForm("telephone_systems")}
              className="w-full bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 font-semibold"
            >
              Demander un Devis
            </button>
          </div>

          {/* Téléphonie Mobile */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-4 rounded-lg mr-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 2h10a2 2 0 012 2v16a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 18h2" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-customblue">Téléphonie Mobile</h3>
            </div>

            <img src="/gsm.jpg" alt="Service GSM" className="w-full h-48 object-cover rounded-lg mb-6" loading="lazy" />

            <p className="text-gray-700 mb-6">
              Boostez la mobilité et la performance de votre entreprise grâce à nos solutions de téléphonie mobile professionnelles, flexibles et évolutives.
            </p>

            <ul className="space-y-2 mb-8 text-gray-700">
              <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>Suivi conso en temps réel</li>
              <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>Forfaits DATA seuls possibles</li>
              <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>Option 5G sans surcoût</li>
              <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>Téléphones en leasing</li>
            </ul>

            <a
              href="/services/TelephonieMobile"
              className="w-full block bg-blue-300 text-white px-6 py-3 rounded-lg hover:bg-blue-400 font-semibold mb-3 text-center"
            >
              En savoir plus
            </a>

            <button
              onClick={() => openServiceForm("mobile_telephony")}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold"
            >
              Demander un Devis
            </button>
          </div>

          {/* Maintenance Informatique */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-4 rounded-lg mr-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-customblue">Maintenance Informatique</h3>
            </div>

            <img src="/pcsecure.jpg" alt="Maintenance Informatique" className="w-full h-48 object-cover rounded-lg mb-6" loading="lazy" />

            <p className="text-gray-700 mb-6">
              Assurez la continuité de votre activité grâce à une maintenance préventive et curative menée par des experts.
            </p>

            <ul className="space-y-2 mb-8 text-gray-700">
              <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>Supervision et monitoring 24/7</li>
              <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>Maintenance préventive</li>
              <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>Mises à jour et durcissement</li>
              <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>Assistance / Télémaintenance</li>
              <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>Protection antivirus avancée</li>
              <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>Sensibilisation cybersécurité</li>
            </ul>

            <a
              href="/services/maintenance-informatique"
              className="w-full block bg-green-300 text-white px-6 py-3 rounded-lg hover:bg-green-400 font-semibold mb-3 text-center"
            >
              En savoir plus
            </a>

            <button
              onClick={() => openServiceForm("network_maintenance")}
              className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 font-semibold"
            >
              Demander un Devis
            </button>
          </div>

          {/* Réseau, Internet & Connectivité */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="bg-purple-100 p-4 rounded-lg mr-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round"
                        d="M7 10V6a1 1 0 011-1h8a1 1 0 011 1v4M12 16v-4M16 16v-4M8 16v-4M4 20h16" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-customblue">Réseau, Internet &amp; Connectivité</h3>
            </div>

            <img src="/baie.jpg" alt="Réseau et connectivité" className="w-full h-48 object-cover rounded-lg mb-6" loading="lazy" />

            <p className="text-gray-700 mb-6">
              Connectez vos bureaux et sites distants en sécurité avec des solutions sur mesure. Réseau fiable, rapide et évolutif.
            </p>

            <ul className="space-y-2 mb-8 text-gray-700">
              <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>FTTH / FTTO avec IP fixes</li>
              <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>Routeurs, switchs, bornes Wi-Fi monitorés</li>
              <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>Wi-Fi 6 / 7 optimisé</li>
              <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>Formation et support</li>
              <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>Accès distant sécurisé</li>
              <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>Baie de brassage sécurisée</li>
            </ul>

            <a
              href="/services/reseau-connectivite"
              className="w-full block bg-purple-300 text-white px-6 py-3 rounded-lg hover:bg-purple-400 font-semibold mb-3 text-center"
            >
              En savoir plus
            </a>

            <button
              onClick={() => openServiceForm("network_connectivity")}
              className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 font-semibold"
            >
              Demander un Devis
            </button>
          </div>

        </div>
      </section>
    </main>
  );
}
