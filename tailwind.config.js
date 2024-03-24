/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '361px',
      'md': '768px',
      'lg': '1440px'
    },
    extend: {
      colors: {
        bg_dark_mode: 'hsl(207, 26%, 17%)',
        dark_elements: 'hsl(209, 23%, 22%)',
        light_text: 'hsl(200, 15%, 8%)',
        light_input: 'hsl(0, 0%, 52%)',
        bg_light_mode: 'hsl(0, 0%, 98%)',
        dark_text_and_light_elements: 'hsl(0, 0%, 100%)',
      },
    },
    fontFamily: {
      nunito_sans: ['Nunito Sans', 'sans-serif'],
    },
    fontWeight: {
      '300': 300,
      '600': 600,
      '800': 800,
    },
  },
  plugins: [],
} 