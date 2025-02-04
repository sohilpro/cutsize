/** @type {import('tailwindcss').Config} */
import formkitTheme from "@formkit/themes/tailwindcss";

export default {
  content: ["./formkit.config.ts"],
  theme: {
    fontFamily: {
      Estedad_VF: "Estedad-VF",
    },
    extend: {
      colors: {
        primary: '#373636',
        secondary: '#c3c3c4',
        auth: {
          blue: '#272262',
          orange: '#ee9c2f',
          sky: '#14abf7',
          kerem: '#ffce8e',
          gray: '#cce6f4',
        }
      }
    },
  },
  plugins: [formkitTheme],
}

