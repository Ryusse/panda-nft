/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'heading-01': [
          '72px',
          {
            lineHeight: '96px',
          },
        ],
        'heading-02': [
          '64px',
          {
            lineHeight: '80px',
          },
        ],
        'heading-03': [
          '48px',
          {
            lineHeight: '64px',
          },
        ],
        'heading-04': [
          '32px',
          {
            lineHeight: '54px',
          },
        ],
        'sub-heading-01': [
          '28px',
          {
            lineHeight: '44px',
          },
        ],
        'sub-heading-02': [
          '24px',
          {
            lineHeight: '34px',
          },
        ],
        'paragraph-01': [
          '16px',
          {
            lineHeight: '32px',
          },
        ],
        'paragraph-02': [
          '14px',
          {
            lineHeight: '24px',
          },
        ],
        'paragraph-03': [
          '12px',
          {
            lineHeight: '24px',
          },
        ],
      },
      colors: {
        primary: {
          neutral: {
            white: '#ffffff',
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
            200: '#0F182E',
            100: '#02050E',
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
        others: {
          blueTransparency: {
            50: 'rgba(30, 80, 255, 0.15)',
          },
        },
      },
    },
  },
  plugins: [],
};
