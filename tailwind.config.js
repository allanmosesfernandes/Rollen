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
        'rol-yellow': '#FBFF22',
        'gray-alpha': "#ffffff24",
        'gray-alpha2': "#ededed",
      },
      fontFamily: {
        'geistRegular': ['geist-regular', 'sans-serif'],
        'geistLight': ['geist-light', 'sans-serif'],
        'geistSemiBold': ['geist-semibold', 'sans-serif'],
      },
      backgroundImage: {
        "img-eclipse": "url('/src/images/eclipse-4.svg')",
        "img2": "url('/src/images/icon.png')",
      }
    },
  },
  plugins: [],
}
// width: 432px;
//     /* height: 160px; */
//     margin-left: -27px;
//     margin-top: 21px;