import { useState } from 'react'
import { motion } from 'framer-motion'
import { Container } from '../components/Container'
import { Eyebrow } from '../components/Eyebrow'
import SEO from '../components/SEO'
import { fadeUp, viewport } from '../lib/motion'
import { BRAND } from '../lib/constants'
import { track, Events } from '../lib/analytics'

const LEISTUNGEN = [
  {
    title: 'Marketing- und Landingpages',
    text:  'Schnell, performant, conversion-orientiert. Ideal für Produktlaunches und Kampagnen.',
    meta:  '2–4 Wochen · ab 4.500 €',
  },
  {
    title: 'Unternehmenswebsites',
    text:  'Mehrseitige Sites mit CMS-Anbindung, mehrsprachig wenn nötig, vollständig wartbar.',
    meta:  '4–8 Wochen · ab 8.000 €',
  },
  {
    title: 'Webapplikationen',
    text:  'Tools, Dashboards, interne Anwendungen. Wenn keine fertige Lösung passt.',
    meta:  '8+ Wochen · auf Anfrage',
  },
]

const VERFAHREN = [
  {
    num: '01.',
    title: 'Briefing',
    text:  'Eine Stunde am Telefon oder vor Ort. Wir verstehen das Projekt, das Ziel, den Zeitrahmen.',
    meta:  'Tag 1',
  },
  {
    num: '02.',
    title: 'Konzept und Angebot',
    text:  'Innerhalb von 5 Werktagen: Architekturskizze, Zeitplan, fester Preis.',
    meta:  'Tag 2–7',
  },
  {
    num: '03.',
    title: 'Entwicklung',
    text:  'Wöchentliche Updates, Live-Vorschau ab Tag 1, direkter Draht zum Entwickler.',
    meta:  'Woche 2–8',
  },
  {
    num: '04.',
    title: 'Übergabe',
    text:  'Code, Dokumentation, Schulung. Du besitzt alles. Wartung optional, nicht erzwungen.',
    meta:  'Letzte Woche',
  },
]

