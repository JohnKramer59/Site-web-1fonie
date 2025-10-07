import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx"; // ← chemin EXACT

function Services() { return <div className="container mx-auto px-6 py-16">Page Services</div>; }
function Contact()  { return <div className="container mx-auto px-6 py-16">Page Contact</div>; }
function Blog()     { return <div className="container mx-auto px-6 py-16">Page Blog</div>; }
function MentionsLegales() { return <div className="container mx-auto px-6 py-16">Mentions légales</div>; }
function PolitiqueConfidentialite() { return <div className="container mx-auto px-6 py-16">Politique de confidentialité</div>; }

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
