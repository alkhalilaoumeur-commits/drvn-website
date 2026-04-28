import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  schema?: object | object[];
  keywords?: string;
  noindex?: boolean;
  /** Wird automatisch in BreadcrumbList umgewandelt */
  breadcrumbs?: { name: string; path: string }[];
  /** Bild für Open Graph (überschreibt Default) */
  ogImage?: string;
}

const BASE_URL = 'https://drvnautomatisations.com';
const DEFAULT_IMAGE = `${BASE_URL}/og-image.svg`;

// ─── Globale Schema-Objekte (auf jeder Seite) ────────────────────────────────

/**
 * Organization + LocalBusiness — kombiniert für maximale Discovery.
 * LocalBusiness mit Adresse, Geo, Öffnungszeiten ist kritisch für lokale Suche
 * ("SaaS Stuttgart", "Restaurantsoftware Deutschland", etc.)
 */
const orgSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'LocalBusiness', 'ProfessionalService'],
      '@id': `${BASE_URL}/#organization`,
      name: 'DRVN',
      alternateName: 'DRVN Automatisierungen',
      url: BASE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/favicon.svg`,
        width: 512,
        height: 512,
      },
      image: DEFAULT_IMAGE,
      description:
        'DRVN entwickelt branchenspezifische SaaS-Lösungen für Gastronomie, Handwerk, Reinigung und Service-Betriebe in Deutschland. DSGVO-konform, Server in Deutschland, individuelle Betreuung.',
      email: 'kontakt@drvnautomatisations.com',
      telephone: '+49-711-2345678',
      priceRange: '€€',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Egilolfstrasse 41',
        addressLocality: 'Stuttgart',
        postalCode: '70599',
        addressCountry: 'DE',
        addressRegion: 'Baden-Württemberg',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 48.7758,
        longitude: 9.1829,
      },
      areaServed: [
        { '@type': 'Country', name: 'Deutschland' },
        { '@type': 'Country', name: 'Österreich' },
        { '@type': 'Country', name: 'Schweiz' },
      ],
      knowsLanguage: ['de', 'en'],
      foundingDate: '2024',
      founder: { '@type': 'Person', name: 'Al-Khalil Aoumeur' },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'DRVN Produkte und Leistungen',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'SoftwareApplication',
              name: 'ServeFlow',
              applicationCategory: 'BusinessApplication',
              description:
                'Restaurantmanagement-Software mit QR-Bestellung, Online-Reservierungen, Tischverwaltung und Echtzeit-Dashboard.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Webseiten & Landingpages',
              description: 'SEO-optimierte Unternehmens-Webseiten — responsive, DSGVO-konform.',
            },
          },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: BASE_URL,
      name: 'DRVN',
      description: 'Branchenspezifische SaaS für Deutschland',
      publisher: { '@id': `${BASE_URL}/#organization` },
      inLanguage: 'de-DE',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${BASE_URL}/?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    },
  ],
};

// ─── Helper: Breadcrumb-Schema ───────────────────────────────────────────────
function buildBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.path}`,
    })),
  };
}

export default function SEO({
  title,
  description,
  path = '',
  schema,
  keywords,
  noindex = false,
  breadcrumbs,
  ogImage,
}: SEOProps) {
  const fullTitle = title.includes('DRVN') ? title : `${title} | DRVN`;
  const url = `${BASE_URL}${path}`;
  const image = ogImage || DEFAULT_IMAGE;

  // Schema-Liste — Org global + optional Breadcrumbs + Page-spezifisches
  const schemas: object[] = [orgSchema];
  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push(buildBreadcrumbSchema(breadcrumbs));
  }
  if (schema) {
    if (Array.isArray(schema)) schemas.push(...schema);
    else schemas.push(schema);
  }

  return (
    <Helmet>
      <html lang="de" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta
        name="robots"
        content={
          noindex
            ? 'noindex, nofollow'
            : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        }
      />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* AI-Crawler explizit erlauben (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) */}
      <meta name="GPTBot" content="index, follow" />
      <meta name="ClaudeBot" content="index, follow" />
      <meta name="PerplexityBot" content="index, follow" />
      <meta name="Google-Extended" content="index, follow" />

      <link rel="canonical" href={url} />
      <link rel="alternate" hrefLang="de" href={url} />
      <link rel="alternate" hrefLang="x-default" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:locale" content="de_DE" />
      <meta property="og:site_name" content="DRVN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={title} />

      {/* Schema-Stack — als JSON-LD */}
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(s)}</script>
      ))}
    </Helmet>
  );
}

// ─── Helper-Builder für FAQ + HowTo (importierbar in Pages) ──────────────────

/**
 * FAQPage-Schema. Kritisch für Google AI Overviews + ChatGPT-Citations.
 * Jede Q&A wird direkt im Suchergebnis als Rich-Snippet angezeigt.
 */
export function buildFaqSchema(faqs: { frage: string; antwort: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.frage,
      acceptedAnswer: { '@type': 'Answer', text: f.antwort },
    })),
  };
}

/**
 * HowTo-Schema — z.B. "Wie startet man mit ServeFlow?"
 * AIs nutzen das als Step-by-Step-Antwort.
 */
export function buildHowToSchema({
  name,
  description,
  steps,
  totalTime,
}: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
  totalTime?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    ...(totalTime ? { totalTime } : {}),
    step: steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}

/**
 * Aggregate-Rating für SoftwareApplication / Service.
 * Wichtig für Star-Snippets in Google + AI-Antworten.
 */
export function buildRating(value: number, count: number) {
  return {
    '@type': 'AggregateRating',
    ratingValue: value,
    reviewCount: count,
    bestRating: 5,
    worstRating: 1,
  };
}
