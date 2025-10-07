import React from "react";

export default function Header() {
  return (
    <header className="bg-gradient-blue text-white shadow">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="1FONIE" className="h-10" />
          </a>
          <div className="hidden md:flex space-x-6 text-sm font-medium">
            <a href="#services" className="hover:opacity-80 transition">Services</a>
            <a href="#about" className="hover:opacity-80 transition">À propos</a>
            <a href="#testimonials" className="hover:opacity-80 transition">Témoignages</a>
            <a href="#products" className="hover:opacity-80 transition">Équipements</a>
            <a href="#configuration" className="hover:opacity-80 transition">Configuration</a>
            <a href="#contact" className="hover:opacity-80 transition">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  );
}
