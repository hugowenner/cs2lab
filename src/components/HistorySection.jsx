import React from 'react';
import { Calendar, Users, ShieldCheck, TrendingUp } from 'lucide-react';
import { aboutSectionContent } from '../data';

const HistorySection = () => {
  return (
    <div className="space-y-6 mb-20">
      <div className="bg-gradient-to-br from-blue-electric-500/10 to-blue-electric-500/10 p-10 rounded-xl border border-blue-electric-500/30 shadow-2xl" data-aos="fade-up" data-aos-duration="1200">
        <Calendar className="w-16 h-16 text-blue-electric-400 mb-6 mx-auto animate-bounce-slow" />
        <h3 className="text-3xl md:text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-blue-electric-400 to-blue-electric-600 bg-clip-text text-transparent">
          {aboutSectionContent.history.title}
        </h3>
        {/* Descrição: de text-gray-300 para text-white */}
        <p className="text-white text-center text-2xl mb-8 leading-relaxed font-light whitespace-pre-wrap" data-aos="fade-up" data-aos-delay="200">
          {aboutSectionContent.history.description}
        </p>

        {/* Seção dos Fundadores */}
        <div className="text-center mt-12 mb-10" data-aos="fade-up" data-aos-delay="400">
          {/* Título Fundadores: de text-gray-100 para text-white */}
          <p className="text-2xl font-bold text-white mb-6 flex items-center justify-center gap-3">
            <Users className="w-8 h-8 text-blue-electric-400" /> {aboutSectionContent.history.foundersTitle}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-3 text-gray-400 text-lg font-medium">
            {/* Membros Fundadores: de text-blue-electric-200 para text-white (ou um cinza muito claro como text-gray-100 para contraste sutil) */}
            {aboutSectionContent.history.founders.map((member, index) => (
              <span key={index} className="block text-white hover:text-blue-electric-400 transition-colors duration-200">
                {member}
              </span>
            ))}
          </div>
        </div>

        {/* Citação "Motto" */}
        <div className="text-center my-12 p-6 bg-gray-900/50 rounded-lg border border-blue-electric-500/30 shadow-inner" data-aos="zoom-in" data-aos-delay="600">
          {/* Texto Motto: de text-gray-200 para text-white */}
          <p className="text-xl md:text-2xl italic font-light text-white mb-2">
            {aboutSectionContent.history.motto}
          </p>
          <p className="text-blue-electric-400 font-semibold text-lg mt-6 flex items-center justify-center gap-2">
            <ShieldCheck className="w-6 h-6" /> Nossa Alma Competitiva
          </p>
        </div>

        {/* Frases de Encerramento (incluindo a parte "Uma Comunidade, Um Objetivo") */}
        <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="800">
          {aboutSectionContent.history.communityMotto.map((line, index) => (
            // Linhas da comunidade: de text-gray-300 para text-white
            <p key={index} className="text-lg md:text-xl text-white mb-3 leading-relaxed whitespace-pre-wrap">
              {line}
            </p>
          ))}
          <p className="text-blue-electric-400 font-bold text-2xl mt-8 flex items-center justify-center gap-3">
            <TrendingUp className="w-8 h-8" /> Sua Jornada Começa Aqui!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HistorySection;