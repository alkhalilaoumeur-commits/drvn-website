import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowUpRight, ArrowRight, Check, Plus, Minus,
  QrCode, CalendarDays, BarChart3,
  Users, Bell, Star, MessageSquare, Package, ChevronRight, MapPin,
} from 'lucide-react'
import { ContainerScroll } from '../components/ui/ContainerScroll'
import { AppScreenshotCarousel } from '../components/ui/AppScreenshotCarousel'
import { Container } from '../components/Container'
import SEO, { buildFaqSchema } from '../components/SEO'
import { SERVEFLOW_FAQ } from '../lib/constants'
import { fadeUp, viewport, ease } from '../lib/motion'

const PRICING = [
  {
    name: 'Starter', price: 29, recommended: false,
    note: 'Für kleine Betriebe',
    features: ['QR-Bestellung am Tisch', 'Bis zu 10 Tische', 'Web-Reservierungen', 'Basis-Dashboard', 'E-Mail Support'],
  },
  {
    name: 'Pro', price: 59, recommended: true,
    note: 'Für etablierte Restaurants',
    features: ['Alles aus Starter', 'Unbegrenzte Tische', 'Web + WhatsApp Reservierungen', 'Vollständiges Dashboard', 'E-Mail & Chat Support'],
  },
  {
    name: 'Studio', price: 99, recommended: false,
    note: 'Für mehrere Standorte',
    features: ['Alles aus Pro', 'Multi-Standort', 'API-Zugang', 'Eigenes Branding', 'Priority Support'],
  },
]

export default function ServeflowPage() {
  const faqSchema = buildFaqSchema(SERVEFLOW_FAQ as unknown as {frage:string;antwort:string}[])
  return (
    <>
      <SEO
        title="ServeFlow — Restaurant-Management-Software für Deutschland | drvn"
        description="ServeFlow: QR-Bestellung, Online-Reservierungen per Web & WhatsApp, Echtzeit-Dashboard. Für Restaurants im DACH-Raum. Ab 29 €/Monat, DSGVO-konform, Server in Deutschland."
        path="/serveflow"
        keywords="Restaurant Software, Restaurantsoftware, QR Bestellung Restaurant, Reservierungssystem Restaurant, Gastronomie Software Deutschland, Speisekarte digital, Restaurant Management DACH"
        schema={[faqSchema]}
      />
      <main>
      {/* ════════════════════════════════════════════
          HERO — Screenshot prominent
          ════════════════════════════════════════════ */}
      <section className="relative pt-24 pb-0 overflow-hidden">
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
                QR-Bestellung ohne App, Online-Reservierungen über Web und WhatsApp,
                und ein Echtzeit-Dashboard für den ganzen Betrieb. DSGVO-konform, Server in Deutschland.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-wrap gap-3"
              >
                <a
                  href="https://app.serve-flow.org"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-signal hover:bg-signalHover
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
                  { label: 'Restaurants', value: '14 aktiv' },
                  { label: 'Preis ab',    value: '29 €/Monat' },
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
    </>
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
    headline: 'Online buchen — Web oder WhatsApp.',
    text: 'Gäste reservieren wann sie wollen. Automatische Bestätigung, Erinnerung 2 Stunden vorher, No-Show-Handling. Kein Telefonat, kein manueller Eintrag.',
    screenshot: '/screenshots/reservierungen.png',
    screenshotAlt: 'ServeFlow Reservierungen — Übersicht',
    mobile: false,
    punkte: [
      'Web-Widget auf jede Seite einbettbar',
      'WhatsApp Business Integration',
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
    screenshot: '/screenshots/reservierungen.png',
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
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    icon: MessageSquare,
    headline: 'Reservierungen über WhatsApp.',
    text: 'Gäste schreiben eine WhatsApp, der Bot antwortet, fragt Datum und Personenzahl ab, und trägt die Reservierung automatisch ein. Der Gastronom sieht alles im Dashboard.',
    screenshot: '/screenshots/buchen-desktop.png',
    screenshotAlt: 'ServeFlow WhatsApp-Reservierung',
    mobile: false,
    punkte: [
      'WhatsApp Business API (offiziell)',
      'Automatische Antworten und Rückfragen',
      'Direkte Eintragung ins Reservierungssystem',
      'Bestätigung und Erinnerung per WA',
      'DSGVO-konform',
    ],
  },
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
  const current = FEATURE_TABS.find(t => t.id === active) ?? FEATURE_TABS[0]
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
