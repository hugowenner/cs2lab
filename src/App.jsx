import React, { useState, useEffect } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Code, 
  Shield, 
  Database, 
  Server, 
  Award, 
  Briefcase, 
  GraduationCap,
  ChevronDown,
  ExternalLink,
  Calendar,
  Clock,
  Target,
  Globe,
  Star,
  TrendingUp,
  Zap,
  Cloud, // Adicionar
  Terminal, // Adicionar
  BarChart2,   // Adicionar
  Heart
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);
  const courseProgress = 55; // Progresso do curso (2024-2026), calculado em Junho/2025.
  const navLinks = {
    home: 'Início',
    about: 'Sobre',
    'education-skills': 'Formação & Skills',
    experience: 'Experiência',
    certifications: 'Certificações',
    github: 'GitHub',
    contact: 'Contato' // <-- ADICIONAR ESTA LINHA
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const certifications = [
    {
      title: 'Front-End com React & JavaScript',
      platform: 'Alura',
      description: 'Desenvolvimento de aplicações web modernas e reativas, com foco em componentização, estado e performance.',
      icon: Code
    },
    {
      title: 'Back-End com Python & Django',
      platform: 'Alura',
      description: 'Criação de APIs RESTful robustas, com manipulação de banco de dados, autenticação e boas práticas de desenvolvimento.',
      icon: Server
    },
    {
      title: 'Fundamentos de Cibersegurança',
      platform: 'Alura',
      description: 'Compreensão de ameaças, análise de vulnerabilidades, e aplicação de políticas de segurança para proteger sistemas e redes.',
      icon: Shield
    },
    {
      title: 'Business Intelligence com Power BI',
      platform: 'Alura',
      description: 'Coleta, tratamento e visualização de dados para criar dashboards interativos que auxiliam na tomada de decisões de negócio.',
      icon: BarChart2
    },
    {
      title: 'Infraestrutura com Linux',
      platform: 'Alura',
      description: 'Gerenciamento completo de servidores Linux, desde a instalação e configuração de serviços até a automação com Shell Script.',
      icon: Terminal
    },
    {
      title: 'Data Science: Análise e Visualização',
      platform: 'Alura',
      description: 'Análise de dados com Python, utilizando bibliotecas como Pandas e Matplotlib para extrair e comunicar insights valiosos.',
      icon: Database
    }
  ];

  const skills = [
    {
      name: 'JavaScript & React',
      description: 'Para criar interfaces de usuário dinâmicas e interativas, consumindo APIs e gerenciando o estado da aplicação de forma eficiente.',
      icon: Code
    },
    {
      name: 'Python',
      description: 'Linguagem versátil que aplico em automação, desenvolvimento de back-end (APIs RESTful) e em projetos de análise de dados.',
      icon: Code // Pode usar o mesmo ícone para linguagens de programação
    },
    {
      name: 'Java',
      description: 'Utilizada para construir aplicações robustas e escaláveis do lado do servidor, com foco em performance e segurança corporativa.',
      icon: Server
    },
    {
      name: 'SQL',
      description: 'Fundamental para gerenciar e consultar bancos de dados relacionais, garantindo a integridade e a performance na manipulação dos dados.',
      icon: Database
    },
    {
      name: 'AWS',
      description: 'Conhecimento em serviços essenciais para hospedar aplicações, gerenciar infraestrutura como código e garantir escalabilidade.',
      icon: Cloud
    },
    {
      name: 'Linux',
      description: 'Proficiência no sistema operacional padrão para servidores, incluindo gerenciamento de processos e scripts em shell.',
      icon: Terminal
    },
    {
      name: 'Cibersegurança',
      description: 'Aplicação de conceitos para proteger sistemas, incluindo análise de vulnerabilidades e implementação de boas práticas de defesa.',
      icon: Shield
    },
    {
      name: 'Power BI',
      description: 'Criação de dashboards e relatórios interativos para transformar dados em insights visuais que auxiliam na tomada de decisões.',
      icon: BarChart2
    }
  ];

  const experiences = [
  {
    title: 'Técnico de Informática',
    company: 'Colégio Santo Antônio',
    period: 'Abril 2025 - Atual',
    description: 'Responsável por infraestrutura tecnológica para mais de 3000 usuários, garantindo a continuidade e segurança dos serviços educacionais.',
    achievements: [
      'Manutenção de 99% de disponibilidade dos serviços de TI',
      'Redução de 30% em chamados de suporte com otimização de processos',
      'Gestão de parque com 300+ computadores e 5 laboratórios',
      'Melhora de 40% no desempenho das workstations após atualização'
    ]
  },
  {
    title: 'Estagiário de TI',
    company: 'Prefeitura de Belo Horizonte',
    period: 'Outubro 2024 - Março 2025',
    description: 'Contribuição para a modernização da infraestrutura de TI e a eficiência dos serviços públicos através do suporte técnico e da automação de processos.',
    achievements: [
      'Automação de relatórios (-5h de trabalho manual/semana)',
      'Resolução de 200+ tickets com 95% de satisfação do usuário',
      'Modernização e suporte para mais de 50 estações de trabalho',
      'Criação de documentação: -25% no tempo de integração de usuários'
    ]
  },
  {
    title: 'Editor de Mídias | Supervisor',
    company: 'Sierra Poker Sports',
    period: 'Julho 2022 - Julho 2023',
    description: 'Liderança da estratégia de conteúdo e da presença digital da empresa, gerenciando equipe e produção de mídia para múltiplos canais.',
    achievements: [
      '+150% de engajamento nas redes sociais',
      '+25% de crescimento na base de seguidores em 1 ano',
      'Transmissões ao vivo para milhares de espectadores',
      'Supervisão de equipe e otimização do fluxo de conteúdo'
    ]
  }
];

//... logo abaixo do array 'experiences'

  const githubProjects = [
      {
        title: 'Portfólio Pessoal em React',
        description: 'O site que você está vendo. Construído com React, Vite e Tailwind CSS para uma experiência de usuário moderna e responsiva.',
        tech: ['React', 'Vite', 'Tailwind CSS'],
        repoLink: 'https://github.com/hugowenner/site-hugo-react'
      },
      {
        title: 'Sinal InvestAI (Análise de Investimentos)',
        description: 'Plataforma de análise de investimentos para fornecer insights e sinais de negociação robustos e confiáveis. (Repositório Privado)',
        tech: ['Python', 'Análise de Dados', 'API'],
        repoLink: 'https://github.com/hugowenner' // Link para o perfil, já que o repo é privado
      },
      {
        title: 'Auditor de Acesso a Sistemas',
        description: 'Script em Python para auditar e gerar relatórios de acesso a sistemas, ajudando a identificar padrões e anomalias de segurança.',
        tech: ['Python', 'Segurança', 'Automação'],
        repoLink: 'https://github.com/hugowenner/auditoria-acesso-sistema'
      }
    ];

return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">

      {/* Navigation */}
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

      {/* 1. Hero Section (home) */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* ... (conteúdo da seção home sem alterações) ... */}
         <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <User size={64} className="text-white" />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
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
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-white/50" />
          </div>
        </div>
      </section>

      {/* 2. About Section (about) */}
      <section id="about" className="py-20 bg-black/20">
        {/* ... (conteúdo da seção about sem alterações) ... */}
         <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Sobre Mim
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Sou um profissional apaixonado por tecnologia com sólida formação em Análise e
                Desenvolvimento de Sistemas e mais de <span className="text-blue-400 font-bold">315 horas</span> de certificações especializadas.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Minha jornada combina experiência prática em suporte técnico com conhecimentos avançados em
                programação, segurança da informação e análise de dados.
              </p>
              <div className="flex items-center space-x-2 text-purple-400">
                <Target size={20} />
                <span className="font-semibold">Objetivo:</span>
              </div>
              <p className="text-gray-300 ml-7">
                Busco oportunidades para aplicar minha experiência técnica em desenvolvimento de software,
                análise de dados ou segurança da informação, contribuindo para projetos que impactem positivamente
                os usuários e a organização.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-6 rounded-xl backdrop-blur-sm">
                <Award className="text-blue-400 mb-4" size={32} />
                <h3 className="font-bold text-xl mb-2">315+</h3>
                <p className="text-gray-300">Horas de Certificação</p>
              </div>
              <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 p-6 rounded-xl backdrop-blur-sm">
                <TrendingUp className="text-green-400 mb-4" size={32} />
                <h3 className="font-bold text-xl mb-2">3000+</h3>
                <p className="text-gray-300">Usuários Atendidos</p>
              </div>
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 p-6 rounded-xl backdrop-blur-sm">
                <Zap className="text-orange-400 mb-4" size={32} />
                <h3 className="font-bold text-xl mb-2">99%</h3>
                <p className="text-gray-300">Disponibilidade</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-6 rounded-xl backdrop-blur-sm">
                <Star className="text-purple-400 mb-4" size={32} />
                <h3 className="font-bold text-xl mb-2">150%</h3>
                <p className="text-gray-300">Aumento Engajamento</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Education & Skills Section (education-skills) */}
      <section id="education-skills" className="py-20">
        {/* ... (conteúdo da seção education-skills sem alterações) ... */}
         <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Formação e Competências
          </h2>
          <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-sm rounded-xl p-8 mb-20 hover:bg-white/10 transition-all duration-300">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-lg shrink-0">
                <GraduationCap size={40} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-400">Análise e Desenvolvimento de Sistemas</h3>
                <p className="text-lg text-gray-300">Centro Universitário Newton Paiva</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Curso superior de tecnologia focado no ciclo de vida completo do software, desde a análise de requisitos e modelagem de dados até a implementação e manutenção de sistemas robustos e escaláveis.
            </p>
            <div className="flex items-center space-x-2 text-gray-400 mb-8">
              <Calendar size={16} />
              <span>Período: 2024 - 2026</span>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-semibold text-gray-200">Progresso do Curso</h4>
                <span className="text-sm font-bold text-blue-400">{courseProgress}% Concluído</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-1000"
                  style={{ width: `${courseProgress}%` }}
                ></div>
              </div>
            </div>
          </div>
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-200">Principais Habilidades Técnicas</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill) => {
              const IconComponent = skill.icon;
              return (
                <div key={skill.name} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-4">
                    <IconComponent size={28} className="text-blue-400 shrink-0" />
                    <h3 className="text-lg font-bold">{skill.name}</h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{skill.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Experience Section (experience) */}
      <section id="experience" className="py-20 bg-black/20">
        {/* ... (conteúdo da seção experience sem alterações) ... */}
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Experiência Profissional
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-400 mb-2">{exp.title}</h3>
                    <p className="text-xl text-gray-300 mb-2">{exp.company}</p>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.achievements.map((achievement, i) => (
                    <span key={i} className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-3 py-1 rounded-full text-sm">
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Certifications Section (certifications) */}
      <section id="certifications" className="py-20">
         {/* ... (conteúdo da seção certifications sem alterações) ... */}
         <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Certificações e Formações
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {certifications.map((cert) => {
              const IconComponent = cert.icon;
              return (
                <div key={cert.title} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 flex flex-col hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <IconComponent size={24} className="text-purple-400 shrink-0" />
                      <h3 className="text-lg font-bold">{cert.title}</h3>
                    </div>
                    <span className="bg-purple-500/10 text-purple-300 text-xs font-bold px-2 py-1 rounded-full">{cert.platform}</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed flex-grow">{cert.description}</p>
                </div>
              );
            })}
          </div>
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Total de Horas Dedicadas</h3>
            <p className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              315+ Horas
            </p>
            <p className="text-gray-300 mb-6">
              Aprendizado contínuo na plataforma Alura | Período: 08/11/2024 a 11/06/2025
            </p>
            <div className="flex justify-center">
              <a href="#" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform flex items-center space-x-2">
                <ExternalLink size={20} />
                <span>Ver Certificados na Alura</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. GitHub Section (github) */}
      <section id="github" className="py-20 bg-black/20">
        {/* ... (conteúdo da seção github sem alterações) ... */}
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
    
      {/* ======================================================================= */}
      {/* Footer / Contact Section */}
      {/* ======================================================================= */}
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
            <a href="URL_DO_SEU_LINKEDIN" target="_blank" rel="noopener noreferrer" className="bg-white/5 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center justify-center hover:bg-white/10 hover:scale-105 transition-all duration-300">
              <Linkedin size={28} className="text-blue-400" />
              <span className="mt-2 font-semibold">LinkedIn</span>
            </a>

            {/* GitHub */}
            <a href="https://github.com/hugowenner" target="_blank" rel="noopener noreferrer" className="bg-white/5 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center justify-center hover:bg-white/10 hover:scale-105 transition-all duration-300">
              <Github size={28} className="text-gray-300" />
              <span className="mt-2 font-semibold">GitHub</span>
            </a>

            {/* Email */}
            <a href="mailto:hugowenner5@gmail.com" className="bg-white/5 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center justify-center hover:bg-white/10 hover:scale-105 transition-all duration-300">
              <Mail size={28} className="text-purple-400" />
              <span className="mt-2 font-semibold">Email</span>
            </a>

            {/* WhatsApp */}
            <a href="https://wa.me/5531971836063" target="_blank" rel="noopener noreferrer" className="bg-white/5 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center justify-center hover:bg-white/10 hover:scale-105 transition-all duration-300">
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
    </div>
  );
};


export default Portfolio;