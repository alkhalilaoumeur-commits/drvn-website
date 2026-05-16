import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ArrowRight, Check, Plus, Minus, QrCode, CalendarDays, BarChart3 } from 'lucide-react'
import { Container } from '../components/Container'
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
  return (
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

          {/* Main screenshot — full width, browser frame */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="rounded-t-xl overflow-hidden border border-border border-b-0"
              style={{ boxShadow: '0 -20px 60px rgba(0,0,0,0.12)' }}
            >
              <div className="flex items-center gap-2 px-4 py-3 bg-elevated border-b border-border">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                  <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                </div>
                <div className="flex-1 flex justify-center">
                  <span className="font-mono text-xs text-muted bg-surface border border-border px-4 py-1 rounded-md">
                    app.serve-flow.org/bestellungen
                  </span>
                </div>
              </div>
              <img
                src="/screenshots/bestellungen.png"
                alt="ServeFlow Bestellungen — Live Übersicht"
                className="w-full block"
              />
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ════════════════════════════════════════════
          3 FEATURES mit echten Screenshots
          ════════════════════════════════════════════ */}
      <section className="border-t border-border py-20 md:py-28 bg-surface">
        <Container>
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            className="text-center mb-16"
          >
            <p className="font-mono text-xs text-muted uppercase tracking-[0.14em] mb-3">Funktionen</p>
            <h2 className="font-sans font-bold tracking-[-0.03em] text-primary"
              style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)' }}>
              Drei Werkzeuge. Ein System.
            </h2>
          </motion.div>

          <div className="space-y-20">
            {/* Feature 1 — Bestellungen */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={viewport}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <div className="inline-flex items-center gap-2.5 bg-signal/10 border border-signal/25
                  text-signal rounded-lg px-3.5 py-2 mb-6">
                  <QrCode className="w-4 h-4" />
                  <span className="font-mono text-xs uppercase tracking-[0.1em]">QR-Bestellung</span>
                </div>
                <h3 className="font-sans font-bold text-2xl text-primary mb-4 tracking-tight">
                  Gäste bestellen direkt vom Tisch. Kein Kellner nötig.
                </h3>
                <p className="text-secondary leading-[1.7] mb-6">
                  QR-Code am Tisch scannen, Karte im Browser öffnen, bestellen — direkt in die Küche.
                  Keine App, keine Anmeldung, funktioniert auf jedem Smartphone.
                </p>
                <ul className="space-y-2.5">
                  {['Browser-basiert — keine App', 'Mehrsprachig: DE / EN / TR', 'Live-Sync mit der Küche'].map(f => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-secondary">
                      <Check className="w-4 h-4 text-signal flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl overflow-hidden border border-border"
                style={{ boxShadow: '0 20px 50px rgba(0,0,0,0.12)' }}>
                <img src="/screenshots/speisekarte.png" alt="ServeFlow Speisekarte" className="w-full" />
              </div>
            </motion.div>

            {/* Feature 2 — Reservierungen */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={viewport}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className="lg:order-2">
                <div className="inline-flex items-center gap-2.5 bg-signal/10 border border-signal/25
                  text-signal rounded-lg px-3.5 py-2 mb-6">
                  <CalendarDays className="w-4 h-4" />
                  <span className="font-mono text-xs uppercase tracking-[0.1em]">Reservierungen</span>
                </div>
                <h3 className="font-sans font-bold text-2xl text-primary mb-4 tracking-tight">
                  Online buchen — über die Website oder WhatsApp.
                </h3>
                <p className="text-secondary leading-[1.7] mb-6">
                  Gäste reservieren wann sie wollen. Automatische Bestätigung, 2h-Erinnerung,
                  No-Show-Handling. Kein Telefonat nötig.
                </p>
                <ul className="space-y-2.5">
                  {['Web-Widget + WhatsApp Business', 'Automatische E-Mail-Bestätigung', 'Kalender-Export'].map(f => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-secondary">
                      <Check className="w-4 h-4 text-signal flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:order-1 flex justify-center">
                <div className="w-[320px] rounded-2xl overflow-hidden border border-border"
                  style={{ boxShadow: '0 20px 50px rgba(0,0,0,0.12)' }}>
                  <img src="/screenshots/buchen.png" alt="ServeFlow Reservierung" className="w-full" />
                </div>
              </div>
            </motion.div>

            {/* Feature 3 — Dashboard */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={viewport}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <div className="inline-flex items-center gap-2.5 bg-signal/10 border border-signal/25
                  text-signal rounded-lg px-3.5 py-2 mb-6">
                  <BarChart3 className="w-4 h-4" />
                  <span className="font-mono text-xs uppercase tracking-[0.1em]">Dashboard</span>
                </div>
                <h3 className="font-sans font-bold text-2xl text-primary mb-4 tracking-tight">
                  Alles auf einen Blick — von überall erreichbar.
                </h3>
                <p className="text-secondary leading-[1.7] mb-6">
                  Laufende Bestellungen, Tagesauslastung, Umsatz, Speisekarte, Mitarbeiter —
                  komplett in einem Dashboard. Läuft auf Tablet, Desktop und Smartphone.
                </p>
                <ul className="space-y-2.5">
                  {['Live-Bestellungen in Echtzeit', 'Umsatz & Statistiken', 'Speisekarte selbst bearbeiten'].map(f => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-secondary">
                      <Check className="w-4 h-4 text-signal flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl overflow-hidden border border-border"
                style={{ boxShadow: '0 20px 50px rgba(0,0,0,0.12)' }}>
                <img src="/screenshots/dashboard.png" alt="ServeFlow Dashboard" className="w-full" />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

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
