/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#21222A',
        accent: '#61DAFB',
        'primary-opq': '#282D35'
      },
      backgroundImage:{
        'react': "url('./src/assets/react-back.png')"
      },
      gridTemplateColumns:{
        'main': 'minmax(0em, 1fr) minmax(0em, 60rem) minmax(0em,1fr)'
      }
    },
  },
  plugins: [],
}
