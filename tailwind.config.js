module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        'montserrat' : 'Montserrat'
      },

      backgroundImage: {
        'bird': "url('/public/background.jpg')",

      },
      colors: {
        'backgroundGray': "#1C1C1C",
        'cardBackground' : "#F1F1F1"
      }
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
