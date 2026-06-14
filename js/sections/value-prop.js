import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function init() {
  gsap.to('#value-prop .vp-header', {
    opacity: 1,
    y: 0,
    duration: 0.7,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '#value-prop',
      start: 'top 80%',
    },
  });

  gsap.to('#value-prop .vp-card', {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: 'power3.out',
    stagger: 0.12,
    scrollTrigger: {
      trigger: '#value-prop .grid',
      start: 'top 75%',
    },
  });

  gsap.to('#value-prop .vp-status', {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '#value-prop .vp-status',
      start: 'top 90%',
    },
  });
}
