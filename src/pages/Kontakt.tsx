import { useState } from 'react'
import { motion } from 'framer-motion'
import { Container } from '../components/Container'
import { BRAND } from '../lib/constants'
import { track, Events } from '../lib/analytics'
import { sendContact } from '../lib/email'
import SEO from '../components/SEO'
import { fadeUp, viewport } from '../lib/motion'
import {
  Mail, MapPin, Clock, CheckCircle2, ArrowUpRight,
  Package, Globe, Zap, Code2, MessageSquare, Loader2,
} from 'lucide-react'

const SERVICES = [
  { id: 'serveflow',     label: 'ServeFlow',       sub: 'Demo · Einrichtung · Fragen', icon: Package },
  { id: 'webseite',      label: 'Webseite',         sub: 'Anfrage · Konzept · Preise',  icon: Globe   },
  { id: 'automation',    label: 'Automatisierung',  sub: 'WhatsApp · CRM · Workflows',  icon: Zap     },
  { id: 'individuell',   label: 'Individuell',      sub: 'Custom Software · Ventures',  icon: Code2   },
  { id: 'allgemein',     label: 'Allgemeine Frage', sub: 'Beratung · Fragen · Sonstiges', icon: MessageSquare },
]

const BUDGETS = [
  { label: '< 2.000 €',   value: 'Unter 2.000 €' },
  { label: '2–5k €',      value: '2.000–5.000 €' },
  { label: '5–15k €',     value: '5.000–15.000 €' },
  { label: '15k+ €',      value: 'Über 15.000 €' },
]

const ZEITRAHMEN = [
  { label: 'Sofort',       value: 'So bald wie möglich' },
  { label: '1 Monat',      value: 'Innerhalb 1 Monat' },
  { label: '1–3 Monate',   value: '1–3 Monate' },
  { label: 'Noch offen',   value: 'Noch nicht festgelegt' },
]

