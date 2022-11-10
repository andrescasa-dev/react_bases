/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "sans": "'Inter', sans-serif",
        "meme": "'Oswald', sans-serif"
      },
      colors:{
        "main": "#94CEF2",
        "accent": "#87B4D0",
        "third": "#226371",
        "back": "#262525",
      },
      backgroundColor:{
        "header": "linear-gradient(360deg, #262525 0%, #2B2B2B 100%)"
      },
      gridTemplateColumns:{
        "main": "minmax(2em, 1fr) minmax(0, 80em) auto minmax(2em, 1fr)"
      },
      gridTemplateRows:{
        "main": "max-content 1fr"
      }
    },
  },
  plugins: [],
}