/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend: {
      colors: {
        almostBlack: "#242424",
        orange: "#F8BA74",
      },
      fontFamily: {
        mk: "monaspace-krypton",
        mn: "monaspace-neon",
        inter: "Inter",
        mw: "Merriweather",
      },
      maxWidth: {
        content: "1050px",
      },
    },
  },
  plugins: [],
};
