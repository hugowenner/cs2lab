import React from 'react';
import { Users, Trophy } from 'lucide-react';
import { heroContent } from '../data';

const HeroSection = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden text-white">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline // Importante para reprodução automática em dispositivos móveis
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/VIDEOCS.mp4" type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </video>

      {/* Overlay para escurecer o vídeo e melhorar a legibilidade do texto */}
      <div className="absolute inset-0 bg-gray-900 opacity-70 z-10"></div> {/* Ajuste a opacidade conforme necessário */}
      
      {/* Animação de background existente, ajuste z-index para ficar acima do vídeo e abaixo do conteúdo */}
      <div className="absolute inset-0 opacity-10 z-20"> {/* Ajustado para z-20 */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-red-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-500 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      {/* Conteúdo da Seção Hero - z-index mais alto para ficar visível */}
      <div className="relative z-30 text-center max-w-4xl mx-auto px-4"> {/* Ajustado para z-30 */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent animate-pulse">
            {heroContent.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-2">
            {heroContent.subtitle}
          </p>
          <p className="text-lg md:text-xl text-orange-400 font-semibold">
            {heroContent.tagline}
          </p>
        </div>
        
        <div className="space-y-4 mb-8">
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {heroContent.description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => scrollToSection('about')}
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Users className="inline-block w-5 h-5 mr-2" />
            {heroContent.button1Text}
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <Trophy className="inline-block w-5 h-5 mr-2" />
            {heroContent.button2Text}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;