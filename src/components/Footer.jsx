import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-customblue-dark to-customblue text-gray-100 py-10 mt-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-3 text-white">1Fonie</h3>
          <p className="text-sm leading-relaxed">
            Téléphonie, réseaux et cybersécurité pour TPE & PME.
            Solutions sur mesure, support réactif et expertise certifiée.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-3 text-white">Liens rapides</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/routeurs">Routeurs</Link></li>
            <li><Link to="/cablage">Câblage</Link></li>
            <li><Link to="/maintenance">Maintenance</Link></li>
            <li><Link to="/baies">Baies</Link></li>
            <li><Link to="/cameras">Caméras</Link></li>
            <li><Link to="/wifi">Wifi</Link></li>
            <li><Link to="/mentions-legales">Mentions légales</Link></li>
            <li><Link to="/politique-confidentialite">Politique de confidentialité</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-3 text-white">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center space-x-2">
              <FaEnvelope /> <a href="mailto:contact@1fonie.fr">contact@1fonie.fr</a>
            </li>
            <li className="flex items-center space-x-2">
              <FaPhone /> <a href="tel:+33123456789">01 23 45 67 89</a>
            </li>
            <li className="flex items-center space-x-2">
              <FaLinkedin /> <a href="https://linkedin.com/in/tonprofil" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/20 mt-8 pt-4 text-center text-sm text-gray-200">
        &copy; {new Date().getFullYear()} 1Fonie. Tous droits réservés.
      </div>
    </footer>
  );
}
