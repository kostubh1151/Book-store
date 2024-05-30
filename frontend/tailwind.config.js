/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'light-bg': '#ffffff', // White background for light mode
        'dark-bg': '#1e293b',  // Slate background for dark mode
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
