import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowUpRight, ArrowRight, CheckCircle2,
  ShieldCheck, MessageSquare, Receipt, FileCode,
  Zap, Unlock, Gauge, Layers,
  Utensils, Scissors, Wrench, Building2, Dumbbell, Headphones,
  Sparkles, Clock, MapPin, Activity, Star,
} from 'lucide-react'
import { Container } from '../components/Container'
import { ContainerScroll } from '../components/ui/ContainerScroll'
import SEO from '../components/SEO'
import { AppScreenshotCarousel } from '../components/ui/AppScreenshotCarousel'
import { Marquee } from '../components/ui/Marquee'
import { CountUp } from '../components/ui/CountUp'
import { WERKBANK, JOURNAL_ENTRIES } from '../lib/constants'
import { fadeUp, viewport } from '../lib/motion'

const HEADLINE = 'Software die Unternehmen'.split(' ')

const BADGE_STYLE: Record<string, string> = {
  'Live':  'bg-green-500/15 text-green-400 border-green-500/30',
  'Beta':  'bg-yellow-500/15 text-yellow-400 border-yellow-500/30',
}

const TICKER_ITEMS = [
  { icon: Sparkles,  label: 'ServeFlow live',          sub: 'BookBase in Beta'        },
  { icon: Activity,  label: 'Kanzlei-Webseite',         sub: 'Designstudie · /web'     },
  { icon: Clock,     label: 'Antwortzeit < 48h',        sub: 'persönlich · keine Bots' },
  { icon: MapPin,    label: 'Stuttgart · DACH-weit',    sub: 'Hetzner Frankfurt'       },
  { icon: ShieldCheck, label: 'DSGVO-konform',          sub: 'Server DE · AVV inklusive' },
  { icon: Star,      label: '3 Slots offen für 2026',  sub: 'individuelle Projekte'   },
]

const STAERKEN = [
  {
    icon: ShieldCheck,
    title: 'DSGVO-konform',
    text: 'Server in Frankfurt, AVV inklusive, kein US-Anbieter. Ihre Daten verlassen die EU nicht.',
  },
  {
    icon: MessageSquare,
    title: 'Direkter Kontakt',
    text: 'Sie sprechen immer mit dem Entwickler — kein Account-Manager, kein Ticketsystem.',
  },
  {
    icon: Receipt,
    title: 'Festpreis-Garantie',
    text: 'Vereinbart ist vereinbart. Kein Scope-Creep, keine Überraschungsrechnung am Ende.',
  },
  {
    icon: FileCode,
    title: 'Vollständiges Code-Eigentum',
    text: 'Nach Projektabschluss gehört Ihnen der komplette Quellcode — ohne Einschränkungen.',
  },
  {
    icon: Zap,
    title: '2–6 Wochen Lieferzeit',
    text: 'Kein monatelanges Warten. Projekte starten innerhalb einer Woche.',
  },
  {
    icon: Unlock,
    title: 'Kein Vendor Lock-In',
    text: 'Kein proprietäres System, kein Abo das zwingt zu bleiben. Monatlich kündbar.',
  },
  {
    icon: Gauge,
    title: 'Lighthouse 95+',
    text: 'Alle Webseiten werden für maximale Performance, SEO und Barrierefreiheit optimiert.',
  },
  {
    icon: Layers,
    title: 'Skalierbare Architektur',
    text: 'Kein schneller Hack. Sauber gebaute Systeme die mit Ihrem Betrieb wachsen.',
  },
] as const

