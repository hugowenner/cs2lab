// src/components/ExperienceSection.jsx
import React from 'react';
import { Calendar } from 'lucide-react';
import { experiences } from '../data'; // Importe experiences do data.js

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-black/20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Experiência Profissional
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-blue-400 mb-2">{exp.title}</h3>
                  <p className="text-xl text-gray-300 mb-2">{exp.company}</p>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Calendar size={16} />
                  <span>{exp.period}</span>
                </div>
              </div>
              <p className="text-gray-300 mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.achievements.map((achievement, i) => (
                  <span key={i} className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-3 py-1 rounded-full text-sm">
                    {achievement}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;