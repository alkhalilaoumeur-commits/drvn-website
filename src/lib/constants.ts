// ============================================================
// drvn Brand & Navigation Constants
// Quelle: ~/vault/agency/intern/brand-identity.md
// ============================================================

export const BRAND = {
  name: 'drvn',
  nameLegal: 'DRVN',
  tagline: 'Wir bauen Dinge die funktionieren.',
  claim: 'drvn entwickelt digitale Produkte, Websites und Software für Unternehmen im DACH-Raum die wachsen wollen.',
  email: 'kontakt@drvnautomatisations.com',
  telefon: '+49 176 20581564',
  ort: 'Stuttgart, Deutschland',
  domain: 'drvnautomatisations.com',
  jahr: 'Seit 2024',
} as const;

// ── Navigation (Spec-Reihenfolge)
export const NAVIGATION = [
  { label: 'ServeFlow',     href: '/serveflow' },
  { label: 'Web',           href: '/web' },
  { label: 'Ventures',      href: '/ventures' },
  { label: 'News',          href: '/news' },
] as const;

// ── Drei Bereiche auf Homepage
export const BEREICHE = [
  {
    title: 'ServeFlow',
    badge: 'SaaS Produkt',
    icon: 'QrCode',
    text: 'QR-Code Bestellung, Reservierungsmanagement und Admin-Dashboard für Restaurants.',
    cta: 'Entdecken',
    href: '/serveflow',
    highlight: true,
  },
  {
    title: 'Webentwicklung',
    badge: 'Service',
    icon: 'Code2',
    text: 'Maßgeschneiderte Websites und Web-Apps. Konzept, Design, Code — alles aus einer Hand.',
    cta: 'Mehr erfahren',
    href: '/web',
    highlight: false,
  },
  {
    title: 'Ventures',
    badge: 'Selektiv',
    icon: 'Zap',
    text: 'Strategische Projekte und Kooperationen für Unternehmen mit spezifischen Anforderungen.',
    cta: 'Anfrage stellen',
    href: '/ventures',
    highlight: false,
  },
] as const;

// ── Differenzierung Stat-Blocks
export const DIFF_STATS = [
  { value: '100%',   label: 'Code Ownership',   text: 'Du bekommst alles. Quellcode, Deployments, Doku.' },
  { value: 'Direkt', label: 'Kein Agentur-Filter', text: 'Kein Account-Manager. Immer der Entwickler.' },
  { value: 'DACH',   label: 'Markt-Fokus',      text: 'Deutschland, Österreich, Schweiz. DSGVO first.' },
  { value: '< 48h',  label: 'Antwortzeit',      text: 'Erstantwort auf jede Anfrage. Verbindlich.' },
] as const;

// ── ServeFlow Pricing
export const PRICING = [
  {
    name: 'Starter',
    price: 29,
    tagline: 'Für kleine Restaurants & Cafés',
    features: [
      'QR-Code Bestellsystem',
      'Bis zu 20 Tische',
      'Bestellungen in Echtzeit',
      'E-Mail Support',
    ],
    highlighted: false,
    cta: 'Kostenlos testen',
  },
  {
    name: 'Pro',
    price: 59,
    tagline: 'Für etablierte Restaurants',
    features: [
      'Alles aus Starter',
      'Unbegrenzte Tische',
      'Reservierungssystem',
      'Personalverwaltung',
      'Inventur & Schichtplanung',
      'Priority Support',
    ],
    highlighted: true,
    cta: 'Kostenlos testen',
  },
  {
    name: 'Business',
    price: 99,
    tagline: 'Für mehrere Standorte',
    features: [
      'Alles aus Pro',
      'Multi-Standort-Verwaltung',
      'Eigenes Branding',
      'API-Zugang',
      'Persönlicher Account-Manager',
    ],
    highlighted: false,
    cta: 'Kostenlos testen',
  },
] as const;

// ── ServeFlow FAQ
export const SERVEFLOW_FAQ = [
  {
    frage: 'Brauchen meine Gäste eine App?',
    antwort: 'Nein. ServeFlow läuft komplett im Browser. QR-Code scannen, bestellen, fertig. Funktioniert auf jedem Smartphone der letzten 7 Jahre.',
  },
  {
    frage: 'Wie lange dauert das Setup?',
    antwort: 'Etwa 15 Minuten. Du erstellst dein Restaurant-Profil, lädst die Speisekarte hoch und druckst QR-Codes aus. Wir haben Demo-Daten zum Üben.',
  },
  {
    frage: 'Ist ServeFlow DSGVO-konform?',
    antwort: 'Ja. Server stehen in Deutschland (Hetzner Frankfurt), Auftragsverarbeitungsvertrag inklusive, keine Tracking-Cookies, alle Daten in der EU.',
  },
  {
    frage: 'Kann ich das Menü selbst bearbeiten?',
    antwort: 'Selbstverständlich. Du kannst Artikel jederzeit hinzufügen, Preise ändern oder einzelne Gerichte ausverkaufen — alles direkt aus dem Dashboard.',
  },
  {
    frage: 'Was passiert wenn ich kündige?',
    antwort: 'Monatlich kündbar. Du behältst Zugriff bis zum Monatsende, danach exportieren wir deine Daten als CSV/PDF. Kein Lock-In.',
  },
  {
    frage: 'Gibt es einen Support?',
    antwort: 'Ja, per E-Mail und im Pro/Business-Plan auch per WhatsApp und Telefon. Antwortzeit unter 4 Stunden an Werktagen.',
  },
] as const;

