/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      md: '768px',
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
      'error': '#FF0000'
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif']
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
