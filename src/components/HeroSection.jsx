// src/components/HeroSection.jsx
import React from 'react';
import { Github, Linkedin, ArrowRight } from 'lucide-react';
import hugoPhoto from '../assets/hugo.jpg';

const HeroSection = () => {
  return (
    // Removido o gradiente de fundo específico para usar o gradiente principal do App.jsx
    <section id="home" className="min-h-screen flex items-center justify-center py-20 md:py-0">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* --- Bloco de Texto (Esquerda) --- */}
          <div data-aos="fade-right" className="text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Hugo Wenner
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-6">
              Tecnólogo em Análise e Desenvolvimento de Sistemas
            </p>

            {/* Frase Filosófica */}
            <blockquote className="my-8 border-l-4 border-blue-500 pl-4">
              <p className="text-lg italic text-gray-400">
                "Não espere por oportunidades extraordinárias. Agarre as ocasiões comuns e as faça grandes."
              </p>
              <cite className="text-sm text-gray-500 block mt-2">- Orison Swett Marden</cite>
            </blockquote>

            {/* Botões de Ação */}
            <div className="flex justify-center md:justify-start space-x-4 mt-10">
              <a
                href="URL_DO_SEU_LINKEDIN" // <-- ATUALIZE AQUI COM SEU LINK REAL
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:scale-105 hover:shadow-blue-500/30 transition-all duration-300"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/hugowenner"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 bg-gray-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:scale-105 hover:bg-gray-600 hover:shadow-gray-500/30 transition-all duration-300"
              >
                <Github size={20} />
                <span>GitHub</span>
                <ArrowRight size={20} className="opacity-70 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* --- Bloco da Imagem (Direita) --- */}
          <div data-aos="fade-left" className="flex justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Efeito de borda com gradiente e animação */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl animate-pulse-slow opacity-60"></div>
              
              <div className="relative w-full h-full rounded-full overflow-hidden p-2 bg-zinc-900 shadow-2xl">
                <img
                  src={hugoPhoto}
                  alt="Foto de perfil de Hugo Wenner"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// Adicione esta animação customizada no seu arquivo tailwind.config.js se quiser o pulso mais lento
/*
// tailwind.config.js
theme: {
  extend: {
    animation: {
      'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    }
  }
}
*/

export default HeroSection;