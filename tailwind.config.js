/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-50": "#EFF6FF", // almost white
        "blue-100": "#DBEAFE", // very pale blue
        "blue-200": "#BFDBFE", // light sky blue
        "blue-300": "#93C5FD", // soft blue
        "blue-400": "#60A5FA", // medium-light blue
        "blue-500": "#3B82F6", // strong blue
        "blue-600": "#2563EB", // deep blue
        "blue-700": "#1D4ED8", // base blue
        "blue-800": "#1E40AF", // darker
        "blue-900": "#1E3A8A", // darkest
        "cyan-400": "#1DC0DA",
        "orange-400": "#F3AF1B",
        "orange-500": "#E67E22",
      },
      fontFamily: {
        cairo: ["Cairo", "sans-serif"],
      },
      maxWidth: {
        "8xl": "88rem", // 1440px (you can adjust if you want wider)
      },
    },
  },
  plugins: [],
};
