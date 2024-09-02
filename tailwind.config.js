/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3DA9FC',
        danger: '#EF4565',
        semiTransparent: 'rgb(255 255 255 / 22%)',
        line: '#90B4CE',
        text: '#094067'
      },
      fontFamily: {
        arial: "arial unicode ms, lucida sans unicode, sans-serif"
      }
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

    }
  },
  plugins: []
}
