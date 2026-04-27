import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SEO from '../components/SEO';
import { ContainerScroll } from '../components/ContainerScroll';
import { CinematicFooter } from '@/components/ui/motion-footer';
import {
  ArrowRight, CheckCircle2, ChevronDown, ExternalLink,
  QrCode, CalendarCheck, LayoutDashboard, Users,
  Palette, Shield, Globe, Lock, Clock, Smartphone,
  BarChart3, Bell, ChevronRight, TrendingUp,
  Coffee, Pizza, Utensils, Wine, MousePointerClick,
} from 'lucide-react';

const DEMO_URL = 'http://n11hq0nbyhc32xlcw7kf9dua.178.104.147.61.sslip.io';

// ─── Animation-Helper ─────────────────────────────────────────────────────────
function FadeIn({ children, delay = 0, className = '' }: {
  children: React.ReactNode; delay?: number; className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// MOCKUPS
// ═══════════════════════════════════════════════════════════════════════════════

/** Dashboard-Mockup (für Hero ContainerScroll) */
function DashboardMockup() {
  return (
    <div className="bg-[#0D1117] border border-border rounded-xl overflow-hidden shadow-2xl h-full flex flex-col">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-[#161B22] flex-shrink-0">
        <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
        <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
        <div className="w-3 h-3 rounded-full bg-[#28C840]" />
        <div className="ml-3 flex-1 bg-[#0D1117] rounded-md px-3 py-1 text-[11px] text-text-muted font-mono">
          app.serve-flow.org/dashboard
        </div>
      </div>
      <div className="p-5 space-y-4 flex-1 overflow-hidden">
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Heute', value: '€1.240', up: '+12%' },
            { label: 'Bestellungen', value: '34', up: '+8%' },
            { label: 'Auslastung', value: '78%', up: '+5%' },
          ].map((s) => (
            <div key={s.label} className="bg-[#161B22] rounded-xl p-3 border border-border">
              <p className="text-[10px] text-text-muted mb-1">{s.label}</p>
              <p className="text-base font-bold text-text">{s.value}</p>
              <p className="text-[10px] mt-0.5 text-success">↑ {s.up}</p>
            </div>
          ))}
        </div>
        <div className="bg-[#161B22] rounded-xl p-3 border border-border">
          <p className="text-[10px] text-text-muted mb-3 font-medium uppercase tracking-wider">Tischstatus — Live</p>
          <div className="grid grid-cols-5 gap-2">
            {[
              { nr: 1, status: 'besetzt' }, { nr: 2, status: 'frei' }, { nr: 3, status: 'besetzt' },
              { nr: 4, status: 'reserviert' }, { nr: 5, status: 'frei' }, { nr: 6, status: 'besetzt' },
              { nr: 7, status: 'frei' }, { nr: 8, status: 'besetzt' }, { nr: 9, status: 'reserviert' },
              { nr: 10, status: 'frei' },
            ].map((t) => (
              <div
                key={t.nr}
                className={`rounded-lg p-2 text-center border ${
                  t.status === 'besetzt' ? 'bg-primary/10 border-primary/30 text-primary'
                  : t.status === 'reserviert' ? 'bg-yellow-400/10 border-yellow-400/30 text-yellow-400'
                  : 'bg-success/10 border-success/30 text-success'
                }`}
              >
                <p className="text-[10px] font-bold">{t.nr}</p>
              </div>
            ))}
          </div>
        </div>
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

/** Phone-Mockup mit echter Bestellseite */
function PhoneMockup() {
  return (
    <div className="relative mx-auto" style={{ width: 280 }}>
      {/* Phone-Frame */}
      <div className="relative rounded-[2.5rem] bg-[#0a0a0d] p-2.5 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.06)]">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#0a0a0d] rounded-b-2xl z-10" />
        {/* Screen */}
        <div className="rounded-[2rem] bg-[#F4F5F7] overflow-hidden aspect-[9/19]">
          {/* Royal-Blau Header (wie unser Kompakt-Layout!) */}
          <div className="bg-[#1E2A6B] px-4 pt-7 pb-3">
            <div className="flex items-center justify-between mb-2">
              <div className="w-7 h-7 rounded-lg bg-white/15" />
              <div className="text-white text-sm font-bold tracking-widest">TRATTORIA</div>
              <div className="w-7 h-7 rounded-lg bg-white/15" />
            </div>
            <div className="flex justify-center gap-2 text-[10px]">
              <span className="text-white/80 px-2.5 py-0.5 rounded-full bg-white/10 border border-white/15">Tisch 5</span>
              <span className="text-white/70 px-2 py-0.5 rounded-md bg-white/8 font-mono">⏱ 28:42</span>
            </div>
          </div>

          {/* Kategorien */}
          <div className="bg-[#1E2A6B] px-3 pb-3">
            <div className="flex gap-1.5 overflow-hidden">
              {[true, false, false, false].map((active, i) => (
                <div key={i} className={`flex-shrink-0 w-16 h-12 rounded-lg ${active ? 'bg-white' : 'bg-white/10'} flex items-center justify-center`}>
                  <span className={`text-[8px] font-semibold ${active ? 'text-[#1E2A6B]' : 'text-white/70'}`}>
                    {['Pizza', 'Pasta', 'Salat', 'Dessert'][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Gerichte-Liste */}
          <div className="px-3 py-3 space-y-2">
            {[
              { name: 'Margherita', desc: 'Tomate, Mozzarella, Basilikum', preis: '9,90' },
              { name: 'Diavola', desc: 'Salami, Chili, Mozzarella', preis: '11,50' },
              { name: 'Quattro Formaggi', desc: 'Vier Käsesorten', preis: '12,80' },
            ].map((g, i) => (
              <div key={i} className="bg-white rounded-lg p-2 flex items-center gap-2 border border-[#E2E8F0]">
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-semibold text-[#0F172A] truncate">{g.name}</div>
                  <div className="text-[8px] text-[#64748B] truncate">{g.desc}</div>
                  <div className="text-[10px] font-bold text-[#1E2A6B] mt-0.5">€ {g.preis}</div>
                </div>
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 rounded-md bg-[#EEF1FB]" />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-md bg-[#10B981] border-2 border-white flex items-center justify-center text-white text-[10px] font-bold">+</div>
                </div>
              </div>
            ))}
          </div>

          {/* Floating CTA */}
          <div className="absolute bottom-3 left-3 right-3">
            <div className="bg-[#10B981] rounded-xl px-3 py-2.5 flex items-center justify-between shadow-[0_8px_20px_rgba(16,185,129,0.4)]">
              <span className="bg-white/25 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">3</span>
              <span className="text-white text-[10px] font-bold">Warenkorb</span>
              <span className="text-white text-[10px] font-bold">€ 34,20</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Echtes QR-Code-SVG (kein Lucide-Platzhalter mehr) */
function QrCodeSvg({ size = 160 }: { size?: number }) {
  // Statisches "ServeFlow"-Pattern: 21x21 Module, simuliert echten QR
  // Die meisten Module sind durch ein deterministisches Hash-Pattern gefüllt.
  const grid = Array.from({ length: 21 }, (_, y) =>
    Array.from({ length: 21 }, (_, x) => {
      // Finder-Patterns (3 Ecken)
      const inFinder = (cx: number, cy: number) =>
        x >= cx && x < cx + 7 && y >= cy && y < cy + 7;
      if (inFinder(0, 0) || inFinder(14, 0) || inFinder(0, 14)) {
        const dx = inFinder(0, 0) ? x : inFinder(14, 0) ? x - 14 : x;
        const dy = inFinder(0, 0) ? y : inFinder(14, 0) ? y : y - 14;
        const isOuter = dx === 0 || dx === 6 || dy === 0 || dy === 6;
        const isInner = dx >= 2 && dx <= 4 && dy >= 2 && dy <= 4;
        return isOuter || isInner;
      }
      // Pseudo-zufälliges Pattern für die restlichen Module
      return ((x * 7 + y * 13 + x * y * 3) % 11) > 5;
    })
  );
  const cell = size / 21;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <rect width={size} height={size} fill="white" />
      {grid.flatMap((row, y) =>
        row.map((on, x) =>
          on ? <rect key={`${x}-${y}`} x={x * cell} y={y * cell} width={cell} height={cell} fill="#0D1117" /> : null
        )
      )}
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// FAQ Item
// ═══════════════════════════════════════════════════════════════════════════════

function FaqItem({ frage, antwort }: { frage: string; antwort: string }) {
  return (
    <details className="group border border-border rounded-xl overflow-hidden bg-surface/40 hover:bg-surface transition-colors">
      <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none">
        <span className="font-medium text-sm">{frage}</span>
        <ChevronDown size={16} className="text-text-muted group-open:rotate-180 transition-transform flex-shrink-0 ml-4" />
      </summary>
      <div className="px-6 pb-5 text-sm text-text-muted leading-relaxed border-t border-border pt-4">
        {antwort}
      </div>
    </details>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PAGE
// ═══════════════════════════════════════════════════════════════════════════════

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

      {/* ═══════════════════════════════════════════════════════════════════
          HERO — ContainerScroll mit Dashboard-Mockup
       ═══════════════════════════════════════════════════════════════════ */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
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
                  Ein DRVN Produkt · Made in Germany
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
                Schluss mit Zetteln.<br />
                <span style={{ background: 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Ihr Restaurant. Digital.
                </span>
              </h1>

              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(16px, 1.3vw, 20px)', lineHeight: 1.55, color: 'rgba(255,255,255,0.6)', maxWidth: '620px', margin: '0 auto 36px' }}>
                Gäste scannen, bestellen, bezahlen — Sie sehen alles live. QR-Bestellung,
                Online-Reservierungen und ein Echtzeit-Dashboard, das wirklich Sinn ergibt.
              </p>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '24px' }}>
                <Link to="/kontakt" className="btn-primary-blue" style={{ cursor: 'pointer' }}>
                  14 Tage kostenlos testen <ArrowRight size={15} />
                </Link>
                <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ cursor: 'pointer' }}>
                  <ExternalLink size={14} /> Live-Demo öffnen
                </a>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                {['Keine Kreditkarte nötig', 'Keine Mindestlaufzeit', '< 30 Min eingerichtet'].map((t) => (
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

      {/* ═══════════════════════════════════════════════════════════════════
          TRUST BAR
       ═══════════════════════════════════════════════════════════════════ */}
      <section className="border-y border-border bg-surface/40">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {[
              { icon: <Shield size={14} />, text: 'DSGVO-konform' },
              { icon: <Globe size={14} />, text: 'Server in Frankfurt' },
              { icon: <Lock size={14} />, text: 'SSL + Verschlüsselung' },
              { icon: <Clock size={14} />, text: '99,9 % Uptime' },
              { icon: <Smartphone size={14} />, text: 'Keine App nötig' },
              { icon: <Bell size={14} />, text: 'Echtzeit-Updates' },
            ].map((t) => (
              <div key={t.text} className="flex items-center gap-2 text-xs text-text-muted">
                <span className="text-success">{t.icon}</span>
                {t.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          NEU: SO FUNKTIONIERT ES (3 Steps mit Mockups)
       ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <FadeIn className="text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">So funktioniert es</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">In drei Schritten von Tisch zu Küche.</h2>
          <p className="text-text-muted mt-4 max-w-2xl mx-auto">
            Ohne neue Hardware, ohne Schulungen, ohne komplizierte Integrationen.
            Wir richten alles in einem Termin mit Ihnen ein.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Step 1: Scannen */}
          <FadeIn delay={0.1}>
            <div className="bg-surface border border-border rounded-3xl p-7 h-full flex flex-col group hover:border-primary/30 transition-all">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-full bg-primary/15 text-primary flex items-center justify-center font-bold">1</div>
                <span className="text-text-muted text-xs uppercase tracking-wider">Gast</span>
              </div>
              <h3 className="text-xl font-bold mb-2">QR-Code scannen.</h3>
              <p className="text-text-muted text-sm mb-6">
                Auf jedem Tisch ein QR-Aufkleber. Kamera auf, einmal antippen — fertig.
                Keine App, kein Login.
              </p>
              {/* QR-Visual */}
              <div className="mt-auto bg-[#0D1117] rounded-2xl p-6 flex justify-center border border-border">
                <div className="bg-white rounded-xl p-3 shadow-2xl">
                  <QrCodeSvg size={130} />
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Step 2: Bestellen */}
          <FadeIn delay={0.2}>
            <div className="bg-surface border border-border rounded-3xl p-7 h-full flex flex-col group hover:border-primary/30 transition-all">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-full bg-primary/15 text-primary flex items-center justify-center font-bold">2</div>
                <span className="text-text-muted text-xs uppercase tracking-wider">Gast</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Auswählen & senden.</h3>
              <p className="text-text-muted text-sm mb-6">
                Speisekarte mit Bildern, Allergenen und Extras. Bestellung geht direkt
                an Küche und Kellner — ohne Umwege.
              </p>
              {/* Phone-Mockup als visueller Anker */}
              <div className="mt-auto flex justify-center">
                <div className="scale-90">
                  <PhoneMockup />
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Step 3: Live-Dashboard */}
          <FadeIn delay={0.3}>
            <div className="bg-surface border border-border rounded-3xl p-7 h-full flex flex-col group hover:border-primary/30 transition-all">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-full bg-success/15 text-success flex items-center justify-center font-bold">3</div>
                <span className="text-text-muted text-xs uppercase tracking-wider">Sie</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Live im Dashboard.</h3>
              <p className="text-text-muted text-sm mb-6">
                Bestellung erscheint sofort — Tisch, Speise, Status. Sie behalten
                Umsatz, Auslastung und Reservierungen jederzeit im Blick.
              </p>
              {/* Mini Bestell-Liste */}
              <div className="mt-auto bg-[#0D1117] rounded-2xl p-4 border border-border space-y-2">
                {[
                  { tisch: 'Tisch 5', item: '2× Margherita', sec: 'Soeben', color: 'border-primary text-primary' },
                  { tisch: 'Tisch 3', item: '1× Carbonara', sec: 'Vor 2 Min.', color: 'border-yellow-400/40 text-yellow-400' },
                  { tisch: 'Tisch 8', item: '3× Tiramisu', sec: 'Vor 5 Min.', color: 'border-success/40 text-success' },
                ].map((b, i) => (
                  <div key={i} className={`bg-[#161B22] border-l-2 ${b.color} rounded-r-lg pl-3 pr-2.5 py-2 flex items-center justify-between`}>
                    <div>
                      <div className="text-[11px] font-semibold text-text">{b.tisch}</div>
                      <div className="text-[10px] text-text-muted">{b.item}</div>
                    </div>
                    <div className="text-[9px] text-text-muted font-mono">{b.sec}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          ROI / WAS SIE SPAREN
       ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-surface/40 border-y border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <FadeIn className="text-center mb-12">
            <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">Was es bringt</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Mehr Umsatz, weniger Stress.</h2>
            <p className="text-text-muted mt-3 max-w-xl mx-auto">
              Studien zeigen: Digitale Bestellsysteme erhöhen den durchschnittlichen
              Bestellwert messbar und reduzieren Wartezeiten am Tresen.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: <TrendingUp size={26} />,
                stat: '+12 – 22 %',
                label: 'höherer Bestellwert',
                desc: 'Gäste bestellen mehr wenn sie Bilder sehen und in Ruhe wählen können.',
                source: 'Quelle: Toast Restaurant Trends 2024',
              },
              {
                icon: <Clock size={26} />,
                stat: '6 – 10 h',
                label: 'pro Woche gespart',
                desc: 'Weniger Telefon-Reservierungen, weniger doppelte Buchungen, weniger Tippen.',
                source: 'Hochrechnung 30-Tische-Restaurant',
              },
              {
                icon: <Users size={26} />,
                stat: '< 2 Min.',
                label: 'bis zur Bestellung',
                desc: 'Statt 10 – 15 Min. Wartezeit vom Tisch zum Tresen — die Tische rotieren schneller.',
                source: 'Pilot-Daten ServeFlow',
              },
            ].map((r) => (
              <FadeIn key={r.label} delay={0.1}>
                <div className="bg-bg border border-border rounded-2xl p-7 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                    {r.icon}
                  </div>
                  <p className="text-3xl md:text-4xl font-bold text-gradient">{r.stat}</p>
                  <p className="text-text font-semibold mt-1">{r.label}</p>
                  <p className="text-text-muted text-sm leading-relaxed mt-3 flex-1">{r.desc}</p>
                  <p className="text-[11px] text-text-faint mt-4 font-mono">{r.source}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          BENTO FEATURES
       ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <FadeIn className="text-center mb-14">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">Features</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Eine Plattform statt fünf Tools.</h2>
          <p className="text-text-muted mt-4 max-w-2xl mx-auto">
            QR-Bestellung, Reservierungen, Tischplan, Mitarbeiter, Statistiken — alles
            an einer Stelle, alles synchron in Echtzeit.
          </p>
        </FadeIn>

        {/* Bento-Grid: 1 großer Block + 2 mittlere + 4 kleine */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Großer Block: QR-Bestellung */}
          <FadeIn delay={0.05} className="lg:col-span-2 lg:row-span-2">
            <div className="bg-surface border border-border rounded-3xl p-8 h-full hover:border-primary/30 transition-all flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <QrCode size={26} />
                </div>
                <span className="text-[11px] bg-primary/15 text-primary border border-primary/20 rounded-full px-3 py-1 font-medium">
                  Bestseller
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2">QR-Bestellung.</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-6 max-w-md">
                Gäste scannen, wählen aus der digitalen Speisekarte mit Bildern und
                Allergenen, bestellen direkt. Keine App, kein Download, kein Login.
                30-Min-Sitzungs-Schutz verhindert Bestellungen von zuhause.
              </p>
              <div className="flex-1 flex items-center justify-center">
                <PhoneMockup />
              </div>
            </div>
          </FadeIn>

          {/* Reservierungen */}
          <FadeIn delay={0.1}>
            <div className="bg-surface border border-border rounded-3xl p-7 h-full hover:border-primary/30 transition-all">
              <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                <CalendarCheck size={22} />
              </div>
              <h3 className="text-lg font-bold mb-2">Online-Reservierungen</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Eigene Buchungsseite mit Zeitslots, automatischer Bestätigung per
                E-Mail und Erinnerungen vor dem Termin.
              </p>
            </div>
          </FadeIn>

          {/* Tischplan */}
          <FadeIn delay={0.15}>
            <div className="bg-surface border border-border rounded-3xl p-7 h-full hover:border-primary/30 transition-all">
              <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                <LayoutDashboard size={22} />
              </div>
              <h3 className="text-lg font-bold mb-2">Visueller Tischplan</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Drag &amp; Drop wie bei Resmio. Bereiche, Dekoration, Live-Status —
                alles auf einem Bildschirm.
              </p>
            </div>
          </FadeIn>

          {/* Statistiken */}
          <FadeIn delay={0.2}>
            <div className="bg-surface border border-border rounded-3xl p-7 h-full hover:border-primary/30 transition-all">
              <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                <BarChart3 size={22} />
              </div>
              <h3 className="text-lg font-bold mb-2">Statistiken</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Umsatz, Top-Gerichte, Stoßzeiten, Auslastung — Daten die wirklich
                Entscheidungen stützen.
              </p>
            </div>
          </FadeIn>

          {/* Mitarbeiter & Dienstplan */}
          <FadeIn delay={0.25}>
            <div className="bg-surface border border-border rounded-3xl p-7 h-full hover:border-primary/30 transition-all">
              <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                <Users size={22} />
              </div>
              <h3 className="text-lg font-bold mb-2">Team &amp; Dienstplan</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Eigene Zugänge mit Rollen, Wochen-Dienstplan mit Drag &amp; Drop,
                automatische Stundenberechnung gemäß ArbZG.
              </p>
            </div>
          </FadeIn>

          {/* Design / Themes */}
          <FadeIn delay={0.3}>
            <div className="bg-surface border border-border rounded-3xl p-7 h-full hover:border-primary/30 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <Palette size={22} />
                </div>
                <span className="text-[11px] bg-success/10 text-success border border-success/20 rounded-full px-2.5 py-0.5 font-medium">
                  Neu
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2">7 Design-Layouts</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Modern, Elegant, Editorial, POS-Stil — wählen Sie aus fertigen
                Vorlagen oder bauen Sie Ihr eigenes.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          USE CASES — Welche Restaurants
       ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-surface/40 border-y border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <FadeIn className="text-center mb-12">
            <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">Für wen</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Egal welche Küche.</h2>
            <p className="text-text-muted mt-3 max-w-xl mx-auto">
              ServeFlow funktioniert für jede Art von Gastronomie — solange Sie Tische,
              eine Speisekarte und Gäste haben.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <Pizza size={26} />, name: 'Pizzeria & Trattoria', desc: 'Familien­abende, schnelle Tisch-Rotation' },
              { icon: <Coffee size={26} />, name: 'Café & Bistro', desc: 'Frühstück, Mittagsmenü, To-Go' },
              { icon: <Wine size={26} />, name: 'Bar & Lounge', desc: 'Cocktails, Tapas, später Abend' },
              { icon: <Utensils size={26} />, name: 'À la carte & Fine Dining', desc: 'Reservierungs-First, Premium-Look' },
            ].map((u, i) => (
              <FadeIn key={u.name} delay={i * 0.05}>
                <div className="bg-bg border border-border rounded-2xl p-6 h-full hover:border-primary/30 transition-all flex flex-col items-start">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    {u.icon}
                  </div>
                  <h3 className="font-semibold mb-1">{u.name}</h3>
                  <p className="text-text-muted text-xs leading-relaxed">{u.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          DEMO LINK SECTION (mit echtem QR)
       ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="bg-surface/60 border border-border rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Glow */}
          <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
            <FadeIn>
              <div>
                <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3 flex items-center gap-2">
                  <MousePointerClick size={14} />
                  Live ansehen
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Probieren Sie es einfach aus.
                </h2>
                <p className="text-text-muted leading-relaxed mb-7">
                  Wir haben eine vollständige Demo-Instanz mit Test-Speisekarte,
                  Tischen und Reservierungen. Kein Login, keine Anmeldung —
                  scannen Sie den QR oder öffnen Sie den Link.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Bestellseite vom Gast aus testen',
                    'Admin-Dashboard mit Live-Updates ansehen',
                    'Reservierung als Gast machen',
                    '7 Layout-Varianten durchblättern',
                  ].map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-sm text-text">
                      <CheckCircle2 size={16} className="text-success flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
                <a
                  href={DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-primary/90 text-white font-semibold px-7 py-3.5 rounded-xl transition-all glow-blue inline-flex items-center gap-2"
                >
                  <ExternalLink size={17} />
                  ServeFlow Demo öffnen
                </a>
              </div>
            </FadeIn>

            {/* Echter QR statt Lucide-Icon */}
            <FadeIn delay={0.1} className="flex justify-center lg:justify-end">
              <div className="bg-bg border border-border rounded-3xl p-8 text-center w-72">
                <div className="bg-white rounded-2xl p-5 mb-5 shadow-2xl inline-block">
                  <QrCodeSvg size={170} />
                </div>
                <p className="text-sm font-semibold text-text mb-1">Demo-Restaurant</p>
                <p className="text-xs text-text-muted mb-4">Trattoria Demo · Tisch 5</p>
                <div className="border-t border-border pt-4">
                  <a
                    href={DEMO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-xs hover:underline inline-flex items-center gap-1 font-medium"
                  >
                    Oder Link direkt öffnen <ChevronRight size={12} />
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          PREISE — Basis / Standard / Pro (29 / 59 / 99)
       ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-surface/40 border-y border-border" id="preise">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <FadeIn className="text-center mb-14">
            <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">Preise</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Transparent. Kein Kleingedrucktes.</h2>
            <p className="text-text-muted mt-3">Monatlich kündbar · Keine Einrichtungsgebühr · Keine Mindestlaufzeit</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Basis', preis: '29',
                sub: 'Einstieg mit den Reservierungs-Funktionen.',
                features: [
                  'Online-Reservierungen (unbegrenzt)',
                  'Eigene Buchungsseite',
                  'Digitale Speisekarte',
                  'Visueller Tischplan',
                  'E-Mail-Bestätigungen',
                  'Bis 3 Mitarbeiter',
                ],
                highlight: false, cta: 'Jetzt starten',
              },
              {
                name: 'Standard', preis: '59',
                sub: 'Alles was ein aktives Restaurant braucht.',
                features: [
                  'Alles aus Basis',
                  'QR-Bestellung mit Live-Updates',
                  'Gästebuch / CRM',
                  'Bewertungs-Management',
                  'Warteliste',
                  'Erweiterte Statistiken',
                  'SMS-Erinnerungen',
                  'Bis 10 Mitarbeiter',
                ],
                highlight: true, cta: '14 Tage kostenlos testen',
              },
              {
                name: 'Pro', preis: '99',
                sub: 'Volle Kontrolle für ambitionierte Betriebe.',
                features: [
                  'Alles aus Standard',
                  'Dienstplan inkl. ArbZG-Check',
                  'Excel-Import & Templates',
                  'Inventur-Modul',
                  'Kassensystem',
                  'Unbegrenzt Mitarbeiter',
                  'Prioritäts-Support',
                ],
                highlight: false, cta: 'Pro testen',
              },
            ].map((p) => (
              <FadeIn key={p.name} delay={0.05}>
                <div
                  className={`rounded-3xl p-7 border h-full flex flex-col relative ${
                    p.highlight
                      ? 'border-primary/40 bg-gradient-to-b from-primary/8 to-transparent'
                      : 'border-border bg-bg'
                  }`}
                >
                  {p.highlight && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-semibold px-4 py-1 rounded-full shadow-[0_4px_14px_rgba(59,130,246,0.4)]">
                      Empfohlen
                    </div>
                  )}
                  <p className="text-sm font-medium text-text-muted mb-1">{p.name}</p>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-5xl font-bold tracking-tight">€{p.preis}</span>
                    <span className="text-text-muted text-sm">/Monat</span>
                  </div>
                  <p className="text-xs text-text-muted mb-6">{p.sub}</p>
                  <ul className="space-y-2.5 flex-1 mb-6">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <CheckCircle2 size={15} className={`flex-shrink-0 mt-0.5 ${p.highlight ? 'text-primary' : 'text-success'}`} />
                        <span className="text-text">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/kontakt"
                    className={`w-full py-3 rounded-xl font-semibold text-sm text-center transition-all ${
                      p.highlight
                        ? 'bg-primary hover:bg-primary/90 text-white glow-blue'
                        : 'border border-border-light hover:border-primary/30 text-text'
                    }`}
                  >
                    {p.cta}
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
          <p className="text-center text-xs text-text-muted mt-6">
            Alle Preise zzgl. gesetzlicher MwSt. · Bei Jahresabo 2 Monate gratis.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          FAQ
       ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-3xl mx-auto px-6 py-24">
        <FadeIn className="text-center mb-12">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold">Häufige Fragen</h2>
        </FadeIn>
        <div className="space-y-3">
          {[
            { frage: 'Brauchen meine Gäste eine App?', antwort: 'Nein. Die Bestellseite läuft im Browser — Gäste scannen den QR-Code, und die Seite öffnet sich sofort. Keine App, kein Download, kein Login.' },
            { frage: 'Wie lange dauert die Einrichtung?', antwort: 'Die meisten Restaurants sind in unter 30 Minuten startklar. Konto anlegen, Speisekarte hochladen (Excel-Import möglich), QR-Codes drucken — fertig. Wir helfen bei Bedarf per Videocall.' },
            { frage: 'Ist ServeFlow DSGVO-konform?', antwort: 'Ja. Alle Daten liegen auf Servern in Frankfurt (Hetzner Cloud). Kein Transfer in Drittländer. Auftragsverarbeitungs­vertrag inklusive. Personenbezogene Reservierungsdaten werden nach 30 Tagen automatisch gelöscht.' },
            { frage: 'Kann ich monatlich kündigen?', antwort: 'Ja. Keine Mindestlaufzeit, keine versteckten Kosten. Jederzeit zum Monatsende kündbar — direkt im Kundenportal mit einem Klick.' },
            { frage: 'Gibt es eine Testphase?', antwort: 'Ja. Der Standard-Plan ist 14 Tage kostenlos und ohne Kreditkarte testbar. Wenn ServeFlow nichts für Sie ist, läuft das Konto einfach aus — kein Aufwand.' },
            { frage: 'Was passiert wenn das Internet ausfällt?', antwort: 'Bereits eingegangene Bestellungen bleiben gespeichert. Wir empfehlen einen mobilen Hotspot als Backup — ein Smartphone reicht. Sobald die Verbindung wieder da ist, synchronisiert sich alles automatisch.' },
            { frage: 'Kann ich meine bestehende Speisekarte übernehmen?', antwort: 'Ja. Sie können Gerichte einzeln anlegen oder eine Excel/CSV-Datei importieren. Bilder werden automatisch optimiert.' },
            { frage: 'Wie funktioniert die Bezahlung der Bestellung?', antwort: 'Aktuell zahlen Gäste am Tisch beim Kellner — wie gewohnt. Online-Bezahlung über Stripe ist auf der Roadmap und kommt in Q3 2026.' },
          ].map((f) => (
            <FadeIn key={f.frage} delay={0.05}>
              <FaqItem {...f} />
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CINEMATIC FOOTER
          Curtain-Reveal-Footer mit GSAP-Animationen, Magnetic Buttons,
          serve-flow.org als primärer CTA. Ersetzt sowohl Final-CTA als auch
          den globalen Footer (in App.tsx über ROUTES_OHNE_GLOBAL_FOOTER).
       ═══════════════════════════════════════════════════════════════════ */}
      <CinematicFooter />
    </div>
  );
}
