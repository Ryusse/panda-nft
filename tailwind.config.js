/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          neutral: {
            white: '#fff',
          },
          grey: {
            900: '#272D37',
            800: '#36414C',
            700: '#66737F',
            600: '#8F9CA9',
            500: '#ADB9C7',
            400: '#B8C1CC',
            300: '#D5DDE5',
            200: '#E7ECF2',
            100: '#EEF2F6',
          },
          blue: {
            500: '#3EAEFF',
            300: '#1E50FF',
            100: '#0F182E',
          },
          green: {
            700: '#38C976',
          },
          yellow: {
            600: '#FFA23A',
          },
          red: {
            500: '#FE5050',
          },
        },
      },
    },
  },
  plugins: [],
};
