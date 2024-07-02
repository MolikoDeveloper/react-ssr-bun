/** @type {import('tailwindcss').Config} */
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
  plugins: [],
}

