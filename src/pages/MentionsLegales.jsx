import React from "react";

export default function MentionsLegales() {
  return (
    <main className="container mx-auto px-6 py-16 max-w-4xl text-gray-700 leading-relaxed">
      <h1 className="text-3xl font-bold text-customblue-dark mb-8">
        Mentions légales
      </h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Éditeur du site</h2>
        <p>
          Le site <strong>1Fonie.fr</strong> est édité par la société 1Fonie,
          spécialisée en téléphonie, réseaux et cybersécurité pour TPE & PME.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Responsable de la publication</h2>
        <p>
          Le responsable de la publication est le dirigeant de 1Fonie.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Hébergement</h2>
        <p>
          Le site est hébergé par <strong>Vercel Inc.</strong><br />
          Adresse : 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.<br />
          Site web : <a href="https://vercel.com" className="text-customblue underline">vercel.com</a>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Propriété intellectuelle</h2>
        <p>
          L’ensemble du contenu du site (textes, images, graphismes, logos) est
          protégé par le droit d’auteur. Toute reproduction est interdite sans
          autorisation préalable.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Contact</h2>
        <p>
          Pour toute question, contactez-nous à :{" "}
          <a href="mailto:contact@1fonie.fr" className="text-customblue underline">
            contact@1fonie.fr
          </a>
        </p>
      </section>
    </main>
  );
}
