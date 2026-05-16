import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Plus, Minus } from 'lucide-react'
import { Container } from '../components/Container'
import { Eyebrow } from '../components/Eyebrow'
import { SERVEFLOW_FAQ } from '../lib/constants'
import { fadeUp, viewport, ease } from '../lib/motion'

const SPECS = [
  { label: 'Version',   value: '1.0' },
  { label: 'Live seit', value: 'Mai 2025' },
  { label: 'Markt',     value: 'DACH' },
  { label: 'Preis ab',  value: '29 €/Monat' },
  { label: 'DSGVO',     value: 'Ja, Server DE' },
  { label: 'Vertrag',   value: 'Monatlich kündbar' },
]

const PRICING = [
  {
    name: 'Starter', price: 29, recommended: false,
    features: [
      { label: 'Bestellungen',   value: '100/Monat' },
      { label: 'Tische',         value: '10' },
      { label: 'Reservierungen', value: 'Web' },
      { label: 'Dashboard',      value: 'Basis' },
      { label: 'Support',        value: 'E-Mail' },
    ],
  },
  {
    name: 'Pro', price: 59, recommended: true,
    features: [
      { label: 'Bestellungen',   value: 'Unbegrenzt' },
      { label: 'Tische',         value: 'Unbegrenzt' },
      { label: 'Reservierungen', value: 'Web + WhatsApp' },
      { label: 'Dashboard',      value: 'Vollständig' },
      { label: 'Support',        value: 'E-Mail' },
    ],
  },
  {
    name: 'Studio', price: 99, recommended: false,
    features: [
      { label: 'Bestellungen',   value: 'Unbegrenzt' },
      { label: 'Tische',         value: 'Unbegrenzt' },
      { label: 'Reservierungen', value: 'Web + WhatsApp' },
      { label: 'Dashboard',      value: 'Vollständig + API' },
      { label: 'Support',        value: 'Priorität' },
    ],
  },
]

