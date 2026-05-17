import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
  description: string
  path?: string
  keywords?: string
  noindex?: boolean
  schema?: object | object[]
  ogImage?: string
}

const BASE_URL = 'https://drvnautomatisations.com'
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.svg`
const SITE_NAME = 'drvn'

const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness', 'ProfessionalService'],
  '@id': `${BASE_URL}/#organization`,
  name: 'drvn',
  alternateName: 'DRVN Automatisierungen',
  url: BASE_URL,
  logo: { '@type': 'ImageObject', url: `${BASE_URL}/favicon.svg` },
  image: DEFAULT_OG_IMAGE,
  description: 'drvn ist ein Software-Studio aus Stuttgart. Wir entwickeln ServeFlow (Restaurant-Software), Websites und digitale Produkte für Unternehmen im DACH-Raum.',
  email: 'kontakt@drvnautomatisations.com',
  telephone: '+4917620581564',
  priceRange: '€€',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Egilolfstrasse 41',
    addressLocality: 'Stuttgart',
    postalCode: '70599',
    addressCountry: 'DE',
    addressRegion: 'Baden-Württemberg',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 48.7758, longitude: 9.1829 },
  areaServed: [
    { '@type': 'Country', name: 'Deutschland' },
    { '@type': 'Country', name: 'Österreich' },
    { '@type': 'Country', name: 'Schweiz' },
  ],
  knowsLanguage: ['de', 'en'],
  foundingDate: '2024',
  founder: { '@type': 'Person', name: 'Al-Khalil Aoumeur' },
}

export default function SEO({
  title,
  description,
  path = '',
  keywords,
  noindex = false,
  schema,
  ogImage,
}: SEOProps) {
  const fullTitle = title.includes('drvn') ? title : `${title} | drvn`
  const url = `${BASE_URL}${path}`
  const image = ogImage || DEFAULT_OG_IMAGE

  const schemas: object[] = [ORG_SCHEMA]
  if (schema) {
    if (Array.isArray(schema)) schemas.push(...schema)
    else schemas.push(schema)
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

      <meta name="author" content="drvn" />
      <meta name="language" content="de" />

      <meta name="GPTBot" content="index, follow" />
      <meta name="ClaudeBot" content="index, follow" />
      <meta name="PerplexityBot" content="index, follow" />
      <meta name="Google-Extended" content="index, follow" />

      <link rel="canonical" href={url} />
      <link rel="alternate" hrefLang="de" href={url} />
      <link rel="alternate" hrefLang="x-default" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:locale" content="de_DE" />
      <meta property="og:site_name" content={SITE_NAME} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  )
}

export function buildFaqSchema(faqs: { frage: string; antwort: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.frage,
      acceptedAnswer: { '@type': 'Answer', text: f.antwort },
    })),
  }
}

export function buildSoftwareSchema(opts: {
  name: string
  description: string
  price: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: opts.name,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    description: opts.description,
    url: opts.url,
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: opts.price,
      priceCurrency: 'EUR',
      offerCount: 3,
    },
    provider: { '@id': 'https://drvnautomatisations.com/#organization' },
  }
}
