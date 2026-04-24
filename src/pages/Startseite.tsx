import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  type Variants,
} from 'framer-motion';
import SEO from '../components/SEO';

/* ============================================
   ANIMATION VARIANTS
============================================ */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

/* ============================================
   CURSOR GLOW
============================================ */
function CursorGlow() {
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const springX = useSpring(x, { stiffness: 100, damping: 20 });
  const springY = useSpring(y, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX - 250);
      y.set(e.clientY - 250);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [x, y]);

  return <motion.div className="cursor-glow" style={{ x: springX, y: springY }} />;
}

/* ============================================
   SECTION WRAPPER
============================================ */
function Section({ children, style = {}, className = '' }: { children: React.ReactNode; style?: React.CSSProperties; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.section
      ref={ref}
      variants={stagger}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      style={style}
      className={className}
    >
      {children}
    </motion.section>
  );
}

/* ============================================
   REVEAL TEXT (word by word mask reveal)
============================================ */
function RevealLine({ children, delay = 0, as: Component = 'span' }: { children: React.ReactNode; delay?: number; as?: 'span' | 'div' }) {
  return (
    <Component style={{ display: 'block', overflow: 'hidden' }}>
      <motion.span
        style={{ display: 'block' }}
        initial={{ y: '110%' }}
        animate={{ y: 0 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay }}
      >
        {children}
      </motion.span>
    </Component>
  );
}

/* ============================================
   MAGNETIC BUTTON
============================================ */
function MagneticLink({ to, children, primary = false }: { to: string; children: React.ReactNode; primary?: boolean }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set(relX * 0.25);
    y.set(relY * 0.25);
  };
  const handleLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.a
      ref={ref}
      style={{ x: springX, y: springY, display: 'inline-block' }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      href={to}
    >
      <Link to={to} className={primary ? 'btn-primary' : 'btn-ghost'}>
        {children}
      </Link>
    </motion.a>
  );
}

/* ============================================
   MARQUEE
============================================ */
const MARQUEE_WORDS = [
  'Branchensoftware', 'DSGVO-konform', 'Server DE', 'Made in Germany',
  '30 Min Live', 'ServeFlow', 'Custom SaaS', 'Automatisierung',
];

