// src/components/GithubSection.jsx
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { githubProjects } from '../data'; // Importe githubProjects do data.js

const GithubSection = () => {
  return (
    <section id="github" className="py-20 bg-black/20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Meu GitHub
        </h2>
        <div className="bg-gradient-to-r from-gray-700/20 to-gray-800/20 backdrop-blur-sm rounded-xl p-8 text-center mb-16 flex flex-col items-center">
          <Github size={48} className="text-white mb-4" />
          <h3 className="text-3xl font-bold mb-4">Explore Meus Repositórios</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Meu GitHub é onde eu coloco em prática o que aprendo, desde pequenos scripts até projetos completos. Sinta-se à vontade para explorar, clonar e dar seu feedback.
          </p>
          <a
            href="https://github.com/hugowenner"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-gray-600 to-gray-800 px-8 py-3 rounded-full font-semibold hover:scale-105 hover:shadow-lg hover:shadow-gray-500/20 transition-all flex items-center space-x-2"
          >
            <Github size={20} />
            <span>hugowenner</span>
            <ExternalLink size={16} className="opacity-70 ml-1" />
          </a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {githubProjects.map((project, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 flex flex-col hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-blue-400 mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-blue-500/10 text-blue-300 px-2 py-1 rounded-full text-xs font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-auto pt-4 border-t border-white/10">
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                  <Github size={16} />
                  <span>Ver código-fonte</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GithubSection;