const BRANCHEN = [
  {
    icon: Utensils,
    name: 'Gastronomie',
    text: 'QR-Bestellung, Reservierungen, Tischplan, Mitarbeiterplanung — alles in einem System.',
    status: 'ServeFlow · Live',
    live: true,
  },
  {
    icon: Scissors,
    name: 'Beauty & Service',
    text: 'Online-Buchungssystem für Salons, Studios und Dienstleister mit Kundenkartei.',
    status: 'BookBase · 2026',
    live: false,
  },
  {
    icon: Wrench,
    name: 'Handwerk',
    text: 'Auftragsmanagement, Angebote, Kundenverwaltung und Abrechnung für Handwerksbetriebe.',
    status: 'In Planung · 2026',
    live: false,
  },
  {
    icon: Building2,
    name: 'Hotels & Hospitality',
    text: 'Check-in, Zimmerverwaltung und Gästekommunikation für kleine bis mittlere Hotels.',
    status: 'In Planung',
    live: false,
  },
  {
    icon: Dumbbell,
    name: 'Fitness & Gesundheit',
    text: 'Mitgliederverwaltung, Kursplanung und Check-in-System für Studios und Praxen.',
    status: 'In Planung',
    live: false,
  },
  {
    icon: Headphones,
    name: 'Individuelle Branchen',
    text: 'Branche noch nicht dabei? Wir entwickeln auf Anfrage branchenspezifische Lösungen.',
    status: 'Auf Anfrage',
    live: false,
  },
] as const

const TECH_STACK = [
  'React', 'TypeScript', 'Node.js', 'PostgreSQL',
  'Tailwind CSS', 'Docker', 'Hetzner DE', 'DSGVO',
] as const

