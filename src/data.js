// src/data.js

import {
  Code,
  Server,
  Shield,
  BarChart2,
  Terminal,
  Database,
  Cloud,
} from 'lucide-react';

export const certifications = [
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

export const skills = [
  {
    name: 'JavaScript & React',
    description: 'Para criar interfaces de usuário dinâmicas e interativas, consumindo APIs e gerenciando o estado da aplicação de forma eficiente.',
    icon: Code
  },
  {
    name: 'Python',
    description: 'Linguagem versátil que aplico em automação, desenvolvimento de back-end (APIs RESTful) e em projetos de análise de dados.',
    icon: Code
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

export const experiences = [
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

export const githubProjects = [
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
    repoLink: 'https://github.com/hugowenner'
  },
  {
    title: 'Auditor de Acesso a Sistemas',
    description: 'Script em Python para auditar e gerar relatórios de acesso a sistemas, ajudando a identificar padrões e anomalias de segurança.',
    tech: ['Python', 'Segurança', 'Automação'],
    repoLink: 'https://github.com/hugowenner/auditoria-acesso-sistema'
  }
];

export const navLinks = {
  home: 'Início',
  about: 'Sobre',
  'education-certifications': 'Formação e Certificações', // Alterado
  experience: 'Experiência',
  skills: 'Skills', // Adicionado
  github: 'GitHub',
  contact: 'Contato'
};