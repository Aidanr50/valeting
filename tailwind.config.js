const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.html',
    './src/**/*.njk',
    './src/**/*.md',
    './src/**/*.11ty.js'
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      customRed: '#BB2637',
      lightGray: '#242424',
      darkGray: '#0f0f0f',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      orange: colors.orange
    },
    backgroundImage: {
      'hero-lg': "url('../img/hero.webp')",
      'hero-sm': "url('../img/hero-mobile.webp')",
      'carbon': "url('../img/carbon-fiber.avif')"
    },
    fontFamily: {
      'body': ['roboto-condensed']
    },
    extend: {},
  },
  plugins: [],
} 