import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  schema?: object;
}

const BASE_URL = 'https://drvnautomatisations.com';
const DEFAULT_IMAGE = `${BASE_URL}/og-image.png`;

export default function SEO({ title, description, path = '', schema }: SEOProps) {
  const fullTitle = title.includes('DRVN') ? title : `${title} | DRVN`;
  const url = `${BASE_URL}${path}`;

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'DRVN',
    url: BASE_URL,
    email: 'kontakt@drvnautomatisations.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Egilolfstrasse 41',
      addressLocality: 'Stuttgart',
      postalCode: '70599',
      addressCountry: 'DE',
    },
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={DEFAULT_IMAGE} />
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
