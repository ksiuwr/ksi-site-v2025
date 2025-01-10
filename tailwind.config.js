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
      'dark-section-secondary': '#02406E',
      'dark-section-primary': '#02406E',
      'action-blue': '#1180AD',
      'footer-primary': '#001A2D'
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

