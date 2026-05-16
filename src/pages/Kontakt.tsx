import { useState } from 'react'
import { motion } from 'framer-motion'
import { Container } from '../components/Container'
import { Eyebrow } from '../components/Eyebrow'
import { BRAND } from '../lib/constants'
import { track, Events } from '../lib/analytics'
import { fadeUp, viewport } from '../lib/motion'

export default function KontaktPage() {
  return (
    <main>
      <section className="pt-40 md:pt-56 pb-12 md:pb-16">
        <Container>
          <Eyebrow>Kontakt</Eyebrow>
          <motion.h1
            variants={fadeUp}
            initial="initial"
            animate="animate"
            className="font-sans font-light text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[1.08] tracking-[-0.02em] text-ink"
          >
            Hallo.
          </motion.h1>
        </Container>
      </section>

      <section className="border-t border-hairline py-16 md:py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-6">
            {/* Linke Spalte: Kontaktinfos */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={viewport}
              className="md:col-span-4 space-y-10"
            >
              <div>
                <h3 className="font-sans font-medium text-base text-ink mb-2">Schreib direkt</h3>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="block font-mono text-sm text-secondary hover:text-ink transition-colors break-all"
                >
                  {BRAND.email}
                </a>
              </div>

              <div>
                <h3 className="font-sans font-medium text-base text-ink mb-2">Komm vorbei</h3>
                <p className="font-sans text-sm text-secondary">Stuttgart</p>
                <p className="font-sans text-sm text-secondary">Deutschland</p>
                <p className="font-sans text-sm text-secondary mt-2">Termin per E-Mail.</p>
              </div>

              <div>
                <h3 className="font-sans font-medium text-base text-ink mb-2">Antwortzeit</h3>
                <p className="font-sans text-sm text-secondary">Innerhalb von 48 Stunden,</p>
                <p className="font-sans text-sm text-secondary">jeden Werktag.</p>
              </div>

              <div>
                <h3 className="font-sans font-medium text-base text-ink mb-2">Sprachen</h3>
                <p className="font-sans text-sm text-secondary">Deutsch · Englisch</p>
                <p className="font-sans text-sm text-secondary">Französisch (A2)</p>
              </div>
            </motion.div>

            {/* Rechte Spalte: Formular */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={viewport}
              transition={{ delay: 0.1 }}
              className="md:col-span-7 md:col-start-6"
            >
              <KontaktForm />
            </motion.div>
          </div>
        </Container>
      </section>
    </main>
  )
}

function KontaktForm() {
  const [sent, setSent] = useState(false)

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    track(Events.KONTAKT_FORM_SUBMITTED, {
      source: 'kontakt-page',
      betreff: String(data.get('betreff') || 'Allgemein'),
    })
    const subject = encodeURIComponent(`[${data.get('betreff')}] Kontakt von ${data.get('name')}`)
    const body = encodeURIComponent(
      `Name: ${data.get('name')}\nE-Mail: ${data.get('email')}\n\n${data.get('message')}`
    )
    window.open(`mailto:${BRAND.email}?subject=${subject}&body=${body}`, '_self')
    setSent(true)
  }

  if (sent) {
    return (
      <div className="border-t border-hairline pt-6">
        <p className="font-mono text-xs text-muted uppercase tracking-[0.1em] mb-2">Eingegangen.</p>
        <p className="font-sans text-base text-secondary">Wir melden uns bald.</p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <Field label="Name" name="name" required />
        <Field label="E-Mail" name="email" type="email" required />
      </div>

      <SelectField
        label="Worum geht's?"
        name="betreff"
        required
        options={['ServeFlow Demo', 'Webprojekt', 'Ventures', 'Allgemein']}
      />

      <Field label="Nachricht" name="message" as="textarea" required rows={5} />

      <button
        type="submit"
        className="group inline-flex items-center gap-1.5 text-primary text-sm font-medium border-b border-ink pb-0.5 hover:border-signal hover:text-signal transition-colors"
      >
        Senden <span className="font-mono group-hover:translate-x-0.5 transition-transform inline-block">→</span>
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

function SelectField({ label, name, required = false, options }: {
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
