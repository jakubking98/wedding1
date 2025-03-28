/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        //Website 1
        marcellus: ["var(--font-marcellus)"],
        baskervville: ["var(--font-baskervville)"],
        //Website 2
        comfortaa: ["var(--font-comfortaa)"],
        allura: ["var(--font-allura)"],
      },
      colors: {
        //koloru leyout do dostoswania
        ColorWeb1: "#e9d7d2",
        ColorWeb2: "#8e5c4e",
        ColorWeb3: "#282727",
        ColorWeb4: "#786e69",
      },
      textShadow: {
        default: "0 2px 4px rgba(0, 0, 0, 0.10)",
        md: "0 3px 6px rgba(0, 0, 0, 0.15)",
        lg: "0 10px 20px rgba(0, 0, 0, 0.25)",
        xl: "0 20px 40px rgba(0, 0, 0, 0.30)",
        strong: "0 4px 6px rgba(0, 0, 0, 0.5)",
      },
      boxShadow: {
        menu: "0 5px 15px rgba(0,0,0,0.1)",
      },
      keyframes: {
        treeRotate: {
          "0%": { transform: "rotate(-30deg)" },
          "100%": { transform: "rotate(-10deg)" },
        },
        treeRotate2: {
          "0%": { transform: "rotate(-40deg)" },
          "100%": { transform: "rotate(-20deg)" },
        },
        treeRotate3: {
          "0%": { transform: "rotate(-100deg)" },
          "100%": { transform: "rotate(-120deg)" },
        },
        float: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
      animation: {
        treeRotate: "treeRotate 15s ease-in-out infinite alternate",
        treeRotate2: "treeRotate2 15s ease-in-out infinite alternate",
        treeRotate3: "treeRotate3 15s ease-in-out infinite alternate",
        float: "float 5s ease-in-out infinite",
      },
    },
  },
  safelist: [
    {
      pattern:
        /^(fill|stroke|border|bg|text)-(white|gray|blue|indigo|sky|teal|emerald|amber|orange|red|pink|purple|stone|black)(-(100|200|300|400|500|600|700|800|900))?$/,
    },
    {
      pattern:
        /^object-(top|bottom|left|right|center|left-top|left-bottom|right-top|right-bottom)$/,
    },
  ],
  plugins: [],
};
