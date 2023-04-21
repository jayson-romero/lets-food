/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
        colors: {
          primary: "#FFCB45",
          black: "#1D1D1D",
          white: "#FFFFFF",
          lightbg: "#FFF9EA",
        },
        fontFamily: {
          Readex: ["Readex Pro", "sans-serif"],
        },
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
  },
  plugins: [],
}