// src/data.js

import {
  Menu, X, Users, Target, Trophy, MessageCircle, Calendar, Play, Star, Zap, Heart, Gamepad2
} from 'lucide-react';

// Navigation Links
export const navItems = [
  { id: 'home', label: 'Início' },
  { id: 'about', label: 'Sobre' },
  { id: 'services', label: 'Serviços' },
  { id: 'legends', label: 'Lendas' },
  { id: 'contact', label: 'Contato' }
];

// Hero Section Content
export const heroContent = {
  title: 'CS 2 LAB',
  subtitle: 'Onde a bala encontra a zoeira',
  tagline: 'Mais que um time, uma gangue de amigos no CS2!',
  description: 'Bem-vindo ao espaço virtual mais vibrante do Counter-Strike 2, onde a risada é a trilha sonora oficial e o "fake defuse" é considerado uma arte nobre.',
  button1Text: 'Encontre Sua Turma',
  button2Text: 'Vire Pro Player'
};

// About Section Content
export const aboutSectionContent = {
  title: 'Os Descomplicados',
  subtitle: 'Somos uma família de gamers que acredita que a melhor forma de chegar ao topo é se divertindo juntos.',
  mission: {
    title: 'Nossa Missão',
    description: 'Desmistificar o CS 2, transformar jogadores em amigos e provar que é possível evoluir se divertindo. Aqui, cada sessão de treino é uma oportunidade de criar memórias e fortalecer laços.'
  },
  values: {
    title: 'Nossos Valores',
    items: ['Amizade', 'Diversão', 'Evolução', 'Zoeira']
  },
  philosophy: {
    title: 'A Evolução Vem da Diversão',
    description: 'Acreditamos que as melhores estratégias surgem entre piadas internas e que cada "fake defuse" é uma oportunidade de criar uma história épica.',
    tag: 'Zoeira Responsável ✨'
  }
};

// Services Section Content
export const servicesContent = {
  title: 'O Que Oferecemos',
  subtitle: 'Tudo o que você precisa para se divertir e evoluir no CS2',
  items: [
    {
      icon: Target,
      title: "Sessões de Treino",
      description: "Treinamentos lendários com análise de replays e discussões táticas regadas a muita diversão.",
      color: "orange"
    },
    {
      icon: Play,
      title: "Análise de Gameplay",
      description: "Revisões divertidas dos seus melhores (e piores) momentos no jogo, sempre com muito humor.",
      color: "red"
    },
    {
      icon: Users,
      title: "Times para Ranked",
      description: "Encontre sua galera ideal para subir de patente e criar memórias inesquecíveis.",
      color: "yellow"
    },
    {
      icon: Trophy,
      title: "Campeonatos",
      description: "Participe de torneios internos onde a zoeira é garantida, independente do resultado.",
      color: "orange"
    },
    {
      icon: MessageCircle,
      title: "Discord Vibrante",
      description: "Um servidor cheio de vida, onde a conversa rola solta 24/7 e todos são bem-vindos.",
      color: "red"
    },
    {
      icon: Calendar,
      title: "Eventos",
      description: "Encontros online e presenciais para fortalecer os laços da nossa família gamer.",
      color: "yellow"
    }
  ]
};

// Legends Section Content
export const legendsContent = {
  title: 'Lendas do CS 2 Lab',
  subtitle: 'Histórias épicas que definem nossa comunidade',
  items: [
    {
      title: "A Lenda do \"Fake Defuse\" que Virou Amizade",
      icon: Heart,
      description: "Era uma partida tensa, bomba plantada, último round. Um jogador tentou um 'fake defuse' épico, mas acabou sendo pego no flagra. Em vez de rage, o time inteiro caiu na gargalhada. Aquela risada coletiva transformou rivais em amigos e criou uma das amizades mais duradouras da nossa comunidade.",
      color: "from-pink-500 to-red-500"
    },
    {
      title: "A Saga do Primeiro \"Clutch\" de Galinha",
      icon: Star,
      description: "Situação: 1v4, sem kit, bomba prestes a explodir. Nosso herói estava perdido quando uma galinha apareceu na tela. Seguindo os 'conselhos estratégicos' da galinha (que na verdade eram gritos do Discord), ele conseguiu o clutch mais improvável da história. Desde então, galinhas são consideradas coaches honorários.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "A Origem do \"Treino do Esquilo\"",
      description: "Tudo começou com uma ideia maluca: 'E se treinássemos mira atirando em esquilos virtuais super rápidos?' O que era para ser um treino sério virou uma sessão de gargalhadas épicas. O 'Treino do Esquilo' se tornou tradição, prova de que as melhores ideias nascem da espontaneidade e do humor.",
      icon: Target,
      color: "from-green-500 to-teal-500"
    }
  ]
};

// Contact Section Content
export const contactContent = {
  title: 'Junte-se à Família',
  subtitle: 'Pronto para fazer parte da nossa gangue de amigos? Vamos escrever juntos as próximas lendas!',
  discord: {
    title: 'Discord',
    description: 'Entre no nosso servidor e faça parte da conversa que nunca para!',
    buttonText: 'Entrar no Discord'
  },
  steam: {
    title: 'Steam Group',
    description: 'Adicione-se ao nosso grupo e receba convites para partidas épicas!',
    buttonText: 'Ver Grupo Steam'
  },
  quote: {
    text: 'A história da nossa comunidade continua sendo escrita em cada bala perdida, momento de zoeira e nova amizade.',
    tagline: 'Seja parte dessa história! 🎮✨'
  }
};

// Footer Content
export const footerContent = {
  title: 'CS 2 LAB',
  subtitle: 'Onde a bala encontra a zoeira desde 2024',
  description: 'Feito com ❤️ e muita zoeira pelos Descomplicados'
};