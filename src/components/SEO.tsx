import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  schema?: object;
  keywords?: string;
  noindex?: boolean;
}

const BASE_URL = 'https://drvnautomatisations.com';
const DEFAULT_IMAGE = `${BASE_URL}/og-image.svg`;

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'DRVN',
  url: BASE_URL,
  logo: `${BASE_URL}/favicon.svg`,
  email: 'kontakt@drvnautomatisations.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Egilolfstrasse 41',
    addressLocality: 'Stuttgart',
    postalCode: '70599',
    addressCountry: 'DE',
  },
  areaServed: 'DE',
  knowsLanguage: 'de',
};

export default function SEO({ title, description, path = '', schema, keywords, noindex = false }: SEOProps) {
  const fullTitle = title.includes('DRVN') ? title : `${title} | DRVN`;
  const url = `${BASE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      {keywords && <meta name="keywords" content={keywords} />}

      <link rel="canonical" href={url} />
      <link rel="alternate" hrefLang="de" href={url} />
      <link rel="alternate" hrefLang="x-default" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={DEFAULT_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="de_DE" />
      <meta property="og:site_name" content="DRVN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={DEFAULT_IMAGE} />

      {/* Schema: Organisation (global) */}
      <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>

      {/* Schema: Seiten-spezifisch */}
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  );
}
