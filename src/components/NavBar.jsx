import React from 'react';
import { Menu, X } from 'lucide-react';
import { navItems } from '../data';
import NoFearLogo from '../assets/nofear.png'; // Importe a imagem

const NavBar = ({ isMenuOpen, setIsMenuOpen, activeSection, scrollToSection }) => {
  return (
    <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-blue-electric-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            {/* Substitua o div do ícone Target pela imagem */}
            <img src={NoFearLogo} alt="иo.ƒear™ Gaming Team Logo" className="h-10 w-auto" />
             {/* Remova o span do nome do time, pois agora o logo é a imagem */}
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors duration-200 hover:text-blue-electric-400 ${
                  activeSection === item.id ? 'text-blue-electric-400' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Botão do Menu Mobile */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-blue-electric-500/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-white hover:text-blue-electric-400 transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;