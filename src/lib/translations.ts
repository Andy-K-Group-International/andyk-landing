/**
 * Multi-language translations for Andy'K Group landing page
 *
 * Supported languages:
 * - en: English (default)
 * - es: Spanish (formal - usted)
 * - sk: Slovak
 * - nl: Dutch
 * - pt: Portuguese
 * - de: German (formal - Sie)
 *
 * Brand names remain unchanged: Andy'K Group International LTD, A.D.A.M., E.V.A.
 */

export type Locale = "en" | "es" | "sk" | "nl" | "pt" | "de";

// English translations (source of truth)
const en = {
  // Company information
  company: {
    name: "Andy'K Group International LTD",
    tagline: "Your strategic partner in business automation & outreach.",
    subtitle: "Powering A.D.A.M. & E.V.A. — the operational automation systems for modern growth.",
    description: "Andy'K Group International LTD is a UK-based innovation company, combining business intelligence, automation, and strategic outreach.",
    descriptionExtra: "With clients across Europe and Latin America, we build practical tools to help companies grow, structure, and scale — intelligently.",
    descriptionSystems: "Our operational automation systems A.D.A.M. & E.V.A. are transforming how startups, SMEs, and public institutions work with documents, client onboarding, and communication.",
    quote: "One structure. One flow. One system.",
    quoteSubtitle: "Built for growth.",
    location: "London, UK",
    ukCompany: "UK Limited Company",
  },

  // Hero section
  hero: {
    ctaPrimary: "Tell Us About You",
    ctaSecondary: "Learn How A.D.A.M. Works",
  },

  // Top banner
  banner: {
    b2bLead: "B2B Lead Generation:",
    b2bText: "targeted outreach & pipeline management",
    adamSystem: "A.D.A.M. System:",
    adamText: "automated documents, proposals & client lifecycle",
    b2gTender: "B2G Tender Strategy:",
    b2gText: "public procurement & bid preparation",
    trusted: "Trusted across:",
    trustedText: "LATAM, Benelux, DACH & US",
  },

  // Services section (FaqSection)
  services: {
    heading: "What we",
    headingItalic: "deliver.",
    subtitle: "Comprehensive solutions across technology, consulting, and digital transformation.",
    items: [
      {
        title: "Strategic Business Consulting",
        description: "Expert guidance to refine your business strategies and optimize operations for growth.",
      },
      {
        title: "Automation & AI Solutions",
        description: "Implement cutting-edge automation and AI to streamline workflows and boost efficiency.",
      },
      {
        title: "Market Entry & Outreach",
        description: "Expand your reach with strategic market entry plans and effective outreach campaigns.",
      },
      {
        title: "Public Sector & Government Contracts",
        description: "Navigate the complexities of public sector procurement and secure valuable contracts.",
      },
      {
        title: "Intellectual Property & Licensing",
        description: "Protect and leverage your intellectual assets through smart licensing and IP strategies.",
      },
      {
        title: "Brand Development & Digital Presence",
        description: "Build a strong brand identity and amplify your presence across digital platforms.",
      },
    ],
  },

  // Roadmap section (A.D.A.M.)
  roadmap: {
    heading: "How A.D.A.M.",
    headingItalic: "Works",
    subtitle: "From first contact to project launch in six structured steps.",
    steps: [
      {
        title: "Questionnaire",
        description: "Complete our structured intake form. We learn about your business, goals, and requirements.",
      },
      {
        title: "Proposal",
        description: "We craft a tailored proposal based on your needs. Review it in your personal dashboard.",
      },
      {
        title: "Contract",
        description: "Review, comment, and digitally sign your contract. Full transparency, no surprises.",
      },
      {
        title: "Strategy",
        description: "Together we define the strategy and timeline. Every detail aligned before we start.",
      },
      {
        title: "Invoice",
        description: "Automated invoicing with clear payment terms. Everything tracked in one place.",
      },
      {
        title: "Onboarding",
        description: "Project launches. Real-time updates, document sharing, and ongoing support through A.D.A.M.",
      },
    ],
    statusBadge: "A.D.A.M. is live and processing clients",
    stepLabel: "Step",
  },

  // Pricing section
  pricing: {
    heading: "Plans for",
    headingItalic: "every stage",
    subtitle: "Structured advisory and business development — combining strategy, public sector expertise, and technology infrastructure to help you scale.",
    eyebrow: "Transparent pricing",
    tabB2B: "B2B Business Development",
    tabB2G: "B2G Public Sector",
    tabTech: "Technology / CTO",
    commitment: "Starting from 3 months",
    popular: "Popular",
    from: "from",
    perMonth: "/ month",
    perHour: "/ hour",
    getStarted: "Get Started",
    customQuote: "Need something custom? We tailor packages to your exact requirements.",
    requestCustomQuote: "Request a Custom Quote",
    billingBasis: "Billed monthly",
    billingMinimum: "Initial commitment of 3\u201312 months",
    billingRenewal: "Transitions to rolling monthly subscription after delivery",
    billingCancellation: "15-day cancellation notice",

    // B2B Plans
    b2bCore: {
      name: "CORE",
      features: [
        "40 qualified leads per month",
        "1 market / 1 target persona",
        "Email outreach + cold calling",
        "Monthly reporting",
        "Onboarding strategy session",
      ],
    },
    b2bAdvance: {
      name: "ADVANCE",
      features: [
        "60 qualified leads per month",
        "2 markets coverage",
        "Multi-touch outreach campaigns",
        "Performance optimization",
        "Monthly strategy review",
      ],
    },
    b2bVanguard: {
      name: "VANGUARD",
      features: [
        "80 qualified leads per month",
        "Multi-market campaigns",
        "CRM pipeline setup",
        "Lead scoring system",
        "Strategic outreach architecture",
      ],
    },
    b2bPrestige: {
      name: "PRESTIGE",
      features: [
        "120+ qualified leads",
        "Branded outreach campaigns",
        "Custom call & email scripts",
        "Strategic business development consulting",
        "Executive-level reporting",
      ],
    },

    // B2G Plans
    b2gStarter: {
      name: "GovStarter",
      features: [
        "5 verified public tenders per month",
        "Eligibility review",
        "Basic bid advisory",
        "Monthly consultation",
      ],
    },
    b2gExpand: {
      name: "GovExpand",
      features: [
        "10 verified tenders",
        "Pre-bid checklist",
        "Strategy consultation",
        "Tender pipeline building",
      ],
    },
    b2gElite: {
      name: "GovElite",
      features: [
        "1 full proposal draft per month",
        "Tender roadmap development",
        "Consortium matchmaking",
        "Priority advisory support",
      ],
    },

    // Tech Plans
    techArchitecture: {
      name: "System Architecture Consulting",
      features: [
        "Business system architecture design",
        "Infrastructure planning",
        "Automation architecture strategy",
      ],
    },
    techPlatforms: {
      name: "Business Platforms Development",
      features: [
        "Internal portals",
        "Operational dashboards",
        "Custom company systems",
      ],
    },
    techAutomation: {
      name: "Automation & Integrations",
      features: [
        "CRM / ERP integrations",
        "API automation",
        "Workflow automation systems",
      ],
    },
    techAudit: {
      name: "Technical System Audit",
      features: [
        "Infrastructure audit",
        "Scalability assessment",
        "Security baseline review",
      ],
    },
    techCTO: {
      name: "CTO-as-a-Service",
      features: [
        "Technical involvement",
        "Architecture supervision",
        "Vendor and infrastructure selection",
        "Scaling strategy consulting",
        "Minimum 1-month contract — limited spots",
      ],
    },
  },

  // CTA Section
  cta: {
    eyebrow: "Get in touch",
    heading: "Let's build something",
    headingItalic: "together.",
    subtitle: "Whether you need consulting, technology solutions, or a strategic partner for international expansion — we're ready to talk.",
    ctaPrimary: "Tell Us About You",
    ctaSecondary: "Request a Custom Quote",
    followLinkedIn: "Follow us on LinkedIn",
  },

  // Contact form
  contact: {
    heading: "Send Us a Message",
    subtitle: "Fill out the form below and we'll get back to you within 24 hours.",
    labelName: "Full Name",
    labelEmail: "Email Address",
    labelCompany: "Company Name",
    labelMessage: "Message",
    required: "*",
    placeholderName: "Your full name",
    placeholderEmail: "your@email.com",
    placeholderCompany: "Your company name",
    placeholderMessage: "Tell us about your business goals and how we can help...",
    buttonSend: "Send Message",
    privacyText: "By submitting this form, you agree to our terms of service and privacy policy.",
    successHeading: "Message prepared",
    successText: "Your email client should have opened. If not, email us directly at info@andykgroupinternational.com",
  },

  // Footer
  footer: {
    copyright: "© 2026",
    linkHome: "Home",
    linkSystems: "A.D.A.M. & E.V.A.",
    linkPricing: "Pricing",
    linkContact: "Contact",
    linkPrivacy: "Privacy Policy",
    linkClientPortal: "Client Portal",
    selectLanguage: "Language",
    selectCurrency: "Currency",
  },

  // Common/Shared
  common: {
    getStarted: "Get Started",
    learnMore: "Learn More",
    contactUs: "Contact Us",
    readMore: "Read More",
  },

  // Language names
  languages: {
    en: "English",
    es: "Español",
    sk: "Slovenčina",
    nl: "Nederlands",
    pt: "Português",
    de: "Deutsch",
  },
};

