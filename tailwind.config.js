/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customblue: "#2C6EE7",
        "customblue-dark": "#1B3E91"
      }
    }
  },
  plugins: []
};
  
