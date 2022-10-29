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
      }
    },
  },
  plugins: [],
}
