import { PortfolioItem, ServiceItem, TestimonialItem, FaqItem } from '../types';

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'residencia-alpha',
    title: 'Residência Alpha',
    location: 'Curitiba, PR',
    category: 'Residencial',
    typeLabel: 'Residencial',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgYPUqBACva1ADA4i3sHKEKf_pJ_FL9ST5LO7JAqgoG-yfEZTnxtZ1unWyJ9wDv5dJFUehYQ1t7SitBiqihG4n_iTxpHUbjNDp5DqKcwLw2wQNQwt59ZmX4q93bCEl7xcL78Q02sv8kXhV_YyhT3RqL5NFoNnhixhVcH05fm0vScw_w2bRE9zfdnCPueGJnTTqDlqWSoNGGlcarf03RSge9s18iQguqkGZOjfnx3pGu6O7ZCcgSRAB',
    aspectRatio: 'aspect-[4/3]',
    description: 'Sala de estar moderna de alto padrão com sofá bege minimalista, mesa de centro em mármore de baixo perfil, painéis de madeira nobre e iluminação embutida valorizando a luz natural.',
    year: '2024',
    features: ['Marcenaria sob medida', 'Painéis ripados', 'Iluminação LED embutida', 'Acabamento em mármore']
  },
  {
    id: 'escritorio-juridico',
    title: 'Escritório Jurídico',
    location: 'São Paulo, SP',
    category: 'Comercial',
    typeLabel: 'Comercial',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAX1TcaRkRLaR_2NCgo6tEj6wPN0Q792yzmNIvuDpy7wrHIL6_cVXibB5GNSv-PBmfObH5Udrzhi0W6II5dhDR9GHj-LA0FgX8ov25Riucdq_s3HSyvzSnJ-DG8cpaIuMAGlCKNdM1G5pH7bIMuXp7_BpqrZ8SBt2EzLI_ybvmVclVB72USw7_X8nk7qHWLddzjaS8FC72zHmh84bMCSqOOSnciJdvP1bi8IueAb7sGOh_WBsjcYn4N',
    aspectRatio: 'aspect-[3/4]',
    description: 'Escritório executivo corporativo de luxo. Ampla mesa em nogueira escura, painéis de madeira escovada, estantes retroiluminadas e atmosfera de autoridade e acolhimento.',
    year: '2024',
    features: ['Mesa de reunião executiva', 'Estante de livros estruturada', 'Painéis acústicos', 'Tons azul marinho integrados']
  },
  {
    id: 'apartamento-vista',
    title: 'Apartamento Vista',
    location: 'Balneário Camboriú, SC',
    category: 'Residencial',
    typeLabel: 'Residencial',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfGV24mAIFa_hYfiW-UM0pc8e-3eflvpKX6Sxj6oaaaQ5Bf_DPQRvZYYLMk_9ixKqOg5wAMJX-ACaIeLm8ZxvqBhJyxi7vQXfXED46EAiBYBgUHfI1z2WOR39HL5Y98zVfHViSjK5tY_TOme1NtsvtGFc5gxKuP3VkpyrW_r-JSaaRfjv7jIhAPQ_NjoTcJ_6P5WcZleQcdjjRYz0ODGhO_Ya705DHO7hUGeIG2H30nQ-6N4iUWMDn',
    aspectRatio: 'aspect-[1/1]',
    description: 'Cozinha integrada minimalista e elegante com ilha central em quartzo branco com veios sutis, armários sem puxadores aparentes e iluminação pendente discreta.',
    year: '2023',
    features: ['Ilha em quartzo esculpido', 'Ferragens italianas Blum', 'Armários matte clean', 'Piso contínuo']
  },
  {
    id: 'suite-master',
    title: 'Suíte Master',
    location: 'Curitiba, PR',
    category: 'Residencial',
    typeLabel: 'Residencial',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBh5yZCZyJtDg-fh9dXpJQQsW8DiX6Ya8XKuxrZtwPLTHZFv54pSAhdXxoF8mbH9F2dAE5TtWVkeBuWaL13Q7aFmVVlBNggtBJEP-SZcAesaR1l0OkJglV0feQa3aO_G7KmE0lS8Ljlak3O-yW4vr2YoCJFZJZHszDbHWrg1b8fjYGhNfnI04S7KyZjTEjLysDr_51PZts7_MW6xZ-HpocO8JvupseufYZ13AgS6igSDW4cHTAZumNZ',
    aspectRatio: 'aspect-[4/5]',
    description: 'Design de quarto principal sereno e luxuoso. Cabeceira estofada aveludada em tom azul marinho profundo ancorada contra parede branca com boiseries delicadas.',
    year: '2024',
    features: ['Cabeceira sob medida em veludo', 'Boiseries contemporâneas', 'Luminárias de latão', 'Módulos suspensos laterais']
  },
  {
    id: 'papel-parede-botanico',
    title: 'Living Botânico Texturizado',
    location: 'Curitiba, PR',
    category: 'Papel de Parede',
    typeLabel: 'Papel de Parede',
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200',
    aspectRatio: 'aspect-[4/3]',
    description: 'Papel de parede vinílico texturizado sob medida com estampa botânica sutil em tons terrosos e azul ardósia, instalado com encaixe perfeito de estampas.',
    year: '2024',
    features: ['MDF Naval e vinílico premium', 'Resistente à umidade', 'Corte e impressão milimétrica', 'Envio com gabarito de aplicação']
  },
  {
    id: 'espelhos-e-sancas-lounge',
    title: 'Lounge Corporativo com Espelhos',
    location: 'Curitiba, PR',
    category: 'Espelhos & Sancas',
    typeLabel: 'Espelhos & Sancas',
    imageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200',
    aspectRatio: 'aspect-[3/4]',
    description: 'Composição de espelhos bisotados bronze com iluminação indireta em sanca invertida de gesso drywall, gerando sensação de amplitude e luxo.',
    year: '2023',
    features: ['Espelhos bisotados de 5mm', 'Sanca invertida de gesso', 'Fita LED 3000K alta fidelidade', 'Acabamento sem emendas']
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'papel-de-parede',
    title: 'Papel de Parede',
    scopeBadge: 'Curitiba (instalação) · Brasil (venda)',
    badgeColor: 'blue',
    description: 'Amplo catálogo de papéis de parede nacionais e importados. Transforme texturas e cores de forma limpa e sofisticada.',
    icon: 'wallpaper',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-AJqt5bTQ6GMYLSVAJ6rO371p4C31cLQLk-3m7yxw5wNihgSAo8F3n6-5FOe9C0x5LKxewY5q9XBmLPs907nGjyEeB8-ln3ExfDlgagVTsrcptm8jKNNlmWcsjYuVNN-bv4_x-A_6d_tQWkCFBcpKatdwf05_vgz00QN0YAv3oChvEpWaiUbNGBm8-MXUyJ0T_m-wyqevq4w9X9rmJ-wFgz-oQK0kQrCSjS_lrDjl8YryvZhBVzlh',
    details: [
      'Texturas exclusivas e estampas personalizadas sob medida',
      'Material vinílico lavável de alta durabilidade',
      'Gabarito numérico de montagem simplificada para envio nacional',
      'Mão de obra especializada própria em Curitiba e Região Metropolitana'
    ]
  },
  {
    id: 'adesivos-personalizados',
    title: 'Adesivos Personalizados',
    scopeBadge: 'Curitiba (instalação) · Brasil (venda)',
    badgeColor: 'blue',
    description: 'Soluções criativas em adesivação para ambientes residenciais e corporativos. Personalização total do seu espaço.',
    icon: 'format_paint',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHM2refs7ObEuPHhd8Xx0mOA-50OiPqNb37jlqAOSnwPNHlLuLCPgIH1FMmzcGUOBP0P5UPTCLFlzLrZmpgasEbLuekHCY5-PjQtlQPxVqFCw1rPolJpqKZ63fmzh1rT9XIj6i9MMiM0zVvE1duxK9jVwQFfjXy7FP50HlXPaGknhVHETKuiw4gslK87D7ewEcVFOmhcdKk2JPwkJmTWwluOOkJTXAuAikAmWpICv3wWeyeHJuLKQ4',
    details: [
      'Impressão ecológica de alta definição e pigmentação vibrante',
      'Aplicação em paredes, portas, armários e superfícies lisas',
      'Laminação fosca ou brilhante anti-risco',
      'Corte eletrônico milimétrico de contorno'
    ]
  },
  {
    id: 'sancas',
    title: 'Sancas e Iluminação',
    scopeBadge: 'Curitiba e região',
    badgeColor: 'navy',
    description: 'Acabamentos em gesso e isopor (EPS) de alto padrão. Detalhes que valorizam a iluminação e a arquitetura do ambiente.',
    icon: 'light',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbmTkkc6J_FI0Rz2xX0o_lZ7A6W7jtGzblHnzsOKLycujCk9NHIJS2QmmJj_IhFDO6XLa294nTslX2_DIBTIgAPCj81T1-4Jmi4JixUx2cXKjbEQ_ba9VojhVtbhTSvD4GLFfnRctv_x5AIoGi8oARuNFgomQvmEnVy47qfMYSF8cVTVFQGbFJsGrijBdfBvRP2MaxA56qlynP6hTR6vAtghIvsyEFPflgTJSF7doYsEKRB4Vhnp5o',
    details: [
      'Sancas abertas, fechadas ou invertidas sob medida',
      'Infraestrutura para fitas LED e spots direcionais',
      'Alinhamento a laser e nivelamento preciso',
      'Integração perfeita com cortineiros embutidos'
    ]
  },
  {
    id: 'drywall',
    title: 'Drywall e Divisórias',
    scopeBadge: 'Curitiba e região',
    badgeColor: 'navy',
    description: 'Estruturas de gesso acartonado para divisórias, forros acústicos e nichos arquitetônicos com agilidade e limpeza na obra.',
    icon: 'grid_view',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200',
    details: [
      'Paredes divisórias acústicas e térmicas',
      'Forros rebaixados e nichos estruturados',
      'Chapas resistentes à umidade (RU) para áreas molhadas',
      'Montagem ágil sem entulho e acabamento liso para pintura'
    ]
  },
  {
    id: 'espelhos',
    title: 'Espelhos sob Medida',
    scopeBadge: 'Curitiba e região',
    badgeColor: 'navy',
    description: 'Projetos de espelhos lapidados, bisotados, bronze ou fumê instalados para ampliar visualmente e trazer sofisticação ao ambiente.',
    icon: 'aspect_ratio',
    imageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200',
    details: [
      'Espelhos de 4mm a 6mm das melhores marcas (Cebrace/Guardian)',
      'Acabamento lapidado reta ou bisotado elegante',
      'Instalação com cola neutra especial e fita dupla face de alta fixação',
      'Modelos pratas, bronze e fumê'
    ]
  },
  {
    id: 'persianas',
    title: 'Persianas e Cortinas',
    scopeBadge: 'Curitiba e região',
    badgeColor: 'navy',
    description: 'Controle de luminosidade, privacidade e conforto térmico com persianas motorizadas ou manuais de alto padrão.',
    icon: 'blinds',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
    details: [
      'Modelos Rolo, Romana, Rolô Blackout e Painel',
      'Tecidos solares (Screen 1%, 3%, 5%) e decorativos',
      'Opção de motorização e integração com automação residencial',
      'Medição técnica gratuita no local'
    ]
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'mariana-costa',
    quote: '"A equipe da Cruz Interiores superou todas as expectativas. O profissionalismo e a atenção aos detalhes durante toda a obra foram impecáveis. Meu apartamento finalmente reflete meu estilo de vida."',
    author: 'Mariana Costa',
    location: 'Curitiba, PR',
    initial: 'M',
    rating: 5,
    projectTitle: 'Residência Cruz — Living & Iluminação',
    projectCategory: 'Sancas, Iluminação Cênica & Marcenaria',
    projectImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrqL7RLGk4Hzs4MHWF2YGVOZMeIVTLtN4kTiRP_2mm5AusK1MFvVhls6cZAOxNb-vAYLGU3SVgCu2WFTEyw1hhUVrUg42ZqwmLgEozrLZWO1QvuecWrIflehOIHHk24euqiXLaiXCuVy7UVvD8GiZWeSdctOuJtenp4H2oGFL0bZeXgjHADo77a4t-jOo5204UskrNMXM421cDgo9zJKS4v4stlcwqPKMkgTsYlWjYeTWC6OZndHKf'
  },
  {
    id: 'roberto-almeida',
    quote: '"Reestruturar nosso escritório com a Cruz foi a melhor decisão. O ambiente agora transmite a exata autoridade que precisávamos, sem perder o conforto para a equipe no dia a dia."',
    author: 'Roberto Almeida',
    location: 'São Paulo, SP',
    initial: 'R',
    rating: 5,
    projectTitle: 'Sede Corporativa Almeida Assoc.',
    projectCategory: 'Adesivos Corporativos & Divisórias Drywall',
    projectImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHM2refs7ObEuPHhd8Xx0mOA-50OiPqNb37jlqAOSnwPNHlLuLCPgIH1FMmzcGUOBP0P5UPTCLFlzLrZmpgasEbLuekHCY5-PjQtlQPxVqFCw1rPolJpqKZ63fmzh1rT9XIj6i9MMiM0zVvE1duxK9jVwQFfjXy7FP50HlXPaGknhVHETKuiw4gslK87D7ewEcVFOmhcdKk2JPwkJmTWwluOOkJTXAuAikAmWpICv3wWeyeHJuLKQ4'
  },
  {
    id: 'helena-santos',
    quote: '"Tradição não é apenas tempo de mercado, é excelência contínua. A qualidade da marcenaria e a escolha dos acabamentos mostram os 30 anos de experiência que eles têm. Recomendo de olhos fechados."',
    author: 'Helena Santos',
    location: 'Balneário Camboriú, SC',
    initial: 'H',
    rating: 5,
    projectTitle: 'Penthouse Balneário — Suíte & Living',
    projectCategory: 'Papel de Parede Vinílico & Espelhos Bisotados',
    projectImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-AJqt5bTQ6GMYLSVAJ6rO371p4C31cLQLk-3m7yxw5wNihgSAo8F3n6-5FOe9C0x5LKxewY5q9XBmLPs907nGjyEeB8-ln3ExfDlgagVTsrcptm8jKNNlmWcsjYuVNN-bv4_x-A_6d_tQWkCFBcpKatdwf05_vgz00QN0YAv3oChvEpWaiUbNGBm8-MXUyJ0T_m-wyqevq4w9X9rmJ-wFgz-oQK0kQrCSjS_lrDjl8YryvZhBVzlh'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Vocês atendem fora de Curitiba?',
    answer: 'Sim! Para papéis de parede e adesivos personalizados, enviamos para todo o Brasil com projeto ajustado às suas medidas e gabarito numerado de aplicação. Para projetos completos com instalação (sancas, drywall, espelhos, persianas e marcenaria), atendemos Curitiba e Região Metropolitana.'
  },
  {
    id: 'faq-2',
    question: 'Vocês criam o projeto arquitetônico ou executam projetos existentes?',
    answer: 'Temos equipe própria de designers para criar o projeto 3D do zero de acordo com suas preferências, mas também executamos fielmente projetos criados por arquitetos e designers de interiores parceiros.'
  },
  {
    id: 'faq-3',
    question: 'Qual o prazo médio de entrega e instalação?',
    answer: 'O prazo varia conforme a complexidade. Envio de papel de parede/adesivo personalizado é postado em 5 a 10 dias úteis. Projetos de marcenaria sob medida e acabamentos residenciais levam em média de 30 a 50 dias após a aprovação final do projeto 3D.'
  },
  {
    id: 'faq-4',
    question: 'Como funciona a forma de pagamento?',
    answer: 'Trabalhamos com condições transparentes e facilitadas: entrada no fechamento e saldo parcelado no cartão de crédito, boleto bancário ou faturamento direto para empresas. Também oferecemos desconto especial para pagamento à vista.'
  },
  {
    id: 'faq-5',
    question: 'Quais materiais vocês utilizam nos móveis e acabamentos?',
    answer: 'Utilizamos apenas matérias-primas de primeira linha: MDFs com proteção antibacteriana de marcas como Duratex e Arauco, ferragens italianas/alemãs com amortecimento (Blum, Hettich) e vinílicos e espelhos certificados (Cebrace/Guardian).'
  },
  {
    id: 'faq-6',
    question: 'Os produtos e serviços possuem garantia?',
    answer: 'Com certeza. Todos os nossos projetos e instalações contam com garantia de até 5 anos contra defeitos de fabricação e montagem, respaldados por nossa tradição de mais de 30 anos no mercado.'
  },
  {
    id: 'faq-7',
    question: 'Posso visitar o showroom ou a fábrica em Curitiba?',
    answer: 'Sim! Ficaremos honrados em recebê-lo. Agendamos visitas à nossa fábrica e espaço de atendimento em Curitiba para que você conheça os amostradores de materiais, móveis em produção e comprove o padrão de acabamento.'
  }
];

