// src/data.js (ou o caminho correto para o seu arquivo de dados)

// Importações de ícones para as seções (ajustado para remover não utilizados)
import {
  Handshake, // Usado em ConductRules
  Brain, // Usado em ConductRules e LegendsSection
  Shield, // Usado em ConductRules (embora não diretamente no item.icon)
  Award, // Usado em ConductRules
  MessageCircle, // Usado em ContactSection
  Users, // Usado em HeroSection e HistorySection
  Trophy, // Usado em HeroSection
  ShieldCheck, // Usado em HistorySection
  Crown, // Usado em LegendsSection
  Dribbble, // Usado em LegendsSection
  Skull, // Usado em LegendsSection
  Swords, // Usado em ServicesSection
  UsersRound, // Usado em ServicesSection
  Gamepad2, // Usado em ServicesSection
  BellRing, // Usado em ServicesSection
  Megaphone, // Usado em ServicesSection
  BookA, // Usado em ServicesSection
  Calendar, // Usado em HistorySection
  TrendingUp, // Usado em HistorySection
  SmilePlus, // Usado em ConductRules
  // Removemos Sparkles, MapPin, Gavel, Scale, Smile, Zap, Star, Target,
  // e Trophy as TrophyIcon (pois já usamos Trophy do HeroSection, renomeado para evitar conflito).
  // Nota: Se 'Shield' for apenas para o exemplo do Brain, pode ser removido se não for usado nos items.
  // Pelo que vejo, 'Shield' não é usado nos `items` de `values`, apenas como importação genérica.
  // Vamos manter 'Shield' por enquanto, pois está na lista original, mas você pode revisar.
} from 'lucide-react';

// Conteúdo da Seção Hero
export const heroContent = {
  title: "иo.ƒear™",
  subtitle: "Sua jornada no CS2 começa aqui!",
  tagline: "Comunidade, Estratégia e Vitórias",
  description: "Bem-vindo à иo.ƒear™ Gaming Team, o lar de jogadores apaixonados por Counter-Strike 2. Somos uma comunidade vibrante dedicada a aprimorar o jogo em equipe, desenvolver estratégias inovadoras e, acima de tudo, celebrar a paixão que nos une. Junte-se a nós para experiências de jogo inesquecíveis e amizades duradouras.",
  button1Text: "Sobre Nós",
  button2Text: "Entrar no Discord",
};

// Conteúdo da Seção About (e subseções História e Regras de Conduta/Valores)
export const aboutSectionContent = {
  title: "Sobre Nós",
  subtitle: "Nossa história, nossos valores e o que nos torna únicos.",

  history: {
    title: "Nossa História",
    description: "A иo.ƒear™ Gaming Team nasceu da paixão compartilhada por Counter-Strike 2 e da visão de criar um espaço onde jogadores pudessem se reunir, competir e crescer juntos. Fundada em [MÊS/ANO DE FUNDAÇÃO - ex: Junho de 2023], começamos como um pequeno grupo de amigos, mas rapidamente crescemos, atraindo indivíduos dedicados que compartilham nossos valores de respeito, trabalho em equipe e busca pela excelência.\n\nDesde então, nossa jornada tem sido marcada por inúmeras vitórias, momentos de aprendizado e, acima de tudo, o fortalecimento de laços que vão além do jogo. Nosso objetivo é fomentar um ambiente competitivo e saudável, onde cada membro se sinta valorizado e parte de algo maior.",
    foundersTitle: "Nossos Fundadores",
    founders: [
      "LorD",
      "MaopBonham",
      "Perna Peluda",
      "Tuf Tuf Malvadão",
    ],
    motto: "“Em cada round, uma nova chance de provar nossa força e união.”",
    communityMotto: [
      "Uma comunidade forte é construída com base no respeito mútuo e na paixão compartilhada.",
      "Acreditamos que, com dedicação e trabalho em equipe, podemos alcançar qualquer objetivo dentro e fora do jogo.",
    ],
  },

  values: {
    title: "Nossos Valores",
    description: "Nossos valores são o alicerce da иo.ƒear™ Gaming Team, guiando cada interação e decisão para garantir um ambiente positivo e produtivo para todos. Eles representam o que somos e o que aspiramos ser.",
    items: [
      {
        icon: Handshake,
        label: "Respeito",
        description: "Tratar todos os membros, adversários e a comunidade com dignidade e cortesia, reconhecendo a diversidade de opiniões e estilos de jogo.",
      },
      {
        icon: Users, // Mantendo Users, mas poderia ser um ícone mais específico de "trabalho em equipe"
        label: "Trabalho em Equipe",
        description: "Colaborar ativamente, apoiar uns aos outros e priorizar os objetivos coletivos acima dos individuais para alcançar o sucesso mútuo.",
      },
      {
        icon: Trophy, // Usando Trophy, pois TrophyIcon foi removido para evitar conflitos desnecessários
        label: "Excelência",
        description: "Buscar constantemente a melhoria em todas as áreas, desde a habilidade no jogo até a comunicação e a conduta ética.",
      },
      {
        icon: Brain,
        label: "Estratégia",
        description: "Desenvolver e aplicar táticas inteligentes e adaptáveis, pensando coletivamente para superar desafios e dominar o campo de batalha.",
      },
      {
        icon: ShieldCheck, // Mantendo ShieldCheck como ícone de Integridade
        label: "Integridade",
        description: "Agir com honestidade e transparência em todas as situações, mantendo a lealdade à equipe e aos princípios da comunidade.",
      },
      {
        icon: Award,
        label: "Paixão",
        description: "Manter o entusiasmo e o amor pelo Counter-Strike 2 e pela nossa comunidade, cultivando um ambiente de diversão e dedicação contínua.",
      },
    ],
  },
};

