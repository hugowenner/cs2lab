// App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EducationCertificationsSection from './components/EducationCertificationsSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import GithubSection from './components/GithubSection';
import FooterSection from './components/FooterSection';

const Portfolio = () => {
  const courseProgress = 55; // Progresso do curso (2024-2026), calculado em Junho/2025.

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EducationCertificationsSection courseProgress={courseProgress} />
      <ExperienceSection />
      <SkillsSection />
      <GithubSection />
      <FooterSection />
    </div>
  );
};

export default Portfolio;