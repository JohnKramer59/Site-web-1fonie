/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",              // Vite
    "./public/index.html",       // CRA (sans risque d’en avoir trop)
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  safelist: [
    // pour tes classes dynamiques dans InfoCard
    "bg-blue-100","text-blue-600",
    "bg-green-100","text-green-600",
    "bg-purple-100","text-purple-600"
  ],
  theme: {
    extend: {
      colors: {
        customblue: "#2596be",
        customblue2: "#031634",
        "customblue-dark": "#1a6b8f"
      }
    }
  },
  plugins: []
};
