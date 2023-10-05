/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
  './src/**/*.{html,jsx, js}'
  ],
  theme: {
    extend: {},
    fontFamily : {
      satoshi: "'Satoshi', sans",
    },
    colors : {
      bleu: {
       500: "rgb(59 130 246)",
       800: "rgb(30 64 175)"
      } ,
      primary: "#FC5E64",
      neutral : {
      50 : "#fafafa",
      100 : "#f5f5f5",
      500: "#737373"
      },
      green: {
      500: "#00b0a6",
      800: "#008290"
      },
      yellow: "#e1aa12",
      black: "rgb(0 0 0)",
      white: "rgb(255 255 255)"
     }, 
  },
  plugins: [],
}

