/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{jsx, js}',
],
  theme: {
    extend: {
      colors: {
        'white-custom': '#FFFAE3',
        'black-custom': '#1C1515',
        'orange-custom': '#FFCC71',
        'red-custom': '#D31A41',
        'green-custom': '#4AA469',
        'yelow-custom':'#FFCC71'
      },
    },
  },
  plugins: [],
}
