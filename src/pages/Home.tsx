import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { Container } from '../components/Container'
import { Eyebrow } from '../components/Eyebrow'
import { WERKBANK, JOURNAL_ENTRIES, BRAND } from '../lib/constants'
import { fadeUp, viewport } from '../lib/motion'

export default function Home() {
  return (
    <main>
      {/* ── SECTION 1: Hero ─────────────────────────────────── */}
      <section className="pt-40 md:pt-52 pb-20 md:pb-28">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <Eyebrow number="01">Studio · Stuttgart</Eyebrow>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="font-sans font-bold text-[clamp(2.8rem,6vw,5rem)] leading-[1.05] tracking-[-0.03em] text-ink mb-8"
            style={{ maxWidth: '16ch' }}
          >
            Wir bauen Software,{' '}
            <br className="hidden md:block" />
            die wirklich{' '}
            <span className="font-serif italic font-normal text-signal">
              funktioniert.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
            className="font-sans text-lg text-secondary leading-[1.6] max-w-[54ch] mb-10"
          >
            drvn ist ein Stuttgarter Studio für digitale Produkte und Websites.
            Wir arbeiten direkt mit Unternehmen im DACH-Raum — kein Overhead, kein Agentur-Modell.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.38 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 bg-ink text-paper px-6 py-3.5 text-sm font-semibold hover:bg-ink/85 transition-colors"
            >
              Projekt besprechen
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              to="/serveflow"
              className="group inline-flex items-center gap-1.5 text-ink text-sm font-medium border-b border-hairline pb-0.5 hover:border-signal hover:text-signal transition-colors"
            >
              ServeFlow entdecken
              <span className="font-mono">→</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 pt-10 border-t border-hairline grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0"
          >
            {[
              { label: 'Standort',     value: 'Stuttgart' },
              { label: 'Gegründet',    value: '2024' },
              { label: 'Markt',        value: 'DACH' },
              { label: 'Kontakt',      value: BRAND.email, mono: true, href: `mailto:${BRAND.email}` },
            ].map((s) => (
              <div key={s.label} className="md:border-r md:border-hairline md:pr-8 last:border-0">
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted mb-1">{s.label}</p>
                {s.href ? (
                  <a href={s.href} className="font-mono text-xs text-ink hover:text-signal transition-colors break-all">
                    {s.value}
                  </a>
                ) : (
                  <p className={`text-sm text-ink font-medium ${s.mono ? 'font-mono text-xs' : ''}`}>{s.value}</p>
                )}
              </div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ── SECTION 2: Werkbank ─────────────────────────────── */}
      <section className="border-t border-hairline py-20 md:py-28">
        <Container>
          <div className="flex items-end justify-between mb-10">
            <div>
              <Eyebrow number="02">Leistungen</Eyebrow>
              <motion.h2
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={viewport}
                className="font-sans font-bold text-[clamp(1.6rem,2.8vw,2.25rem)] tracking-[-0.025em] text-ink mt-1"
              >
                Was wir bauen.
              </motion.h2>
            </div>
          </div>

          <div className="divide-y divide-hairline border-t border-hairline">
            {WERKBANK.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={viewport}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  to={item.href}
                  className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-0 py-7 md:py-9 hover:bg-surface transition-colors -mx-6 md:-mx-10 lg:-mx-16 px-6 md:px-10 lg:px-16"
                >
                  <div className="md:w-56 flex-shrink-0">
                    <p className="font-sans font-semibold text-xl text-ink leading-tight">{item.title}</p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted mt-1">{item.tag}</p>
                  </div>

                  <div className="flex-1 md:pl-8">
                    <p className="font-sans text-base text-secondary leading-[1.6] max-w-[56ch]">
                      {item.text}
                    </p>
                  </div>

                  <div className="md:pl-8 flex-shrink-0">
                    <p className="font-mono text-xs text-muted mb-2">{item.meta}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-ink group-hover:text-signal transition-colors">
                      Mehr <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── SECTION 3: Über ──────────────────────────────────── */}
      <section className="border-t border-hairline py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6">
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={viewport}
              className="md:col-span-4"
            >
              <Eyebrow number="03">Studio</Eyebrow>
              <h2 className="font-sans font-bold text-[clamp(1.6rem,2.8vw,2.25rem)] tracking-[-0.025em] text-ink mt-1 mb-6">
                Klein und direkt.
              </h2>
              <div className="divide-y divide-hairline border border-hairline">
                {[
                  { label: 'Standort',   value: 'Stuttgart, DE' },
                  { label: 'Gegründet',  value: '2024' },
                  { label: 'Team',       value: '1 Entwickler' },
                  { label: 'Kapazität',  value: '3–5 Projekte / Jahr' },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between px-4 py-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted">{row.label}</span>
                    <span className="font-mono text-xs text-ink tabular-nums">{row.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={viewport}
              transition={{ delay: 0.12 }}
              className="md:col-span-7 md:col-start-6 flex flex-col justify-center"
            >
              <p className="font-sans text-lg text-secondary leading-[1.65] mb-6 max-w-[52ch]">
                drvn wird geführt von Ilias, Wirtschaftsinformatiker an der Universität Hohenheim. Was als Werkstudent-Idee begann, ist heute ein spezialisiertes Studio für digitale Produkte im deutschsprachigen Raum.
              </p>
              <p className="font-sans text-lg text-secondary leading-[1.65] mb-10 max-w-[52ch]">
                Klein bleiben ist eine bewusste Entscheidung. Du arbeitest direkt mit dem Entwickler — kein Account-Manager, kein Hand-Off, keine versteckten Kosten.
              </p>
              <Link
                to="/journal"
                className="group inline-flex items-center gap-1.5 text-ink text-sm font-semibold border-b border-ink pb-0.5 hover:border-signal hover:text-signal transition-colors self-start"
              >
                Mehr im Journal
                <span className="font-mono group-hover:translate-x-0.5 transition-transform inline-block">→</span>
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── SECTION 4: Journal-Teaser ────────────────────────── */}
      <section className="border-t border-hairline py-20 md:py-28">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <Eyebrow number="04">Neuestes</Eyebrow>
              <h2 className="font-sans font-bold text-[clamp(1.6rem,2.8vw,2.25rem)] tracking-[-0.025em] text-ink mt-1">
                Aus dem Studio.
              </h2>
            </div>
            <Link
              to="/journal"
              className="group inline-flex items-center gap-1.5 text-ink text-sm font-medium border-b border-hairline pb-0.5 hover:border-signal hover:text-signal transition-colors self-start md:self-auto"
            >
              Alle Einträge <span className="font-mono">→</span>
            </Link>
          </div>

          <div className="divide-y divide-hairline border-t border-hairline">
            {JOURNAL_ENTRIES.slice(0, 3).map((entry) => (
              <div
                key={entry.title}
                className="py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6"
              >
                <div className="md:col-span-3 flex md:flex-col gap-3 md:gap-1">
                  <span className="font-mono text-xs text-muted tabular-nums">{entry.datum}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted">{entry.tag}</span>
                </div>
                <div className="md:col-span-9">
                  <p className="font-sans font-semibold text-lg text-ink mb-2 leading-tight">{entry.title}</p>
                  <p className="font-sans text-base text-secondary leading-[1.6]">{entry.lead}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  )
}
