/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        text:"#FFFFFF",
        bg:"#121617",
        primary:"#bb00ff",
        secondary:"#484848",
        accent:"#00f2dd"
      }
    },
  },
  plugins: [],
};
