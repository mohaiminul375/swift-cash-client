/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "Permanent-Marker": '"Permanent Marker", cursive',
        'raleway':'"Raleway", sans-serif'
      },
    },
  },
  plugins: [require("daisyui")],
};
