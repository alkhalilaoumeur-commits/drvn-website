import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Check, Workflow, MessageSquare, Mail, Database, Zap, RefreshCw, Clock } from 'lucide-react'
import { Container } from '../components/Container'
import { Eyebrow } from '../components/Eyebrow'
import SEO from '../components/SEO'
import { fadeUp, viewport } from '../lib/motion'

const ANWENDUNGSFAELLE = [
  {
    icon: MessageSquare,
    title: 'WhatsApp-Bots',
    text: 'Automatische Antworten auf häufige Fragen, Terminbestätigungen, Bestellstatus — direkt über WhatsApp Business. Kein Mitarbeiter nötig.',
    beispiele: ['Reservierungsbestätigung', 'Öffnungszeiten-Abfrage', 'Speisekartenversand', 'Kundenfeedback'],
  },
  {
    icon: Mail,
    title: 'E-Mail-Sequenzen',
    text: 'Automatische Follow-ups nach dem ersten Kontakt, Willkommens-Mails, Reaktivierungskampagnen. Einmal aufgebaut, läuft es von selbst.',
    beispiele: ['Willkommens-Sequenz', 'Angebot-Follow-up', 'Inaktive Kunden reaktivieren', 'Bewertungsanfragen'],
  },
  {
    icon: Database,
    title: 'CRM-Integrationen',
    text: 'Kontakte aus Formularen, Buchungen oder Bestellungen landen automatisch im CRM. Kein manuelles Übertragen mehr.',
    beispiele: ['Formular → CRM', 'Buchung → Kundenkarte', 'Zahlung → Rechnung', 'Lead-Scoring automatisch'],
  },
  {
    icon: Workflow,
    title: 'Interne Workflows',
    text: 'Aufgaben, die täglich wiederholt werden, lassen sich automatisieren. Von der Rechnungsverarbeitung bis zum Lagerbestand.',
    beispiele: ['Rechnungen automatisch ablegen', 'Lagerbestand-Alarm', 'Tagesberichte generieren', 'Team-Benachrichtigungen'],
  },
  {
    icon: RefreshCw,
    title: 'Daten-Synchronisation',
    text: 'Verschiedene Tools, die nicht miteinander reden — das verbinden wir. Daten fließen automatisch von A nach B.',
    beispiele: ['Shopify → Buchaltung', 'Kalender-Sync', 'Bestands-Abgleich', 'Multi-Standort-Sync'],
  },
  {
    icon: Zap,
    title: 'Trigger-basierte Aktionen',
    text: 'Wenn X passiert, passiert automatisch Y. Neuer Kunde, neue Bestellung, neues Formular — alles auslösbar.',
    beispiele: ['Neue Anfrage → sofort benachrichtigen', 'Zahlung → Zugang freischalten', 'Abbruch → Reminder senden', 'Datum → Aufgabe erstellen'],
  },
]

const PROZESS = [
  { nr: '01', title: 'Analyse', text: 'Wir schauen uns eure bestehenden Prozesse an und identifizieren, was sich automatisieren lässt — und was nicht.' },
  { nr: '02', title: 'Konzept', text: 'Für jeden Prozess entwerfen wir einen Workflow-Plan: Trigger, Schritte, Bedingungen, Ausgabe.' },
  { nr: '03', title: 'Umsetzung', text: 'Wir bauen die Automatisierung in n8n, testen sie mit echten Daten, und übergeben sie vollständig dokumentiert.' },
  { nr: '04', title: 'Betrieb', text: 'Ihr übernehmt oder wir betreiben weiter — auf Wunsch auch Monitoring und Wartung per Retainer.' },
]

const STACK = [
  { name: 'n8n', desc: 'Workflow-Engine (selbst gehostet, DSGVO-konform)' },
  { name: 'WhatsApp Business API', desc: 'Offizielle Meta-API' },
  { name: 'Resend / Postmark', desc: 'Transaktionale E-Mails' },
  { name: 'PostgreSQL', desc: 'Datenhaltung für komplexe Automations' },
  { name: 'Webhooks', desc: 'Integration beliebiger Drittanbieter' },
  { name: 'REST / GraphQL', desc: 'API-Anbindung an bestehende Systeme' },
]

