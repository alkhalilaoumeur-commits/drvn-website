import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Check, Calendar, Users, CreditCard, Bell, Globe, Smartphone, Star, ArrowRight } from 'lucide-react'
import { Container } from '../components/Container'
import { fadeUp, viewport } from '../lib/motion'
import SEO from '../components/SEO'

const FEATURES = [
  {
    icon: Globe,
    title: 'Online-Buchungsseite',
    text: 'Kunden buchen direkt über eine individuelle Buchungsseite oder ein einbettbares Widget — ohne App, ohne Registrierung, 24/7.',
    punkte: ['Eigene URL (yoursalon.bookbase.de)', 'Einbettbar als Widget auf jeder Website', 'Mobile-optimiert'],
  },
  {
    icon: Calendar,
    title: 'Kalender & Verfügbarkeit',
    text: 'Öffnungszeiten, Mitarbeiter-Verfügbarkeiten und Pausen werden automatisch berücksichtigt. Doppelbuchungen sind ausgeschlossen.',
    punkte: ['Echtzeit-Verfügbarkeit', 'Mehrere Mitarbeiter', 'Pause-Blöcke & Urlaub'],
  },
  {
    icon: Users,
    title: 'Kundenkartei',
    text: 'Alle Kundendaten, Buchungshistorie und Notizen an einem Ort. Wer war wann, was wurde gemacht, welche Vorlieben gibt es.',
    punkte: ['Buchungshistorie pro Kunde', 'Interne Notizen', 'Stammkunden erkennen'],
  },
  {
    icon: Bell,
    title: 'Automatische Erinnerungen',
    text: 'E-Mail-Bestätigung direkt nach der Buchung, automatische Erinnerung 24 Stunden vorher. No-Shows um bis zu 60% reduzieren.',
    punkte: ['Buchungsbestätigung per E-Mail', '24h-Erinnerung automatisch', 'Stornierungslink inklusive'],
  },
  {
    icon: CreditCard,
    title: 'Abrechnung & Preise',
    text: 'Dienstleistungen mit Dauer und Preis hinterlegen. Tagesberichte, Umsatzübersicht und Export für die Buchhaltung.',
    punkte: ['Dienstleistungskatalog mit Preisen', 'Tages- und Monatsauswertung', 'CSV-Export'],
  },
  {
    icon: Smartphone,
    title: 'Mitarbeiter-App',
    text: 'Jeder Mitarbeiter sieht seinen eigenen Kalender, seine Buchungen und kann Verfügbarkeiten selbst verwalten.',
    punkte: ['Individueller Mitarbeiter-Kalender', 'Push-Benachrichtigungen', 'Verfügbarkeit selbst pflegen'],
  },
]

const UNTERSCHIEDE = [
  {
    merkmal: 'Preis',
    bookbase: 'Ab 29 €/Monat, keine versteckten Gebühren',
    andere: 'Treatwell 39+ € + % pro Buchung, Fresha Provision',
  },
  {
    merkmal: 'Eigene Marke',
    bookbase: 'Komplett white-label — dein Name, deine URL',
    andere: 'Buchung läuft über Treatwell/Fresha-Plattform',
  },
  {
    merkmal: 'Kunden-Daten',
    bookbase: 'Deine Daten, dein CRM, DSGVO-konform in DE',
    andere: 'Kunden-Daten gehören der Plattform',
  },
  {
    merkmal: 'DSGVO',
    bookbase: 'Server Deutschland, AVV inklusive',
    andere: 'Daten oft auf US-Servern',
  },
  {
    merkmal: 'Einrichtung',
    bookbase: '30 Minuten — wir helfen',
    andere: 'Aufwendig, oft externe Berater nötig',
  },
  {
    merkmal: 'Widget',
    bookbase: 'Einbettbar auf jeder eigenen Website',
    andere: 'Nur Link zur Plattform möglich',
  },
]

const BRANCHEN = [
  { name: 'Friseursalons', icon: '✂️' },
  { name: 'Nagelstudios', icon: '💅' },
  { name: 'Kosmetikstudios', icon: '✨' },
  { name: 'Massage & Wellness', icon: '🧘' },
  { name: 'Tattoo-Studios', icon: '🎨' },
  { name: 'Personal Training', icon: '💪' },
  { name: 'Physiotherapie', icon: '🏥' },
  { name: 'Hundesalons', icon: '🐶' },
]

