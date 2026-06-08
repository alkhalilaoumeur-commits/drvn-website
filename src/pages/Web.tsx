import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Container } from '../components/Container'
import { Eyebrow } from '../components/Eyebrow'
import SEO from '../components/SEO'
import { fadeUp, viewport } from '../lib/motion'
import { BRAND } from '../lib/constants'
import { track, Events } from '../lib/analytics'
import { sendContact } from '../lib/email'
import {
  Loader2, Phone, Mail, ArrowUpRight, Minus, Plus, Check, X as XIcon,
} from 'lucide-react'

// ──────────────────────────────────────────────────────────
// DATEN — konsistente Preise, konkrete Inhalte
// ──────────────────────────────────────────────────────────

const FORMATE = [
  {
    nr: '01',
    titel: 'Landingpage',
    preis: 'ab 790 €',
    dauer: '1–2 Wochen',
    fuer: 'Produktlaunch, Kampagne, ein einziges Versprechen.',
    drin: [
      '1 Seite, bewusst konversions-fokussiert',
      'Hero · Beweis · Angebot · Kontakt',
      'DSGVO-konformes Tracking (Plausible)',
      'Hosting-Setup + Domain-Anbindung',
      'Lighthouse 95+ garantiert',
    ],
  },
  {
    nr: '02',
    titel: 'Unternehmens-Webseite',
    preis: 'ab 1.490 €',
    dauer: '3–5 Wochen',
    fuer: 'Eigenständiger digitaler Auftritt — Kanzlei, Praxis, Mittelstand.',
    drin: [
      '5–10 Seiten, redaktionell aufgebaut',
      'Eigener Farbraum + Typografie',
      'Mehrsprachig wenn nötig (DE/EN)',
      'Headless-CMS oder MDX-Content',
      'On-Page-SEO + Schema-Markup',
    ],
  },
  {
    nr: '03',
    titel: 'Webapplikation',
    preis: 'ab 2.490 €',
    dauer: '6+ Wochen',
    fuer: 'Wenn ein Tool fehlt — Dashboard, internes System, Kundenportal.',
    drin: [
      'Vollständiger Frontend + Backend-Stack',
      'PostgreSQL-Datenbank + Auth',
      'API + Admin-Bereich',
      'Server-Setup auf Hetzner DE',
      'Migrations- + Deployment-Pipeline',
    ],
  },
]

const VERFAHREN = [
  { woche: 'Woche 0', titel: 'Anfrage + 60-Minuten-Gespräch', text: 'Wir klären Ziel, Umfang, Timeline. Wenn ich nicht der richtige bin, sage ich das hier.' },
  { woche: 'Woche 1', titel: 'Festpreis-Angebot + Kick-off',    text: 'Du bekommst ein Angebot mit fixem Preis. Keine versteckten Stundensätze. Bei Zustimmung Start innerhalb 5 Werktagen.' },
  { woche: 'Woche 1', titel: 'Erste Live-Vorschau',              text: 'Sobald Grundgerüst steht — meistens nach 4–7 Tagen — bekommst du eine Preview-URL. Ab da: wöchentliches Update.' },
  { woche: 'Final',    titel: 'Übergabe + Schulung',             text: 'GitHub-Repo, Deployment-Zugänge, 60 Minuten Übergabe-Call. Du kannst editieren, ich bin raus — oder wir machen Wartung.' },
]

const NICHT = [
  'Kein WordPress, Wix, Webflow oder Squarespace',
  'Keine Theme-Anpassungen — alles handgeschrieben',
  'Keine 14 Revisions-Runden — 2 sind drin, danach Tagessatz',
  'Keine Stockfoto-Layouts — Bilder kommen vom Kunden oder werden gestaltet',
  'Keine SEO-Versprechen ohne Daten — wir messen, wir prognostizieren nicht',
  'Keine monatlichen Wartungsverträge die niemand braucht',
]

const VERSPRECHEN = [
  { ja: 'Lighthouse-Performance 95+',                      nein: 'Top-1-Google-Ranking ab Tag 1' },
  { ja: 'Code gehört dir vollständig (Git-Repo)',          nein: 'Lock-in über proprietäre Systeme' },
  { ja: 'Antwort auf jede Mail < 48h',                    nein: 'Telefon-Hotline rund um die Uhr' },
  { ja: 'Festpreis vor Projektstart',                      nein: 'Stundensätze nach Aufwand' },
  { ja: 'Server in Frankfurt, AVV inklusive',              nein: 'Cloud-Hosting in den USA' },
  { ja: 'Direkter Kontakt zum Entwickler',                 nein: 'Account-Manager, Ticketsystem, Hand-Off' },
]

