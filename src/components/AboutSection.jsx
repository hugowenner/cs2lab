import React from 'react';
import { Target, Heart, Handshake, Shield, Brain, Award, Sparkles } from 'lucide-react';
import { aboutSectionContent } from '../data';
import HistorySection from './HistorySection'; // Importa o componente HistorySection

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        {/* Título e Subtítulo da Seção About */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-electric-400 to-blue-electric-600 bg-clip-text text-transparent">
            {aboutSectionContent.title}
          </h2>
          {/* Subtítulo: de text-gray-300 para text-white */}
          <p className="text-xl text-white max-w-3xl mx-auto">
            {aboutSectionContent.subtitle}
          </p>
        </div>

        {/* Nossa História (Componente Separado) */}
        <HistorySection />

        {/* Os Separadores Visuais e os blocos de "Nossa Missão" e "Regras de Conduta" foram removidos daqui */}
        {/*
        <div className="my-20 border-b-2 border-blue-electric-500/30 w-3/4 mx-auto rounded-full" data-aos="zoom-in" data-aos-duration="1000"></div>

        <div className="max-w-5xl mx-auto mb-20" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          <div className="bg-gradient-to-br from-gray-700/60 to-gray-800/60 p-10 rounded-xl border-2 border-blue-electric-600/30 shadow-2xl hover:shadow-blue-electric-500/30 transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden group">
            <div className="absolute inset-0 bg-blue-electric-900/10 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            <Target className="w-14 h-14 text-blue-electric-400 mb-6 mx-auto group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-4xl font-extrabold mb-4 text-blue-electric-300 text-center uppercase tracking-wider">
              {aboutSectionContent.mission.title}
            </h3>
            <p className="text-gray-200 text-lg md:text-xl leading-relaxed whitespace-pre-wrap text-center font-light">
              {aboutSectionContent.mission.description}
            </p>
          </div>
        </div>

        <div className="my-20 border-b-2 border-blue-electric-500/30 w-3/4 mx-auto rounded-full" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300"></div>

        <div className="max-w-5xl mx-auto mb-20" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
          <div className="bg-gradient-to-br from-gray-700/60 to-gray-800/60 p-10 rounded-xl border-2 border-blue-electric-600/30 shadow-2xl hover:shadow-blue-electric-500/30 transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden group">
             <div className="absolute inset-0 bg-blue-electric-900/10 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

            <Heart className="w-14 h-14 text-blue-electric-400 mb-6 mx-auto group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-4xl font-extrabold mb-4 text-blue-electric-300 text-center uppercase tracking-wider">
              {aboutSectionContent.values.title}
            </h3>
            <p className="text-gray-200 text-lg md:text-xl mb-8 whitespace-pre-wrap text-center font-light">
              {aboutSectionContent.values.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aboutSectionContent.values.items.map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center space-y-2 bg-gray-900/40 p-6 rounded-lg border border-gray-700 hover:border-blue-electric-500 transition-all duration-300 transform hover:scale-105 shadow-md">
                  <item.icon className="w-8 h-8 text-blue-electric-400 flex-shrink-0 mb-2 group-hover:scale-110 transition-transform duration-200" />
                  <h4 className="text-xl font-semibold text-gray-100">{item.label}</h4>
                  <p className="text-sm text-gray-400 leading-snug">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        */}
      </div>
    </section>
  );
};

export default AboutSection;