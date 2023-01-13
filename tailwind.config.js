/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: 'montserrat'
      },
      backgroundImage: {
        'search-icon':
          'url(https://www.onlauri.com.br/skin/frontend/cammino/onlauri/images/search-icon.svg)',
        chevron:
          'url(https://www.onlauri.com.br/skin/frontend/cammino/onlauri/images/setinha-header.png)'
      }
    }
  },
  plugins: []
}
