import { Link } from 'react-router-dom';
import {
  ArrowRight, CheckCircle2, ChevronRight, QrCode,
  LayoutDashboard, CalendarCheck, Users, Palette,
  Zap, Shield, Globe, Clock, Star, ChevronDown,
  Smartphone, BarChart3, Bell, Lock,
} from 'lucide-react';

/* ===== Daten ===== */

const PROBLEME = [
  {
    problem: 'Bestellzettel gehen verloren',
    loesung: 'Gäste bestellen per QR-Code direkt vom Tisch — digital, sofort, fehlerfrei.',
  },
  {
    problem: 'Reservierungen per Telefon',
    loesung: 'Online-Buchungsseite mit Zeitslots — Gäste buchen rund um die Uhr ohne Anruf.',
  },
  {
    problem: 'Kein Überblick über den Betrieb',
    loesung: 'Echtzeit-Dashboard mit Umsatz, offenen Bestellungen und Tischstatus — alles live.',
  },
];

const FEATURES = [
  {
    icon: <QrCode size={28} />,
    titel: 'QR-Bestellung',
    beschreibung:
      'Jeder Tisch bekommt einen individuellen QR-Code. Gäste scannen, wählen aus der digitalen Speisekarte und bestellen direkt — ohne Kellner, ohne Wartezeit.',
    punkte: [
      'Bestellung erscheint sofort im Kitchen Display',
      'Live-Status für Gäste (In Zubereitung, Fertig)',
      'Warenkorb mit Anmerkungen je Position',
      'Funktioniert auf jedem Smartphone, ohne App',
    ],
    tag: 'Bestseller',
  },
  {
    icon: <CalendarCheck size={28} />,
    titel: 'Online-Reservierungen',
    beschreibung:
      'Ihre Gäste buchen Tische rund um die Uhr — auf Ihrer Website, per Widget oder über den direkten Buchungslink. Sie sehen alles live im Dashboard.',
    punkte: [
      'Eigene Buchungsseite mit Ihrem Branding',
      'Automatische Bestätigungs-E-Mail mit QR-Code',
      'Stornierung + Self-Service für Gäste',
      'Echtzeit-Benachrichtigungen bei neuer Buchung',
    ],
    tag: null,
  },
  {
    icon: <LayoutDashboard size={28} />,
    titel: 'Admin-Dashboard',
    beschreibung:
      'Alle Informationen auf einen Blick: offene Bestellungen, Tischstatus, Tagesumsatz und Reservierungen — in Echtzeit, auf jedem Gerät.',
    punkte: [
      'Live-Tischplan mit Status (frei / besetzt / reserviert)',
      'Umsatzstatistiken und Tagesübersicht',
      'Speisekarte direkt bearbeiten',
      'Mitarbeiterzugänge mit Rollenrechten',
    ],
    tag: null,
  },
  {
    icon: <Users size={28} />,
    titel: 'Mitarbeiter & Dienstplan',
    beschreibung:
      'Verwalten Sie Ihr Team direkt in ServeFlow. Jeder Mitarbeiter bekommt eigenen Zugang mit definierten Rechten — kein geteiltes Passwort mehr.',
    punkte: [
      'Einladung per E-Mail, Zugänge sicher verwalten',
      'Rollenbasierte Rechte (Admin, Kellner, Küche)',
      'Dienstplan mit Schichtplanung',
      'Passwort-Reset und E-Mail-Verifizierung',
    ],
    tag: null,
  },
  {
    icon: <Palette size={28} />,
    titel: 'Design anpassen',
    beschreibung:
      'ServeFlow passt sich Ihrem Restaurant an — nicht umgekehrt. Stellen Sie Ihre Primärfarbe ein, laden Sie Ihr Logo hoch und geben Sie Gästen ein konsistentes Markenerlebnis.',
    punkte: [
      'Primärfarbe per Farbwähler einstellen',
      'Eigenes Logo auf Bestellseite und E-Mails',
      'Dark Mode für das Admin-Dashboard',
      'Kategorie-Ansicht in der Speisekarte',
    ],
    tag: 'Neu',
  },
];

