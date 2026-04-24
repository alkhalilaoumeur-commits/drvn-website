import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Zap, Shield, Monitor, CheckCircle2, Sparkles } from 'lucide-react';
import {
  motion,
  useInView,
  type Variants,
} from 'framer-motion';
import { BRANCHEN } from '../lib/constants';
import SEO from '../components/SEO';

/* ===== Animation Variants ===== */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const floatingVariants: Variants = {
  initial: { y: 0, rotate: 0, scale: 1 },
  animate: {
    y: [-20, 20, -20],
    rotate: [0, 360],
    scale: [1, 1.2, 1],
    transition: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
  } as never,
};

const pulseVariants: Variants = {
  initial: { scale: 1, opacity: 0.5 },
  animate: {
    scale: [1, 1.5, 1],
    opacity: [0.5, 0.8, 0.5],
    transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
  } as never,
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ===== Section wrapper with useInView ===== */
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

/* ===== Ticker ===== */
const TICKER = [
  'DSGVO-konform', 'Server in Nürnberg', 'In 30 Min. live',
  'ServeFlow verfügbar', 'Keine Setup-Kosten', 'Webseiten ab 499 €',
  'Branchensoftware für KMU', 'Made in Germany',
];

function Ticker() {
  const items = [...TICKER, ...TICKER, ...TICKER];
  return (
    <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '13px 0', overflow: 'hidden', background: 'rgba(255,255,255,0.02)' }} className="mask-edges">
      <div className="animate-marquee" style={{ gap: '56px' }}>
        {items.map((item, i) => (
          <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.35)', whiteSpace: 'nowrap', textTransform: 'uppercase' }}>
            <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#3B82F6', opacity: 0.6, flexShrink: 0 }} />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ===== Feature Card ===== */
function FeatureCard({ icon, titel, text }: { icon: React.ReactNode; titel: string; text: string }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4, borderColor: 'rgba(59,130,246,0.3)' }}
      style={{ padding: '32px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', transition: 'border-color 0.2s' }}
    >
      <div style={{ width: '44px', height: '44px', background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
        {icon}
      </div>
      <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 700, color: '#F4F4F6', margin: '0 0 8px' }}>{titel}</h3>
      <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.65, margin: 0 }}>{text}</p>
    </motion.div>
  );
}

