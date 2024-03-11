/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend:
    {
      colors:
      {
        red40: '#F8A9B0',
        red110: '#D52533',
        red120: '#BE212E',
        red130: '#A61D28',
        error100: '#FAC9CD',
        neutral6: '#F3F3F3',
        neutral12: '#ECEAEA',
        neutral25: '#DCDBDB',
        neutral85: '#565353',
        neutral100: '#393737',
        gray100: '#F2F4F7',
      },
    },
  },
  plugins: [],
}

