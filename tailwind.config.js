/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        'black': '#151515',
        'white': '#e5e5e5'
      },
      backgroundColor: {
        'black': '#151515',
        'white': '#e5e5e5',
      },
      borderRadius: {
        '2': '2rem'
      },
      keyframes: {
        scale: {
          '0%, 100%': { transform: 'scale(0.9)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
      animation: {
        scale: 'scale 2s infinite',
      },
    },
  },
  plugins: [],
}