// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customblue: {
          DEFAULT: "#1E40AF", // couleur principale
          dark: "#1E3A8A",    // couleur foncée du dégradé
        },
      },
    },
  },
  plugins: [],
};
