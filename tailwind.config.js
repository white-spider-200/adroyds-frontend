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
        "blue-900": "#1E3A8A",
        "cyan-200": "#4c9ae7",
        "cyan-300": "#368de4",
        "cyan-400": "#2081E2",
        "cyan-500": "#1c74cb",
        "cyan-600": "#1967b4",
        "orange-400": "#FFC60A",
        "orange-500": "#E67E22",
        "gray-100": "#F3F5F5",
        "navy-500": "#0E1C3F",
      },
      fontFamily: {
        cairo: ["Cairo", "sans-serif"],
      },
      maxWidth: {
        "8xl": "88rem", // 1440px (you can adjust if you want wider)
      },
      borderRadius: {
        none: "0",
        xs: "0.8rem", // 2px  – tiny elements, dividers
        sm: "0.8rem", // 4px  – inputs, small buttons
        md: "0.8rem", // 6px  – default UI elements
        lg: "0.8rem", // 8px  – cards, buttons
        xl: "0.8rem", // 12px – modern cards
        "2xl": "0.8rem", // 16px – feature cards, sections
        "3xl": "0.8rem", // 24px – hero blocks
      },
    },
  },
  plugins: [],
};
