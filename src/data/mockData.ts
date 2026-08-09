import { Consultant, MarketMetric, Property, Testimonial } from "../types";

export const CONSULTANT_DATA: Consultant = {
  name: "Sérgio Carvalho",
  title: "Consultor de Investimentos Imobiliários & Gestão Patrimonial",
  creci: "CRECI-PB 11.482-F",
  avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
  yearsExperience: 12,
  transactedVolume: "R$ 145M+",
  rating: 4.98,
  reviewCount: 194,
  bio: "Especialista no mercado imobiliário da Paraíba. Ajudo investidores de todo o Brasil e do exterior a multiplicarem seu capital e obterem renda passiva recorrente através dos empreendimentos de maior liquidez e valorização em João Pessoa e Cabedelo.",
  phone: "(83) 99999-8888",
  whatsappNumber: "5583999998888",
  email: "sergio@consultoriaparaiba.com.br",
  officeAddress: "Av. Pres. Epitácio Pessoa, 4780 - Tambaú, João Pessoa - PB, 58039-000",
  instagram: "https://instagram.com/sergiocarvalho.imoveispb",
  linkedin: "https://linkedin.com/in/sergiocarvalho-imoveis-pb",
  youtube: "https://youtube.com/@sergiocarvalhoimoveispb",
};

export const MARKET_METRICS: MarketMetric[] = [
  {
    id: "appreciation",
    title: "Valorização Exponencial",
    value: "+22.4%",
    subtitle: "Ao ano nos bairros de orla",
    description: "João Pessoa lidera o ranking FipeZap de valorização imobiliária em capitais brasileiras, superando ativos tradicionais e a inflação com folga.",
    badge: "1º no Brasil",
  },
  {
    id: "yield",
    title: "Rentabilidade em Airbnb",
    value: "12% a 16%",
    subtitle: "Yield líquido médio anual",
    description: "Studios e compactos de luxo beira-mar operados por gestão profissional de aluguel por temporada entregam renda constante o ano inteiro.",
    badge: "Renda Passiva",
  },
  {
    id: "tourism",
    title: "Ocupação Turística",
    value: "84.5%",
    subtitle: "Taxa média de ocupação anual",
    description: "Sol o ano todo, praias de águas mornas e gastronomia de ponta atrativa para turistas, executivos e nômades digitais de todo o planeta.",
    badge: "Turismo Aquecido",
  },
  {
    id: "quality",
    title: "Qualidade de Vida & Segurança",
    value: "#1 Nordeste",
    subtitle: "Capital mais verde e segura",
    description: "Onde o sol nasce primeiro nas Américas. Excelente infraestrutura urbana, menor custo por metro quadrado da orla nordestina e alta qualidade de vida.",
    badge: "Ponto Oriental",
  },
];

export const PROPERTIES_DATA: Property[] = [
  {
    id: "tambau-ocean-studio",
    title: "Horizon Tambaú Resort Studios",
    category: "Lançamento",
    neighborhood: "Tambaú",
    city: "João Pessoa",
    priceStarting: 349000,
    estimatedYield: "14.2% a.a.",
    estimatedAppreciation: "+38% até a entrega",
    area: "26m² a 42m²",
    bedrooms: "Studio & 1 Quarto",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000",
    description: "Empreendimento conceito Beira-Mar com operação de aluguel por temporada integrada, piscina infinity no rooftop, coworking e serviços de hotelaria 5 estrelas.",
    highlights: ["Serviço de Lockoff e Housi", "Rooftop com vista 360° do mar", "Bar e restaurante exclusivo", "A 50m da feirinha de Tambaú"],
    idealFor: "Investidores focados em renda imediata com Airbnb e forte valorização em curtíssimo prazo.",
  },
  {
    id: "altiplano-skyline-residence",
    title: "Altiplano Royal Mansions",
    category: "Planta",
    neighborhood: "Altiplano Cabo Branco",
    city: "João Pessoa",
    priceStarting: 1280000,
    estimatedYield: "9.8% a.a.",
    estimatedAppreciation: "+42% na construção",
    area: "145m² a 280m²",
    bedrooms: "3 e 4 Suítes",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1000",
    description: "O endereço mais exclusivo da capital paraibana. Apartamentos de altíssimo padrão com varanda gourmet panorâmica com vista definitiva para o mar e para a falésia.",
    highlights: ["Elevadores privativos com biometria", "Complexo aquático aquecido", "Quadra de Tênis em saibro", "Gerador 100% full para todo o prédio"],
    idealFor: "Famílias e investidores de alto patrimônio buscando máxima sofisticação, espaço e valorização de marca.",
  },
  {
    id: "intermares-beach-club",
    title: "Intermares Prime Beach Club",
    category: "Pronto",
    neighborhood: "Intermares",
    city: "Cabedelo",
    priceStarting: 580000,
    estimatedYield: "11.5% a.a.",
    estimatedAppreciation: "+25% em 24 meses",
    area: "58m² a 88m²",
    bedrooms: "2 Quartos (1 Suíte)",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000",
    description: "Prédio entregue pé na areia com acabamento em mármore importado, piscina oceânica, surf locker e localização privilegiada no crescimento de Cabedelo.",
    highlights: ["Pé na areia em praia paradisíaca", "Pronto para morar ou rentabilizar", "A 5 min do Parque Areia Vermelha", "Vaga coberta e ponto de recarga elétrica"],
    idealFor: "Investidores buscando imóvel pronto com rentabilidade imediata e opção de uso como refúgio de praia.",
  },
  {
    id: "bessa-smart-residence",
    title: "Bessa Caribbe Wave Smart",
    category: "Lançamento",
    neighborhood: "Bessa",
    city: "João Pessoa",
    priceStarting: 410000,
    estimatedYield: "13.0% a.a.",
    estimatedAppreciation: "+32% até as chaves",
    area: "34m² a 52m²",
    bedrooms: "1 e 2 Quartos",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=1000",
    description: "Conhecido como o 'Caribe Paraibano', o bairro do Bessa recebe um projeto jovem, moderno e super conectado. Fechadura eletrônica, automação e lavanderia OMO no condomínio.",
    highlights: ["A 120m do mar do Bessa", "Automação por IA e Alexa", "Piscina com bar molhado no topo", "Baixo custo condominial"],
    idealFor: "Público jovem, nômades digitais e investidores com teto de entrada até R$ 500 mil.",
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "test-1",
    name: "Engº Roberto Camargo",
    cityOrigin: "São Paulo - SP",
    occupation: "Empresário & Investidor Imobiliário",
    quote: "Já investia em imóveis em SP e na Riviera, mas o retorno na Paraíba superou todas as minhas expectativas. Com a assessoria do Sérgio, comprei 2 studios em Tambaú por videochamada. Em menos de 18 meses, a valorização bateu 35% e a rentabilidade do Airbnb paga o investimento com folga!",
    investmentType: "2 Studios na Planta em Tambaú",
    roiAchieved: "+35% de valorização + 14.8% a.a. em Airbnb",
    rating: 5,
    date: "Junho 2026",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
  },
  {
    id: "test-2",
    name: "Dra. Patricia & Marcelo Lins",
    cityOrigin: "Brasília - DF",
    occupation: "Médica e Advogado",
    quote: "Queríamos diversificar patrimônio fora do mercado do DF e nos apaixonamos pelo momento de João Pessoa. O Sérgio conduziu tudo com um nível de transparência e análise de dados impressionante. Fizemos a reunião de consultoria no sábado e fechamos uma unidade no Altiplano.",
    investmentType: "Apartamento de Luxo no Altiplano",
    roiAchieved: "+28% de valorização em 12 meses",
    rating: 5,
    date: "Maio 2026",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300",
  },
  {
    id: "test-3",
    name: "Fernando Viana",
    cityOrigin: "Lisboa - Portugal",
    occupation: "Gestor de Fundos de Investimento",
    quote: "Investir à distância gera receio, mas a consultoria personalizada e a segurança jurídica que o Sérgio transmitiu foram decisivas. O ecossistema turístico da Paraíba está num momento de decolagem absurdo. Recomendo de olhos fechados!",
    investmentType: "Portfólio de 3 Unidades em Cabedelo/Intermares",
    roiAchieved: "+15.2% Yield Anual em Euro equivalente",
    rating: 5,
    date: "Abril 2026",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300",
  },
];

