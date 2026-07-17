const CMS_KEY = 'portfolio_cms_v1';

export function getStoredContent() {
  try {
    const raw = localStorage.getItem(CMS_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function resolve(obj, path) {
  return path.split('.').reduce((o, k) => {
    if (o == null) return undefined;
    const n = Number(k);
    return isNaN(n) ? o[k] : o[n];
  }, obj);
}

function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export function hydrateDOM(content) {
  // Plain text nodes
  document.querySelectorAll('[data-cms]').forEach(el => {
    const val = resolve(content, el.dataset.cms);
    if (val != null && val !== '') el.textContent = String(val);
  });

  // href attributes
  document.querySelectorAll('[data-cms-href]').forEach(el => {
    const val = resolve(content, el.dataset.cmsHref);
    if (val != null && val !== '') el.setAttribute('href', String(val));
  });

  // Image sources and accessible alt text
  document.querySelectorAll('[data-cms-src]').forEach(el => {
    const val = resolve(content, el.dataset.cmsSrc);
    if (val != null && val !== '') el.setAttribute('src', String(val));
  });

  document.querySelectorAll('[data-cms-alt]').forEach(el => {
    const val = resolve(content, el.dataset.cmsAlt);
    if (val != null && val !== '') el.setAttribute('alt', String(val));
  });

  // Bullet <ul> lists - value is string[]
  document.querySelectorAll('[data-cms-bullets]').forEach(ul => {
    const val = resolve(content, ul.dataset.cmsBullets);
    if (!Array.isArray(val) || val.length === 0) return;
    ul.innerHTML = val
      .map(
        b => `<li class="flex items-start">
        <span class="text-secondary font-code-snippet mt-1 shrink-0 mr-2">&gt;</span>
        ${esc(b)}
      </li>`
      )
      .join('');
  });

  // Chip containers - value is string[]
  document.querySelectorAll('[data-cms-chips]').forEach(container => {
    const val = resolve(content, container.dataset.cmsChips);
    if (!Array.isArray(val) || val.length === 0) return;
    container.innerHTML = val
      .map(
        c =>
          `<span class="px-3 py-1 rounded font-label-sm text-label-sm bg-[#171717] text-on-surface-variant border border-white/10">${esc(c)}</span>`
      )
      .join('');
  });
}

export function initCMS() {
  const content = getStoredContent();
  if (content) hydrateDOM(content);
}
