// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import AOS from 'aos'; // Importe AOS
import 'aos/dist/aos.css'; // Importe o CSS do AOS

// Inicialize AOS
AOS.init({
  offset: 100, // offset (em px) de quando a animação deve começar
  duration: 1000, // duração das animações
  easing: 'ease-in-out', // tipo de easing
  once: true // se as animações devem ocorrer apenas uma vez
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);