function MarqueeBand() {
  const items = [...MARQUEE_WORDS, ...MARQUEE_WORDS, ...MARQUEE_WORDS];
  return (
    <div style={{ padding: '40px 0', overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', background: '#08080A' }}>
      <div className="animate-marquee" style={{ gap: '64px' }}>
        {items.map((word, i) => (
          <span
            key={i}
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 'clamp(48px, 6vw, 96px)',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              color: i % 3 === 1 ? '#3B82F6' : '#F4F4F6',
              whiteSpace: 'nowrap',
              display: 'flex',
              alignItems: 'center',
              gap: '64px',
            }}
          >
            {word}
            <span style={{ fontSize: '0.4em', color: 'rgba(255,255,255,0.3)' }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ============================================
   STATS
============================================ */
const STATS = [
  { zahl: '30', unit: 'Min.', label: 'bis zum Go-Live' },
  { zahl: '100', unit: '%', label: 'DSGVO-konform' },
  { zahl: '5', unit: '+', label: 'Branchen geplant' },
  { zahl: '24', unit: 'h', label: 'Antwortzeit' },
];

/* ============================================
   FEATURES
============================================ */
const FEATURES = [
  { titel: 'DSGVO by Default', text: 'Datenschutz nach deutschem Standard — Server bei Hetzner in Nürnberg, keine Cookies zu Drittanbietern, verschlüsselte Verbindungen.' },
  { titel: 'In 30 Minuten live', text: 'Kein monatelanges Setup. Onboarding, Einrichtung und erste Bestellung laufen am selben Tag. Ihre Mitarbeiter starten sofort.' },
  { titel: 'Branchenspezifisch', text: 'Keine Universal-Tools. Jede Lösung ist für die konkrete Branche designt — vom Wording bis zum Workflow.' },
  { titel: 'Alles aus einer Hand', text: 'Von der Unternehmenswebseite bis zur komplexen SaaS-Plattform. Wir liefern, hosten und supporten alles selbst.' },
];

/* ============================================
   PRODUKTE
============================================ */
const PRODUKTE = [
  { name: 'ServeFlow', desc: 'Digitales Betriebssystem für Restaurants — QR-Bestellung, Tische, Reservierungen, Personal.', status: 'Live', branche: 'Gastronomie', href: '/produkte/serveflow', highlight: true },
  { name: 'Webseiten & Landingpages', desc: 'Professioneller Online-Auftritt — SEO-optimiert, modern, schnell. Ab 499 € einmalig.', status: 'Live', branche: 'Alle Branchen', href: '/leistungen/webseiten' },
  { name: 'HandBase', desc: 'Handwerker-SaaS — Aufträge, Zeiterfassung, Rechnungen, Kundenverwaltung.', status: 'In Entw.', branche: 'Handwerk', href: '/branchen' },
  { name: 'BeautyBase', desc: 'Terminbuchung, Kundenkartei, Produktverwaltung für Beauty-Betriebe.', status: 'Geplant', branche: 'Beauty & Wellness', href: '/branchen' },
];

export default function Startseite() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 800], [0, -200]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Berlin' }));
    };
    update();
    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ background: '#08080A', position: 'relative' }}>
      <SEO
        title="DRVN — Branchenspezifische SaaS-Lösungen für Deutschland"
        description="DRVN entwickelt digitale Plattformen für Gastronomie, Handwerk und mehr — DSGVO-konform, sofort einsetzbar, Server in Deutschland."
        path="/"
        keywords="SaaS Deutschland, Branchensoftware, Gastronomie Software, Handwerk Software, DSGVO-konform"
        schema={{ '@context': 'https://schema.org', '@type': 'WebSite', name: 'DRVN', url: 'https://drvnautomatisations.com' }}
      />

      <CursorGlow />

      {/* ============================================
          HERO
      ============================================ */}
      <section
        ref={heroRef}
        style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '72px' }}
      >
        {/* Background accent */}
        <div style={{ position: 'absolute', top: '20%', right: '-10%', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 65%)', pointerEvents: 'none', borderRadius: '50%' }} />

        <motion.div style={{ y: heroY, opacity: heroOpacity, position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '60px 40px', width: '100%' }}>

            {/* Top meta row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '80px', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span className="pulse-dot" style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22C55E', display: 'inline-block' }} />
                <span style={{ color: '#22C55E' }}>ServeFlow live</span>
              </div>
              <div style={{ display: 'flex', gap: '32px' }}>
                <span>Stuttgart, DE</span>
                <span>{time} CET</span>
                <span>v2.4</span>
              </div>
            </motion.div>

            {/* MASSIVE Hero Type */}
            <div style={{ marginBottom: '40px' }}>
              <h1 style={{ margin: 0, fontFamily: 'var(--font-display)' }}>
                <RevealLine delay={0.3}>
                  <span className="hero-script" style={{ display: 'inline-block' }}>Wir bauen</span>
                </RevealLine>
                <RevealLine delay={0.45}>
                  <span className="hero-massive" style={{ display: 'inline-block' }}>
                    Software
                  </span>
                </RevealLine>
                <RevealLine delay={0.6}>
                  <span className="hero-massive" style={{ display: 'inline-block' }}>
                    <span className="text-gradient-blue">die passt</span>
                    <span style={{ color: '#3B82F6' }}>.</span>
                  </span>
                </RevealLine>
              </h1>
            </div>

            {/* Subtext + CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'end', marginTop: '32px' }}
            >
              <div>
                <p className="mono-label" style={{ marginBottom: '16px' }}>01 — Mission</p>
                <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(18px, 1.8vw, 24px)', lineHeight: 1.35, color: 'rgba(255,255,255,0.75)', margin: 0, maxWidth: '480px' }}>
                  Branchenspezifische SaaS-Lösungen für deutsche Unternehmen —
                  DSGVO-konform, sofort einsetzbar, Server in Deutschland.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px' }}>
                <p className="mono-label">02 — Start</p>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  <MagneticLink to="/produkte/serveflow" primary>
                    Produkte entdecken <ArrowRight size={15} />
                  </MagneticLink>
                  <MagneticLink to="/kontakt">
                    Kontakt →
                  </MagneticLink>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase' }}
        >
          <span>Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            style={{ width: '1px', height: '32px', background: 'linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)' }}
          />
        </motion.div>
      </section>

      {/* ============================================
          MARQUEE BAND
      ============================================ */}
      <MarqueeBand />

      {/* ============================================
          MANIFESTO
      ============================================ */}
      <Section style={{ padding: '160px 40px', background: '#08080A', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div variants={fadeUp} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '40px', alignItems: 'start' }}>
            <p className="index-num" style={{ marginTop: '24px' }}>03 / MANIFEST</p>
            <div>
              <h2 className="h-display" style={{ fontSize: 'clamp(42px, 6vw, 96px)', margin: 0 }}>
                Jede Branche verdient
                <br />
                <span className="text-gradient-blue">Software die passt.</span>
              </h2>
              <motion.p
                variants={fadeUp}
                style={{ marginTop: '48px', fontSize: '1.15rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, maxWidth: '640px' }}
              >
                Die meisten SaaS-Produkte versuchen alles für alle zu sein. Das Ergebnis: aufgeblähte Tools,
                die niemanden wirklich glücklich machen. Wir gehen den anderen Weg. Pro Branche eine Lösung.
                Pro Problem ein klarer Workflow. Vom Restaurant bis zum Handwerksbetrieb — gebaut für den echten Alltag.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ============================================
          STATS — Huge typography
      ============================================ */}
      <Section style={{ padding: '120px 40px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <motion.p variants={fadeUp} className="index-num" style={{ marginBottom: '40px' }}>04 / ZAHLEN</motion.p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                style={{ padding: '32px 0', borderTop: '1px solid rgba(255,255,255,0.1)' }}
              >
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '16px' }}>
                  <span className="stat-big">{s.zahl}</span>
                  <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 300, fontSize: 'clamp(24px, 3vw, 48px)', color: '#3B82F6' }}>
                    {s.unit}
                  </span>
                </div>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', margin: 0 }}>
                  {String(i + 1).padStart(2, '0')} — {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ============================================
          FEATURES — Editorial list
      ============================================ */}
      <Section style={{ padding: '160px 40px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div variants={fadeUp} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', marginBottom: '80px', alignItems: 'end' }}>
            <div>
              <p className="index-num" style={{ marginBottom: '24px' }}>05 / WARUM DRVN</p>
              <h2 className="h-display" style={{ fontSize: 'clamp(36px, 5vw, 72px)', margin: 0 }}>
                Vier Gründe
                <br />
                <span style={{ color: 'rgba(255,255,255,0.4)' }}>für DRVN.</span>
              </h2>
            </div>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, margin: 0 }}>
              Wir bauen keine Tools von der Stange. Jedes Produkt folgt einem klaren Versprechen:
              Ihre Prozesse abbilden, nicht das andersrum.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.06)' }}>
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.titel}
                variants={fadeUp}
                whileHover={{ background: 'rgba(255,255,255,0.025)' }}
                style={{ background: '#08080A', padding: '48px', transition: 'background 0.25s' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                  <span className="index-num">{String(i + 1).padStart(2, '0')}</span>
                  <ArrowUpRight size={18} style={{ color: 'rgba(255,255,255,0.3)' }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 700, fontSize: 'clamp(28px, 3vw, 42px)', letterSpacing: '-0.03em', color: '#F4F4F6', margin: '0 0 16px', lineHeight: 1.05 }}>
                  {f.titel}
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, margin: 0, maxWidth: '440px' }}>
                  {f.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ============================================
          PRODUKTE — Featured showcase
      ============================================ */}
      <Section style={{ padding: '160px 40px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <motion.div variants={fadeUp} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '80px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <p className="index-num" style={{ marginBottom: '24px' }}>06 / PRODUKTE</p>
              <h2 className="h-display" style={{ fontSize: 'clamp(36px, 5vw, 72px)', margin: 0 }}>
                Eine Lösung
                <br />
                <span className="text-gradient-blue">pro Branche.</span>
              </h2>
            </div>
            <MagneticLink to="/branchen">
              Alle Branchen <ArrowRight size={14} />
            </MagneticLink>
          </motion.div>

          {/* Featured Product Row */}
          <motion.div variants={fadeUp} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '24px', minHeight: '420px' }}>
            <div style={{ padding: '64px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: 'linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(6,182,212,0.04) 100%)' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.15em', padding: '3px 8px', borderRadius: '2px', background: 'rgba(34,197,94,0.12)', color: '#22C55E', border: '1px solid rgba(34,197,94,0.3)' }}>LIVE</span>
                  <span className="mono-label-accent">Gastronomie</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 900, fontSize: 'clamp(48px, 5.5vw, 88px)', letterSpacing: '-0.05em', lineHeight: 0.95, color: '#F4F4F6', margin: '0 0 32px' }}>
                  ServeFlow
                </h3>
                <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, margin: 0, maxWidth: '420px' }}>
                  Das digitale Betriebssystem für Restaurants — QR-Bestellung, Tischverwaltung, Reservierungen, Personalplanung und Kassen-Integration.
                </p>
              </div>
              <MagneticLink to="/produkte/serveflow" primary>
                ServeFlow entdecken <ArrowRight size={15} />
              </MagneticLink>
            </div>
            <div style={{ padding: '64px', borderLeft: '1px solid rgba(255,255,255,0.08)', background: '#0A0A0D', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '24px' }}>
              {[
                { label: 'QR-Bestellung am Tisch', val: '✓' },
                { label: 'Tischverwaltung Echtzeit', val: '✓' },
                { label: 'Online-Reservierungen', val: '✓' },
                { label: 'Personalplanung', val: '✓' },
                { label: 'DSGVO-konform', val: '✓' },
                { label: 'Kassen-Integration', val: '✓' },
              ].map((item) => (
                <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'rgba(255,255,255,0.8)' }}>{item.label}</span>
                  <span style={{ color: '#3B82F6', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>{item.val}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Product Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.06)' }}>
            {PRODUKTE.slice(1).map((p, i) => (
              <motion.div
                key={p.name}
                variants={fadeUp}
                whileHover={{ background: 'rgba(255,255,255,0.025)' }}
                style={{ background: '#08080A', padding: '40px', transition: 'background 0.25s', cursor: 'pointer' }}
              >
                <Link to={p.href} style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
                    <span className="index-num">{String(i + 2).padStart(2, '0')}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', letterSpacing: '0.15em', padding: '2px 7px', borderRadius: '2px', background: p.status === 'Live' ? 'rgba(34,197,94,0.12)' : 'rgba(255,255,255,0.04)', color: p.status === 'Live' ? '#22C55E' : 'rgba(255,255,255,0.4)', border: p.status === 'Live' ? '1px solid rgba(34,197,94,0.3)' : '1px solid rgba(255,255,255,0.08)', textTransform: 'uppercase' }}>
                      {p.status}
                    </span>
                  </div>
                  <p className="mono-label" style={{ marginBottom: '8px' }}>{p.branche}</p>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 700, fontSize: 'clamp(22px, 2.5vw, 32px)', letterSpacing: '-0.03em', color: '#F4F4F6', margin: '0 0 16px', lineHeight: 1.1 }}>
                    {p.name}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, margin: '0 0 24px' }}>
                    {p.desc}
                  </p>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '0.12em', color: '#3B82F6', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    MEHR ERFAHREN <ArrowUpRight size={11} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ============================================
          BIG CTA
      ============================================ */}
      <Section style={{ padding: '160px 40px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-20%', left: '50%', transform: 'translateX(-50%)', width: '1200px', height: '1200px', background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 55%)', pointerEvents: 'none', borderRadius: '50%' }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <motion.p variants={fadeUp} className="index-num" style={{ marginBottom: '32px', textAlign: 'center' }}>
            07 / START
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="h-display"
            style={{ fontSize: 'clamp(56px, 10vw, 180px)', textAlign: 'center', margin: '0 0 48px', letterSpacing: '-0.06em' }}
          >
            Bereit?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: '0 auto 56px', maxWidth: '580px', textAlign: 'center', fontFamily: 'var(--font-display)', fontStyle: 'italic' }}
          >
            Erzählen Sie uns von Ihrem Unternehmen — wir melden uns innerhalb von 24 Stunden
            mit einem konkreten Vorschlag.
          </motion.p>

          <motion.div variants={fadeUp} style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <MagneticLink to="/kontakt" primary>
              Projekt anfragen <ArrowRight size={16} />
            </MagneticLink>
            <MagneticLink to="/produkte/serveflow">
              ServeFlow ansehen
            </MagneticLink>
          </motion.div>

          {/* Trust marks */}
          <motion.div
            variants={fadeUp}
            style={{ marginTop: '120px', display: 'flex', justifyContent: 'center', gap: '48px', flexWrap: 'wrap', paddingTop: '48px', borderTop: '1px solid rgba(255,255,255,0.06)' }}
          >
            {['DSGVO-konform', 'Server in Deutschland', 'Made in Stuttgart', 'Antwort in 24h'].map((t, i) => (
              <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#3B82F6' }}>{String(i + 1).padStart(2, '0')}</span>
                {t}
              </span>
            ))}
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
