/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend: {
      colors: {
        almostBlack: "#242424",
        spaceGray: "#333333",
        lightGray: "#f1f3f4",
        secondary: "#F8BA74",
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
