/**
 * Zentrale Firmendaten. Alles, was hier steht, ist (noch) ein Platzhalter.
 * Name, Domain, Kontakt und Preise nur hier ändern – die ganze Website zieht die Werte von hier.
 */

export const site = {
  name: 'Chopfnuss',
  tagline: 'Pubquiz zum Buchen. In Bern.',
  url: 'https://www.chopfnuss.ch',
  email: 'hallo@chopfnuss.ch',
  phone: '+41 31 000 00 00',
  phoneDisplay: '031 000 00 00',
  city: 'Bern',
  region: 'Stadt und Region Bern',
  description:
    'Chopfnuss organisiert und moderiert private Pubquiz-Abende in Bern: für Firmen, Freundeskreise, Geburtstage und Polterabende. Mit eigenen Insider-Fragen, Quizmaster und Technik. Ab CHF 590.',
  // Web3Forms Access Key (gratis auf web3forms.com). Leer = Formular sendet nicht.
  web3formsKey: '',
  founded: '2026',
};

export type Package = {
  id: string;
  name: string;
  forWhom: string;
  price: number;
  priceFrom?: boolean;
  people: string;
  minPeople: number;
  maxPeople: number;
  duration: string;
  rounds: string;
  featured?: boolean;
  includes: string[];
};

export const packages: Package[] = [
  {
    id: 'stammtisch',
    name: 'Stammtisch',
    forWhom: 'Für Freundeskreis, Geburtstag und WG-Fest',
    price: 590,
    people: '8–25 Personen',
    minPeople: 8,
    maxPeople: 25,
    duration: '2 Stunden',
    rounds: '4 Runden, rund 40 Fragen',
    includes: [
      'Quizmaster vor Ort',
      'Fragen auf eure Gruppe abgestimmt',
      'Antwortblätter, Stifte, Joker-Karten',
      'Live-Auswertung und Rangliste',
      'Kleiner Preis fürs Siegerteam',
    ],
  },
  {
    id: 'feierabend',
    name: 'Feierabend',
    forWhom: 'Für Teamevents, Vereine und Polterabende',
    price: 1190,
    people: 'bis 60 Personen',
    minPeople: 10,
    maxPeople: 60,
    duration: '2,5 Stunden',
    rounds: '5 Runden inkl. Insider-Runde',
    featured: true,
    includes: [
      'Alles aus «Stammtisch»',
      '1 Insider-Runde mit Fragen über euch',
      'Bild- und Musikrunde',
      'Mikrofon, Lautsprecher und Beamer',
      'Vorgespräch (30 Min.) per Video oder Telefon',
    ],
  },
  {
    id: 'grosse-runde',
    name: 'Grosse Runde',
    forWhom: 'Für Firmenanlässe und Weihnachtsessen',
    price: 1890,
    priceFrom: true,
    people: '60–150 Personen',
    minPeople: 60,
    maxPeople: 150,
    duration: 'ca. 3 Stunden',
    rounds: '6 Runden inkl. 2 Insider-Runden',
    includes: [
      'Alles aus «Feierabend»',
      'Zwei Quizmaster',
      'Auswertung mit Live-Rangliste auf der Leinwand',
      'Pokal mit Gravur fürs Siegerteam',
      'Abstimmung mit Location und Catering',
    ],
  },
];

export const addons = [
  { name: 'Zusätzliche Insider-Runde', price: 'CHF 180', note: '8–10 Fragen über eure Firma, euer Team oder das Geburtstagskind' },
  { name: 'Nischenquiz', price: 'CHF 290', note: 'Alle Runden zu einem Thema: Harry Potter, YB, Fondue, 90er – ihr sagt es' },
  { name: 'Verlängerung', price: 'CHF 120', note: 'pro zusätzliche 30 Minuten' },
  { name: 'Technik-Set fürs Paket Stammtisch', price: 'CHF 80', note: 'Mikrofon und Lautsprecher' },
  { name: 'Anfahrt ausserhalb Region Bern', price: 'CHF 0.80 / km', note: 'ab 25 km Distanz zur Stadt Bern' },
];

export const priceNotes = [
  'Alle Preise in CHF, inkl. Vorbereitung, Fragen, Moderation und Material.',
  'Location, Essen und Getränke sind nicht inbegriffen. Gerne empfehlen wir passende Bars und Räume in Bern.',
  'Buchung mindestens 3 Wochen im Voraus, für Insider-Runden ideal 4–6 Wochen.',
];

export const formatCHF = (n: number) =>
  'CHF ' + n.toLocaleString('de-CH').replace(/,/g, '’');
