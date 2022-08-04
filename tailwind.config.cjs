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
      },
    },
  },
  plugins: [],
}
