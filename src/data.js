import { Users, Book, Zap, Laugh, Trophy, Ghost, Skull, Aperture, MessageSquareText, ShieldCheck, Gamepad2, Heart, Target } from 'lucide-react';
import { Award, Dices, Brain, Users as UsersIcon, Handshake, Shield, Sparkles, Calendar, TrendingUp, HandCoins, Gem } from 'lucide-react'; // Adicionei TrendinUp, HandCoins, Gem para mais opções


export const navItems = [
  { id: 'home', label: 'Início' },
  { id: 'about', label: 'Sobre Nós' },
  { id: 'services', label: 'Serviços' },
  { id: 'legends', label: 'Lendas' },
  { id: 'contact', label: 'Contato' },
];

export const heroContent = {
  title: "иo.ƒear™ — Gaming Team",
  subtitle: "Aqui não somos apenas um grupo. Somos um time. Somos mentalidade competitiva.",
  tagline: "Somos иo.ƒear™ — onde a superação e o crescimento andam juntos.",
  description: "Nosso foco principal é CS2 (Counter-Strike 2), mas acima de tudo, estamos aqui para formar jogadores focados, com espírito de equipe, disciplina e vontade de evoluir.",
  button1Text: "Sobre Nós",
  button2Text: "Nossos Serviços",
};

// ... outras importações e conteúdos

export const aboutSectionContent = {
      title: "Sobre Nós",
      subtitle: "Conheça a história e os valores que nos movem.",
      history: {
        title: "Nossa Origem: Forjados na Amizade e na Batalha 🎮",
        description: `A иo.ƒear™ Gaming Team surgiu em 19 de Dezembro de 2011, com raízes fincadas em Belo Horizonte, mas com a alma conectada às comunidades de São Paulo e Rio de Janeiro. Com mais de ${new Date().getFullYear() - 2011} anos de história, mais do que um time, somos uma comunidade de amigos, unidos pela paixão por jogos e pela competição.

    Nossa essência é construída sobre Força, Disciplina e Espírito de Equipe. Desde o início, nosso objetivo sempre foi criar um ambiente onde o crescimento é coletivo e a amizade é o pilar de cada vitória.`,
        foundersTitle: "Arquitetos da Nossa História 👑",
        founders: [
          "LorD",
          "Perna Peluda",
          "BlackVibes",
          "BANDIT_RJ",
          "TufTuf malvadao",
          "Maop Bonham",
          "Crals",
          "Lorite",
        ],
        motto: "Se o medo aparece, nós avançamos. Se a pressão aumenta, nós permanecemos frios. Se a derrota vem, nós aprendemos. Se a vitória chega, dividimos com o time. 🏆",
        // ... restante do content
        communityMotto: [
          "Aqui na иo.ƒear™, não existem estrelas isoladas, mas sim companheiros de equipe que confiam um no outro a cada round. Promovemos um espaço de treino e aprendizado contínuo, onde o respeito, a dedicação e a evolução são valores essenciais.",
          "Seja bem-vindo à иo.ƒear™. Agora você faz parte. Agora somos um só.",
        ],
      },
      // ... restante do aboutSectionContent

  values: {
    title: "Regras de Conduta", // Este título pode não ser mais visível, mas os itens podem ser úteis para um novo propósito
    description: "Nossos princípios que guiam cada membro do time.",
    items: [
      { label: "Comunicação Clara", description: "Fale de forma objetiva e construtiva, dentro e fora do jogo.", icon: Handshake },
      { label: "Respeito Mútuo", description: "Trate a todos com dignidade, independentemente de habilidade ou experiência.", icon: Heart },
      { label: "Atitude Positiva", description: "Mantenha a calma e o foco, mesmo sob pressão.", icon: Sparkles },
      { label: "Foco na Evolução", description: "Busque sempre aprender e melhorar, individualmente e em equipe.", icon: Brain },
      { label: "Fair Play", description: "Jogue limpo e honre o espírito esportivo.", icon: Shield },
      { label: "Comprometimento", description: "Dedique-se aos treinos e aos objetivos do time.", icon: Award },
    ],
  },
};

