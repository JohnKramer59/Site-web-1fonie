import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-customblue-dark to-customblue text-white">
        <div className="container mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Téléphonie, Réseaux et Cybersécurité pour TPE & PME
            </h1>
            <p className="mt-4 text-lg text-white/90">
              Déploiements fiables, maintenance proactive, protection concrète. Un interlocuteur unique pour votre
              infrastructure.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-block rounded-xl bg-white text-customblue-dark font-semibold px-6 py-3 shadow hover:opacity-95"
              >
                Demander un devis
              </Link>
              <Link
                to="/services"
                className="inline-block rounded-xl border border-white/70 px-6 py-3 font-semibold hover:bg-white/10"
              >
                Voir nos services
              </Link>
            </div>
            <div className="mt-6 flex items-center gap-6 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
                Support réactif
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
                Interventions sur site
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
                Conseils cybersécurité
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-inner flex items-center justify-center">
              {/* Placeholder visuel */}
              <svg viewBox="0 0 200 120" className="w-3/4">
                <rect x="10" y="20" width="180" height="80" rx="8" fill="currentColor" opacity="0.15" />
                <path d="M20 80 L60 50 L110 70 L150 40 L180 60" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.6" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Aperçu services clés */}
      <section className="container mx-auto px-6 py-16">
        <header className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">Nos expertises</h2>
          <p className="text-gray-600 mt-2">
            Infrastructure réseau robuste, téléphonie maîtrisée, sécurité opérationnelle.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            title="Routeurs & Pare-feu"
            text="Mise en place, segmentation, VPN site-à-site. Matériel pro et politiques durcies."
            to="/routeurs"
          />
          <Card
            title="Câblage & Baies"
            text="Baies structurées, brassage propre, tests et documentation livrés."
            to="/cablage"
          />
          <Card
            title="Wifi d’entreprise"
            text="Couverture fiable, VLAN invités, portail captif, supervision."
            to="/wifi"
          />
          <Card
            title="Caméras IP"
            text="Surveillance PoE, enregistrement sécurisé, accès distant chiffré."
            to="/cameras"
          />
          <Card
            title="Maintenance proactive"
            text="Monitoring, mises à jour, sauvegardes et procédures de reprise."
            to="/maintenance"
          />
          <Card
            title="Conseils cybersécurité"
            text="MFA, durcissement postes, sauvegardes 3-2-1, réponses aux incidents."
            to="/services"
          />
        </div>

        <div className="mt-10">
          <Link
            to="/services"
            className="inline-block rounded-xl border px-5 py-3 font-semibold hover:bg-gray-50"
          >
            Tous les services
          </Link>
        </div>
      </section>

      {/* Bloc preuves simples */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Stat kpi="99,9%" label="Disponibilité visée" />
          <Stat kpi="< 2h" label="Prise en charge moyenne" />
          <Stat kpi="24/7" label="Surveillance optionnelle" />
        </div>
      </section>

      {/* Témoignages placeholder */}
      <section className="container mx-auto px-6 py-16">
        <header className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Ils nous font confiance</h2>
          <p className="text-gray-600 mt-2">Extraits à insérer plus tard.</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <TestimonialPlaceholder />
          <TestimonialPlaceholder />
          <TestimonialPlaceholder />
        </div>
      </section>

      {/* Appel à l’action */}
      <section className="bg-gradient-to-r from-customblue-dark to-customblue text-white">
        <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">Sécuriser et stabiliser votre réseau</h3>
            <p className="text-white/85">Audit rapide et plan d’action priorisé.</p>
          </div>
          <div className="flex gap-4">
            <Link
              to="/contact"
              className="rounded-xl bg-white text-customblue-dark font-semibold px-6 py-3 shadow hover:opacity-95"
            >
              Prendre contact
            </Link>
            <Link
              to="/mentions-legales"
              className="rounded-xl border border-white/70 px-6 py-3 font-semibold hover:bg-white/10"
            >
              Mentions légales
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* Composants internes */

function Card({ title, text, to }) {
  return (
    <Link
      to={to}
      className="block rounded-2xl border p-6 hover:shadow-lg transition-shadow bg-white"
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{text}</p>
      <span className="mt-4 inline-block text-sm font-semibold text-customblue-dark">
        En savoir plus →
      </span>
    </Link>
  );
}

function Stat({ kpi, label }) {
  return (
    <div className="rounded-2xl border bg-white p-6 text-center">
      <div className="text-3xl font-extrabold">{kpi}</div>
      <div className="mt-1 text-sm text-gray-600">{label}</div>
    </div>
  );
}

function TestimonialPlaceholder() {
  return (
    <div className="rounded-2xl border bg-white p-6">
      <div className="h-4 w-24 bg-gray-200 rounded" />
      <div className="mt-3 h-3 w-3/4 bg-gray-100 rounded" />
      <div className="mt-2 h-3 w-2/3 bg-gray-100 rounded" />
      <div className="mt-2 h-3 w-1/2 bg-gray-100 rounded" />
    </div>
  );
}
