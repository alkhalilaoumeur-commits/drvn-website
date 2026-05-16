import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Container } from '../components/Container'
import { Eyebrow } from '../components/Eyebrow'
import { WERKBANK, JOURNAL_ENTRIES, BRAND } from '../lib/constants'
import { stagger, wordFadeUp, fadeUp, viewport } from '../lib/motion'

const HERO_WORDS = ['Wir', 'bauen', 'Software,', 'die', 'in', 'zehn', 'Jahren', 'noch']

export default function Home() {
  return (
    <main>
      {/* ── SECTION 1: Hero ─────────────────────────────────── */}
      <section className="pt-40 md:pt-56 pb-20 md:pb-28">
        <Container>
          <Eyebrow number="01">Werkstatt · Stuttgart</Eyebrow>

          <motion.h1
            variants={stagger}
            initial="initial"
            animate="animate"
            className="font-sans font-light text-[clamp(2.75rem,6.5vw,5.25rem)] leading-[1.02] tracking-[-0.02em] text-ink mb-16 max-w-[14ch]"
            aria-label="Wir bauen Software, die in zehn Jahren noch funktioniert."
          >
            {HERO_WORDS.map((w, i) => (
              <motion.span
                key={i}
                variants={wordFadeUp}
                className="inline-block mr-[0.22em]"
              >
                {w}
              </motion.span>
            ))}
            {' '}
            <motion.span
              variants={wordFadeUp}
              className="inline-block font-serif italic text-signal"
            >
              funktioniert.
            </motion.span>
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6">
            <motion.div
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.5 }}
              className="md:col-span-7"
            >
              <p className="font-sans text-lg text-secondary leading-[1.55] max-w-[52ch]">
                drvn ist eine kleine Werkstatt für digitale Produkte und Websites. Wir arbeiten mit Unternehmen im deutschsprachigen Raum, die mehr wollen als eine schnelle Lösung.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.65 }}
              className="md:col-span-4 md:col-start-9 flex flex-col gap-3"
            >
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 bg-ink text-paper px-5 py-3 text-sm font-medium hover:bg-ink/85 transition-colors self-start"
              >
                Projekt starten
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <div className="space-y-0.5">
                <p className="font-sans text-xs text-secondary">Antwort innerhalb von 48 Stunden.</p>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="font-mono text-xs text-muted hover:text-secondary transition-colors"
                >
                  {BRAND.email}
                </a>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── SECTION 2: Werkbank ─────────────────────────────── */}
      <section className="border-t border-hairline py-24 md:py-28">
        <Container>
          <Eyebrow number="02">Werkbank</Eyebrow>

          <motion.h2
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            className="font-sans font-light text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.15] tracking-[-0.015em] text-ink mb-12"
          >
            Drei Bereiche.
          </motion.h2>

          <div className="divide-y divide-hairline border-t border-hairline">
            {WERKBANK.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="group flex flex-col md:flex-row md:items-start gap-4 md:gap-0 py-8 md:py-10 hover:bg-surface transition-colors -mx-6 md:-mx-10 lg:-mx-16 px-6 md:px-10 lg:px-16"
              >
                <div className="md:w-64 flex-shrink-0">
                  <p className="font-sans font-medium text-xl text-ink leading-tight">{item.title}</p>
                  <p className="font-mono text-xs text-muted mt-1">{item.tag}</p>
                </div>

                <div className="flex-1">
                  <p className="font-sans text-base text-secondary leading-[1.6] max-w-[58ch]">
                    {item.text}
                  </p>
                  <p className="font-mono text-xs text-muted mt-3">{item.meta}</p>
                </div>

                <div className="flex-shrink-0 self-center md:self-start md:mt-1 ml-auto">
                  <span className="font-mono text-base text-muted group-hover:text-ink transition-colors group-hover:translate-x-1 inline-block transition-transform">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ── SECTION 3: Über drvn ────────────────────────────── */}
      <section className="border-t border-hairline py-24 md:py-28">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-6">
            {/* Left col */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={viewport}
              className="md:col-span-4"
            >
              <Eyebrow number="03">Werkstatt</Eyebrow>
              <div className="divide-y divide-hairline border-y border-hairline mt-2">
                {[
                  { label: 'Standort', value: 'Stuttgart' },
                  { label: 'Gegründet', value: '2024' },
                  { label: 'Projekte / Jahr', value: '3–5' },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between py-3">
                    <span className="font-mono text-xs text-muted uppercase tracking-[0.08em]">{row.label}</span>
                    <span className="font-mono text-xs text-ink tabular-nums">{row.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right col */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={viewport}
              transition={{ delay: 0.1 }}
              className="md:col-span-7 md:col-start-6"
            >
              <p className="font-sans text-lg text-secondary leading-[1.55] mb-6 max-w-[52ch]">
                drvn wird geführt von Ilias, Wirtschaftsinformatiker an der Universität Hohenheim. Was als Werkstudent-Idee begann, ist heute eine spezialisierte Werkstatt für digitale Produkte mit Fokus auf den deutschsprachigen Markt.
              </p>
              <p className="font-sans text-lg text-secondary leading-[1.55] mb-8 max-w-[52ch]">
                Klein bleiben ist Absicht. Direkter Kontakt mit dem Entwickler, kein Account-Management, kein Hand-Off zwischen Disziplinen.
              </p>
              <Link
                to="/journal"
                className="group inline-flex items-center gap-1.5 text-primary text-sm font-medium border-b border-ink pb-0.5 hover:border-signal hover:text-signal transition-colors"
              >
                Mehr im Journal
                <span className="font-mono group-hover:translate-x-0.5 transition-transform inline-block">→</span>
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── SECTION 4: Journal-Teaser ────────────────────────── */}
      <section className="border-t border-hairline py-24 md:py-28">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <Eyebrow number="04">Neuestes</Eyebrow>
              <h2 className="font-sans font-light text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.15] tracking-[-0.015em] text-ink">
                Aktuell auf dem Tisch.
              </h2>
            </div>
          </div>

          <div className="divide-y divide-hairline border-t border-hairline">
            {JOURNAL_ENTRIES.slice(0, 3).map((entry) => (
              <div
                key={entry.title}
                className="py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6"
              >
                <div className="md:col-span-3 flex md:flex-col gap-4 md:gap-1">
                  <span className="font-mono text-sm text-muted tabular-nums">{entry.datum}</span>
                  <span className="font-mono text-xs text-muted uppercase tracking-[0.08em]">{entry.tag}</span>
                </div>
                <div className="md:col-span-9">
                  <p className="font-sans font-medium text-xl text-ink mb-2 leading-tight">{entry.title}</p>
                  <p className="font-sans text-base text-secondary leading-[1.6]">{entry.lead}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              to="/journal"
              className="group inline-flex items-center gap-1.5 text-primary text-sm font-medium border-b border-ink pb-0.5 hover:border-signal hover:text-signal transition-colors"
            >
              Alle Einträge ansehen
              <span className="font-mono group-hover:translate-x-0.5 transition-transform inline-block">→</span>
            </Link>
          </div>
        </Container>
      </section>
    </main>
  )
}