const FAQ = [
  {
    frage: 'Warum kein WordPress?',
    antwort: 'WordPress ist ein Werkzeug für Redaktionen mit täglich neuen Inhalten. Für die meisten Unternehmens-Webseiten ist es Overhead — langsamer, weniger sicher, schwerer zu pflegen. Wir bauen statisch oder als App, je nachdem was die Seite tatsächlich braucht.',
  },
  {
    frage: 'Wem gehört der Code nach Abschluss?',
    antwort: 'Dir. Vollständig. Du bekommst ein privates GitHub-Repository, Zugang zu allen Diensten (Domain, Hosting, Analytics) und eine technische Dokumentation. Wenn du eines Tages jemand anderen suchst, kann er sofort weiterarbeiten.',
  },
  {
    frage: 'Was kostet Wartung?',
    antwort: 'Wartung ist nicht erforderlich. Statische Seiten laufen jahrelang ohne Eingriff. Wenn du Änderungen brauchst, gibt es zwei Optionen: Stundensatz nach Aufwand, oder du editierst selbst im Repo. Kein Zwangs-Abo.',
  },
  {
    frage: 'Kannst du nur das Design machen?',
    antwort: 'Nein. Wir trennen Design und Code nicht — beides geht gleichzeitig im Browser. Wenn du nur ein Design-Mockup brauchst, gibt es bessere Adressen.',
  },
  {
    frage: 'Wie viele Revisions sind drin?',
    antwort: 'Zwei Runden Feedback pro Sektion. Das reicht erfahrungsgemäß für ein scharfes Ergebnis. Weitere Runden werden nach Tagessatz abgerechnet — auf Anfrage.',
  },
  {
    frage: 'Was wenn das Projekt nicht passt?',
    antwort: 'Wenn ich im 60-Minuten-Gespräch merke, dass ich nicht der richtige bin — Budget, Zeit, oder Skills passen nicht — sage ich das direkt. Lieber eine ehrliche Absage als ein halbes Ergebnis.',
  },
]

// ──────────────────────────────────────────────────────────
// PAGE
// ──────────────────────────────────────────────────────────

export default function WebPage() {
  return (
    <>
      <SEO
        title="Webseiten & Webentwicklung Stuttgart | drvn"
        description="Handgeschriebene Webseiten aus Stuttgart. React, TypeScript, DSGVO, Server in Frankfurt. Landingpages, Unternehmens-Sites und Web-Apps — Preis auf Anfrage, direkter Kontakt zum Entwickler."
        path="/web"
        keywords="Webdesign Stuttgart, Webseite erstellen lassen, React Webseite, Webentwicklung DACH, custom Webseite Deutschland"
      />
      <main>
        <Hero />
        <DreiVersprechen />
        <KanzleiReferenz />
        <Formate />
        <NichtMachen />
        <Verfahren />
        <VersprechenTabelle />
        <FAQSection />
        <FounderBlock />
        <AnfrageSection />
      </main>
    </>
  )
}

