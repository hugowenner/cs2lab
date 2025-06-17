/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/data.js", // Adicionado para escanear classes de cor de skills
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'sans' será sua fonte padrão (Roboto, para o corpo do texto)
        // 'heading' será para títulos (Poppins)
        sans: ['Roboto', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}