// Spanish translations (formal - usted)
const es: typeof en = {
  company: {
    name: "Andy'K Group International LTD",
    tagline: "Su socio estratégico en automatización empresarial y divulgación.",
    subtitle: "Impulsando A.D.A.M. & E.V.A. — los sistemas de automatización operativa para el crecimiento moderno.",
    description: "Andy'K Group International LTD es una empresa de innovación con sede en el Reino Unido que combina inteligencia empresarial, automatización y divulgación estratégica.",
    descriptionExtra: "Con clientes en toda Europa y América Latina, construimos herramientas prácticas para ayudar a las empresas a crecer, estructurarse y escalar — de manera inteligente.",
    descriptionSystems: "Nuestros sistemas de automatización operativa A.D.A.M. & E.V.A. están transformando la forma en que las startups, PYMEs e instituciones públicas trabajan con documentos, incorporación de clientes y comunicación.",
    quote: "Una estructura. Un flujo. Un sistema.",
    quoteSubtitle: "Construido para crecer.",
    location: "Londres, Reino Unido",
    ukCompany: "Empresa Limitada del Reino Unido",
  },

  hero: {
    ctaPrimary: "Cuéntenos sobre usted",
    ctaSecondary: "Descubra cómo funciona A.D.A.M.",
  },

  banner: {
    b2bLead: "Generación de leads B2B:",
    b2bText: "divulgación dirigida y gestión de pipeline",
    adamSystem: "Sistema A.D.A.M.:",
    adamText: "documentos automatizados, propuestas y ciclo de vida del cliente",
    b2gTender: "Estrategia de licitación B2G:",
    b2gText: "contratación pública y preparación de ofertas",
    trusted: "Confianza en:",
    trustedText: "LATAM, Benelux, DACH y EE.UU.",
  },

  services: {
    heading: "Lo que",
    headingItalic: "ofrecemos.",
    subtitle: "Soluciones integrales en tecnología, consultoría y transformación digital.",
    items: [
      {
        title: "Consultoría Estratégica Empresarial",
        description: "Orientación experta para refinar sus estrategias empresariales y optimizar las operaciones para el crecimiento.",
      },
      {
        title: "Soluciones de Automatización e IA",
        description: "Implemente automatización e IA de vanguardia para optimizar flujos de trabajo y aumentar la eficiencia.",
      },
      {
        title: "Entrada al Mercado y Divulgación",
        description: "Amplíe su alcance con planes estratégicos de entrada al mercado y campañas de divulgación efectivas.",
      },
      {
        title: "Sector Público y Contratos Gubernamentales",
        description: "Navegue las complejidades de la contratación del sector público y asegure contratos valiosos.",
      },
      {
        title: "Propiedad Intelectual y Licencias",
        description: "Proteja y aproveche sus activos intelectuales a través de estrategias inteligentes de licencias y PI.",
      },
      {
        title: "Desarrollo de Marca y Presencia Digital",
        description: "Construya una identidad de marca sólida y amplifique su presencia en plataformas digitales.",
      },
    ],
  },

  roadmap: {
    heading: "Cómo funciona",
    headingItalic: "A.D.A.M.",
    subtitle: "Del primer contacto al lanzamiento del proyecto en seis pasos estructurados.",
    steps: [
      {
        title: "Cuestionario",
        description: "Complete nuestro formulario de admisión estructurado. Conocemos su empresa, objetivos y requisitos.",
      },
      {
        title: "Propuesta",
        description: "Elaboramos una propuesta a medida basada en sus necesidades. Revísela en su panel personal.",
      },
      {
        title: "Contrato",
        description: "Revise, comente y firme digitalmente su contrato. Total transparencia, sin sorpresas.",
      },
      {
        title: "Estrategia",
        description: "Juntos definimos la estrategia y el cronograma. Cada detalle alineado antes de comenzar.",
      },
      {
        title: "Factura",
        description: "Facturación automatizada con condiciones de pago claras. Todo rastreado en un solo lugar.",
      },
      {
        title: "Incorporación",
        description: "El proyecto se lanza. Actualizaciones en tiempo real, intercambio de documentos y soporte continuo a través de A.D.A.M.",
      },
    ],
    statusBadge: "A.D.A.M. está activo y procesando clientes",
    stepLabel: "Paso",
  },

  pricing: {
    heading: "Planes para",
    headingItalic: "cada etapa",
    subtitle: "Asesoramiento estructurado y desarrollo empresarial — combinando estrategia, experiencia en el sector público e infraestructura tecnológica para ayudarle a escalar.",
    eyebrow: "Precios transparentes",
    tabB2B: "Desarrollo Empresarial B2B",
    tabB2G: "Sector Público B2G",
    tabTech: "Tecnología / CTO",
    commitment: "Desde 3 meses",
    popular: "Popular",
    from: "desde",
    perMonth: "/ mes",
    perHour: "/ hora",
    getStarted: "Comenzar",
    customQuote: "¿Necesita algo personalizado? Adaptamos paquetes a sus requisitos exactos.",
    requestCustomQuote: "Solicitar presupuesto personalizado",
    billingBasis: "Facturación mensual",
    billingMinimum: "Compromiso inicial de 3\u201312 meses",
    billingRenewal: "Transición a suscripción mensual continua tras la entrega",
    billingCancellation: "Aviso de cancelación de 15 días",

    b2bCore: {
      name: "CORE",
      features: [
        "40 leads cualificados por mes",
        "1 mercado / 1 persona objetivo",
        "Divulgación por correo electrónico + llamadas en frío",
        "Informes mensuales",
        "Sesión de estrategia de incorporación",
      ],
    },
    b2bAdvance: {
      name: "ADVANCE",
      features: [
        "60 leads cualificados por mes",
        "Cobertura de 2 mercados",
        "Campañas de divulgación multitáctil",
        "Optimización de rendimiento",
        "Revisión de estrategia mensual",
      ],
    },
    b2bVanguard: {
      name: "VANGUARD",
      features: [
        "80 leads cualificados por mes",
        "Campañas multimercado",
        "Configuración de pipeline CRM",
        "Sistema de puntuación de leads",
        "Arquitectura de divulgación estratégica",
      ],
    },
    b2bPrestige: {
      name: "PRESTIGE",
      features: [
        "120+ leads cualificados",
        "Campañas de divulgación de marca",
        "Scripts personalizados de llamadas y correos electrónicos",
        "Consultoría estratégica de desarrollo empresarial",
        "Informes a nivel ejecutivo",
      ],
    },

    b2gStarter: {
      name: "GovStarter",
      features: [
        "5 licitaciones públicas verificadas por mes",
        "Revisión de elegibilidad",
        "Asesoramiento básico de oferta",
        "Consulta mensual",
      ],
    },
    b2gExpand: {
      name: "GovExpand",
      features: [
        "10 licitaciones verificadas",
        "Lista de verificación previa a la oferta",
        "Consulta de estrategia",
        "Construcción de pipeline de licitaciones",
      ],
    },
    b2gElite: {
      name: "GovElite",
      features: [
        "1 borrador de propuesta completo por mes",
        "Desarrollo de hoja de ruta de licitaciones",
        "Emparejamiento de consorcios",
        "Soporte de asesoramiento prioritario",
      ],
    },

    techArchitecture: {
      name: "Consultoría de Arquitectura de Sistemas",
      features: [
        "Diseño de arquitectura de sistemas empresariales",
        "Planificación de infraestructura",
        "Estrategia de arquitectura de automatización",
      ],
    },
    techPlatforms: {
      name: "Desarrollo de Plataformas Empresariales",
      features: [
        "Portales internos",
        "Paneles operativos",
        "Sistemas empresariales personalizados",
      ],
    },
    techAutomation: {
      name: "Automatización e Integraciones",
      features: [
        "Integraciones CRM / ERP",
        "Automatización de API",
        "Sistemas de automatización de flujo de trabajo",
      ],
    },
    techAudit: {
      name: "Auditoría de Sistemas Técnicos",
      features: [
        "Auditoría de infraestructura",
        "Evaluación de escalabilidad",
        "Revisión de línea base de seguridad",
      ],
    },
    techCTO: {
      name: "CTO-como-Servicio",
      features: [
        "Participación técnica",
        "Supervisión de arquitectura",
        "Selección de proveedores e infraestructura",
        "Consultoría de estrategia de escalado",
        "Contrato mínimo de 1 mes — plazas limitadas",
      ],
    },
  },

  cta: {
    eyebrow: "Póngase en contacto",
    heading: "Construyamos algo",
    headingItalic: "juntos.",
    subtitle: "Ya sea que necesite consultoría, soluciones tecnológicas o un socio estratégico para expansión internacional — estamos listos para hablar.",
    ctaPrimary: "Cuéntenos sobre usted",
    ctaSecondary: "Solicitar presupuesto personalizado",
    followLinkedIn: "Síguenos en LinkedIn",
  },

  contact: {
    heading: "Envíenos un mensaje",
    subtitle: "Complete el formulario a continuación y nos pondremos en contacto con usted en un plazo de 24 horas.",
    labelName: "Nombre completo",
    labelEmail: "Dirección de correo electrónico",
    labelCompany: "Nombre de la empresa",
    labelMessage: "Mensaje",
    required: "*",
    placeholderName: "Su nombre completo",
    placeholderEmail: "su@email.com",
    placeholderCompany: "El nombre de su empresa",
    placeholderMessage: "Cuéntenos sobre sus objetivos comerciales y cómo podemos ayudarle...",
    buttonSend: "Enviar mensaje",
    privacyText: "Al enviar este formulario, acepta nuestros términos de servicio y política de privacidad.",
    successHeading: "Mensaje preparado",
    successText: "Su cliente de correo electrónico debería haberse abierto. Si no, envíenos un correo electrónico directamente a info@andykgroupinternational.com",
  },

  footer: {
    copyright: "© 2026",
    linkHome: "Inicio",
    linkSystems: "A.D.A.M. & E.V.A.",
    linkPricing: "Precios",
    linkContact: "Contacto",
    linkPrivacy: "Política de privacidad",
    linkClientPortal: "Portal del cliente",
    selectLanguage: "Idioma",
    selectCurrency: "Moneda",
  },

  common: {
    getStarted: "Comenzar",
    learnMore: "Más información",
    contactUs: "Contáctenos",
    readMore: "Leer más",
  },

  languages: {
    en: "English",
    es: "Español",
    sk: "Slovenčina",
    nl: "Nederlands",
    pt: "Português",
    de: "Deutsch",
  },
};

