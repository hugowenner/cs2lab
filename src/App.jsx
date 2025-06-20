import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import LegendsSection from './components/LegendsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { navItems } from './data'; // Import navItems for scroll logic
import HistorySection from './components/HistorySection'; // Certifique-se de importar HistorySection se ainda não estiver


const App = () => { // Renomeado de CS2LabWebsite para App
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Get section IDs from navItems for dynamic scroll tracking
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100; // Add offset for better active state detection

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close mobile menu after clicking a link
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <NavBar 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
      />
      
      <HeroSection scrollToSection={scrollToSection} />
      <AboutSection />
      {/* O componente HistorySection já está sendo usado dentro de AboutSection,
          então não precisamos importá-lo diretamente aqui, a menos que você
          queira movê-lo para fora de AboutSection. No momento, ele está correto. */}
      <ServicesSection />
      <LegendsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App; // Renomeado de CS2LabWebsite para App