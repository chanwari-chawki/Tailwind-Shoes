/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyFrames: {
        wiggle: {
          "0%": {Transform: "rotate(-3deg)"},
          "100%": {Transform: "rotate(3deg)"},
        },
        float: {
          "0%,100%": {Transform: "TranslateY(0)"},
          "50%": {Transform: "TranslateY(-10px)"},
        },
        fadeIn: {
          "0%": {opacity: "0"},
          "100%": {opacity: "1"},
        }
      },
      animation : {
        wiggle: "wiggle 1s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
        fadeIn:"fadeIn 1s ease-in-out",
      }
    },
  },
  plugins: [],
}