export default function WebPage() {
  return (
    <>
      <SEO
        title="Webseiten & Webentwicklung Stuttgart | drvn"
        description="Professionelle Unternehmenswebseiten, Landingpages und Webapplikationen aus Stuttgart. React, TypeScript, DSGVO-konform, schnell. Ab 2.990 €, Lieferung in 2–5 Wochen."
        path="/web"
        keywords="Webdesign Stuttgart, Webseite erstellen lassen, Landingpage erstellen, Corporate Website, Webentwicklung DACH, React Webseite, responsive Webdesign Deutschland"
      />
      <main>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="pt-40 md:pt-56 pb-20 md:pb-28">
        <Container>
          <Eyebrow>Auftragsarbeit</Eyebrow>

          <motion.h1
            variants={fadeUp}
            initial="initial"
            animate="animate"
            className="font-sans font-light text-[clamp(2.75rem,6.5vw,5.25rem)] leading-[1.02] tracking-[-0.02em] text-ink mb-12 max-w-[14ch]"
          >
            Websites, die nicht nur gut{' '}
            <span className="font-serif italic text-signal">aussehen.</span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6"
          >
            <div className="md:col-span-7">
              <p className="font-sans text-lg text-secondary leading-[1.55] mb-4 max-w-[52ch]">
                Wir bauen Websites und Webapplikationen für Unternehmen, die ihre digitale Präsenz ernst nehmen. Kein Wordpress-Theme. Kein Baukasten. Kein Hand-Off.
              </p>
            </div>

            <div className="md:col-span-4 md:col-start-9">
              <div className="divide-y divide-hairline border-y border-hairline">
                {[
                  { label: 'Stack',       value: 'React · TypeScript · Next.js' },
                  { label: 'Hosting',     value: 'Vercel · Cloudflare' },
                  { label: 'Zeitrahmen',  value: '4–10 Wochen' },
                  { label: 'Ab',          value: '4.500 €' },
                  { label: 'Verfügbar',   value: 'Q3 2026' },
                ].map((s) => (
                  <div key={s.label} className="flex justify-between py-2.5 gap-2">
                    <span className="font-mono text-xs text-muted uppercase tracking-[0.08em] flex-shrink-0">{s.label}</span>
                    <span className="font-mono text-xs text-ink text-right">{s.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <a
                  href="#anfrage"
                  className="inline-flex items-center gap-2 bg-ink text-paper px-5 py-3 text-sm font-medium hover:bg-ink/85 transition-colors"
                >
                  Projekt besprechen
                </a>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ── LEISTUNGEN ───────────────────────────────────── */}
      <section className="border-t border-hairline py-24 md:py-28">
        <Container>
          <Eyebrow>Was wir bauen</Eyebrow>
          <motion.h2
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            className="font-sans font-light text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.15] tracking-[-0.015em] text-ink mb-12"
          >
            Drei Formate.
          </motion.h2>

          <div className="divide-y divide-hairline border-t border-hairline">
            {LEISTUNGEN.map((l) => (
              <div key={l.title} className="py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
                <div className="md:col-span-4">
                  <p className="font-sans font-medium text-xl text-ink">{l.title}</p>
                </div>
                <div className="md:col-span-6">
                  <p className="font-sans text-base text-secondary leading-[1.6]">{l.text}</p>
                </div>
                <div className="md:col-span-2 md:text-right">
                  <p className="font-mono text-xs text-muted">{l.meta}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── VERFAHREN ────────────────────────────────────── */}
      <section className="border-t border-hairline py-24 md:py-28">
        <Container>
          <Eyebrow>Verfahren</Eyebrow>
          <motion.h2
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            className="font-sans font-light text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.15] tracking-[-0.015em] text-ink mb-12"
          >
            Vier Phasen, drei bis zehn Wochen.
          </motion.h2>

          <div className="space-y-8">
            {VERFAHREN.map((v, i) => (
              <motion.div
                key={v.num}
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={viewport}
                transition={{ delay: i * 0.07 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 border-t border-hairline pt-8"
              >
                <div className="md:col-span-1">
                  <span className="font-mono text-xs text-muted">{v.num}</span>
                </div>
                <div className="md:col-span-3">
                  <p className="font-sans font-medium text-xl text-ink">{v.title}</p>
                </div>
                <div className="md:col-span-6">
                  <p className="font-sans text-base text-secondary leading-[1.6]">{v.text}</p>
                </div>
                <div className="md:col-span-2 md:text-right">
                  <span className="font-mono text-xs text-muted">{v.meta}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── ANFRAGE ──────────────────────────────────────── */}
      <section id="anfrage" className="border-t border-hairline py-24 md:py-28">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-6">
            <div className="md:col-span-4">
              <Eyebrow>Anfrage</Eyebrow>
              <h2 className="font-sans font-light text-[clamp(1.5rem,2.5vw,2rem)] leading-[1.2] tracking-[-0.015em] text-ink mb-4">
                Erzähl uns vom Projekt.
              </h2>
              <p className="font-sans text-sm text-secondary leading-[1.6] max-w-[38ch]">
                Wir antworten innerhalb von 48 Stunden, immer per E-Mail. Wenn das Projekt nicht zu uns passt, sagen wir das auch.
              </p>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <WebAnfrageForm />
            </div>
          </div>
        </Container>
      </section>
      </main>
    </>
  )
}

function WebAnfrageForm() {
  const [sent, setSent] = useState(false)

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    track(Events.KONTAKT_FORM_SUBMITTED, { source: 'web-anfrage' })
    const subject = encodeURIComponent(`Webprojekt-Anfrage von ${data.get('name')}`)
    const body = encodeURIComponent(
      `Name: ${data.get('name')}\nE-Mail: ${data.get('email')}\nUnternehmen: ${data.get('company')}\n\n${data.get('message')}\n\nBudget: ${data.get('budget')}\nZeitpunkt: ${data.get('zeitpunkt')}`
    )
    window.open(`mailto:${BRAND.email}?subject=${subject}&body=${body}`, '_self')
    setSent(true)
  }

  if (sent) {
    return (
      <p className="font-mono text-sm text-secondary border-t border-hairline pt-6">
        Anfrage gesendet. Wir melden uns innerhalb von 48 Stunden.
      </p>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <FieldGroup label="Name" name="name" required />
        <FieldGroup label="E-Mail" name="email" type="email" required />
      </div>
      <FieldGroup label="Unternehmen (optional)" name="company" />
      <FieldGroup label="Worum geht es?" name="message" as="textarea" required rows={4} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <SelectGroup label="Budget" name="budget" required options={['Unter 5.000 €', '5.000–15.000 €', '15.000–50.000 €', '50.000 € +']} />
        <SelectGroup label="Wann?" name="zeitpunkt" required options={['So bald wie möglich', 'Q3 2026', 'Q4 2026', '2027']} />
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

function FieldGroup({ label, name, type = 'text', required = false, as: As = 'input', rows }: {
  label: string; name: string; type?: string; required?: boolean; as?: 'input' | 'textarea'; rows?: number
}) {
  return (
    <div>
      <label className="block font-mono text-xs uppercase tracking-[0.1em] text-muted mb-2">{label}</label>
      {As === 'textarea' ? (
        <textarea
          name={name}
          required={required}
          rows={rows ?? 4}
          className="input-editorial w-full resize-none"
        />
      ) : (
        <input name={name} type={type} required={required} className="input-editorial w-full" />
      )}
    </div>
  )
}

function SelectGroup({ label, name, required = false, options }: {
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
