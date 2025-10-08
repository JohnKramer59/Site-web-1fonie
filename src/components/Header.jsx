import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="absolute inset-0 bg-gradient-to-r from-customblue-dark to-customblue" aria-hidden="true" />
      <nav className="relative z-10 text-white">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/logo.png" alt="1FONIE" className="h-10" />
            </Link>

            <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
              {/* Menu Services avec sous-menu */}
              <div className="relative group">
                <Link to="/services" className="hover:opacity-80 transition inline-flex items-center">
                  Services
                </Link>
                <div className="pointer-events-none absolute left-0 mt-2 w-64 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition">
                  <div className="rounded-xl shadow-lg overflow-hidden">
                    <div className="bg-white text-gray-900">
                      <Link to="/services/standard-telephonique" className="block px-4 py-3 hover:bg-gray-50">
                        Standard téléphonique (VoIP / Centrex)
                      </Link>
                      <Link to="/services/maintenance-informatique" className="block px-4 py-3 hover:bg-gray-50">
                        Maintenance informatique
                      </Link>
                      <Link to="/services/telephonie-mobile" className="block px-4 py-3 hover:bg-gray-50">
                        Téléphonie mobile pro
                      </Link>
                      <Link to="/services/internet-fibre" className="block px-4 py-3 hover:bg-gray-50">
                        Internet & Réseau d’entreprise
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <Link to="/villes" className="hover:opacity-80 transition">Villes</Link>
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