// ── Web-Services
export const WEB_SERVICES = [
  { title: 'Landing Pages',        icon: 'Layout',     text: 'Conversion-fokussierte Single-Page-Sites mit Lighthouse-Score > 95.' },
  { title: 'Corporate Websites',   icon: 'Globe',      text: 'Mehrsprachige Unternehmens-Webseiten mit CMS und SEO-Basis.' },
  { title: 'E-Commerce',           icon: 'ShoppingBag',text: 'Shopify-Stores oder Headless-Lösungen mit Stripe-Anbindung.' },
  { title: 'Web-Apps & SaaS',      icon: 'Database',   text: 'Custom-Software: Auth, Datenbank, Dashboards, Stripe-Subscriptions.' },
  { title: 'DSGVO & DE-Konformität', icon: 'Shield',   text: 'Impressum, Datenschutz, Cookie-Banner, AVV — alles legal sauber.' },
  { title: 'Wartung & Support',    icon: 'Wrench',     text: 'Updates, Monitoring, schnelle Reaktion auf Bugs. Monatlich kündbar.' },
] as const;

// ── Web-Prozess
export const WEB_PROCESS = [
  { num: '01', title: 'Briefing',    text: 'Verstehen was du brauchst. Ziele, Zielgruppe, Konkurrenz, Constraints.' },
  { num: '02', title: 'Konzept',     text: 'Design & Architektur. Wireframes, Tech-Stack-Auswahl, Sitemap.' },
  { num: '03', title: 'Entwicklung', text: 'Sauberer Code. Iterativ. Du siehst Fortschritt jede Woche.' },
  { num: '04', title: 'Launch',      text: 'Deployment + vollständige Übergabe. Du bekommst Zugang zu allem.' },
] as const;

// ── Tech-Stack (Web Page)
export const WEB_STACK = [
  'React', 'TypeScript', 'Next.js', 'Tailwind CSS',
  'Node.js', 'PostgreSQL', 'Vercel', 'Prisma',
  'Vite', 'Stripe', 'Supabase', 'Astro',
] as const;

// ── News-Einträge
export const NEWS = [
  {
    datum: 'Mai 2025',
    kategorie: 'ServeFlow',
    title: 'ServeFlow 1.0 — Jetzt live',
    text: 'Nach 6 Monaten Entwicklung ist ServeFlow offiziell verfügbar. QR-Bestellung, Reservierungen und Dashboard für alle Restaurants im DACH-Raum.',
  },
  {
    datum: 'Juni 2025',
    kategorie: 'ServeFlow',
    title: 'Neue Reservierungsfunktionen',
    text: 'Multi-Channel-Bestätigung via WhatsApp und E-Mail, automatisches No-Show-Handling und Tischplan in Echtzeit.',
  },
  {
    datum: 'August 2025',
    kategorie: 'drvn',
    title: 'drvn nimmt Ventures-Anfragen an',
    text: 'Wir öffnen einen begrenzten Slot für individuelle Software-Projekte. Strategische Partnerschaften statt Standard-Beratung.',
  },
  {
    datum: 'September 2025',
    kategorie: 'Web',
    title: 'Neue Web-Kapazitäten ab Herbst',
    text: 'Ab Q4 nehmen wir zusätzliche Web-Projekte an. Fokus auf DACH-Mittelstand, schnelle Time-to-Market.',
  },
  {
    datum: 'Oktober 2025',
    kategorie: 'ServeFlow',
    title: 'ServeFlow Pricing Update',
    text: 'Wir passen die Tarife transparent an. Bestandskunden behalten ihren Preis. Pro-Plan bekommt zwei zusätzliche Features.',
  },
  {
    datum: 'November 2025',
    kategorie: 'drvn',
    title: 'Roadmap 2026 — Was kommt als nächstes',
    text: 'Branchen-Expansion, WhatsApp-Integration, ServeFlow-Loyalty und mehr — die komplette Roadmap auf einen Blick.',
  },
] as const;

// ── Roadmap-Liste
export const ROADMAP = [
  { quartal: 'Q1 2026', status: 'In Entwicklung', title: 'ServeFlow WhatsApp-Integration', text: 'Reservierungen + Bestellungen direkt via WhatsApp Business API.' },
  { quartal: 'Q2 2026', status: 'Geplant',        title: 'ServeFlow Loyalty-Programm',     text: 'Punktesystem, Stamp-Cards, Rabattcodes für Stammgäste.' },
  { quartal: 'Q3 2026', status: 'Geplant',        title: 'drvn Expansion: Handwerk',       text: 'HandBase — Auftrags- und Zeitmanagement für Handwerksbetriebe.' },
  { quartal: '2026+',   status: 'Idee',           title: 'ServeFlow internationaler Rollout', text: 'Mehrsprachige Version (EN, FR, IT), EU-weiter Markteintritt.' },
] as const;

// ── Trust-Strip Items
export const TRUST_STRIP = [
  'Stuttgart · Deutschland',
  'DACH-Markt',
  'Seit 2024',
  'DSGVO-konform',
] as const;
