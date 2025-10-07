/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customblue: "#2C6EE7",       // bleu clair du dégradé
        "customblue-dark": "#1B3E91", // bleu foncé du dégradé
        customblue2: "#E9F1FF",      // fond bleu très clair (sections)
      },
    },
  },
  plugins: [],
};
