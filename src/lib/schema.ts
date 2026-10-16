import { site, packages, formatCHF } from '../data/site';
import type { Faq } from '../data/faq';

const abs = (path: string) => new URL(path, site.url).href;
export const ORG_ID = abs('/#organisation');

/** Firma als lokaler Dienstleister mit Einsatzgebiet (ohne Ladenlokal). */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'EntertainmentBusiness'],
    '@id': ORG_ID,
    name: site.name,
    slogan: site.tagline,
    description: site.description,
    url: abs('/'),
    logo: abs('/favicon.svg'),
    image: abs('/og.png'),
    email: site.email,
    telephone: site.phone,
    priceRange: `${formatCHF(packages[0].price)}–${formatCHF(packages[packages.length - 1].price)}`,
    currenciesAccepted: 'CHF',
    knowsLanguage: 'de-CH',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bern',
      addressRegion: 'BE',
      addressCountry: 'CH',
    },
    areaServed: { '@type': 'City', name: 'Bern' },
    makesOffer: packages.map((p) => ({
      '@type': 'Offer',
      name: `Pubquiz «${p.name}»`,
      description: `${p.people}, ${p.duration}, ${p.rounds}`,
      price: p.price,
      priceCurrency: 'CHF',
      url: abs('/preise/'),
    })),
  };
}

export function serviceSchema(opts: { name: string; description: string; path: string; price: number }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Pubquiz-Moderation',
    name: opts.name,
    description: opts.description,
    url: abs(opts.path),
    provider: { '@id': ORG_ID },
    areaServed: { '@type': 'City', name: 'Bern' },
    offers: {
      '@type': 'Offer',
      price: opts.price,
      priceCurrency: 'CHF',
      url: abs('/preise/'),
    },
  };
}

export function faqSchema(items: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Start', path: '/' }, ...items].map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}
