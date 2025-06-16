// src/components/AboutSection.jsx
import React from 'react';
import { Award, TrendingUp, Zap, Star, Target } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-black/20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Sobre Mim
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Sou um profissional apaixonado por tecnologia com sólida formação em Análise e
              Desenvolvimento de Sistemas e mais de <span className="text-blue-400 font-bold">315 horas</span> de certificações especializadas.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Minha jornada combina experiência prática em suporte técnico com conhecimentos avançados em
              programação, segurança da informação e análise de dados.
            </p>
            <div className="flex items-center space-x-2 text-purple-400">
              <Target size={20} />
              <span className="font-semibold">Objetivo:</span>
            </div>
            <p className="text-gray-300 ml-7">
              Busco oportunidades para aplicar minha experiência técnica em desenvolvimento de software,
              análise de dados ou segurança da informação, contribuindo para projetos que impactem positivamente
              os usuários e a organização.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-6 rounded-xl backdrop-blur-sm">
              <Award className="text-blue-400 mb-4" size={32} />
              <h3 className="font-bold text-xl mb-2">315+</h3>
              <p className="text-gray-300">Horas de Certificação</p>
            </div>
            <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 p-6 rounded-xl backdrop-blur-sm">
              <TrendingUp className="text-green-400 mb-4" size={32} />
              <h3 className="font-bold text-xl mb-2">3000+</h3>
              <p className="text-gray-300">Usuários Atendidos</p>
            </div>
            <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 p-6 rounded-xl backdrop-blur-sm">
              <Zap className="text-orange-400 mb-4" size={32} />
              <h3 className="font-bold text-xl mb-2">99%</h3>
              <p className="text-gray-300">Disponibilidade</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-6 rounded-xl backdrop-blur-sm">
              <Star className="text-purple-400 mb-4" size={32} />
              <h3 className="font-bold text-xl mb-2">150%</h3>
              <p className="text-gray-300">Aumento Engajamento</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;