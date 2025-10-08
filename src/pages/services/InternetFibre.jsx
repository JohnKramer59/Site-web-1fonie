import React from "react";
import { Link } from "react-router-dom";
import { CITIES } from "../../seo/cities.js";

export default function InternetFibre() {
  return (
    <main>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-customblue mb-4">Internet fibre & Réseau d’entreprise</h1>
        <p className="text-gray-700 max-w-3xl">FTTH pro, FTTO dédiée, IP fixe, SD-WAN, Wi-Fi 6/7, câblage baie.</p>
        </div>
      </section>

      <section className="py-12 bg-customblue2">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-semibold text-white mb-6">Couverture Hauts-de-France</h2>
          <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {CITIES.map(c => (
              <li key={c.slug}>
                <Link
                  to={`/villes/${c.slug}/internet-fibre`}
                  className="block bg-white rounded-lg px-4 py-3 hover:opacity-90"
                >
                  Internet & réseau à {c.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Link to="/villes" className="text-white underline">Voir toutes les villes</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
