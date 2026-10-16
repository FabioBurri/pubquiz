// Erzeugt das Social-Vorschaubild (public/og.png) und das Apple-Touch-Icon.
// Ausführen mit: node scripts/make-images.mjs
import sharp from 'sharp';
import { readFile } from 'node:fs/promises';

const icon = await readFile(new URL('../public/favicon.svg', import.meta.url));

await sharp(icon, { density: 1200 })
  .resize(180, 180)
  .flatten({ background: '#f4efe4' })
  .png()
  .toFile(new URL('../public/apple-touch-icon.png', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1'));

const lines = Array.from({ length: 18 }, (_, i) => `<line x1="0" x2="1200" y1="${40 + i * 36}" y2="${40 + i * 36}" stroke="#d6cbb4" stroke-opacity=".6"/>`).join('');

const og = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#f4efe4"/>
  ${lines}
  <g transform="translate(80 92) rotate(-6 40 40)">
    <circle cx="40" cy="40" r="38" fill="#c73a2c"/>
    <circle cx="40" cy="40" r="31" fill="none" stroke="#f4efe4" stroke-width="2.4" stroke-dasharray="4 4.4" opacity=".7"/>
    <path d="M30.4 31.2c0-6 4.4-10 10-10s10 3.8 10 9.2c0 4.4-2.6 6.4-5.4 8.2-2.4 1.6-3.6 2.8-3.6 5.8v1.6" fill="none" stroke="#f4efe4" stroke-width="6" stroke-linecap="round"/>
    <circle cx="41.4" cy="57.2" r="4" fill="#f4efe4"/>
  </g>
  <text x="185" y="148" font-family="Segoe UI, Arial, sans-serif" font-size="44" font-weight="800" fill="#1c1b18">Chopfnuss</text>
  <text x="80" y="330" font-family="Segoe UI, Arial, sans-serif" font-size="84" font-weight="800" fill="#1c1b18" letter-spacing="-2">Pubquiz buchen in Bern.</text>
  <text x="80" y="425" font-family="Segoe UI, Arial, sans-serif" font-size="84" font-weight="800" fill="#c73a2c" letter-spacing="-2">Wir bringen den Abend mit.</text>
  <text x="80" y="540" font-family="Consolas, monospace" font-size="28" fill="#57524a">Teamevent · Geburtstag · Polterabend · ab CHF 590</text>
  <rect x="0" y="606" width="1200" height="24" fill="#1f3b2f"/>
</svg>`;

await sharp(Buffer.from(og))
  .png()
  .toFile(new URL('../public/og.png', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1'));

console.log('og.png und apple-touch-icon.png erstellt');
