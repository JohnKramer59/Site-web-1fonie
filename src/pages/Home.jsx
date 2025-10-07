import React from "react";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-customblue2 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Notre métier : veiller sur votre sécurité digitale.
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Votre infrastructure réseau entre de bonnes mains :<br /> nous vous
            accompagnons pour réussir votre transformation digitale durablement.
          </p>
          <div className="flex justify-center items-center">
            <video
              src="video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="h-64 md:h-80 w-full max-w-4xl rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-customblue mb-4">
              Pourquoi Choisir 1FONIE Pro ?
            </h2>
            <p className="text-xl text-customblue max-w-2xl mx-auto">
              Plus de 15 ans d'expérience au service des entreprises
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Expertise Reconnue</h3>
              <p className="text-gray-600">Certifications constructeurs et équipe d'experts qualifiés</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Réactivité</h3>
              <p className="text-gray-600">Support technique disponible et interventions rapides</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Solutions Sur Mesure</h3>
              <p className="text-gray-600">Approche personnalisée selon vos besoins spécifiques</p>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages Clients */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Témoignages Clients</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              La satisfaction de nos clients TPE/PME est notre priorité
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-customblue2 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-100 p-2 rounded-full mr-3">
                  <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                </div>
                <div className="text-yellow-500">★★★★★</div>
              </div>
              <p className="text-customblue mb-4 italic">
                "Enfin une société de téléphonie à taille humaine : Forfaits adaptés , évolutifs , rapidité dans les solutions techniques , Prix hyper compétitif . 
Croyez moi : j en ai croisé beaucoup des fournisseurs de téléphonie, box , internet, standard et j ai malheureusement croisé aussi beaucoup d' escrocs.
Un conseil : 1FONIE"
              </p>
              <div className="font-semibold text-customblue">Frédéric,</div>
              <div className="text-customblue text-sm">Pharmacien, Deux sèvres</div>
            </div>

            <div className="bg-customblue2 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-100 p-2 rounded-full mr-3">
                  <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                </div>
                <div className="text-yellow-500">★★★★★</div>
              </div>
              <p className="text-customblue mb-4 italic">
                "Maintenance réseau exemplaire ! Plus de panne depuis 2 ans. L'équipe est réactive 
                et leurs conseils nous ont permis d'optimiser notre infrastructure."
              </p>
              <div className="font-semibold text-customblue">Jean-Michel Durand</div>
              <div className="text-customblue text-sm">PDG, Durand & Associés (45 employés)</div>
            </div>

            <div className="bg-customblue2 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-100 p-2 rounded-full mr-3">
                  <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                </div>
                <div className="text-yellow-500">★★★★★</div>
              </div>
              <p className="text-customblue mb-4 italic">
                "Service irréprochable ! Installation rapide du centrex et formation complète. 
                Nos équipes maîtrisent parfaitement les nouvelles fonctionnalités."
              </p>
              <div className="font-semibold text-customblue">Marie Petit</div>
              <div className="text-customblue text-sm">Responsable IT, Architectes Réunis (22 employés)</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