export default function Home() {
  return (
    <>
      <SEO
        title="drvn — Software Studio aus Stuttgart | Webentwicklung & SaaS"
        description="drvn entwickelt digitale Produkte für Unternehmen im DACH-Raum. ServeFlow (Restaurant-Software ab 19 €/Mo), Webseiten, Automatisierungen und individuelle Software. Direkt mit dem Entwickler aus Stuttgart."
        path="/"
        keywords="Webentwicklung Stuttgart, Software Studio DACH, ServeFlow Restaurant Software, Webdesign Stuttgart, SaaS Entwicklung, digitale Produkte Deutschland"
      />
      <main>
      {/* ════ LIVE TICKER (oberhalb Hero) ════ */}
      <section className="pt-20 border-b border-border bg-surface/50">
        <Marquee
          speed={48}
          items={TICKER_ITEMS.map((t) => (
            <>
              <t.icon className="w-3 h-3 text-signal" />
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-primary">
                {t.label}
              </span>
              <span className="font-mono text-[10px] text-muted">
                — {t.sub}
              </span>
              <span className="w-1 h-1 rounded-full bg-border ml-3" />
            </>
          ))}
        />
      </section>

      {/* ════════════════════════════════════════════
          HERO — Stacked Screenshots + Headline
          ════════════════════════════════════════════ */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden pt-10 pb-16">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px]
            bg-[radial-gradient(ellipse_at_center,rgba(232,74,28,0.09)_0%,transparent_65%)]" />
          <div className="absolute inset-0"
            style={{
              backgroundImage: 'linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)',
              backgroundSize: '72px 72px',
              maskImage: 'radial-gradient(ellipse 75% 55% at 50% 0%, #000 10%, transparent 75%)',
              WebkitMaskImage: 'radial-gradient(ellipse 75% 55% at 50% 0%, #000 10%, transparent 75%)',
            }}
          />
        </div>

        <Container className="relative z-10 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center">
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="mb-8"
              >
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full
                  border border-border bg-surface text-xs font-mono text-secondary uppercase tracking-[0.1em]">
                  <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse flex-shrink-0" />
                  Stuttgart · DACH · Seit 2024
                </span>
              </motion.div>

              <motion.h1
                className="font-sans font-bold leading-[1.05] tracking-[-0.03em] text-primary mb-6"
                style={{ fontSize: 'clamp(2.5rem,5vw,4rem)' }}
              >
                {HEADLINE.map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, filter: 'blur(10px)', y: 14 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    transition={{ duration: 0.65, delay: 0.08 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block mr-[0.25em]"
                  >
                    {word}
                  </motion.span>
                ))}
                <br />
                <motion.span
                  initial={{ opacity: 0, filter: 'blur(10px)', y: 14 }}
                  animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                  transition={{ duration: 0.65, delay: 0.08 + HEADLINE.length * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="font-serif font-normal italic text-signal"
                >
                  wirklich voranbringen.
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="text-base text-secondary leading-[1.7] mb-8 max-w-[44ch]"
              >
                drvn baut SaaS-Produkte, Unternehmenswebseiten und Automationen für den
                DACH-Markt. Direkter Kontakt. Kein Overhead. Ergebnisse die zählen.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-wrap gap-3 mb-10"
              >
                <Link
                  to="/kontakt"
                  className="inline-flex items-center gap-2 bg-signal hover:bg-signalHover
                    text-white font-semibold px-6 py-3.5 rounded-lg transition-colors text-sm"
                >
                  Projekt anfragen
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/serveflow"
                  className="inline-flex items-center gap-2 bg-surface hover:bg-elevated
                    text-primary border border-border hover:border-borderHigh
                    font-semibold px-6 py-3.5 rounded-lg transition-colors text-sm"
                >
                  ServeFlow testen
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0 }}
                className="space-y-2"
              >
                {[
                  'Antwort innerhalb von 48 Stunden',
                  'DSGVO-konform · Server in Deutschland',
                  'Monatlich kündbar — kein Lock-In',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-signal flex-shrink-0" />
                    <span className="font-sans text-xs text-secondary">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 relative"
            >
              <div className="absolute -inset-8 bg-signal/12 rounded-[2rem] blur-3xl pointer-events-none" />

              {/* Hinterer Screenshot — leicht rotiert, kleiner */}
              <motion.div
                initial={{ opacity: 0, rotate: -8, x: -30, y: 20 }}
                animate={{ opacity: 1, rotate: -5, x: 0, y: 0 }}
                transition={{ duration: 1.0, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -left-6 top-12 w-[58%] z-0 rounded-xl overflow-hidden
                  border border-border hidden md:block"
                style={{ boxShadow: '0 20px 50px rgba(0,0,0,0.18)' }}
              >
                <div className="flex items-center gap-1.5 px-3 py-2 bg-elevated border-b border-border">
                  <span className="w-2 h-2 rounded-full bg-[#FF5F57]" />
                  <span className="w-2 h-2 rounded-full bg-[#FEBC2E]" />
                  <span className="w-2 h-2 rounded-full bg-[#28C840]" />
                </div>
                <img
                  src="/screenshots/reservierungen.png"
                  alt="ServeFlow Reservierungen"
                  className="w-full block"
                  loading="eager"
                />
              </motion.div>

              {/* Hauptscreenshot — vorne, leicht überlappend */}
              <div className="relative z-10 rounded-xl overflow-hidden border border-border
                md:translate-x-8 md:translate-y-0"
                style={{ boxShadow: '0 35px 80px -10px rgba(0,0,0,0.25), 0 0 0 1px rgba(0,0,0,0.06)' }}
              >
                <div className="flex items-center gap-2 px-4 py-3 bg-elevated border-b border-border">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                    <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                    <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <span className="font-mono text-xs text-muted bg-surface border border-border
                      px-4 py-1 rounded-md flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      app.serve-flow.org/dashboard
                    </span>
                  </div>
                </div>
                <img
                  src="/screenshots/dashboard.png"
                  alt="ServeFlow Dashboard — Restaurant Management"
                  className="w-full block"
                  loading="eager"
                />
              </div>

              {/* Live-Project Badge — links unten */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1.0, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-5 left-2 md:left-12 z-20 bg-bg border border-border
                  rounded-xl px-4 py-3 flex items-center gap-3"
                style={{ boxShadow: '0 12px 30px rgba(0,0,0,0.15)' }}
              >
                <div className="relative">
                  <span className="block w-2.5 h-2.5 rounded-full bg-green-400" />
                  <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-60" />
                </div>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted">Live Demo</p>
                  <p className="font-sans text-xs font-semibold text-primary">ServeFlow · Dashboard</p>
                </div>
              </motion.div>

              {/* Floating Mini-Stat — rechts oben */}
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -top-3 -right-3 md:-right-6 z-20 bg-signal text-white
                  rounded-xl px-4 py-2.5"
                style={{ boxShadow: '0 12px 30px rgba(232,74,28,0.35)' }}
              >
                <p className="font-mono text-[9px] uppercase tracking-[0.12em] opacity-80">Antwortzeit</p>
                <p className="font-sans text-base font-bold">&lt; 48 Stunden</p>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════════
          TRUST BAR — Animierte Zahlen
          ════════════════════════════════════════════ */}
      <section className="border-t border-border bg-surface py-10">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-border">
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={viewport}
              transition={{ delay: 0.0 }}
              className="text-center md:px-8"
            >
              <CountUp
                to={1}
                className="font-sans font-bold text-4xl text-primary tracking-tight tabular-nums"
              />
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-secondary mt-1.5">
                SaaS-Produkt
              </p>
              <p className="font-mono text-[9px] text-muted mt-0.5">live · weitere in Beta</p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={viewport}
              transition={{ delay: 0.08 }}
              className="text-center md:px-8"
            >
              <span className="font-sans font-bold text-4xl text-primary tracking-tight tabular-nums">
                &lt;
                <CountUp to={48} duration={1.4} suffix="h" />
              </span>
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-secondary mt-1.5">
                Antwortzeit
              </p>
              <p className="font-mono text-[9px] text-muted mt-0.5">auf jede Anfrage</p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={viewport}
              transition={{ delay: 0.16 }}
              className="text-center md:px-8"
            >
              <CountUp
                to={100}
                duration={1.8}
                suffix="%"
                className="font-sans font-bold text-4xl text-primary tracking-tight tabular-nums"
              />
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-secondary mt-1.5">
                Code-Eigentum
              </p>
              <p className="font-mono text-[9px] text-muted mt-0.5">bei Projektabschluss</p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={viewport}
              transition={{ delay: 0.24 }}
              className="text-center md:px-8"
            >
              <p className="font-sans font-bold text-4xl text-primary tracking-tight">DE</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-secondary mt-1.5">
                Server-Standort
              </p>
              <p className="font-mono text-[9px] text-muted mt-0.5">DSGVO-konform</p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════════
          STÄRKEN — Was Sie bekommen
          ════════════════════════════════════════════ */}
      <section className="border-t border-border py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <p className="font-mono text-xs text-muted uppercase tracking-[0.14em] mb-3">Was Sie bekommen</p>
              <motion.h2
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={viewport}
                className="font-sans font-bold tracking-[-0.03em] text-primary mb-5"
                style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)' }}
              >
                Keine Kompromisse.{' '}
                <span className="font-serif font-normal italic text-signal">Nirgendwo.</span>
              </motion.h2>
              <p className="text-sm text-secondary leading-[1.75]">
                Jedes Projekt wird mit denselben Standards entwickelt — egal ob kleine
                Landingpage oder komplexes SaaS-Produkt.
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border border-border rounded-xl overflow-hidden">
                {STAERKEN.map((s, i) => (
                  <motion.div
                    key={s.title}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={viewport}
                    transition={{ delay: i * 0.04, duration: 0.4 }}
                    className="bg-surface px-6 py-5 hover:bg-elevated transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-0.5 w-7 h-7 rounded-lg bg-signal/10
                        border border-signal/20 flex items-center justify-center">
                        <s.icon className="w-3.5 h-3.5 text-signal" />
                      </div>
                      <div>
                        <p className="font-sans font-semibold text-sm text-primary mb-1">{s.title}</p>
                        <p className="font-sans text-xs text-secondary leading-[1.65]">{s.text}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════════
          SERVEFLOW 3D SCROLL — ContainerScroll
          ════════════════════════════════════════════ */}
      <section className="overflow-hidden bg-surface border-t border-border">
        <ContainerScroll
          titleComponent={
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full
                border border-border bg-bg text-xs font-mono text-secondary uppercase tracking-[0.1em]">
                <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse flex-shrink-0" />
                ServeFlow · Restaurant-Management
              </span>
              <h2 className="font-sans font-bold tracking-[-0.03em] text-primary"
                style={{ fontSize: 'clamp(2rem,4vw,3.25rem)' }}>
                Ein Dashboard für{' '}
                <span className="font-serif font-normal italic text-signal">alles.</span>
              </h2>
              <p className="font-sans text-secondary text-base md:text-lg max-w-[48ch] mx-auto leading-[1.65]">
                Bestellungen, Reservierungen, Speisekarte, Tischplan, Statistiken — live, von überall.
              </p>
            </div>
          }
        >
          <AppScreenshotCarousel />
        </ContainerScroll>
      </section>

      {/* ════════════════════════════════════════════
          LEISTUNGEN — Was wir anbieten
          ════════════════════════════════════════════ */}
      <section className="border-t border-border py-20 md:py-28">
        <Container>
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="font-mono text-xs text-muted uppercase tracking-[0.14em] mb-3">Leistungen</p>
              <motion.h2
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={viewport}
                className="font-sans font-bold tracking-[-0.03em] text-primary"
                style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)' }}
              >
                Alles aus einer Hand.
              </motion.h2>
            </div>
            <Link
              to="/kontakt"
              className="hidden md:inline-flex items-center gap-2 text-sm text-secondary
                hover:text-primary transition-colors font-medium"
            >
              Anfrage stellen <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {WERKBANK.map((item, i) => (
              <motion.div
                key={item.href + item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link to={item.href} className="group block h-full">
                  <div className="relative h-full bg-surface border border-border rounded-xl p-6
                    hover:border-borderHigh hover:bg-elevated transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100
                      transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(232,74,28,0.08) 0%, transparent 70%)'
                      }}
                    />
                    <div className="relative">
                      <div className="flex items-start justify-between mb-4">
                        <span className="font-mono text-[10px] text-muted uppercase tracking-[0.1em]">
                          {item.tag}
                        </span>
                        {item.badge && (
                          <span className={`font-mono text-[9px] uppercase tracking-[0.1em]
                            border px-2 py-0.5 rounded-full ${BADGE_STYLE[item.badge] ?? ''}`}>
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <h3 className="font-sans font-bold text-lg text-primary mb-2">
                        {item.title}
                      </h3>
                      <p className="font-sans text-sm text-secondary leading-[1.65] mb-5">
                        {item.text}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] text-muted">{item.meta}</span>
                        <span className="text-muted group-hover:text-signal transition-colors
                          group-hover:translate-x-1 inline-block duration-300">
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════════
          BRANCHEN — Für wen wir bauen
          ════════════════════════════════════════════ */}
      <section className="border-t border-border py-20 md:py-28 bg-surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-12">
            <div className="lg:col-span-6">
              <p className="font-mono text-xs text-muted uppercase tracking-[0.14em] mb-3">Branchen</p>
              <motion.h2
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={viewport}
                className="font-sans font-bold tracking-[-0.03em] text-primary"
                style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)' }}
              >
                Software die zu Ihrer Branche{' '}
                <span className="font-serif font-normal italic text-signal">passt.</span>
              </motion.h2>
            </div>
            <div className="lg:col-span-6 lg:pt-2">
              <p className="text-secondary leading-[1.7] text-sm">
                Generische Software löst keine spezifischen Probleme. Deshalb bauen wir
                branchenspezifische Lösungen — auf die Anforderungen Ihres Betriebs zugeschnitten.
                Jede Branche bekommt ein eigenes Produkt, kein aufgeblähtes One-size-fits-all-Tool.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {BRANCHEN.map((b, i) => (
              <motion.div
                key={b.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ delay: i * 0.07, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="relative bg-bg border border-border rounded-xl p-6 overflow-hidden group
                  hover:border-borderHigh hover:bg-surface transition-all duration-300"
              >
                {b.live && (
                  <span className="absolute top-4 right-4 font-mono text-[9px] uppercase
                    tracking-[0.1em] bg-green-500/15 text-green-400 border border-green-500/30
                    px-2 py-0.5 rounded-full">
                    Live
                  </span>
                )}
                <div className="w-8 h-8 rounded-lg bg-signal/10 border border-signal/20
                  flex items-center justify-center mb-4">
                  <b.icon className="w-4 h-4 text-signal" />
                </div>
                <h3 className="font-sans font-bold text-base text-primary mb-2">{b.name}</h3>
                <p className="font-sans text-xs text-secondary leading-[1.65] mb-4">{b.text}</p>
                <span className="font-mono text-[9px] text-muted uppercase tracking-[0.1em]">
                  {b.status}
                </span>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════════
          PROZESS — Wie wir zusammenarbeiten
          ════════════════════════════════════════════ */}
      <section className="border-t border-border py-20 md:py-28">
        <Container>
          <div className="text-center mb-14">
            <p className="font-mono text-xs text-muted uppercase tracking-[0.14em] mb-3">Prozess</p>
            <motion.h2
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={viewport}
              className="font-sans font-bold tracking-[-0.03em] text-primary"
              style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)' }}
            >
              Drei Schritte zum fertigen Produkt.
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden border border-border">
            {[
              {
                nr: '01',
                title: 'Anfrage',
                text: 'Beschreib dein Projekt in zwei Sätzen. Kein Briefing-Dokument, keine Agentur-Formulare — direkte E-Mail oder Telefon genügt.',
                meta: 'Antwort in < 48h',
              },
              {
                nr: '02',
                title: 'Kick-off & Angebot',
                text: 'Ein 60-Minuten-Gespräch um Ziele, Umfang und Timeline zu klären. Danach ein Festpreis-Angebot — keine versteckten Stundensätze.',
                meta: 'Festpreis — kein Überraschungsbudget',
              },
              {
                nr: '03',
                title: 'Entwicklung & Launch',
                text: 'Direkte Kommunikation, wöchentliche Updates, echter Fortschritt. Launch und Übergabe — du bekommst den vollständigen Code.',
                meta: '2–6 Wochen Lieferzeit',
              },
            ].map((step, i) => (
              <motion.div
                key={step.nr}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="bg-surface px-8 py-10 relative"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-signal mb-4">{step.nr}</p>
                <h3 className="font-sans font-bold text-xl text-primary mb-3">{step.title}</h3>
                <p className="font-sans text-sm text-secondary leading-[1.7] mb-6">{step.text}</p>
                <div className="inline-flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-signal" />
                  <span className="font-mono text-[10px] text-muted uppercase tracking-[0.1em]">{step.meta}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════════
          TECH STACK — Womit wir bauen
          ════════════════════════════════════════════ */}
      <section className="border-t border-border bg-surface py-10">
        <Container>
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
            <p className="font-mono text-[10px] text-muted uppercase tracking-[0.14em] flex-shrink-0">
              Gebaut auf
            </p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-2">
              {TECH_STACK.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[10px] text-secondary bg-bg border border-border
                    px-3 py-1.5 rounded-md uppercase tracking-[0.08em]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════════
          ÜBER DRVN
          ════════════════════════════════════════════ */}
      <section className="border-t border-border py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6">
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={viewport}
              className="lg:col-span-4"
            >
              <p className="font-mono text-xs text-muted uppercase tracking-[0.14em] mb-3">Studio</p>
              <h2 className="font-sans font-bold tracking-[-0.03em] text-primary mb-8"
                style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)' }}>
                Klein.<br />Direkt.<br />Verlässlich.
              </h2>
              <div className="grid grid-cols-2 gap-px bg-border border border-border rounded-xl overflow-hidden">
                {[
                  { label: 'Standort',  value: 'Stuttgart' },
                  { label: 'Gegründet', value: '2024' },
                  { label: 'Sprachen',  value: 'DE · EN' },
                  { label: 'Response',  value: '< 48h' },
                ].map((s) => (
                  <div key={s.label} className="bg-surface px-4 py-3.5">
                    <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted mb-1.5">{s.label}</p>
                    <p className="font-sans font-semibold text-sm text-primary">{s.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={viewport}
              transition={{ delay: 0.1 }}
              className="lg:col-span-7 lg:col-start-6 flex flex-col justify-center"
            >
              <p className="text-lg text-secondary leading-[1.7] mb-5">
                drvn wird geführt von Ilias, Wirtschaftsinformatiker an der Universität Hohenheim.
                Was als Werkstudenten-Projekt begann, ist heute ein fokussiertes Studio für
                digitale Produkte und Automatisierungen im DACH-Raum.
              </p>
              <p className="text-lg text-secondary leading-[1.7] mb-8">
                Sie arbeiten direkt mit dem Entwickler — kein Account-Manager, kein Hand-Off,
                keine versteckten Kosten. Jedes Projekt bekommt volle Aufmerksamkeit.
              </p>
              <Link
                to="/kontakt"
                className="group inline-flex items-center gap-2 text-sm font-semibold
                  text-signal hover:text-signalHover transition-colors self-start"
              >
                Projekt besprechen
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════════
          JOURNAL
          ════════════════════════════════════════════ */}
      <section className="border-t border-border py-20 md:py-28 bg-surface">
        <Container>
          <div className="flex items-end justify-between gap-4 mb-10">
            <div>
              <p className="font-mono text-xs text-muted uppercase tracking-[0.14em] mb-3">Neuestes</p>
              <motion.h2
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={viewport}
                className="font-sans font-bold tracking-[-0.03em] text-primary"
                style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)' }}
              >
                Aus dem Studio.
              </motion.h2>
            </div>
            <Link
              to="/journal"
              className="inline-flex items-center gap-1.5 text-sm text-secondary
                hover:text-primary transition-colors font-medium"
            >
              Alle Einträge <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {JOURNAL_ENTRIES.slice(0, 3).map((entry, i) => (
              <motion.article
                key={entry.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="bg-bg border border-border rounded-xl p-6
                  hover:border-borderHigh hover:bg-surface transition-all duration-300"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="font-mono text-[10px] text-muted tabular-nums">{entry.datum}</span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-muted
                    bg-elevated border border-border px-2 py-0.5 rounded-full">
                    {entry.tag}
                  </span>
                </div>
                <h3 className="font-sans font-semibold text-base text-primary leading-snug mb-2">
                  {entry.title}
                </h3>
                <p className="font-sans text-sm text-secondary leading-[1.6]">{entry.lead}</p>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════════
          CTA
          ════════════════════════════════════════════ */}
      <section className="border-t border-border py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 50% 60% at 50% 100%, rgba(232,74,28,0.08) 0%, transparent 65%)' }}
        />
        <Container className="relative text-center">
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            className="max-w-2xl mx-auto"
          >
            <p className="font-mono text-xs text-muted uppercase tracking-[0.14em] mb-4">Kontakt</p>
            <h2 className="font-sans font-bold tracking-[-0.03em] text-primary mb-4"
              style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)' }}>
              Bereit anzufangen?
            </h2>
            <p className="text-secondary text-lg leading-[1.65] mb-8">
              Beschreiben Sie uns Ihr Projekt. Wir antworten innerhalb von 48 Stunden — ehrlich und direkt.
            </p>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 bg-signal hover:bg-signalHover
                text-white font-semibold px-8 py-4 rounded-lg transition-colors text-base"
            >
              Jetzt anfragen
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </Container>
      </section>
    </main>
    </>
  )
}
