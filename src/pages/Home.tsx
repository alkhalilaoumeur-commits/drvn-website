import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { Container } from '../components/Container'
import { WERKBANK, JOURNAL_ENTRIES } from '../lib/constants'
import { fadeUp, viewport } from '../lib/motion'

const HEADLINE = 'Wir bauen Software, die wirklich'.split(' ')

export default function Home() {
  return (
    <main>
      {/* ════════════════════════════════════════════════════
          HERO — Blur Reveal + Dark Ambient
          ════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-24">
        <div className="hero-ambient" />
        <div className="hero-grid" />

        <Container className="relative z-10">
          {/* Pill badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-surface text-xs font-mono text-secondary uppercase tracking-[0.1em]">
              <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse" />
              Studio · Stuttgart · DACH
            </span>
          </motion.div>

          {/* Headline — word by word blur reveal */}
          <h1 className="font-sans font-bold text-[clamp(2.8rem,6vw,5.5rem)] leading-[1.04] tracking-[-0.03em] text-primary mb-4" style={{ maxWidth: '18ch' }}>
            {HEADLINE.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, filter: 'blur(12px)', y: 16 }}
                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.1 + i * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block mr-[0.26em]"
              >
                {word}
              </motion.span>
            ))}
            <br />
            <motion.span
              initial={{ opacity: 0, filter: 'blur(12px)', y: 16 }}
              animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.1 + HEADLINE.length * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-serif font-normal italic text-signal"
            >
              funktioniert.
            </motion.span>
          </h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
            className="text-lg text-secondary leading-[1.65] max-w-[50ch] mb-10"
          >
            drvn ist ein Stuttgarter Studio für digitale Produkte und Websites.
            Kein Agentur-Modell. Direkter Kontakt mit dem Entwickler — von Konzept bis Launch.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.95 }}
            className="flex flex-wrap gap-4 mb-20"
          >
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 bg-signal hover:bg-signalHover text-white font-semibold px-6 py-3.5 rounded-lg transition-colors text-sm"
            >
              Projekt starten
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              to="/serveflow"
              className="inline-flex items-center gap-2 bg-surface hover:bg-elevated text-primary border border-border hover:border-borderHigh font-semibold px-6 py-3.5 rounded-lg transition-colors text-sm"
            >
              ServeFlow entdecken
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden border border-border"
          >
            {[
              { label: 'Standort',  value: 'Stuttgart, DE' },
              { label: 'Gegründet', value: '2024' },
              { label: 'Markt',     value: 'DACH' },
              { label: 'Response',  value: '< 48 Stunden' },
            ].map((s) => (
              <div key={s.label} className="bg-surface px-5 py-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted mb-1.5">{s.label}</p>
                <p className="font-sans font-semibold text-sm text-primary">{s.value}</p>
              </div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ════════════════════════════════════════════════════
          LEISTUNGEN — Nummerierte Cards mit Hover-Depth
          ════════════════════════════════════════════════════ */}
      <section className="border-t border-border py-20 md:py-28">
        <Container>
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="font-mono text-xs text-muted uppercase tracking-[0.14em] mb-3">Leistungen</p>
              <motion.h2
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={viewport}
                className="font-sans font-bold text-[clamp(1.8rem,3.2vw,2.6rem)] tracking-[-0.03em] text-primary"
              >
                Was wir bauen.
              </motion.h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {WERKBANK.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link to={item.href} className="group block h-full">
                  <div className="relative h-full bg-surface border border-border rounded-xl p-7 hover:border-borderHigh hover:bg-elevated transition-all duration-300 overflow-hidden">
                    {/* Hover glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(232,74,28,0.07) 0%, transparent 70%)' }}
                    />

                    <div className="relative">
                      {/* Number */}
                      <span className="font-mono text-[11px] text-muted mb-4 block">0{i + 1}</span>

                      {/* Title */}
                      <h3 className="font-sans font-bold text-xl text-primary mb-3 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>

                      {/* Tag */}
                      <span className="inline-block font-mono text-[10px] uppercase tracking-[0.1em] text-muted bg-elevated border border-border px-2.5 py-1 rounded-full mb-4">
                        {item.tag}
                      </span>

                      {/* Text */}
                      <p className="font-sans text-sm text-secondary leading-[1.65] mb-6">
                        {item.text}
                      </p>

                      {/* Meta + Arrow */}
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] text-muted">{item.meta}</span>
                        <span className="text-secondary group-hover:text-signal transition-colors group-hover:translate-x-1 inline-block transition-transform duration-300">
                          <ArrowRight className="w-4 h-4" />
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

      {/* ════════════════════════════════════════════════════
          ÜBER DRVN — Asymmetrisch, Info-Grid
          ════════════════════════════════════════════════════ */}
      <section className="border-t border-border py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6">
            {/* Left */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={viewport}
              className="lg:col-span-5"
            >
              <p className="font-mono text-xs text-muted uppercase tracking-[0.14em] mb-3">Studio</p>
              <h2 className="font-sans font-bold text-[clamp(1.8rem,3.2vw,2.6rem)] tracking-[-0.03em] text-primary mb-8">
                Klein.<br />Direkt.<br />Verlässlich.
              </h2>

              <div className="grid grid-cols-2 gap-px bg-border border border-border rounded-xl overflow-hidden">
                {[
                  { label: 'Gründung', value: '2024' },
                  { label: 'Standort', value: 'Stuttgart' },
                  { label: 'Team',     value: '1 Entwickler' },
                  { label: 'Kapazität', value: '3–5 / Jahr' },
                ].map((s) => (
                  <div key={s.label} className="bg-surface px-5 py-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted mb-1">{s.label}</p>
                    <p className="font-sans font-semibold text-sm text-primary">{s.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={viewport}
              transition={{ delay: 0.12 }}
              className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center"
            >
              <p className="text-lg text-secondary leading-[1.7] mb-5">
                drvn wird geführt von Ilias, Wirtschaftsinformatiker an der Universität Hohenheim.
                Was als Werkstudenten-Projekt begann, ist heute ein fokussiertes Studio für digitale
                Produkte im DACH-Raum.
              </p>
              <p className="text-lg text-secondary leading-[1.7] mb-8">
                Klein bleiben ist Absicht. Du arbeitest direkt mit dem Entwickler —
                kein Account-Manager, kein Overhead, keine versteckten Kosten zwischen
                Idee und Umsetzung.
              </p>
              <Link
                to="/journal"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-signal hover:text-signalHover transition-colors self-start"
              >
                Mehr im Journal
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════════════════
          JOURNAL — 3 letzte Einträge
          ════════════════════════════════════════════════════ */}
      <section className="border-t border-border py-20 md:py-28">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <p className="font-mono text-xs text-muted uppercase tracking-[0.14em] mb-3">Neuestes</p>
              <motion.h2
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={viewport}
                className="font-sans font-bold text-[clamp(1.8rem,3.2vw,2.6rem)] tracking-[-0.03em] text-primary"
              >
                Aus dem Studio.
              </motion.h2>
            </div>
            <Link
              to="/journal"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-primary transition-colors"
            >
              Alle Einträge <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {JOURNAL_ENTRIES.slice(0, 3).map((entry, i) => (
              <motion.article
                key={entry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ delay: i * 0.09, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="bg-surface border border-border rounded-xl p-6 hover:border-borderHigh hover:bg-elevated transition-all duration-300 group cursor-default"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs text-muted tabular-nums">{entry.datum}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted bg-elevated border border-border px-2 py-0.5 rounded-full">
                    {entry.tag}
                  </span>
                </div>
                <h3 className="font-sans font-semibold text-base text-primary leading-snug mb-2 group-hover:text-primary">
                  {entry.title}
                </h3>
                <p className="font-sans text-sm text-secondary leading-[1.6]">{entry.lead}</p>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════════════════
          CTA — Final
          ════════════════════════════════════════════════════ */}
      <section className="border-t border-border py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 100%, rgba(232,74,28,0.12) 0%, transparent 65%)' }}
        />
        <Container className="relative">
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            className="text-center max-w-2xl mx-auto"
          >
            <p className="font-mono text-xs text-muted uppercase tracking-[0.14em] mb-4">Kontakt</p>
            <h2 className="font-sans font-bold text-[clamp(1.8rem,3.2vw,2.6rem)] tracking-[-0.03em] text-primary mb-4">
              Bereit anzufangen?
            </h2>
            <p className="text-secondary text-lg leading-[1.65] mb-8">
              Erzähl uns von deinem Projekt. Antwort innerhalb von 48 Stunden.
            </p>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 bg-signal hover:bg-signalHover text-white font-semibold px-8 py-4 rounded-lg transition-colors text-base"
            >
              Jetzt Kontakt aufnehmen
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </Container>
      </section>
    </main>
  )
}