export const PROCESS_STEPS = [
  {
    step: 'Passo 1',
    title: 'Contato',
    icon: 'call',
    description: 'Entendemos suas necessidades iniciais e apresentamos nossa forma de trabalho transparente.'
  },
  {
    step: 'Passo 2',
    title: 'Briefing e projeto',
    icon: 'architecture',
    description: 'Levantamento detalhado de desejos, medidas e criação da proposta de design personalizada.'
  },
  {
    step: 'Passo 3',
    title: 'Aprovação',
    icon: 'thumb_up',
    description: 'Apresentação do projeto 3D realista, ajustes finos e aprovação técnica final pelo cliente.'
  },
  {
    step: 'Passo 4',
    title: 'Produção',
    icon: 'precision_manufacturing',
    description: 'Início da fabricação e seleção rigorosa de materiais com acompanhamento de qualidade.'
  },
  {
    step: 'Passo 5',
    title: 'Instalação ou Envio',
    icon: 'home_work',
    description: 'Montagem cuidadosa no local (Curitiba e RM) ou envio seguro das peças numeradas para todo o Brasil.'
  }
];

export const COMPANY_CONTACT = {
  phone: '+55 41 92006-9148',
  phoneFormatted: '(41) 92006-9148',
  whatsappNumber: '5541920069148',
  email: 'contato@cruzinteriores.com.br',
  address: 'Rua Paulo Setúbal, 5059 - Boqueirão, Curitiba - PR, 81750-190',
  hours: 'Segunda a Sexta, das 08h às 18h',
  instagram: '@dacruz.interiores',
  yearEstablished: 1994,
  yearsOfExperience: 30
};
