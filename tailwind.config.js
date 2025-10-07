/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customblue: {
          DEFAULT: "#1E40AF",
          dark: "#1E3A8A",
        },
      },
    },
  },
  plugins: [],
};
