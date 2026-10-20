export interface PillarItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  detail: string;
  bullets: string[];
}

export interface StepItem {
  number: string;
  title: string;
  duration?: string;
  description: string;
  detail: string;
}

export interface AudienceItem {
  id: string;
  question: string;
  highlight: string;
  description: string;
}

export interface RoutineSituation {
  id: string;
  title: string;
  tag: string;
  timeContext: string;
  challenge: string;
  solution: string;
  imageUrl: string;
}

export interface MealItem {
  period: string;
  timeHint: string;
  title: string;
  description: string;
  whyItWorks: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  practicalImpact: string;
}

export interface ResultIndicator {
  metric: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  age: number;
  city: string;
  profile: string;
  quote: string;
  highlight: string;
  routineContext: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const brandInfo = {
  name: "NutriBalance",
  tagline: "Nutrição prática, equilibrada e adaptada à sua rotina.",
  nutritionist: {
    name: "Dra. Camila Ribeiro",
    title: "Nutricionista Clínica & Comportamental",
    crn: "CRN 00000 / SP",
    philosophy: "Uma boa alimentação precisa funcionar na vida real, não apenas no papel.",
    bio: [
      "Sou apaixonada por descomplicar a relação das pessoas com a comida. Acredito que a alimentação deve ser fonte de energia, prazer e saúde — e não de ansiedade, regras inflexíveis ou isolamento social.",
      "Com mais de 8 anos de prática clínica com adultos, desenvolvi um método centrado na realidade de quem trabalha, viaja, cuida da família e tem uma rotina intensa. O plano é construído com você, respeitando suas preferências e seu contexto.",
    ],
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80",
    experienceYears: "8+ anos",
    specialties: ["Reeducação Alimentar", "Nutrição Comportamental", "Rotina & Praticidade", "Saúde Metabólica"],
  },
  contact: {
    whatsappUrl: "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20consulta%20na%20NutriBalance.",
    email: "contato@nutribalance.com.br",
    instagram: "@nutribalance.saude",
    location: "São Paulo, SP — Atendimento Online (todo o Brasil) e Presencial",
  },
};

export const heroData = {
  badge: "Atendimento online e presencial",
  headline: "Alimentação saudável precisa caber na sua vida.",
  subheadline:
    "Acompanhamento nutricional personalizado para construir uma alimentação mais equilibrada, prática e sustentável no dia a dia.",
  primaryCta: "Agendar consulta",
  secondaryCta: "Conhecer o acompanhamento",
  highlights: [
    "Sem dietas restritivas ou listas de proibições",
    "Adaptado aos seus horários e preferências",
    "Foco em autonomia e constância a longo prazo",
  ],
  heroImage: {
    url: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1400&q=80",
    alt: "Mesa acolhedora com alimentos frescos, pães artesanais, azeite e frutas em luz natural",
    caption: "Comer bem é sobre variedade, presença e conexão com o que faz bem ao seu corpo.",
  },
  sideImage: {
    url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    alt: "Preparo de salada colorida e fresca com ingredientes naturais",
  },
};

export const identificationData = {
  tag: "Identificação",
  title: "Você não precisa escolher entre comer bem e viver normalmente.",
  subtitle:
    "A maioria das pessoas não falha nas dietas. São as dietas tradicionais que falham por ignorar a complexidade do cotidiano.",
  paragraphs: [
    "Planos que exigem três horas diárias de cozinha, ingredientes inacessíveis ou proibições drásticas geram frustração e o ciclo vicioso de 'recomeçar na segunda-feira'.",
    "Quando a alimentação vira sinônimo de cobrança e culpa, qualquer imprevisto parece desandar tudo. O caminho não é se forçar a caber em uma dieta engessada, mas moldar a nutrição para servir à sua vida.",
  ],
  frictionPoints: [
    {
      title: "Planos difíceis de sustentar",
      description: "Receitas complexas que não combinam com seus dias de trabalho e cansaço.",
    },
    {
      title: "Restrições exageradas",
      description: "Cortar carboidratos ou alimentos afetivos que geram compulsão e ansiedade.",
    },
    {
      title: "Sensação de culpa ao comer",
      description: "Classificar alimentos como 'vilões' ou 'permitidos', minando a paz à mesa.",
    },
    {
      title: "Falta de organização prática",
      description: "Querer comer melhor, mas chegar à noite sem saber o que cozinhar ou pedir.",
    },
    {
      title: "Alimentação irregular",
      description: "Pular refeições na correria e descontar tudo em petiscos rápidos à tarde.",
    },
    {
      title: "Vida social comprometida",
      description: "Sentir medo de jantares, encontros com amigos ou viagens por medo de 'sair da linha'.",
    },
  ],
};

export const positioningData = {
  tag: "Nosso posicionamento",
  title: "Nutrição que se adapta à sua rotina.",
  lead:
    "Um plano alimentar eficiente não é aquele que parece perfeito na teoria, mas aquele que você consegue cumprir numa terça-feira chuvosa e cansativa.",
  description:
    "No acompanhamento da NutriBalance, analisamos profundamente quem você é antes de sugerir qualquer alteração. Consideramos suas preferências gastronômicas, seu tempo disponível, seu orçamento e os momentos em que você divide a mesa com quem ama.",
  factors: [
    { name: "Horários e ritmo diário", detail: "Ajustado a reuniões, turnos e pausas reais" },
    { name: "Preferências e cultura", detail: "Seus pratos favoritos continuam fazendo parte" },
    { name: "Orçamento e compras", detail: "Ingredientes acessíveis encontrados no mercado do seu bairro" },
    { name: "Contexto social", detail: "Confraternizações, viagens e finais de semana sem angústia" },
    { name: "Nível de disposição", detail: "Estratégias para quando você está sem tempo ou sem energia" },
    { name: "Objetivos de saúde", detail: "Mais disposição, digestão leve e peso saudável" },
  ],
};

export const pillarsData: PillarItem[] = [
  {
    id: "praticidade",
    tag: "Pilar 01",
    title: "Praticidade",
    description:
      "Orientações pensadas para a vida real. Dicas de compras eficientes, pré-preparo inteligente de alimentos e opções viáveis para dias cheios de compromissos.",
    detail:
      "Você não precisa virar chef de cozinha nem passar o domingo inteiro preparando marmitas idênticas para a semana.",
    bullets: [
      "Listas de compras organizadas por seções",
      "Estratégia de preparo em 30 minutos",
      "Combinações rápidas com itens de despensa",
      "Guia de pedidos inteligentes em delivery",
    ],
  },
  {
    id: "equilibrio",
    tag: "Pilar 02",
    title: "Equilíbrio",
    description:
      "Sem terrorismo alimentar, sem vilões e sem cortes desnecessários. Uma relação tranquila com todos os grupos de alimentos, com ciência e respeito.",
    detail:
      "Comer bem inclui tanto um prato colorido e nutritivo quanto o bolo da sua avó no aniversário ou uma pizza com os amigos.",
    bullets: [
      "Sem proibições radicais de carboidratos",
      "Adequação de porções com flexibilidade",
      "Compreensão de sinais de fome e saciedade",
      "Alimentação sem sentimento de punição",
    ],
  },
  {
    id: "consistencia",
    tag: "Pilar 03",
    title: "Consistência",
    description:
      "Pequenas melhorias contínuas trazem resultados muito mais duradouros do que mudanças extremas seguidas de desistência.",
    detail:
      "A chave para a longevidade da sua saúde é a constância sem perfeccionismo. Avançamos um passo sólido por vez.",
    bullets: [
      "Metas graduais alinhadas a cada retorno",
      "Foco em hábitos automáticos e sustentáveis",
      "Flexibilidade para recalcular rotas",
      "Evolução que se mantém ao longo dos anos",
    ],
  },
];

export const howItWorksData: StepItem[] = [
  {
    number: "01",
    title: "Conversa inicial e escuta atenta",
    duration: "Consulta de 60 a 75 min",
    description:
      "Um momento de escuta genuína sobre seu histórico, sua relação com o corpo, exames prévios, horários de trabalho, sono e principais dificuldades cotidianas.",
    detail: "Sem julgamentos, sem balanças invasivas. O foco é entender quem você é.",
  },
  {
    number: "02",
    title: "Avaliação do contexto alimentar",
    duration: "Análise profunda",
    description:
      "Mapeamento dos seus hábitos atuais, recordatório de refeições típicas, sinais clínicos, rotina de compras e preferências culinárias.",
    detail: "Identificamos o que já funciona bem e onde pequenos ajustes trarão grande impacto.",
  },
  {
    number: "03",
    title: "Construção do plano personalizado",
    duration: "Entrega em até 3 dias úteis",
    description:
      "Elaboração de uma estratégia alimentar visual, clara e viável, com opções de substituições diretas, sugestões práticas e receitas descomplicadas.",
    detail: "Acessível em PDF estruturado e aplicativo com lista de compras integrada.",
  },
  {
    number: "04",
    title: "Acompanhamento e evolução contínua",
    duration: "Suporte contínuo",
    description:
      "Canal direto para tirar dúvidas do dia a dia, reavaliação periódica e adaptação do plano conforme sua rotina muda ou surgem novos desafios.",
    detail: "Você nunca fica desamparado entre uma consulta e outra.",
  },
];

export const audienceData: AudienceItem[] = [
  {
    id: "emagrecimento",
    question: "Deseja emagrecer com saúde",
    highlight: "Sem o efeito sanfona",
    description:
      "Para quem está cansado de dietas restritivas que até funcionam por duas semanas, mas cobram um preço alto na saúde mental e física.",
  },
  {
    id: "organizacao",
    question: "Busca mais organização alimentar",
    highlight: "Fim do estresse diário",
    description:
      "Para quem vive pedindo delivery por falta de tempo ou não sabe como planejar o cardápio da semana de maneira simples.",
  },
  {
    id: "rotina-corrida",
    question: "Tem uma rotina cheia de compromissos",
    highlight: "Soluções ágeis",
    description:
      "Profissionais, pais e estudantes que precisam de opções práticas de lanches, almoços rápidos e jantares de preparo ágil.",
  },
  {
    id: "frustracao",
    question: "Já tentou diversos planos e desistiu",
    highlight: "Nova perspectiva",
    description:
      "Para quem achava que o problema era 'falta de força de vontade', quando na verdade o método era incompatível com a vida real.",
  },
  {
    id: "habitos",
    question: "Quer melhorar disposição e saúde digestiva",
    highlight: "Mais energia vital",
    description:
      "Para quem sente sonolência pós-almoço, inchaço frequente ou falta de disposição para as atividades que mais gosta.",
  },
  {
    id: "autonomia",
    question: "Deseja aprender a fazer escolhas conscientes",
    highlight: "Liberdade à mesa",
    description:
      "Para quem quer ter autonomia para comer em restaurantes, viagens e festas sem culpa e sem perder o equilíbrio.",
  },
];

export const realLifeData: RoutineSituation[] = [
  {
    id: "morning",
    title: "Café da manhã de 5 minutos",
    tag: "Manhãs corridas",
    timeContext: "07:30",
    challenge: "Sair correndo de casa sem comer nada ou pegar salgado congelado na padaria.",
    solution:
      "Opções com montagem imediata: iogurte com aveia e frutas picadas na véspera, ou torrada integral com ovos mexidos rápidos.",
    imageUrl: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "lunch-out",
    title: "Almoço por quilo ou no restaurante da empresa",
    tag: "Fora de casa",
    timeContext: "12:45",
    challenge: "Sentir que comer fora estraga qualquer tentativa de planejamento.",
    solution:
      "Guia prático de proporção no prato: metade de vegetais variados, um quarto de carboidrato de qualidade e um quarto de proteína saborosa.",
    imageUrl: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "afternoon-snack",
    title: "O lanche do meio da tarde no escritório",
    tag: "Energia estável",
    timeContext: "16:00",
    challenge: "A fome das quatro da tarde que faz você atacar a bomboniere ou tomar café com açúcar sem parar.",
    solution:
      "Estratégia de saciedade com oleaginosas fáceis de deixar na gaveta, frutas práticas de carregar ou queijos em porções individuais.",
    imageUrl: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "dinner",
    title: "Jantar reconfortante após um dia exaustivo",
    tag: "Descanso & Acolhimento",
    timeContext: "20:15",
    challenge: "Chegar exausto e pedir pizza ou hambúrguer apenas porque a cozinha parece intimidadora.",
    solution:
      "Preparações de panela única em 15 minutos: omelete recheado, massas com legumes assados ou sopas caseiras com congelamento inteligente.",
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "weekend",
    title: "Fim de semana, confraternizações e viagens",
    tag: "Vida social",
    timeContext: "Sábado & Domingo",
    challenge: "A mentalidade de 'já que comi a sobremesa, vou devorar tudo até domingo à noite'.",
    solution:
      "Comer com prazer, sem compensações absurdas na segunda-feira. Nutrição que convive com taça de vinho, churrasco e bolo em família.",
    imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
  },
];

export const mealExampleData: MealItem[] = [
  {
    period: "Café da manhã",
    timeHint: "Energia leve para começar",
    title: "Tigela de iogurte natural, frutas da estação e aveia em flocos",
    description:
      "Iogurte integral cremoso com morangos ou banana fresca, aveia em flocos grossos e um toque de canela ou sementes de chia.",
    whyItWorks: "Combina proteínas de boa digestibilidade com fibras que mantêm a saciedade ao longo de toda a manhã.",
  },
  {
    period: "Almoço",
    timeHint: "Nutrição reconfortante e clássica",
    title: "Arroz, feijão tradicional, proteína grelhada e salada da horta",
    description:
      "A base brasileira mais completa: arroz aromático, feijão bem temperado com louro, frango ou peixe grelhado e folhas verdes com azeite de oliva extravirgem.",
    whyItWorks: "Fácil de encontrar em qualquer restaurante ou preparar em quantidade para dois dias na geladeira.",
  },
  {
    period: "Lanche da tarde",
    timeHint: "Pausa prática e sem frescura",
    title: "Fruta fresca acompanhada de mix de castanhas",
    description:
      "Uma maçã ou mexerica acompanhada de um punhado de castanhas-de-caju ou nozes. Sem necessidade de refrigeração.",
    whyItWorks: "Gorduras boas e fibras que estabilizam a glicose e evitam a queda brusca de energia antes do fim do expediente.",
  },
  {
    period: "Jantar",
    timeHint: "Prático, quente e reconfortante",
    title: "Omelete recheado com legumes salteados e torrada integral",
    description:
      "Ovos caipiras batidos com espinafre, tomate e queijo minas, servidos com fatia de pão de fermentação natural levemente tostado.",
    whyItWorks: "Preparo em menos de 10 minutos, digestão amigável e conforto térmico para uma noite de sono reparadora.",
  },
];

export const benefitsData: BenefitItem[] = [
  {
    id: "organizacao",
    title: "Mais organização e menos tempo perdido",
    description:
      "Você saberá exatamente o que comprar no supermercado e como combinar os itens, economizando tempo e evitando desperdício de comida.",
    practicalImpact: "Fim das horas encarando a geladeira sem saber o que fazer.",
  },
  {
    id: "relacao",
    title: "Relação pacífica e prazerosa com a comida",
    description:
      "Adeus à contagem neurótica de calorias e à culpa após comer. Você aprende a desfrutar de cada refeição com consciência e tranquilidade.",
    practicalImpact: "Paz mental à mesa em qualquer ambiente social.",
  },
  {
    id: "autonomia",
    title: "Autonomia para fazer escolhas conscientes",
    description:
      "O objetivo final do acompanhamento é que você não precise de nutricionista para sempre. Você entenderá o funcionamento do seu corpo.",
    practicalImpact: "Capacidade de tomar boas decisões em viagens ou restaurantes.",
  },
  {
    id: "previsibilidade",
    title: "Rotina alimentar estável e previsível",
    description:
      "Menos picos de fome incontrolável e menor oscilação de humor ou energia ao longo da jornada de trabalho.",
    practicalImpact: "Mais foco e produtividade nas atividades diárias.",
  },
  {
    id: "personalizacao",
    title: "Plano desenhado sob medida para você",
    description:
      "Sem modelos genéricos impressos na hora. Cada detalhe é adaptado às suas intolerâncias, preferências e gostos reais.",
    practicalImpact: "Aderência natural que não se parece com um esforço sobre-humano.",
  },
  {
    id: "acolhimento",
    title: "Acompanhamento profissional próximo e acolhedor",
    description:
      "Um canal de comunicação aberto para tirar dúvidas, ajustar receitas e celebrar conquistas sem cobranças vexatórias.",
    practicalImpact: "Segurança de ter uma especialista ao seu lado em cada etapa.",
  },
];

export const resultsData: ResultIndicator[] = [
  {
    metric: "Constância",
    title: "Adesão duradoura ao longo dos meses",
    subtitle: "Sem recaídas extremas",
    description:
      "Pacientes relatam facilidade em manter os hábitos por meses e anos, ao contrário de dietas de choque que duram apenas 10 dias.",
  },
  {
    metric: "Leveza",
    title: "Redução drástica da culpa ao comer",
    subtitle: "Relação saudável com a alimentação",
    description:
      "Transformação do sentimento de ansiedade em escolhas conscientes e prazerosas, comendo com presença e respeito ao corpo.",
  },
  {
    metric: "Rotina",
    title: "Previsibilidade e planejamento doméstico",
    subtitle: "Menos delivery de emergência",
    description:
      "Compras mais organizadas, despensa bem abastecida e menos dinheiro gasto com refeições rápidas e ultraprocessadas.",
  },
  {
    metric: "Variedade",
    title: "Ampliação do repertório de sabores",
    subtitle: "Alimentos naturais de verdade",
    description:
      "Inclusão gradual de novos vegetais, sementes e preparos simples que tornam o prato colorido e naturalmente saboroso.",
  },
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: "juliana",
    name: "Juliana",
    age: 32,
    city: "São Paulo, SP",
    profile: "Gerente de projetos e mãe",
    quote:
      "Eu achava que precisava seguir uma dieta perfeita e cortar tudo para ter saúde. O acompanhamento da Dra. Camila me ajudou a encontrar uma rotina que realmente consigo manter mesmo nos dias mais caóticos de trabalho.",
    highlight: "Encontrei uma rotina que realmente consigo manter.",
    routineContext: "Rotina corporativa + família",
  },
  {
    id: "marcos",
    name: "Marcos",
    age: 38,
    city: "Campinas, SP",
    profile: "Engenheiro de software",
    quote:
      "Passei a me organizar melhor e deixei de sentir que toda refeição fora de casa era um problema. Aprendi a montar pratos excelentes em restaurantes por quilo e perdi a ansiedade de 'sair da linha'.",
    highlight: "Comer fora de casa deixou de ser um problema.",
    routineContext: "Almoços fora de casa & home office",
  },
  {
    id: "beatriz",
    name: "Beatriz",
    age: 29,
    city: "Belo Horizonte, MG",
    profile: "Arquiteta e designer",
    quote:
      "O plano alimentar parecia tão simples que no início duvidei se faria diferença. Hoje durmo melhor, não sinto mais aquela moleza horrível após o almoço e finalmente parei com o ciclo de dietas malucas de internet.",
    highlight: "Mais disposição sem precisar recorrer a dietas malucas.",
    routineContext: "Atendimento online",
  },
];

