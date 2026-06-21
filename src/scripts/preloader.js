import { gsap } from 'gsap';

export function initPreloader(onComplete) {
  const els = {
    preloader: document.getElementById('preloader'),
    bar:       document.getElementById('progress-bar'),
    pct:       document.getElementById('progress-percent'),
    status:    document.getElementById('status-message'),
    logs:      document.getElementById('terminal-logs'),
    file:      document.getElementById('loading-file'),
  };

  const FILES = [
    'core_modules/init.d',
    'ui_framework/bento_grid.scss',
    'shaders/webgl_context.glsl',
    'assets/fonts/jetbrains_mono.woff2',
    'components/glass_cards.js',
    'data_layer/api_client.js',
    'establishing_secure_connection...',
  ];

  const canvas = document.getElementById('particle-canvas');
  const ctx    = canvas.getContext('2d');
  const COLORS = ['#c0c1ff', '#44e2cd', '#4edea3'];

  const resize = () => { canvas.width = innerWidth; canvas.height = innerHeight; };
  resize();
  window.addEventListener('resize', resize);

  class Particle {
    constructor() {
      this.x = this.y = this.r = this.vx = this.vy = this.alpha = 0;
      this.color = '';
      this.reset(true);
    }

    reset(init = false) {
      this.x     = Math.random() * canvas.width;
      this.y     = init ? Math.random() * canvas.height : canvas.height;
      this.r     = Math.random() * 2 + 0.5;
      this.vx    = Math.random() - 0.5;
      this.vy    = -(Math.random() * 1.5 + 0.5);
      this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
      this.alpha = Math.random() * 0.5 + 0.1;
    }

    tick() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.y < 0) this.reset();
    }

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

  const loop = () => {
    if (!running) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.tick(); p.draw(); });
    requestAnimationFrame(loop);
  };
  loop();

  const addLog = text => {
    const el = document.createElement('div');
    el.textContent = `> ${text}`;
    els.logs.appendChild(el);
    const n = els.logs.children.length;
    if (n > 5) els.logs.style.transform = `translateY(-${(n - 5) * 20}px)`;
  };
  addLog('Initializing kernel...');
  addLog('Mounting virtual DOM...');

  let progress  = 0;
  let fileIndex = 0;

  const ticker = setInterval(() => {
    progress += Math.random() * 5 + 1;

    if (progress >= 100) {
      progress = 100;
      clearInterval(ticker);
      els.status.textContent = 'Booting Engineering Identity...';
      els.status.classList.replace('text-tertiary', 'text-secondary');
      els.file.textContent = 'SYSTEM_READY';

      gsap.to(els.preloader, {
        opacity: 0, duration: 1.2, ease: 'power3.inOut', delay: 0.4,
        onComplete() {
          els.preloader.style.display = 'none';
          running = false;
          document.body.style.overflow = 'auto';
          sessionStorage.setItem('preloader_done', '1');
          onComplete();
        },
      });
    } else {
      const threshold = (fileIndex + 1) * (100 / FILES.length);
      if (progress > threshold && fileIndex < FILES.length) {
        addLog(`Loaded: ${FILES[fileIndex]}`);
        fileIndex++;
        if (fileIndex < FILES.length) els.file.textContent = FILES[fileIndex];
      }
    }

    els.bar.style.width = `${progress}%`;
    els.pct.textContent = `${progress < 10 ? '0' : ''}${progress.toFixed(1)}%`;
  }, 80);
}
