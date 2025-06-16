// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { navLinks } from '../data'; // Importe navLinks do data.js

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = 'home';
      for (const sectionId in navLinks) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) { // Ajuste 100px conforme necessário
            currentSection = sectionId;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Hugo Wenner
          </div>
          <div className="hidden md:flex space-x-8">
            {Object.keys(navLinks).map((sectionId) => (
              <button
                key={sectionId}
                onClick={() => scrollToSection(sectionId)}
                className={`capitalize transition-colors ${
                  activeSection === sectionId ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                }`}
              >
                {navLinks[sectionId]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;