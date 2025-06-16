// src/components/EducationCertificationsSection.jsx
import React from 'react';
import { GraduationCap, Calendar, ExternalLink } from 'lucide-react';
import { certifications } from '../data'; // Importe certifications do data.js

const EducationCertificationsSection = ({ courseProgress }) => {
  return (
    <section id="education-certifications" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Formação e Certificações
        </h2>
        {/* Conteúdo da Formação */}
        <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-sm rounded-xl p-8 mb-20 hover:bg-white/10 transition-all duration-300">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-lg shrink-0">
              <GraduationCap size={40} className="text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-400">Análise e Desenvolvimento de Sistemas</h3>
              <p className="text-lg text-gray-300">Centro Universitário Newton Paiva</p>
            </div>
          </div>
          <p className="text-gray-300 mb-6">
            Curso superior de tecnologia focado no ciclo de vida completo do software, desde a análise de requisitos e modelagem de dados até a implementação e manutenção de sistemas robustos e escaláveis.
          </p>
          <div className="flex items-center space-x-2 text-gray-400 mb-8">
            <Calendar size={16} />
            <span>Período: 2024 - 2026</span>
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-semibold text-gray-200">Progresso do Curso</h4>
              <span className="text-sm font-bold text-blue-400">{courseProgress}% Concluído</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-1000"
                style={{ width: `${courseProgress}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Conteúdo das Certificações */}
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-200">Certificações e Cursos Adicionais</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {certifications.map((cert) => {
            const IconComponent = cert.icon;
            return (
              <div key={cert.title} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 flex flex-col hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <IconComponent size={24} className="text-purple-400 shrink-0" />
                    <h3 className="text-lg font-bold">{cert.title}</h3>
                  </div>
                  <span className="bg-purple-500/10 text-purple-300 text-xs font-bold px-2 py-1 rounded-full">{cert.platform}</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed flex-grow">{cert.description}</p>
              </div>
            );
          })}
        </div>
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Total de Horas Dedicadas</h3>
          <p className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            315+ Horas
          </p>
          <p className="text-gray-300 mb-6">
            Aprendizado contínuo na plataforma Alura | Período: 08/11/2024 a 11/06/2025
          </p>
          <div className="flex justify-center">
            <a href="#" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform flex items-center space-x-2">
              <ExternalLink size={20} />
              <span>Ver Certificados na Alura</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationCertificationsSection;