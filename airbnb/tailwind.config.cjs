/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        accent: "#FF5A5F"
      },
      fontFamily:{
        sans: ['Poppins', 'sans']
      },
      boxShadow:{
        header: '0px 2.98256px 7.4564px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage:{
        "hero-bg": 'url(http://localhost:5173/src/assets/hero-big.png)',
        "hero-sm": 'url(http://localhost:5173/src/assets/hero-small.png)'
      },
      gridTemplateColumns:{
        main: "minmax(1em, 1fr) minmax(0rem, 70em) minmax(1em, 1fr)"
      }
    },
  },
  plugins: [],
}