export default function ServeflowPage() {
  return (
    <main>
      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="pt-40 md:pt-56 pb-20 md:pb-28">
        <Container>
          <Eyebrow>Produkt · ServeFlow 1.0</Eyebrow>

          <motion.h1
            variants={fadeUp}
            initial="initial"
            animate="animate"
            className="font-sans font-light text-[clamp(2.75rem,6.5vw,5.25rem)] leading-[1.02] tracking-[-0.02em] text-ink mb-12 max-w-[18ch]"
          >
            Restaurants führen sich nicht selbst.{' '}
            Aber sie können sich besser{' '}
            <span className="font-serif italic text-signal">organisieren.</span>
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6">
            <motion.div
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.3 }}
              className="md:col-span-6"
            >
              <p className="font-sans text-lg text-secondary leading-[1.55] mb-4 max-w-[50ch]">
                ServeFlow ist ein digitales Bestell- und Reservierungssystem für Restaurants, Cafés und Bars im deutschsprachigen Raum.
              </p>
              <p className="font-sans text-lg text-secondary leading-[1.55] mb-8 max-w-[50ch]">
                QR-Bestellung am Tisch, Reservierungen über Web und WhatsApp, ein Dashboard für alles.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://app.serve-flow.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-ink text-paper px-5 py-3 text-sm font-medium hover:bg-ink/85 transition-colors"
                >
                  Demo anfordern <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href="#preise"
                  className="group inline-flex items-center gap-1.5 text-primary text-sm font-medium border-b border-ink pb-0.5 hover:border-signal hover:text-signal transition-colors"
                >
                  Preise ansehen <span className="font-mono group-hover:translate-x-0.5 transition-transform inline-block">→</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.45 }}
              className="md:col-span-5 md:col-start-8"
            >
              <div className="divide-y divide-hairline border-y border-hairline">
                {SPECS.map((s) => (
                  <div key={s.label} className="flex justify-between py-3">
                    <span className="font-mono text-xs text-muted uppercase tracking-[0.08em]">{s.label}</span>
                    <span className="font-mono text-xs text-ink tabular-nums">{s.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── KAPAZITÄTEN ────────────────────────────────────── */}
      <section className="border-t border-hairline py-24 md:py-28">
        <Container>
          <Eyebrow>Kapazitäten</Eyebrow>
          <motion.h2
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            className="font-sans font-light text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.15] tracking-[-0.015em] text-ink mb-16"
          >
            Drei Werkzeuge, die zusammenarbeiten.
          </motion.h2>

          <div className="space-y-0 divide-y divide-hairline border-t border-hairline">
            {/* Block 01: Bestellung */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={viewport}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 py-12 md:py-16"
            >
              <div>
                <span className="font-mono text-xs text-muted mb-4 block">01</span>
                <h3 className="font-sans font-medium text-xl tracking-tight text-ink mb-4">Bestellung am Tisch</h3>
                <p className="font-sans text-base text-secondary leading-[1.6] mb-6 max-w-[44ch]">
                  Gäste scannen den QR-Code am Tisch, sehen die Karte im Browser, bestellen direkt in die Küche. Keine App, keine Anmeldung, kein Plastikkartenmenü.
                </p>
                <ul className="space-y-2">
                  {['Browser-basiert, alle Geräte', 'Mehrsprachig (DE / EN / TR)', 'Live-Synchronisation mit Küche'].map((d) => (
                    <li key={d} className="font-mono text-xs text-secondary flex items-center gap-2">
                      <span className="w-1 h-1 bg-muted rounded-full flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-hairline bg-surface p-6 font-mono text-xs">
                <div className="text-muted mb-4 uppercase tracking-[0.1em] text-[10px]">Eingang — Tisch 07</div>
                <div className="space-y-2">
                  {[
                    { pos: '1×', item: 'Pizza Margherita', note: 'ohne Basilikum' },
                    { pos: '2×', item: 'Pasta Carbonara', note: '' },
                    { pos: '1×', item: 'Tiramisu', note: '' },
                    { pos: '3×', item: 'Wasser still 0,5l', note: '' },
                  ].map((row) => (
                    <div key={row.item} className="flex gap-3 py-1.5 border-b border-hairline last:border-0">
                      <span className="text-muted w-4 flex-shrink-0">{row.pos}</span>
                      <span className="text-ink flex-1">{row.item}</span>
                      {row.note && <span className="text-muted italic">{row.note}</span>}
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex justify-between text-muted text-[10px]">
                  <span>14:37:22</span>
                  <span className="text-signal">Neu</span>
                </div>
              </div>
            </motion.div>

            {/* Block 02: Reservierungen */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={viewport}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 py-12 md:py-16"
            >
              <div className="md:order-2">
                <span className="font-mono text-xs text-muted mb-4 block">02</span>
                <h3 className="font-sans font-medium text-xl tracking-tight text-ink mb-4">Reservierungen über Web und WhatsApp</h3>
                <p className="font-sans text-base text-secondary leading-[1.6] mb-6 max-w-[44ch]">
                  Gäste reservieren über die eigene Website oder per WhatsApp. Automatische Bestätigung, Erinnerung 2 Stunden vorher, No-Show-Verwaltung im Dashboard.
                </p>
                <ul className="space-y-2">
                  {['Keine App für Gäste', 'WhatsApp Business API', 'Kalender-Export möglich'].map((d) => (
                    <li key={d} className="font-mono text-xs text-secondary flex items-center gap-2">
                      <span className="w-1 h-1 bg-muted rounded-full flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:order-1 border border-hairline bg-surface p-6 font-mono text-xs space-y-3">
                <div className="text-muted mb-4 uppercase tracking-[0.1em] text-[10px]">WhatsApp · Reservierung</div>
                <div className="flex justify-end">
                  <div className="bg-ink text-paper px-3 py-2 max-w-[85%] text-xs leading-relaxed">
                    Hallo, ich würde gerne morgen Abend für 4 Personen um 19:30 Uhr reservieren.
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-hairline text-ink px-3 py-2 max-w-[85%] text-xs leading-relaxed">
                    Gerne. Ich habe am 16. Mai, 19:30 Uhr, einen Tisch für 4 Personen vorgemerkt. Bestätigung per E-Mail folgt.
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Block 03: Dashboard */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={viewport}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 py-12 md:py-16"
            >
              <div>
                <span className="font-mono text-xs text-muted mb-4 block">03</span>
                <h3 className="font-sans font-medium text-xl tracking-tight text-ink mb-4">Echtzeit-Dashboard</h3>
                <p className="font-sans text-base text-secondary leading-[1.6] mb-6 max-w-[44ch]">
                  Alle laufenden Bestellungen, Tischauslastung, Umsatz des Tages — in einer Ansicht, von überall erreichbar.
                </p>
                <ul className="space-y-2">
                  {['Läuft auf Tablet und Desktop', 'Personalverwaltung inklusive', 'Tagesberichte als PDF'].map((d) => (
                    <li key={d} className="font-mono text-xs text-secondary flex items-center gap-2">
                      <span className="w-1 h-1 bg-muted rounded-full flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-hairline bg-surface font-mono text-xs overflow-hidden">
                <div className="border-b border-hairline px-4 py-2 flex items-center justify-between">
                  <span className="text-muted uppercase tracking-[0.08em] text-[10px]">Dashboard · Heute</span>
                  <span className="text-[10px] text-muted tabular-nums">16.05.2026 · 14:41</span>
                </div>
                <div className="grid grid-cols-3 divide-x divide-hairline border-b border-hairline">
                  {[{ l: 'Umsatz', v: '€ 847' }, { l: 'Gäste', v: '63' }, { l: 'Tische', v: '12 / 18' }].map((s) => (
                    <div key={s.l} className="px-4 py-3">
                      <div className="text-muted text-[10px] uppercase tracking-[0.06em] mb-1">{s.l}</div>
                      <div className="text-ink tabular-nums">{s.v}</div>
                    </div>
                  ))}
                </div>
                <div className="p-4 space-y-1.5">
                  {[
                    { t: 'T03', s: 'In Zubereitung', z: '14:29' },
                    { t: 'T07', s: 'Neu',             z: '14:37', active: true },
                    { t: 'T11', s: 'Serviert',         z: '14:12' },
                  ].map((row) => (
                    <div key={row.t} className={`flex justify-between py-1 border-b border-hairline last:border-0 ${row.active ? 'text-signal' : 'text-ink'}`}>
                      <span>{row.t}</span>
                      <span>{row.s}</span>
                      <span className="text-muted">{row.z}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── PREISE ─────────────────────────────────────────── */}
      <section id="preise" className="border-t border-hairline py-24 md:py-28">
        <Container>
          <Eyebrow>Preise</Eyebrow>
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            className="mb-12"
          >
            <h2 className="font-sans font-light text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.15] tracking-[-0.015em] text-ink mb-4">
              Eine Stufe pro Jahr.
            </h2>
            <p className="font-sans text-base text-secondary leading-[1.6] max-w-[52ch]">
              Keine Tarif-Verwirrung. Drei klare Stufen, monatlich kündbar.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            className="overflow-x-auto"
          >
            <div className="grid grid-cols-4 border-b border-hairline pb-4 gap-4 min-w-[560px]">
              <div className="col-span-1" />
              {PRICING.map((p) => (
                <div key={p.name} className="col-span-1 text-center">
                  <p className="font-sans font-medium text-base text-ink">{p.name}</p>
                  {p.recommended && (
                    <p className="font-mono text-[10px] text-muted mt-0.5">Empfohlen</p>
                  )}
                  <p className="font-mono text-xl text-ink tabular-nums mt-2">
                    {p.price}<span className="text-xs text-muted"> €/Mo</span>
                  </p>
                </div>
              ))}
            </div>

            {PRICING[0].features.map((feature) => (
              <div key={feature.label} className="grid grid-cols-4 border-b border-hairline py-3 gap-4 min-w-[560px]">
                <div className="col-span-1">
                  <span className="font-mono text-xs text-muted uppercase tracking-[0.06em]">{feature.label}</span>
                </div>
                {PRICING.map((p) => {
                  const val = p.features.find((f) => f.label === feature.label)?.value
                  return (
                    <div key={p.name} className="col-span-1 text-center">
                      <span className="font-mono text-xs text-ink">{val}</span>
                    </div>
                  )
                })}
              </div>
            ))}

            <div className="grid grid-cols-4 pt-6 gap-4 min-w-[560px]">
              <div className="col-span-1" />
              {PRICING.map((p) => (
                <div key={p.name} className="col-span-1 text-center">
                  <Link
                    to="/kontakt"
                    className={`group inline-flex items-center gap-1 text-sm font-medium border-b pb-0.5 transition-colors ${
                      p.recommended
                        ? 'text-signal border-signal hover:opacity-80'
                        : 'text-primary border-ink hover:border-signal hover:text-signal'
                    }`}
                  >
                    Wählen <span className="font-mono">→</span>
                  </Link>
                </div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ── FAQ ────────────────────────────────────────────── */}
      <section className="border-t border-hairline py-24 md:py-28">
        <Container>
          <Eyebrow>FAQ</Eyebrow>
          <motion.h2
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            className="font-sans font-light text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.15] tracking-[-0.015em] text-ink mb-12"
          >
            Häufige Fragen.
          </motion.h2>

          <div className="border-t border-hairline max-w-[68ch]">
            {SERVEFLOW_FAQ.map((f, i) => (
              <FaqItem key={i} frage={f.frage} antwort={f.antwort} />
            ))}
          </div>
        </Container>
      </section>
    </main>
  )
}

function FaqItem({ frage, antwort }: { frage: string; antwort: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-hairline">
      <button
        onClick={() => setOpen((s) => !s)}
        aria-expanded={open}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="font-sans text-base font-medium text-ink">{frage}</span>
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
            <p className="font-sans text-base text-secondary leading-[1.6] pb-5">{antwort}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
