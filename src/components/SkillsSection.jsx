// src/components/SkillsSection.jsx
import React from 'react';
import { skills } from '../data'; // Certifique-se de que o caminho está correto

// Função auxiliar para agrupar habilidades por categoria
const groupSkillsByCategory = (skillsArray) => {
  return skillsArray.reduce((acc, skill) => {
    const category = skill.category || 'Outros'; // Default para 'Outros' se não houver categoria
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {});
};

const SkillsSection = () => {
  const categorizedSkills = groupSkillsByCategory(skills);

  // Mapeamento de níveis para largura da barra de progresso e cor
  const levelMap = {
    'Básico': { width: '33%', text: 'Básico', color: 'bg-red-400' }, // Usando red-400 do primeiro input
    'Intermediário': { width: '66%', text: 'Intermediário', color: 'bg-yellow-500' },
    'Avançado': { width: '100%', text: 'Avançado', color: 'bg-green-500' },
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent" data-aos="fade-down">
          Minhas Habilidades
        </h2>

        {/* Mapeia as categorias para criar subseções */}
        {Object.keys(categorizedSkills).map((categoryName) => (
          <div key={categoryName} className="mb-16 last:mb-0">
            <h3 className="text-3xl font-bold text-center mb-10 text-white" data-aos="fade-up" data-aos-delay="100">
              {categoryName}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {categorizedSkills[categoryName].map((skill, index) => {
                const IconComponent = skill.icon;
                const skillLevel = levelMap[skill.level] || { width: '0%', text: 'Não Definido', color: 'bg-gray-500' };

                return (
                  <div
                    key={skill.name}
                    // Adicionado text-center aqui para centralizar todo o conteúdo do card
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-6 flex flex-col justify-between hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 text-center"
                    data-aos="fade-up" // Mantendo animação suave para os cards
                    data-aos-delay={`${index * 50}`} // Atraso levemente menor
                  >
                    <div>
                      <div
                        // Removido gap-4, adicionado justify-center
                        className="flex items-center justify-center mb-4"
                      >
                        <IconComponent size={28} className={`${skill.color} shrink-0`} />
                        <h4 className="text-lg font-bold ml-2">{skill.name}</h4> {/* Adicionado ml-2 para um pequeno espaçamento entre ícone e texto */}
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">{skill.description}</p>
                    </div>

                    {/* Nível de Proficiência */}
                    <div className="mt-auto pt-4 border-t border-white/10">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-400 text-sm">Nível:</span>
                        <span className={`text-sm font-semibold ${skillLevel.color.replace('bg-', 'text-')}`}>
                          {skillLevel.text}
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className={`${skillLevel.color} h-2 rounded-full transition-all duration-500 ease-out`}
                          style={{ width: skillLevel.width }}
                        ></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;