/* ===== Produkt Card ===== */
function ProduktCard({ to, icon, name, tag, desc, highlight = false }: { to: string; icon: React.ReactNode; name: string; tag: string; desc: string; highlight?: boolean }) {
  return (
    <motion.div variants={fadeUp} whileHover={{ y: -4 }}>
      <Link
        to={to}
        style={{
          display: 'flex', flexDirection: 'column', padding: '28px',
          background: highlight ? 'rgba(59,130,246,0.12)' : 'rgba(255,255,255,0.03)',
          border: `1px solid ${highlight ? 'rgba(59,130,246,0.35)' : 'rgba(255,255,255,0.06)'}`,
          borderRadius: '12px', textDecoration: 'none', height: '100%',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
          <div style={{ width: '40px', height: '40px', background: highlight ? 'rgba(59,130,246,0.2)' : 'rgba(255,255,255,0.06)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {icon}
          </div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.1em', padding: '3px 8px', borderRadius: '4px', background: tag === 'Live' ? 'rgba(34,197,94,0.1)' : 'rgba(255,255,255,0.04)', color: tag === 'Live' ? '#22C55E' : 'rgba(255,255,255,0.4)', border: tag === 'Live' ? '1px solid rgba(34,197,94,0.25)' : '1px solid rgba(255,255,255,0.06)' }}>
            {tag === 'Live' ? 'LIVE' : tag.toUpperCase()}
          </span>
        </div>
        <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', fontWeight: 700, color: '#F4F4F6', margin: '0 0 8px' }}>{name}</h3>
        <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.65, margin: '0 0 20px', flex: 1 }}>{desc}</p>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.08em', color: '#3B82F6', display: 'flex', alignItems: 'center', gap: '4px' }}>
          MEHR ERFAHREN <ArrowUpRight size={11} />
        </span>
      </Link>
    </motion.div>
  );
}

export default function Startseite() {
  return (
    <div style={{ background: '#060609' }}>
      <SEO
        title="DRVN — Branchenspezifische SaaS-Lösungen für Deutschland"
        description="DRVN entwickelt digitale Plattformen für Gastronomie, Handwerk und mehr — DSGVO-konform, sofort einsetzbar, Server in Deutschland."
        path="/"
        keywords="SaaS Deutschland, Branchensoftware, Gastronomie Software, Handwerk Software, DSGVO-konform, digitale Transformation KMU"
        schema={{ '@context': 'https://schema.org', '@type': 'WebSite', name: 'DRVN', url: 'https://drvnautomatisations.com' }}
      />

      {/* ===== HERO (von 21st.dev) ===== */}
      <div className="relative min-h-screen w-full overflow-hidden" style={{ backgroundColor: '#060609', paddingTop: '64px' }}>

        {/* Animated Background Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
            style={{ background: 'radial-gradient(circle, #3B82F6 0%, transparent 70%)' }}
            animate={{ scale: [1, 1.5, 1], x: [-50, 50, -50], y: [-30, 30, -30], opacity: [0.2, 0.4, 0.2], rotate: [0, 180, 360] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
            style={{ background: 'radial-gradient(circle, #06B6D4 0%, transparent 70%)' }}
            animate={{ scale: [1.5, 1, 1.5], x: [50, -50, 50], y: [30, -30, 30], opacity: [0.3, 0.5, 0.3], rotate: [360, 180, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl"
            style={{ background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)', transform: 'translate(-50%, -50%)' }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.25, 0.1], rotate: [0, 360] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          />
        </div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(59,130,246,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.4) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-5xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="flex justify-center mb-8">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border relative overflow-hidden"
                style={{ borderColor: '#3B82F6', backgroundColor: 'rgba(59,130,246,0.1)' }}
                whileHover={{ scale: 1.05 }}
                animate={{ boxShadow: ['0 0 20px rgba(59,130,246,0.3)', '0 0 30px rgba(6,182,212,0.5)', '0 0 20px rgba(59,130,246,0.3)'] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <motion.div
                  className="absolute inset-0 opacity-30"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.5), transparent)' }}
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}>
                  <Sparkles className="w-4 h-4" style={{ color: '#06B6D4' }} />
                </motion.div>
                <span className="text-sm font-medium relative z-10" style={{ color: '#06B6D4' }}>
                  ServeFlow für Gastronomie ist jetzt live
                </span>
              </motion.div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            >
              <motion.span
                className="block text-white"
                animate={{ textShadow: ['0 0 20px rgba(255,255,255,0.1)', '0 0 40px rgba(255,255,255,0.2)', '0 0 20px rgba(255,255,255,0.1)'] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Software die
              </motion.span>
              <motion.span
                className="block bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)' }}
              >
                wirklich passt
              </motion.span>
            </motion.h1>

            {/* Subline */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              DRVN entwickelt branchenspezifische SaaS-Lösungen für deutsche Unternehmen —
              DSGVO-konform, sofort einsetzbar, Server in Deutschland.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div whileHover={{ scale: 1.06, y: -4 }} whileTap={{ scale: 0.96 }}>
                <Link
                  to="/produkte/serveflow"
                  className="inline-flex items-center gap-2 text-base px-8 py-4 rounded-full font-semibold relative overflow-hidden group"
                  style={{ backgroundColor: '#3B82F6', color: 'white', textDecoration: 'none', boxShadow: '0 0 30px rgba(59,130,246,0.4)' }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
                  />
                  <span className="relative z-10">Produkte entdecken</span>
                  <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.06, y: -4 }} whileTap={{ scale: 0.96 }}>
                <Link
                  to="/kontakt"
                  className="inline-flex items-center gap-2 text-base px-8 py-4 rounded-full font-semibold relative overflow-hidden"
                  style={{ borderColor: '#06B6D4', color: '#06B6D4', backgroundColor: 'rgba(6,182,212,0.1)', textDecoration: 'none', border: '1px solid #06B6D4' }}
                >
                  Kontakt aufnehmen
                </Link>
              </motion.div>
            </motion.div>

            {/* Floating dots */}
            <div className="absolute inset-0 pointer-events-none">
              {[
                { top: '20px', left: '40px', size: 12, color: '#3B82F6', delay: 0 },
                { top: '80px', right: '80px', size: 16, color: '#06B6D4', delay: 0.5 },
                { bottom: '120px', left: '80px', size: 12, color: '#8B5CF6', delay: 1 },
                { bottom: '60px', right: '40px', size: 16, color: '#06B6D4', delay: 1.5 },
              ].map((dot, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full"
                  style={{ width: dot.size, height: dot.size, backgroundColor: dot.color, boxShadow: `0 0 20px ${dot.color}`, top: dot.top, bottom: (dot as { bottom?: string }).bottom, left: (dot as { left?: string }).left, right: (dot as { right?: string }).right }}
                  variants={floatingVariants}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: dot.delay } as never}
                />
              ))}
              {[
                { top: '33%', left: '25%', color: '#3B82F6', delay: 0 },
                { top: '66%', right: '33%', color: '#06B6D4', delay: 0.7 },
                { top: '50%', left: '40px', color: '#8B5CF6', delay: 1.2 },
              ].map((dot, i) => (
                <motion.div
                  key={`pulse-${i}`}
                  className="absolute w-2 h-2 rounded-full"
                  style={{ backgroundColor: dot.color, boxShadow: `0 0 15px ${dot.color}`, top: dot.top, left: (dot as { left?: string }).left, right: (dot as { right?: string }).right }}
                  variants={pulseVariants}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: dot.delay } as never}
                />
              ))}
            </div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
              {[
                { value: '30 Min.', label: 'bis Go-Live' },
                { value: '100%', label: 'DSGVO-konform' },
                { value: '24h', label: 'Antwortgarantie' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center relative group"
                  whileHover={{ y: -8, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="text-3xl sm:text-4xl font-bold mb-2"
                    style={{ background: 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-gray-400 text-sm sm:text-base">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: 'linear-gradient(to top, #060609, transparent)' }} />
      </div>

      {/* ===== TICKER ===== */}
      <Ticker />

      {/* ===== WARUM DRVN ===== */}
      <Section style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '100px 40px' }}>
          <motion.div variants={fadeUp} style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p className="mono-label" style={{ marginBottom: '16px' }}>Warum DRVN</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 700, letterSpacing: '-0.03em', color: '#F4F4F6', margin: '0 0 16px', fontStyle: 'italic', lineHeight: 1.1 }}>
              Keine Einheitslösung.{' '}
              <span style={{ background: 'linear-gradient(135deg, #3B82F6, #06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Software die passt.
              </span>
            </h2>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, margin: '0 auto', maxWidth: '520px' }}>
              Jede Branche funktioniert anders. Deshalb bauen wir keine generischen Tools — sondern Plattformen für Ihren Alltag.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            <FeatureCard icon={<Shield size={20} style={{ color: '#3B82F6' }} />} titel="DSGVO-konform by Default" text="Datenschutz nach deutschem Standard — kein Aufpreis. Server bei Hetzner in Nürnberg." />
            <FeatureCard icon={<Zap size={20} style={{ color: '#3B82F6' }} />} titel="In 30 Minuten live" text="Kein monatelanges Setup. Onboarding in 30 Minuten — Ihre Mitarbeiter starten sofort." />
            <FeatureCard icon={<Monitor size={20} style={{ color: '#3B82F6' }} />} titel="Alles aus einer Hand" text="Von der Unternehmenswebseite bis zur komplexen SaaS-Plattform — vollständige Lösungen." />
          </div>

          <motion.div variants={fadeUp} style={{ textAlign: 'center', marginTop: '40px' }}>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} style={{ display: 'inline-block' }}>
              <Link to="/leistungen" className="btn-ghost">Alle Leistungen ansehen <ArrowRight size={14} /></Link>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* ===== PRODUKTE ===== */}
      <Section style={{ background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '100px 40px' }}>
          <motion.div variants={fadeUp} style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <p className="mono-label" style={{ marginBottom: '12px' }}>Unsere Produkte</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 700, letterSpacing: '-0.03em', color: '#F4F4F6', margin: 0, fontStyle: 'italic', lineHeight: 1.1 }}>
                Eine Lösung pro Branche.
              </h2>
            </div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link to="/branchen" className="btn-ghost">Alle Branchen <ArrowRight size={14} /></Link>
            </motion.div>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            <ProduktCard to="/produkte/serveflow" icon={<Zap size={17} style={{ color: '#3B82F6' }} />} name="ServeFlow" tag="Live" desc="QR-Bestellung, Tischverwaltung und Reservierungen — das digitale Betriebssystem für Restaurants." highlight />
            <ProduktCard to="/leistungen/webseiten" icon={<Monitor size={17} style={{ color: '#06B6D4' }} />} name="Webseiten & Landingpages" tag="Live" desc="Professioneller Online-Auftritt — SEO-optimiert, modern, ab 499 € einmalig." />
            {BRANCHEN.slice(1, 4).map((b) => (
              <motion.div key={b.title} variants={fadeUp}>
                <div style={{ padding: '28px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', opacity: 0.45, height: '100%' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                    <div style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '8px' }} />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.1em', padding: '3px 8px', borderRadius: '4px', background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.3)', border: '1px solid rgba(255,255,255,0.06)' }}>
                      {b.status.toUpperCase()}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 700, color: '#F4F4F6', margin: '0 0 8px' }}>{b.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.65, margin: 0 }}>{b.beschreibung}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ===== CTA ===== */}
      <Section>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '120px 40px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <div>
              <motion.p variants={fadeUp} className="mono-label" style={{ marginBottom: '16px' }}>Jetzt starten</motion.p>
              <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 60px)', fontWeight: 900, lineHeight: 1.0, letterSpacing: '-0.04em', color: '#F4F4F6', margin: '0 0 24px', fontStyle: 'italic' }}>
                Ihr Betrieb.
                <br />
                <span style={{ background: 'linear-gradient(135deg, #3B82F6, #06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Digital. In 30 Min.
                </span>
              </motion.h2>
              <motion.p variants={fadeUp} style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, margin: '0 0 36px' }}>
                Erzählen Sie uns von Ihrem Unternehmen — wir melden uns innerhalb von 24 Stunden mit einem konkreten Vorschlag zurück.
              </motion.p>
              <motion.div variants={fadeUp} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                  <Link to="/kontakt" className="btn-primary">Projekt anfragen <ArrowRight size={15} /></Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                  <Link to="/produkte/serveflow" className="btn-ghost">ServeFlow ansehen</Link>
                </motion.div>
              </motion.div>
            </div>

            <motion.div variants={stagger}>
              {[
                'Persönliche Beratung — kostenlos und unverbindlich',
                'Konkretes Angebot innerhalb von 24 Stunden',
                'Kein Setup-Aufwand — wir übernehmen alles',
                'DSGVO-konform von Anfang an',
                'Aktiver Support nach Go-Live inklusive',
              ].map((punkt, i) => (
                <motion.div key={i} variants={slideLeft} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', padding: '16px 0', borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                  <CheckCircle2 size={17} style={{ color: '#3B82F6', flexShrink: 0, marginTop: '2px' }} />
                  <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', margin: 0, lineHeight: 1.5 }}>{punkt}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </Section>
    </div>
  );
}
