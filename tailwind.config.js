module.exports = {
  purge: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        footer: {
          DEFAULT: '#20375c',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
