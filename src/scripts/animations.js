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
 * @param {Function} [reverseCheck] - (el, i) => boolean - true means slide from right
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

// ── Button mouse interaction primitives ─────────────────────────────────────

/**
 * Magnetic cursor-tracking: button follows the mouse, snaps back on leave.
 * @param {HTMLElement} el
 * @param {{ strength?: number }} [opts]
 */
export function magneticButton(el, { strength = 0.2 } = {}) {
  el.addEventListener('mousemove', e => {
    const r = el.getBoundingClientRect();
    gsap.to(el, {
      x: (e.clientX - r.left - r.width  / 2) * strength,
      y: (e.clientY - r.top  - r.height / 2) * strength,
      duration: 0.2, ease: 'power2.out',
    });
  });
  el.addEventListener('mouseleave', () => {
    gsap.to(el, { x: 0, y: 0, duration: 0.4, ease: 'elastic.out(1,0.5)' });
  });
}

/**
 * Radial ripple: expand a child element on hover, collapse on leave.
 * @param {HTMLElement} btn
 * @param {HTMLElement} rippleEl
 */
export function rippleHover(btn, rippleEl) {
  btn.addEventListener('mouseenter', () => { rippleEl.style.transform = 'scale(1)'; });
  btn.addEventListener('mouseleave', () => { rippleEl.style.transform = 'scale(0)'; });
}

/**
 * Shimmer sweep: slide a highlight bar across the button on hover.
 * @param {HTMLElement} btn
 * @param {HTMLElement} shimmerEl
 */
export function shimmerHover(btn, shimmerEl) {
  btn.addEventListener('mouseenter', () => {
    gsap.fromTo(shimmerEl, { x: '-100%' }, { x: '120%', duration: 0.5, ease: 'power2.inOut' });
  });
  btn.addEventListener('mouseleave', () => {
    gsap.set(shimmerEl, { x: '-100%' });
  });
}

/**
 * Click burst: scatter colored particles from the click point.
 * @param {HTMLElement} el
 * @param {{ count?: number, color?: string, radius?: number }} [opts]
 */
export function clickBurst(el, { count = 6, color = '#44e2cd', radius = 55 } = {}) {
  el.addEventListener('click', e => {
    for (let i = 0; i < count; i++) {
      const p = document.createElement('span');
      p.style.cssText = `position:fixed;width:6px;height:6px;border-radius:50%;background:${color};pointer-events:none;z-index:9999;left:${e.clientX}px;top:${e.clientY}px;transform:translate(-50%,-50%)`;
      document.body.appendChild(p);
      const angle = (Math.PI * 2 / count) * i;
      gsap.to(p, {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
        opacity: 0, duration: 0.55, ease: 'power2.out',
        onComplete: () => p.remove(),
      });
    }
  });
}

/**
 * Scramble text: randomise chars on hover, resolve back to original.
 * @param {HTMLElement} el
 * @param {{ pool?: string, speed?: number }} [opts]
 */
export function scrambleText(el, { pool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_', speed = 0.45 } = {}) {
  const original = (el.textContent ?? '').trim();
  let ticker = null;
  el.addEventListener('mouseenter', () => {
    let progress = 0;
    if (ticker) clearInterval(ticker);
    ticker = setInterval(() => {
      el.textContent = original.split('').map((c, i) => {
        if (c === '_' || c === ' ') return c;
        if (i < progress) return original[i];
        return pool[Math.floor(Math.random() * pool.length)];
      }).join('');
      progress += speed;
      if (progress >= original.length) { clearInterval(ticker); el.textContent = original; }
    }, 30);
  });
  el.addEventListener('mouseleave', () => { if (ticker) clearInterval(ticker); el.textContent = original; });
}
