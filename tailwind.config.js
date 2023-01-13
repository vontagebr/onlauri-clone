/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        octobre: 'octobre',
        orbitron: 'orbitron',
        billiondreams: 'BillionDreams',
        oleoscript: 'OleoScript'
      }
    }
  },
  plugins: []
}
