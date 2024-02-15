/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        mk: "monaspace-krypton",
        mn: "monaspace-neon",
      },
    },
  },
  plugins: [],
};