export default function KontaktPage() {
  return (
    <>
      <SEO
        title="Kontakt | drvn — Software Studio Stuttgart"
        description="Kontaktiere drvn für ServeFlow Demo, Webprojekt oder individuelle Software-Anfrage. Wir antworten innerhalb von 48 Stunden. Stuttgart, Deutschland."
        path="/kontakt"
        keywords="drvn Kontakt, Webentwicklung Stuttgart, ServeFlow Demo, Software Anfrage, Erstgespräch"
      />
      <main>
      {/* ════ HERO ════ */}
      <section className="relative pt-36 pb-0 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 40% at 50% -5%, rgba(232,74,28,0.12) 0%, transparent 60%)' }}
        />
        <Container className="relative pb-16">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="font-mono text-xs text-muted uppercase tracking-[0.14em] mb-4"
          >
            Kontakt
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans font-bold tracking-[-0.03em] text-primary mb-5"
            style={{ fontSize: 'clamp(2.75rem,5.5vw,4rem)' }}
          >
            Projekt anfragen.{' '}
            <span className="font-serif font-normal italic text-signal">Direkt.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg text-secondary max-w-[50ch] leading-[1.6]"
          >
            Kein Sales-Funnel. Keine automatischen Antworten. Ilias liest jede Anfrage persönlich
            und antwortet innerhalb von 48 Stunden.
          </motion.p>
        </Container>
      </section>

      {/* ════ FORMULAR + INFO ════ */}
      <section className="border-t border-border pb-20 md:pb-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 pt-14">

            {/* ── LEFT: Infos ── */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={viewport}
              className="lg:col-span-4 space-y-5"
            >
              {/* Direktkontakt */}
              <div className="bg-surface border border-border rounded-2xl p-6">
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted mb-5">
                  Direktkontakt
                </p>
                <div className="space-y-4">
                  <ContactRow
                    icon={Mail}
                    label="E-Mail"
                    value={BRAND.email}
                    href={`mailto:${BRAND.email}`}
                  />
                  <ContactRow icon={Clock}  label="Antwortzeit" value="< 48 Stunden" />
                  <ContactRow icon={MapPin} label="Standort"    value="Stuttgart, DE" />
                </div>
              </div>

              {/* Leistungen */}
              <div className="bg-surface border border-border rounded-2xl p-6">
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted mb-5">
                  Wofür wir da sind
                </p>
                <div className="space-y-2">
                  {SERVICES.map((s) => (
                    <div key={s.id}
                      className="flex items-center gap-3 p-3 rounded-xl bg-elevated
                        border border-border">
                      <div className="w-7 h-7 rounded-lg bg-signal/10 border border-signal/20
                        flex items-center justify-center flex-shrink-0">
                        <s.icon className="w-3.5 h-3.5 text-signal" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-primary leading-tight">{s.label}</p>
                        <p className="text-[11px] text-muted leading-tight mt-0.5">{s.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Garantien */}
              <div className="bg-surface border border-border rounded-2xl p-6">
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted mb-4">
                  Versprochen
                </p>
                <div className="space-y-3">
                  {[
                    'Persönliche Antwort in < 48h',
                    'Kein Angebots-Automatismus',
                    'DSGVO-konform · Server in DE',
                    'Direkt mit dem Entwickler',
                  ].map((t) => (
                    <div key={t} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-signal flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-secondary leading-tight">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* ── RIGHT: Formular ── */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={viewport}
              transition={{ delay: 0.1 }}
              className="lg:col-span-8"
            >
              <KontaktForm />
            </motion.div>
          </div>
        </Container>
      </section>
      </main>
    </>
  )
}

function ContactRow({
  icon: Icon, label, value, href,
}: { icon: typeof Mail; label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-lg bg-elevated border border-border
        flex items-center justify-center flex-shrink-0">
        <Icon className="w-3.5 h-3.5 text-signal" />
      </div>
      <div>
        <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-muted mb-0.5">{label}</p>
        <p className="text-sm font-medium text-primary">{value}</p>
      </div>
    </div>
  )
  if (href) return <a href={href} className="block hover:opacity-80 transition-opacity">{inner}</a>
  return <div>{inner}</div>
}

function KontaktForm() {
  const [service,    setService]    = useState('')
  const [budget,     setBudget]     = useState('')
  const [zeitrahmen, setZeitrahmen] = useState('')
  const [status,     setStatus]     = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!service) return
    setStatus('loading')

    const fd = new FormData(e.currentTarget)
    const payload = {
      from_name:  String(fd.get('name')    ?? '').trim(),
      from_email: String(fd.get('email')   ?? '').trim(),
      company:    String(fd.get('company') ?? '').trim() || 'Nicht angegeben',
      betreff:    service,
      message:    String(fd.get('message') ?? '').trim(),
      budget:     budget    || 'Nicht angegeben',
      zeitrahmen: zeitrahmen || 'Nicht angegeben',
    }

    track(Events.KONTAKT_FORM_SUBMITTED, { source: 'kontakt-page', betreff: service })

    try {
      await sendContact(payload)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-surface border border-border rounded-2xl p-12 text-center"
      >
        <div className="w-14 h-14 rounded-full bg-green-500/15 border border-green-500/30
          flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-7 h-7 text-green-400" />
        </div>
        <h3 className="font-sans font-bold text-2xl text-primary mb-2">Anfrage eingegangen.</h3>
        <p className="text-secondary text-sm leading-[1.65] max-w-[40ch] mx-auto">
          Ilias liest sie persönlich und meldet sich innerhalb von 48 Stunden. Kein Autoresponder.
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">

      {/* ── 1. Service wählen ── */}
      <FormCard number="01" label="Was interessiert Sie?">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
          {SERVICES.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setService(s.label)}
              className={`text-left p-4 rounded-xl border transition-all duration-200 ${
                service === s.label
                  ? 'border-signal bg-signal/8 text-primary shadow-[0_0_0_3px_rgba(232,74,28,0.1)]'
                  : 'border-border bg-elevated hover:border-borderHigh hover:bg-surface text-secondary hover:text-primary'
              }`}
            >
              <div className={`w-7 h-7 rounded-lg mb-3 flex items-center justify-center
                ${service === s.label
                  ? 'bg-signal/15 border border-signal/30'
                  : 'bg-bg border border-border'}`}>
                <s.icon className={`w-3.5 h-3.5 ${service === s.label ? 'text-signal' : 'text-muted'}`} />
              </div>
              <p className="font-semibold text-sm mb-0.5">{s.label}</p>
              <p className="text-[11px] text-muted leading-tight">{s.sub}</p>
            </button>
          ))}
        </div>
        {!service && (
          <p className="text-[11px] text-signal font-mono mt-1">
            Bitte wählen Sie ein Thema aus.
          </p>
        )}
      </FormCard>

      {/* ── 2. Ihre Daten ── */}
      <FormCard number="02" label="Über Sie">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Name *" name="name" required placeholder="Max Mustermann" />
          <Field label="E-Mail *" name="email" type="email" required placeholder="max@firma.de" />
        </div>
        <Field label="Unternehmen" name="company" placeholder="Firma GmbH (optional)" />
      </FormCard>

      {/* ── 3. Projekt ── */}
      <FormCard number="03" label="Ihr Projekt">
        <Field
          label="Was ist Ihr Ziel? *"
          name="message"
          as="textarea"
          required
          rows={5}
          placeholder="Beschreiben Sie kurz, was Sie brauchen, wo Sie gerade stehen und was das Ergebnis sein soll..."
        />
      </FormCard>

      {/* ── 4. Rahmen ── */}
      <FormCard number="04" label="Rahmenbedingungen">
        <div className="space-y-5">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted mb-2.5">
              Budget (grob)
            </p>
            <div className="flex flex-wrap gap-2">
              {BUDGETS.map((b) => (
                <button
                  key={b.value}
                  type="button"
                  onClick={() => setBudget(b.value)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-150 ${
                    budget === b.value
                      ? 'border-signal bg-signal/8 text-primary'
                      : 'border-border bg-elevated text-secondary hover:border-borderHigh hover:text-primary'
                  }`}
                >
                  {b.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted mb-2.5">
              Zeitrahmen
            </p>
            <div className="flex flex-wrap gap-2">
              {ZEITRAHMEN.map((z) => (
                <button
                  key={z.value}
                  type="button"
                  onClick={() => setZeitrahmen(z.value)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-150 ${
                    zeitrahmen === z.value
                      ? 'border-signal bg-signal/8 text-primary'
                      : 'border-border bg-elevated text-secondary hover:border-borderHigh hover:text-primary'
                  }`}
                >
                  {z.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </FormCard>

      {/* ── Submit ── */}
      {status === 'error' && (
        <p className="text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">
          Etwas ist schiefgelaufen. Bitte schreiben Sie direkt an{' '}
          <a href={`mailto:${BRAND.email}`} className="underline">{BRAND.email}</a>.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading' || !service}
        className={`w-full flex items-center justify-center gap-2.5 font-bold text-base
          py-4 rounded-xl transition-all duration-200 ${
          status === 'loading' || !service
            ? 'bg-surface text-muted border border-border cursor-not-allowed'
            : 'bg-signal hover:bg-signalHover text-white cursor-pointer shadow-[0_4px_20px_rgba(232,74,28,0.25)] hover:shadow-[0_4px_28px_rgba(232,74,28,0.35)]'
        }`}
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Wird gesendet…
          </>
        ) : (
          <>
            Anfrage abschicken
            <ArrowUpRight className="w-4 h-4" />
          </>
        )}
      </button>

      <p className="text-center font-mono text-[10px] text-muted">
        Kostenlos · Unverbindlich · Persönliche Antwort
      </p>
    </form>
  )
}

function FormCard({
  number, label, children,
}: { number: string; label: string; children: React.ReactNode }) {
  return (
    <div className="bg-surface border border-border rounded-2xl overflow-hidden">
      <div className="flex items-center gap-3 px-6 py-4 border-b border-border bg-elevated/60">
        <span className="font-mono text-xs text-signal font-bold">{number}</span>
        <span className="font-sans text-sm font-semibold text-primary">{label}</span>
      </div>
      <div className="p-6 space-y-4">{children}</div>
    </div>
  )
}

function Field({
  label, name, type = 'text', required = false,
  as: As = 'input', rows, placeholder,
}: {
  label: string; name: string; type?: string; required?: boolean
  as?: 'input' | 'textarea'; rows?: number; placeholder?: string
}) {
  const base = `w-full bg-bg border border-border rounded-xl px-4 py-3 text-sm text-primary
    placeholder:text-muted/60 focus:outline-none focus:border-signal
    focus:ring-2 focus:ring-signal/15 transition-all duration-200`

  return (
    <div>
      <label className="block font-mono text-[9px] uppercase tracking-[0.14em] text-muted mb-2">
        {label}
      </label>
      {As === 'textarea' ? (
        <textarea
          name={name}
          required={required}
          rows={rows ?? 4}
          placeholder={placeholder}
          className={`${base} resize-none`}
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className={base}
        />
      )}
    </div>
  )
}
