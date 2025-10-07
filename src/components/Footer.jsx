import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white py-8 mt-12 border-t border-gray-100">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        {/* Logo centré */}
        <img src="/logo.png" alt="1FONIE" className="h-14" />

        {/* Liens réseaux sociaux */}
        <div className="flex space-x-4 mt-2">
          <a
            href="https://www.linkedin.com/company/1fonie"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg
              className="w-6 h-6 text-gray-600 hover:text-blue-700 transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.5h5v15h-5v-15zm7.5 0h4.8v2.1h.1c.7-1.3 2.4-2.6 5-2.6 5.3 0 6.3 3.5 6.3 8v9.5h-5v-8.4c0-2-.03-4.6-2.8-4.6-2.8 0-3.2 2.2-3.2 4.5v8.5h-5v-15z" />
            </svg>
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61556803801539"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <svg
              className="w-6 h-6 text-gray-600 hover:text-blue-600 transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22.675 0h-21.35C.595 0 0 .6 0 1.337v21.326C0 23.4.595 24 1.325 24h11.49v-9.294H9.692v-3.622h3.122V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.098 2.794.143v3.24l-1.918.001c-1.504 0-1.796.716-1.796 1.764v2.31h3.588l-.467 3.622h-3.121V24h6.116C23.405 24 24 23.4 24 22.663V1.337C24 .6 23.405 0 22.675 0z" />
            </svg>
          </a>
        </div>

        {/* Texte de fin */}
        <p className="text-sm text-gray-500 mt-4">
          © 2025 1FONIE. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
