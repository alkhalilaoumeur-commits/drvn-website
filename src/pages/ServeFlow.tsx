import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { ContainerScroll } from '../components/ContainerScroll';
import {
  ArrowRight, CheckCircle2, ChevronDown, ExternalLink,
  QrCode, CalendarCheck, LayoutDashboard, Users,
  Palette, Shield, Globe, Lock, Clock, Smartphone,
  BarChart3, Bell, Star, ChevronRight,
} from 'lucide-react';

const DEMO_URL = 'http://n11hq0nbyhc32xlcw7kf9dua.178.104.147.61.sslip.io';

/* ===== Dashboard Mockup ===== */
function DashboardMockup() {
  return (
    <div className="bg-[#0D1117] border border-border rounded-xl overflow-hidden shadow-2xl h-full flex flex-col">
      {/* Browser Bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-[#161B22] flex-shrink-0">
        <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
        <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
        <div className="w-3 h-3 rounded-full bg-[#28C840]" />
        <div className="ml-3 flex-1 bg-[#0D1117] rounded-md px-3 py-1 text-[11px] text-text-muted font-mono">
          app.serveflow.de/dashboard
        </div>
      </div>
      {/* Dashboard Content */}
      <div className="p-5 space-y-4 flex-1 overflow-hidden">
        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Heute', value: '€1.240', up: true },
            { label: 'Bestellungen', value: '34', up: true },
            { label: 'Auslastung', value: '78%', up: false },
          ].map((s) => (
            <div key={s.label} className="bg-[#161B22] rounded-xl p-3 border border-border">
              <p className="text-[10px] text-text-muted mb-1">{s.label}</p>
              <p className="text-base font-bold text-text">{s.value}</p>
              <p className={`text-[10px] mt-0.5 ${s.up ? 'text-green-400' : 'text-yellow-400'}`}>
                {s.up ? '↑ +12%' : '→ stabil'}
              </p>
            </div>
          ))}
        </div>
        {/* Table Status */}
        <div className="bg-[#161B22] rounded-xl p-3 border border-border">
          <p className="text-[10px] text-text-muted mb-3 font-medium uppercase tracking-wider">Tischstatus — Live</p>
          <div className="grid grid-cols-5 gap-2">
            {[
              { nr: 1, status: 'besetzt' },
              { nr: 2, status: 'frei' },
              { nr: 3, status: 'besetzt' },
              { nr: 4, status: 'reserviert' },
              { nr: 5, status: 'frei' },
              { nr: 6, status: 'besetzt' },
              { nr: 7, status: 'frei' },
              { nr: 8, status: 'besetzt' },
              { nr: 9, status: 'reserviert' },
              { nr: 10, status: 'frei' },
            ].map((t) => (
              <div
                key={t.nr}
                className={`rounded-lg p-2 text-center border ${
                  t.status === 'besetzt'
                    ? 'bg-primary/10 border-primary/30 text-primary'
                    : t.status === 'reserviert'
                    ? 'bg-yellow-400/10 border-yellow-400/30 text-yellow-400'
                    : 'bg-success/10 border-success/30 text-success'
                }`}
              >
                <p className="text-[10px] font-bold">{t.nr}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-4 mt-3">
            {[['primary', 'Besetzt'], ['yellow-400', 'Reserviert'], ['success', 'Frei']].map(([c, l]) => (
              <div key={l} className="flex items-center gap-1.5">
                <div className={`w-2 h-2 rounded-full bg-${c}`} />
                <span className="text-[9px] text-text-muted">{l}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Orders */}
        <div className="space-y-2">
          {[
            { tisch: 'Tisch 3', item: 'Pasta Carbonara × 2', status: 'Neu', color: 'text-primary bg-primary/10 border-primary/20' },
            { tisch: 'Tisch 1', item: 'Pizza Margherita × 1', status: 'In Zubereitung', color: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20' },
            { tisch: 'Tisch 6', item: 'Tiramisu × 3', status: 'Fertig', color: 'text-success bg-success/10 border-success/20' },
          ].map((o) => (
            <div key={o.tisch} className="flex items-center justify-between bg-[#161B22] rounded-xl px-3 py-2.5 border border-border">
              <div>
                <p className="text-[11px] font-medium text-text">{o.tisch}</p>
                <p className="text-[10px] text-text-muted">{o.item}</p>
              </div>
              <span className={`text-[10px] border rounded-full px-2 py-0.5 font-medium ${o.color}`}>
                {o.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ===== FAQ Item ===== */
function FaqItem({ frage, antwort }: { frage: string; antwort: string }) {
  return (
    <details className="group border border-border rounded-xl overflow-hidden">
      <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none hover:bg-surface-light transition-colors">
        <span className="font-medium text-sm">{frage}</span>
        <ChevronDown size={16} className="text-text-muted group-open:rotate-180 transition-transform flex-shrink-0 ml-4" />
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
      <SEO
        title="ServeFlow — Kassensystem & Bestellsystem für Restaurants"
        description="QR-Bestellung, Online-Reservierungen und Echtzeit-Dashboard für Restaurants. DSGVO-konform, Server in Deutschland, in 30 Minuten startklar."
        path="/produkte/serveflow"
        keywords="Restaurant Software, QR Bestellung, Tischverwaltung, Online Reservierung, Kassensystem Restaurant, Gastronomie App Deutschland"
        schema={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'SoftwareApplication',
              name: 'ServeFlow',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Web, iOS, Android',
              offers: {
                '@type': 'AggregateOffer',
                lowPrice: '29',
                highPrice: '99',
                priceCurrency: 'EUR',
                offerCount: 3,
              },
              description: 'Digitales Betriebssystem für Restaurants: QR-Bestellung, Tischverwaltung, Online-Reservierungen, Dashboard.',
              url: 'https://drvnautomatisations.com/produkte/serveflow',
              provider: { '@type': 'Organization', name: 'DRVN' },
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://drvnautomatisations.com' },
                { '@type': 'ListItem', position: 2, name: 'Produkte', item: 'https://drvnautomatisations.com/branchen' },
                { '@type': 'ListItem', position: 3, name: 'ServeFlow', item: 'https://drvnautomatisations.com/produkte/serveflow' },
              ],
            },
          ],
        }}
      />

      {/* ===== HERO — Container Scroll Animation ===== */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Background glows */}
        <div style={{ position: 'absolute', top: 0, left: '25%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 65%)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: 0, right: '25%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 65%)', borderRadius: '50%', pointerEvents: 'none' }} />

        <ContainerScroll
          titleComponent={
            <>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 14px 5px 5px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '100px', marginBottom: '28px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', padding: '3px 8px', background: 'rgba(34,197,94,0.12)', color: '#22C55E', border: '1px solid rgba(34,197,94,0.3)', borderRadius: '100px', letterSpacing: '0.04em', fontWeight: 500 }}>
                  LIVE
                </span>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', color: 'rgba(255,255,255,0.75)', fontWeight: 500 }}>
                  Ein DRVN Produkt
                </span>
              </div>

              <h1
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(40px, 6vw, 80px)',
                  fontWeight: 700,
                  lineHeight: 1.0,
                  letterSpacing: '-0.035em',
                  margin: '0 0 24px',
                  color: '#FAFAFA',
                }}
              >
                Das digitale Betriebssystem<br />
                <span style={{ background: 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  für Ihr Restaurant.
                </span>
              </h1>

              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(16px, 1.3vw, 20px)', lineHeight: 1.55, color: 'rgba(255,255,255,0.6)', maxWidth: '620px', margin: '0 auto 36px' }}>
                QR-Bestellung, Online-Reservierungen, Echtzeit-Dashboard.
                In 30 Minuten startklar — DSGVO-konform, Server in Deutschland.
              </p>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '24px' }}>
                <Link to="/kontakt" className="btn-primary-blue" style={{ cursor: 'pointer' }}>
                  14 Tage kostenlos testen <ArrowRight size={15} />
                </Link>
                <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ cursor: 'pointer' }}>
                  <ExternalLink size={14} /> Live-Demo ansehen
                </a>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                {['DSGVO-konform', 'Server in Deutschland', 'Monatlich kündbar'].map((t) => (
                  <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'rgba(255,255,255,0.45)' }}>
                    <CheckCircle2 size={12} style={{ color: '#22C55E' }} />
                    {t}
                  </div>
                ))}
              </div>
            </>
          }
        >
          <DashboardMockup />
        </ContainerScroll>
      </section>

      {/* ===== TRUST BAR ===== */}
      <section className="border-y border-border bg-surface">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {[
              { icon: <Shield size={14} />, text: 'DSGVO-konform' },
              { icon: <Globe size={14} />, text: 'Server in Deutschland' },
              { icon: <Lock size={14} />, text: 'SSL-verschlüsselt' },
              { icon: <Clock size={14} />, text: '99,9% Uptime' },
              { icon: <Smartphone size={14} />, text: 'Keine App nötig' },
              { icon: <Bell size={14} />, text: 'Echtzeit via Socket.io' },
            ].map((t) => (
              <div key={t.text} className="flex items-center gap-2 text-xs text-text-muted">
                <span className="text-success">{t.icon}</span>
                {t.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURE GRID ===== */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">Features</p>
          <h2 className="text-3xl md:text-4xl font-bold">Alles was Ihr Restaurant braucht</h2>
          <p className="text-text-muted mt-3 max-w-xl mx-auto">
            Kein Flickwerk aus verschiedenen Tools — eine Plattform für alle Abläufe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              icon: <QrCode size={22} />,
              titel: 'QR-Bestellung',
              text: 'Gäste scannen, wählen aus der digitalen Speisekarte und bestellen direkt. Keine App, kein Download.',
              tag: 'Bestseller',
            },
            {
              icon: <CalendarCheck size={22} />,
              titel: 'Online-Reservierungen',
              text: 'Eigene Buchungsseite mit Zeitslots, automatischer E-Mail-Bestätigung und QR-Code für den Gast.',
              tag: null,
            },
            {
              icon: <LayoutDashboard size={22} />,
              titel: 'Echtzeit-Dashboard',
              text: 'Tischstatus, Bestellungen, Umsatz und Reservierungen — live auf einem Bildschirm.',
              tag: null,
            },
            {
              icon: <Users size={22} />,
              titel: 'Mitarbeiterverwaltung',
              text: 'Eigene Zugänge pro Mitarbeiter mit Rollenrechten. Einladung per E-Mail, sicheres Auth-System.',
              tag: null,
            },
            {
              icon: <Palette size={22} />,
              titel: 'Design anpassen',
              text: 'Eigene Primärfarbe, Logo auf Bestellseite und E-Mails. Ihr Restaurant, Ihr Look.',
              tag: 'Neu',
            },
            {
              icon: <BarChart3 size={22} />,
              titel: 'Statistiken',
              text: 'Umsatz, beliebteste Gerichte, Stoßzeiten — Daten die Ihnen helfen besser zu planen.',
              tag: null,
            },
          ].map((f) => (
            <div
              key={f.titel}
              className="bg-surface rounded-2xl p-6 border border-border hover:border-primary/30 transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                  {f.icon}
                </div>
                {f.tag && (
                  <span className="text-[11px] bg-primary/10 text-primary border border-primary/20 rounded-full px-2.5 py-0.5 font-medium">
                    {f.tag}
                  </span>
                )}
              </div>
              <h3 className="font-semibold mb-2">{f.titel}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== APP LINK SECTION ===== */}
      <section className="bg-surface border-y border-border">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">Live ansehen</p>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Sehen Sie ServeFlow<br />
                <span className="text-gradient">in Aktion.</span>
              </h2>
              <p className="text-text-muted leading-relaxed mb-6">
                Öffnen Sie die Demo-Instanz und sehen Sie selbst wie das Dashboard,
                die Tischverwaltung und die Bestellansicht aussehen — kein Login nötig für den Gäste-Bereich.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  'QR-Code scannen und Bestellung aufgeben',
                  'Admin-Dashboard mit Echtzeit-Updates',
                  'Reservierungssystem live erleben',
                ].map((p) => (
                  <li key={p} className="flex items-center gap-2.5 text-sm text-text-muted">
                    <CheckCircle2 size={14} className="text-success flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-xl transition-all glow-blue inline-flex items-center gap-2"
              >
                <ExternalLink size={17} />
                ServeFlow Demo öffnen
              </a>
            </div>

            {/* QR Mockup */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-[#0D1117] border border-border rounded-2xl p-8 text-center w-64">
                <div className="w-40 h-40 bg-white rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <QrCode size={80} className="text-[#0D1117]" />
                </div>
                <p className="text-sm font-medium text-text mb-1">Demo scannen</p>
                <p className="text-xs text-text-muted">Kamera auf QR-Code richten</p>
                <div className="mt-4 pt-4 border-t border-border">
                  <a
                    href={DEMO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-xs hover:underline inline-flex items-center gap-1"
                  >
                    Oder Link direkt öffnen <ChevronRight size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { zahl: '< 30 Min', label: 'Einrichtungszeit' },
            { zahl: '99,9%', label: 'Uptime' },
            { zahl: '0', label: 'Apps installieren' },
            { zahl: '24h', label: 'Support-Reaktion' },
          ].map((s) => (
            <div key={s.label} className="bg-surface rounded-2xl p-6 border border-border">
              <p className="text-2xl md:text-3xl font-bold text-gradient mb-1">{s.zahl}</p>
              <p className="text-sm text-text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PREISE ===== */}
      <section className="bg-surface border-y border-border">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">Preise</p>
            <h2 className="text-3xl font-bold">Transparent. Kein Kleingedrucktes.</h2>
            <p className="text-text-muted mt-2 text-sm">Monatlich kündbar · Keine Einrichtungsgebühr · Keine Mindestlaufzeit</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Starter', preis: '29',
                sub: 'Einstieg mit den wichtigsten Funktionen.',
                features: ['QR-Bestellsystem', 'Bis zu 15 Tische', 'Digitale Speisekarte', 'Online-Reservierungen', 'E-Mail-Support'],
                highlight: false, cta: 'Jetzt starten',
              },
              {
                name: 'Pro', preis: '59',
                sub: 'Alles was ein aktives Restaurant braucht.',
                features: ['Alles aus Starter', 'Unbegrenzte Tische', 'Mitarbeiterverwaltung + Dienstplan', 'Design-Anpassung (Logo + Farbe)', 'Statistiken & Auswertungen', 'Prioritäts-Support'],
                highlight: true, cta: '14 Tage kostenlos testen',
              },
              {
                name: 'Business', preis: '99',
                sub: 'Mehrere Standorte, größere Teams.',
                features: ['Alles aus Pro', 'Bis zu 3 Standorte', 'Zentrales Multi-Dashboard', 'Onboarding inklusive', 'Dedizierter Ansprechpartner'],
                highlight: false, cta: 'Kontakt aufnehmen',
              },
            ].map((p) => (
              <div
                key={p.name}
                className={`rounded-2xl p-7 border flex flex-col relative ${p.highlight ? 'border-primary/40 bg-primary/5' : 'border-border bg-bg'}`}
              >
                {p.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-semibold px-4 py-1 rounded-full">
                    Empfohlen
                  </div>
                )}
                <p className="text-sm font-medium text-text-muted mb-1">{p.name}</p>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-bold">€{p.preis}</span>
                  <span className="text-text-muted text-sm">/Monat</span>
                </div>
                <p className="text-xs text-text-muted mb-5">{p.sub}</p>
                <ul className="space-y-2.5 flex-1 mb-6">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 size={14} className="text-success flex-shrink-0 mt-0.5" />
                      <span className="text-text-muted">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/kontakt"
                  className={`w-full py-3 rounded-xl font-semibold text-sm text-center transition-all ${p.highlight ? 'bg-primary hover:bg-primary/90 text-white glow-blue' : 'border border-border-light hover:border-primary/30 text-text'}`}
                >
                  {p.cta}
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-text-muted mt-5">
            Alle Preise zzgl. gesetzlicher MwSt.
          </p>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <div className="text-center mb-10">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">FAQ</p>
          <h2 className="text-3xl font-bold">Häufige Fragen</h2>
        </div>
        <div className="space-y-3">
          {[
            { frage: 'Brauchen meine Gäste eine App?', antwort: 'Nein. Die Bestellseite läuft im Browser — Gäste scannen den QR-Code, und die Seite öffnet sich sofort. Keine App, kein Download, kein Login.' },
            { frage: 'Wie lange dauert die Einrichtung?', antwort: 'Die meisten Restaurants sind in unter 30 Minuten startklar. Konto anlegen, Speisekarte erstellen, QR-Codes drucken — fertig.' },
            { frage: 'Ist ServeFlow DSGVO-konform?', antwort: 'Ja. Alle Daten liegen auf Servern in Deutschland (Hetzner). Kein Transfer in Drittländer. DSGVO-konforme Datenhaltung ist Standard, kein Aufpreis.' },
            { frage: 'Kann ich monatlich kündigen?', antwort: 'Ja. Keine Mindestlaufzeit, keine versteckten Kosten. Jederzeit zum Monatsende kündbar.' },
            { frage: 'Gibt es eine Testphase?', antwort: 'Ja. Der Pro-Plan ist 14 Tage kostenlos und ohne Kreditkarte testbar.' },
            { frage: 'Was passiert wenn das Internet ausfällt?', antwort: 'Bereits eingegangene Bestellungen bleiben gespeichert. Wir empfehlen einen mobilen Hotspot als Backup — dauert 10 Sekunden.' },
          ].map((f) => (
            <FaqItem key={f.frage} {...f} />
          ))}
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="relative overflow-hidden border-t border-border">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 py-24 text-center relative">
          <div className="flex justify-center gap-0.5 mb-5">
            {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />)}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bereit für das digitale<br />
            <span className="text-gradient">Restaurant?</span>
          </h2>
          <p className="text-text-muted mb-8 max-w-md mx-auto">
            14 Tage kostenlos testen — kein Risiko, keine Kreditkarte.
            Wir helfen beim Einrichten.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/kontakt"
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3.5 rounded-xl transition-all glow-blue inline-flex items-center justify-center gap-2"
            >
              Kostenlos starten <ArrowRight size={18} />
            </Link>
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border-light hover:border-primary/40 text-text font-medium px-8 py-3.5 rounded-xl transition-all inline-flex items-center justify-center gap-2"
            >
              <ExternalLink size={16} />
              Demo ansehen
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
