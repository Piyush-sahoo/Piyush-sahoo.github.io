/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'blue-to-yellow': '0px 4px 6px -1px rgba(0, 0, 255, 0.1), 0px 2px 4px -1px rgba(255, 255, 0, 0.1)',
      },
    },
    fontFamily: {
      signature: ["Caveat"]
    }
  },
  plugins: [],
}

