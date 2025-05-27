/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const rtl = require('tailwindcss-rtl');

module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.css",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Arial", "sans-serif"],
        IRANRounded: ["IRAN Rounded", "sans-serif"],
      },
    },
  },
  plugins: [rtl],
};
