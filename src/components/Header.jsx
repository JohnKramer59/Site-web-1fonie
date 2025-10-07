import React from "react";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-[#1B3E91] to-[#2C6EE7] text-white shadow">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="1FONIE" className="h-10" />
          </a>
          <div className="hidden md:flex space-x-6 text-sm font-medium">
            <a href="#services" className="hover:text-blue-200 transition-colors">Services</a>
            <a href="#about" className="hover:text-blue-200 transition-colors">À propos</a>
            <a href="#testimonials" className="hover:text-blue-200 transition-colors">Témoignages</a>
            <a href="#products" className="hover:text-blue-200 transition-colors">Équipements</a>
            <a href="#configuration" className="hover:text-blue-200 transition-colors">Configuration</a>
            <a href="#contact" className="hover:text-blue-200 transition-colors">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  );
}
