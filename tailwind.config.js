import { DEFAULT } from '@react-three/fiber/dist/declarations/src/core/utils';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "#000", 
          100: "#15252d",
          200: "#1d3440"
        }, 
        green: {
          DEFAULT: "#03d89f"
        }, 
        white: {
          DEFAULT: "#fff", 
          100: "#ffeadb"
        }, 
        grey: {
          DEFAULT: "#cfd7d6"
        }, 
        orange: {
          DEFAULT: "#fc5200"
        }
      } 
    },
  },
  plugins: [],
}

