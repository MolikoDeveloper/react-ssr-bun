/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

export default {
  content: [
    "./components/**/*.{tsx,ts,js,jsx}",
    "./pages/**/*.{tsx,ts,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#12101d"
      }
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('active', ['&:active', '&.router-link-active'])
    })
  ],
}

