/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', 
    './src/**/*.{js,jsx,ts,tsx}', 
    './components/**/*.{js,jsx,ts,tsx}', 
    './views/**/*.{js,jsx,ts,tsx}'], // Include all JSX/TSX files
  theme: {
    extend: {},
  },
  plugins: [],
};
