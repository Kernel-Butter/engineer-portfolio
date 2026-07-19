import { gsap } from 'gsap';

export async function initPreloader(onComplete) {
  const els = {
    preloader: document.getElementById('preloader'),
    bar:       document.getElementById('progress-bar'),
    pct:       document.getElementById('progress-percent'),
    status:    document.getElementById('status-message'),
    logs:      document.getElementById('terminal-logs'),
    file:      document.getElementById('loading-file'),
  };

  const ASSETS = [
    '/projects/retromersive.jpg',
    '/projects/septiembre.jpg',
    '/projects/yoo-interior.jpg',
    '/projects/ware-malcomb.jpg',
    '/projects/twb-catering.jpg',
    '/projects/co-architects.jpg',
    '/projects/godfathers-pizza.jpg',
    '/projects/sound.jpg',
    '/projects/dotlogics.jpg',
    '/projects/central-pros.jpg',
    '/projects/xpensly.jpg',
    '/projects/yazdan-studio.jpg',
    '/projects/twb-storefront.jpg',
  ];

  const MIN_MS = 2000;
  const MAX_MS = 6000;

  // ── Particle canvas ────────────────────────────────────────────────────────
  const canvas = document.getElementById('particle-canvas');
  const ctx    = canvas.getContext('2d');
  const COLORS = ['#c0c1ff', '#44e2cd', '#4edea3'];

  const resize = () => { canvas.width = innerWidth; canvas.height = innerHeight; };
  resize();
  window.addEventListener('resize', resize);

  class Particle {
    constructor() { this.reset(true); }
    reset(init = false) {
      this.x     = Math.random() * canvas.width;
      this.y     = init ? Math.random() * canvas.height : canvas.height;
      this.r     = Math.random() * 2 + 0.5;
      this.vx    = Math.random() - 0.5;
      this.vy    = -(Math.random() * 1.5 + 0.5);
      this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
      this.alpha = Math.random() * 0.5 + 0.1;
    }
    tick() { this.x += this.vx; this.y += this.vy; if (this.y < 0) this.reset(); }
    draw() {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.restore();
    }
  }

  const particles = Array.from({ length: 100 }, () => new Particle());
  let running = true;

  // ── Progress — continuous lerp in the same rAF loop as particles ───────────
  // Lerping each frame means the bar is always in motion: fast when the gap is
  // large, decelerating organically as it closes in. No tween boundaries, no
  // discrete jumps — just fluid 60 fps movement toward whatever the current
  // target is, regardless of how quickly fetches resolve.
  let displayPct = 0;
  let targetPct  = 0;
  const LERP     = 0.055; // controls deceleration feel — lower = dreamier

  const setProgress = pct => {
    pct = Math.min(100, pct);
    if (pct <= targetPct) return;
    targetPct = pct;
  };

  const loop = () => {
    if (!running) return;

    // Particles
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.tick(); p.draw(); });

    // Lerp display toward target every frame
    displayPct += (targetPct - displayPct) * LERP;
    // Snap when close enough to avoid infinite micro-crawl
    if (Math.abs(targetPct - displayPct) < 0.08) displayPct = targetPct;

    els.bar.style.width = `${displayPct}%`;
    els.pct.textContent = `${displayPct < 10 ? '0' : ''}${displayPct.toFixed(1)}%`;

    requestAnimationFrame(loop);
  };
  loop();

  // ── Terminal log helper ────────────────────────────────────────────────────
  const addLog = text => {
    const el = document.createElement('div');
    el.textContent = `> ${text}`;
    els.logs.appendChild(el);
    const n = els.logs.children.length;
    if (n > 5) els.logs.style.transform = `translateY(-${(n - 5) * 20}px)`;
  };

  // ── Boot messages ──────────────────────────────────────────────────────────
  addLog('Initializing kernel...');
  addLog('Mounting virtual DOM...');
  els.status.textContent = 'Prefetching assets...';

  // ── Real asset prefetch ────────────────────────────────────────────────────
  const startTime = Date.now();
  let resolved    = 0;
  const total     = ASSETS.length;

  const fetches = ASSETS.map(async path => {
    try { await fetch(path); } catch {}
    resolved++;
    const label = path.replace('/projects/', 'assets/projects/');
    addLog(`Cached: ${label}`);
    els.file.textContent = label;
    setProgress((resolved / total) * 80);
  });
  const allDone = Promise.all(fetches);

  // ── Time floor ─────────────────────────────────────────────────────────────
  // Ramps targetPct to 75 % over MIN_MS so the bar has something to lerp
  // toward on fast connections — prevents the display from stalling visually
  // while the minimum duration drains after all fetches have resolved.
  const timeFloor = new Promise(resolve => {
    const iv = setInterval(() => {
      const elapsed = Date.now() - startTime;
      setProgress((elapsed / MIN_MS) * 75);
      if (elapsed >= MIN_MS) { clearInterval(iv); resolve(); }
    }, 80);
  });

  await Promise.race([
    Promise.all([allDone, timeFloor]),
    new Promise(r => setTimeout(r, MAX_MS)),
  ]);

  // ── Completion ─────────────────────────────────────────────────────────────
  setProgress(100);
  els.file.textContent = 'SYSTEM_READY';
  els.status.textContent = 'Booting Engineering Identity...';
  els.status.classList.replace('text-tertiary', 'text-secondary');
  addLog('All assets preloaded. Mounting interface...');

  // Wait for the lerp to visually reach 100 % before fading out.
  // Polls every frame — resolves the moment displayPct snaps to target.
  await new Promise(resolve => {
    const wait = () => {
      if (displayPct >= 99.9) { resolve(); return; }
      requestAnimationFrame(wait);
    };
    requestAnimationFrame(wait);
  });

  gsap.to(els.preloader, {
    opacity: 0, duration: 1.2, ease: 'power3.inOut', delay: 0.3,
    onComplete() {
      els.preloader.style.display = 'none';
      running = false;
      document.body.style.overflow = 'auto';
      sessionStorage.setItem('preloader_done', '1');
      onComplete();
    },
  });
}
