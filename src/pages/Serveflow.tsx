import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowUpRight, ArrowRight, Check, Plus, Minus,
  QrCode, CalendarDays, BarChart3,
  Users, Bell, Star, Package, ChevronRight, MapPin,
} from 'lucide-react'
import { ContainerScroll } from '../components/ui/ContainerScroll'
import { AppScreenshotCarousel } from '../components/ui/AppScreenshotCarousel'
import { Container } from '../components/Container'
import SEO, { buildFaqSchema } from '../components/SEO'
import { SERVEFLOW_FAQ } from '../lib/constants'
import { fadeUp, viewport, ease } from '../lib/motion'

import { StickyCTA } from '../components/serveflow/StickyCTA'

const PRICING = [
  {
    name: 'Basis', price: 19, recommended: false,
    note: 'Für den Start',
    features: ['Dashboard & Bestellungen', 'Speisekarte verwalten', 'Tischplan & Reservierungen', 'Einstellungen', 'E-Mail-Support'],
  },
  {
    name: 'Standard', price: 39, recommended: true,
    note: 'Für den laufenden Betrieb',
    features: ['Alles aus Basis', 'Dienstplan & Mitarbeiter', 'Warteliste', 'Gäste & Bewertungen', 'E-Mail-Support'],
  },
  {
    name: 'Pro', price: 69, recommended: false,
    note: 'Für volle Auswertung',
    features: ['Alles aus Standard', 'Inventur', 'Statistiken & Auswertungen', 'Erlebnisse verkaufen', 'E-Mail-Support'],
  },
]

