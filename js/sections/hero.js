import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Hero section — entrance animations.
 * Called once after the preloader reveals #main-content.
 */
export function init() {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  tl.from('#hero .eyebrow',    { opacity: 0, y: 10, duration: 0.6 })
    .from('#hero h1',          { opacity: 0, y: 30, duration: 0.7 }, '-=0.3')
    .from('#hero .subheadline',{ opacity: 0, y: 20, duration: 0.6 }, '-=0.4')
    .from('#hero .cta-row',    { opacity: 0, y: 20, duration: 0.5 }, '-=0.3')
    .from('#hero .scroll-hint',{ opacity: 0, duration: 0.4 },        '-=0.2');
}
