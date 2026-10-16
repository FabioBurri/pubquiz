export type Occasion = {
  slug: string;
  nav: string;
  card: { title: string; text: string };
  seoTitle: string;
  seoDescription: string;
  h1: string;
  lead: string;
  points: { title: string; text: string }[];
  sampleQuestions: string[];
  sampleNote: string;
  packageId: string;
  faqTag: string;
};

export const occasions: Occasion[] = [
  {
    slug: 'firmenevent',
    nav: 'Firmenevent',
    card: {
      title: 'Teamevent & Firmenanlass',
      text: 'Ein Abend, an dem die Buchhaltung gegen die IT gewinnt. Ideal fürs Weihnachtsessen, Sommerfest oder Onboarding.',
    },
    seoTitle: 'Pubquiz als Teamevent in Bern buchen',
    seoDescription:
      'Pubquiz als Firmenevent in Bern: mit Insider-Runde über eure Firma, Quizmaster und Technik. Für 10–150 Personen, ab CHF 1’190. Jetzt unverbindlich anfragen.',
    h1: 'Pubquiz als Teamevent in Bern',
    lead:
      'Kein Seilpark, keine Powerpoint-Spiele. Ein Pubquiz bringt Leute zusammen, die sonst nur per Mail miteinander reden. Wir bringen Fragen, Quizmaster und Technik mit. Ihr bringt das Team.',
    points: [
      { title: 'Insider-Runde über eure Firma', text: 'Wer hat den ältesten Firmenlaptop? In welchem Jahr gab es den legendären Betriebsausflug? Ihr liefert die Anekdoten, wir die Fragen.' },
      { title: 'Durchmischte Teams', text: 'Auf Wunsch stellen wir die Teams quer durch die Abteilungen zusammen. So lernt man sich wirklich kennen.' },
      { title: 'Passt in jeden Ablauf', text: 'Als Programmpunkt am Weihnachtsessen, zwischen den Gängen oder als eigener Abend in eurer Lieblingsbar.' },
      { title: 'Eine Rechnung, kein Aufwand', text: 'Wir stimmen uns mit Location und Catering ab. Ihr bekommt eine Offerte und eine Rechnung.' },
    ],
    sampleQuestions: [
      'Wie viele Kaffeekapseln verbraucht das Büro pro Woche? (Schätzfrage, nächste Zahl gewinnt)',
      'Welches Teammitglied hat früher Eishockey in der 1. Liga gespielt?',
      'Ordnet die Firmenlogos chronologisch – vom ersten bis zum aktuellen.',
    ],
    sampleNote: 'Beispiele aus einer Insider-Runde',
    packageId: 'feierabend',
    faqTag: 'firmenevent',
  },
  {
    slug: 'geburtstag-freunde',
    nav: 'Geburtstag & Freunde',
    card: {
      title: 'Geburtstag & Freundeskreis',
      text: 'Der 30. muss nicht in einem Dreigänger enden. Ein Quiz über das Geburtstagskind sorgt für Gesprächsstoff bis in die Morgenstunden.',
    },
    seoTitle: 'Pubquiz für Geburtstag & Freunde in Bern',
    seoDescription:
      'Privates Pubquiz für Geburtstag, Freundeskreis oder WG-Fest in Bern. Mit Fragen über das Geburtstagskind, 8–25 Personen, 2 Stunden, ab CHF 590.',
    h1: 'Pubquiz für Geburtstag und Freundeskreis',
    lead:
      'Ein eigener Quizabend nur für eure Runde. Wir moderieren, ihr spielt. Und alle lernen etwas über das Geburtstagskind, das sie lieber nicht gewusst hätten.',
    points: [
      { title: 'Fragen über das Geburtstagskind', text: 'Erstes Auto, peinlichste Frisur, Lieblingslied mit 15. Ihr schickt uns Infos und Fotos, wir bauen daraus eine Runde.' },
      { title: 'Bei euch oder in der Bar', text: 'Im Wohnzimmer, im Garten oder in der Stammbar in der Altstadt. Wir kommen dorthin, wo ihr feiert.' },
      { title: 'Niveau nach Wunsch', text: 'Von gemütlich bis ehrgeizig. Wir passen die Fragen an, damit auch die Grosseltern mitraten können.' },
      { title: 'Ihr müsst nichts organisieren', text: 'Antwortblätter, Stifte, Joker und ein Preis fürs Siegerteam sind dabei.' },
    ],
    sampleQuestions: [
      'In welchem Land hat Lea ihren ersten Sonnenbrand geholt?',
      'Musikrunde: Welcher Song lief an Leas Maturaball als Letztes?',
      'Fotorunde: Welches Jahr? (Frisur als einziger Hinweis)',
    ],
    sampleNote: 'Beispiele aus einer Geburtstags-Runde',
    packageId: 'stammtisch',
    faqTag: 'privat',
  },
  {
    slug: 'polterabend',
    nav: 'Polterabend & JGA',
    card: {
      title: 'Polterabend & JGA',
      text: 'Wie gut kennt ihr die Braut oder den Bräutigam wirklich? Eine Runde nur über die zukünftige Ehe, die andere über alles davor.',
    },
    seoTitle: 'Pubquiz für Polterabend & JGA in Bern',
    seoDescription:
      'Pubquiz als Programmpunkt für Polterabend oder JGA in Bern. Mit Fragen über Braut oder Bräutigam, Quizmaster und Preisen. Ab CHF 590.',
    h1: 'Pubquiz für Polterabend und JGA',
    lead:
      'Zwischen Aare-Böötle und Barhopping: Ein Quiz über die Hauptperson ist der Programmpunkt, über den nachher alle reden. Wir übernehmen Fragen und Moderation, ihr bestimmt den Ton.',
    points: [
      { title: 'Alles dreht sich um die Hauptperson', text: 'Wie haben sie sich kennengelernt? Wer hat zuerst «Ich liebe dich» gesagt? Die Antworten liefert ihr vorab, heimlich.' },
      { title: 'Ihr bestimmt, wie frech', text: 'Familientauglich oder eher nicht. Wir halten uns an eure Grenzen, versprochen.' },
      { title: 'Passt in jeden Tagesplan', text: '2 Stunden in einer Bar in der Altstadt, danach geht es weiter. Wir richten uns nach eurem Programm.' },
      { title: 'Ein Erinnerungsstück', text: 'Auf Wunsch bekommt die Hauptperson das ausgefüllte Siegerblatt als Andenken.' },
    ],
    sampleQuestions: [
      'Wie lautete Marcos erste Nachricht an Sarah? A) «Hoi» B) «Bist du die mit dem Hund?» C) Ein Foto von einem Fondue',
      'Wie viele Länder hat das Paar gemeinsam bereist?',
      'Welches Möbelstück hat zu ihrem bisher grössten Streit geführt?',
    ],
    sampleNote: 'Beispiele aus einer Polterabend-Runde',
    packageId: 'stammtisch',
    faqTag: 'polterabend',
  },
  {
    slug: 'themenquiz',
    nav: 'Themenquiz',
    card: {
      title: 'Themen- & Nischenquiz',
      text: 'Nur Harry Potter. Nur YB. Nur 90er-Hits. Wenn eure Gruppe ein Thema liebt, quizzen wir nur dazu.',
    },
    seoTitle: 'Themenquiz & Nischenquiz in Bern buchen',
    seoDescription:
      'Pubquiz zu einem Thema eurer Wahl: Harry Potter, Schweizer Fussball, 90er, Bern, Serien und mehr. Massgeschneiderte Fragen, in Bern moderiert. Aufpreis CHF 290.',
    h1: 'Themenquiz: Ein Abend, ein Thema',
    lead:
      'Allgemeinwissen ist schön, ein Thema, bei dem alle mitreden können, ist schöner. Beim Nischenquiz drehen sich alle Runden um das, was eure Gruppe verbindet.',
    points: [
      { title: 'Jedes Thema ist möglich', text: 'Von «Friends» über Schweizer Eishockey bis zur Geschichte eures Quartiers. Wir recherchieren, bis es passt.' },
      { title: 'Für Fans und Mitläufer', text: 'Wir mischen Fragen für Profis mit solchen, die man auch mit Halbwissen lösen kann.' },
      { title: 'Mehr als Text', text: 'Bildrunden, Soundschnipsel, Zitate und Schätzfragen sorgen für Abwechslung.' },
      { title: 'Kombinierbar', text: 'Auch nur eine Themenrunde mitten im normalen Quiz ist möglich.' },
    ],
    sampleQuestions: [
      'Bern-Runde: Wie viele Figurenbrunnen aus dem 16. Jahrhundert stehen in der Berner Altstadt?',
      '90er-Runde: Welche Band sang «Wannabe»? (Kleiner Tipp: Es waren fünf.)',
      'Serien-Runde: In welchem Café treffen sich die Freunde in «Friends»?',
    ],
    sampleNote: 'Beispiele aus verschiedenen Themenrunden',
    packageId: 'feierabend',
    faqTag: 'themenquiz',
  },
];
