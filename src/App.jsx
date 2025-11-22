// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";

// Pages existantes
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact";

// Piliers service
import StandardTelephone from "./pages/services/StandardTelephone.jsx";
import MaintenanceInformatique from "./pages/services/MaintenanceInformatique.jsx";
import TelephonieMobile from "./pages/services/TelephonieMobile.jsx";
import InternetFibre from "./pages/services/InternetFibre.jsx";

// Packs maintenance
import PackEssentiel from "./pages/services/PackEssentiel.jsx";
import PackOptimum from "./pages/services/PackOptimum.jsx";

// SEO local
import Cities from "./pages/villes/Cities.jsx";
import City from "./pages/villes/City.jsx";
import CityService from "./pages/villes/CityService.jsx";

function Page({ title }) {
  return (
    <div className="px-6 py-10 max-w-5xl mx-auto">
      <h1 className="text-3xl font-semibold">{title}</h1>
      <p className="mt-3 text-gray-600">Contenu de démonstration.</p>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Routes>
          {/* Accueil */}
          <Route path="/" element={<Home />} />

          {/* Sommaire Services */}
          <Route path="/services" element={<Services />} />

          {/* Services détaillés */}
          <Route path="/services/standard-telephonique" element={<StandardTelephone />} />
          <Route path="/services/maintenance-informatique" element={<MaintenanceInformatique />} />
          <Route path="/services/telephonie-mobile" element={<TelephonieMobile />} />
          <Route path="/services/internet-fibre" element={<InternetFibre />} />

          {/* PACKS Maintenance */}
          <Route path="/services/pack-essentiel" element={<PackEssentiel />} />
          <Route path="/services/pack-optimum" element={<PackOptimum />} />

          {/* SEO local */}
          <Route path="/villes" element={<Cities />} />
          <Route path="/villes/:city" element={<City />} />
          <Route path="/villes/:city/:service" element={<CityService />} />

          {/* Divers */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Page title="Blog" />} />
          <Route path="/mentions-legales" element={<Page title="Mentions légales" />} />
        </Routes>
      </main>
    </>
  );
}