// Slovak translations
const sk: typeof en = {
  company: {
    name: "Andy'K Group International LTD",
    tagline: "Váš strategický partner v automatizácii podnikania a oslovovaní.",
    subtitle: "Poháňame A.D.A.M. & E.V.A. — operačné automatizačné systémy pre moderný rast.",
    description: "Andy'K Group International LTD je inovačná spoločnosť so sídlom vo Veľkej Británii, ktorá kombinuje obchodnú inteligenciu, automatizáciu a strategické oslovovanie.",
    descriptionExtra: "S klientmi po celej Európe a Latinskej Amerike vytvárame praktické nástroje, ktoré pomáhajú spoločnostiam rásť, štruktúrovať sa a škálovať — inteligentne.",
    descriptionSystems: "Naše operačné automatizačné systémy A.D.A.M. & E.V.A. transformujú spôsob, akým startupy, malé a stredné podniky a verejné inštitúcie pracujú s dokumentmi, začleňovaním klientov a komunikáciou.",
    quote: "Jedna štruktúra. Jeden tok. Jeden systém.",
    quoteSubtitle: "Vytvorené pre rast.",
    location: "Londýn, Veľká Británia",
    ukCompany: "Spoločnosť s ručením obmedzeným Veľkej Británie",
  },

  hero: {
    ctaPrimary: "Povedzte nám o sebe",
    ctaSecondary: "Zistite, ako funguje A.D.A.M.",
  },

  banner: {
    b2bLead: "Generovanie B2B leadov:",
    b2bText: "cielené oslovenie a správa pipeline",
    adamSystem: "Systém A.D.A.M.:",
    adamText: "automatizované dokumenty, návrhy a životný cyklus klienta",
    b2gTender: "Stratégia B2G tenderov:",
    b2gText: "verejné obstarávanie a príprava ponúk",
    trusted: "Dôveryhodné naprieč:",
    trustedText: "LATAM, Benelux, DACH a USA",
  },

  services: {
    heading: "Čo",
    headingItalic: "dodávame.",
    subtitle: "Komplexné riešenia v oblasti technológií, poradenstva a digitálnej transformácie.",
    items: [
      {
        title: "Strategické obchodné poradenstvo",
        description: "Odborné vedenie na zdokonalenie vašich obchodných stratégií a optimalizáciu operácií pre rast.",
      },
      {
        title: "Riešenia automatizácie a AI",
        description: "Implementujte špičkovú automatizáciu a AI na zjednodušenie pracovných postupov a zvýšenie efektívnosti.",
      },
      {
        title: "Vstup na trh a oslovenie",
        description: "Rozšírte svoj dosah pomocou strategických plánov vstupu na trh a efektívnych kampaní oslovenia.",
      },
      {
        title: "Verejný sektor a vládne zmluvy",
        description: "Orientujte sa v zložitostiach verejného obstarávania a zabezpečte si hodnotné zmluvy.",
      },
      {
        title: "Duševné vlastníctvo a licencie",
        description: "Chráňte a využívajte svoje duševné aktíva prostredníctvom inteligentných licenčných a IP stratégií.",
      },
      {
        title: "Rozvoj značky a digitálna prítomnosť",
        description: "Vytvorte silnú identitu značky a zosilnite svoju prítomnosť na digitálnych platformách.",
      },
    ],
  },

  roadmap: {
    heading: "Ako funguje",
    headingItalic: "A.D.A.M.",
    subtitle: "Od prvého kontaktu po spustenie projektu v šiestich štruktúrovaných krokoch.",
    steps: [
      {
        title: "Dotazník",
        description: "Vyplňte náš štruktúrovaný formulár. Spoznáme vašu firmu, ciele a požiadavky.",
      },
      {
        title: "Návrh",
        description: "Vytvoríme návrh na mieru podľa vašich potrieb. Skontrolujte ho vo vašom osobnom paneli.",
      },
      {
        title: "Zmluva",
        description: "Skontrolujte, komentujte a digitálne podpíšte zmluvu. Úplná transparentnosť, žiadne prekvapenia.",
      },
      {
        title: "Stratégia",
        description: "Spoločne definujeme stratégiu a časový plán. Každý detail zladený pred začiatkom.",
      },
      {
        title: "Faktúra",
        description: "Automatizovaná fakturácia s jasnými platobnými podmienkami. Všetko sledované na jednom mieste.",
      },
      {
        title: "Onboarding",
        description: "Projekt sa spúšťa. Aktualizácie v reálnom čase, zdieľanie dokumentov a priebežná podpora cez A.D.A.M.",
      },
    ],
    statusBadge: "A.D.A.M. je aktívny a spracováva klientov",
    stepLabel: "Krok",
  },

  pricing: {
    heading: "Plány pre",
    headingItalic: "každú fázu",
    subtitle: "Štruktúrované poradenstvo a obchodný rozvoj — kombinujúce stratégiu, odbornosť vo verejnom sektore a technologickú infraštruktúru, aby ste mohli škálovať.",
    eyebrow: "Transparentné ceny",
    tabB2B: "B2B obchodný rozvoj",
    tabB2G: "B2G verejný sektor",
    tabTech: "Technológia / CTO",
    commitment: "Od 3 mesiacov",
    popular: "Populárne",
    from: "od",
    perMonth: "/ mesiac",
    perHour: "/ hodina",
    getStarted: "Začať",
    customQuote: "Potrebujete niečo na mieru? Prispôsobujeme balíčky presne vašim požiadavkám.",
    requestCustomQuote: "Požiadať o cenovú ponuku na mieru",
    billingBasis: "Mesačná fakturácia",
    billingMinimum: "Počiatočný záväzok 3\u201312 mesiacov",
    billingRenewal: "Po dodaní prechod na priebežné mesačné predplatné",
    billingCancellation: "15-dňová výpovedná lehota",

    b2bCore: {
      name: "CORE",
      features: [
        "40 kvalifikovaných leadov mesačne",
        "1 trh / 1 cieľová osoba",
        "E-mailové oslovenie + studené volanie",
        "Mesačné vykazovanie",
        "Začlenenie strategickej relácie",
      ],
    },
    b2bAdvance: {
      name: "ADVANCE",
      features: [
        "60 kvalifikovaných leadov mesačne",
        "Pokrytie 2 trhov",
        "Viacdotykové kampane oslovenia",
        "Optimalizácia výkonu",
        "Mesačná kontrola stratégie",
      ],
    },
    b2bVanguard: {
      name: "VANGUARD",
      features: [
        "80 kvalifikovaných leadov mesačne",
        "Viac trhové kampane",
        "Nastavenie CRM pipeline",
        "Systém hodnotenia leadov",
        "Strategická architektúra oslovenia",
      ],
    },
    b2bPrestige: {
      name: "PRESTIGE",
      features: [
        "120+ kvalifikovaných leadov",
        "Značkové kampane oslovenia",
        "Vlastné skripty hovorov a e-mailov",
        "Strategické obchodné rozvojové poradenstvo",
        "Vykazovanie na úrovni vedenia",
      ],
    },

    b2gStarter: {
      name: "GovStarter",
      features: [
        "5 overených verejných tenderov mesačne",
        "Kontrola oprávnenosti",
        "Základné poradenstvo k ponuke",
        "Mesačná konzultácia",
      ],
    },
    b2gExpand: {
      name: "GovExpand",
      features: [
        "10 overených tenderov",
        "Zoznam kontrol pred ponukou",
        "Strategická konzultácia",
        "Budovanie pipeline tenderov",
      ],
    },
    b2gElite: {
      name: "GovElite",
      features: [
        "1 kompletný návrh návrhu mesačne",
        "Vývoj cestovnej mapy tenderov",
        "Spárenie konzorcia",
        "Prioritná poradenská podpora",
      ],
    },

    techArchitecture: {
      name: "Poradenstvo architektúry systémov",
      features: [
        "Dizajn architektúry obchodných systémov",
        "Plánovanie infraštruktúry",
        "Stratégia architektúry automatizácie",
      ],
    },
    techPlatforms: {
      name: "Vývoj obchodných platforiem",
      features: [
        "Interné portály",
        "Prevádzkové dashboardy",
        "Vlastné firemné systémy",
      ],
    },
    techAutomation: {
      name: "Automatizácia a integrácie",
      features: [
        "CRM / ERP integrácie",
        "API automatizácia",
        "Systémy automatizácie pracovných postupov",
      ],
    },
    techAudit: {
      name: "Audit technických systémov",
      features: [
        "Audit infraštruktúry",
        "Posúdenie škálovateľnosti",
        "Kontrola základnej bezpečnosti",
      ],
    },
    techCTO: {
      name: "CTO-ako-služba",
      features: [
        "Technické zapojenie",
        "Dohľad nad architektúrou",
        "Výber dodávateľov a infraštruktúry",
        "Poradenstvo stratégie škálovania",
        "Minimálna zmluva na 1 mesiac — obmedzené miesta",
      ],
    },
  },

  cta: {
    eyebrow: "Kontaktujte nás",
    heading: "Postavme niečo",
    headingItalic: "spoločne.",
    subtitle: "Či už potrebujete poradenstvo, technologické riešenia alebo strategického partnera pre medzinárodnú expanziu — sme pripravení hovoriť.",
    ctaPrimary: "Povedzte nám o sebe",
    ctaSecondary: "Požiadať o cenovú ponuku na mieru",
    followLinkedIn: "Sledujte nás na LinkedIn",
  },

  contact: {
    heading: "Pošlite nám správu",
    subtitle: "Vyplňte formulár nižšie a ozveme sa vám do 24 hodín.",
    labelName: "Celé meno",
    labelEmail: "E-mailová adresa",
    labelCompany: "Názov spoločnosti",
    labelMessage: "Správa",
    required: "*",
    placeholderName: "Vaše celé meno",
    placeholderEmail: "vas@email.com",
    placeholderCompany: "Názov vašej spoločnosti",
    placeholderMessage: "Povedzte nám o vašich obchodných cieľoch a ako vám môžeme pomôcť...",
    buttonSend: "Odoslať správu",
    privacyText: "Odoslaním tohto formulára súhlasíte s našimi podmienkami služby a zásadami ochrany osobných údajov.",
    successHeading: "Správa pripravená",
    successText: "Váš e-mailový klient by sa mal otvoriť. Ak nie, napíšte nám priamo na info@andykgroupinternational.com",
  },

  footer: {
    copyright: "© 2026",
    linkHome: "Domov",
    linkSystems: "A.D.A.M. & E.V.A.",
    linkPricing: "Ceny",
    linkContact: "Kontakt",
    linkPrivacy: "Zásady ochrany osobných údajov",
    linkClientPortal: "Klientsky portál",
    selectLanguage: "Jazyk",
    selectCurrency: "Mena",
  },

  common: {
    getStarted: "Začať",
    learnMore: "Dozvedieť sa viac",
    contactUs: "Kontaktujte nás",
    readMore: "Čítať viac",
  },

  languages: {
    en: "English",
    es: "Español",
    sk: "Slovenčina",
    nl: "Nederlands",
    pt: "Português",
    de: "Deutsch",
  },
};

