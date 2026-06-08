export const BRAND = {
  name:       'drvn',
  tagline:    'Werkstatt für digitale Produkte.',
  ort:        'Stuttgart, Deutschland.',
  email:      'kontakt@drvnautomatisations.com',
  tel:        '+49 176 20581564',
  version:    'v1.0',
  // TODO: Ersetze mit echtem Calendly-Link nach Account-Erstellung
  calendlyUrl: 'https://calendly.com/ilias-drvn/30min',
} as const

export const NAV_LINKS = [
  { label: 'serveflow',             href: '/serveflow' },
  { label: 'automatisierungen',     href: '/automatisierungen' },
  { label: 'bookbase',              href: '/bookbase' },
  { label: 'web',                   href: '/web' },
  { label: 'individuelle projekte', href: '/individuelle-projekte' },
  { label: 'journal',               href: '/journal' },
] as const

export const WERKBANK = [
  {
    title:    'ServeFlow',
    tag:      'SaaS · Gastronomie',
    href:     '/serveflow',
    text:     'QR-Bestellung, Online-Reservierungen und Echtzeit-Dashboard für Restaurants im DACH-Raum.',
    meta:     'Live seit Mai 2025 · Ab 19 €/Mo',
    badge:    'Live',
  },
  {
    title:    'BookBase',
    tag:      'SaaS · Beauty & Service',
    href:     '/web',
    text:     'Buchungssystem für Salons, Studios und Dienstleister. Online-Termine, Kundenkartei, Abrechnung.',
    meta:     'In Entwicklung · 2026',
    badge:    'Beta',
  },
  {
    title:    'Webseiten',
    tag:      'Agentur · Auftrag',
    href:     '/web',
    text:     'Professionelle Unternehmenswebseiten und Landingpages — schnell, modern, DSGVO-konform.',
    meta:     'ab 790 € · 1–5 Wochen',
    badge:    null,
  },
  {
    title:    'Automatisierungen',
    tag:      'Service · n8n',
    href:     '/automatisierungen',
    text:     'WhatsApp-Bots, E-Mail-Sequenzen, CRM-Integrationen. Manuelle Prozesse werden zu Workflows.',
    meta:     'Ab 790 € · Auf Anfrage',
    badge:    null,
  },
  {
    title:    'Individuelle Projekte',
    tag:      'Selektiv · Auftrag',
    href:     '/individuelle-projekte',
    text:     'Individuelle Softwareprojekte und längerfristige Partnerschaften. Maximal drei pro Jahr.',
    meta:     'Auf Anfrage · 3 / Jahr',
    badge:    null,
  },
] as const

export const JOURNAL_ENTRIES = [
  {
    datum:    '2026-05-04',
    tag:      'ServeFlow',
    title:    'Automatische Bewertungsanfragen: wie der Flow funktioniert',
    lead:     'Nach jedem Restaurantbesuch geht automatisch eine Bewertungsanfrage raus. 4–5 Sterne landen auf Google, 1–3 Sterne in einem internen Formular. Hier ist wie wir das gebaut haben.',
  },
  {
    datum:    '2026-04-12',
    tag:      'Studio',
    title:    'Drei offene Slots in den Ventures dieses Jahr',
    lead:     'Was wir 2026 vorhaben, welche Art von Projekten wir suchen, und warum wir keine vierte Kooperation annehmen.',
  },
  {
    datum:    '2026-03-08',
    tag:      'ServeFlow',
    title:    'QR-Bestellung am Tisch: warum es ohne App funktionieren muss',
    lead:     'Browser statt App-Download — die Entscheidung dahinter, welche Stolpersteine es gab und wie das Feature heute aufgebaut ist.',
  },
  {
    datum:    '2026-02-14',
    tag:      'Studio',
    title:    'Warum wir klein bleiben',
    lead:     'Kein Team, kein Overhead, kein Account-Manager zwischen Entwickler und Kunde. Eine Entscheidung, keine Einschränkung.',
  },
  {
    datum:    '2026-01-22',
    tag:      'Web',
    title:    'Lighthouse-Score 100: Was es kostet und wann es sich lohnt',
    lead:     'Performance-Optimierung in der Praxis — wann sie sinnvoll ist und wann sie Zeitverschwendung ist.',
  },
  {
    datum:    '2025-12-10',
    tag:      'ServeFlow',
    title:    'DSGVO und Restaurant-Software: der aktuelle Stand',
    lead:     'Welche Daten ServeFlow verarbeitet, wo sie liegen, wie lang wir sie behalten, und was das für euch bedeutet.',
  },
] as const

export const SERVEFLOW_FAQ = [
  {
    frage: 'Wie lange dauert die Einrichtung in unserem Restaurant?',
    antwort: 'Die technische Einrichtung dauert etwa 30 Minuten: Account anlegen, Speisekarte importieren (CSV oder manuell), QR-Codes drucken. Wir führen euch dabei — per Videocall oder per Video-Tutorial.',
  },
  {
    frage: 'Funktioniert die QR-Bestellung auch ohne Internet beim Gast?',
    antwort: 'Nein. ServeFlow läuft im Browser des Gastes — ein aktives Mobilnetz oder WLAN ist erforderlich. Für Restaurants ohne gutes WLAN empfehlen wir eine Aufstockung vor dem Einsatz.',
  },
  {
    frage: 'Können wir unsere bestehende Speisekarte importieren?',
    antwort: 'Ja. Import via CSV-Datei oder manuell über das Dashboard. Fotos, Allergene und Varianten (Größen, Extras) werden unterstützt.',
  },
  {
    frage: 'Was passiert wenn wir kündigen — bleiben die Daten?',
    antwort: 'Nach Kündigung habt ihr 30 Tage Zugriff auf euren Account und könnt alle Daten als CSV exportieren. Danach werden Daten gemäß unserer Datenschutzerklärung gelöscht.',
  },
  {
    frage: 'Wer betreibt die Server, wo liegen die Daten?',
    antwort: 'Server bei Hetzner in Frankfurt am Main, Deutschland. Alle Daten bleiben in der EU. Auftragsverarbeitungsvertrag inklusive.',
  },
  {
    frage: 'Was kostet eine individuelle Anpassung?',
    antwort: 'Kleinere Anpassungen (Farben, Logo) sind inklusive. Tiefgreifende Custom-Entwicklung wird separat nach Aufwand berechnet — fragt vorher an.',
  },
  {
    frage: 'Kann ich ServeFlow kostenlos testen?',
    antwort: 'Ja. 14 Tage kostenlos — ohne Kreditkarte, ohne Vertrag. Nach Ablauf wählt ihr euren Plan oder löscht den Account. Keine automatische Verlängerung.',
  },
  {
    frage: 'Funktioniert ServeFlow auch für Restaurants mit mehreren Standorten?',
    antwort: 'Mehrere Standorte sind in Planung — sprich uns vorher direkt an, wenn du das brauchst, dann klären wir die beste Lösung für dich.',
  },
] as const

export const WEB_REFERENZEN = [
  {
    name:     'Voss & Partner',
    typ:      'Wirtschaftskanzlei · München',
    url:      '/beispiel/kanzlei',
    text:     'Vollständige Kanzlei-Webseite mit Team-Profilen, Tätigkeitsfeldern und Mandanten-Bereich. Editorial-Stil mit serifer Typografie für Vertrauen und Autorität.',
    stack:    'React · TypeScript · Tailwind · Framer Motion',
    status:   'Vorschau',
  },
] as const
