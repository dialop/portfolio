module.exports = {
  darkMode: 'class', 
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#d3dce7',
        'custom-green': '#00FF00',
      },
      keyframes: {
        aurora: {
          'from': { backgroundPosition: "50% 50%, 50% 50%" },
          'to': { backgroundPosition: "350% 50%, 350% 50%" },
        },
        twinkle: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
      },
      animation: {
        twinkle: 'twinkle 1.5s infinite',
        aurora: "aurora 60s linear infinite",
      },
    },
  },
  plugins: [],
};
