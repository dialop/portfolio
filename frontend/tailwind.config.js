/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // this will include all your JavaScript and TypeScript files in src folder
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        customGrey: '#333333', // Replace '#333333' with your desired hex code
      },
    },
  },
  plugins: [],
};