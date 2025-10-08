import React from "react";
import Seo from "../seo/Seo.jsx";
import { organizationSchema } from "../seo/schema.js";
import { siteUrl } from "../seo/schema.js";

export default function Home() {
  const title = "Téléphonie IP, Réseau & Maintenance | 1FONIE Pro";
  const description = "Solutions pour TPE/PME: standard téléphonique, maintenance informatique, téléphonie mobile, Internet fibre. Hauts-de-France. Devis 24h.";
  const canonical = `${siteUrl}/`;

  return (
    <main>
      <Seo title={title} description={description} canonical={canonical} jsonLd={organizationSchema()} />

      {/* Hero Section */}
      <section className="bg-customblue2 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Notre métier : veiller sur votre sécurité digitale.</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Votre infrastructure réseau entre de bonnes mains :<br /> nous vous accompagnons pour réussir votre transformation digitale durablement.
          </p>
          <div className="flex justify-center items-center">
            <video src="video.mp4" autoPlay loop muted playsInline className="h-64 md:h-80 w-full max-w-4xl rounded-xl shadow-lg" />
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-customblue mb-4">Pourquoi Choisir 1FONIE Pro ?</h2>
            <p className="text-xl text-customblue max-w-2xl mx-auto">Plus de 15 ans d'expérience au service des entreprises</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Expertise Reconnue</h3>
              <p className="text-gray-600">Certifications constructeurs et équipe d'experts qualifiés</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Réactivité</h3>
              <p className="text-gray-600">Support technique disponible et interventions rapides</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Solutions Sur Mesure</h3>
              <p className="text-gray-600">Approche personnalisée selon vos besoins spécifiques</p>
            </div>
          </div>
        </div>
      </section>

      {/* Configuration Type TPE/PME */}
      <section id="configuration" className="py-20 bg-customblue2">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-customblue mb-4">Configuration Type TPE/PME</h2>
            <p className="text-xl text-customblue max-w-3xl mx-auto">Exemple d'architecture réseau jusqu'à 50 employés</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-center mb-8 text-blue-900">Architecture Réseau Recommandée</h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="text-left">
                  <div className="bg-blue-100 p-6 rounded-lg mb-4">
                    <div className="bg-blue-600 text-white p-4 rounded-lg mb-4 font-bold text-lg">INTERNET / WAN</div>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div>• Fibre optique</div><div>• IP fixe</div><div>• Redondance 4G</div>
                    </div>
                  </div>
                </div>
                <div className="text-left">
                  <div className="bg-green-100 p-6 rounded-lg mb-4">
                    <div className="bg-green-600 text-white p-4 rounded-lg mb-4 font-bold text-lg">ROUTEUR / FIREWALL</div>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div>• Sécurité avancée</div><div>• VPN d'entreprise</div><div>• QoS téléphonie</div>
                    </div>
                  </div>
                </div>
                <div className="text-left">
                  <div className="bg-purple-100 p-6 rounded-lg mb-4">
                    <div className="bg-purple-600 text-white p-4 rounded-lg mb-4 font-bold text-lg">SWITCH PRINCIPAL</div>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div>• Ports Gigabit</div><div>• PoE+ pour téléphones / Caméras</div><div>• VLAN segmentation</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="text-xl font-bold text-center mb-8 text-gray-900">Équipements Connectés</h4>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <div className="bg-blue-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <h5 className="font-bold mb-2 text-left">Téléphones IP</h5>
                    <div className="text-sm text-gray-600 text-left"><div>• Téléphones IP</div><div>• PoE alimentés</div><div>• HD Audio</div></div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <div className="bg-green-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <h5 className="font-bold mb-2 text-left">Postes de Travail</h5>
                    <div className="text-sm text-gray-600 text-left"><div>• PC fixes</div><div>• portables</div><div>• WiFi 6 ou 7</div></div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <div className="bg-orange-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                    </div>
                    <h5 className="font-bold mb-2 text-left">Caméras IP</h5>
                    <div className="text-sm text-gray-600 text-left"><div>• caméras IP HD</div><div>• PoE+</div><div>• Vision nocturne</div></div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <div className="bg-red-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" /></svg>
                    </div>
                    <h5 className="font-bold mb-2 text-left">Serveurs</h5>
                    <div className="text-sm text-gray-600 text-left"><div>• Serveur principal</div><div>• Serveur sauvegarde</div><div>• NAS entreprise</div></div>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-white p-8 rounded-lg">
                <h4 className="text-xl font-bold mb-6 text-center text-gray-900">Avantages de cette Configuration</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3"><span className="text-green-500 text-xl">✓</span><div><h5 className="font-semibold">Sécurité Maximale</h5><p className="text-gray-600 text-sm">Firewall, VPN, segmentation VLAN</p></div></div>
                  <div className="flex items-start space-x-3"><span className="text-green-500 text-xl">✓</span><div><h5 className="font-semibold">Performance Optimale</h5><p className="text-gray-600 text-sm">Gigabit partout, QoS téléphonie</p></div></div>
                  <div className="flex items-start space-x-3"><span className="text-green-500 text-xl">✓</span><div><h5 className="font-semibold">Évolutivité</h5><p className="text-gray-600 text-sm">Croissance jusqu'à 100 postes</p></div></div>
                  <div className="flex items-start space-x-3"><span className="text-green-500 text-xl">✓</span><div><h5 className="font-semibold">Maintenance Simplifiée</h5><p className="text-gray-600 text-sm">Monitoring centralisé, alertes automatiques</p></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Témoignages Clients</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">La satisfaction de nos clients TPE/PME est notre priorité</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-customblue2 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-100 p-2 rounded-full mr-3"><svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg></div>
                <div className="text-yellow-500">★★★★★</div>
              </div>
              <p className="text-customblue mb-4 italic">"Enfin une société de téléphonie à taille humaine [...] Un conseil : 1FONIE"</p>
              <div className="font-semibold text-customblue">Frédéric,</div>
              <div className="text-customblue text-sm">Pharmacien, Deux sèvres</div>
            </div>

            <div className="bg-customblue2 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-100 p-2 rounded-full mr-3"><svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg></div>
                <div className="text-yellow-500">★★★★★</div>
              </div>
              <p className="text-customblue mb-4 italic">"Maintenance réseau exemplaire ! [...] optimiser notre infrastructure."</p>
              <div className="font-semibold text-customblue">Jean-Michel Durand</div>
              <div className="text-customblue text-sm">PDG, Durand & Associés</div>
            </div>

            <div className="bg-customblue2 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-100 p-2 rounded-full mr-3"><svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg></div>
                <div className="text-yellow-500">★★★★★</div>
              </div>
              <p className="text-customblue mb-4 italic">"Service irréprochable ! [...] fonctionnalités."</p>
              <div className="font-semibold text-customblue">Marie Petit</div>
              <div className="text-customblue text-sm">Responsable IT</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
