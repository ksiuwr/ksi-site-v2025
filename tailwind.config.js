/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '640px',
      lg: '1024px',
    },
    colors: {
      'dark-text-primary': '#F9F6EE',
      'dark-text-secondary': '#CDCAC4',
      'navbar-primary': '#0764A1',
      'dark-background-primary': '#01223A',
      'dark-section-primary': '#003256',
      'dark-section-secondary': '#02406E  ',
      'action-blue': '#1180AD',
      'action-blue-secondary': '#011B2F',
      'action-dark-blue': '#01223A',
      'footer-primary': '#001A2D',
      'error': '#FF0000',

      'light-text-primary': '#1A2833',
      'light-text-secondary': '#314C61',
      'light-background-primary': '#EAF0F8',
      'light-section-primary': '#D0E3F4',
      'light-section-secondary': '#AFCDEA'
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif']
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
