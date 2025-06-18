import React from 'react';
import { aboutSectionContent } from '../data';
import HistorySection from './HistorySection';
import ConductRules from './ConductRules';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        {/* Título e Subtítulo da Seção About */}
        <div className="text-center mb-16" data-aos="fade-down">
          {/* Título "Sobre Nós" (h2): já está com gradiente, manter tamanho ou ajustar se quiser menor */}
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-electric-400 to-blue-electric-600 bg-clip-text text-transparent">
            {aboutSectionContent.title}
          </h2>
          {/* Subtítulo global: de text-xl para text-lg */}
          <p className="text-lg text-white max-w-3xl mx-auto">
            {aboutSectionContent.subtitle}
          </p>
        </div>

        {/* Nossa História (Componente Separado) */}
        <HistorySection />

        {/* Regras de Conduta */}
        <ConductRules />
      </div>
    </section>
  );
};

export default AboutSection;