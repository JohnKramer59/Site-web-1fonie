import React from "react";
import { useParams, Link } from "react-router-dom";
import { CITIES } from "../../seo/cities.js";
import { SERVICES, SERVICE_MAP } from "../../seo/services.js";

export default function CityService() {
  const { city, service } = useParams();
  const currentCity = CITIES.find(c => c.slug === city);
  const currentService = SERVICE_MAP[service];

  if (!currentCity || !currentService) {
    return (
      <main className="px-6 py-16">
        <h1 className="text-2xl font-semibold text-customblue">Page introuvable</h1>
        <p className="mt-2">
          <Link to="/villes" className="underline text-customblue">Retour aux villes</Link>
        </p>
      </main>
    );
  }

  return (
    <main>
      {/* Hero localisé */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-customblue mb-2">
            {currentService.name} à {currentCity.name}
          </h1>
          <p className="text-gray-700 max-w-3xl">
            Solutions pour TPE/PME à {currentCity.name}. Intervention rapide. Devis en 24h.
          </p>
        </div>
      </section>

      {/* Bénéfices / offre */}
      <section className="py-12 bg-customblue2">
        <div className="container mx-auto px-6 grid lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow lg:col-span-2">
            <h2 className="text-2xl font-semibold text-customblue">Ce que nous apportons</h2>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>• Déploiement et paramétrage adaptés aux PME locales</li>
              <li>• Support réactif et supervision proactive</li>
              <li>• Conseils pour fiabiliser et sécuriser vos usages</li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 text-customblue">Processus & délais</h3>
            <ol className="mt-3 list-decimal ml-5 text-gray-700 space-y-1">
              <li>Qualification et devis</li>
              <li>Planification et préparation</li>
              <li>Installation/configuration</li>
              <li>Recette, formation, support</li>
            </ol>

            <div className="mt-8">
              <Link to="/contact" className="inline-block bg-customblue text-white px-5 py-3 rounded-lg">
                Demander un devis
              </Link>
            </div>
          </div>

          {/* Maillage latéral local */}
          <aside className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-semibold text-customblue">Autres services à {currentCity.name}</h4>
            <ul className="mt-3 space-y-2">
              {SERVICES.filter(s => s.slug !== service).map(s => (
                <li key={s.slug}>
                  <Link
                    to={`/villes/${currentCity.slug}/${s.slug}`}
                    className="underline text-gray-800 hover:opacity-80"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <Link to={`/villes/${currentCity.slug}`} className="underline text-customblue">
                Retour au hub {currentCity.name}
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
