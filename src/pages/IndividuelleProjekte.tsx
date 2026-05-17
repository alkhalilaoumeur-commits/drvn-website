import { useState } from 'react'
import { motion } from 'framer-motion'
import { Container } from '../components/Container'
import { Eyebrow } from '../components/Eyebrow'
import { fadeUp, viewport } from '../lib/motion'
import SEO from '../components/SEO'
import { BRAND } from '../lib/constants'
import { track, Events } from '../lib/analytics'

export default function IndividuelleProjektePage() {
  return (
    <>
      <SEO
        title="Individuelle Softwareentwicklung & Projekte | drvn Stuttgart"
        description="drvn übernimmt individuelle Softwareprojekte und langfristige Entwicklungspartnerschaften. Custom Software, Web-Apps, SaaS-Entwicklung für den DACH-Markt. Maximal drei Projekte pro Jahr."
        path="/individuelle-projekte"
        keywords="individuelle Software Entwicklung, Custom Software DACH, Softwareentwickler Stuttgart, Software auf Maß, Web App Entwicklung, SaaS Entwicklung Deutschland"
      />
      <main>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="pt-40 md:pt-56 pb-20 md:pb-28">
        <Container>
          <Eyebrow>Selektiv · Maximal drei pro Jahr</Eyebrow>

          <motion.h1
            variants={fadeUp}
            initial="initial"
            animate="animate"
            className="font-sans font-light text-[clamp(2.75rem,6.5vw,5.25rem)] leading-[1.02] tracking-[-0.02em] text-ink mb-12 max-w-[12ch]"
          >
            Individuelle Projekte.
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6">
            <motion.div
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.3 }}
              className="md:col-span-6"
            >
              <p className="font-sans text-lg text-secondary leading-[1.55] max-w-[50ch]">
                Individuelle Softwareprojekte und längerfristige Entwicklungspartnerschaften. Wir nehmen jedes Jahr maximal drei Projekte an — dafür konsequent und vollständig.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.45 }}
              className="md:col-span-4 md:col-start-9"
            >
              <div className="divide-y divide-hairline border-y border-hairline">
                {[
                  { label: 'Anfragen 2026',     value: 'Offen' },
                  { label: 'Plätze verfügbar',  value: '2 von 3' },
                  { label: 'Mindestlaufzeit',   value: '6 Monate' },
                  { label: 'Engagement',        value: 'Retainer oder Projekt' },
                  { label: 'Entscheidungszeit', value: '2 Wochen ab Anfrage' },
                ].map((s) => (
                  <div key={s.label} className="flex justify-between py-3 gap-2">
                    <span className="font-mono text-xs text-muted uppercase tracking-[0.08em] flex-shrink-0">{s.label}</span>
                    <span className="font-mono text-xs text-ink text-right">{s.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── FORMAT: Editorial Lauftext + Tabelle ─────────── */}
      <section className="border-t border-hairline py-24 md:py-28">
        <Container>
          <Eyebrow>Format</Eyebrow>
          <motion.h2
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            className="font-sans font-light text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.15] tracking-[-0.015em] text-ink mb-12"
          >
            Wofür individuelle Projekte gedacht sind.
          </motion.h2>

          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-20"
          >
            <p className="font-sans text-lg text-secondary leading-[1.55]">
              Individuelle Projekte sind für Unternehmen, die nicht nur eine Website oder ein fertiges Produkt brauchen, sondern einen Entwicklungspartner über einen längeren Zeitraum. Das kann ein internes Tool sein, das mit dem Unternehmen wächst. Eine Plattform, die neue Funktionen pro Quartal braucht. Oder ein technisches Vorhaben, das schrittweise entstehen muss.
            </p>
            <p className="font-sans text-lg text-secondary leading-[1.55]">
              Im Gegensatz zu Auftragsarbeit verkaufen wir hier keine Wochenpakete, sondern Aufmerksamkeit über Zeit. Wir denken mit, schlagen vor, entwickeln — und sind im Zweifel auch derjenige, der sagt: Das brauchst du nicht.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-hairline"
          >
            {/* Passt */}
            <div className="md:border-r md:border-hairline">
              <p className="font-mono text-xs text-muted uppercase tracking-[0.12em] py-4 border-b border-hairline">Passt</p>
              <div className="divide-y divide-hairline">
                {[
                  'Klare Vision, unklare Umsetzung',
                  'Langfristiges Denken',
                  'Direkter Kontakt mit Entscheider',
                  'Budget vorhanden und festgelegt',
                  'Bereit für Iteration',
                ].map((item) => (
                  <p key={item} className="font-sans text-base text-secondary py-3 pr-8">{item}</p>
                ))}
              </div>
            </div>

            {/* Passt nicht */}
            <div className="md:pl-8">
              <p className="font-mono text-xs text-muted uppercase tracking-[0.12em] py-4 border-b border-hairline">Passt nicht</p>
              <div className="divide-y divide-hairline">
                {[
                  'Festes Pflichtenheft, feste Deadline',
                  'Quick Fix gesucht',
                  'Mehrere Stakeholder-Ebenen',
                  'Budget noch unklar',
                  'Final-Lieferung ohne Iteration erwartet',
                ].map((item) => (
                  <p key={item} className="font-sans text-base text-secondary py-3">{item}</p>
                ))}
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ── ANFRAGE ──────────────────────────────────────── */}
      <section className="border-t border-hairline py-24 md:py-28">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-6">
            <div className="md:col-span-4">
              <Eyebrow>Anfrage</Eyebrow>
              <h2 className="font-sans font-light text-[clamp(1.5rem,2.5vw,2rem)] leading-[1.2] tracking-[-0.015em] text-ink mb-4">
                Wenn das passt.
              </h2>
              <p className="font-sans text-sm text-secondary leading-[1.6]">
                Wir lesen jede Anfrage persönlich. Antwort innerhalb von 5 Werktagen. Wenn es nicht passt, sagen wir warum.
              </p>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <IndividuelleProjekteForm />
            </div>
          </div>
        </Container>
      </section>
      </main>
    </>
  )
}

