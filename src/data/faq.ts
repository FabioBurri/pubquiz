export type Faq = { q: string; a: string; tags?: string[] };

export const faqs: Faq[] = [
  {
    q: 'Was kostet ein privates Pubquiz in Bern?',
    a: 'Ein Pubquiz mit Chopfnuss kostet ab CHF 590 für 8–25 Personen und 2 Stunden. Teamevents bis 60 Personen inkl. Insider-Runde und Technik kosten CHF 1’190, grosse Firmenanlässe ab CHF 1’890. Vorbereitung, Fragen, Moderation und Material sind immer inbegriffen.',
    tags: ['home', 'preise'],
  },
  {
    q: 'Wie viele Personen braucht es für ein Pubquiz?',
    a: 'Ab 8 Personen macht es richtig Spass, dann spielt ihr in zwei bis drei Teams. Nach oben moderieren wir bis 150 Personen. Ideal sind Teams von 4–6 Leuten.',
    tags: ['home', 'privat', 'firmenevent'],
  },
  {
    q: 'Wo findet das Pubquiz statt?',
    a: 'Dort, wo ihr feiert: in eurer Stammbar, in der Firmen-Lounge, im Vereinslokal oder bei euch zuhause. Wir sind in der Stadt und Region Bern unterwegs. Habt ihr noch keinen Ort, empfehlen wir euch passende Bars und Räume.',
    tags: ['home', 'privat', 'polterabend'],
  },
  {
    q: 'Was ist eine Insider-Runde?',
    a: 'Eine Runde mit 8–10 Fragen, die nur ihr beantworten könnt: über eure Firma, euer Team, das Geburtstagskind oder das Brautpaar. Ihr liefert uns im Vorgespräch ein paar Infos und Anekdoten, wir machen daraus Quizfragen. Erfahrungsgemäss die lauteste Runde des Abends.',
    tags: ['home', 'firmenevent', 'polterabend', 'privat'],
  },
  {
    q: 'Können wir ein Quiz nur zu einem Thema buchen?',
    a: 'Ja. Beim Nischenquiz drehen sich alle Runden um ein Thema eurer Wahl, zum Beispiel Harry Potter, Schweizer Fussball, die 90er, Bern oder eure Lieblingsserie. Aufpreis CHF 290.',
    tags: ['home', 'themenquiz'],
  },
  {
    q: 'Wie lange im Voraus müssen wir buchen?',
    a: 'Mindestens 3 Wochen. Für Insider-Runden und Firmenanlässe im Dezember empfehlen wir 4–6 Wochen, weil die Vorweihnachtszeit schnell ausgebucht ist.',
    tags: ['preise', 'firmenevent'],
  },
  {
    q: 'Bringt ihr die Technik mit?',
    a: 'Ab dem Paket «Feierabend» bringen wir Mikrofon, Lautsprecher und Beamer mit. Beim «Stammtisch» reicht meist eine normale Stimme; wenn ihr Technik wollt, bringen wir sie für CHF 80 mit.',
    tags: ['preise', 'firmenevent'],
  },
  {
    q: 'Wie schwierig sind die Fragen?',
    a: 'So schwierig, dass niemand alles weiss, und so einfach, dass niemand nichts weiss. Wir mischen Allgemeinwissen, Bilder, Musik und Schätzfragen und passen das Niveau im Vorgespräch an eure Gruppe an.',
    tags: ['home', 'privat'],
  },
  {
    q: 'Was passiert, wenn wir absagen müssen?',
    a: 'Bis 14 Tage vor dem Anlass könnt ihr kostenlos verschieben oder absagen. Danach verrechnen wir 50 %, ab 3 Tagen vorher den vollen Betrag, weil die Fragen dann schon geschrieben sind.',
    tags: ['preise'],
  },
  {
    q: 'Kann man das Pubquiz auch als Polterabend oder JGA buchen?',
    a: 'Ja, das passt sehr gut. Die Insider-Runde dreht sich dann um die Braut oder den Bräutigam, und eine Runde kann gern etwas frecher werden. Ihr bestimmt, wie weit wir gehen.',
    tags: ['polterabend'],
  },
  {
    q: 'Gibt es auch Preise für die Gewinner?',
    a: 'Ja, immer. Beim «Stammtisch» und «Feierabend» gibt es einen kleinen Preis fürs Siegerteam, bei der «Grossen Runde» einen gravierten Pokal. Eigene Preise dürft ihr gerne mitbringen.',
    tags: ['privat', 'firmenevent'],
  },
  {
    q: 'Funktioniert das auch für ein Firmen-Weihnachtsessen?',
    a: 'Sehr gut sogar. Das Quiz lässt sich zwischen die Gänge legen: eine Runde vor der Vorspeise, zwei zum Hauptgang, das Finale zum Dessert. Wir stimmen den Ablauf direkt mit Restaurant oder Caterer ab.',
    tags: ['firmenevent'],
  },
];

export const faqsFor = (tag: string) => faqs.filter((f) => f.tags?.includes(tag));
