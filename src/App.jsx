import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";

function Page({ title }) {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="mt-2 text-gray-600">Contenu de démonstration.</p>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main className="pt-20"> {/* espace sous header fixed */}
        <Routes>
          <Route path="/" element={<Page title="Accueil" />} />
          <Route path="/services" element={<Page title="Services" />} />
          <Route path="/contact" element={<Page title="Contact" />} />
          <Route path="/blog" element={<Page title="Blog" />} />
          <Route path="/mentions-legales" element={<Page title="Mentions légales" />} />
        </Routes>
      </main>
    </>
  );
}
