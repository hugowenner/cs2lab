// src/components/ExperienceSection.jsx
import React from 'react';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react'; 
import { experiences } from '../data';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-black/20">
      <div className="container mx-auto px-6">
        {/* Título da Seção */}
        <div className="text-center mb-20" data-aos="fade-down">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Experiência Profissional
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Uma jornada de crescimento, desafios e resultados comprovados.
          </p>
        </div>

        {/* --- Início dos Blocos de Experiência --- */}
        <div className="space-y-20">
          {experiences.map((exp, index) => {
            // Lógica para alternar o layout
            const isReversed = index % 2 !== 0;

            return (
              <div key={index} className="grid md:grid-cols-5 gap-8 md:gap-12 items-center" data-aos="fade-up">
                
                {/* Coluna de Informações (Cargo, Empresa, Período) */}
                <div className={`md:col-span-2 ${isReversed ? 'md:order-last' : ''}`}>
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 h-full transform hover:-translate-y-1 transition-transform duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-gradient-to-br from-blue-500/30 to-purple-500/30 p-3 rounded-lg">
                        <Briefcase className="text-blue-300" size={24} />
                      </div>
                      <h3 className="text-2xl font-bold text-blue-400">{exp.title}</h3>
                    </div>
                    <p className="text-xl text-gray-300 mb-4 ml-1">{exp.company}</p>
                    <div className="flex items-center space-x-2 text-gray-400 text-sm ml-1">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>

                {/* Coluna de Detalhes (Descrição e Conquistas) */}
                <div className="md:col-span-3">
                  <p className="text-gray-300 leading-relaxed mb-6">{exp.description}</p>
                  
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-400 mt-1 shrink-0" />
                        <span className="text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            );
          })}
        </div>
        {/* --- Fim dos Blocos --- */}
      </div>
    </section>
  );
};

export default ExperienceSection;