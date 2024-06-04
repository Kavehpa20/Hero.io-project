/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["jakarta", ...defaultTheme.fontFamily.sans],
        komika: ["komika", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        hr: {
          blue: {
            170: "#32A6F4",
          },
          pink: {
            300: "#EA3898",
          },
        },
        dark: {
          200: "#051A32",
        },
        hero: {
          slate: {
            400: "#0A4170",
            750: "#00579C",
            850: "#05119C",
            950: "#051A32",
            960: "#061A32",
            970: "#071A32",
          },
          pink: {
            200: "#EA3898",
            300: "#D3358E",
          },
          glacier: {
            300: "#84B8D4",
            50: "#F0F8DA",
          },
          green: {
            330: "#00E074",
          },
        },
        borderColor: {
          blue: {
            slate: {
              400: "#0A4170",
            },
          },
        },
      },
    },
  },
  plugins: [],
};
