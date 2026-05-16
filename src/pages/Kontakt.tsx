import { useState } from 'react'
import { motion } from 'framer-motion'
import { Container } from '../components/Container'
import { BRAND } from '../lib/constants'
import { track, Events } from '../lib/analytics'
import { fadeUp, viewport } from '../lib/motion'
import { Mail, MapPin, Clock, CheckCircle2, ArrowRight, MessageSquare, Package, Euro } from 'lucide-react'

export default function KontaktPage() {
  return (
    <main>
      {/* ════════════════════════════════════════════
          HERO
          ════════════════════════════════════════════ */}
      <section className="relative pt-36 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 50% at 50% -10%, rgba(232,74,28,0.14) 0%, transparent 60%)' }}
        />
        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="font-mono text-xs text-muted uppercase tracking-[0.14em]">Kontakt</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans font-bold tracking-[-0.03em] text-primary mb-4"
            style={{ fontSize: 'clamp(2.5rem,5vw,3.5rem)' }}
          >
            Lass uns reden.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg text-secondary max-w-[48ch]"
          >
            Egal ob ServeFlow-Demo, Webprojekt oder Ventures-Anfrage — wir antworten direkt und ehrlich.
          </motion.p>
        </Container>
      </section>

      {/* ════════════════════════════════════════════
          MAIN — Info + Formular
          ════════════════════════════════════════════ */}
      <section className="border-t border-border py-16 md:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* LEFT — Kontaktinfos */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={viewport}
              className="lg:col-span-4 space-y-8"
            >
              {/* Kontakt-Block */}
              <div className="bg-surface border border-border rounded-xl p-6 space-y-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">Direkt kontaktieren</p>
                <ContactRow icon={Mail} label="E-Mail" value={BRAND.email} href={`mailto:${BRAND.email}`} />
                <ContactRow icon={Clock} label="Antwortzeit" value="Innerhalb von 48 Stunden" />
                <ContactRow icon={MapPin} label="Standort" value="Stuttgart, Deutschland" />
              </div>

              {/* Wofür */}
              <div className="bg-surface border border-border rounded-xl p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted mb-5">Wir helfen bei</p>
                <div className="space-y-3">
                  {[
                    { icon: Package, label: 'ServeFlow', sub: 'Demo, Einrichtung, Fragen' },
                    { icon: ArrowRight, label: 'Webseiten', sub: 'Anfrage, Konzept, Preise' },
                    { icon: MessageSquare, label: 'Automatisierungen', sub: 'WhatsApp, CRM, Workflows' },
                    { icon: Euro, label: 'Ventures', sub: 'Individuelle Projekte' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3 p-3 rounded-lg
                      bg-elevated border border-border hover:border-borderHigh transition-colors">
                      <item.icon className="w-4 h-4 text-signal flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-primary leading-tight">{item.label}</p>
                        <p className="text-xs text-muted">{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust-Badges */}
              <div className="bg-surface border border-border rounded-xl p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted mb-4">Garantien</p>
                <div className="space-y-3">
                  {[
                    'Antwort innerhalb von 48 Stunden',
                    'DSGVO-konform · Server in DE',
                    'Kein Lock-In, monatlich kündbar',
                    'Direkter Kontakt zum Entwickler',
                  ].map(t => (
                    <div key={t} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-signal flex-shrink-0" />
                      <span className="text-xs text-secondary">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* RIGHT — Formular */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={viewport}
              transition={{ delay: 0.1 }}
              className="lg:col-span-7 lg:col-start-6"
            >
              <KontaktForm />
            </motion.div>
          </div>
        </Container>
      </section>
    </main>
  )
}

function ContactRow({ icon: Icon, label, value, href }: {
  icon: typeof Mail; label: string; value: string; href?: string
}) {
  const content = (
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 rounded-lg bg-elevated border border-border
        flex items-center justify-center flex-shrink-0">
        <Icon className="w-3.5 h-3.5 text-signal" />
      </div>
      <div>
        <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-muted mb-0.5">{label}</p>
        <p className="text-sm text-primary break-all">{value}</p>
      </div>
    </div>
  )
  if (href) return <a href={href} className="block hover:opacity-80 transition-opacity">{content}</a>
  return <div>{content}</div>
}

function KontaktForm() {
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    const data = new FormData(e.currentTarget)
    track(Events.KONTAKT_FORM_SUBMITTED, {
      source: 'kontakt-page',
      betreff: String(data.get('betreff') || 'Allgemein'),
    })
    const subject = encodeURIComponent(`[${data.get('betreff')}] Anfrage von ${data.get('name')}`)
    const body = encodeURIComponent(
      `Name: ${data.get('name')}\nE-Mail: ${data.get('email')}\nUnternehmen: ${data.get('company')}\n\n${data.get('message')}\n\nBudget: ${data.get('budget')}`
    )
    setTimeout(() => {
      window.open(`mailto:${BRAND.email}?subject=${subject}&body=${body}`, '_self')
      setSubmitting(false)
      setSent(true)
    }, 500)
  }

  if (sent) {
    return (
      <div className="bg-surface border border-border rounded-xl p-10 text-center">
        <CheckCircle2 className="w-12 h-12 text-signal mx-auto mb-4" />
        <h3 className="font-sans font-bold text-xl text-primary mb-2">Anfrage gesendet.</h3>
        <p className="text-secondary text-sm">Wir melden uns innerhalb von 48 Stunden bei dir.</p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {/* ── Sektion 1: Über dich */}
      <FormSection label="Über dich" number="01">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField label="Name *" name="name" required placeholder="Max Muster" />
          <FormField label="E-Mail *" name="email" type="email" required placeholder="max@firma.de" />
        </div>
        <FormField label="Unternehmen" name="company" placeholder="Firma GmbH (optional)" />
      </FormSection>

      {/* ── Sektion 2: Dein Projekt */}
      <FormSection label="Dein Projekt" number="02">
        <FormSelect
          label="Worum geht es? *"
          name="betreff"
          required
          options={[
            'ServeFlow — Demo / Einrichtung / Fragen',
            'Webseite — Anfrage & Konzept',
            'Automatisierungen — WhatsApp, CRM, Workflows',
            'Ventures — Individuelles Projekt',
            'Allgemeine Anfrage',
          ]}
        />
        <FormField
          label="Was ist dein Ziel? *"
          name="message"
          as="textarea"
          required
          rows={5}
          placeholder="Beschreib kurz was du brauchst, was du dir vorstellst, und wo du gerade stehst..."
        />
      </FormSection>

      {/* ── Sektion 3: Rahmen */}
      <FormSection label="Rahmenbedingungen" number="03">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormSelect
            label="Budget (grob)"
            name="budget"
            options={['Unter 2.000 €', '2.000–5.000 €', '5.000–15.000 €', '15.000–50.000 €', '50.000 € +']}
          />
          <FormSelect
            label="Zeitrahmen"
            name="zeitrahmen"
            options={['So bald wie möglich', 'Innerhalb von 1 Monat', '1–3 Monate', 'Noch offen']}
          />
        </div>
      </FormSection>

      <button
        type="submit"
        disabled={submitting}
        className={`w-full flex items-center justify-center gap-2 font-semibold text-sm
          py-4 rounded-lg transition-colors ${
          submitting
            ? 'bg-surface text-muted cursor-wait border border-border'
            : 'bg-signal hover:bg-signalHover text-white cursor-pointer'
        }`}
      >
        {submitting ? 'Wird gesendet…' : 'Anfrage absenden →'}
      </button>

      <p className="text-center font-mono text-[10px] text-muted">
        Keine Bindung. Kein Spam. Wir lesen jede Anfrage persönlich.
      </p>
    </form>
  )
}

function FormSection({ label, number, children }: {
  label: string; number: string; children: React.ReactNode
}) {
  return (
    <div className="bg-surface border border-border rounded-xl overflow-hidden">
      <div className="flex items-center gap-3 px-5 py-3 bg-elevated border-b border-border">
        <span className="font-mono text-xs text-muted">{number}</span>
        <span className="font-sans text-sm font-semibold text-secondary">{label}</span>
      </div>
      <div className="p-5 space-y-4">{children}</div>
    </div>
  )
}

function FormField({ label, name, type = 'text', required = false, as: As = 'input', rows, placeholder }: {
  label: string; name: string; type?: string; required?: boolean;
  as?: 'input' | 'textarea'; rows?: number; placeholder?: string
}) {
  return (
    <div>
      <label className="block font-mono text-[10px] uppercase tracking-[0.1em] text-muted mb-1.5">
        {label}
      </label>
      {As === 'textarea' ? (
        <textarea
          name={name}
          required={required}
          rows={rows ?? 4}
          placeholder={placeholder}
          className="w-full bg-elevated border border-border rounded-lg px-4 py-3
            text-sm text-primary placeholder-muted resize-none
            focus:outline-none focus:border-signal focus:ring-1 focus:ring-signal/20
            transition-colors"
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className="w-full bg-elevated border border-border rounded-lg px-4 py-3
            text-sm text-primary placeholder-muted
            focus:outline-none focus:border-signal focus:ring-1 focus:ring-signal/20
            transition-colors"
        />
      )}
    </div>
  )
}

function FormSelect({ label, name, required = false, options }: {
  label: string; name: string; required?: boolean; options: string[]
}) {
  return (
    <div>
      <label className="block font-mono text-[10px] uppercase tracking-[0.1em] text-muted mb-1.5">
        {label}
      </label>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="w-full bg-elevated border border-border rounded-lg px-4 py-3
          text-sm text-primary
          focus:outline-none focus:border-signal focus:ring-1 focus:ring-signal/20
          transition-colors appearance-none"
      >
        <option value="" disabled className="text-muted" />
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  )
}