export const OBJECTIVE_OPTIONS = [
  { id: "airbnb", label: "Rentabilidade com Airbnb / Short-Stay", icon: "Building2" },
  { id: "planta", label: "Ganha de Capital / Compra na Planta", icon: "TrendingUp" },
  { id: "luxo", label: "Imóveis de Luxo Beira-Mar (Alto Padrão)", icon: "Crown" },
  { id: "condominio", label: "Lotes e Casas em Condomínio Fechado", icon: "Home" },
  { id: "portfolio", label: "Diversificação e Estruturação de Portfólio", icon: "PieChart" },
];

export const BUDGET_OPTIONS = [
  "R$ 300.000 a R$ 500.000",
  "R$ 500.000 a R$ 1.000.000",
  "R$ 1.000.000 a R$ 2.500.000",
  "Acima de R$ 2.500.000",
];

export const AVAILABLE_TIME_SLOTS = [
  "09:00", "10:30", "14:00", "15:30", "17:00", "19:00",
];

export const FAQ_ITEMS = [
  {
    question: "Por que investir em imóveis na Paraíba agora e não apenas em renda fixa?",
    answer: "Enquanto a renda fixa sofre oscilações de juros, o mercado imobiliário da Paraíba combina duas fontes de ganho: VALORIZAÇÃO do ativo físico (até 22% ao ano em João Pessoa) + RENDA PASSIVA mensal de aluguel por temporada (12% a 16% a.a.). É a união de proteção patrimonial inflacionária com multiplicação de capital.",
  },
  {
    question: "É possível fazer o processo de escolha, jurídica e compra 100% à distância?",
    answer: "Sim! Mais de 65% dos nossos clientes investidores moram em SP, RJ, DF, Sul do Brasil ou no exterior. Realizamos passeios virtuais 3D nos canteiros de obra, análise jurídica minuciosa, emissão de certidões e assinatura digital de contrato via Docusign/Clicksign com total respaldo legal e tranquilidade.",
  },
  {
    question: "Como funciona a gestão do aluguel por temporada no Airbnb?",
    answer: "Os principais lançamentos de João Pessoa já possuem parcerias com gestoras profissionais de hospedagem (como Housi, Charlie, Anfitrião Prime ou gestoras locais). Eles cuidam do anúncio, limpeza, check-in, precificação dinâmica e manutenção. Você apenas acompanha os rendimentos mensais caírem na sua conta bancária.",
  },
  {
    question: "Como funciona a videoconferência de agendamento?",
    answer: "A reunião dura cerca de 20 a 30 minutos. Nela, o Sérgio apresenta dados atualizados do mercado de João Pessoa e Cabedelo, projeções financeiras personalizadas para o seu orçamento e as 3 melhores oportunidades fora do mercado tradicional (com condições especiais de pré-lançamento).",
  },
];
