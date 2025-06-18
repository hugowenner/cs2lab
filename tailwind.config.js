/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-electric': {
          DEFAULT: '#00BFFF',
          '50': '#E0FFFF',
          '100': '#B3FFFF',
          '200': '#80FFFF',
          '300': '#4DFFFF',
          '400': '#1AFFFF',
          '500': '#00BFFF',
          '600': '#009ACD',
          '700': '#007AA3',
          '800': '#005977',
          '900': '#00384B',
        },
      },
      keyframes: {
        'blob-pulse': { // Animação de bolha mais orgânica
          '0%, 100%': { transform: 'scale(1) translate(0%, 0%)' },
          '30%': { transform: 'scale(1.1) translate(5%, -5%)' },
          '60%': { transform: 'scale(0.9) translate(-5%, 5%)' },
          '80%': { transform: 'scale(1.05) translate(2%, -2%)' },
        },
        'text-gradient': { // Animação para o gradiente do texto
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        }
      },
      animation: {
        'blob-pulse-slow': 'blob-pulse 10s infinite ease-in-out', // Duração maior para mais suavidade
        'text-gradient': 'text-gradient 3s ease infinite', // Animação para o gradiente de texto
      },
    },
  },
  plugins: [],
}