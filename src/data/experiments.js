export const experiments = [
  {
    slug:     'lattice-sphere',
    title:    'LATTICE_SPHERE',
    desc:     'Geodesic lattice sphere with organic vertex displacement. IcosahedronGeometry + barycentric shader for open-hole struts + UnrealBloomPass. Camera orbits and dips below the sphere over time.',
    category: 'WEBGL',
    icon:     'blur_circular',
    accent:   '#4aff8a',
    bg:       'radial-gradient(ellipse 80% 70% at 50% 50%, rgba(74,255,138,.14) 0%, rgba(16,80,40,.08) 55%, transparent 85%)',
    variants: [
      { key: 'LatticeSphere', label: 'Lattice Sphere', subtitle: 'Geodesic shell · noise deformation · bloom glow', status: 'experimental' },
    ],
  },
  {
    slug:     'ai-workflow',
    title:    'AI_WORKFLOW',
    desc:     'Terminal-style and graph-based AI pipeline visualizations.',
    category: 'WORKFLOW',
    icon:     'account_tree',
    accent:   '#44e2cd',
    bg:       'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(68,226,205,.13) 0%, transparent 70%)',
    variants: [
      { key: 'AiWorkflow',         label: 'V1 — Terminal Nodes',  subtitle: 'Linear step-by-step node diagram',       status: 'archived' },
      { key: 'AiWorkflowPipeline', label: 'V2 — Pipeline Graph',  subtitle: 'Animated DAG with data-flow arrows',     status: 'stable'   },
    ],
  },
  {
    slug:     'tech-stack',
    title:    'TECH_STACK',
    desc:     'Skills and technology proficiency visualized two ways.',
    category: 'TECH_STACK',
    icon:     'hub',
    accent:   '#4edea3',
    bg:       'radial-gradient(ellipse 100% 80% at 50% 50%, rgba(78,222,163,.11) 0%, transparent 70%)',
    variants: [
      { key: 'TechStack',   label: 'V1 — Constellation',    subtitle: 'Anonymous star-field with hover labels',  status: 'archived' },
      { key: 'TechStackV2', label: 'V2 — Dev Cycle Graph',  subtitle: 'Labeled circular domain rings',           status: 'stable'   },
    ],
  },
  {
    slug:     'value-prop',
    title:    'VALUE_PROP',
    desc:     'Value proposition section layout variants.',
    category: 'VALUE_PROP',
    icon:     'article',
    accent:   '#c0c1ff',
    bg:       'radial-gradient(ellipse 70% 60% at 30% 50%, rgba(192,193,255,.1) 0%, transparent 65%), radial-gradient(ellipse 50% 50% at 75% 50%, rgba(192,193,255,.07) 0%, transparent 60%)',
    variants: [
      { key: 'ValueProp',   label: 'V1 — Prose Cards',      subtitle: 'Three-column prose with icon glyphs',    status: 'archived' },
      { key: 'ValuePropV2', label: 'V2 — Bento Patterns',   subtitle: 'Asymmetric bento with blob animations',  status: 'stable'   },
    ],
  },
  {
    slug:     'mechanical-grid',
    title:    'MECHANICAL_GRID',
    desc:     'Mouse-driven split-flap display board. Each cell flips as the cursor sweeps across.',
    category: 'UI_COMPONENT',
    icon:     'apps',
    accent:   '#ffc542',
    bg:       'repeating-linear-gradient(0deg,rgba(255,197,66,.04) 0px,rgba(255,197,66,.04) 1px,transparent 1px,transparent 24px),repeating-linear-gradient(90deg,rgba(255,197,66,.04) 0px,rgba(255,197,66,.04) 1px,transparent 1px,transparent 24px)',
    variants: [
      { key: 'MechanicalGrid', label: 'Mouse-Driven Flap System', subtitle: 'Characters flip on cursor sweep', status: 'experimental' },
    ],
  },
  {
    slug:     'button-animations',
    title:    'BUTTON_ANIMATIONS',
    desc:     'A catalogue of button micro-interactions: magnetic, ripple, shimmer, and particle effects.',
    category: 'UI_COMPONENT',
    icon:     'touch_app',
    accent:   '#ff7eb3',
    bg:       'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(255,126,179,.1) 0%, transparent 70%)',
    variants: [
      { key: 'ButtonAnimations', label: 'Interaction Catalogue', subtitle: 'Magnetic, ripple, shimmer, burst', status: 'stable' },
    ],
  },
  {
    slug:     'page-transitions',
    title:    'PAGE_TRANSITIONS',
    desc:     'Five candidate page transition animations shown side-by-side as live looping previews.',
    category: 'ANIMATION',
    icon:     'transition_slide',
    accent:   '#c0c1ff',
    bg:       'radial-gradient(ellipse 100% 80% at 50% 50%, rgba(192,193,255,.1) 0%, transparent 70%)',
    variants: [
      { key: 'TransitionShowcase', label: 'All 5 Candidates', subtitle: 'Glitch · Scanline · Wipe · Flash · Dissolve', status: 'experimental' },
    ],
  },
];

export const statusMeta = {
  stable:       { label: 'STABLE',       color: '#4edea3', bg: 'rgba(78,222,163,.1)',   border: 'rgba(78,222,163,.25)'  },
  experimental: { label: 'EXPERIMENTAL', color: '#ffc542', bg: 'rgba(255,197,66,.1)',   border: 'rgba(255,197,66,.25)'  },
  archived:     { label: 'ARCHIVED',     color: '#555',    bg: 'rgba(107,107,107,.08)', border: 'rgba(107,107,107,.18)' },
};