const PREISE = [
  {
    name: 'Starter',
    preis: '29',
    beschreibung: 'Für den Einstieg — alle Grundfunktionen.',
    features: [
      'QR-Bestellsystem',
      'Bis zu 15 Tische',
      'Digitale Speisekarte',
      'Online-Reservierungen',
      'Admin-Dashboard',
      'E-Mail-Support',
    ],
    highlight: false,
    cta: 'Jetzt starten',
  },
  {
    name: 'Pro',
    preis: '59',
    beschreibung: 'Alles was ein aktives Restaurant braucht.',
    features: [
      'Alles aus Starter',
      'Unbegrenzte Tische',
      'Mitarbeiterverwaltung',
      'Dienstplan',
      'Design-Anpassung (Logo + Farbe)',
      'Prioritäts-Support',
      'Statistiken & Auswertungen',
    ],
    highlight: true,
    cta: 'Kostenlos testen',
  },
  {
    name: 'Business',
    preis: '99',
    beschreibung: 'Für mehrere Standorte und größere Teams.',
    features: [
      'Alles aus Pro',
      'Bis zu 3 Standorte',
      'Zentrales Multi-Standort-Dashboard',
      'Dedizierter Ansprechpartner',
      'Onboarding & Einrichtung inklusive',
      'SLA 99,9% Uptime',
    ],
    highlight: false,
    cta: 'Kontakt aufnehmen',
  },
];

const FAQ = [
  {
    frage: 'Brauchen meine Gäste eine App?',
    antwort:
      'Nein. Die Bestellseite läuft im Browser — Gäste scannen den QR-Code, und die Seite öffnet sich sofort. Keine App, kein Download, kein Login.',
  },
  {
    frage: 'Wie lange dauert die Einrichtung?',
    antwort:
      'Die meisten Restaurants sind in unter 30 Minuten startklar. Sie legen ein Konto an, erstellen Ihre Speisekarte, drucken die QR-Codes aus — fertig.',
  },
  {
    frage: 'Ist ServeFlow DSGVO-konform?',
    antwort:
      'Ja. Alle Daten werden auf Servern in Deutschland (Hetzner) gespeichert. Kein Transfer in Drittländer. DSGVO-konforme Datenhaltung ist Standard, kein Aufpreis.',
  },
  {
    frage: 'Was passiert wenn mein Internet ausfällt?',
    antwort:
      'Das Admin-Dashboard zeigt eine Warnung. Bereits eingegangene Bestellungen bleiben gespeichert. Wir empfehlen einen mobilen Hotspot als Backup — dauert 10 Sekunden.',
  },
  {
    frage: 'Kann ich monatlich kündigen?',
    antwort:
      'Ja. Keine Mindestlaufzeit, keine versteckten Kosten. Sie können jederzeit zum Monatsende kündigen.',
  },
  {
    frage: 'Gibt es eine Testphase?',
    antwort:
      'Ja. Der Pro-Plan kann 14 Tage kostenlos und ohne Kreditkarte getestet werden. Danach entscheiden Sie.',
  },
];

const TRUST = [
  { icon: <Shield size={18} />, text: 'DSGVO-konform' },
  { icon: <Globe size={18} />, text: 'Server in Deutschland' },
  { icon: <Lock size={18} />, text: 'SSL-verschlüsselt' },
  { icon: <Clock size={18} />, text: '99,9% Uptime' },
  { icon: <Bell size={18} />, text: 'Echtzeit-Updates' },
  { icon: <Smartphone size={18} />, text: 'Mobil-optimiert' },
];

/* ===== FAQ Item ===== */
function FaqItem({ frage, antwort }: { frage: string; antwort: string }) {
  return (
    <details className="group border border-border rounded-xl overflow-hidden">
      <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none hover:bg-surface-light transition-colors">
        <span className="font-medium text-sm">{frage}</span>
        <ChevronDown
          size={16}
          className="text-text-muted group-open:rotate-180 transition-transform flex-shrink-0 ml-4"
        />
      </summary>
      <div className="px-6 pb-5 text-sm text-text-muted leading-relaxed border-t border-border pt-4">
        {antwort}
      </div>
    </details>
  );
}

