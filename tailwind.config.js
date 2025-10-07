/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], // ← indispensable
  theme: {
    extend: {
      colors: {
        customblue: "#2C6EE7",        // bleu clair brand
        "customblue-dark": "#1B3E91", // bleu foncé brand
        customblue2: "#E9F1FF"        // fond pâle brand
      }
    }
  },
  plugins: []
};
