/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './src/**/*.{jsx, js}',
],
  theme: {
    extend: {
      backgroundImage: {
        'instagram': "url('../src/assets/img/captura-instagram.png')",
      },
      boxShadow: {
        'red': '8px 8px 0px 0px #D31A41',
        'black': '8px 8px 0px 0px #1C1515'
      },
      colors: {
        'white-custom': '#FFFAE3',
        'black-custom': '#1C1515',
        'orange-custom': '#FFCC71',
        'red-custom': '#D31A41',
        'green-custom': '#4AA469',
        'yellow-custom':'#FFCC71'
      },
      fontFamily: {
        'Perandory': ['Perandory'],
        'Bluu': ['Bluu']
      }
    },
  },
  plugins: [],
}
