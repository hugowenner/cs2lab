import React from 'react';
import { SmilePlus, Handshake, Brain, Shield, Award, Users, Trophy, ShieldCheck } from 'lucide-react'; // Ajuste as importações aqui para refletir apenas os usados nos items
import { aboutSectionContent } from '../data';

const ConductRules = () => {
  return (
    <div className="max-w-5xl mx-auto mb-20" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
      <div className="bg-gradient-to-br from-gray-700/60 to-gray-800/60 p-10 rounded-xl border-2 border-blue-electric-600/30 shadow-2xl hover:shadow-blue-electric-500/30 transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden group">
        {/* Elemento de fundo sutil para efeito visual */}
        <div className="absolute inset-0 bg-blue-electric-900/10 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

        <SmilePlus className="w-14 h-14 text-blue-electric-400 mb-6 mx-auto group-hover:scale-110 transition-transform duration-300" /> {/* Ícone maior e centralizado, AGORA É SMILEPLUS */}
        <h3 className="text-4xl font-extrabold mb-4 text-blue-electric-300 text-center uppercase tracking-wider">
          {aboutSectionContent.values.title}
        </h3>
        <p className="text-white text-lg md:text-xl mb-8 whitespace-pre-wrap text-center font-light">
          {aboutSectionContent.values.description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Ajustado para 3 colunas em lg */}
          {aboutSectionContent.values.items.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-2 bg-gray-900/40 p-6 rounded-lg border border-gray-700 hover:border-blue-electric-500 transition-all duration-300 transform hover:scale-105 shadow-md"> {/* Estilo aprimorado para os itens */}
              {/* O item.icon deve ser SmilePlus, Handshake, Users, Trophy, Brain, ShieldCheck ou Award */}
              <item.icon className="w-8 h-8 text-blue-electric-400 flex-shrink-0 mb-2 group-hover:scale-110 transition-transform duration-200" />
              <h4 className="text-xl font-semibold text-white">{item.label}</h4>
              <p className="text-sm text-gray-400 leading-snug">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConductRules;