/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ], 
  theme: {
    extend: {},
    fontFamily: {
      'Do Hyeon': ['sans-serif']
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '16': '4rem',
    },

    colors:{
      'mainYellow': '#FEBC05',
      'subYellow':'#FFDD76',
      'mainblack': '#404040',
      'maingray':'#dbdbdb',
    }
  },
  plugins: [],

}
