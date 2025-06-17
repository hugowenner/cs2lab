// src/data.js

// Importação UNIFICADA de todos os ícones necessários
import { 
  ShieldCheck, 
  Code, 
  Database, 
  Server, 
  Terminal, 
  BrainCircuit, 
  Linkedin, 
  Shield,   
  BarChart2, 
  Cloud,
  // Certifique-se de que TODOS os ícones das habilidades também estão aqui:
  Box, // Para frameworks/bibliotecas como React, Node.js, Tailwind CSS
  Lightbulb, // Para Resolução de Problemas
  GitBranch // Para Git & GitHub
} from 'lucide-react';

export const certifications = [
  {
    icon: Code, // 
    title: 'Programação (86h)', // 
    platform: 'Alura', // 
    description: 'Foco em Python, Java, JavaScript com Node.js e boas práticas de refatoração de código.' // 
  },
  {
    icon: Database, // 
    title: 'Data Science (80h)', // 
    platform: 'Alura', // 
    description: 'Conhecimentos em manipulação de dados com SQL (Oracle, MySQL, SQL Server) e criação de Dashboards com Excel.' // 
  },
  {
    icon: Server, // 
    title: 'DevOps (58h)', // 
    platform: 'Alura', // 
    description: 'Experiência em automação com PowerShell, linha de comando no Windows (CMD) e exploração da nuvem com AWS.' // 
  },
  {
    icon: ShieldCheck, // 
    title: 'Cibersegurança (55h)', // 
    platform: 'Alura', // 
    description: 'Habilidades em Pentest, segurança de redes (Firewall, WAF), modelagem de ameaças e segurança em aplicações web.' // 
  },
  {
    icon: Terminal, // 
    title: 'Linux (30h)', // 
    platform: 'Alura', // 
    description: 'Gerenciamento de diretórios, arquivos e permissões, além da criação de scripts para automação de tarefas.' // 
  },
  {
    icon: BrainCircuit, // 
    title: 'Inteligência Artificial (14h)', // 
    platform: 'Alura', // 
    description: 'Criação de ferramentas com a API do Gemini e personalização de rotinas de estudo com ChatGPT.' // 
  }
];

export const skills = [
  // Linguagens de Programação
  {
    name: 'JavaScript',
    icon: Code,
    color: 'text-yellow-400',
    description: 'Proficiência no desenvolvimento front-end interativo e back-end com Node.js.',
    category: 'Linguagens de Programação',
    level: 'Avançado',
  },
  {
    name: 'Python',
    icon: Code,
    color: 'text-blue-500',
    description: 'Experiência com scripts, automação, e desenvolvimento web básico.',
    category: 'Linguagens de Programação',
    level: 'Intermediário',
  },
  {
    name: 'Java',
    icon: Code,
    color: 'text-red-500',
    description: 'Conhecimento em desenvolvimento backend e sistemas empresariais.',
    category: 'Linguagens de Programação',
    level: 'Intermediário',
  },
  // Frameworks & Bibliotecas
  {
    name: 'React',
    icon: Box,
    color: 'text-cyan-400',
    description: 'Construção de interfaces de usuário modernas e reativas.',
    category: 'Frameworks & Bibliotecas',
    level: 'Avançado',
  },
  {
    name: 'Node.js',
    icon: Box,
    color: 'text-green-500',
    description: 'Desenvolvimento de APIs RESTful e aplicações de back-end escaláveis.',
    category: 'Frameworks & Bibliotecas',
    level: 'Intermediário',
  },
  {
    name: 'Tailwind CSS',
    icon: Box,
    color: 'text-teal-400',
    description: 'Estilização rápida e responsiva de interfaces de usuário.',
    category: 'Frameworks & Bibliotecas',
    level: 'Avançado',
  },
  // Banco de Dados
  {
    name: 'SQL (MySQL, PostgreSQL)',
    icon: Database,
    color: 'text-orange-400',
    description: 'Criação e manipulação de bancos de dados relacionais.',
    category: 'Banco de Dados',
    level: 'Intermediário',
  },
  // Ferramentas & DevOps
  {
    name: 'Git & GitHub',
    icon: GitBranch,
    color: 'text-gray-400',
    description: 'Controle de versão e colaboração em projetos de software.',
    category: 'Ferramentas & DevOps',
    level: 'Avançado',
  },
  {
    name: 'Linux',
    icon: Terminal,
    color: 'text-purple-400',
    description: 'Operação e scripts básicos em ambiente Linux.',
    category: 'Ferramentas & DevOps',
    level: 'Básico',
  },
  {
    name: 'AWS (Básico)',
    icon: Cloud,
    color: 'text-orange-500',
    description: 'Conhecimento fundamental em serviços de nuvem AWS.',
    category: 'Ferramentas & DevOps',
    level: 'Básico',
  },
  // Conceitos & Metodologias
  {
    name: 'Cibersegurança (Básico)',
    icon: Shield,
    color: 'text-red-600',
    description: 'Entendimento de conceitos básicos de segurança de aplicações e redes.',
    category: 'Conceitos & Metodologias',
    level: 'Básico',
  },
  {
    name: 'Resolução de Problemas',
    icon: Lightbulb,
    color: 'text-blue-300',
    description: 'Abordagem lógica para identificar e solucionar desafios técnicos.',
    category: 'Soft Skills', 
    level: 'Avançado',
  },
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
  'education-certifications': 'Formação & Certificações', 
  experience: 'Experiência',
  skills: 'Skills', 
  github: 'GitHub',
  contact: 'Contato'
};