export const faqData: FAQItem[] = [
  {
    id: "faq-1",
    question: "Como funciona a primeira consulta?",
    answer:
      "A primeira consulta tem duração aproximada de 60 a 75 minutos. É um encontro acolhedor em que conversamos detalhadamente sobre sua rotina, horários, histórico de saúde, preferências alimentares e dificuldades. Não há julgamentos. A partir dessa escuta, começamos a traçar os primeiros passos em conjunto.",
  },
  {
    id: "faq-2",
    question: "O atendimento pode ser online?",
    answer:
      "Sim! Atendemos pacientes de todo o Brasil e do exterior por videochamada em plataforma segura e intuitiva. O formato online tem exatamente a mesma profundidade, qualidade e suporte do presencial, com a comodidade de você ser atendido de onde estiver.",
  },
  {
    id: "faq-3",
    question: "Vou receber um plano alimentar?",
    answer:
      "Sim. O plano alimentar é 100% individualizado e entregue em até 3 dias úteis após a consulta. Ele conta com opções de substituições práticas para cada refeição, ideias de preparos rápidos e guia de compras, ficando disponível em PDF diagramado e no aplicativo de acompanhamento.",
  },
  {
    id: "faq-4",
    question: "Preciso cortar alimentos que gosto?",
    answer:
      "Não. Acreditamos que a exclusão forçada de alimentos afetivos gera apenas compulsão e sofrimento. Nosso objetivo é ensinar você a equilibrar as quantidades e combinar nutrientes, permitindo que seus pratos preferidos continuem presentes no seu cotidiano.",
  },
  {
    id: "faq-5",
    question: "O acompanhamento serve para emagrecimento?",
    answer:
      "Sim, de forma saudável e definitiva. O emagrecimento sustentável é consequência de hábitos que você consegue manter no longo prazo, sem passar fome e sem o temido efeito sanfona. Focamos na recomposição corporal e na saúde como um todo.",
  },
  {
    id: "faq-6",
    question: "Com que frequência acontecem as consultas?",
    answer:
      "No início do processo, o intervalo mais comum entre as consultas é de 30 a 45 dias, dependendo dos seus objetivos e da necessidade de ajustes. Conforme você ganha autonomia e segurança, os encontros vão se espaçando naturalmente.",
  },
  {
    id: "faq-7",
    question: "Como faço para agendar?",
    answer:
      "Basta clicar no botão 'Agendar consulta' em nossa página. Você será direcionado para o nosso canal de WhatsApp, onde nossa equipe informará os horários disponíveis, valores e tirará qualquer dúvida prévia com total agilidade.",
  },
];
