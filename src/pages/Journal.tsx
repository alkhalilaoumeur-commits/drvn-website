import { motion } from 'framer-motion'
import { Container } from '../components/Container'
import { Eyebrow } from '../components/Eyebrow'
import { JOURNAL_ENTRIES } from '../lib/constants'
import { fadeUp, stagger, viewport } from '../lib/motion'

export default function JournalPage() {
  return (
    <main>
      <section className="pt-40 md:pt-56 pb-12 md:pb-16">
        <Container>
          <Eyebrow>Journal</Eyebrow>
          <motion.h1
            variants={fadeUp}
            initial="initial"
            animate="animate"
            className="font-sans font-light text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[1.08] tracking-[-0.02em] text-ink mb-6"
          >
            Notizen aus der Werkstatt.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.2 }}
            className="font-sans text-base text-secondary max-w-[52ch] leading-[1.6]"
          >
            Gedanken zu laufenden Projekten, technische Entscheidungen, gelegentliche Überlegungen zum Markt. Unregelmäßig.
          </motion.p>
        </Container>
      </section>

      <section className="border-t border-hairline py-16 md:py-20">
        <Container>
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            className="divide-y divide-hairline border-b border-hairline"
          >
            {JOURNAL_ENTRIES.map((entry) => (
              <motion.div
                key={entry.title}
                variants={fadeUp}
                className="py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 group"
              >
                <div className="md:col-span-3 space-y-1">
                  <p className="font-mono text-sm text-muted tabular-nums">{entry.datum}</p>
                  <p className="font-mono text-xs text-muted uppercase tracking-[0.08em]">{entry.tag}</p>
                </div>
                <div className="md:col-span-9">
                  <h2 className="font-sans font-medium text-xl text-ink mb-2 leading-tight">{entry.title}</h2>
                  <p className="font-sans text-base text-secondary leading-[1.6] mb-4">{entry.lead}</p>
                  <button
                    disabled
                    title="Folgt bald"
                    className="font-mono text-xs text-muted cursor-not-allowed"
                  >
                    Weiterlesen — folgt bald
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>
    </main>
  )
}