// Conteúdo da Seção Serviços
export const servicesContent = {
  title: "O Que Oferecemos",
  subtitle: "Experiências e recursos que impulsionam seu jogo e sua conexão.",
  items: [
    {
      icon: Swords,
      title: "Partidas Ranqueadas & Scrims",
      description: "Organizamos partidas competitivas e treinos estratégicos para aprimorar suas habilidades e a coesão da equipe.",
    },
    {
      icon: UsersRound,
      title: "Comunidade Ativa no Discord",
      description: "Um servidor Discord vibrante para comunicação, formação de grupos e interação com outros membros.",
    },
    {
      icon: Gamepad2,
      title: "Treinamentos e Análises",
      description: "Sessões dedicadas para revisar jogadas, discutir estratégias e evoluir individualmente e em equipe.",
    },
    {
      icon: BellRing,
      title: "Eventos e Torneios Internos",
      description: "Competições amigáveis dentro da comunidade para testar habilidades e promover a diversão.",
    },
    {
      icon: Megaphone,
      title: "Suporte e Mentoria",
      description: "Membros experientes estão disponíveis para oferecer dicas, conselhos e suporte para novos jogadores.",
    },
    {
      icon: BookA,
      title: "Biblioteca de Recursos",
      description: "Acesso a guias, tutoriais e vídeos para ajudar no aprendizado de mapas, armas e táticas.",
    },
  ],
};


// Conteúdo da Seção Lendas
export const legendsContent = {
  title: "Lendas da Comunidade",
  subtitle: "Aqueles que moldaram nossa história e continuam a nos inspirar.",
  items: [
    {
      title: "LorD",
      description: "Conhecido por sua estratégia impecável e liderança nata, LorD é o estrategista-mor da nossa comunidade. Suas táticas são lendárias, transformando derrotas iminentes em vitórias gloriosas. Além de seu intelecto afiado, LorD é admirado por sua paciência e disposição em guiar novos jogadores, tornando-se um verdadeiro mentor para muitos.",
      icon: Crown,
    },
    {
      title: "MaopBonham",
      description: "O coração pulsante da nossa comunidade, MaopBonham é a personificação da energia e do bom humor. Seja com suas piadas contagiosas ou com seu espírito incansável, ele tem o dom de levantar o astral de qualquer um. MaopBonham é a cola que une a todos, garantindo que o espírito de camaradagem nunca se apague.",
      icon: Dribbble,
    },
    {
      title: "Perna Peluda",
      description: "Com uma habilidade que desafia a lógica e um estilo de jogo imprevisível, Perna Peluda é a surpresa constante. Seus movimentos audaciosos e sua capacidade de virar o jogo em momentos críticos o transformaram em uma figura lendária. Perna Peluda inspira a todos a ousar e a nunca subestimar o poder da criatividade.",
      icon: Brain,
    },
    {
      title: "Tuf Tuf Malvadão",
      description: "O nome pode soar intimidador, mas Tuf Tuf Malvadão é a personificação da resiliência e da determinação. Conhecido por sua persistência inabalável, ele nunca desiste, não importa o desafio. Tuf Tuf Malvadão é a prova de que a dedicação e o treino constante levam à maestria, inspirando todos a superar seus próprios limites.",
      icon: Skull,
    },
  ],
};


// Conteúdo da Seção Contato
export const contactContent = {
  title: "Junte-se a Nós",
  subtitle: "Pronto para fazer parte da nossa família иo.ƒear™? Conecte-se conosco!",
  discord: {
    title: "Nosso Servidor Discord",
    description: "Onde a ação acontece! Converse com a equipe, encontre parceiros para jogar e fique por dentro das últimas novidades.",
    buttonText: "Entrar no Discord",
  },
  quote: {
    text: "A verdadeira força de um time não está apenas nas vitórias, mas na jornada que compartilhamos juntos.",
    tagline: "- Equipe иo.ƒear™",
  },
};

// Conteúdo do Rodapé
export const footerContent = {
  subtitle: "Sua comunidade de Counter-Strike 2.",
  copyright: "© {year} иo.ƒear™ Gaming Team. Todos os direitos reservados.",
  developerInfo: "Desenvolvido por Hugo Wenner - hugowenne5@gmail.com",
};

// Itens de navegação para o NavBar
export const navItems = [
  { id: 'home', label: 'Início' },
  { id: 'about', label: 'Sobre Nós' },
  { id: 'services', label: 'Serviços' },
  { id: 'legends', label: 'Lendas' },
  { id: 'contact', label: 'Contato' },
];