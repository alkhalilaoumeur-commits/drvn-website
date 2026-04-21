// DRVN Brand Constants
// Quelle: ~/vault/agency/intern/brand-identity.md

export const BRAND = {
  name: 'DRVN',
  tagline: 'Ihr Partner für digitale Lösungen',
  claim: 'Wir entwickeln branchenspezifische Software, die Prozesse automatisiert und Arbeit erleichtert.',
  email: 'kontakt@drvnautomatisations.com',
  telefon: '+49 XXX XXXXXXX', // TODO: echte Nummer
} as const;

export const NAVIGATION = [
  { label: 'Startseite', href: '/' },
  { label: 'Leistungen', href: '/leistungen' },
  { label: 'Branchen', href: '/branchen' },
  { label: 'Über uns', href: '/ueber-uns' },
  { label: 'Kontakt', href: '/kontakt' },
] as const;

export const LEISTUNGEN = [
  {
    title: 'SaaS-Produkte',
    beschreibung: 'Fertige Branchenlösungen, sofort einsetzbar — von der Bestellverwaltung bis zur Personalplanung.',
    icon: 'Layers',
  },
  {
    title: 'Web- & Mobile-Apps',
    beschreibung: 'Individuelle Anwendungen für Ihr Unternehmen — responsiv, schnell und benutzerfreundlich.',
    icon: 'Smartphone',
  },
  {
    title: 'Prozessautomatisierung',
    beschreibung: 'Wiederkehrende Aufgaben automatisieren — damit Sie sich auf Ihr Kerngeschäft konzentrieren können.',
    icon: 'Zap',
  },
  {
    title: 'Beratung & Support',
    beschreibung: 'Von der Idee bis zum laufenden Betrieb — aktiver Kundensupport und persönliche Betreuung.',
    icon: 'Headphones',
  },
] as const;

export const BRANCHEN = [
  {
    title: 'Gastronomie',
    beschreibung: 'Bestellsystem, Tischverwaltung, Reservierungen, Personalplanung — alles in einer App.',
    status: 'In Entwicklung',
    icon: 'UtensilsCrossed',
  },
  {
    title: 'Handwerk & Bau',
    beschreibung: 'Auftragsmanagement, Zeiterfassung, Kundenverwaltung für Handwerksbetriebe.',
    status: 'Geplant',
    icon: 'Hammer',
  },
  {
    title: 'Beauty & Kosmetik',
    beschreibung: 'Terminbuchung, Kundenkartei, Produktverwaltung für Salons und Studios.',
    status: 'Geplant',
    icon: 'Sparkles',
  },
  {
    title: 'Fitness & Wellness',
    beschreibung: 'Mitgliederverwaltung, Kursplanung, Trainingspläne für Studios und Trainer.',
    status: 'Geplant',
    icon: 'Dumbbell',
  },
  {
    title: 'Hotellerie',
    beschreibung: 'Reservierungen, Check-in/out, Housekeeping, Gästemanagement.',
    status: 'Geplant',
    icon: 'Building2',
  },
  {
    title: 'Kundensupport',
    beschreibung: 'Anruf- und WhatsApp-Management, Ticketsystem für Kleinunternehmer.',
    status: 'Geplant',
    icon: 'MessageCircle',
  },
] as const;
