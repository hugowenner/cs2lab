// src/components/FooterSection.jsx
import React from 'react';
import { Mail, Phone, Github, Linkedin, Heart } from 'lucide-react';

const FooterSection = () => {
  return (
    <footer id="contact" className="py-20 bg-black/40 border-t border-white/10">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Entre em Contato
        </h2>
        <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
          Estou sempre aberto a novas oportunidades, colaborações e um bom bate-papo sobre tecnologia. Sinta-se à vontade para me contatar através de um dos canais abaixo.
        </p>

        {/* Grid de Contatos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/hugowenner/" target="_blank" rel="noopener noreferrer" className="bg-white/5 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center justify-center hover:bg-white/10 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
            <Linkedin size={28} className="text-blue-400" />
            <span className="mt-2 font-semibold">LinkedIn</span>
          </a>

          {/* GitHub */}
          <a href="https://github.com/hugowenner" target="_blank" rel="noopener noreferrer" className="bg-white/5 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center justify-center hover:bg-white/10 hover:scale-105 hover:shadow-xl hover:shadow-gray-700/20 transition-all duration-300">
            <Github size={28} className="text-gray-300" />
            <span className="mt-2 font-semibold">GitHub</span>
          </a>

          {/* Email */}
          <a href="mailto:hugowenner5@gmail.com" className="bg-white/5 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center justify-center hover:bg-white/10 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300">
            <Mail size={28} className="text-purple-400" />
            <span className="mt-2 font-semibold">Email</span>
          </a>

          {/* WhatsApp */}
          <a href="https://wa.me/5531971836063" target="_blank" rel="noopener noreferrer" className="bg-white/5 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center justify-center hover:bg-white/10 hover:scale-105 hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300">
            <Phone size={28} className="text-green-400" />
            <span className="mt-2 font-semibold">WhatsApp</span>
          </a>

        </div>

        <div className="text-center text-gray-500 mt-16 text-sm">
          <p className="flex items-center justify-center gap-2">
            Desenvolvido com <Heart size={14} className="text-red-500" /> por Hugo Wenner
          </p>
          <p className="mt-1">
            Estudante de Análise e Desenvolvimento de Sistemas
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;