// ──────────────────────────────────────────────────────────
// HERO
// ──────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="pt-40 md:pt-52 pb-16 md:pb-20 relative overflow-hidden">
      <div className="hero-ambient" />
      <Container className="relative">
        <Eyebrow>Auftragsarbeit · Webentwicklung</Eyebrow>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 mt-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-8"
          >
            <h1 className="font-sans font-light text-[clamp(2.5rem,6vw,4.75rem)] leading-[1.02] tracking-[-0.02em] text-primary mb-10 max-w-[16ch]">
              Webseiten, die ich{' '}
              <span className="font-serif italic text-signal">selbst schreibe.</span>{' '}
              Zeile für Zeile.
            </h1>

            <p className="font-sans text-lg text-secondary leading-[1.6] mb-8 max-w-[54ch]">
              Kein Theme, kein Baukasten, kein Account-Manager dazwischen.
              Ich bin Ilias — Wirtschaftsinformatik in Hohenheim, Solo-Entwickler in Stuttgart.
              Wenn Sie mit mir arbeiten, arbeiten Sie direkt mit der Person, die den Code schreibt.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#anfrage"
                className="inline-flex items-center gap-2 bg-primary text-bg px-6 py-3.5 text-sm font-medium hover:bg-primary/85"
                style={{ transitionProperty: 'background-color', transitionDuration: '200ms' }}
                onClick={() => track('CTA Klick', { label: 'web-hero-anfrage' })}
              >
                Projekt besprechen
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href={BRAND.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3.5 text-sm font-medium hover:bg-primary hover:text-bg"
                style={{ transitionProperty: 'background-color, color', transitionDuration: '200ms' }}
                onClick={() => track('CTA Klick', { label: 'web-hero-calendly' })}
              >
                Gespräch buchen (30 min)
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href={`tel:${BRAND.tel.replace(/\s/g, '')}`}
                className="inline-flex items-center gap-2 text-sm text-secondary hover:text-primary"
                style={{ transitionProperty: 'color', transitionDuration: '200ms' }}
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="font-mono">{BRAND.tel}</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-4 md:col-start-9"
          >
            <div className="border border-border bg-surface/60 p-6">
              <div className="flex items-center gap-2 mb-5 pb-4 border-b border-border">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inset-0 rounded-full bg-success animate-ping opacity-50" />
                  <span className="relative w-2 h-2 rounded-full bg-success" />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-secondary">
                  Aktuell · 1 Slot frei
                </span>
              </div>

              <dl className="divide-y divide-border">
                {[
                  { label: 'Verfügbar ab',  value: 'Q3 2026'                    },
                  { label: 'Stack',          value: 'React · TypeScript · Vite'  },
                  { label: 'Hosting',        value: 'Hetzner Frankfurt'           },
                  { label: 'Lieferzeit',     value: '1–6 Wochen je Format'        },
                  { label: 'Preis',          value: 'Auf Anfrage'                 },
                ].map((s) => (
                  <div key={s.label} className="flex justify-between py-2.5 gap-2">
                    <dt className="font-mono text-[11px] text-muted uppercase tracking-[0.08em] flex-shrink-0">{s.label}</dt>
                    <dd className="font-mono text-[11px] text-primary text-right">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

// ──────────────────────────────────────────────────────────
// DREI VERSPRECHEN — Strip zwischen Hero und Rest
// ──────────────────────────────────────────────────────────

function DreiVersprechen() {
  const items = [
    { n: '95+',     label: 'Lighthouse-Score',  sub: 'auf jeder ausgelieferten Seite'     },
    { n: 'Woche 1', label: 'Erste Vorschau',     sub: 'live klickbar, nicht nur Mockup'    },
    { n: '0 €',     label: 'Lock-in nach Launch', sub: 'Code, Domain, Daten gehören dir'   },
  ]
  return (
    <section className="border-y border-border bg-surface py-10 md:py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-y-0 md:divide-x md:divide-border">
          {items.map((it, i) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="md:px-8 flex items-baseline gap-5"
            >
              <span className="font-serif italic text-signal text-3xl md:text-4xl leading-none flex-shrink-0">
                {it.n}
              </span>
              <div>
                <p className="font-sans font-semibold text-sm text-primary leading-tight">{it.label}</p>
                <p className="font-sans text-xs text-secondary mt-0.5">{it.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

// ──────────────────────────────────────────────────────────
// KANZLEI-REFERENZ
// ──────────────────────────────────────────────────────────

function KanzleiReferenz() {
  return (
    <section className="border-b border-border py-20 md:py-24 bg-bg">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-10">
          <div className="lg:col-span-5">
            <Eyebrow>Designstudie · Live klickbar</Eyebrow>
            <motion.h2
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={viewport}
              className="font-sans font-light text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.15] tracking-[-0.015em] text-primary mb-5"
            >
              Wie eine Wirtschaftskanzlei{' '}
              <span className="font-serif italic text-signal">aussehen kann.</span>
            </motion.h2>
            <p className="text-sm text-secondary leading-[1.7] max-w-[42ch] mb-6">
              Eigene Designstudie für eine 6-seitige Kanzlei-Webseite — kein Mandanten-Projekt,
              sondern ein Beispiel, was möglich ist. Editorial-Stil, serife Typografie, eigener
              Farbraum (Marineblau + Champagner), Framer-Motion, voll funktional.
            </p>
            <Link
              to="/beispiel/kanzlei"
              className="inline-flex items-center gap-2 bg-primary text-bg hover:bg-primary/85 px-5 py-3 text-sm font-medium"
              style={{ transitionProperty: 'background-color', transitionDuration: '200ms' }}
            >
              Vorschau öffnen
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <Link
            to="/beispiel/kanzlei"
            className="lg:col-span-7 group relative block overflow-hidden border border-border"
          >
            <div className="relative bg-[#F5F1E8] aspect-[16/10] overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage: 'linear-gradient(#0F1E3D 1px, transparent 1px), linear-gradient(90deg, #0F1E3D 1px, transparent 1px)',
                  backgroundSize: '48px 48px',
                }}
              />
              <div className="absolute top-6 left-6 right-6 flex items-baseline justify-between">
                <p style={{ fontFamily: 'Georgia, serif', fontSize: '1.4rem', fontWeight: 700, color: '#0F1E3D' }}>
                  Voss <span style={{ color: '#C9A961' }}>&</span> Partner
                </p>
                <p className="font-mono text-[9px] uppercase tracking-[0.18em]" style={{ color: '#6B7B95' }}>
                  Wirtschaftskanzlei — München
                </p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center px-8">
                <p
                  className="text-center"
                  style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: 'clamp(2rem, 5vw, 4.5rem)',
                    lineHeight: 1,
                    color: '#0F1E3D',
                    fontWeight: 400,
                  }}
                >
                  Diskretion.<br />Substanz.<br />
                  <span style={{ fontStyle: 'italic', color: '#C9A961' }}>Resultat.</span>
                </p>
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <p className="font-mono text-[9px] uppercase tracking-[0.18em]" style={{ color: '#6B7B95' }}>
                  38 Jahre · 42 Berufsträger · 3 Standorte
                </p>
                <span className="text-xs font-semibold opacity-0 group-hover:opacity-100"
                  style={{ color: '#C9A961', fontFamily: 'Georgia, serif', transitionProperty: 'opacity', transitionDuration: '200ms' }}>
                  Vorschau öffnen →
                </span>
              </div>
            </div>
            <div className="bg-bg px-5 py-3 border-t border-border flex items-center justify-between">
              <div className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#FF5F57]" />
                <span className="w-2 h-2 rounded-full bg-[#FEBC2E]" />
                <span className="w-2 h-2 rounded-full bg-[#28C840]" />
              </div>
              <span className="font-mono text-[10px] text-muted">drvnautomatisations.com/beispiel/kanzlei</span>
              <span className="font-mono text-[10px] text-signal uppercase tracking-[0.12em]">Live</span>
            </div>
          </Link>
        </div>
      </Container>
    </section>
  )
}

// ──────────────────────────────────────────────────────────
// DREI FORMATE
// ──────────────────────────────────────────────────────────

function Formate() {
  return (
    <section className="py-24 md:py-28">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
          <div className="lg:col-span-6">
            <Eyebrow>Drei Formate</Eyebrow>
            <motion.h2
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={viewport}
              className="font-sans font-light text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.15] tracking-[-0.015em] text-primary"
            >
              Klar, was Sie bekommen.{' '}
              <span className="font-serif italic text-signal">Vor Vertragsschluss.</span>
            </motion.h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-sm text-secondary leading-[1.7] max-w-[44ch]">
              Festpreis. Festlieferung. Wenn ein Projekt nicht in eines dieser drei Formate passt,
              fällt es unter <Link to="/individuelle-projekte" className="underline decoration-dotted underline-offset-2">individuelle Projekte</Link>.
            </p>
          </div>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {FORMATE.map((f, i) => (
            <motion.div
              key={f.titel}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="py-10 md:py-12 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 group"
            >
              <div className="md:col-span-3 flex items-start gap-4">
                <span className="font-mono text-xs text-signal tracking-[0.16em]">{f.nr}</span>
                <div>
                  <h3 className="font-sans font-medium text-2xl text-primary leading-tight tracking-[-0.01em]">
                    {f.titel}
                  </h3>
                  <p className="font-mono text-[11px] text-muted uppercase tracking-[0.08em] mt-2">
                    {f.dauer}
                  </p>
                </div>
              </div>

              <div className="md:col-span-5">
                <p className="font-sans text-base text-secondary leading-[1.7] mb-4 max-w-[42ch]">
                  {f.fuer}
                </p>
                <ul className="space-y-1.5">
                  {f.drin.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-secondary">
                      <Check className="w-3.5 h-3.5 text-signal flex-shrink-0 mt-1" strokeWidth={2.5} />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-4 md:text-right md:pl-6 flex md:flex-col items-baseline md:items-end justify-between md:justify-start gap-3">
                <p className="font-serif italic text-signal text-4xl leading-none">
                  {f.preis}
                </p>
                <a
                  href="#anfrage"
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.12em] text-secondary hover:text-primary border-b border-border hover:border-primary pb-1"
                  style={{ transitionProperty: 'color, border-color', transitionDuration: '200ms' }}
                >
                  Anfragen
                  <span>→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

// ──────────────────────────────────────────────────────────
// WAS WIR NICHT MACHEN — Authentizitäts-Anker
// ──────────────────────────────────────────────────────────

function NichtMachen() {
  return (
    <section className="border-t border-border py-24 md:py-28 bg-surface">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <Eyebrow>Bewusst nein</Eyebrow>
            <motion.h2
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={viewport}
              className="font-sans font-light text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.15] tracking-[-0.015em] text-primary mb-5"
            >
              Was wir <span className="font-serif italic text-signal">nicht</span> machen.
            </motion.h2>
            <p className="text-sm text-secondary leading-[1.7] max-w-[40ch]">
              Klare Grenzen sparen Zeit — Ihre und meine. Wenn Sie eines dieser Dinge brauchen,
              gibt es bessere Adressen. Wenn nicht, sind wir wahrscheinlich ein Match.
            </p>
          </div>

          <ul className="lg:col-span-7 space-y-0">
            {NICHT.map((n, i) => (
              <motion.li
                key={n}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="flex items-start gap-4 py-4 border-b border-border last:border-b-0"
              >
                <Minus className="w-4 h-4 text-signal flex-shrink-0 mt-1" strokeWidth={2.5} />
                <p className="font-sans text-base text-secondary leading-[1.55]">{n}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}

// ──────────────────────────────────────────────────────────
// VERFAHREN
// ──────────────────────────────────────────────────────────

function Verfahren() {
  return (
    <section className="border-t border-border py-24 md:py-28">
      <Container>
        <Eyebrow>Verfahren</Eyebrow>
        <motion.h2
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={viewport}
          className="font-sans font-light text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.15] tracking-[-0.015em] text-primary mb-14 max-w-[20ch]"
        >
          Vier Stationen.{' '}
          <span className="font-serif italic text-signal">Keine Überraschungen.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6">
          <div className="md:col-span-2 hidden md:block">
            <div className="sticky top-32">
              <div className="h-full w-px bg-border ml-3" />
            </div>
          </div>

          <div className="md:col-span-10 space-y-0">
            {VERFAHREN.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-10 gap-4 md:gap-8 py-8 border-b border-border last:border-b-0 relative"
              >
                <div className="md:col-span-2 md:absolute md:-left-[8.5%] md:flex md:flex-col md:items-start">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-signal">
                    {v.woche}
                  </span>
                </div>
                <div className="md:col-span-3">
                  <p className="font-sans font-medium text-lg text-primary leading-snug">
                    {v.titel}
                  </p>
                </div>
                <div className="md:col-span-7">
                  <p className="font-sans text-base text-secondary leading-[1.65] max-w-[58ch]">
                    {v.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

// ──────────────────────────────────────────────────────────
// VERSPRECHEN-TABELLE — Ja vs. Nein
// ──────────────────────────────────────────────────────────

function VersprechenTabelle() {
  return (
    <section className="border-t border-border py-24 md:py-28 bg-surface">
      <Container>
        <Eyebrow>Versprochen · Nicht versprochen</Eyebrow>
        <motion.h2
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={viewport}
          className="font-sans font-light text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.15] tracking-[-0.015em] text-primary mb-12 max-w-[24ch]"
        >
          Sechs Zusagen. Sechs ehrliche{' '}
          <span className="font-serif italic text-signal">Absagen.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 border-y border-border divide-y md:divide-y-0 md:divide-x divide-border">
          <div className="py-8 md:py-10 md:pr-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-success mb-6 flex items-center gap-2">
              <Check className="w-3 h-3" strokeWidth={3} /> Versprochen
            </p>
            <ul className="space-y-4">
              {VERSPRECHEN.map((v) => (
                <li key={v.ja} className="font-sans text-base text-primary leading-[1.55]">
                  {v.ja}
                </li>
              ))}
            </ul>
          </div>

          <div className="py-8 md:py-10 md:pl-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-signal mb-6 flex items-center gap-2">
              <XIcon className="w-3 h-3" strokeWidth={3} /> Nicht versprochen
            </p>
            <ul className="space-y-4">
              {VERSPRECHEN.map((v) => (
                <li key={v.nein} className="font-sans text-base text-muted leading-[1.55]">
                  {v.nein}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}

// ──────────────────────────────────────────────────────────
// FAQ
// ──────────────────────────────────────────────────────────

function FAQSection() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section className="border-t border-border py-24 md:py-28">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <Eyebrow>Häufige Fragen</Eyebrow>
            <motion.h2
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={viewport}
              className="font-sans font-light text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.15] tracking-[-0.015em] text-primary mb-5"
            >
              Sechs Fragen,{' '}
              <span className="font-serif italic text-signal">ehrlich beantwortet.</span>
            </motion.h2>
            <p className="text-sm text-secondary leading-[1.7] max-w-[36ch]">
              Wenn etwas fehlt, schreiben Sie direkt. Ich antworte auf jede Frage.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-border">
              {FAQ.map((f, i) => {
                const isOpen = open === i
                return (
                  <div key={f.frage} className="border-b border-border">
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full py-5 flex items-start justify-between gap-6 text-left group"
                    >
                      <span className="font-sans text-base md:text-lg font-medium text-primary leading-snug group-hover:text-signal"
                        style={{ transitionProperty: 'color', transitionDuration: '180ms' }}>
                        {f.frage}
                      </span>
                      <span className="flex-shrink-0 mt-1">
                        {isOpen
                          ? <Minus className="w-4 h-4 text-signal" strokeWidth={2.5} />
                          : <Plus  className="w-4 h-4 text-muted" strokeWidth={2.5} />
                        }
                      </span>
                    </button>
                    <motion.div
                      initial={false}
                      animate={{
                        height:    isOpen ? 'auto' : 0,
                        opacity:   isOpen ? 1 : 0,
                        marginBottom: isOpen ? 20 : 0,
                      }}
                      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="font-sans text-base text-secondary leading-[1.7] max-w-[58ch] pr-10">
                        {f.antwort}
                      </p>
                    </motion.div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

// ──────────────────────────────────────────────────────────
// FOUNDER BLOCK — persönlich vor dem Form
// ──────────────────────────────────────────────────────────

function FounderBlock() {
  return (
    <section className="border-t border-border py-20 md:py-24 bg-surface">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 items-start"
        >
          <div className="md:col-span-3 flex md:justify-start">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-primary text-bg flex items-center justify-center font-serif italic text-5xl md:text-6xl">
              I
            </div>
          </div>

          <div className="md:col-span-9 md:pl-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted mb-3">
              Wer antwortet auf Ihre Anfrage
            </p>
            <h3 className="font-sans font-light text-[clamp(1.5rem,2.5vw,2rem)] leading-[1.2] tracking-[-0.015em] text-primary mb-4 max-w-[28ch]">
              Ilias Al-Khalil. Direkt, ohne Umweg.
            </h3>
            <p className="font-sans text-base text-secondary leading-[1.65] mb-5 max-w-[58ch]">
              Jede Mail an drvn landet bei mir persönlich — kein Funnel, kein Sales-Team, kein CRM
              das Sie pflegt. Ich antworte innerhalb 48 Stunden. Wenn das Projekt nicht passt,
              sage ich es direkt. Wenn es passt, gibt es ein Festpreis-Angebot innerhalb 5 Werktagen.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <a href={`mailto:${BRAND.email}`} className="inline-flex items-center gap-2 text-sm text-primary border-b border-primary pb-0.5 hover:text-signal hover:border-signal"
                style={{ transitionProperty: 'color, border-color', transitionDuration: '200ms' }}>
                <Mail className="w-3.5 h-3.5" />
                {BRAND.email}
              </a>
              <a href={`tel:${BRAND.tel.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 text-sm text-primary border-b border-primary pb-0.5 hover:text-signal hover:border-signal"
                style={{ transitionProperty: 'color, border-color', transitionDuration: '200ms' }}>
                <Phone className="w-3.5 h-3.5" />
                <span className="font-mono">{BRAND.tel}</span>
              </a>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

// ──────────────────────────────────────────────────────────
// ANFRAGE-FORM
// ──────────────────────────────────────────────────────────

function AnfrageSection() {
  return (
    <section id="anfrage" className="relative border-t border-border py-24 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 90% 10%, rgba(232,74,28,0.07) 0%, transparent 65%),' +
            'radial-gradient(ellipse 40% 30% at 8% 95%, rgba(232,74,28,0.045) 0%, transparent 70%)',
        }}
      />
      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-14">
          <motion.aside
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4"
          >
            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-mono text-[10px] text-signal uppercase tracking-[0.16em]">06</span>
              <span className="h-px flex-1 bg-border" />
              <Eyebrow>Anfrage</Eyebrow>
            </div>

            <h2 className="font-sans font-light text-[clamp(2rem,3.4vw,2.75rem)] leading-[1.04] tracking-[-0.02em] text-primary mb-6 max-w-[12ch]">
              Erzählen Sie vom{' '}
              <span className="font-serif italic text-signal">Projekt.</span>
            </h2>

            <p className="font-sans text-base text-secondary leading-[1.65] max-w-[34ch] mb-10">
              Drei Pflichtfelder. Eine ehrliche Antwort. Persönlich, innerhalb 48 Stunden — meistens schneller.
            </p>

            <ol className="space-y-0 mb-10 border-t border-border">
              {[
                { nr: '01', t: 'Sie senden das Formular',     d: 'Direkte Mail an mich, kein Funnel.' },
                { nr: '02', t: 'Ich antworte persönlich',     d: 'Innerhalb 48h, oft noch am selben Tag.' },
                { nr: '03', t: '60-Minuten-Gespräch',         d: 'Wir prüfen, ob es passt — beidseitig.' },
                { nr: '04', t: 'Festpreis-Angebot',           d: 'Innerhalb 5 Werktagen, kein Stundenzettel.' },
              ].map((s) => (
                <li key={s.nr} className="grid grid-cols-[2.5rem_1fr] gap-4 py-4 border-b border-border">
                  <span className="font-mono text-[11px] text-signal tracking-[0.16em] pt-0.5">{s.nr}</span>
                  <div>
                    <p className="font-sans text-sm text-primary leading-snug">{s.t}</p>
                    <p className="font-sans text-xs text-muted leading-[1.5] mt-1">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="pt-6 border-t border-border">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted mb-4">
                Lieber direkt?
              </p>
              <a
                href={`mailto:${BRAND.email}`}
                className="group flex items-center justify-between py-2.5 border-b border-border hover:border-signal"
                style={{ transitionProperty: 'border-color', transitionDuration: '200ms' }}
              >
                <span className="flex items-center gap-2.5 text-sm text-primary group-hover:text-signal"
                  style={{ transitionProperty: 'color', transitionDuration: '200ms' }}>
                  <Mail className="w-3.5 h-3.5" />
                  {BRAND.email}
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-muted group-hover:text-signal" />
              </a>
              <a
                href={`tel:${BRAND.tel.replace(/\s/g, '')}`}
                className="group flex items-center justify-between py-2.5 border-b border-border hover:border-signal"
                style={{ transitionProperty: 'border-color', transitionDuration: '200ms' }}
              >
                <span className="flex items-center gap-2.5 text-sm text-primary group-hover:text-signal font-mono"
                  style={{ transitionProperty: 'color', transitionDuration: '200ms' }}>
                  <Phone className="w-3.5 h-3.5" />
                  {BRAND.tel}
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-muted group-hover:text-signal" />
              </a>
            </div>
          </motion.aside>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 lg:col-start-6"
          >
            <div className="relative">
              <div className="absolute -top-3 -left-3 hidden md:block w-12 h-12 border-t border-l border-signal pointer-events-none" aria-hidden="true" />
              <div className="absolute -bottom-3 -right-3 hidden md:block w-12 h-12 border-b border-r border-signal pointer-events-none" aria-hidden="true" />
              <div className="bg-surface/70 border border-border md:p-10 p-6 backdrop-blur-[1px]">
                <WebAnfrageForm />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

function WebAnfrageForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    const fd = new FormData(e.currentTarget)
    track(Events.KONTAKT_FORM_SUBMITTED, { source: 'web-anfrage' })
    try {
      await sendContact({
        from_name:  String(fd.get('name')    ?? '').trim(),
        from_email: String(fd.get('email')   ?? '').trim(),
        company:    String(fd.get('company') ?? '').trim() || 'Nicht angegeben',
        betreff:    `Webseite — ${String(fd.get('format') ?? 'Anfrage')}`,
        message:    String(fd.get('message') ?? '').trim(),
        budget:     String(fd.get('format')  ?? '') || 'Nicht angegeben',
        zeitrahmen: String(fd.get('zeitpunkt') ?? '') || 'Nicht angegeben',
      })
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="py-8"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-signal">Empfangen</span>
        <p className="font-serif italic text-signal mt-3 mb-5"
          style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.25rem)', lineHeight: 1.05 }}
        >
          Danke.
        </p>
        <p className="font-sans text-base text-primary leading-[1.65] max-w-[48ch] mb-2">
          Ihre Anfrage ist bei mir gelandet. Sie hören in den nächsten 48 Stunden von mir —
          meistens schneller.
        </p>
        <p className="font-sans text-sm text-muted leading-[1.65] max-w-[48ch]">
          Sollte mehr Zeit vergehen, prüfen Sie bitte Ihren Spam-Ordner oder schreiben Sie direkt an{' '}
          <a href={`mailto:${BRAND.email}`} className="text-signal underline decoration-dotted underline-offset-2">
            {BRAND.email}
          </a>.
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-9">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-9">
        <FieldGroup label="Name" name="name" required placeholder="Max Mustermann" />
        <FieldGroup label="E-Mail" name="email" type="email" required placeholder="max@firma.de" />
      </div>
      <FieldGroup label="Unternehmen" name="company" placeholder="Firma GmbH (optional)" />
      <FieldGroup
        label="Worum geht es?"
        name="message"
        as="textarea"
        required
        rows={5}
        placeholder="Wer Sie sind, was Sie brauchen, wo Sie gerade stehen. Drei Sätze reichen — wir klären den Rest im Gespräch."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-9">
        <SelectGroup
          label="Format"
          name="format"
          options={[
            'Landingpage',
            'Unternehmens-Webseite',
            'Webapplikation',
            'Weiß ich noch nicht',
          ]}
        />
        <SelectGroup
          label="Wann?"
          name="zeitpunkt"
          options={['So bald wie möglich', 'Q3 2026', 'Q4 2026', '2027', 'Noch offen']}
        />
      </div>

      {status === 'error' && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-sans text-sm text-signal bg-signal/10 border-l-2 border-signal px-4 py-3"
        >
          Fehler beim Senden. Schreiben Sie bitte direkt an{' '}
          <a href={`mailto:${BRAND.email}`} className="underline decoration-dotted underline-offset-2">
            {BRAND.email}
          </a>.
        </motion.p>
      )}

      <div className="pt-6 mt-2 border-t border-border flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
        <div className="max-w-[26ch]">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted mb-1.5">
            Persönlich gelesen
          </p>
          <p className="font-sans text-xs text-secondary leading-[1.55]">
            Jede Anfrage landet direkt bei mir, nicht in einem Funnel.
          </p>
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="group relative inline-flex items-center justify-between gap-4 bg-signal text-bg pl-6 pr-5 py-4 text-sm font-medium uppercase tracking-[0.12em] font-mono disabled:opacity-50 disabled:cursor-not-allowed sm:min-w-[16rem] hover:bg-signalHover"
          style={{ transitionProperty: 'background-color, opacity, transform', transitionDuration: '200ms' }}
        >
          {status === 'loading'
            ? <><Loader2 className="w-4 h-4 animate-spin" /> Wird gesendet…</>
            : (
              <>
                <span>Anfrage senden</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </>
            )
          }
        </button>
      </div>
    </form>
  )
}

function FieldGroup({ label, name, type = 'text', required = false, as: As = 'input', rows, placeholder }: {
  label: string; name: string; type?: string; required?: boolean; as?: 'input' | 'textarea'; rows?: number; placeholder?: string
}) {
  return (
    <div className="group">
      <label className="flex items-baseline gap-2 mb-2.5">
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted group-focus-within:text-signal"
          style={{ transitionProperty: 'color', transitionDuration: '200ms' }}>
          {label}
        </span>
        {required && <span className="font-serif italic text-signal text-xs leading-none">*</span>}
      </label>
      {As === 'textarea' ? (
        <textarea name={name} required={required} rows={rows ?? 4} placeholder={placeholder} className="input-editorial" />
      ) : (
        <input name={name} type={type} required={required} placeholder={placeholder} className="input-editorial" />
      )}
    </div>
  )
}

function SelectGroup({ label, name, required = false, options }: {
  label: string; name: string; required?: boolean; options: string[]
}) {
  return (
    <div className="group">
      <label className="flex items-baseline gap-2 mb-2.5">
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted group-focus-within:text-signal"
          style={{ transitionProperty: 'color', transitionDuration: '200ms' }}>
          {label}
        </span>
      </label>
      <select name={name} required={required} defaultValue="" className="input-editorial">
        <option value="" disabled>Bitte wählen…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  )
}