export default function ServeflowPage() {
  const faqSchema = buildFaqSchema(SERVEFLOW_FAQ as unknown as {frage:string;antwort:string}[])
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "ServeFlow",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web Browser",
    "offers": { "@type": "Offer", "price": "19", "priceCurrency": "EUR" },
    "description": "Restaurant-Management-System für den DACH-Markt mit QR-Bestellung, Online-Reservierungen und Echtzeit-Dashboard."
  }
  return (
    <>
      <SEO
        title="ServeFlow — Restaurant-Management-Software für Deutschland | drvn"
        description="ServeFlow: Das Restaurant-Management-System für den DACH-Markt. QR-Bestellung ohne App-Download, Online-Reservierungen, Echtzeit-Dashboard für Küche und Service. Ab 19 €/Monat, DSGVO-konform, 14 Tage kostenlos testen."
        path="/serveflow"
        keywords="Restaurant Software, Restaurantsoftware, QR Bestellung Restaurant, Reservierungssystem Restaurant, Gastronomie Software Deutschland, Speisekarte digital, Restaurant Management DACH"
        schema={[faqSchema, softwareSchema]}
      />
      <main>
      {/* ════════════════════════════════════════════
          HERO — Screenshot prominent
          ════════════════════════════════════════════ */}
      <section className="relative pt-20 sm:pt-24 pb-0 overflow-hidden" aria-label="ServeFlow Restaurant-Management-System">
        <div className="hero-grid" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px]
            bg-[radial-gradient(ellipse_at_center,rgba(232,74,28,0.09)_0%,transparent_65%)]" />
        </div>

        <Container className="relative z-10">
          {/* Headline + specs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 mb-12 items-start">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="mb-6"
              >
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full
                  border border-border bg-surface text-xs font-mono text-secondary uppercase tracking-[0.1em]">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                  SaaS · Gastronomie · Live
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="font-sans font-bold leading-[1.04] tracking-[-0.03em] text-primary mb-6"
                style={{ fontSize: 'clamp(2.5rem,5vw,4rem)' }}
              >
                Das Restaurant-Management-System für den DACH-Markt.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="text-lg text-secondary leading-[1.65] mb-8 max-w-[52ch]"
              >
                QR-Bestellung ohne App, Online-Reservierungen,
                und ein Echtzeit-Dashboard für den ganzen Betrieb. DSGVO-konform, Server in Deutschland.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <a
                  href="https://app.serve-flow.org"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-signal hover:bg-signalHover
                    text-white font-semibold px-6 py-3.5 rounded-lg transition-colors text-sm"
                >
                  Kostenlos testen <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href="#preise"
                  className="inline-flex items-center gap-2 bg-surface hover:bg-elevated
                    text-primary border border-border hover:border-borderHigh
                    font-semibold px-6 py-3.5 rounded-lg transition-colors text-sm"
                >
                  Preise ansehen <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-4 lg:col-start-9"
            >
              <div className="divide-y divide-border border border-border rounded-xl overflow-hidden">
                {[
                  { label: 'Version',     value: '1.0' },
                  { label: 'Live seit',   value: 'Mai 2025' },
                  { label: 'Status',       value: 'Jetzt verfügbar' },
                  { label: 'Preis ab',    value: '19 €/Monat' },
                  { label: 'DSGVO',       value: 'Ja, Server DE' },
                  { label: 'Vertrag',     value: 'Monatlich kündbar' },
                ].map((s) => (
                  <div key={s.label} className="flex justify-between px-4 py-3 bg-surface">
                    <span className="font-mono text-[10px] text-muted uppercase tracking-[0.08em]">{s.label}</span>
                    <span className="font-mono text-xs text-primary">{s.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </Container>
      </section>

      {/* ════════════════════════════════════════════
          FÜR WEN IST SERVEFLOW?
          ════════════════════════════════════════════ */}
      {/* ════ TRUST STATS BAR ════ */}
      <TrustBar />

      {/* ════ PROBLEM SECTION ════ */}
      <ProblemSection />

      {/* ════ WIE ES FUNKTIONIERT ════ */}
      <HowItWorks />

      {/* ════ FÜR WEN ════ */}
      <FuerWenSection />

      {/* ── 3D Scroll Animation Section ── */}
      <section className="overflow-hidden bg-surface">
        <ContainerScroll
          titleComponent={
            <div className="space-y-3">
              <h2 className="font-sans font-bold tracking-[-0.03em] text-primary"
                style={{ fontSize: 'clamp(1.8rem,3.5vw,2.8rem)' }}>
                Das vollständige{' '}
                <span className="font-serif font-normal italic text-signal">Restaurant-Dashboard.</span>
              </h2>
              <p className="text-secondary text-base max-w-[46ch] mx-auto leading-[1.65]">
                Echtzeit-Bestellungen, Tischplan, Speisekarte, Reservierungen, Statistiken —
                alles in einer Ansicht, von überall erreichbar.
              </p>
            </div>
          }
        >
          <AppScreenshotCarousel />
        </ContainerScroll>
      </section>

      {/* ════════════════════════════════════════════
          ALLE FEATURES — Tab-Navigation
          ════════════════════════════════════════════ */}
      <FeatureTabs />

      {/* ════════════════════════════════════════════
          PREISE
          ════════════════════════════════════════════ */}
      <section id="preise" className="border-t border-border py-20 md:py-28">
        <Container>
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            className="text-center mb-14"
          >
            <p className="font-mono text-xs text-muted uppercase tracking-[0.14em] mb-3">Preise</p>
            <h2 className="font-sans font-bold tracking-[-0.03em] text-primary mb-4"
              style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)' }}>
              Klare Preise. Keine Überraschungen.
            </h2>
            <p className="text-secondary max-w-[44ch] mx-auto">Monatlich kündbar. Alle Pläne zzgl. MwSt.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {PRICING.map((p) => (
              <motion.div
                key={p.name}
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={viewport}
                className={`relative rounded-xl p-7 flex flex-col ${
                  p.recommended
                    ? 'bg-signal/10 border border-signal/40 ring-1 ring-signal/20'
                    : 'bg-surface border border-border'
                }`}
              >
                {p.recommended && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-signal text-white
                    text-[10px] font-semibold uppercase tracking-[0.1em] px-3 py-1 rounded-full">
                    Empfohlen
                  </span>
                )}
                <div className="mb-6">
                  <p className="font-sans font-bold text-lg text-primary">{p.name}</p>
                  <p className="text-xs text-secondary mt-0.5">{p.note}</p>
                </div>
                <div className="mb-6 flex items-baseline gap-1.5">
                  <span className="font-sans font-bold text-3xl text-primary">{p.price}€</span>
                  <span className="text-xs text-muted">/Monat</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {p.features.map(f => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-secondary">
                      <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${p.recommended ? 'text-signal' : 'text-secondary'}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/kontakt"
                  className={`block text-center font-semibold text-sm py-3 rounded-lg transition-colors ${
                    p.recommended
                      ? 'bg-signal hover:bg-signalHover text-white'
                      : 'bg-elevated hover:bg-borderHigh text-primary border border-border'
                  }`}
                >
                  Jetzt starten
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ════ VERGLEICH ════ */}
      <ComparisonSection />

      {/* ════ FINAL CTA ════ */}
      <FinalCTA />

      {/* ════════════════════════════════════════════
          FAQ
          ════════════════════════════════════════════ */}
      <section className="border-t border-border py-20 md:py-28 bg-surface">
        <Container>
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            className="mb-12"
          >
            <p className="font-mono text-xs text-muted uppercase tracking-[0.14em] mb-3">FAQ</p>
            <h2 className="font-sans font-bold tracking-[-0.03em] text-primary"
              style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)' }}>
              Häufige Fragen.
            </h2>
          </motion.div>
          <div className="border-t border-border max-w-[72ch]">
            {SERVEFLOW_FAQ.map((f, i) => <FaqItem key={i} {...f} />)}
          </div>
        </Container>
      </section>

      </main>
      <StickyCTA />
    </>
  )
}

