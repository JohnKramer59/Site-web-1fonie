import React from "react";
import { Link } from "react-router-dom";
import Seo from "../../seo/Seo.jsx";
import { CITIES } from "../../seo/cities.js";
import { SERVICES } from "../../seo/services.js";
import { siteUrl, faqSchema } from "../../seo/schema.js";

export default function Cities() {
  // META
  const title = "Villes desservies en Hauts-de-France | 1FONIE Pro";
  const description =
    "Couverture Hauts-de-France : Lille, Amiens, Dunkerque, Calais, Valenciennes, Arras… Téléphonie IP, Internet fibre, maintenance informatique et mobile pro. Devis 24h.";
  const canonical = `${siteUrl}/villes`;

  // JSON-LD: ItemList (liste des hubs ville)
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: CITIES.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${siteUrl}/villes/${c.slug}`,
      name: c.name,
    })),
  };

  // JSON-LD: Breadcrumbs
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: siteUrl + "/" },
      { "@type": "ListItem", position: 2, name: "Villes", item: canonical },
    ],
  };

  // JSON-LD: FAQ
  const faq = faqSchema([
    [
      "Quelles villes des Hauts-de-France sont couvertes ?",
      "Nous intervenons notamment à Lille, Amiens, Roubaix, Tourcoing, Dunkerque, Calais, Villeneuve-d’Ascq, Beauvais, Saint-Quentin, Valenciennes, Arras, Boulogne-sur-Mer et Wattrelos.",
    ],
    [
      "Quels services proposez-vous dans chaque ville ?",
      "Standard téléphonique VoIP/Centrex, Internet fibre & réseau, maintenance informatique/infogérance et téléphonie mobile professionnelle.",
    ],
    [
      "Sous quel délai intervenez-vous ?",
      "Qualification sous 24 h ouvrées. Délais d’intervention selon le besoin : télémaintenance immédiate ou déplacement planifié.",
    ],
    [
      "Travaillez-vous avec les TPE et PME ?",
      "Oui. Nos offres sont dimensionnées pour les TPE/PME multisites ou mono-site, avec des packs et un accompagnement dédié.",
    ],
  ]);

  const jsonLd = [itemListSchema, breadcrumbSchema, faq];

  return (
    <main>
      <Seo
        title={title}
        description={description}
        canonical={canonical}
        jsonLd={jsonLd}
        openGraph={{ type: "website" }}
      />

      {/* Hero / Intro sémantique */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-customblue mb-6">Villes desservies</h1>
          <p className="text-gray-700 max-w-4xl">
            1FONIE Pro accompagne les <strong>TPE/PME des Hauts-de-France</strong> sur quatre expertises :
            <strong> standard téléphonique VoIP/Centrex</strong>, <strong>Internet fibre & réseau d’entreprise</strong>,
            <strong> maintenance informatique/infogérance</strong> et <strong>téléphonie mobile professionnelle</strong>.
            Nous intervenons dans les principales agglomérations de la région, avec des délais rapides et un
            <strong> devis sous 24&nbsp;h ouvrées</strong>. Sélectionnez votre ville pour découvrir les offres locales et démarrer votre projet.
          </p>
        </div>
      </section>

      {/* Cartes villes + maillage services */}
      <section className="py-12 bg-customblue2">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {CITIES.map((c) => (
              <div key={c.slug} className="bg-white rounded-xl p-6 shadow">
                <h2 className="text-xl font-semibold mb-3 text-customblue">
                  {c.name}
                </h2>
                <ul className="space-y-2">
                  {SERVICES.map((s) => (
                    <li key={s.slug}>
                      <Link
                        to={`/villes/${c.slug}/${s.slug}`}
                        className="text-sm underline text-gray-800 hover:opacity-80"
                      >
                        {s.name} à {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-3">
                  <Link
                    to={`/villes/${c.slug}`}
                    className="text-sm text-customblue underline"
                  >
                    Voir la page ville
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ locale pour enrichir le champ lexical */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-2xl font-semibold text-customblue mb-6">
            Questions fréquentes
          </h2>
          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="font-semibold">Quelles villes des Hauts-de-France sont couvertes ?</h3>
              <p>
                Lille, Amiens, Roubaix, Tourcoing, Dunkerque, Calais, Villeneuve-d’Ascq, Beauvais,
                Saint-Quentin, Valenciennes, Arras, Boulogne-sur-Mer et Wattrelos.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Quels services proposez-vous dans chaque ville ?</h3>
              <p>
                Standard téléphonique VoIP/Centrex, Internet fibre & réseau d’entreprise, maintenance
                informatique/infogérance et téléphonie mobile pro.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Sous quel délai intervenez-vous ?</h3>
              <p>
                Qualification sous 24 h ouvrées. Déplacement planifié si nécessaire ou assistance à distance immédiate.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Travaillez-vous avec les TPE/PME ?</h3>
              <p>
                Oui. Offres et processus pensés pour les structures de 5 à 100 postes, mono-site ou multi-sites.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