export const servicesContent = {
  title: "O Que Oferecemos",
  subtitle: "Tudo o que você precisa para se tornar um jogador de alto nível no иo.ƒear™:",
  items: [
    {
      icon: Book,
      color: "blue-electric",
      title: "Treinos Estratégicos Avançados",
      description: "Sessões estruturadas para refinar táticas, execuções e análise de jogadas, focando na mentalidade de vitória."
    },
    {
      icon: MessageSquareText,
      color: "blue-electric",
      title: "Análise de Gameplay Detalhada",
      description: "Feedback técnico e construtivo focado em posicionamento, mira e decisões críticas sob pressão."
    },
    {
      icon: UsersIcon,
      color: "blue-electric",
      title: "Equipes Competitivas",
      description: "Formamos squads para subir de patente, priorizando entrosamento, comunicação e disciplina tática."
    },
    {
      icon: Trophy,
      color: "blue-electric",
      title: "Campeonatos Internos",
      description: "Competições que simulam o ambiente profissional, equilibrando a disputa feroz com o espírito de equipe."
    },
    {
      icon: MessageSquareText,
      color: "blue-electric",
      title: "Comunidade Ativa no Discord",
      description: "Nosso servidor vibrante para discussões táticas, organização de treinos e integração constante entre os membros focados."
    },
    {
      icon: Gamepad2,
      color: "blue-electric",
      title: "Eventos Exclusivos",
      description: "Além das partidas, criamos momentos para fortalecer conexões reais e celebrar nossa paixão pelo game."
    },
  ],
};

export const legendsContent = {
  title: "Nossas Lendas em Campo",
  subtitle: "Histórias de momentos épicos e jogadas que marcaram nossa comunidade e reforçaram nossa mentalidade competitiva.",
  items: [
    {
      icon: Ghost,
      color: "blue-electric",
      title: "O Eco do Último Defuse",
      description: "Em um round decisivo no Inferno, um fake defuse executado com precisão silenciou o adversário. O som do kit sendo ativado e desativado ecoa como um lembrete da inteligência tática necessária para dominar o campo de batalha."
    },
    {
      icon: Skull,
      color: "blue-electric",
      title: "A Maestria do Clutch Improvável",
      description: "Em um 1v4 na Vertigo, nosso capitão orquestrou um clutch que desafiou todas as probabilidades. Essa virada, nascida da resiliência e calma sob pressão, é revisitada como exemplo de como a mente estratégica pode superar a desvantagem numérica."
    },
    {
      icon: Aperture,
      color: "blue-electric",
      title: "A Rotação Perfeita",
      description: "Durante um confronto tenso, uma rotação sincronizada da equipe pelo mid no Miragem pegou a defesa inimiga de surpresa. A execução impecável, com smokes e flashes no tempo certo, resultou em uma entrada explosiva e um round garantido. Um testemunho da nossa dedicação à coordenação de equipe."
    },
  ]
};

export const contactContent = {
  title: "Faça Parte da иo.ƒear™",
  subtitle: "Pronto para elevar seu jogo e integrar um time de verdade?",
  discord: {
    title: "Entre no Discord",
    description: "Junte-se à nossa comunidade para treinos, discussões táticas e integração com a equipe.",
    buttonText: "Entrar no Discord",
  },
  steam: {
    title: "Nosso Grupo Steam",
    description: "Conecte-se conosco no Steam, organize partidas e receba convites para eventos exclusivos.",
    buttonText: "Ver Grupo Steam",
  },
  quote: {
    text: "Na иo.ƒear™, cada vitória, cada derrota e cada desafio são degraus para a excelência.",
    tagline: "иo.ƒear™ — Gaming Team: Onde o medo vira força desde 2011.",
  },
};

export const footerContent = {
  title: "иo.ƒear™ Gaming Team",
  subtitle: "Onde a superação e o crescimento andam juntos.",
  description: "Fundado em 19 de Dezembro de 2011. Desenvolvido com paixão e estratégia.",
};