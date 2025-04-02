/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        marqueeLTR: {
          '0%': { transform: 'translateX(-100%)' }, // Start from left (off-screen)
          '100%': { transform: 'translateX(100%)' }, // End to right (off-screen)
        },
      },
      animation: {
        marqueeLTR: 'marqueeLTR 10s linear infinite', // Left-to-right marquee
      },
    },
  },
  plugins: [],
};