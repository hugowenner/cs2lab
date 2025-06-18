import React from 'react';
import { Users, MessageCircle } from 'lucide-react'; // ALTERADO: Trophy para MessageCircle
import { heroContent } from '../data';

const HeroSection = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden text-white">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/VIDEOCS.mp4" type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </video>

      {/* Overlay para escurecer o vídeo e melhorar a legibilidade do texto */}
      <div className="absolute inset-0 bg-gray-950 opacity-80 z-10"></div>

      {/* Animação de background existente, ajuste z-index para ficar acima do vídeo e abaixo do conteúdo */}
      <div className="absolute inset-0 opacity-15 z-20">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-blue-electric-500 rounded-full blur-3xl animate-blob-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-electric-700 rounded-full blur-3xl animate-blob-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-electric-600 rounded-full blur-3xl animate-blob-pulse-slow delay-500"></div>
      </div>

      {/* Conteúdo da Seção Hero - z-index mais alto para ficar visível */}
      <div className="relative z-30 text-center max-w-5xl mx-auto px-4">
        <div className="mb-8" data-aos="fade-down" data-aos-duration="1000">
          <h1 className="text-6xl md:text-8xl font-extrabold mb-4 leading-tight bg-gradient-to-r from-blue-electric-400 via-blue-electric-600 to-blue-electric-500 bg-clip-text text-transparent animate-text-gradient text-shadow-hero-title"> {/* Adicionado text-shadow-hero-title */}
            {heroContent.title}
          </h1>
          <p className="text-xl md:text-3xl text-white font-light mb-3 mt-4 tracking-wide text-shadow-white-subtle" data-aos="fade-down" data-aos-delay="200"> {/* Adicionado text-shadow-white-subtle */}
            {heroContent.subtitle}
          </p>
          <p className="text-lg md:text-2xl text-blue-electric-300 font-semibold uppercase tracking-widest text-shadow-white-subtle" data-aos="fade-down" data-aos-delay="400"> {/* Adicionado text-shadow-white-subtle */}
            {heroContent.tagline}
          </p>
        </div>

        <div className="space-y-4 mb-10" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed text-shadow-white-subtle"> {/* Adicionado text-shadow-white-subtle */}
            {heroContent.description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
          <button
            onClick={() => scrollToSection('about')}
            className="bg-gradient-to-r from-blue-electric-500 to-blue-electric-700 hover:from-blue-electric-600 hover:to-blue-electric-800 px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl text-white flex items-center justify-center gap-2"
          >
            <Users className="w-6 h-6" />
            {heroContent.button1Text}
          </button>
          <button
            onClick={() => window.open('https://discord.gg/HGWT47n5ww', '_blank')}
            className="border-2 border-blue-electric-500 text-blue-electric-400 hover:bg-blue-electric-500 hover:text-white px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-6 h-6" /> {/* ALTERADO: Trophy para MessageCircle */}
            {heroContent.button2Text}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;