import Alpine        from 'alpinejs';
import { gsap }      from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import '../css/tailwind.css';
import '../scss/main.scss';

// ── Section HTML (add each import as the section is built) ───
import heroHTML      from '../sections/hero.html?raw';
import valuePropHTML from '../sections/value-prop.html?raw';

// ── Section JS inits ─────────────────────────────────────────
import { initPreloader } from './preloader.js';
import { init as initHero }      from './sections/hero.js';
import { init as initValueProp } from './sections/value-prop.js';

// ── Future sections — uncomment as built ─────────────────────
// import valuePropHTML  from '../sections/value-prop.html?raw';
// import projectsHTML   from '../sections/projects.html?raw';
// import techStackHTML  from '../sections/tech-stack.html?raw';
// import experienceHTML from '../sections/experience.html?raw';
// import aiWorkflowHTML from '../sections/ai-workflow.html?raw';
// import metricsHTML    from '../sections/metrics.html?raw';
// import githubHTML     from '../sections/github.html?raw';
// import testimonialsHTML from '../sections/testimonials.html?raw';
// import writingHTML    from '../sections/writing.html?raw';
// import contactHTML    from '../sections/contact.html?raw';

// import { init as initTechStack }   from './sections/tech-stack.js';
// import { init as initCareer }      from './sections/career.js';
// import { init as initGithub }      from './sections/github.js';
// import { init as initTestimonials }from './sections/testimonials.js';
// import { init as initContact }     from './sections/contact.js';

// ── Register GSAP plugins ────────────────────────────────────
gsap.registerPlugin(ScrollTrigger);

// ── Inject sections into #app in order ───────────────────────
const app = document.getElementById('app');
app.innerHTML = [
  heroHTML,
  valuePropHTML,
  // projectsHTML,
  // techStackHTML,
  // experienceHTML,
  // aiWorkflowHTML,
  // metricsHTML,
  // githubHTML,
  // testimonialsHTML,
  // writingHTML,
  // contactHTML,
].join('');

// ── Start Alpine after HTML is in the DOM ────────────────────
window.Alpine = Alpine;
Alpine.start();

// ── Run preloader → reveal page → init sections ──────────────
initPreloader(() => {
  gsap.to('#main-content', {
    opacity: 1,
    autoAlpha: 1,
    duration: 1,
    ease: 'power2.out',
    onComplete() {
      initHero();
      initValueProp();
      // initTechStack();
      // initCareer();
      // initGithub();
      // initTestimonials();
      // initContact();
      ScrollTrigger.refresh();
    },
  });
});
