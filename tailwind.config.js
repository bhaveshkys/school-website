/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      width: {
        'fill-available': '-webkit-fill-available',
      },
      height: {
        'fill-available': '-webkit-fill-available',
      },
      colors: {
        primary: '#A5241C',
        secondary: '#1C1C1C',
      },
    },
  },
  plugins: [
    function ({ addUtilities }:any) {
      addUtilities({
        '.hide-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
        '.hide-scrollbar': {
          '-ms-overflow-style': 'none', /* IE and Edge */
          'scrollbar-width': 'none',    /* Firefox */
        },
      })
    },
  ],
}