// ─────────────────────────────────────────────
// FÜR WEN IST SERVEFLOW?
// ─────────────────────────────────────────────

const FUER_WEN_CARDS = [
  {
    nr: '01',
    title: 'Einzelne Restaurants',
    text: 'Ob 20 oder 200 Plätze. Einmal einrichten, dauerhaft sparen.',
  },
  {
    nr: '02',
    title: 'Restaurants mit Lieferung',
    text: 'QR am Tisch für Dine-in, Widget auf der Website für Take-away.',
  },
  {
    nr: '03',
    title: 'Mehrere Standorte',
    text: 'Ein Account, alle Filialen. Speisekarten getrennt oder synchron.',
  },
  {
    nr: '04',
    title: 'Imbisse & Cafés',
    text: 'Auch ohne komplette Speisekarte sinnvoll: QR-Getränkekarte, Reservierungslink.',
  },
]

function FuerWenSection() {
  return (
    <section className="border-t border-border py-20 md:py-28 bg-bg">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={viewport}
          className="mb-14 md:mb-16"
        >
          <p className="font-mono text-xs text-muted uppercase tracking-[0.14em] mb-3">
            Passt zu dir wenn
          </p>
          <h2
            className="font-sans font-bold tracking-[-0.03em] text-primary max-w-[24ch]"
            style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)' }}
          >
            Für jede Art von{' '}
            <span className="font-serif font-normal italic text-signal">
              Gastronomie.
            </span>
          </h2>
        </motion.div>

        <div className="flex flex-col">
          {FUER_WEN_CARDS.map((card, i) => (
            <motion.div
              key={card.nr}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-10 py-8 border-b border-border last:border-b-0"
            >
              <span
                className="font-mono font-bold text-muted leading-none select-none flex-shrink-0 w-auto sm:w-20"
                style={{ fontSize: 'clamp(2.5rem,6vw,4rem)' }}
              >
                {card.nr}
              </span>
              <div className="flex flex-col justify-center">
                <h3
                  className="font-sans font-semibold text-primary mb-2 tracking-[-0.02em]"
                  style={{ fontSize: 'clamp(1rem,1.8vw,1.25rem)' }}
                >
                  {card.title}
                </h3>
                <p className="text-secondary text-sm sm:text-base leading-[1.7] max-w-[48ch]">
                  {card.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

const FEATURE_TABS = [
  {
    id: 'bestellungen',
    label: 'QR-Bestellung',
    icon: QrCode,
    headline: 'Gäste bestellen direkt vom Tisch.',
    text: 'QR-Code scannen, Karte im Browser öffnen, bestellen — ohne App, ohne Anmeldung. Die Bestellung landet direkt in der Küche. Kein Kellner als Zwischenschritt.',
    screenshot: '/screenshots/speisekarte.png',
    screenshotAlt: 'ServeFlow Speisekarte — Mobile Ansicht',
    mobile: true,
    punkte: [
      'Browser-basiert — kein App-Download nötig',
      'Mehrsprachig: Deutsch, Englisch, Türkisch',
      'Live-Sync mit der Küche in Echtzeit',
      'Extras, Varianten und Allergene',
      'Tisch-Erkennung via QR-Code automatisch',
    ],
  },
  {
    id: 'reservierungen',
    label: 'Reservierungen',
    icon: CalendarDays,
    headline: 'Online buchen — rund um die Uhr.',
    text: 'Gäste reservieren wann sie wollen. Automatische Bestätigung, Erinnerung 2 Stunden vorher, No-Show-Handling. Kein Telefonat, kein manueller Eintrag.',
    screenshot: '/screenshots/reservierungen.png',
    screenshotAlt: 'ServeFlow Reservierungen — Übersicht',
    mobile: false,
    punkte: [
      'Web-Widget auf jede Seite einbettbar',
      'Link direkt an Gäste schickbar.',
      'Automatische E-Mail-Bestätigung',
      '2h-Erinnerung vor dem Termin',
      'No-Show-Handling mit Abfrage',
    ],
  },
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: BarChart3,
    headline: 'Alles auf einen Blick.',
    text: 'Laufende Bestellungen, Tischauslastung, Umsatz — komplett in einem Dashboard. Läuft auf Tablet, Desktop und Smartphone. Von überall erreichbar.',
    screenshot: '/screenshots/dashboard.png',
    screenshotAlt: 'ServeFlow Dashboard — Hauptansicht',
    mobile: false,
    punkte: [
      'Live-Bestellungen in Echtzeit',
      'Tagesauslastung und offene Tische',
      'Umsatz nach Stunde / Tag / Monat',
      'Speisekarte direkt bearbeiten',
      'Mehrere Standorte verwaltbar',
    ],
  },
  {
    id: 'tischplan',
    label: 'Tischplan',
    icon: MapPin,
    headline: 'Euer Restaurant digital abgebildet.',
    text: 'Der Tischplan zeigt in Echtzeit, welcher Tisch besetzt ist, wie lange, und welche Bestellungen noch offen sind. Damit bleibt nichts liegen.',
    screenshot: '/screenshots/tischplan.png',
    screenshotAlt: 'ServeFlow Tischplan',
    mobile: false,
    punkte: [
      'Drag-and-drop Tischplan-Editor',
      'Echtzeit-Belegungsstatus',
      'Offene Bestellungen pro Tisch sichtbar',
      'Reservierungen direkt im Plan',
      'Mehrstöckige Layouts möglich',
    ],
  },
  {
    id: 'statistiken',
    label: 'Statistiken',
    icon: BarChart3,
    headline: 'Zahlen die weiterhelfen.',
    text: 'Welche Gerichte laufen am besten? Wann ist der Betrieb am vollsten? Welche Tische werden wie oft umgeschlagen? ServeFlow liefert die Antworten.',
    screenshot: '/screenshots/statistiken.png',
    screenshotAlt: 'ServeFlow Statistiken',
    mobile: false,
    punkte: [
      'Top-Gerichte nach Umsatz und Häufigkeit',
      'Stoßzeiten-Analyse nach Stunde',
      'Tischumschlag-Rate',
      'Vergleich Vorwoche / Vormonat',
      'CSV-Export für die Buchhaltung',
    ],
  },
  {
    id: 'mitarbeiter',
    label: 'Mitarbeiter',
    icon: Users,
    headline: 'Team verwalten, Schichten planen.',
    text: 'Mitarbeiter anlegen, Rollen vergeben, Schichtplan erstellen. Jeder Mitarbeiter sieht seinen eigenen Kalender und bekommt Benachrichtigungen direkt aufs Handy.',
    screenshot: '/screenshots/mitarbeiter.png',
    screenshotAlt: 'ServeFlow Mitarbeiter',
    mobile: false,
    punkte: [
      'Rollen: Manager, Küche, Service',
      'Schichtplan mit Wochenansicht',
      'Push-Benachrichtigungen bei neuen Bestellungen',
      'Individuelle Login-Zugänge pro Mitarbeiter',
      'Aktivitätsprotokoll',
    ],
  },
  {
    id: 'push',
    label: 'Push & Alerts',
    icon: Bell,
    headline: 'Keine Bestellung verpasst.',
    text: 'ServeFlow sendet Push-Benachrichtigungen bei neuen Bestellungen, Reservierungsänderungen und Schichtplan-Updates — auch ohne App.',
    screenshot: '/screenshots/bestellungen.png',
    screenshotAlt: 'ServeFlow Push-Benachrichtigungen',
    mobile: false,
    punkte: [
      'Web-Push ohne App-Installation',
      'Neue Bestellung → sofort auf dem Gerät',
      'Reservierungsbestätigung für Gäste',
      '1h-Erinnerung vor Schichtbeginn',
      'iOS und Android',
    ],
  },
  {
    id: 'bewertungen',
    label: 'Bewertungen',
    icon: Star,
    headline: 'Mehr Google-Bewertungen. Automatisch.',
    text: 'Nach jedem Besuch sendet ServeFlow automatisch eine Bewertungsanfrage. Bei 4 oder 5 Sternen wird direkt zu Google weitergeleitet. Interne Kritik bleibt intern.',
    screenshot: '/screenshots/buchen.png',
    screenshotAlt: 'ServeFlow Bewertungs-Flow',
    mobile: false,
    punkte: [
      'Automatische E-Mail nach dem Besuch',
      '4–5 Sterne → direkt zu Google',
      '1–3 Sterne → internes Feedback-Formular',
      'Kein manueller Aufwand',
      'DSGVO-konform',
    ],
  },
,
  {
    id: 'inventur',
    label: 'Inventur',
    icon: Package,
    headline: 'Lagerbestand im Blick.',
    text: 'Zutaten und Waren erfassen, Mindestbestände setzen, automatisch Alarm wenn etwas aufgebraucht wird. Weniger Lebensmittelverschwendung, weniger unerwartete Engpässe.',
    screenshot: '/screenshots/dashboard.png',
    screenshotAlt: 'ServeFlow Inventur',
    mobile: false,
    punkte: [
      'Zutaten mit Mindestbestand hinterlegen',
      'Alarm bei Unterschreitung',
      'Verbrauch automatisch tracken',
      'Manuelle Inventur-Eingabe',
      'Export für Bestelllisten',
    ],
  },
]

function FeatureTabs() {
  const [active, setActive] = useState('bestellungen')
  const current = FEATURE_TABS.find(t => t?.id === active) ?? FEATURE_TABS[0]
  if (!current) return null
  const Icon = current.icon

  return (
    <section className="border-t border-border py-20 md:py-28 bg-surface">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={viewport}
          className="mb-10"
        >
          <p className="font-mono text-xs text-muted uppercase tracking-[0.14em] mb-3">Alle Funktionen</p>
          <h2 className="font-sans font-bold tracking-[-0.03em] text-primary"
            style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)' }}>
            Ein System. Alles drin.
          </h2>
        </motion.div>

        {/* Tab-Leiste — scrollbar auf Mobile */}
        <div className="flex gap-1 overflow-x-auto pb-2 mb-10 scrollbar-none">
          {FEATURE_TABS.map(tab => {
            if (!tab) return null
            const TabIcon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium whitespace-nowrap
                  transition-colors flex-shrink-0 ${
                  active === tab.id
                    ? 'bg-signal text-white'
                    : 'bg-elevated text-secondary hover:text-primary border border-border'
                }`}
              >
                <TabIcon className="w-3.5 h-3.5" />
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Tab-Inhalt */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="inline-flex items-center gap-2.5 bg-signal/10 border border-signal/25
                text-signal rounded-lg px-3.5 py-2 mb-6">
                <Icon className="w-4 h-4" />
                <span className="font-mono text-xs uppercase tracking-[0.1em]">{current.label}</span>
              </div>
              <h3 className="font-sans font-bold text-2xl text-primary mb-4 tracking-tight">
                {current.headline}
              </h3>
              <p className="text-secondary leading-[1.7] mb-6">{current.text}</p>
              <ul className="space-y-2.5 mb-8">
                {current.punkte.map(p => (
                  <li key={p} className="flex items-center gap-2.5 text-sm text-secondary">
                    <Check className="w-4 h-4 text-signal flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href="https://app.serve-flow.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary
                  border-b border-primary pb-0.5 hover:text-signal hover:border-signal transition-colors group"
              >
                Kostenlos testen
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            <div className={`flex ${current.mobile ? 'justify-center' : ''}`}>
              {current.mobile ? (
                <div className="w-[300px] rounded-2xl overflow-hidden border border-border"
                  style={{ boxShadow: '0 20px 50px rgba(0,0,0,0.12)' }}>
                  <img src={current.screenshot} alt={current.screenshotAlt} className="w-full" />
                </div>
              ) : (
                <div className="rounded-xl overflow-hidden border border-border w-full"
                  style={{ boxShadow: '0 20px 50px rgba(0,0,0,0.12)' }}>
                  <img src={current.screenshot} alt={current.screenshotAlt} className="w-full" />
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  )
}

function FaqItem({ frage, antwort }: { frage: string; antwort: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(s => !s)}
        aria-expanded={open}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="font-sans font-semibold text-sm text-primary">{frage}</span>
        <span className="flex-shrink-0 text-muted">{open ? <Minus size={14} /> : <Plus size={14} />}</span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease }}
            style={{ overflow: 'hidden' }}
          >
            <p className="font-sans text-sm text-secondary leading-[1.7] pb-5">{antwort}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ─── Trust Stats Bar ─────────────────────────────────────────────────────────

function TrustBar() {
  return (
    <div className="border-t border-b border-border bg-surface py-4">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        <div className="hidden sm:flex items-center justify-between gap-4">
          {[
            { value: '15 Min', label: 'Setup-Zeit' },
            { value: '14 Tage', label: 'Kostenlos testen' },
            { value: '0 €',    label: 'Einrichtungsgebühr' },
            { value: 'DE',     label: 'DSGVO · Server in DE' },
            { value: 'Monatlich', label: 'Kündbar' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              {i > 0 && <div className="w-px h-5 bg-border" />}
              <div className="text-center">
                <p className="font-mono font-bold text-sm text-primary">{item.value}</p>
                <p className="font-mono text-[9px] text-muted uppercase tracking-[0.1em] whitespace-nowrap mt-0.5">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex sm:hidden items-center justify-between">
          {[
            { value: '0 €',   label: 'Setup' },
            { value: '14 T',  label: 'Kostenlos' },
            { value: 'DE',    label: 'Server DE' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              {i > 0 && <div className="w-px h-5 bg-border" />}
              <div className="text-center">
                <p className="font-mono font-bold text-sm text-primary">{item.value}</p>
                <p className="font-mono text-[9px] text-muted uppercase tracking-[0.1em] mt-0.5">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Problem Section ─────────────────────────────────────────────────────────

function ProblemSection() {
  const probleme = [
    { nr: '01', text: 'Tische doppelt belegt — weil das Reservierungsbuch unleserlich war.' },
    { nr: '02', text: 'Bestellungen vergessen — weil der Kellner zu viel auf einmal im Kopf hatte.' },
    { nr: '03', text: 'Mitarbeiter kommen falsch — weil der Schichtplan noch auf WhatsApp läuft.' },
  ]
  return (
    <section className="border-t border-border py-16 sm:py-24 bg-bg" aria-label="Problem: Chaos im Restaurant">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={viewport}>
            <p className="font-mono text-xs text-muted uppercase tracking-[0.14em] mb-4">Das kennt jeder</p>
            <h2 className="font-sans font-bold tracking-[-0.03em] text-primary mb-6" style={{ fontSize: 'clamp(1.75rem,3vw,2.6rem)' }}>
              Samstagabend. Volles Haus.{' '}
              <span className="font-serif font-normal italic text-signal">Und trotzdem Chaos.</span>
            </h2>
            <p className="text-secondary text-base leading-[1.7] max-w-[46ch]">
              Nicht weil du schlecht bist. Sondern weil du mit Werkzeugen arbeitest die für
              zehn Tische gebaut wurden — nicht für einen laufenden Betrieb.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={viewport}>
            {probleme.map((p, i) => (
              <motion.div key={p.nr} initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport} transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-5 py-5 border-b border-border last:border-0">
                <span className="font-mono text-[10px] text-muted uppercase tracking-[0.1em] pt-1 flex-shrink-0 w-6">{p.nr}</span>
                <p className="text-primary text-sm leading-[1.65]">{p.text}</p>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={viewport}
              transition={{ duration: 0.6, delay: 0.5, ease }} className="pt-6">
              <p className="font-mono text-xs text-signal uppercase tracking-[0.12em]">ServeFlow löst alle drei. Dauerhaft.</p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

// ─── HowItWorks ──────────────────────────────────────────────────────────────

const HOW_STEPS = [
  {
    number: '01', subline: 'Schritt 1', headline: 'Konto erstellen.',
    text: 'In 5 Minuten eingerichtet. Restaurant anlegen, QR-Codes generieren, Tische konfigurieren — der Rest läuft automatisch.',
    detail: { type: 'code' as const, label: 'setup.json', lines: ['restaurant_id: "abc123"', 'tische: 24', 'qr_codes: generiert ✓'] },
  },
  {
    number: '02', subline: 'Schritt 2', headline: 'System live schalten.',
    text: 'Speisekarte einpflegen, Reservierungsseite teilen. Gäste können sofort bestellen und reservieren — ohne App-Download.',
    detail: { type: 'card' as const, label: 'Status', value: 'Bereit für Gäste', accent: true },
  },
  {
    number: '03', subline: 'Schritt 3', headline: 'Entspannt arbeiten.',
    text: 'Bestellungen kommen direkt in der Küche an. Das Dashboard zeigt alles in Echtzeit. Keine Zettel, keine Irrtümer.',
    detail: { type: 'card' as const, label: 'Heute', value: 'Alles im Blick', accent: true },
  },
]

function HowItWorks() {
  return (
    <section className="border-t border-border py-20 md:py-28 bg-bg" aria-label="Wie es funktioniert">
      <Container>
        <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={viewport} className="mb-16">
          <p className="font-mono text-xs text-muted uppercase tracking-[0.14em] mb-3">Wie es funktioniert</p>
          <h2 className="font-sans font-bold tracking-[-0.03em] text-primary" style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)' }}>
            Drei Schritte.{' '}<span className="font-serif font-normal italic text-signal">Sofort einsatzbereit.</span>
          </h2>
        </motion.div>
        <div className="relative">
          <div className="absolute left-[1.65rem] md:left-[2.15rem] top-6 bottom-6 w-px bg-border" aria-hidden="true" />
          <div className="space-y-0">
            {HOW_STEPS.map((step, i) => (
              <motion.div key={step.number} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport} transition={{ duration: 0.6, delay: i * 0.14, ease: [0.22, 1, 0.36, 1] }}
                className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 pb-14 last:pb-0">
                <div className="flex gap-5 md:gap-7 items-start">
                  <div className="relative flex-shrink-0 z-10">
                    <div className="w-[3.3rem] md:w-[4.3rem] h-[3.3rem] md:h-[4.3rem] rounded-full bg-bg border border-border flex items-center justify-center">
                      <span className="font-mono font-bold text-signal" style={{ fontSize: 'clamp(0.9rem,2vw,1.15rem)' }}>{step.number}</span>
                    </div>
                  </div>
                  <div className="pt-2.5 md:pt-3.5">
                    <p className="font-mono text-[10px] text-muted uppercase tracking-[0.12em] mb-1.5">{step.subline}</p>
                    <h3 className="font-sans font-bold tracking-[-0.025em] text-primary" style={{ fontSize: 'clamp(1.25rem,2.2vw,1.7rem)' }}>{step.headline}</h3>
                  </div>
                </div>
                <div className="pl-[calc(3.3rem+1.25rem)] md:pl-0 flex flex-col gap-5 justify-center">
                  <p className="text-secondary text-sm sm:text-base leading-[1.72] max-w-[46ch]">{step.text}</p>
                  {step.detail.type === 'code' ? (
                    <div className="inline-flex flex-col rounded-lg overflow-hidden border border-border bg-elevated self-start max-w-[280px]">
                      <div className="flex items-center gap-2 px-3.5 py-2 border-b border-border bg-surface">
                        <span className="w-2 h-2 rounded-full bg-signal/50" />
                        <span className="font-mono text-[10px] text-muted uppercase tracking-[0.1em]">{step.detail.label}</span>
                      </div>
                      <div className="px-4 py-3 space-y-1">
                        {step.detail.lines?.map((l, li) => (
                          <p key={li} className="font-mono text-[11px] text-secondary">{l}</p>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="inline-flex items-center gap-3 rounded-lg border border-border bg-elevated px-4 py-3 self-start">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                      <div>
                        <p className="font-mono text-[10px] text-muted uppercase tracking-[0.08em]">{step.detail.label}</p>
                        <p className={`font-mono text-sm font-bold ${step.detail.accent ? 'text-signal' : 'text-primary'}`}>{step.detail.value}</p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

// ─── Comparison Section ──────────────────────────────────────────────────────

const COMPARISON_ROWS = [
  { merkmal: 'Reservierungen', vorher: 'Zettel, Anruf, Excel', nachher: 'Online, automatisch, 24/7' },
  { merkmal: 'Bestellungen', vorher: 'Handschriftlich, Irrtümer', nachher: 'QR-Code direkt in die Küche' },
  { merkmal: 'Schichtplan', vorher: 'Chaos, Anrufe', nachher: 'App, Benachrichtigungen, fertig' },
  { merkmal: 'Statistiken', vorher: 'Kein Überblick', nachher: 'Echtzeit-Dashboard' },
  { merkmal: 'Fehlerquellen', vorher: 'Hoch — menschlich', nachher: 'Minimal — systemgesteuert' },
]

function ComparisonSection() {
  return (
    <section className="border-t border-border py-20 md:py-28 bg-surface" aria-label="Vorher Nachher Vergleich">
      <Container>
        <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={viewport} className="mb-12 md:mb-16">
          <p className="font-mono text-xs text-muted uppercase tracking-[0.14em] mb-3">Vorher / Nachher</p>
          <h2 className="font-sans font-bold tracking-[-0.03em] text-primary" style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)' }}>Was sich ändert.</h2>
        </motion.div>
        <div className="border border-border rounded-xl overflow-hidden">
          <div className="grid grid-cols-[1fr_auto_1fr] sm:grid-cols-[1fr_160px_1fr] bg-elevated border-b border-border">
            <div className="px-3 sm:px-6 py-3 font-mono text-[10px] text-muted uppercase tracking-[0.12em] min-w-0">Vor ServeFlow</div>
            <div className="px-2 sm:px-4 py-3 font-mono text-[10px] text-muted uppercase tracking-[0.12em] text-center border-x border-border min-w-[56px]">Bereich</div>
            <div className="px-3 sm:px-6 py-3 font-mono text-[10px] text-signal uppercase tracking-[0.12em] text-right min-w-0">Mit ServeFlow</div>
          </div>
          {COMPARISON_ROWS.map((row, i) => (
            <motion.div key={row.merkmal} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport} transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-[1fr_auto_1fr] sm:grid-cols-[1fr_160px_1fr] border-b border-border last:border-b-0">
              <div className="px-3 sm:px-6 py-4 flex items-center min-w-0"><p className="text-sm text-muted leading-snug break-words">{row.vorher}</p></div>
              <div className="px-2 sm:px-4 py-4 flex items-center justify-center border-x border-border min-w-[56px]">
                <span className="font-mono text-[9px] sm:text-[10px] text-secondary uppercase tracking-[0.1em] text-center leading-tight">{row.merkmal}</span>
              </div>
              <div className="px-3 sm:px-6 py-4 flex items-center justify-end gap-2 min-w-0">
                <Check className="w-3.5 h-3.5 text-signal flex-shrink-0" />
                <p className="text-sm text-signal font-medium leading-snug text-right break-words">{row.nachher}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

// ─── Final CTA ────────────────────────────────────────────────────────────────

function FinalCTA() {
  return (
    <section className="border-t border-border py-20 sm:py-28 bg-surface overflow-hidden relative" aria-label="Jetzt kostenlos testen">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px]
          bg-[radial-gradient(ellipse_at_center,rgba(232,74,28,0.07)_0%,transparent_70%)]" />
      </div>
      <Container className="relative z-10 text-center">
        <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={viewport} className="max-w-[52ch] mx-auto">
          <p className="font-mono text-xs text-muted uppercase tracking-[0.14em] mb-4">Bereit loszulegen?</p>
          <h2 className="font-sans font-bold tracking-[-0.03em] text-primary mb-5" style={{ fontSize: 'clamp(1.9rem,3.5vw,3rem)' }}>
            14 Tage kostenlos.{' '}<span className="font-serif font-normal italic text-signal">Kein Risiko.</span>
          </h2>
          <p className="text-secondary text-base leading-[1.7] mb-8">
            Kein Abo, keine Kreditkarte, keine Einrichtungsgebühr. In 15 Minuten eingerichtet —
            und wenn es nichts für dich ist, löschst du den Account mit einem Klick.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <a href="https://app.serve-flow.org/registrieren" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-signal hover:bg-signalHover
                text-white font-semibold px-8 py-4 rounded-lg transition-colors text-sm w-full sm:w-auto">
              Kostenlos starten <ArrowUpRight className="w-4 h-4" />
            </a>
            <Link to="/kontakt"
              className="inline-flex items-center justify-center gap-2 bg-elevated hover:bg-borderHigh
                text-primary border border-border font-semibold px-8 py-4 rounded-lg transition-colors text-sm w-full sm:w-auto">
              Demo anfragen <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {['Keine Kreditkarte', 'DSGVO-konform', 'Server in Deutschland', 'Monatlich kündbar'].map(t => (
              <span key={t} className="flex items-center gap-1.5 text-xs text-muted font-mono">
                <Check className="w-3 h-3 text-signal flex-shrink-0" />{t}
              </span>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