export default function AutomatisierungenPage() {
  return (
    <>
      <SEO
        title="Automatisierungen & Workflows für Unternehmen | drvn Stuttgart"
        description="drvn automatisiert manuelle Prozesse: WhatsApp-Bots, E-Mail-Sequenzen, CRM-Integrationen, n8n-Workflows. Für Unternehmen im DACH-Raum. Ab 790 €, auf Anfrage."
        path="/automatisierungen"
        keywords="Prozessautomatisierung, WhatsApp Bot Business, n8n Automatisierung, CRM Integration, E-Mail Automation, Geschäftsprozesse automatisieren, Workflow Automatisierung Deutschland"
      />
      <main>
      {/* ════════════ HERO ════════════ */}
      <section className="pt-40 md:pt-56 pb-20 md:pb-28">
        <Container>
          <Eyebrow>Service · n8n · DSGVO-konform</Eyebrow>

          <motion.h1
            variants={fadeUp}
            initial="initial"
            animate="animate"
            className="font-sans font-light text-[clamp(2.75rem,6.5vw,5.25rem)] leading-[1.02] tracking-[-0.02em] text-ink mb-8 max-w-[14ch]"
          >
            Manuelle Prozesse werden zu Workflows.
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6">
            <motion.div
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.15 }}
              className="md:col-span-6"
            >
              <p className="font-sans text-lg text-secondary leading-[1.55] max-w-[52ch] mb-8">
                Wiederholende Aufgaben, die täglich Zeit kosten, lassen sich automatisieren. WhatsApp-Bots, E-Mail-Sequenzen, CRM-Verbindungen — wir bauen das, damit euer Team sich auf das Wesentliche konzentrieren kann.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/kontakt"
                  className="inline-flex items-center gap-2 bg-signal hover:bg-signalHover text-white
                    font-semibold px-6 py-3.5 rounded-lg transition-colors text-sm"
                >
                  Projekt anfragen <ArrowUpRight className="w-4 h-4" />
                </Link>
                <a
                  href="#anwendungsfaelle"
                  className="inline-flex items-center gap-2 bg-surface hover:bg-elevated text-primary
                    border border-border hover:border-borderHigh font-semibold px-6 py-3.5 rounded-lg transition-colors text-sm"
                >
                  Anwendungsfälle ansehen
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.3 }}
              className="md:col-span-4 md:col-start-9"
            >
              <div className="divide-y divide-border border border-border rounded-xl overflow-hidden">
                {[
                  { label: 'Ab',            value: '790 €' },
                  { label: 'Lieferzeit',    value: '1–3 Wochen' },
                  { label: 'Technologie',   value: 'n8n (self-hosted)' },
                  { label: 'DSGVO',         value: 'Ja, Server DE' },
                  { label: 'Wartung',       value: 'Optional per Retainer' },
                  { label: 'Anfragen',      value: 'Offen' },
                ].map((s) => (
                  <div key={s.label} className="flex justify-between px-4 py-3 bg-surface">
                    <span className="font-mono text-[10px] text-muted uppercase tracking-[0.08em]">{s.label}</span>
                    <span className="font-mono text-xs text-primary">{s.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ════════════ ANWENDUNGSFÄLLE ════════════ */}
      <section id="anwendungsfaelle" className="border-t border-border py-20 md:py-28 bg-surface">
        <Container>
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            className="mb-16"
          >
            <p className="font-mono text-xs text-muted uppercase tracking-[0.14em] mb-3">Anwendungsfälle</p>
            <h2 className="font-sans font-bold tracking-[-0.03em] text-primary"
              style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)' }}>
              Was wir automatisieren.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {ANWENDUNGSFAELLE.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={viewport}
                  transition={{ delay: (i % 3) * 0.08 }}
                  className="bg-surface p-8 flex flex-col gap-5"
                >
                  <div className="w-10 h-10 rounded-lg bg-signal/10 border border-signal/25
                    flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-signal" />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-base text-primary mb-2">{item.title}</h3>
                    <p className="text-sm text-secondary leading-[1.65]">{item.text}</p>
                  </div>
                  <ul className="mt-auto space-y-1.5">
                    {item.beispiele.map(b => (
                      <li key={b} className="flex items-center gap-2 text-xs text-muted">
                        <Check className="w-3.5 h-3.5 text-signal flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* ════════════ PROZESS ════════════ */}
      <section className="border-t border-border py-20 md:py-28">
        <Container>
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            className="mb-16"
          >
            <p className="font-mono text-xs text-muted uppercase tracking-[0.14em] mb-3">Vorgehen</p>
            <h2 className="font-sans font-bold tracking-[-0.03em] text-primary"
              style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)' }}>
              Von der Idee zur laufenden Automation.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {PROZESS.map((step, i) => (
              <motion.div
                key={step.nr}
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={viewport}
                transition={{ delay: i * 0.08 }}
                className="bg-bg p-8"
              >
                <span className="font-mono text-3xl font-bold text-border leading-none block mb-6">{step.nr}</span>
                <h3 className="font-sans font-semibold text-primary mb-3">{step.title}</h3>
                <p className="text-sm text-secondary leading-[1.65]">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ════════════ WARUM n8n ════════════ */}
      <section className="border-t border-border py-20 md:py-28 bg-surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={viewport}
            >
              <p className="font-mono text-xs text-muted uppercase tracking-[0.14em] mb-3">Technologie</p>
              <h2 className="font-sans font-bold tracking-[-0.03em] text-primary mb-6"
                style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)' }}>
                Warum wir auf n8n setzen.
              </h2>
              <p className="text-secondary leading-[1.7] mb-6">
                n8n ist eine Open-Source-Workflow-Engine, die wir selbst auf unseren Servern in Deutschland betreiben.
                Keine Daten fließen in amerikanische Cloud-Dienste. Kein Vendor Lock-in. Keine monatlichen Lizenzgebühren pro Workflow.
              </p>
              <p className="text-secondary leading-[1.7] mb-8">
                Im Vergleich zu Zapier oder Make.com: n8n hat keine Limits bei Ausführungen, lässt sich beliebig erweitern,
                und bleibt vollständig unter eurer Kontrolle — oder unserer, wenn ihr das bevorzugt.
              </p>
              <ul className="space-y-3">
                {[
                  'Self-hosted — Server in Deutschland',
                  'DSGVO-konform by Default',
                  'Keine per-run Kosten',
                  'Beliebige Custom-Logic per Code-Node',
                  '400+ native Integrationen',
                ].map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-secondary">
                    <Check className="w-4 h-4 text-signal flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={viewport}
              transition={{ delay: 0.15 }}
            >
              <p className="font-mono text-xs text-muted uppercase tracking-[0.14em] mb-5">Tech-Stack</p>
              <div className="divide-y divide-border border border-border rounded-xl overflow-hidden">
                {STACK.map(s => (
                  <div key={s.name} className="flex items-center justify-between px-5 py-4 bg-surface">
                    <span className="font-mono text-xs text-primary">{s.name}</span>
                    <span className="text-xs text-muted text-right max-w-[22ch]">{s.desc}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ════════════ ZEITERSPARNIS ════════════ */}
      <section className="border-t border-border py-20 md:py-28">
        <Container>
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            className="max-w-[65ch]"
          >
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-5 h-5 text-signal" />
              <p className="font-mono text-xs text-muted uppercase tracking-[0.14em]">Warum jetzt</p>
            </div>
            <h2 className="font-sans font-bold tracking-[-0.03em] text-primary mb-6"
              style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)' }}>
              Was eine Automation wirklich kostet — und was sie spart.
            </h2>
            <p className="text-secondary leading-[1.7] mb-4">
              Eine einfache Automation — etwa automatische Reservierungsbestätigungen per WhatsApp — spart einem
              typischen Restaurant etwa 45 Minuten täglich. Bei 250 Arbeitstagen im Jahr sind das über 180 Stunden.
              Bei einem Stundensatz von 20 € entspricht das 3.600 € jährlich.
            </p>
            <p className="text-secondary leading-[1.7] mb-8">
              Die Einmalkosten für die Umsetzung liegen ab 790 €. Sie amortisieren sich im Schnitt in weniger als drei Monaten.
            </p>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 text-primary text-sm font-medium
                border-b border-ink pb-0.5 hover:border-signal hover:text-signal transition-colors group"
            >
              Jetzt Prozesse analysieren lassen{' '}
              <span className="font-mono group-hover:translate-x-0.5 transition-transform inline-block">→</span>
            </Link>
          </motion.div>
        </Container>
      </section>
      </main>
    </>
  )
}
