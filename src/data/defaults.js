export const DEFAULTS = {
  hero: {
    eyebrow: 'SYS.STATUS: ONLINE // READY',
    headlinePrefix: 'ENGINEERING ',
    headlineAccent: 'EXPERIENCE.',
    subheadline:
      'Frontend Software Engineer specializing in React, Next.js, and TypeScript. Currently own the end-to-end checkout architecture for a Dubai-based e-commerce platform.',
    tagline: 'I sell engineered experience, not just websites.',
    ctaLabel: 'INITIATE_DEPLOYMENT',
    ctaHref: '#contact',
    statusLabel: 'FRONTEND_ENGINEER · 3+ YRS',
  },

  contact: {
    statusBadge: 'STATUS: AVAILABLE',
    headlineLine1: "LET'S BUILD",
    headlineLine2: 'THE FUTURE.',
    subheadline: 'Open to remote frontend roles with a European product team. Friction-free booking below.',
    hint: 'Hiring me is easy. Here is exactly how to start.',
    githubHref: 'https://github.com/Kernel-Butter',
    linkedinHref: 'https://linkedin.com/in/hamzabhutta',
    bookCallTitle: 'Book a Technical Discovery',
    bookCallSubtitle: '30-min deep dive into your architecture.',
    formTitle: 'Direct Transmission',
  },

  projects: {
    sectionLabel: '// CASE_STUDIES',
    sectionTitle: '// Featured Projects',
    sectionSubtitle:
      'Production e-commerce and internal tooling: checkout architecture, multi-gateway payments, and offline-first data sync.',
    items: [
      {
        name: 'TWB Catering',
        chips: ['Next.js', 'TypeScript', 'Zustand'],
        description: 'Full checkout journey for a live commercial catering platform: cart, order creation, real-time inventory sync, and multi-gateway payments.',
        category: 'E-commerce',
        image: '/projects/twb-catering.jpg',
        imageAlt: 'TWB Catering website screenshot',
        href: 'https://twb.ae/catering',
      },
      {
        name: 'Ware Malcomb',
        chips: ['HTML5', 'CSS3', 'JavaScript'],
        description: 'Corporate portfolio site for a major North American architecture and engineering firm serving healthcare, industrial, and commercial sectors.',
        category: 'Architecture / Corporate',
        image: '/projects/ware-malcomb.jpg',
        imageAlt: 'Ware Malcomb website screenshot',
        href: 'https://waremalcomb.com',
      },
      {
        name: 'YOO Interior',
        chips: ['HTML5', 'CSS3', 'JavaScript'],
        description: 'Portfolio site for a luxury interior design firm with projects at Peninsula Hotel, St. Regis, Louis Vuitton, and Turkish Airlines.',
        category: 'Interior Design / Luxury',
        image: '/projects/yoo-interior.jpg',
        imageAlt: 'Yoo Interior website screenshot',
        href: 'https://yoointerior.com',
      },
      {
        name: 'Septiembre Arquitectura',
        chips: ['HTML5', 'CSS3', 'JavaScript'],
        description: 'Minimalist portfolio for a Barcelona and Mexico-based architecture studio, with scroll-driven visual storytelling.',
        category: 'Architecture / Portfolio',
        image: '/projects/septiembre.jpg',
        imageAlt: 'Septiembre Arquitectura website screenshot',
        href: 'https://www.septiembrearquitectura.com',
      },
    ],
  },

  career: {
    sectionLabel: '// CHRONOLOGICAL_RECORD',
    sectionTitle: 'EXPERIENCE',
    sectionSubtitle:
      'A chronological record of frontend engineering roles across e-commerce, agency, and product work.',
    roles: [
      {
        period: 'JAN 2026 - PRESENT',
        location: 'Dubai, UAE (Remote)',
        title: 'Frontend Software Engineer',
        company: 'THE WHITE BOUTIQUE',
        bullets: [
          'Built the end-to-end checkout journey in Next.js and TypeScript - cart state (Zustand), order creation, address/map selection, and real-time Supabase inventory sync - reaching a 95%+ checkout completion rate.',
          'Integrated four payment gateways (Stripe, Noon Payments, Apple Pay, Google Pay) behind a unified layer with consistent error handling and transaction logging.',
          'Shipped SEO-optimized product pages using SSR and ISR, serving 50,000+ monthly product pages.',
        ],
        chips: ['Next.js', 'TypeScript', 'Supabase'],
      },
      {
        period: 'JUL 2024 - DEC 2025',
        location: 'Remote - US & Intl. clients',
        title: 'Frontend Developer',
        company: 'TOPDOT (US: DOTLOGICS)',
        bullets: [
          'Developed interactive web-based games with Vanilla JavaScript, Canvas API, and GSAP, alongside pixel-perfect responsive sites for architecture firms, restaurant chains, and SaaS platforms.',
          'Built animation-intensive UIs with GSAP scroll animations, parallax effects, and smooth page transitions.',
          'Maintained 90%+ Google Lighthouse scores through Web Vitals monitoring - cut delivery time by roughly 30% by adopting AI-assisted development workflows while keeping code-review standards.',
        ],
        chips: ['JavaScript', 'Canvas API', 'GSAP'],
      },
      {
        period: 'APR 2023 - DEC 2023',
        location: 'Lahore, Pakistan',
        title: 'Associate Software Engineer',
        company: 'ABSOLUIT',
        bullets: [
          'Built a reusable React component library adopted across team projects, shortening development cycles.',
          'Worked in agile sprints with Git-based code reviews and Jira, integrating REST and GraphQL APIs.',
        ],
        chips: ['React', 'REST', 'GraphQL'],
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
