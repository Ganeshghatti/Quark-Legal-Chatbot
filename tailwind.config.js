/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "rgba(246, 164, 255, 1)",
        bg: "#212529",
        primary: "#710A64",
        fontWhite: "#ffffff",
      },
    },
  },
  plugins: [],
};
