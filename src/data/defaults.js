export const DEFAULTS = {
  hero: {
    eyebrow: 'SYS.STATUS: ONLINE // READY',
    headlinePrefix: 'ENGINEERING ',
    headlineAccent: 'EXPERIENCE.',
    subheadline:
      'Senior Frontend Engineer specializing in high-performance UI systems, WebGL, and AI-augmented delivery.',
    tagline: 'I sell engineered experience — not just websites.',
    ctaLabel: 'INITIATE_DEPLOYMENT',
    ctaHref: '#contact',
    statusLabel: 'SYSTEM_ARCHITECT v4.2.0',
  },

  contact: {
    statusBadge: 'STATUS: AVAILABLE',
    headlineLine1: "LET'S BUILD",
    headlineLine2: 'THE FUTURE.',
    subheadline: 'Currently accepting high-impact projects. Friction-free booking below.',
    hint: 'Hiring me is easy. Here is exactly how to start.',
    githubHref: '#',
    linkedinHref: '#',
    bookCallTitle: 'Book a Technical Discovery',
    bookCallSubtitle: '30-min deep dive into your architecture.',
    formTitle: 'Direct Transmission',
  },

  projects: {
    sectionLabel: '// CASE_STUDIES',
    sectionTitle: '// Featured Projects',
    sectionSubtitle:
      'High-performance architectural solutions and technical case studies. Focusing on rendering optimization, edge infrastructure, and complex data parsing.',
    items: [
      {
        name: 'Quantum Dashboard',
        chips: ['Live', 'WebGL', 'Data Viz'],
        problem: 'Severe rendering lag during real-time ingestion of complex node graphs.',
        approach: 'Custom WebGL shaders offloading matrix calculations to GPU.',
        resultMetric: '60fps',
        resultContext: '@ 100k nodes',
      },
      {
        name: 'Aurelius Commerce',
        chips: ['Next.js', 'Edge'],
        problem: 'Poor SEO and slow TTFB on a high-end headless storefront.',
        approach:
          'Re-architected routing using Next.js App Router with globally distributed Edge caching.',
        resultMetric: '98/100',
        resultContext: 'Lighthouse Score',
      },
      {
        name: 'Synthetix AI',
        chips: ['AST', 'Parsers'],
        description: 'A design-to-code pipeline automating UI handoff from Figma to production React.',
        problem: 'Friction and inconsistency in manual implementation from design tokens.',
        approach:
          'Custom AST parsers translating Figma JSON to semantic React + Tailwind components.',
        resultMetric: '40% Faster',
        resultContext: 'Shipping',
      },
    ],
  },

  career: {
    sectionLabel: '// CHRONOLOGICAL_RECORD',
    sectionTitle: 'EXPERIENCE',
    sectionSubtitle:
      'A chronological record of engineering roles, system architecture contributions, and technical leadership across high-scale environments.',
    roles: [
      {
        period: '2021 — PRESENT',
        location: 'San Francisco, CA',
        title: 'Senior Systems Engineer',
        company: 'NEXUS_CORE_TECHNOLOGIES',
        bullets: [
          'Architected distributed microservices handling 50k+ requests/sec with sub-50ms latency.',
          'Led migration from legacy monolith to Kubernetes-orchestrated containers, reducing deploy times by 70%.',
          'Implemented custom telemetry aggregation pipelines using Go and Rust.',
        ],
        chips: ['Go', 'Kubernetes', 'Rust'],
      },
      {
        period: '2018 — 2021',
        location: 'Seattle, WA',
        title: 'Backend Developer',
        company: 'AETHER_DATA_SYSTEMS',
        bullets: [
          'Engineered robust ETL pipelines processing terabytes of log data daily.',
          'Optimized database queries resulting in a 40% reduction in execution time.',
          'Developed RESTful APIs for internal analytics dashboards.',
        ],
        chips: ['Python', 'PostgreSQL', 'AWS'],
      },
      {
        period: '2016 — 2018',
        location: 'Austin, TX',
        title: 'Software Engineer',
        company: 'VOID_LOGIC_LLC',
        bullets: [
          'Maintained and expanded legacy C++ codebases for industrial automation software.',
          'Built automated testing frameworks that increased test coverage by 50%.',
        ],
        chips: ['C++', 'Linux', 'Bash'],
      },
    ],
  },

  testimonials: {
    sectionTitle: 'SOCIAL_PROOF',
    items: [
      {
        name: 'Marcus R.',
        initials: 'MR',
        role: 'VP ENGINEERING @ NEURAL_SYNC',
        quote:
          "The architectural decisions made during the core refactor didn't just solve our scaling issues; they laid a foundation we'll be building on for the next five years. Precision engineering meets uncompromising execution.",
        tags: ['SYSTEM_ARCH', 'RUST'],
      },
      {
        name: 'Elena K.',
        initials: 'EK',
        role: 'FOUNDER @ DATAVOID',
        quote: 'Delivered a complex WebGL visualization engine weeks ahead of schedule. The code was practically poetry.',
        tags: ['FRONTEND'],
      },
      {
        name: 'David C.',
        initials: 'DC',
        role: 'CTO @ QUANTUM_LEAP',
        quote: 'An absolute machine. Turned our chaotic microservices into a streamlined, high-performance cluster.',
        tags: ['DEVOPS'],
      },
      {
        name: 'Sarah J.',
        initials: 'SJ',
        role: 'LEAD SEC_OPS @ SHIELD_NET',
        quote:
          "When it comes to securing critical infrastructure, there is zero margin for error. The auditing and subsequent patching implemented were flawless. It's rare to find someone who understands deep systems-level security and can communicate it clearly to stakeholders.",
        tags: [],
      },
    ],
  },
};
