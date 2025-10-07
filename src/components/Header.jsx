import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Remplace les hex ci-dessous par tes couleurs exactes */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#0A2540] to-[#00D4FF]"
        aria-hidden="true"
      />
      <nav className="relative z-10 text-white">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/logo.png" alt="1FONIE" className="h-10" />
            </Link>
            <div className="hidden md:flex space-x-6 text-sm font-medium">
              <Link to="/services" className="hover:opacity-80 transition">Services</Link>
              <Link to="/contact" className="hover:opacity-80 transition">Contact</Link>
              <Link to="/blog" className="hover:opacity-80 transition">Blog</Link>
              <Link to="/mentions-legales" className="hover:opacity-80 transition">Mentions légales</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
