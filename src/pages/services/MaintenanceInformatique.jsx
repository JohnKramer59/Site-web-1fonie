import React from "react";
import { Link } from "react-router-dom";
import Seo from "../../seo/Seo.jsx";
import { CITIES } from "../../seo/cities.js";
import { serviceSchema, siteUrl } from "../../seo/schema.js";

export default function MaintenanceInformatique() {
  const title = "Maintenance informatique / Infogérance | 1FONIE Pro";
  const description = "Supervision 24/7, helpdesk, sauvegarde, sécurité EDR. Infogérance TPE/PME en Hauts-de-France. Devis 24h.";
  const canonical = `${siteUrl}/services/maintenance-informatique`;
  const jsonLd = serviceSchema({
    name: "Maintenance informatique / Infogérance",
    description,
    areaServed: "Hauts-de-France",
  });

  return (
    <main>
      <Seo title={title} description={description} canonical={canonical} jsonLd={jsonLd} />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-customblue mb-4">Maintenance informatique / Infogérance</h1>
          <p className="text-gray-700 max-w-3xl">Supervision 24/7, helpdesk réactif, sauvegarde et sécurité EDR. Moins d’incidents, plus de disponibilité pour vos équipes.</p>
        </div>
      </section>

      <section className="py-12 bg-customblue2">
        <div className="container mx-auto px-6 grid lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow lg:col-span-2">
            <h2 className="text-2xl font-semibold text-customblue">Ce que nous gérons</h2>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>• Monitoring 24/7, alerting, patch management</li>
              <li>• Support utilisateurs: télémaintenance et sur site</li>
              <li>• Sauvegarde, PRA/PCA, anti-ransomware (EDR)</li>
              <li>• Microsoft 365, AD, postes et serveurs</li>
              <li>• Tableau de bord et rapports mensuels</li>
            </ul>

            <div className="mt-8">
              <Link to="/contact" className="inline-block bg-customblue text-white px-5 py-3 rounded-lg">Demander un devis</Link>
            </div>
          </div>

          <aside className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-semibold text-customblue">Infogérance par ville</h4>
            <ul className="mt-3 space-y-2 max-h-[420px] overflow-auto pr-2">
              {CITIES.map(c => (
                <li key={c.slug}>
                  <Link to={`/villes/${c.slug}/maintenance-informatique`} className="underline text-gray-800 hover:opacity-80">À {c.name}</Link>
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