function IndividuelleProjekteForm() {
  const [sent, setSent] = useState(false)

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    track(Events.KONTAKT_FORM_SUBMITTED, { source: 'individuelle-projekte-anfrage' })
    const subject = encodeURIComponent(`Ventures-Anfrage von ${data.get('name')}`)
    const body = encodeURIComponent(
      `Name: ${data.get('name')}\nE-Mail: ${data.get('email')}\nUnternehmen/Rolle: ${data.get('company')}\n\n${data.get('message')}\n\nBudget: ${data.get('budget')}\nZeitrahmen: ${data.get('zeitrahmen')}`
    )
    window.open(`mailto:${BRAND.email}?subject=${subject}&body=${body}`, '_self')
    setSent(true)
  }

  if (sent) {
    return (
      <p className="font-mono text-sm text-secondary border-t border-hairline pt-6">
        Anfrage eingegangen. Wir melden uns innerhalb von 5 Werktagen.
      </p>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <Field label="Name" name="name" required />
        <Field label="E-Mail" name="email" type="email" required />
      </div>
      <Field label="Unternehmen / Rolle" name="company" />
      <Field label="Worum geht's? Was ist das Problem?" name="message" as="textarea" required rows={6} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <Select label="Budget" name="budget" required options={['10.000–25.000 €', '25.000–50.000 €', '50.000–100.000 €', '100.000 € +']} />
        <Select label="Zeitrahmen" name="zeitrahmen" required options={['Sofort', 'Q3 2026', 'Q4 2026', 'Langfristig']} />
      </div>
      <button
        type="submit"
        className="group inline-flex items-center gap-1.5 text-primary text-sm font-medium border-b border-ink pb-0.5 hover:border-signal hover:text-signal transition-colors"
      >
        Anfrage senden <span className="font-mono group-hover:translate-x-0.5 transition-transform inline-block">→</span>
      </button>
    </form>
  )
}

function Field({ label, name, type = 'text', required = false, as: As = 'input', rows }: {
  label: string; name: string; type?: string; required?: boolean; as?: 'input' | 'textarea'; rows?: number
}) {
  return (
    <div>
      <label className="block font-mono text-xs uppercase tracking-[0.1em] text-muted mb-2">{label}</label>
      {As === 'textarea' ? (
        <textarea name={name} required={required} rows={rows ?? 4} className="input-editorial w-full resize-none" />
      ) : (
        <input name={name} type={type} required={required} className="input-editorial w-full" />
      )}
    </div>
  )
}

function Select({ label, name, required = false, options }: {
  label: string; name: string; required?: boolean; options: string[]
}) {
  return (
    <div>
      <label className="block font-mono text-xs uppercase tracking-[0.1em] text-muted mb-2">{label}</label>
      <select name={name} required={required} defaultValue="" className="input-editorial w-full">
        <option value="" disabled />
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  )
}
