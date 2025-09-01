/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // make sure React components are scanned
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
