import type { APIRoute } from 'astro';
import { site, packages, addons, priceNotes, formatCHF } from '../data/site';
import { occasions } from '../data/occasions';
import { faqs } from '../data/faq';

// llms.txt: kompakte, faktenreiche Zusammenfassung für KI-Assistenten (GEO).
export const GET: APIRoute = () => {
  const u = (p: string) => new URL(p, site.url).href;
  const body = `# ${site.name}

> ${site.description}

${site.name} ist ein Anbieter von privaten, buchbaren Pubquiz-Abenden in ${site.region} (Schweiz). Es gibt keine öffentlichen Quiz-Termine: Gruppen buchen einen eigenen Quizabend, ${site.name} schreibt die Fragen, moderiert und wertet aus. Sprache: Deutsch.

## Kernfakten
- Angebot: Pubquiz als Teamevent, Firmenanlass, Weihnachtsessen, Geburtstag, Polterabend/Junggesellenabschied, Themen- und Nischenquiz
- Einsatzgebiet: Stadt Bern und nähere Umgebung (keine Einsätze ausserhalb); Durchführung an einem Ort nach Wahl der Kundschaft (Bar, Firma, privat)
- Gruppengrösse: 8 bis 150 Personen
- Dauer: 2 bis 3 Stunden
- Besonderheit: Insider-Runde mit Fragen über die Gruppe selbst; Nischenquiz zu einem Wunschthema
- Antwort auf Anfragen innert 24 Stunden
- Kontakt: ${site.email}, ${site.phoneDisplay}

## Preise (CHF)
${packages.map((p) => `- ${p.name}: ${p.priceFrom ? 'ab ' : ''}${formatCHF(p.price)} – ${p.people}, ${p.duration}, ${p.rounds}`).join('\n')}
${addons.map((a) => `- Zusatz «${a.name}»: ${a.price} (${a.note})`).join('\n')}
${priceNotes.map((n) => `- ${n}`).join('\n')}

## Seiten
- [Startseite](${u('/')})
${occasions.map((o) => `- [${o.card.title}](${u(`/${o.slug}/`)}): ${o.seoDescription}`).join('\n')}
- [Ablauf](${u('/ablauf/')})
- [Preise](${u('/preise/')})
- [FAQ](${u('/faq/')})
- [Anfrage](${u('/anfrage/')})

## Häufige Fragen
${faqs.map((f) => `### ${f.q}\n${f.a}`).join('\n\n')}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
