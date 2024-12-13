/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}", // Ensure all relevant files are scanned
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#1d4ed8", // Example primary color
        "primary-foreground": "#ffffff", // Example foreground color for text
        card: "#f9fafb", // Light mode card background
        background: "#f3f4f6", // General light mode background
        input: "#ffffff", // Input field background
      },
    },
  },
  plugins: [],
};
