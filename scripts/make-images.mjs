// Erzeugt das Social-Vorschaubild (public/og.png) und das Apple-Touch-Icon.
// Ausführen mit: node scripts/make-images.mjs
import sharp from 'sharp';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const out = (p) => fileURLToPath(new URL(`../public/${p}`, import.meta.url));
const icon = await readFile(out('favicon.svg'));

await sharp(icon, { density: 1200 })
  .resize(180, 180)
  .flatten({ background: '#1e1612' })
  .png()
  .toFile(out('apple-touch-icon.png'));

// Lichterkette
const bulbs = Array.from({ length: 16 }, (_, i) => {
  const x = ((i + 0.5) / 16) * 1200;
  const s = (x % 400) / 400;
  const y = 10 + 96 * s * (1 - s) + 6;
  return `<circle cx="${x}" cy="${y}" r="16" fill="#e9c475" opacity=".2"/><ellipse cx="${x}" cy="${y}" rx="4" ry="5.5" fill="#ffd98a"/>`;
}).join('');

const og = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs>
    <radialGradient id="lamp" cx="70%" cy="0%" r="70%">
      <stop offset="0" stop-color="#e9c475" stop-opacity=".28"/>
      <stop offset="1" stop-color="#e9c475" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="#1e1612"/>
  <rect width="1200" height="630" fill="url(#lamp)"/>
  <path d="M0 10 Q200 58 400 10 Q600 58 800 10 Q1000 58 1200 10" fill="none" stroke="#0e0a08" stroke-width="2"/>
  ${bulbs}
  <g transform="translate(80 130)">
    <circle cx="38" cy="38" r="38" fill="#d4a548"/>
    <circle cx="38" cy="38" r="32" fill="#17332b"/>
    <text x="38" y="54" text-anchor="middle" font-family="Georgia, serif" font-size="42" fill="#e9c475">&amp;</text>
  </g>
  <text x="180" y="182" font-family="Georgia, serif" font-size="46" fill="#f5ecda">Chopf <tspan fill="#d4a548">&amp;</tspan> Chrage</text>
  <text x="80" y="340" font-family="Georgia, serif" font-size="80" fill="#f5ecda">Pubquiz buchen in Bern.</text>
  <text x="80" y="435" font-family="Georgia, serif" font-size="80" fill="#e9c475">Wir bringen den Abend mit.</text>
  <text x="80" y="540" font-family="Segoe UI, Arial, sans-serif" font-size="28" fill="#f5ecda" fill-opacity=".7">Teamevent · Geburtstag · Polterabend · ab CHF 1’050</text>
  <rect x="0" y="618" width="1200" height="12" fill="#d4a548"/>
</svg>`;

await sharp(Buffer.from(og)).png().toFile(out('og.png'));

console.log('og.png und apple-touch-icon.png erstellt');
