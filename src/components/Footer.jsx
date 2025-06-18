import React from 'react';
// import { Target } from 'lucide-react'; // Remova esta linha se Target não for usado em outro lugar no Footer
import { footerContent } from '../data';
import NoFearLogo from '../assets/nofear.png'; // Importe a imagem

const Footer = () => {
  return (
    <footer className="bg-gray-800 border-t border-blue-electric-500/20 py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          {/* Substitua o div do ícone Target e o span de texto pela imagem */}
          <img src={NoFearLogo} alt="иo.ƒear™ Gaming Team Logo" className="h-10 w-auto" />
          {/* O nome do time já está no logo da imagem, então removemos o span de texto aqui */}
        </div>
        <p className="text-white mb-2">
          {footerContent.subtitle}
        </p>
        <p className="text-sm text-gray-200">
          {footerContent.description}
        </p>
      </div>
    </footer>
  );
};

export default Footer;