/* ===== Page ===== */
export default function ServeFlow() {
  return (
    <div className="pt-16">

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/8 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 pt-24 pb-16 md:pt-36 md:pb-20 text-center relative">
          {/* Produkt-Badge */}
          <div className="inline-flex items-center gap-2 bg-surface border border-border rounded-full px-4 py-1.5 text-xs font-medium text-text-muted mb-6">
            <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
            Ein DRVN Produkt
          </div>

          {/* Logo + Name */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
              <Zap size={24} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Serve<span className="text-gradient">Flow</span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl font-medium text-text-muted mb-4">
            Das digitale Betriebssystem für Ihr Restaurant.
          </p>
          <p className="text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            QR-Bestellung, Online-Reservierungen und Echtzeit-Dashboard —
            alles in einer Plattform. Sofort startklar, DSGVO-konform,
            Server in Deutschland.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/kontakt"
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3.5 rounded-xl transition-all glow-blue inline-flex items-center justify-center gap-2"
            >
              14 Tage kostenlos testen <ArrowRight size={18} />
            </Link>
            <a
              href="#features"
              className="border border-border-light hover:border-text-muted text-text font-medium px-8 py-3.5 rounded-xl transition-all inline-flex items-center justify-center gap-2"
            >
              Alle Features ansehen <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ===== TRUST BAR ===== */}
      <section className="border-y border-border bg-surface">
        <div className="max-w-5xl mx-auto px-6 py-5">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {TRUST.map((t) => (
              <div key={t.text} className="flex items-center gap-2 text-xs text-text-muted">
                <span className="text-success">{t.icon}</span>
                {t.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROBLEME ===== */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">Warum ServeFlow?</p>
          <h2 className="text-3xl md:text-4xl font-bold">Schluss mit Chaos im Betrieb</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROBLEME.map((p) => (
            <div key={p.problem} className="bg-surface rounded-2xl p-6 border border-border">
              <div className="text-sm font-medium text-red-400 mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                Problem
              </div>
              <p className="font-semibold mb-4 text-text">{p.problem}</p>
              <div className="text-sm font-medium text-success mb-3 flex items-center gap-2">
                <CheckCircle2 size={14} />
                ServeFlow-Lösung
              </div>
              <p className="text-sm text-text-muted leading-relaxed">{p.loesung}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <div id="features">
        {FEATURES.map((f, i) => (
          <section
            key={f.titel}
            className={i % 2 === 1 ? 'bg-surface border-y border-border' : ''}
          >
            <div className="max-w-5xl mx-auto px-6 py-20">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Text */}
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                      {f.icon}
                    </div>
                    {f.tag && (
                      <span className="text-xs bg-primary/10 text-primary border border-primary/20 rounded-full px-3 py-1 font-medium">
                        {f.tag}
                      </span>
                    )}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">{f.titel}</h2>
                  <p className="text-text-muted leading-relaxed mb-6">{f.beschreibung}</p>
                  <ul className="space-y-3">
                    {f.punkte.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-sm">
                        <CheckCircle2 size={16} className="text-success flex-shrink-0 mt-0.5" />
                        <span className="text-text-muted">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual Placeholder */}
                <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-[#0D1117] border border-border rounded-2xl overflow-hidden shadow-2xl aspect-video flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
                        {f.icon}
                      </div>
                      <p className="text-sm text-text-muted">Screenshot folgt</p>
                      <p className="text-xs text-text-muted/50 mt-1">Demo auf Anfrage</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* ===== STATS ===== */}
      <section className="border-y border-border">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { zahl: '< 30 Min', label: 'Einrichtungszeit' },
              { zahl: '99,9%', label: 'Uptime SLA' },
              { zahl: '0', label: 'Apps zum Download' },
              { zahl: '24h', label: 'Support-Reaktionszeit' },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-bold text-gradient mb-1">{s.zahl}</p>
                <p className="text-sm text-text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PREISE ===== */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">Preise</p>
          <h2 className="text-3xl md:text-4xl font-bold">Transparent. Kein Kleingedrucktes.</h2>
          <p className="text-text-muted mt-3">Monatlich kündbar. Keine Einrichtungsgebühr. Keine versteckten Kosten.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PREISE.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl p-7 border flex flex-col ${
                p.highlight
                  ? 'border-primary/40 bg-primary/5 relative'
                  : 'border-border bg-surface'
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-semibold px-4 py-1 rounded-full whitespace-nowrap">
                  Empfohlen
                </div>
              )}
              <div className="mb-5">
                <p className="text-sm font-medium text-text-muted mb-1">{p.name}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">€{p.preis}</span>
                  <span className="text-text-muted text-sm">/Monat</span>
                </div>
                <p className="text-xs text-text-muted mt-2">{p.beschreibung}</p>
              </div>

              <ul className="space-y-3 flex-1 mb-6">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 size={15} className="text-success flex-shrink-0 mt-0.5" />
                    <span className="text-text-muted">{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/kontakt"
                className={`w-full py-3 rounded-xl font-semibold text-sm text-center transition-all ${
                  p.highlight
                    ? 'bg-primary hover:bg-primary/90 text-white glow-blue'
                    : 'border border-border-light hover:border-text-muted text-text'
                }`}
              >
                {p.cta}
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-text-muted mt-6">
          Alle Preise zzgl. gesetzlicher MwSt. · Monatlich kündbar · Keine Mindestlaufzeit
        </p>
      </section>

      {/* ===== COMPLIANCE ===== */}
      <section className="bg-surface border-y border-border">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">Datenschutz & Sicherheit</p>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Gemacht für Deutschland.<br />
                <span className="text-gradient">DSGVO von Anfang an.</span>
              </h2>
              <p className="text-text-muted leading-relaxed mb-6">
                ServeFlow wurde von Grund auf DSGVO-konform entwickelt. Kein nachträgliches
                Datenschutz-Pflaster — Datenschutz ist Teil des Produkts.
              </p>
              <ul className="space-y-3">
                {[
                  'Server ausschließlich in Deutschland (Hetzner)',
                  'Alle Verbindungen SSL-verschlüsselt',
                  'Kein Tracking, keine Weitergabe an Dritte',
                  'Auftragsverarbeitungsvertrag (AVV) inklusive',
                  'Löschkonzept für Gästedaten nach 30 Tagen',
                  'DSGVO-konforme Datenschutzerklärung für Ihre Website verfügbar',
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 size={15} className="text-success flex-shrink-0 mt-0.5" />
                    <span className="text-text-muted">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Shield size={22} />, title: 'DSGVO-konform', sub: 'Art. 25 Privacy by Design' },
                { icon: <Globe size={22} />, title: 'Made in Germany', sub: 'Server + Entwicklung in DE' },
                { icon: <Lock size={22} />, title: 'SSL + bcrypt', sub: 'Verschlüsselung überall' },
                { icon: <BarChart3 size={22} />, title: 'Kein Tracking', sub: 'Keine Weitergabe an Dritte' },
              ].map((b) => (
                <div key={b.title} className="bg-bg rounded-xl p-5 border border-border">
                  <div className="text-primary mb-3">{b.icon}</div>
                  <p className="font-semibold text-sm mb-1">{b.title}</p>
                  <p className="text-xs text-text-muted">{b.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">FAQ</p>
          <h2 className="text-3xl font-bold">Häufige Fragen</h2>
        </div>
        <div className="space-y-3">
          {FAQ.map((f) => (
            <FaqItem key={f.frage} {...f} />
          ))}
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="relative overflow-hidden border-t border-border">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 py-24 text-center relative">
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bereit für das digitale<br />
            <span className="text-gradient">Restaurant der Zukunft?</span>
          </h2>
          <p className="text-text-muted mb-8 max-w-lg mx-auto">
            14 Tage kostenlos testen — ohne Kreditkarte, ohne Risiko.
            Wir helfen Ihnen beim Einrichten.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/kontakt"
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3.5 rounded-xl transition-all glow-blue inline-flex items-center justify-center gap-2"
            >
              Jetzt kostenlos starten <ArrowRight size={18} />
            </Link>
            <Link
              to="/kontakt"
              className="border border-border-light hover:border-text-muted text-text font-medium px-8 py-3.5 rounded-xl transition-all inline-flex items-center justify-center gap-1"
            >
              Demo anfragen <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