export default function BookbasePage() {
  return (
    <>
      <SEO
        title="BookBase — Buchungssystem für Salons & Dienstleister | drvn"
        description="BookBase: Online-Terminbuchung, Kundenkartei und Abrechnung für Salons, Studios und Dienstleister. DSGVO-konform, kein Abo-Zwang. Für den DACH-Markt. Ab 2026."
        path="/bookbase"
        keywords="Buchungssystem Salon, Online Terminbuchung, Terminverwaltung Software, Buchungssoftware Beauty, Friseur Software, Kosmetik Software, Dienstleister Software"
      />
      <main>
      {/* ════════════ HERO ════════════ */}
      <section className="relative pt-24 pb-0 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px]
            bg-[radial-gradient(ellipse_at_center,rgba(232,74,28,0.07)_0%,transparent_65%)]" />
        </div>

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 mb-12 items-start">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="mb-6 flex items-center gap-3"
              >
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full
                  border border-border bg-surface text-xs font-mono text-secondary uppercase tracking-[0.1em]">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                  SaaS · Beauty & Service · In Produktion
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full
                  bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-600 uppercase tracking-[0.08em]">
                  Launch in wenigen Tagen
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="font-sans font-bold leading-[1.04] tracking-[-0.03em] text-primary mb-6"
                style={{ fontSize: 'clamp(2.5rem,5vw,4rem)' }}
              >
                Das Buchungssystem für Salons und Studios.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="text-lg text-secondary leading-[1.65] mb-8 max-w-[52ch]"
              >
                Online-Buchungen ohne Plattform-Abhängigkeit. Kundenkartei, Erinnerungen, Abrechnung —
                alles unter deiner Marke. DSGVO-konform, Server in Deutschland.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-wrap gap-3"
              >
                <Link
                  to="/kontakt"
                  className="inline-flex items-center gap-2 bg-signal hover:bg-signalHover
                    text-white font-semibold px-6 py-3.5 rounded-lg transition-colors text-sm"
                >
                  Frühen Zugang sichern <ArrowUpRight className="w-4 h-4" />
                </Link>
                <a
                  href="#funktionen"
                  className="inline-flex items-center gap-2 bg-surface hover:bg-elevated
                    text-primary border border-border hover:border-borderHigh
                    font-semibold px-6 py-3.5 rounded-lg transition-colors text-sm"
                >
                  Funktionen ansehen <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-4 lg:col-start-9"
            >
              <div className="divide-y divide-border border border-border rounded-xl overflow-hidden">
                {[
                  { label: 'Status',       value: 'Produktion' },
                  { label: 'Launch',       value: 'Mai 2026' },
                  { label: 'Preis ab',     value: '29 €/Monat' },
                  { label: 'Zielgruppe',   value: 'Salons & Studios' },
                  { label: 'DSGVO',        value: 'Ja, Server DE' },
                  { label: 'Vertrag',      value: 'Monatlich kündbar' },
                ].map((s) => (
                  <div key={s.label} className="flex justify-between px-4 py-3 bg-surface">
                    <span className="font-mono text-[10px] text-muted uppercase tracking-[0.08em]">{s.label}</span>
                    <span className="font-mono text-xs text-primary">{s.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Screenshot-Mockup — Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="rounded-t-xl overflow-hidden border border-border border-b-0"
              style={{ boxShadow: '0 -20px 60px rgba(0,0,0,0.1)' }}>
              <div className="flex items-center gap-2 px-4 py-3 bg-elevated border-b border-border">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                  <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                </div>
                <div className="flex-1 flex justify-center">
                  <span className="font-mono text-xs text-muted bg-surface border border-border px-4 py-1 rounded-md">
                    app.bookbase.de/dashboard
                  </span>
                </div>
              </div>
              {/* Dashboard Mockup — wird durch echten Screenshot ersetzt beim Launch */}
              <div className="bg-[#0f1117] min-h-[460px] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: 'radial-gradient(circle at 25% 40%, rgba(232,74,28,0.4) 0%, transparent 50%), radial-gradient(circle at 75% 60%, rgba(59,130,246,0.3) 0%, transparent 50%)',
                  }}
                />
                <div className="relative z-10 text-center px-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-6">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                    <span className="font-mono text-xs text-amber-500 uppercase tracking-[0.1em]">Screenshot folgt beim Launch</span>
                  </div>
                  <p className="font-sans font-bold text-white text-2xl mb-2">bookbase</p>
                  <p className="text-sm text-gray-400">Buchungssystem · In finaler Entwicklung</p>
                  <div className="mt-8 grid grid-cols-3 gap-4 max-w-md mx-auto">
                    {['Heute: 8 Termine', '14 Kunden', '420 € Umsatz'].map(s => (
                      <div key={s} className="bg-white/5 border border-white/10 rounded-lg px-3 py-3 text-center">
                        <p className="text-xs text-gray-300">{s}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ════════════ FUNKTIONEN ════════════ */}
      <section id="funktionen" className="border-t border-border py-20 md:py-28 bg-surface">
        <Container>
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            className="text-center mb-16"
          >
            <p className="font-mono text-xs text-muted uppercase tracking-[0.14em] mb-3">Funktionen</p>
            <h2 className="font-sans font-bold tracking-[-0.03em] text-primary"
              style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)' }}>
              Alles was ein Salon braucht.
            </h2>
            <p className="text-secondary mt-4 max-w-[48ch] mx-auto">
              Kein Schnickschnack. Jede Funktion ist für den täglichen Betrieb gebaut.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {FEATURES.map((feat, i) => {
              const Icon = feat.icon
              return (
                <motion.div
                  key={feat.title}
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
                    <h3 className="font-sans font-semibold text-base text-primary mb-2">{feat.title}</h3>
                    <p className="text-sm text-secondary leading-[1.65]">{feat.text}</p>
                  </div>
                  <ul className="mt-auto space-y-1.5">
                    {feat.punkte.map(p => (
                      <li key={p} className="flex items-center gap-2 text-xs text-muted">
                        <Check className="w-3.5 h-3.5 text-signal flex-shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* ════════════ WIE ES FUNKTIONIERT ════════════ */}
      <section className="border-t border-border py-20 md:py-28">
        <Container>
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            className="mb-16"
          >
            <p className="font-mono text-xs text-muted uppercase tracking-[0.14em] mb-3">Ablauf</p>
            <h2 className="font-sans font-bold tracking-[-0.03em] text-primary"
              style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)' }}>
              So funktioniert BookBase.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={viewport}
            >
              <div className="space-y-10">
                {[
                  {
                    nr: '1',
                    title: 'Salon einrichten (30 Min.)',
                    text: 'Dienstleistungen, Mitarbeiter, Öffnungszeiten einpflegen. Wir helfen beim Setup per Videocall oder Video-Tutorial.',
                  },
                  {
                    nr: '2',
                    title: 'Widget auf die Website',
                    text: 'Zwei Zeilen Code auf die bestehende Website kopieren — fertig. Kunden können sofort buchen, ohne die Seite zu verlassen.',
                  },
                  {
                    nr: '3',
                    title: 'Buchungen laufen automatisch',
                    text: 'Neubuchung → automatische Bestätigung per E-Mail. 24h vorher → automatische Erinnerung. No-Shows bis zu 60% reduziert.',
                  },
                  {
                    nr: '4',
                    title: 'Kalender & Kundenkartei wachsen mit',
                    text: 'Jede Buchung baut die Kundendatenbank auf. Nach einem Monat weißt du, wer deine besten Kunden sind und was sie buchen.',
                  },
                ].map(step => (
                  <div key={step.nr} className="flex gap-5">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-signal/10 border border-signal/30
                      font-mono text-xs text-signal flex items-center justify-center font-bold">
                      {step.nr}
                    </span>
                    <div>
                      <h3 className="font-sans font-semibold text-primary mb-1.5">{step.title}</h3>
                      <p className="text-sm text-secondary leading-[1.65]">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Mobile Widget Preview */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={viewport}
              transition={{ delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="w-72 bg-[#0f1117] rounded-3xl border border-white/10 overflow-hidden"
                style={{ boxShadow: '0 30px 80px rgba(0,0,0,0.3)' }}>
                {/* Phone header */}
                <div className="px-5 py-4 border-b border-white/10 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-signal/20 flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-signal" />
                  </div>
                  <div>
                    <p className="text-white text-xs font-semibold">Online buchen</p>
                    <p className="text-gray-500 text-[10px]">Haircut & Style Studio</p>
                  </div>
                </div>
                {/* Service list */}
                <div className="p-4 space-y-2">
                  {[
                    { name: 'Haarschnitt Damen', dauer: '60 Min', preis: '45 €', selected: true },
                    { name: 'Haarschnitt Herren', dauer: '30 Min', preis: '28 €', selected: false },
                    { name: 'Färben komplett', dauer: '120 Min', preis: '95 €', selected: false },
                  ].map(s => (
                    <div key={s.name}
                      className={`flex items-center justify-between px-3 py-3 rounded-lg border text-xs
                        ${s.selected
                          ? 'bg-signal/15 border-signal/40 text-white'
                          : 'bg-white/5 border-white/10 text-gray-400'}`}>
                      <div>
                        <p className={s.selected ? 'text-white font-medium' : ''}>{s.name}</p>
                        <p className="text-[10px] opacity-60 mt-0.5">{s.dauer}</p>
                      </div>
                      <span className={s.selected ? 'text-signal font-semibold' : ''}>{s.preis}</span>
                    </div>
                  ))}
                </div>
                {/* Date picker hint */}
                <div className="px-4 pb-4">
                  <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-2">Nächste freie Termine</p>
                    <div className="grid grid-cols-3 gap-1.5">
                      {['Mo 19.05', 'Di 20.05', 'Mi 21.05'].map(d => (
                        <div key={d} className="text-center bg-white/5 rounded py-1.5">
                          <p className="text-[9px] text-gray-400">{d}</p>
                          <p className="text-[10px] text-signal font-medium">10:00</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <button className="w-full mt-3 bg-signal text-white rounded-lg py-3 text-xs font-semibold">
                    Termin buchen →
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ════════════ VERGLEICH ════════════ */}
      <section className="border-t border-border py-20 md:py-28 bg-surface">
        <Container>
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            className="mb-12"
          >
            <p className="font-mono text-xs text-muted uppercase tracking-[0.14em] mb-3">Vergleich</p>
            <h2 className="font-sans font-bold tracking-[-0.03em] text-primary"
              style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)' }}>
              BookBase vs. Treatwell & Co.
            </h2>
            <p className="text-secondary mt-4 max-w-[52ch]">
              Plattformen wie Treatwell nehmen Provision pro Buchung und behalten die Kundendaten.
              Bei BookBase gehört alles dir.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={viewport}
          >
            <div className="border border-border rounded-xl overflow-hidden">
              <div className="grid grid-cols-3 bg-elevated border-b border-border">
                <div className="px-5 py-4 font-mono text-[10px] text-muted uppercase tracking-[0.1em]">Merkmal</div>
                <div className="px-5 py-4 font-mono text-[10px] text-signal uppercase tracking-[0.1em] border-l border-border">BookBase</div>
                <div className="px-5 py-4 font-mono text-[10px] text-muted uppercase tracking-[0.1em] border-l border-border">Treatwell / Fresha</div>
              </div>
              {UNTERSCHIEDE.map((row, i) => (
                <div key={row.merkmal}
                  className={`grid grid-cols-3 border-b border-border last:border-0 ${i % 2 === 0 ? 'bg-surface' : 'bg-bg'}`}>
                  <div className="px-5 py-4 font-mono text-xs text-muted">{row.merkmal}</div>
                  <div className="px-5 py-4 text-xs text-primary border-l border-border flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-signal flex-shrink-0 mt-0.5" />
                    {row.bookbase}
                  </div>
                  <div className="px-5 py-4 text-xs text-secondary border-l border-border">{row.andere}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ════════════ BRANCHEN ════════════ */}
      <section className="border-t border-border py-20 md:py-28">
        <Container>
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            className="mb-10"
          >
            <p className="font-mono text-xs text-muted uppercase tracking-[0.14em] mb-3">Branchen</p>
            <h2 className="font-sans font-bold tracking-[-0.03em] text-primary mb-2"
              style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)' }}>
              Für wen BookBase gemacht ist.
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border">
            {BRANCHEN.map((b, i) => (
              <motion.div
                key={b.name}
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={viewport}
                transition={{ delay: (i % 4) * 0.06 }}
                className="bg-bg px-6 py-5 flex items-center gap-3"
              >
                <span className="text-xl">{b.icon}</span>
                <span className="text-sm text-secondary">{b.name}</span>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ════════════ CTA ════════════ */}
      <section className="border-t border-border py-20 md:py-28 bg-surface">
        <Container>
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            className="max-w-[60ch]"
          >
            <div className="flex items-center gap-2 mb-6">
              <Star className="w-4 h-4 text-signal" />
              <p className="font-mono text-xs text-muted uppercase tracking-[0.14em]">Früher Zugang</p>
            </div>
            <h2 className="font-sans font-bold tracking-[-0.03em] text-primary mb-4"
              style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)' }}>
              BookBase launcht in wenigen Tagen.
            </h2>
            <p className="text-secondary leading-[1.7] mb-8">
              Wer sich jetzt meldet, bekommt die ersten drei Monate zum Einführungspreis — und direkten Kontakt
              während des Launches. Wir richten BookBase gemeinsam in eurem Salon ein.
            </p>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 bg-signal hover:bg-signalHover
                text-white font-semibold px-7 py-4 rounded-lg transition-colors"
            >
              Frühen Zugang sichern <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </Container>
      </section>
      </main>
    </>
  )
}
