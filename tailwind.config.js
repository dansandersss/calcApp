/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ws_regular: ["WorkSans-Regular", "sans-serif"],
        ws_light: ["WorkSans-Light", "sans-serif"],
      },
    },
  },
  plugins: [],
};
