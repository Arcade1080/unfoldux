const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'footer-texture': "url('/footer-bg.svg')",
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          xl: '1300px',
        },
      },
      fontFamily: {
        sans: ['Karla', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        uuxblack: {
          600: '#1F1F1F',
          700: '#3F3F3F',
          900: '#080808',
          950: '#282828',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
