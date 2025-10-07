import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
// importe via le dossier pour utiliser le wrapper
import Contact from "./pages/Contact";

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
          <Route path="/" element={<Page title="Accueil" />} />
          <Route path="/services" element={<Page title="Services" />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Page title="Blog" />} />
          <Route path="/mentions-legales" element={<Page title="Mentions légales" />} />
        </Routes>
      </main>
    </>
  );
}
