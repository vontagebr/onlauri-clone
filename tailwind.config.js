/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: 'montserrat'
      },
      backgroundImage: {
        'search-icon': 'url(/images/icons/search-icon.svg)',
        'nav-prev': 'url(/images/icons/slick-navigation-prev.svg)',
        'nav-next': 'url(/images/icons/slick-navigation-next.svg)'
      }
    }
  },
  plugins: []
}
