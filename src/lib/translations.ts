export type Lang = "pt" | "en";

export const translations = {
  nav: {
    home: { pt: "Início", en: "Home" },
    about: { pt: "Sobre Mim", en: "About Me" },
    skills: { pt: "Habilidades", en: "Skills" },
    experience: { pt: "Experiência", en: "Experience" },
    education: { pt: "Formação", en: "Education" },
    contact: { pt: "Contato", en: "Contact" },
  },
  hero: {
    greeting: { pt: "Olá, eu sou", en: "Hello, I am" },
    description: {
      pt: 'Entusiasta da cultura de "fazer a tecnologia trabalhar por mim". Uno o poder da Inteligência Artificial, desenvolvimento de software e uma comunicação assertiva para otimizar processos e criar soluções inovadoras.',
      en: "Enthusiast of making technology work for me. I combine the power of Artificial Intelligence, software development, and assertive communication to optimize processes and create innovative solutions.",
    },
    scrollMore: { pt: "Saiba mais", en: "Learn more" },
    typingPhrases: {
      pt: [
        "Analista e Desenvolvedor de Sistemas",
        "Estagiário na Caixa Econômica Federal",
        "Apaixonado por Inteligência Artificial",
        "Entusiasta em Automação",
      ],
      en: [
        "Systems Analyst and Developer",
        "Intern at Caixa Econômica Federal",
        "Passionate about Artificial Intelligence",
        "Automation Enthusiast",
      ],
    },
  },
  about: {
    title: { pt: "Sobre", en: "About" },
    titleHighlight: { pt: "Mim", en: "Me" },
    p1: {
      pt: "Sou um apaixonado por tecnologia, atualmente estagiário na <strong>Caixa Econômica Federal</strong>. Tenho formação em <strong>Análise e Desenvolvimento de Sistemas</strong> e sou estudante de <strong>Administração</strong> pelo IFSP. Minha missão é usar a tecnologia para agregar valor, aprender continuamente e gerar resultados positivos.",
      en: 'I am a technology enthusiast, currently an intern at <strong>Caixa Econômica Federal</strong> (Brazil\'s largest public bank). I have a degree in <strong>Systems Analysis and Development</strong> and I am studying <strong>Business Administration</strong> at IFSP. My mission is to use technology to add value, learn continuously, and generate positive results.',
    },
    p2: {
      pt: 'Atuo sob o conceito de <strong class="ai">AI-Augmented Developer</strong>. Utilizo Inteligência Artificial (como AI Pair Programming) não como muleta, mas como ferramenta extra de engenharia avançada. O foco não é "terceirizar" lógica estrutural, mas acelerar processos repetitivos, permitindo-me focar inteiramente numa sólida <strong>Arquitetura de Software</strong> e em entregas extremamente rápidas.',
      en: 'I operate under the concept of an <strong class="ai">AI-Augmented Developer</strong>. I use Artificial Intelligence (like AI Pair Programming) not as a crutch, but as an advanced engineering tool. My focus isn\'t to "outsource" structural logic, but to speed up repetitive tasks, allowing me to fully concentrate on solid <strong>Software Architecture</strong> and exceptionally fast deliveries.',
    },
    oratoryTitle: { pt: "O Diferencial da Oratória", en: "The Edge of Public Speaking" },
    oratoryText: {
      pt: "Minha atuação no teatro (Cena IV Shakespeare Cia.) desenvolveu minha oratória, inteligência emocional e capacidade de explicar ideias complexas com clareza, mesmo para quem não tem conhecimento técnico. Consigo aliar a frieza dos dados com o calor da comunicação humana.",
      en: "My experience in theater (Cena IV Shakespeare Cia.) developed my public speaking, emotional intelligence, and ability to explain complex ideas clearly, even to somewhat non-technical audiences. I can blend the objectivity of data with the warmth of human communication.",
    },
    location: { pt: "São João da Boa Vista, SP", en: "São João da Boa Vista, SP - Brazil" },
    license: { pt: "CNH Categoria B (Disponível para viagens)", en: "Category B Driver's License (Available for travel)" },
  },
  skills: {
    title: { pt: "Minhas", en: "My" },
    titleHighlight: { pt: "Habilidades", en: "Skills" },
    subtitle: {
      pt: "A combinação perfeita entre habilidades técnicas (Hard Skills) e comportamentais (Soft Skills).",
      en: "The perfect combination of technical skills (Hard Skills) and behavioral skills (Soft Skills).",
    },
    card1Title: { pt: "IA & Automação", en: "AI & Automation" },
    card1Items: {
      pt: ["Engenharia de Prompt", "IA Generativa Avançada", "Automação de Fluxos de Trabalho", "Automação Administrativa"],
      en: ["Prompt Engineering", "Advanced Generative AI", "Workflow Automation", "Administrative Automation"],
    },
    card2Title: { pt: "Dev & Dados", en: "Dev & Data" },
    card3Title: { pt: "Gestão & Comunicação", en: "Management & Comm" },
    card3Items: {
      pt: ["Oratória & Fala em Público", "Organização de Processos", "Redação & Inglês Avançado", "Gestão de Projetos"],
      en: ["Public Speaking", "Process Organization", "Advanced Writing & English", "Project Management"],
    },
  },
  experience: {
    title: { pt: "Experiência &", en: "Experience &" },
    titleHighlight: { pt: "Projetos", en: "Projects" },
    entries: [
      {
        title: { pt: "🏛️ Estagiário Administrativo", en: "🏛️ Administrative Intern" },
        subtitle: { pt: "Caixa Econômica Federal", en: "Caixa Econômica Federal (Brazilian Federal Bank)" },
        description: {
          pt: "Estágio presencial na maior instituição financeira pública da América Latina. Atuação direta em operações bancárias, atendimento ao cliente e processos administrativos, aplicando conhecimentos de Administração e tecnologia no ambiente corporativo real.",
          en: "On-site internship at the largest public financial institution in Latin America. Direct involvement in banking operations, customer service, and administrative processes, applying Business Administration and technology knowledge in a real corporate environment.",
        },
        features: {
          pt: [
            "Atendimento ao Cliente & Inclusão Digital: Assistência direta nas áreas de autoatendimento, gerenciando triagem e dando suporte aos usuários nos canais digitais e eletrônicos.",
            "Gestão de Dados & Operações de Crédito: Processamento e organização de dados de empréstimos consignados utilizando ferramentas de planilhas. Análise preliminar de documentos e manutenção de registros administrativos precisos.",
            "Suporte Administrativo: Elaboração de relatórios, organização de documentos e suporte logístico para as rotinas internas da organização.",
          ],
          en: [
            "Customer Service & Digital Inclusion: Direct assistance in self-service areas, managing triage and supporting users across digital and electronic channels.",
            "Data Management & Credit Operations: Processing and organizing payroll loan data using spreadsheet tools. Preliminary document analysis and maintaining accurate administrative records.",
            "Administrative Support: Preparing reports, organizing documents, and providing logistical support for the organization's internal routines.",
          ],
        },
        isCurrent: true,
        links: [],
      },
      {
        title: { pt: "🧠 NeuroFlow AI — Landing Page de Analytics Preditivo", en: "🧠 NeuroFlow AI — High-Performance Predictive Analytics Landing Page" },
        subtitle: { pt: "Arquiteto Front-End & Engenheiro de Design", en: "Front-End Architect & Design Engineer" },
        description: {
          pt: 'Arquitetura e desenvolvimento de uma landing page focada em conversão para "NeuroFlow AI", um SaaS fictício de processamento de dados em tempo real. O objetivo foi fugir de templates genéricos e entregar uma estética "Silicon Valley" de alto padrão, focada em precisão, sofisticação técnica e tipografia editorial.',
          en: 'Architected and developed a conversion-focused landing page for "NeuroFlow AI," a fictional real-time data processing SaaS. The goal was to move away from generic templates and deliver a high-end "Silicon Valley" aesthetic focused on precision, technical sophistication, and editorial typography.',
        },
        features: {
          pt: ["Vibe Coding & Design Engineering.", "Frontend Development focado em performance.", "Estética de alta precisão com tipografia editorial."],
          en: ["Vibe Coding & Design Engineering.", "Frontend Development focused on performance.", "High-end aesthetic with editorial typography."],
        },
        links: [
          { label: { pt: "🌐 Acessar Landing Page", en: "🌐 Access Landing Page" }, href: "https://neuroflow-landing-wine.vercel.app/", icon: "fas fa-external-link-alt", style: "bg-blue-500 hover:bg-blue-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.4)]" },
        ],
      },
      {
        title: { pt: "🛠️ InsightForge AI — Parceiro de Pensamento Estratégico", en: "🛠️ InsightForge AI — Strategic Thinking Partner" },
        subtitle: { pt: "Engenheiro de UI/UX Principal & Desenvolvedor Full-Stack", en: "Lead UI/UX Engineer & Full-Stack Developer" },
        description: {
          pt: "Sistema de IA estratégico com UI premium e orquestração resiliente. Apresenta um sistema visual editorial, motor de exportação de PDF personalizado e persistência local para máxima privacidade.",
          en: "Strategic AI system featuring premium UI and resilient orchestration. Features an editorial visual system, custom PDF export engine, and local persistence for maximum privacy.",
        },
        features: {
          pt: [
            'UI Premium: Coreografia de movimento fluida e tipografia personalizada (Manrope/Newsreader).',
            'Orquestração Resiliente: Fallback local automático para garantir 100% de disponibilidade.',
            'Motor de PDF: Exportação de "Briefings Estratégicos" de alta fidelidade com CSS Grid.',
            'Privacidade: Persistência local via APIs do navegador para um app leve e rápido.',
          ],
          en: [
            "Premium UI: Fluid motion choreography and custom typography system (Manrope/Newsreader).",
            "Resilient Orchestration: Automatic local fallback engine ensuring 100% uptime.",
            'PDF Engine: Bespoke high-fidelity "Strategic Briefs" export using CSS Grid.',
            "Privacy: Local history management via browser APIs for a lightweight experience.",
          ],
        },
        links: [
          { label: { pt: "🌐 Acessar InsightForge", en: "🌐 Access InsightForge" }, href: "https://insight-forge-ai-ruby.vercel.app/", icon: "fas fa-external-link-alt", style: "bg-indigo-500 hover:bg-indigo-600 text-white shadow-[0_0_15px_rgba(99,102,241,0.4)]" },
        ],
      },
      {
        title: { pt: "🤖 Motor de ROI Nativo de IA", en: "🤖 AI-Native ROI Engine" },
        subtitle: { pt: "Plataforma de Geração de Leads B2B", en: "B2B Lead Generation Platform" },
        description: {
          pt: 'Codei um MVP interativo de alta performance de uma Calculadora de ROI projetada como um imã de leads B2B premium. Esta plataforma usa um backend com IA para analisar métricas de negócios em tempo real e gerar um "Diagnóstico de Crescimento" personalizado de 3 parágrafos para cada lead.',
          en: 'I engineered a high-performance 0→1 MVP of an interactive ROI Calculator designed as a premium B2B Lead Magnet. This platform uses an Agentic AI backend to analyze business metrics in real-time and generate a personalized, 3-paragraph Growth Diagnostic for every lead.',
        },
        features: {
          pt: [
            "Interface Premium com Shadcn/UI e Tailwind CSS.",
            "Visualização de dados dinâmica com projeções de receita em tempo real via Recharts.",
            "Diagnóstico estratégico por uma LLM que transforma inputs em roadmaps de crescimento.",
            "Validação de email corporativo com Supabase RLS para captura segura de leads.",
          ],
          en: [
            "Premium Glassmorphism UI with Shadcn/UI and Tailwind CSS.",
            "Dynamic Data Visualization with real-time revenue projections via Recharts.",
            "LLM-powered Strategic Diagnostic that transforms inputs into growth roadmaps.",
            "Corporate email validation with Supabase RLS for secure lead capture.",
          ],
        },
        links: [
          { label: { pt: "🌐 Acessar Plataforma", en: "🌐 Access Platform" }, href: "https://roi-calculator-ai-nine.vercel.app/", icon: "fas fa-external-link-alt", style: "bg-emerald-500 hover:bg-emerald-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)]" },
        ],
      },
      {
        title: { pt: "💓 Pulse AI", en: "💓 Pulse AI" },
        subtitle: { pt: "CRM Native de IA para Academias", en: "AI-Native CRM for Gyms" },
        description: {
          pt: "Academias locais perdem R$15.000+/mês com inadimplência silenciosa, membros que param de frequentar sem aviso. Desenvolvi o Pulse AI, um CRM native de IA que monitora a saúde da base de associados e gera estratégias personalizadas powered by LLM para win-back com um clique.",
          en: "Local gyms lose $3,000+/month to silent churn, members who quietly stop showing up. I built Pulse AI, an AI-native CRM that tracks membership health and generates personalized LLM-powered win-back strategies with one click.",
        },
        features: {
          pt: [
            "Dashboard MRR em tempo real com métricas de receita.",
            "Identificação automática de membros em risco de churn.",
            "Planos de retenção gerados por IA com um clique.",
            "CRUD completo de membros via Server Actions.",
          ],
          en: [
            "Real-time MRR dashboard with revenue metrics.",
            "Automatic at-risk member flagging.",
            "AI-generated retention plans with one click.",
            "Full CRUD member management via Server Actions.",
          ],
        },
        links: [
          { label: { pt: "🌐 Acessar Sistema", en: "🌐 Access System" }, href: "https://micro-saas-lyart.vercel.app/login", icon: "fas fa-external-link-alt", style: "bg-purple-500 hover:bg-purple-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]" },
        ],
        demoNote: { pt: "Demo gratuito: demo@pulsecrm.com / demo123", en: "Free demo: demo@pulsecrm.com / demo123" },
      },
      {
        title: { pt: "🏎️ APEX MOTORS (Early stages)", en: "🏎️ APEX MOTORS (Early stages)" },
        subtitle: { pt: "Awwwards-inspired automotive showcase", en: "Awwwards-inspired automotive showcase" },
        description: {
          pt: "Projeto focado em uma experiência automotiva premium com movimento cinemático, glassmorphism e interações imersivas, inspirado em padrões visuais no nível Awwwards.",
          en: "Project focused on a premium automotive experience with cinematic motion, glassmorphism, and immersive interactions inspired by Awwwards-level visual standards.",
        },
        features: {
          pt: [
            "Experiência de navegação de alta performance com animações em Framer Motion.",
            "Interface moderna com foco em visual premium e microinterações responsivas.",
            "Deploy público ativo para demonstração das etapas iniciais do projeto.",
          ],
          en: [
            "High-performance browsing experience with Framer Motion animations.",
            "Modern interface focused on premium visuals and responsive micro-interactions.",
            "Public live deployment available for showcasing the project's early stages.",
          ],
        },
        links: [
          { label: { pt: "🌐 Live Demo", en: "🌐 Live Demo" }, href: "https://apex-motors-blue.vercel.app/", icon: "fas fa-external-link-alt", style: "bg-white hover:bg-gray-200 text-black" },
          { label: { pt: "Repositório", en: "Repository" }, href: "https://github.com/rodrigoetx/apex-motors", icon: "fab fa-github", style: "border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white" },
        ],
      },
      {
        title: { pt: "Engenheiro Front-End", en: "Front-End Engineer" },
        subtitle: { pt: "Aurora Coffee (E-commerce / Boutique UI)", en: "Aurora Coffee (E-commerce / Boutique UI)" },
        description: {
          pt: "Desenvolvimento de uma interface premium para conversões em e-commerce de café artesanal. Foco absoluto em Aesthetics (estética visual), acessibilidade e experiência de usuário de alto nível.",
          en: "Development of a premium interface for artisanal coffee e-commerce conversions. Absolute focus on Aesthetics, accessibility, and high-level user experience.",
        },
        features: {
          pt: [
            "Implementação de Roast Switcher (Modo Dark/Light) adaptado à marca.",
            "Scroll horizontal cinemático construído com Framer Motion.",
            "Arquitetura moderna e performática utilizando Next.js e Tailwind CSS.",
          ],
          en: [
            "Implementation of a brand-adapted Roast Switcher (Dark/Light mode).",
            "Cinematic horizontal scroll built with Framer Motion.",
            "Modern and performant architecture using Next.js and Tailwind CSS.",
          ],
        },
        links: [
          { label: { pt: "Ver Deploy", en: "View Deploy" }, href: "https://aurora-coffee-theta.vercel.app/", icon: "fas fa-external-link-alt", style: "bg-amber-500 hover:bg-amber-600 text-white shadow-[0_0_15px_rgba(245,158,11,0.4)]" },
          { label: { pt: "Repositório", en: "Repository" }, href: "https://github.com/rodrigoetx/aurora-coffee", icon: "fab fa-github", style: "border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white" },
        ],
      },
      {
        title: { pt: "Desenvolvedor Python & Automação", en: "Python Developer & Automation" },
        subtitle: { pt: "S.A.R. (Sistema de Automação de Rotinas)", en: "S.A.R. (Routine Automation System)" },
        description: {
          pt: "Criação de um painel corporativo robusto focado em tratamento e cruzamento de planilhas sensíveis. Arquitetura offline-first para manipulação segura de dados bancários (LGPD-compliant).",
          en: "Creation of a robust corporate dashboard focused on sensitive spreadsheet manipulation and cross-referencing. Offline-first architecture for secure banking data handling (LGPD-compliant).",
        },
        features: {
          pt: [
            "Processamento avançado de dados utilizando Pandas e OpenPyXL.",
            "Interface visual e fluxo de interação otimizado através do Streamlit.",
            "Tratamento automático de dados e geração de relatórios isolados em localhost.",
          ],
          en: [
            "Advanced data processing using Pandas and OpenPyXL.",
            "Visual interface and optimized interaction flow via Streamlit.",
            "Automatic data treatment and isolated report generation on localhost.",
          ],
        },
        links: [
          { label: { pt: "Repositório", en: "Repository" }, href: "https://github.com/rodrigoetx/sar-banco", icon: "fab fa-github", style: "border border-secondary/50 hover:bg-secondary/10 text-white" },
        ],
      },
      {
        title: { pt: "Analista de Soluções / Desenvolvedor", en: "Solutions Analyst / Developer" },
        subtitle: { pt: "Projeto Moodly (App Mobile com IA)", en: "Moodly Project (AI Mobile App)" },
        description: {
          pt: "Gestão do ciclo de vida completo do projeto (prototipagem, implementação e testes). Desenvolvimento de uma solução multiplataforma para monitoramento de bem-estar e organização pessoal.",
          en: "Full lifecycle management of the project (prototyping, implementation, and testing). Development of a cross-platform solution for wellness monitoring and personal organization.",
        },
        features: {
          pt: [
            "Desenvolvimento mobile utilizando Flutter focando na experiência do usuário (UX).",
            "Implementação estratégica de Inteligência Artificial para análise de sentimentos e geração de insights e relatórios personalizados.",
          ],
          en: [
            "Mobile development using Flutter focusing on User Experience (UX).",
            "Strategic implementation of Artificial Intelligence for sentiment analysis and generation of customized insights and reports.",
          ],
        },
        links: [
          { label: { pt: "Repositório", en: "Repository" }, href: "https://github.com/Moodly-project/moodly-project", icon: "fab fa-github", style: "border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white" },
        ],
      },
      {
        title: { pt: "Suporte Estratégico e Tecnológico", en: "Strategic and Technological Support" },
        subtitle: { pt: "Projeto Beneficente (ONG)", en: "Charity Project (NGO)" },
        description: {
          pt: "Atuação consultiva para entender as necessidades da instituição, propondo melhorias tecnológicas e organizando rotinas administrativas.",
          en: "Consulting role to understand the institution's needs, proposing technological improvements and organizing administrative routines.",
        },
        features: {
          pt: [
            "Otimização e modernização de processos internos utilizando Node.js e MySQL.",
            "Estruturação e controle de banco de dados para facilitar a gestão e a tomada de decisão.",
            "Criação de APIs, interfaces visuais e materiais de apresentação institucional.",
          ],
          en: [
            "Optimization and modernization of internal processes using Node.js and MySQL.",
            "Database structuring and control to facilitate management and decision making.",
            "Creation of APIs, visual interfaces, and institutional presentation materials.",
          ],
        },
      },
      {
        title: { pt: "Ator e Estudante de Oratória", en: "Actor and Public Speaking Student" },
        subtitle: { pt: "Cena IV Shakespeare Cia.", en: "Cena IV Shakespeare Cia." },
        description: {
          pt: "Prática intensiva focada no desenvolvimento interpessoal e criativo.",
          en: "Intensive practice focused on interpersonal and creative development.",
        },
        features: {
          pt: [
            "Desenvolvimento de comunicação clara, assertiva e presença de palco.",
            "Trabalho em equipe, disciplina e postura profissional.",
            "Resolução de problemas sob pressão e adaptação rápida a imprevistos.",
          ],
          en: [
            "Development of clear, assertive communication and stage presence.",
            "Teamwork, discipline, and professional posture.",
            "Problem resolution under pressure and rapid adaptation to unforeseen events.",
          ],
        },
      },
    ],
  },
  education: {
    academicTitle: { pt: "Formação Acadêmica", en: "Academic Education" },
    deg1Title: { pt: "Tecnólogo em Análise e Desenvolvimento de Sistemas", en: "Technologist in Systems Analysis and Development" },
    deg1Date: { pt: "Formado em: Julho de 2025", en: "Completed in: July 2025" },
    deg2Title: { pt: "Técnico em Administração", en: "Technical in Business Administration" },
    deg2School: { pt: "Instituto Federal de São Paulo - IFSP", en: "Federal Institute of São Paulo - IFSP" },
    deg2Date: { pt: "Início: 2026 - Conclusão prevista: 2027", en: "Start: 2026 - Expected Graduation: 2027" },
    deg2Note: {
      pt: "Foco em aplicar conhecimentos em gestão, inteligência artificial e ferramentas digitais para apoiar rotinas organizacionais.",
      en: "Focus on applying knowledge in management, artificial intelligence, and digital tools to support organizational routines.",
    },
    certsTitle: { pt: "Certificações & Idiomas", en: "Certifications & Languages" },
    cert1Title: { pt: "Inglês Avançado", en: "Advanced English" },
    cert1Desc: { pt: "CNA Master in English. Facilidade com leitura, escrita e conversação formal.", en: "CNA Master in English. Ease with reading, writing, and formal conversation." },
    cert2Title: { pt: "AI LAB I (Inteligência Artificial)", en: "AI LAB I (Artificial Intelligence)" },
    cert2Desc: { pt: "PUC-Rio. Formação sobre os fundamentos e aplicações práticas da IA Generativa.", en: "PUC-Rio. Training on the fundamentals and practical applications of Generative AI." },
    cert3Title: { pt: "AWS Academy Cloud Foundations", en: "AWS Academy Cloud Foundations" },
    cert3Desc: { pt: "Amazon AWS. Domínio sobre os conceitos essenciais da nuvem AWS, segurança e arquitetura.", en: "Amazon AWS. Mastery of essential AWS cloud concepts, security, and architecture." },
    cert4Title: { pt: "CCNA: Introduction to Networks", en: "CCNA: Introduction to Networks" },
    cert4Desc: { pt: "Cisco. Fundamentos de redes de computadores, protocolos e segurança da informação.", en: "Cisco. Fundamentals of computer networks, protocols, and information security." },
  },
  contact: {
    title: { pt: "Vamos criar algo", en: "Let's create something" },
    titleHighlight: { pt: "incrível", en: "amazing" },
    titleEnd: { pt: "juntos?", en: "together?" },
    description: {
      pt: "Estou aberto a oportunidades de estágio e projetos onde eu possa aplicar minha paixão por tecnologia, inteligência artificial e gestão para resolver problemas reais.",
      en: "I am open to internship opportunities and projects where I can apply my passion for technology, artificial intelligence, and management to solve real problems.",
    },
  },
  footer: {
    rights: { pt: "Todos os direitos reservados.", en: "All rights reserved." },
  },
} as const;