// Dutch translations
const nl: typeof en = {
  company: {
    name: "Andy'K Group International LTD",
    tagline: "Uw strategische partner in bedrijfsautomatisering en outreach.",
    subtitle: "Aandrijving voor A.D.A.M. & E.V.A. — de operationele automatiseringssystemen voor moderne groei.",
    description: "Andy'K Group International LTD is een in het VK gevestigd innovatiebedrijf dat business intelligence, automatisering en strategische outreach combineert.",
    descriptionExtra: "Met klanten in heel Europa en Latijns-Amerika bouwen we praktische tools om bedrijven te helpen groeien, structureren en schalen — intelligent.",
    descriptionSystems: "Onze operationele automatiseringssystemen A.D.A.M. & E.V.A. transformeren hoe startups, MKB-bedrijven en openbare instellingen werken met documenten, klant onboarding en communicatie.",
    quote: "Eén structuur. Eén stroom. Eén systeem.",
    quoteSubtitle: "Gebouwd voor groei.",
    location: "Londen, VK",
    ukCompany: "VK Limited Company",
  },

  hero: {
    ctaPrimary: "Vertel ons over uzelf",
    ctaSecondary: "Ontdek hoe A.D.A.M. werkt",
  },

  banner: {
    b2bLead: "B2B leadgeneratie:",
    b2bText: "gerichte outreach en pipelinebeheer",
    adamSystem: "A.D.A.M. Systeem:",
    adamText: "geautomatiseerde documenten, voorstellen en klantlevenscyclus",
    b2gTender: "B2G aanbestedingsstrategie:",
    b2gText: "openbare aanbesteding en voorbereiding van offertes",
    trusted: "Vertrouwd in:",
    trustedText: "LATAM, Benelux, DACH en VS",
  },

  services: {
    heading: "Wat we",
    headingItalic: "leveren.",
    subtitle: "Uitgebreide oplossingen op het gebied van technologie, consultancy en digitale transformatie.",
    items: [
      {
        title: "Strategisch bedrijfsadvies",
        description: "Deskundige begeleiding om uw bedrijfsstrategieën te verfijnen en operaties te optimaliseren voor groei.",
      },
      {
        title: "Automatisering & AI-oplossingen",
        description: "Implementeer geavanceerde automatisering en AI om workflows te stroomlijnen en efficiëntie te verhogen.",
      },
      {
        title: "Markttoetreding & outreach",
        description: "Breid uw bereik uit met strategische markttoetredingsplannen en effectieve outreach-campagnes.",
      },
      {
        title: "Publieke sector & overheidscontracten",
        description: "Navigeer door de complexiteit van aanbestedingen in de publieke sector en verkrijg waardevolle contracten.",
      },
      {
        title: "Intellectueel eigendom & licenties",
        description: "Bescherm en benut uw intellectuele activa door middel van slimme licentie- en IE-strategieën.",
      },
      {
        title: "Merkontwikkeling & digitale aanwezigheid",
        description: "Bouw een sterke merkidentiteit op en versterk uw aanwezigheid op digitale platforms.",
      },
    ],
  },

  roadmap: {
    heading: "Hoe A.D.A.M.",
    headingItalic: "Werkt",
    subtitle: "Van eerste contact tot projectlancering in zes gestructureerde stappen.",
    steps: [
      {
        title: "Vragenlijst",
        description: "Vul ons gestructureerde intakeformulier in. We leren uw bedrijf, doelen en vereisten kennen.",
      },
      {
        title: "Voorstel",
        description: "We stellen een voorstel op maat op basis van uw behoeften. Bekijk het in uw persoonlijke dashboard.",
      },
      {
        title: "Contract",
        description: "Bekijk, becommentarieer en onderteken uw contract digitaal. Volledige transparantie, geen verrassingen.",
      },
      {
        title: "Strategie",
        description: "Samen definiëren we de strategie en tijdlijn. Elk detail afgestemd voordat we beginnen.",
      },
      {
        title: "Factuur",
        description: "Geautomatiseerde facturering met duidelijke betalingsvoorwaarden. Alles bijgehouden op één plek.",
      },
      {
        title: "Onboarding",
        description: "Het project start. Realtime updates, documentdeling en doorlopende ondersteuning via A.D.A.M.",
      },
    ],
    statusBadge: "A.D.A.M. is actief en verwerkt klanten",
    stepLabel: "Stap",
  },

  pricing: {
    heading: "Plannen voor",
    headingItalic: "elke fase",
    subtitle: "Gestructureerd advies en bedrijfsontwikkeling — een combinatie van strategie, expertise in de publieke sector en technologische infrastructuur om u te helpen schalen.",
    eyebrow: "Transparante prijzen",
    tabB2B: "B2B bedrijfsontwikkeling",
    tabB2G: "B2G publieke sector",
    tabTech: "Technologie / CTO",
    commitment: "Vanaf 3 maanden",
    popular: "Populair",
    from: "vanaf",
    perMonth: "/ maand",
    perHour: "/ uur",
    getStarted: "Begin",
    customQuote: "Heeft u iets op maat nodig? We passen pakketten aan uw exacte vereisten aan.",
    requestCustomQuote: "Vraag een offerte op maat aan",
    billingBasis: "Maandelijks gefactureerd",
    billingMinimum: "Initiële verbintenis van 3\u201312 maanden",
    billingRenewal: "Gaat over naar doorlopend maandabonnement na oplevering",
    billingCancellation: "15 dagen opzegtermijn",

    b2bCore: {
      name: "CORE",
      features: [
        "40 gekwalificeerde leads per maand",
        "1 markt / 1 doelpersona",
        "E-mail outreach + cold calling",
        "Maandelijkse rapportage",
        "Onboarding strategiesessie",
      ],
    },
    b2bAdvance: {
      name: "ADVANCE",
      features: [
        "60 gekwalificeerde leads per maand",
        "2 markten dekking",
        "Multi-touch outreach campagnes",
        "Prestatie-optimalisatie",
        "Maandelijkse strategiebeoordeling",
      ],
    },
    b2bVanguard: {
      name: "VANGUARD",
      features: [
        "80 gekwalificeerde leads per maand",
        "Multi-markt campagnes",
        "CRM pipeline opzet",
        "Lead scoring systeem",
        "Strategische outreach architectuur",
      ],
    },
    b2bPrestige: {
      name: "PRESTIGE",
      features: [
        "120+ gekwalificeerde leads",
        "Merk outreach campagnes",
        "Aangepaste bel- en e-mailscripts",
        "Strategisch bedrijfsontwikkelingsadvies",
        "Rapportage op directieniveau",
      ],
    },

    b2gStarter: {
      name: "GovStarter",
      features: [
        "5 geverifieerde openbare aanbestedingen per maand",
        "Geschiktheidsbeoordeling",
        "Basis biedadvies",
        "Maandelijkse consultatie",
      ],
    },
    b2gExpand: {
      name: "GovExpand",
      features: [
        "10 geverifieerde aanbestedingen",
        "Pre-bid checklist",
        "Strategie consultatie",
        "Aanbestedingspipeline opbouw",
      ],
    },
    b2gElite: {
      name: "GovElite",
      features: [
        "1 volledig voorstelconcept per maand",
        "Aanbestedingsroadmap ontwikkeling",
        "Consortium matchmaking",
        "Prioritaire adviesondersteuning",
      ],
    },

    techArchitecture: {
      name: "Systeemarchitectuur consultancy",
      features: [
        "Bedrijfssysteemarchitectuur ontwerp",
        "Infrastructuurplanning",
        "Automatiseringsarchitectuur strategie",
      ],
    },
    techPlatforms: {
      name: "Bedrijfsplatform ontwikkeling",
      features: [
        "Interne portalen",
        "Operationele dashboards",
        "Aangepaste bedrijfssystemen",
      ],
    },
    techAutomation: {
      name: "Automatisering & integraties",
      features: [
        "CRM / ERP integraties",
        "API automatisering",
        "Workflow automatiseringssystemen",
      ],
    },
    techAudit: {
      name: "Technische systeemaudit",
      features: [
        "Infrastructuur audit",
        "Schaalbaarheids beoordeling",
        "Beveiligingsbasislijn beoordeling",
      ],
    },
    techCTO: {
      name: "CTO-als-dienst",
      features: [
        "Technische betrokkenheid",
        "Architectuur supervisie",
        "Leveranciers- en infrastructuurselectie",
        "Schaalstrategie consultancy",
        "Minimaal 1-maands contract — beperkte plekken",
      ],
    },
  },

  cta: {
    eyebrow: "Neem contact op",
    heading: "Laten we iets",
    headingItalic: "samen bouwen.",
    subtitle: "Of u nu advies nodig heeft, technologische oplossingen of een strategische partner voor internationale expansie — we staan klaar om te praten.",
    ctaPrimary: "Vertel ons over uzelf",
    ctaSecondary: "Vraag een offerte op maat aan",
    followLinkedIn: "Volg ons op LinkedIn",
  },

  contact: {
    heading: "Stuur ons een bericht",
    subtitle: "Vul het onderstaande formulier in en we nemen binnen 24 uur contact met u op.",
    labelName: "Volledige naam",
    labelEmail: "E-mailadres",
    labelCompany: "Bedrijfsnaam",
    labelMessage: "Bericht",
    required: "*",
    placeholderName: "Uw volledige naam",
    placeholderEmail: "uw@email.com",
    placeholderCompany: "Uw bedrijfsnaam",
    placeholderMessage: "Vertel ons over uw zakelijke doelen en hoe we kunnen helpen...",
    buttonSend: "Bericht verzenden",
    privacyText: "Door dit formulier in te dienen, gaat u akkoord met onze servicevoorwaarden en privacybeleid.",
    successHeading: "Bericht voorbereid",
    successText: "Uw e-mailclient zou moeten zijn geopend. Zo niet, stuur ons dan rechtstreeks een e-mail naar info@andykgroupinternational.com",
  },

  footer: {
    copyright: "© 2026",
    linkHome: "Home",
    linkSystems: "A.D.A.M. & E.V.A.",
    linkPricing: "Prijzen",
    linkContact: "Contact",
    linkPrivacy: "Privacybeleid",
    linkClientPortal: "Klantportaal",
    selectLanguage: "Taal",
    selectCurrency: "Valuta",
  },

  common: {
    getStarted: "Begin",
    learnMore: "Meer informatie",
    contactUs: "Neem contact op",
    readMore: "Lees meer",
  },

  languages: {
    en: "English",
    es: "Español",
    sk: "Slovenčina",
    nl: "Nederlands",
    pt: "Português",
    de: "Deutsch",
  },
};

