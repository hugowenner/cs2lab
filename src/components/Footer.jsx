import React from 'react';
import { footerContent } from '../data';
import NoFearLogo from '../assets/nofear.png';
import { navItems } from '../data'; // Importe navItems

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Obtém o ano atual dinamicamente

  return (
    <footer className="bg-gray-800 border-t border-blue-electric-500/20 py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Logo e Nome da Comunidade */}
        <div className="flex items-center justify-center space-x-2 mb-4">
          <img src={NoFearLogo} alt="иo.ƒear™ Gaming Team Logo" className="h-12 w-auto" /> {/* Aumentado o tamanho do logo */}
        </div>

        {/* Links das Seções */}
        <div className="mb-6">
          <h4 className="text-xl font-bold text-blue-electric-400 mb-3">Navegação</h4>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-white text-lg">
            {navItems.map(item => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="hover:text-blue-electric-400 transition-colors duration-200">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Informações de Contato e Direitos Autorais */}
        <p className="text-white mb-2">
          {footerContent.subtitle}
        </p>
        <p className="text-sm text-gray-200 mb-2">
          {footerContent.copyright.replace('{year}', currentYear)} {/* Usando o ano dinâmico */}
        </p>
        <p className="text-sm text-gray-200">
          {footerContent.developerInfo}
        </p>
      </div>
    </footer>
  );
};

export default Footer;