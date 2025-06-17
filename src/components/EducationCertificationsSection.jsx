// src/components/EducationCertificationsSection.jsx
import React from 'react';
import { GraduationCap, Calendar, ExternalLink } from 'lucide-react';
import { certifications } from '../data'; // Verifique se este caminho está correto

const EducationCertificationsSection = ({ courseProgress }) => {
  return (
    <section id="education-certifications" className="py-20">
      <div className="container mx-auto px-6">
        {/* Título da Seção */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Jornada de Aprendizagem
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Minha trilha de conhecimento, combinando formação acadêmica e especialização contínua.
          </p>
        </div>

        {/* --- Início da Timeline --- */}
        <div className="relative max-w-4xl mx-auto">
          {/* Linha Central da Timeline */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-white/10 rounded-full transform -translate-x-1/2"></div>

          {/* Item 1: Formação Superior (Esquerda) */}
          <div className="relative mb-16">
            <div className="absolute left-1/2 top-4 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform -translate-x-1/2 border-4 border-slate-900"></div>
            <div className="md:w-1/2 md:pr-12">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 hover:bg-white/10 transition-all duration-300 transform md:hover:scale-105">
                <div className="flex items-center gap-4 mb-4">
                  <GraduationCap size={32} className="text-blue-400" />
                  <div>
                    <h3 className="text-xl font-bold">Análise e Desenvolvimento de Sistemas</h3>
                    <p className="text-md text-gray-400">Centro Universitário Newton Paiva</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  Foco no ciclo de vida completo do software, desde a análise de requisitos até a implementação de sistemas robustos.
                </p>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-200">Progresso</span>
                  <span className="text-sm font-bold text-blue-400">{courseProgress}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full" style={{ width: `${courseProgress}%` }}></div>
                </div>
                 <div className="flex items-center space-x-2 text-gray-500 text-sm mt-4">
                  <Calendar size={14} />
                  <span>2024 - 2026</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mapeamento das Certificações (AGORA INTERCALADO) */}
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            // Verifica se o índice é par (0, 2, 4...) para posicionar à esquerda
            // ou ímpar (1, 3, 5...) para posicionar à direita
            const isEven = index % 2 === 0; 
            const aosAnimation = isEven ? 'fade-right' : 'fade-left';
            const positionClasses = isEven ? 'md:w-1/2 md:pr-12' : 'md:w-1/2 md:ml-auto md:pl-12'; //

            return (
              <div key={index} className="relative mb-16">
                <div className="absolute left-1/2 top-4 w-4 h-4 bg-gradient-to-r from-green-400 to-teal-500 rounded-full transform -translate-x-1/2 border-4 border-slate-900"></div>
                {/* Aplica as classes dinamicamente */}
                <div className={positionClasses}> 
                   <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform md:hover:scale-105">
                     <div className="flex items-center justify-between mb-3">
                       <h3 className="text-lg font-bold">{cert.title}</h3>
                       <IconComponent size={24} className="text-green-400 shrink-0" />
                     </div>
                     <p className="text-gray-300 text-sm leading-relaxed">{cert.description}</p>
                     <span className="inline-block mt-3 bg-green-500/10 text-green-300 text-xs font-bold px-2 py-1 rounded-full">{cert.platform}</span>
                   </div>
                </div>
              </div>
            );
          })}
          
          {/* Item Final: CTA Alura (Esquerda) */}
          <div className="relative" >
            <div className="absolute left-1/2 top-4 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transform -translate-x-1/2 border-4 border-slate-900"></div>
            <div className="md:w-1/2 md:pr-12">
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold mb-2">315+ Horas de Aprendizado</h3>
                <p className="text-gray-400 mb-6">Aprendizado contínuo na plataforma Alura.</p>
                <p className="text-xs text-gray-500 mb-6">Período: 08/11/2024 a 11/06/2025</p>
                <a href="#" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                  <ExternalLink size={20} />
                  <span>Ver Perfil Alura</span>
                </a>
              </div>
            </div>
          </div>

        </div>
        {/* --- Fim da Timeline --- */}
      </div>
    </section>
  );
};

export default EducationCertificationsSection;