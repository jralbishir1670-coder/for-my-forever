/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forever: {
          ink: '#2f2330',
          blush: '#f7d8dd',
          rose: '#b33f63',
          wine: '#6d233f',
          pearl: '#fffaf6',
          champagne: '#eacb8f',
          sage: '#7bbfbc',
        },
      },
      boxShadow: {
        luxury: '0 32px 90px rgba(109, 35, 63, 0.2)',
        glow: '0 0 80px rgba(255, 179, 195, 0.5)',
      },
    },
  },
  plugins: [],
};
