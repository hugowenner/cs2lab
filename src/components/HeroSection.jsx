// src/components/HeroSection.jsx
import React, { useEffect, useState } from 'react';
import { User, Mail, Phone, MapPin, Github, Linkedin, ChevronDown } from 'lucide-react';
import hugoPhoto from '../assets/hugo.jpg'; // O caminho para sua foto, pode ajustar se mudou

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="w-48 h-48 mx-auto mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
            <div className="absolute inset-1 rounded-full overflow-hidden">
              <img
                src={hugoPhoto}
                alt="Foto de perfil de Hugo Wenner"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent pb-4">
            Hugo Wenner
          </h1>

          <p className="text-2xl md:text-3xl mb-8 text-gray-300">
            Tecnólogo em Análise e Desenvolvimento de Sistemas
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <MapPin size={16} />
              <span>Belo Horizonte, MG</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Phone size={16} />
              <span>(31) 97183-6063</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Mail size={16} />
              <span>hugowenner5@gmail.com</span>
            </div>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="#" className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full hover:scale-110 transition-transform">
              <Linkedin size={24} />
            </a>
            <a href="#" className="p-3 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full hover:scale-110 transition-transform">
              <Github size={24} />
            </a>
          </div>
        </div> {/* <--- ESTA DIV DE FECHAMENTO ESTAVA FALTANDO! (Linha 59) */}
      </div> {/* Esta div já estava lá, fechando o "container mx-auto" */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-white/100" />
      </div>
    </section>
  );
};

export default HeroSection;