import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Container } from '../components/Container'
import { ContainerScroll } from '../components/ui/ContainerScroll'
import { AppScreenshotCarousel } from '../components/ui/AppScreenshotCarousel'
import { WERKBANK, JOURNAL_ENTRIES } from '../lib/constants'
import { fadeUp, viewport } from '../lib/motion'

const HEADLINE = 'Software die Unternehmen'.split(' ')

const BADGE_STYLE: Record<string, string> = {
  'Live':  'bg-green-500/15 text-green-400 border-green-500/30',
  'Beta':  'bg-yellow-500/15 text-yellow-400 border-yellow-500/30',
}

export default function Home() {
  return (
    <main>
      {/* ════════════════════════════════════════════
          HERO — Screenshot Preview + Headline
          ════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-16">
        {/* Background effects */}
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
            {/* Left — Headline + CTA */}
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

            {/* Right — App Screenshot in Browser Frame */}
            <motion.div
              initial={{ opacity: 0, x: 40, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 relative"
            >
              {/* Glow behind screenshot */}
              <div className="absolute -inset-4 bg-signal/10 rounded-2xl blur-2xl pointer-events-none" />

              {/* Browser frame */}
              <div className="relative rounded-xl overflow-hidden border border-border shadow-2xl"
                style={{ boxShadow: '0 25px 60px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.06)' }}
              >
                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-4 py-3 bg-elevated border-b border-border">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                    <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                    <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <span className="font-mono text-xs text-muted bg-surface border border-border
                      px-4 py-1 rounded-md">
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

              {/* Floating badge — live indicator */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.4 }}
                className="absolute -bottom-3 -left-3 bg-surface border border-border
                  rounded-xl px-4 py-2.5 flex items-center gap-2.5 shadow-xl"
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-mono text-xs text-secondary">14 Restaurants live</span>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════════
          SERVEFLOW 3D SCROLL — ContainerScroll
          ════════════════════════════════════════════ */}
      <section className="overflow-hidden bg-surface">
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
                Du arbeitest direkt mit dem Entwickler — kein Account-Manager, kein Hand-Off,
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
      <section className="border-t border-border py-20 md:py-28">
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
                className="bg-surface border border-border rounded-xl p-6
                  hover:border-borderHigh hover:bg-elevated transition-all duration-300"
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
              Beschreib uns dein Projekt. Wir antworten innerhalb von 48 Stunden — ehrlich und direkt.
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
  )
}
