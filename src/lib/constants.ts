export const BRAND = {
  name:    'drvn',
  tagline: 'Werkstatt für digitale Produkte.',
  ort:     'Stuttgart, Deutschland.',
  email:   'kontakt@drvnautomatisations.com',
  tel:     '+49 176 20581564',
  version: 'v1.0',
} as const

export const NAV_LINKS = [
  { label: 'serveflow', href: '/serveflow' },
  { label: 'web',       href: '/web' },
  { label: 'ventures',  href: '/ventures' },
  { label: 'journal',   href: '/journal' },
] as const

export const WERKBANK = [
  {
    title:    'ServeFlow',
    tag:      'SaaS Produkt',
    href:     '/serveflow',
    text:     'QR-Bestellung, Reservierungen und Echtzeit-Dashboard für Restaurants im DACH-Raum.',
    meta:     'Seit 2025 · 1.0 · Live',
  },
  {
    title:    'Web',
    tag:      'Auftrag',
    href:     '/web',
    text:     'Websites und Webapplikationen für kleine und mittelständische Unternehmen. Konzept, Design und Code aus einer Hand.',
    meta:     'Ab 4.500 € · 4–8 Wochen',
  },
  {
    title:    'Ventures',
    tag:      'Selektiv',
    href:     '/ventures',
    text:     'Individuelle Softwareprojekte und längerfristige Kooperationen. Wir nehmen drei neue Projekte pro Jahr an.',
    meta:     '3 / Jahr · Anfrage erforderlich',
  },
] as const

export const JOURNAL_ENTRIES = [
  {
    datum:    '2026-05-04',
    tag:      'ServeFlow',
    title:    'WhatsApp-Bot in ServeFlow: erste Version live',
    lead:     'Wie wir die WhatsApp Business API für automatische Reservierungsbestätigungen anbinden — und warum wir uns gegen Twilio entschieden haben.',
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
    title:    'Reservierungen über QR-Code: Pilotphase abgeschlossen',
    lead:     'Nach zwei Monaten Pilotbetrieb in fünf Restaurants ziehen wir Bilanz. Was funktioniert hat, was nicht, und was als nächstes kommt.',
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
] as const
