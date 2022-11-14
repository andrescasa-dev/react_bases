/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        'main' : 'minmax(1em, 1fr) minmax(0,40em) minmax(1em, 1fr)'
      },
      fontFamily:{
        'karla': '"Karla", sans-serif',
        'inter': '"Inter", sans-serif'
      },
      colors:{
        'main': '#0B2434',
        'accent': '#59E391'
      }
    },
  },
  plugins: [],
}
