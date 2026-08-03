// Shared font pairing catalog - used by the FontCompare experiment
// (src/sections/FontCompare.astro) and the live site-wide switcher
// (src/components/FontSwitcher.astro) so both stay in sync.
export const fontPairings = [
  {
    id: 'firacode', name: 'Fira Code + Inter', display: 'Fira Code', body: 'Inter',
    displayStack: "'Fira Code', monospace", bodyStack: "'Inter', sans-serif", monoStack: "'Fira Code', monospace",
    accent: '#ff7eb3',
    note: 'Same Inter body as before, more character than JetBrains Mono at display sizes.',
    googleFonts: 'family=Inter:wght@400;500;600;700&family=Fira+Code:wght@400;500;600;700',
  },
  {
    id: 'current', name: 'JetBrains Mono + Inter', display: 'JetBrains Mono', body: 'Inter',
    displayStack: "'JetBrains Mono', monospace", bodyStack: "'Inter', sans-serif", monoStack: "'JetBrains Mono', monospace",
    accent: '#c0c1ff',
    note: 'The original pairing, kept as a candidate.',
    googleFonts: 'family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700;800',
  },
  {
    id: 'geist', name: 'Geist', display: 'Geist', body: 'Geist',
    displayStack: "'Geist', sans-serif", bodyStack: "'Geist', sans-serif",
    monoStack: "'Geist Mono', monospace",
    accent: '#44e2cd',
    note: "Vercel's typeface — closest structural swap, same roles (sans body, mono code/labels).",
    googleFonts: 'family=Geist:wght@400;500;600;700;800&family=Geist+Mono:wght@400;500;600;700;800',
  },
  {
    id: 'plex', name: 'IBM Plex', display: 'IBM Plex Sans', body: 'IBM Plex Sans',
    displayStack: "'IBM Plex Sans', sans-serif", bodyStack: "'IBM Plex Sans', sans-serif",
    monoStack: "'IBM Plex Mono', monospace",
    accent: '#4edea3',
    note: 'A matched family designed to work together end to end.',
    googleFonts: 'family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600;700;800',
  },
  {
    id: 'grotesk', name: 'Space Grotesk + Inter', display: 'Space Grotesk', body: 'Inter',
    displayStack: "'Space Grotesk', sans-serif", bodyStack: "'Inter', sans-serif",
    monoStack: "'JetBrains Mono', monospace",
    accent: '#ffc542',
    note: 'Site default. Geometric display headline, keeps Inter for body copy.',
    googleFonts: 'family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700;800',
    default: true,
  },
];

export const defaultFontPairing = fontPairings.find(p => p.default) ?? fontPairings[0];

export function buildGoogleFontsHref(fragment) {
  return `https://fonts.googleapis.com/css2?${fragment}&display=swap`;
}