// Portuguese translations
const pt: typeof en = {
  company: {
    name: "Andy'K Group International LTD",
    tagline: "Seu parceiro estratégico em automação empresarial e divulgação.",
    subtitle: "Alimentando A.D.A.M. & E.V.A. — os sistemas de automação operacional para crescimento moderno.",
    description: "Andy'K Group International LTD é uma empresa de inovação sediada no Reino Unido, combinando inteligência empresarial, automatização e divulgação estratégica.",
    descriptionExtra: "Com clientes em toda a Europa e América Latina, construímos ferramentas práticas para ajudar empresas a crescer, estruturar e escalar — de forma inteligente.",
    descriptionSystems: "Nossos sistemas de automação operacional A.D.A.M. & E.V.A. estão transformando como startups, PMEs e instituições públicas trabalham com documentos, integração de clientes e comunicação.",
    quote: "Uma estrutura. Um fluxo. Um sistema.",
    quoteSubtitle: "Construído para crescimento.",
    location: "Londres, Reino Unido",
    ukCompany: "Empresa Limitada do Reino Unido",
  },

  hero: {
    ctaPrimary: "Conte-nos sobre você",
    ctaSecondary: "Saiba como funciona A.D.A.M.",
  },

  banner: {
    b2bLead: "Geração de leads B2B:",
    b2bText: "divulgação direcionada e gestão de pipeline",
    adamSystem: "Sistema A.D.A.M.:",
    adamText: "documentos automatizados, propostas e ciclo de vida do cliente",
    b2gTender: "Estratégia de licitação B2G:",
    b2gText: "aquisição pública e preparação de propostas",
    trusted: "Confiável em:",
    trustedText: "LATAM, Benelux, DACH e EUA",
  },

  services: {
    heading: "O que",
    headingItalic: "entregamos.",
    subtitle: "Soluções abrangentes em tecnologia, consultoria e transformação digital.",
    items: [
      {
        title: "Consultoria Estratégica de Negócios",
        description: "Orientação especializada para refinar suas estratégias de negócios e otimizar operações para crescimento.",
      },
      {
        title: "Soluções de Automação e IA",
        description: "Implemente automação e IA de ponta para simplificar fluxos de trabalho e aumentar a eficiência.",
      },
      {
        title: "Entrada no Mercado e Divulgação",
        description: "Expanda seu alcance com planos estratégicos de entrada no mercado e campanhas de divulgação eficazes.",
      },
      {
        title: "Setor Público e Contratos Governamentais",
        description: "Navegue pelas complexidades da aquisição do setor público e garanta contratos valiosos.",
      },
      {
        title: "Propriedade Intelectual e Licenciamento",
        description: "Proteja e aproveite seus ativos intelectuais através de estratégias inteligentes de licenciamento e PI.",
      },
      {
        title: "Desenvolvimento de Marca e Presença Digital",
        description: "Construa uma forte identidade de marca e amplifique sua presença em plataformas digitais.",
      },
    ],
  },

  roadmap: {
    heading: "Como funciona",
    headingItalic: "A.D.A.M.",
    subtitle: "Do primeiro contato ao lançamento do projeto em seis etapas estruturadas.",
    steps: [
      {
        title: "Questionário",
        description: "Preencha nosso formulário de admissão estruturado. Conhecemos seu negócio, objetivos e requisitos.",
      },
      {
        title: "Proposta",
        description: "Elaboramos uma proposta personalizada com base nas suas necessidades. Revise-a no seu painel pessoal.",
      },
      {
        title: "Contrato",
        description: "Revise, comente e assine digitalmente seu contrato. Total transparência, sem surpresas.",
      },
      {
        title: "Estratégia",
        description: "Juntos definimos a estratégia e o cronograma. Cada detalhe alinhado antes de começar.",
      },
      {
        title: "Fatura",
        description: "Faturamento automatizado com condições de pagamento claras. Tudo rastreado em um só lugar.",
      },
      {
        title: "Integração",
        description: "O projeto é lançado. Atualizações em tempo real, compartilhamento de documentos e suporte contínuo pelo A.D.A.M.",
      },
    ],
    statusBadge: "A.D.A.M. está ativo e processando clientes",
    stepLabel: "Passo",
  },

  pricing: {
    heading: "Planos para",
    headingItalic: "cada estágio",
    subtitle: "Assessoria estruturada e desenvolvimento de negócios — combinando estratégia, expertise no setor público e infraestrutura tecnológica para ajudá-lo a escalar.",
    eyebrow: "Preços transparentes",
    tabB2B: "Desenvolvimento de Negócios B2B",
    tabB2G: "Setor Público B2G",
    tabTech: "Tecnologia / CTO",
    commitment: "A partir de 3 meses",
    popular: "Popular",
    from: "a partir de",
    perMonth: "/ mês",
    perHour: "/ hora",
    getStarted: "Começar",
    customQuote: "Precisa de algo personalizado? Adaptamos pacotes aos seus requisitos exatos.",
    requestCustomQuote: "Solicitar orçamento personalizado",
    billingBasis: "Faturamento mensal",
    billingMinimum: "Compromisso inicial de 3\u201312 meses",
    billingRenewal: "Transição para assinatura mensal contínua após entrega",
    billingCancellation: "Aviso de cancelamento de 15 dias",

    b2bCore: {
      name: "CORE",
      features: [
        "40 leads qualificados por mês",
        "1 mercado / 1 persona alvo",
        "Divulgação por e-mail + cold calling",
        "Relatórios mensais",
        "Sessão de estratégia de integração",
      ],
    },
    b2bAdvance: {
      name: "ADVANCE",
      features: [
        "60 leads qualificados por mês",
        "Cobertura de 2 mercados",
        "Campanhas de divulgação multi-toque",
        "Otimização de desempenho",
        "Revisão de estratégia mensal",
      ],
    },
    b2bVanguard: {
      name: "VANGUARD",
      features: [
        "80 leads qualificados por mês",
        "Campanhas multi-mercado",
        "Configuração de pipeline CRM",
        "Sistema de pontuação de leads",
        "Arquitetura de divulgação estratégica",
      ],
    },
    b2bPrestige: {
      name: "PRESTIGE",
      features: [
        "120+ leads qualificados",
        "Campanhas de divulgação de marca",
        "Scripts personalizados de chamada e e-mail",
        "Consultoria estratégica de desenvolvimento de negócios",
        "Relatórios de nível executivo",
      ],
    },

    b2gStarter: {
      name: "GovStarter",
      features: [
        "5 licitações públicas verificadas por mês",
        "Revisão de elegibilidade",
        "Assessoria básica de propostas",
        "Consulta mensal",
      ],
    },
    b2gExpand: {
      name: "GovExpand",
      features: [
        "10 licitações verificadas",
        "Checklist pré-proposta",
        "Consulta de estratégia",
        "Construção de pipeline de licitações",
      ],
    },
    b2gElite: {
      name: "GovElite",
      features: [
        "1 rascunho de proposta completo por mês",
        "Desenvolvimento de roadmap de licitações",
        "Matchmaking de consórcio",
        "Suporte de assessoria prioritário",
      ],
    },

    techArchitecture: {
      name: "Consultoria de Arquitetura de Sistemas",
      features: [
        "Design de arquitetura de sistemas de negócios",
        "Planejamento de infraestrutura",
        "Estratégia de arquitetura de automação",
      ],
    },
    techPlatforms: {
      name: "Desenvolvimento de Plataformas Empresariais",
      features: [
        "Portais internos",
        "Dashboards operacionais",
        "Sistemas empresariais personalizados",
      ],
    },
    techAutomation: {
      name: "Automação e Integrações",
      features: [
        "Integrações CRM / ERP",
        "Automação de API",
        "Sistemas de automação de fluxo de trabalho",
      ],
    },
    techAudit: {
      name: "Auditoria de Sistemas Técnicos",
      features: [
        "Auditoria de infraestrutura",
        "Avaliação de escalabilidade",
        "Revisão de linha de base de segurança",
      ],
    },
    techCTO: {
      name: "CTO-como-Serviço",
      features: [
        "Envolvimento técnico",
        "Supervisão de arquitetura",
        "Seleção de fornecedores e infraestrutura",
        "Consultoria de estratégia de escalabilidade",
        "Contrato mínimo de 1 mês — vagas limitadas",
      ],
    },
  },

  cta: {
    eyebrow: "Entre em contato",
    heading: "Vamos construir algo",
    headingItalic: "juntos.",
    subtitle: "Se você precisa de consultoria, soluções tecnológicas ou um parceiro estratégico para expansão internacional — estamos prontos para conversar.",
    ctaPrimary: "Conte-nos sobre você",
    ctaSecondary: "Solicitar orçamento personalizado",
    followLinkedIn: "Siga-nos no LinkedIn",
  },

  contact: {
    heading: "Envie-nos uma mensagem",
    subtitle: "Preencha o formulário abaixo e entraremos em contato em até 24 horas.",
    labelName: "Nome completo",
    labelEmail: "Endereço de e-mail",
    labelCompany: "Nome da empresa",
    labelMessage: "Mensagem",
    required: "*",
    placeholderName: "Seu nome completo",
    placeholderEmail: "seu@email.com",
    placeholderCompany: "Nome da sua empresa",
    placeholderMessage: "Conte-nos sobre seus objetivos de negócios e como podemos ajudar...",
    buttonSend: "Enviar mensagem",
    privacyText: "Ao enviar este formulário, você concorda com nossos termos de serviço e política de privacidade.",
    successHeading: "Mensagem preparada",
    successText: "Seu cliente de e-mail deve ter aberto. Caso contrário, envie-nos um e-mail diretamente para info@andykgroupinternational.com",
  },

  footer: {
    copyright: "© 2026",
    linkHome: "Início",
    linkSystems: "A.D.A.M. & E.V.A.",
    linkPricing: "Preços",
    linkContact: "Contato",
    linkPrivacy: "Política de privacidade",
    linkClientPortal: "Portal do cliente",
    selectLanguage: "Idioma",
    selectCurrency: "Moeda",
  },

  common: {
    getStarted: "Começar",
    learnMore: "Saiba mais",
    contactUs: "Entre em contato",
    readMore: "Leia mais",
  },

  languages: {
    en: "English",
    es: "Español",
    sk: "Slovenčina",
    nl: "Nederlands",
    pt: "Português",
    de: "Deutsch",
  },
};

