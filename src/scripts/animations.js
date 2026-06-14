import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Fade a selector up from its SCSS hidden state (opacity:0, translateY).
 * @param {string} selector  - CSS selector for target(s)
 * @param {string} trigger   - CSS selector for ScrollTrigger anchor
 */
export function fadeUp(selector, trigger, {
  duration = 0.7,
  ease = 'power3.out',
  start = 'top 80%',
  delay = 0,
  toggleActions = 'play none none reverse',
} = {}) {
  gsap.to(selector, {
    opacity: 1, y: 0, duration, ease, delay,
    scrollTrigger: { trigger, start, toggleActions },
  });
}

/**
 * Stagger-reveal a group of elements from their SCSS hidden states.
 * @param {string} selector  - CSS selector matching all items to stagger
 * @param {string} trigger   - CSS selector for ScrollTrigger anchor
 * @param {Function} [onEnter] - optional callback when trigger enters viewport
 */
export function staggerFadeUp(selector, trigger, {
  duration = 0.65,
  ease = 'power3.out',
  stagger = 0.12,
  start = 'top 78%',
  onEnter,
  toggleActions = 'play none none reverse',
} = {}) {
  gsap.to(selector, {
    opacity: 1, y: 0, duration, ease, stagger,
    scrollTrigger: { trigger, start, onEnter, toggleActions },
  });
}

/**
 * Animate a SVG <line> or <path> strokeDashoffset to 0 on scroll (scrubbed).
 * @param {string} lineId      - id of the SVG element (without #)
 * @param {string} trigger     - CSS selector for ScrollTrigger anchor
 */
export function drawSvgLine(lineId, trigger, {
  start = 'top 70%',
  end = 'bottom 60%',
  scrub = 1,
} = {}) {
  gsap.to(`#${lineId}`, {
    strokeDashoffset: 0, ease: 'none',
    scrollTrigger: { trigger, start, end, scrub },
  });
}

/**
 * Slide a list of elements in from alternating sides as each enters view.
 * @param {Element[]} elements  - array of DOM elements (use gsap.utils.toArray)
 * @param {Function} [reverseCheck] - (el, i) => boolean — true means slide from right
 */
export function slideFromSides(elements, {
  xOffset = 40,
  duration = 0.7,
  ease = 'power3.out',
  start = 'top 82%',
  reverseCheck = (_, i) => i % 2 !== 0,
  toggleActions = 'play none none reverse',
} = {}) {
  elements.forEach((el, i) => {
    // fromTo keeps explicit from/to so reverse animates back to the correct hidden state
    gsap.fromTo(el,
      { opacity: 0, x: reverseCheck(el, i) ? xOffset : -xOffset },
      { opacity: 1, x: 0, duration, ease,
        scrollTrigger: { trigger: el, start, toggleActions } }
    );
  });
}

/**
 * Tick a number from 0 to target, updating a DOM element's textContent.
 * @param {string} elementId  - id of the element to update (without #)
 * @param {number} target     - final number value
 */
export function countUp(elementId, target, {
  duration = 1.4,
  ease = 'power2.out',
  round = true,
} = {}) {
  const obj = { val: 0 };
  gsap.to(obj, {
    val: target, duration, ease,
    onUpdate() {
      const el = document.getElementById(elementId);
      if (el) el.textContent = round ? String(Math.round(obj.val)) : obj.val.toFixed(2);
    },
  });
}

/**
 * Fill a bar element's width from 0 to a target percentage.
 * @param {string | Element} selector  - CSS selector or DOM element
 * @param {number} pct                 - target width as a percentage (0-100)
 */
export function animateBar(selector, pct, {
  duration = 1.2,
  ease = 'power2.out',
  delay = 0,
} = {}) {
  gsap.to(selector, { width: `${pct}%`, duration, ease, delay });
}

/**
 * Draw an SVG circle arc by animating strokeDashoffset to 0.
 * @param {string} arcId  - id of the SVG circle element (without #)
 */
export function animateGauge(arcId, {
  duration = 1.4,
  ease = 'power2.out',
} = {}) {
  gsap.to(`#${arcId}`, { strokeDashoffset: 0, duration, ease });
}

/**
 * Scale + fade a grid of voxel/cell elements in with a stagger cascade.
 * @param {string} selector  - CSS selector matching all cells
 */
export function cascadeVoxels(selector, {
  amount = 1.2,
  duration = 0.3,
  ease = 'back.out(1.5)',
} = {}) {
  // fromTo keeps explicit states so killing mid-stagger and replaying always works
  gsap.fromTo(selector,
    { opacity: 0, scale: 0 },
    { opacity: 1, scale: 1, duration, ease, stagger: { amount, from: 'start' } }
  );
}

/**
 * ScrollTrigger.create wrapper that fires a callback exactly once on enter.
 * @param {string}   trigger   - CSS selector for ScrollTrigger anchor
 * @param {Function} callback  - called when element first enters viewport
 */
export function onEnterOnce(trigger, callback, { start = 'top 85%' } = {}) {
  ScrollTrigger.create({ trigger, start, once: true, onEnter: callback });
}
