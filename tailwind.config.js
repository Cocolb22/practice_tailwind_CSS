const { blue } = require('color-name');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./practice.html"],
  theme: {
    borderWidth:{
      DEFAULT: '2px',
    },
    colors:{
      black: {
        700: '#334155',
      },
      gray:{
        300:'#d1d5db',
        600:'#4b5563',
      },
      yellow:{
        200:'#fef08a',
        400:"#facc15",
      },
      blue: {
        300:'#93c5fd',
        600:'#2563eb',
      },
      red: {
        500:"#ef4444",
        600:'#dc2626',
      },
      white: '#fff',
    },

    extend: {
      fontFamily: {
        body:["Roboto"]
      },
    },
  },
  plugins: [],
}
