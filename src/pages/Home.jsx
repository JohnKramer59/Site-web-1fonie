import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-r from-customblue-dark to-customblue text-white">
        <div className="container mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Téléphonie, Réseaux et Cybersécurité pour TPE & PME
            </h1>
            <p className="mt-4 text-lg text-white/90">
              Déploiements fiables, maintenance proactive, protection concrète.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="inline-block rounded-xl bg-white text-customblue-dark font-semibold px-6 py-3 shadow hover:opacity-95">
                Demander un devis
              </Link>
              <Link to="/services" className="inline-block rounded-xl border border-white/70 px-6 py-3 font-semibold hover:bg-white/10">
                Voir nos services
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-inner flex items-center justify-center">
              <svg viewBox="0 0 200 120" className="w-3/4">
                <rect x="10" y="20" width="180" height="80" rx="8" fill="currentColor" opacity="0.15" />
                <path d="M20 80 L60 50 L110 70 L150 40 L180 60" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.6" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <header className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">Nos expertises</h2>
          <p className="text-gray-600 mt-2">Infrastructure, téléphonie, sécurité.</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="Routeurs & Pare-feu" text="Mise en place, VPN, politiques durcies." to="/routeurs" />
          <Card title="Câblage & Baies" text="Brassage propre, tests, doc." to="/cablage" />
          <Card title="Wifi d’entreprise" text="Couverture fiable, VLAN invités." to="/wifi" />
          <Card title="Caméras IP" text="PoE, enregistrement sécurisé." to="/cameras" />
          <Card title="Maintenance proactive" text="Monitoring, MàJ, sauvegardes." to="/maintenance" />
          <Card title="Conseils cybersécurité" text="MFA, durcissement, PRA." to="/services" />
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="container mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Stat kpi="99,9%" label="Disponibilité visée" />
          <Stat kpi="< 2h" label="Prise en charge moyenne" />
          <Stat kpi="24/7" label="Surveillance optionnelle" />
        </div>
      </section>
    </main>
  );
}

function Card({ title, text, to }) {
  return (
    <Link to={to} className="block rounded-2xl border p-6 hover:shadow-lg transition-shadow bg-white">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{text}</p>
      <span className="mt-4 inline-block text-sm font-semibold text-customblue-dark">En savoir plus →</span>
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
