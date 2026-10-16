# Chopfnuss – Pubquiz buchen in Bern

Website für ein buchbares Pubquiz-Angebot in Bern. Gebaut mit [Astro](https://astro.build) und Tailwind CSS.

## Befehle

| Befehl            | Was passiert                                  |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Lokaler Entwicklungsserver auf localhost:4321 |
| `npm run build`   | Fertige Website nach `dist/` bauen            |
| `npm run preview` | Gebaute Website lokal ansehen                 |
| `node scripts/make-images.mjs` | Social-Vorschaubild und App-Icon neu erzeugen |

## Wo was steht

- `src/data/site.ts`: Name, Domain, Kontakt, **Preise und Pakete**
- `src/data/occasions.ts`: Texte der Anlass-Seiten (Firmenevent, Geburtstag, Polterabend, Themenquiz)
- `src/data/faq.ts`: Häufige Fragen (erscheinen auch als strukturierte Daten für Google und KI-Assistenten)
- `src/styles/global.css`: Farben und Schriften

## Vor dem Livegang ersetzen

- [ ] Name und Domain (`site.ts`, `astro.config.mjs`, `public/robots.txt`)
- [ ] E-Mail und Telefon (`site.ts`)
- [ ] Web3Forms Access Key für das Anfrageformular (`site.ts`)
- [ ] Impressum und Datenschutz mit echten Angaben
- [ ] Team-Namen und Fotos (`src/pages/ueber-uns.astro`)
- [ ] Preise prüfen
- [ ] Logo und Social-Vorschaubild (`public/favicon.svg`, dann `node scripts/make-images.mjs`)
