/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        'rol-black': '#1E1E1E',
        'rol-yellow': '#FBFF22'
      },
    },
  },
  plugins: [],
}
