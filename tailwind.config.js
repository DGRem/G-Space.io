/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        red: '#B90029',
        bronze: '#B46B2B',
        green: '#00B946',
        gold: '#E5AB00',
        gray: '#AFAFAF',
        magenta: '#ED2161',
        blue: '#21A2ED',
        yellow: '#DCA700',
        purple: '#CE55FF',
      },

      colors: {
        red: '#B90029',
        bronze: '#B46B2B',
        green: '#00B946',
        gold: '#E5AB00',
        gray: '#AFAFAF',
        magenta: '#ED2161',
        blue: '#21A2ED',
        yellow: '#DCA700',
        purple: '#CE55FF',
      },

      fontFamily: {
        Titilium: ["Titillium Web", "sans-serif"],
        BrunoSC: ["Bruno Ace SC", "sans-serif"],
        Bruno: ["Bruno Ace", "sans-serif"],
        Ops: ["Black Ops One", "sans-serif"],
      },
    },
  },
  plugins: [],
}

