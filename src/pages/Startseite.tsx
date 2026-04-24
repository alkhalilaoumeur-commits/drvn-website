import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Shield, Zap, Code2, Headphones, Check } from 'lucide-react';
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  type Variants,
} from 'framer-motion';
import SEO from '../components/SEO';

/* ============================================
   ANIMATION VARIANTS
============================================ */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

/* ============================================
   SECTION WRAPPER
============================================ */
function Section({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.section
      ref={ref}
      variants={stagger}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      style={style}
    >
      {children}
    </motion.section>
  );
}

/* ============================================
   PRODUCT MOCKUP — ServeFlow Dashboard
============================================ */
function ServeFlowMockup() {
  return (
    <div className="dash-window" style={{ width: '100%', maxWidth: '1100px', margin: '0 auto' }}>
      {/* Window header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
        <div style={{ display: 'flex', gap: '6px' }}>
          <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
          <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
          <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', padding: '4px 14px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '6px', letterSpacing: '0.01em' }}>
            serveflow.drvn.de/dashboard
          </div>
        </div>
      </div>

      {/* Dashboard body */}
      <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', minHeight: '520px' }}>

        {/* Sidebar */}
        <div style={{ borderRight: '1px solid rgba(255,255,255,0.06)', padding: '20px 12px', background: 'rgba(255,255,255,0.015)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px', padding: '0 8px' }}>
            <div style={{ width: '24px', height: '24px', borderRadius: '6px', background: 'linear-gradient(135deg, #3B82F6, #06B6D4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Zap size={12} style={{ color: '#fff' }} />
            </div>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', fontWeight: 600, color: '#FAFAFA' }}>ServeFlow</span>
          </div>

          {[
            { label: 'Dashboard', active: true },
            { label: 'Bestellungen', badge: '12' },
            { label: 'Tische' },
            { label: 'Reservierungen', badge: '4' },
            { label: 'Personal' },
            { label: 'Berichte' },
            { label: 'Einstellungen' },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '7px 10px',
                borderRadius: '5px',
                marginBottom: '2px',
                background: item.active ? 'rgba(59,130,246,0.1)' : 'transparent',
                border: item.active ? '1px solid rgba(59,130,246,0.2)' : '1px solid transparent',
              }}
            >
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', color: item.active ? '#3B82F6' : 'rgba(255,255,255,0.6)', fontWeight: item.active ? 500 : 400 }}>
                {item.label}
              </span>
              {item.badge && (
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.7)', padding: '1px 5px', borderRadius: '3px' }}>
                  {item.badge}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Main content */}
        <div style={{ padding: '24px' }}>
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
            <div>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.05em', textTransform: 'uppercase', margin: '0 0 4px' }}>Heute · 24. April</p>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', fontWeight: 600, color: '#FAFAFA', margin: 0, letterSpacing: '-0.02em' }}>Dashboard</h3>
            </div>
            <div style={{ display: 'flex', gap: '6px' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', padding: '5px 10px', background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.25)', color: '#22C55E', borderRadius: '5px', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                <span className="pulse-dot" style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#22C55E' }} />
                Live
              </span>
            </div>
          </div>

          {/* Metric cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '20px' }}>
            {[
              { label: 'Umsatz heute', value: '€ 2.847', delta: '+12%', positive: true },
              { label: 'Offene Tische', value: '8 / 24', delta: '33%', positive: null },
              { label: 'Ø Bonwert', value: '€ 34,20', delta: '+4,80', positive: true },
            ].map((m) => (
              <div key={m.label} style={{ padding: '14px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px' }}>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.03em', margin: '0 0 8px', textTransform: 'uppercase' }}>
                  {m.label}
                </p>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '1.15rem', fontWeight: 600, color: '#FAFAFA', letterSpacing: '-0.02em' }}>{m.value}</span>
                  {m.delta && (
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: m.positive === true ? '#22C55E' : m.positive === false ? '#EF4444' : 'rgba(255,255,255,0.5)' }}>
                      {m.delta}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Orders table */}
          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px', overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '50px 1fr 90px 90px 80px', padding: '10px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.015)' }}>
              {['Tisch', 'Bestellung', 'Zeit', 'Betrag', 'Status'].map((h) => (
                <span key={h} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 500 }}>
                  {h}
                </span>
              ))}
            </div>
            {[
              { tisch: '4', items: '2× Pizza, 1× Pasta, Getränke', zeit: '19:24', betrag: '€ 47,50', status: 'Serviert', color: '#22C55E' },
              { tisch: '12', items: '1× Burger, 2× Cola, Dessert', zeit: '19:18', betrag: '€ 32,80', status: 'Küche', color: '#F59E0B' },
              { tisch: '7', items: '3× Menü, 1× Wein', zeit: '19:11', betrag: '€ 89,40', status: 'Bezahlt', color: 'rgba(255,255,255,0.6)' },
              { tisch: '2', items: '1× Salat, 1× Wasser', zeit: '19:02', betrag: '€ 14,20', status: 'Bezahlt', color: 'rgba(255,255,255,0.6)' },
            ].map((row, i) => (
              <div
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '50px 1fr 90px 90px 80px',
                  padding: '11px 16px',
                  borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                  alignItems: 'center',
                }}
              >
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#3B82F6', fontWeight: 500 }}>#{row.tisch}</span>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', color: 'rgba(255,255,255,0.78)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{row.items}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)' }}>{row.zeit}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>{row.betrag}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: row.color, letterSpacing: '0.02em' }}>{row.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================
   DATA
============================================ */
const FEATURES = [
  { icon: <Shield size={18} strokeWidth={1.6} />, titel: 'DSGVO by Default', text: 'Datenschutz nach deutschem Standard. Server bei Hetzner in Nürnberg, verschlüsselte Verbindungen, keine Drittanbieter-Cookies.' },
  { icon: <Zap size={18} strokeWidth={1.6} />, titel: 'In 30 Minuten live', text: 'Kein wochenlanges Setup. Onboarding, Einrichtung und erste Bestellung am selben Tag — Ihre Mitarbeiter starten sofort.' },
  { icon: <Code2 size={18} strokeWidth={1.6} />, titel: 'Branchenspezifisch', text: 'Keine Universal-Tools. Jede Lösung ist für die konkrete Branche designt — vom Wording bis zum Workflow.' },
  { icon: <Headphones size={18} strokeWidth={1.6} />, titel: 'Alles aus einer Hand', text: 'Von der Unternehmenswebseite bis zur komplexen SaaS-Plattform. Wir liefern, hosten und supporten alles selbst.' },
];

const PRODUKTE = [
  { name: 'ServeFlow', desc: 'Digitales Betriebssystem für Restaurants — QR-Bestellung, Tischverwaltung, Reservierungen.', status: 'Live', branche: 'Gastronomie', href: '/produkte/serveflow' },
  { name: 'Webseiten', desc: 'Professioneller Online-Auftritt — SEO-optimiert, modern. Ab 499 € einmalig.', status: 'Live', branche: 'Alle Branchen', href: '/leistungen/webseiten' },
  { name: 'HandBase', desc: 'Handwerker-SaaS — Aufträge, Zeiterfassung, Rechnungen, Kundenverwaltung.', status: 'In Entw.', branche: 'Handwerk', href: '/branchen' },
  { name: 'BeautyBase', desc: 'Terminbuchung, Kundenkartei, Produktverwaltung für Beauty-Betriebe.', status: 'Geplant', branche: 'Beauty', href: '/branchen' },
  { name: 'CleanBase', desc: 'Einsatzplanung, Abrechnung, Schichten für Reinigungsfirmen.', status: 'Geplant', branche: 'Reinigung', href: '/branchen' },
  { name: 'CaterBase', desc: 'Catering-Planung, Events, Angebote — für Caterer und Event-Gastronomie.', status: 'Geplant', branche: 'Catering', href: '/branchen' },
];

const MARQUEE = ['DSGVO-konform', 'Server in Nürnberg', '30 Min Go-Live', 'Made in Germany', 'Branchensoftware', 'Custom SaaS', '24h Antwortzeit'];

export default function Startseite() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0.5]);
  const heroY = useTransform(scrollY, [0, 400], [0, -40]);

  return (
    <div style={{ background: '#0A0A0B' }}>
      <SEO
        title="DRVN — Branchenspezifische SaaS-Lösungen für Deutschland"
        description="DRVN entwickelt digitale Plattformen für Gastronomie, Handwerk und mehr — DSGVO-konform, sofort einsetzbar, Server in Deutschland."
        path="/"
        keywords="SaaS Deutschland, Branchensoftware, Gastronomie Software, Handwerk Software, DSGVO-konform"
        schema={{ '@context': 'https://schema.org', '@type': 'WebSite', name: 'DRVN', url: 'https://drvnautomatisations.com' }}
      />

      {/* ============================================
          HERO
      ============================================ */}
      <section
        ref={heroRef}
        style={{ position: 'relative', paddingTop: '140px', paddingBottom: '100px', overflow: 'hidden' }}
      >
        <div className="hero-ambient" />

        <motion.div
          style={{ opacity: heroOpacity, y: heroY, position: 'relative', zIndex: 2, maxWidth: '1240px', margin: '0 auto', padding: '0 32px' }}
        >

          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', justifyContent: 'center', marginBottom: '36px' }}
          >
            <Link
              to="/produkte/serveflow"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '5px 14px 5px 5px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '100px',
                textDecoration: 'none',
                transition: 'background 0.2s, border-color 0.2s',
              }}
            >
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', padding: '3px 8px', background: 'rgba(34,197,94,0.12)', color: '#22C55E', border: '1px solid rgba(34,197,94,0.3)', borderRadius: '100px', letterSpacing: '0.04em', fontWeight: 500 }}>
                NEU
              </span>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', color: 'rgba(255,255,255,0.75)', fontWeight: 500 }}>
                ServeFlow für Gastronomie ist jetzt live
              </span>
              <ArrowRight size={12} style={{ color: 'rgba(255,255,255,0.5)' }} />
            </Link>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="display-1"
            style={{ textAlign: 'center', margin: '0 auto 24px', maxWidth: '960px' }}
          >
            Software, die für <span className="text-gradient">Ihre Branche</span>
            <br />
            gebaut ist<span style={{ color: '#3B82F6' }}>.</span>
          </motion.h1>

          {/* Subline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              textAlign: 'center',
              margin: '0 auto 44px',
              maxWidth: '600px',
              fontSize: '1.1rem',
              lineHeight: 1.55,
              color: 'rgba(255,255,255,0.6)',
              fontWeight: 400,
            }}
          >
            DRVN entwickelt branchenspezifische SaaS-Lösungen für deutsche Unternehmen —
            DSGVO-konform, sofort einsetzbar, Server in Deutschland.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}
          >
            <Link to="/produkte/serveflow" className="btn-primary">
              Produkte entdecken <ArrowRight size={15} />
            </Link>
            <Link to="/kontakt" className="btn-ghost">
              Demo buchen
            </Link>
          </motion.div>

          {/* Trust row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ display: 'flex', justifyContent: 'center', gap: '28px', flexWrap: 'wrap', marginTop: '56px' }}
          >
            {['DSGVO-konform', 'Server in Deutschland', '30 Min Go-Live', '24h Antwortzeit'].map((t) => (
              <span key={t} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.01em' }}>
                <Check size={11} strokeWidth={2.5} style={{ color: '#3B82F6' }} />
                {t}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Product Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginTop: '96px', padding: '0 32px', position: 'relative', zIndex: 2 }}
        >
          <ServeFlowMockup />
        </motion.div>
      </section>

      {/* ============================================
          MARQUEE STRIP
      ============================================ */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '20px 0', overflow: 'hidden', background: 'rgba(255,255,255,0.01)' }}>
        <div className="animate-marquee" style={{ display: 'flex', gap: '56px', whiteSpace: 'nowrap' }}>
          {[...MARQUEE, ...MARQUEE, ...MARQUEE, ...MARQUEE].map((item, i) => (
            <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'rgba(255,255,255,0.42)', letterSpacing: '0.02em' }}>
              {item}
              <span style={{ color: 'rgba(255,255,255,0.18)' }}>·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ============================================
          FEATURES
      ============================================ */}
      <Section style={{ padding: '120px 32px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <motion.div variants={fadeUp} style={{ maxWidth: '680px', marginBottom: '72px' }}>
            <p className="eyebrow" style={{ marginBottom: '16px' }}>Warum DRVN</p>
            <h2 className="display-2" style={{ margin: '0 0 20px' }}>
              Kein Feature-Chaos.<br />
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>Nur was wirklich funktioniert.</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.58)', lineHeight: 1.65, margin: 0 }}>
              Wir bauen keine Tools von der Stange. Jedes Produkt folgt einem klaren Versprechen: Ihre Prozesse abbilden, nicht umgekehrt.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
            {FEATURES.map((f) => (
              <motion.div
                key={f.titel}
                variants={fadeUp}
                className="card"
                style={{ padding: '32px' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <div style={{ width: '36px', height: '36px', background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.22)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3B82F6' }}>
                    {f.icon}
                  </div>
                  <h3 className="display-3" style={{ margin: 0, fontSize: 'clamp(20px, 2vw, 26px)' }}>
                    {f.titel}
                  </h3>
                </div>
                <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.58)', lineHeight: 1.6, margin: 0 }}>
                  {f.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ============================================
          PRODUKTE
      ============================================ */}
      <Section style={{ padding: '120px 32px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <motion.div variants={fadeUp} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '56px', flexWrap: 'wrap', gap: '24px' }}>
            <div style={{ maxWidth: '540px' }}>
              <p className="eyebrow" style={{ marginBottom: '16px' }}>Produkte</p>
              <h2 className="display-2" style={{ margin: 0 }}>
                Eine Lösung<br />
                <span style={{ color: 'rgba(255,255,255,0.4)' }}>pro Branche.</span>
              </h2>
            </div>
            <Link to="/branchen" className="btn-ghost">
              Alle Branchen <ArrowRight size={14} />
            </Link>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
            {PRODUKTE.map((p) => (
              <motion.div key={p.name} variants={fadeUp}>
                <Link
                  to={p.href}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '28px',
                    background: '#111113',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    height: '100%',
                    transition: 'background 0.2s, border-color 0.2s',
                    opacity: p.status === 'Live' ? 1 : 0.65,
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#16161A'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = '#111113'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                    <span className="eyebrow-muted">{p.branche}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', letterSpacing: '0.05em', padding: '2px 7px', borderRadius: '3px', background: p.status === 'Live' ? 'rgba(34,197,94,0.1)' : 'rgba(255,255,255,0.04)', color: p.status === 'Live' ? '#22C55E' : 'rgba(255,255,255,0.4)', border: p.status === 'Live' ? '1px solid rgba(34,197,94,0.25)' : '1px solid rgba(255,255,255,0.08)', fontWeight: 500 }}>
                      {p.status.toUpperCase()}
                    </span>
                  </div>
                  <h3 className="display-3" style={{ margin: '0 0 10px', fontSize: '1.35rem', fontWeight: 600 }}>
                    {p.name}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.55, margin: 0, flex: 1 }}>
                    {p.desc}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '24px', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#3B82F6', letterSpacing: '0.02em' }}>
                    Mehr erfahren <ArrowUpRight size={12} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ============================================
          STATS BAND
      ============================================ */}
      <Section style={{ padding: '100px 32px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px' }}>
          {[
            { num: '30', unit: 'Min', label: 'Durchschnittliche Go-Live-Zeit' },
            { num: '100', unit: '%', label: 'DSGVO-konform von Tag 1' },
            { num: '6', unit: '+', label: 'Branchen in Planung' },
            { num: '24', unit: 'h', label: 'Antwort-Garantie' },
          ].map((s) => (
            <motion.div key={s.label} variants={fadeUp}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '12px' }}>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(48px, 5.5vw, 72px)', fontWeight: 600, color: '#FAFAFA', letterSpacing: '-0.045em', lineHeight: 0.95 }}>
                  {s.num}
                </span>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(20px, 2.2vw, 28px)', fontWeight: 500, color: '#3B82F6', letterSpacing: '-0.02em' }}>
                  {s.unit}
                </span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.5, margin: 0, maxWidth: '220px' }}>
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ============================================
          CTA
      ============================================ */}
      <Section style={{ padding: '140px 32px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-30%', left: '50%', transform: 'translateX(-50%)', width: '900px', height: '700px', background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.1) 0%, transparent 55%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <motion.p variants={fadeUp} className="eyebrow" style={{ marginBottom: '20px' }}>
            Starten Sie heute
          </motion.p>
          <motion.h2 variants={fadeUp} className="display-1" style={{ margin: '0 0 24px' }}>
            Bereit für Software,<br />
            <span className="text-gradient">die Ihre Branche versteht?</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.58)', lineHeight: 1.65, margin: '0 auto 44px', maxWidth: '520px' }}
          >
            Erzählen Sie uns von Ihrem Unternehmen — wir melden uns innerhalb
            von 24 Stunden mit einem konkreten Vorschlag.
          </motion.p>
          <motion.div variants={fadeUp} style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <Link to="/kontakt" className="btn-primary">
              Projekt anfragen <ArrowRight size={15} />
            </Link>
            <Link to="/produkte/serveflow" className="btn-ghost">
              ServeFlow ansehen
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} style={{ marginTop: '64px', paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap' }}>
            {[
              'Kostenlose Erstberatung',
              'Angebot in 24 Stunden',
              'DSGVO-konform',
              'Kein Setup-Aufwand',
            ].map((t) => (
              <span key={t} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)' }}>
                <Check size={13} strokeWidth={2.5} style={{ color: '#3B82F6', flexShrink: 0 }} />
                {t}
              </span>
            ))}
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
