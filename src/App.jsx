import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";
import MentionsLegales from "./pages/MentionsLegales.jsx";

export default function App() {
  return (
    <Router>
      {/* padding-top pour compenser le header FIXE */}
      <div className="flex flex-col min-h-screen pt-20">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
