import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 customblue2 text-white shadow">
      <nav className="container mx-auto px-6 py-4">
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
      </nav>
    </header>
  );
}
