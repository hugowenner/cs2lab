import React from 'react';
import { Calendar, Brain, Trophy, ShieldCheck, Users, TrendingUp } from 'lucide-react'; // Importei alguns ícones adicionais
import { aboutSectionContent } from '../data';

const HistorySection = () => {
  return (
    <div className="space-y-6 mb-20">
      <div className="bg-gradient-to-br from-blue-electric-500/10 to-blue-electric-500/10 p-10 rounded-xl border border-blue-electric-500/30 shadow-2xl" data-aos="fade-up" data-aos-duration="1200">
        <Calendar className="w-20 h-20 text-blue-electric-400 mb-6 mx-auto animate-bounce-slow" /> {/* Ícone maior e animado */}
        <h3 className="text-4xl md:text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-blue-electric-400 to-blue-electric-600 bg-clip-text text-transparent">
          {aboutSectionContent.history.title}
        </h3>
        <p className="text-gray-300 text-center text-2xl mb-8 leading-relaxed font-light" data-aos="fade-up" data-aos-delay="200">
          {aboutSectionContent.history.subtitle}
        </p>

        <div className="text-center mt-12 mb-10" data-aos="fade-up" data-aos-delay="400">
          <p className="text-2xl font-bold text-gray-100 mb-6 flex items-center justify-center gap-3">
            <Users className="w-8 h-8 text-blue-electric-400" /> {aboutSectionContent.history.foundersTitle}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-3 text-gray-400 text-lg font-medium">
            {aboutSectionContent.history.founders.map((member, index) => (
              <span key={index} className="block text-blue-electric-200 hover:text-blue-electric-400 transition-colors duration-200">
                {member}
              </span>
            ))}
          </div>
        </div>

        {/* Citação "Motto" */}
        <div className="text-center my-12 p-6 bg-gray-900/50 rounded-lg border border-blue-electric-500/30 shadow-inner" data-aos="zoom-in" data-aos-delay="600">
          {aboutSectionContent.history.motto.map((line, index) => (
            <p key={index} className={`text-xl md:text-2xl italic font-light text-gray-200 mb-2 ${index === 0 ? 'text-blue-electric-300' : ''}`}>
              {line}
            </p>
          ))}
          <p className="text-blue-electric-400 font-semibold text-lg mt-6 flex items-center justify-center gap-2">
            <ShieldCheck className="w-6 h-6" /> Nossa Alma Competitiva
          </p>
        </div>

        {/* Frases de Encerramento */}
        <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="800">
          {aboutSectionContent.history.closing.map((line, index) => (
            <p key={index} className="text-lg md:text-xl text-gray-300 mb-3 leading-relaxed">
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