// German translations (formal - Sie)
const de: typeof en = {
  company: {
    name: "Andy'K Group International LTD",
    tagline: "Ihr strategischer Partner in Unternehmensautomatisierung und Outreach.",
    subtitle: "Antrieb für A.D.A.M. & E.V.A. — die operativen Automatisierungssysteme für modernes Wachstum.",
    description: "Andy'K Group International LTD ist ein in Großbritannien ansässiges Innovationsunternehmen, das Business Intelligence, Automatisierung und strategisches Outreach kombiniert.",
    descriptionExtra: "Mit Kunden in ganz Europa und Lateinamerika bauen wir praktische Tools, um Unternehmen zu helfen, zu wachsen, zu strukturieren und zu skalieren — intelligent.",
    descriptionSystems: "Unsere operativen Automatisierungssysteme A.D.A.M. & E.V.A. transformieren, wie Startups, KMUs und öffentliche Institutionen mit Dokumenten, Kunden-Onboarding und Kommunikation arbeiten.",
    quote: "Eine Struktur. Ein Ablauf. Ein System.",
    quoteSubtitle: "Gebaut für Wachstum.",
    location: "London, Großbritannien",
    ukCompany: "UK Limited Company",
  },

  hero: {
    ctaPrimary: "Erzählen Sie uns von sich",
    ctaSecondary: "Erfahren Sie, wie A.D.A.M. funktioniert",
  },

  banner: {
    b2bLead: "B2B-Lead-Generierung:",
    b2bText: "gezieltes Outreach und Pipeline-Management",
    adamSystem: "A.D.A.M. System:",
    adamText: "automatisierte Dokumente, Angebote und Kundenlebenszyklus",
    b2gTender: "B2G-Ausschreibungsstrategie:",
    b2gText: "öffentliche Beschaffung und Angebotsvorbereitung",
    trusted: "Vertraut in:",
    trustedText: "LATAM, Benelux, DACH und USA",
  },

  services: {
    heading: "Was wir",
    headingItalic: "liefern.",
    subtitle: "Umfassende Lösungen in Technologie, Beratung und digitaler Transformation.",
    items: [
      {
        title: "Strategische Unternehmensberatung",
        description: "Fachkundige Anleitung zur Verfeinerung Ihrer Unternehmensstrategien und Optimierung von Abläufen für Wachstum.",
      },
      {
        title: "Automatisierungs- & KI-Lösungen",
        description: "Implementieren Sie hochmoderne Automatisierung und KI, um Arbeitsabläufe zu optimieren und die Effizienz zu steigern.",
      },
      {
        title: "Markteintritt & Outreach",
        description: "Erweitern Sie Ihre Reichweite mit strategischen Markteintritts plänen und effektiven Outreach-Kampagnen.",
      },
      {
        title: "Öffentlicher Sektor & Regierungsverträge",
        description: "Navigieren Sie durch die Komplexität der öffentlichen Beschaffung und sichern Sie wertvolle Verträge.",
      },
      {
        title: "Geistiges Eigentum & Lizenzierung",
        description: "Schützen und nutzen Sie Ihre geistigen Vermögenswerte durch intelligente Lizenzierungs- und IP-Strategien.",
      },
      {
        title: "Markenentwicklung & digitale Präsenz",
        description: "Bauen Sie eine starke Markenidentität auf und verstärken Sie Ihre Präsenz auf digitalen Plattformen.",
      },
    ],
  },

  roadmap: {
    heading: "Wie A.D.A.M.",
    headingItalic: "funktioniert",
    subtitle: "Vom ersten Kontakt bis zum Projektstart in sechs strukturierten Schritten.",
    steps: [
      {
        title: "Fragebogen",
        description: "Füllen Sie unser strukturiertes Aufnahmeformular aus. Wir lernen Ihr Unternehmen, Ihre Ziele und Anforderungen kennen.",
      },
      {
        title: "Angebot",
        description: "Wir erstellen ein maßgeschneidertes Angebot basierend auf Ihren Bedürfnissen. Prüfen Sie es in Ihrem persönlichen Dashboard.",
      },
      {
        title: "Vertrag",
        description: "Prüfen, kommentieren und digital unterschreiben Sie Ihren Vertrag. Volle Transparenz, keine Überraschungen.",
      },
      {
        title: "Strategie",
        description: "Gemeinsam definieren wir die Strategie und den Zeitplan. Jedes Detail abgestimmt, bevor wir beginnen.",
      },
      {
        title: "Rechnung",
        description: "Automatisierte Rechnungsstellung mit klaren Zahlungsbedingungen. Alles an einem Ort verfolgt.",
      },
      {
        title: "Onboarding",
        description: "Das Projekt startet. Echtzeit-Updates, Dokumentenaustausch und fortlaufende Unterstützung durch A.D.A.M.",
      },
    ],
    statusBadge: "A.D.A.M. ist aktiv und verarbeitet Kunden",
    stepLabel: "Schritt",
  },

  pricing: {
    heading: "Pläne für",
    headingItalic: "jede Phase",
    subtitle: "Strukturierte Beratung und Geschäftsentwicklung — Kombination aus Strategie, Public-Sector-Expertise und technologischer Infrastruktur, um Sie beim Skalieren zu unterstützen.",
    eyebrow: "Transparente Preise",
    tabB2B: "B2B-Geschäftsentwicklung",
    tabB2G: "B2G-Öffentlicher Sektor",
    tabTech: "Technologie / CTO",
    commitment: "Ab 3 Monaten",
    popular: "Beliebt",
    from: "ab",
    perMonth: "/ Monat",
    perHour: "/ Stunde",
    getStarted: "Loslegen",
    customQuote: "Benötigen Sie etwas Individuelles? Wir passen Pakete an Ihre genauen Anforderungen an.",
    requestCustomQuote: "Individuelles Angebot anfordern",
    billingBasis: "Monatliche Abrechnung",
    billingMinimum: "Anfangsverpflichtung von 3\u201312 Monaten",
    billingRenewal: "\u00DCbergang zu laufendem Monatsabonnement nach Lieferung",
    billingCancellation: "15 Tage K\u00FCndigungsfrist",

    b2bCore: {
      name: "CORE",
      features: [
        "40 qualifizierte Leads pro Monat",
        "1 Markt / 1 Zielpersona",
        "E-Mail-Outreach + Kaltakquise",
        "Monatliches Reporting",
        "Onboarding-Strategiesitzung",
      ],
    },
    b2bAdvance: {
      name: "ADVANCE",
      features: [
        "60 qualifizierte Leads pro Monat",
        "2 Märkte Abdeckung",
        "Multi-Touch-Outreach-Kampagnen",
        "Performance-Optimierung",
        "Monatliche Strategieüberprüfung",
      ],
    },
    b2bVanguard: {
      name: "VANGUARD",
      features: [
        "80 qualifizierte Leads pro Monat",
        "Multi-Markt-Kampagnen",
        "CRM-Pipeline-Einrichtung",
        "Lead-Scoring-System",
        "Strategische Outreach-Architektur",
      ],
    },
    b2bPrestige: {
      name: "PRESTIGE",
      features: [
        "120+ qualifizierte Leads",
        "Marken-Outreach-Kampagnen",
        "Benutzerdefinierte Anruf- und E-Mail-Skripte",
        "Strategische Geschäftsentwicklungsberatung",
        "Reporting auf Führungsebene",
      ],
    },

    b2gStarter: {
      name: "GovStarter",
      features: [
        "5 verifizierte öffentliche Ausschreibungen pro Monat",
        "Berechtigungsprüfung",
        "Grundlegende Angebotsberatung",
        "Monatliche Konsultation",
      ],
    },
    b2gExpand: {
      name: "GovExpand",
      features: [
        "10 verifizierte Ausschreibungen",
        "Pre-Bid-Checkliste",
        "Strategiekonsultation",
        "Ausschreibungs-Pipeline-Aufbau",
      ],
    },
    b2gElite: {
      name: "GovElite",
      features: [
        "1 vollständiger Angebotsentwurf pro Monat",
        "Ausschreibungs-Roadmap-Entwicklung",
        "Konsortiums-Matchmaking",
        "Prioritäre Beratungsunterstützung",
      ],
    },

    techArchitecture: {
      name: "Systemarchitektur-Beratung",
      features: [
        "Geschäftssystemarchitektur-Design",
        "Infrastrukturplanung",
        "Automatisierungsarchitektur-Strategie",
      ],
    },
    techPlatforms: {
      name: "Geschäftsplattform-Entwicklung",
      features: [
        "Interne Portale",
        "Operative Dashboards",
        "Benutzerdefinierte Unternehmenssysteme",
      ],
    },
    techAutomation: {
      name: "Automatisierung & Integrationen",
      features: [
        "CRM / ERP Integrationen",
        "API-Automatisierung",
        "Workflow-Automatisierungssysteme",
      ],
    },
    techAudit: {
      name: "Technische Systemprüfung",
      features: [
        "Infrastrukturaudit",
        "Skalierbarkeitsbewertung",
        "Sicherheits-Baseline-Überprüfung",
      ],
    },
    techCTO: {
      name: "CTO-als-Dienstleistung",
      features: [
        "Technische Beteiligung",
        "Architekturüberwachung",
        "Anbieter- und Infrastrukturauswahl",
        "Skalierungsstrategieberatung",
        "Mindestens 1-Monats-Vertrag — begrenzte Plätze",
      ],
    },
  },

  cta: {
    eyebrow: "Kontaktieren Sie uns",
    heading: "Lassen Sie uns etwas",
    headingItalic: "gemeinsam aufbauen.",
    subtitle: "Ob Sie Beratung, technologische Lösungen oder einen strategischen Partner für internationale Expansion benötigen — wir sind bereit zu sprechen.",
    ctaPrimary: "Erzählen Sie uns von sich",
    ctaSecondary: "Individuelles Angebot anfordern",
    followLinkedIn: "Folgen Sie uns auf LinkedIn",
  },

  contact: {
    heading: "Senden Sie uns eine Nachricht",
    subtitle: "Füllen Sie das Formular unten aus und wir melden uns innerhalb von 24 Stunden bei Ihnen.",
    labelName: "Vollständiger Name",
    labelEmail: "E-Mail-Adresse",
    labelCompany: "Firmenname",
    labelMessage: "Nachricht",
    required: "*",
    placeholderName: "Ihr vollständiger Name",
    placeholderEmail: "ihre@email.com",
    placeholderCompany: "Ihr Firmenname",
    placeholderMessage: "Erzählen Sie uns von Ihren Geschäftszielen und wie wir helfen können...",
    buttonSend: "Nachricht senden",
    privacyText: "Durch das Absenden dieses Formulars stimmen Sie unseren Nutzungsbedingungen und Datenschutzrichtlinien zu.",
    successHeading: "Nachricht vorbereitet",
    successText: "Ihr E-Mail-Client sollte sich geöffnet haben. Falls nicht, senden Sie uns direkt eine E-Mail an info@andykgroupinternational.com",
  },

  footer: {
    copyright: "© 2026",
    linkHome: "Startseite",
    linkSystems: "A.D.A.M. & E.V.A.",
    linkPricing: "Preise",
    linkContact: "Kontakt",
    linkPrivacy: "Datenschutzerklärung",
    linkClientPortal: "Kundenportal",
    selectLanguage: "Sprache",
    selectCurrency: "Währung",
  },

  common: {
    getStarted: "Loslegen",
    learnMore: "Mehr erfahren",
    contactUs: "Kontaktieren Sie uns",
    readMore: "Mehr lesen",
  },

  languages: {
    en: "English",
    es: "Español",
    sk: "Slovenčina",
    nl: "Nederlands",
    pt: "Português",
    de: "Deutsch",
  },
};

// Export translations object
export const translations: Record<Locale, typeof en> = {
  en,
  es,
  sk,
  nl,
  pt,
  de,
};

// Export type for translation keys
export type TranslationKeys = typeof en;
