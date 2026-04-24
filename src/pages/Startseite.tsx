import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Zap, Shield, Monitor, Cpu, CheckCircle2 } from 'lucide-react';
import {
  motion,
  useInView,
  useScroll,
  useTransform,
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

/* ===== Section wrapper with useInView ===== */
function Section({ children, className = '', style = {} }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.section
      ref={ref}
      variants={stagger}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={className}
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
    <div style={{ borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', padding: '13px 0', overflow: 'hidden', background: 'var(--color-surface)' }} className="mask-edges">
      <div className="animate-marquee" style={{ gap: '56px' }}>
        {items.map((item, i) => (
          <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '0.12em', color: 'var(--color-text-subtle)', whiteSpace: 'nowrap', textTransform: 'uppercase' }}>
            <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: 'var(--color-primary)', opacity: 0.5, flexShrink: 0 }} />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ===== Stats ===== */
const STATS = [
  { zahl: '30 Min.', label: 'bis zum Go-Live' },
  { zahl: '100%', label: 'DSGVO-konform' },
  { zahl: '5+', label: 'Branchen geplant' },
  { zahl: '24h', label: 'Antwortgarantie' },
];

/* ===== Feature Card ===== */
function FeatureCard({ icon, titel, text, delay = 0 }: { icon: React.ReactNode; titel: string; text: string; delay?: number }) {
  return (
    <motion.div
      variants={fadeUp}
      transition={{ delay } as never}
      className="card-base"
      style={{ padding: '32px' }}
      whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(0,0,0,0.09)', borderColor: '#D0D0CC' }}
    >
      <div style={{ width: '44px', height: '44px', background: 'rgba(37,99,235,0.07)', border: '1px solid rgba(37,99,235,0.12)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
        {icon}
      </div>
      <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 700, color: 'var(--color-text)', margin: '0 0 8px' }}>{titel}</h3>
      <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.65, margin: 0 }}>{text}</p>
    </motion.div>
  );
}

/* ===== Produkt Card ===== */
function ProduktCard({ to, icon, name, tag, desc, highlight = false }: { to: string; icon: React.ReactNode; name: string; tag: string; desc: string; highlight?: boolean }) {
  return (
    <motion.div variants={fadeUp} whileHover={{ y: -4, boxShadow: highlight ? '0 16px 48px rgba(37,99,235,0.15)' : '0 12px 40px rgba(0,0,0,0.09)' }}>
      <Link
        to={to}
        style={{
          display: 'flex', flexDirection: 'column', padding: '28px',
          background: highlight ? 'var(--color-primary)' : 'var(--color-surface)',
          border: `1px solid ${highlight ? 'var(--color-primary)' : 'var(--color-border)'}`,
          borderRadius: '10px', textDecoration: 'none',
          height: '100%', transition: 'border-color 0.2s',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
          <div style={{ width: '40px', height: '40px', background: highlight ? 'rgba(255,255,255,0.2)' : 'rgba(37,99,235,0.07)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {icon}
          </div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.1em', padding: '3px 8px', borderRadius: '4px', background: tag === 'Live' ? (highlight ? 'rgba(255,255,255,0.2)' : 'rgba(22,163,74,0.08)') : 'rgba(0,0,0,0.04)', color: tag === 'Live' ? (highlight ? '#fff' : '#16A34A') : 'var(--color-text-muted)', border: tag === 'Live' ? (highlight ? '1px solid rgba(255,255,255,0.3)' : '1px solid rgba(22,163,74,0.2)') : '1px solid var(--color-border)' }}>
            {tag === 'Live' ? 'LIVE' : tag.toUpperCase()}
          </span>
        </div>
        <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', fontWeight: 700, color: highlight ? '#fff' : 'var(--color-text)', margin: '0 0 8px' }}>{name}</h3>
        <p style={{ fontSize: '0.875rem', color: highlight ? 'rgba(255,255,255,0.8)' : 'var(--color-text-muted)', lineHeight: 1.65, margin: '0 0 20px', flex: 1 }}>{desc}</p>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.08em', color: highlight ? 'rgba(255,255,255,0.7)' : 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
          MEHR ERFAHREN <ArrowUpRight size={11} />
        </span>
      </Link>
    </motion.div>
  );
}

export default function Startseite() {
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, -60]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0.3]);

  return (
    <div style={{ background: 'var(--color-bg)' }}>
      <SEO
        title="DRVN — Branchenspezifische SaaS-Lösungen für Deutschland"
        description="DRVN entwickelt digitale Plattformen für Gastronomie, Handwerk und mehr — DSGVO-konform, sofort einsetzbar, Server in Deutschland."
        path="/"
        keywords="SaaS Deutschland, Branchensoftware, Gastronomie Software, Handwerk Software, DSGVO-konform, digitale Transformation KMU"
        schema={{ '@context': 'https://schema.org', '@type': 'WebSite', name: 'DRVN', url: 'https://drvnautomatisations.com' }}
      />

      {/* ===== HERO ===== */}
      <section
        ref={heroRef}
        style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '64px', overflow: 'hidden', background: 'var(--color-bg)', position: 'relative' }}
      >
        {/* Subtle warm glow */}
        <div style={{ position: 'absolute', top: '10%', right: '-5%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 70%)', pointerEvents: 'none', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: '10%', left: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(8,145,178,0.04) 0%, transparent 70%)', pointerEvents: 'none', borderRadius: '50%' }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 40px', width: '100%' }}>
          <motion.div style={{ y: heroY, opacity: heroOpacity }}>

            {/* Status pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(22,163,74,0.07)', border: '1px solid rgba(22,163,74,0.18)', borderRadius: '100px', padding: '6px 16px', marginBottom: '48px' }}
            >
              <span className="animate-pulse" style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#16A34A', flexShrink: 0 }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '0.12em', color: '#16A34A', textTransform: 'uppercase' }}>
                ServeFlow für Gastronomie ist live
              </span>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: '64px', alignItems: 'center' }}>
              {/* Left: headline */}
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(56px, 7.5vw, 110px)', fontWeight: 900, lineHeight: 0.95, letterSpacing: '-0.04em', color: 'var(--color-text)', margin: '0 0 12px', fontStyle: 'italic' }}
                >
                  Software
                </motion.h1>
                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(56px, 7.5vw, 110px)', fontWeight: 300, lineHeight: 0.95, letterSpacing: '-0.04em', margin: '0 0 40px', fontStyle: 'italic', color: 'var(--color-text-muted)' }}
                >
                  die wirklich passt.
                </motion.h1>

                {/* Blue underline */}
                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  style={{ height: '2px', background: 'linear-gradient(to right, var(--color-primary), var(--color-secondary), transparent)', maxWidth: '480px', marginBottom: '40px', transformOrigin: 'left' }}
                />

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', lineHeight: 1.7, margin: '0 0 36px', maxWidth: '480px' }}
                >
                  DRVN entwickelt branchenspezifische Lösungen für deutsche Unternehmen —
                  DSGVO-konform, sofort einsetzbar, Server in Deutschland.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}
                >
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                    <Link to="/produkte/serveflow" className="btn-primary">
                      Produkte entdecken <ArrowRight size={15} />
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                    <Link to="/kontakt" className="btn-ghost">
                      Kontakt aufnehmen
                    </Link>
                  </motion.div>
                </motion.div>
              </div>

              {/* Right: floating feature cards */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
              >
                {[
                  { icon: <Zap size={15} style={{ color: 'var(--color-primary)' }} />, title: 'ServeFlow', sub: 'Restaurant Software · Live', offset: 0 },
                  { icon: <Monitor size={15} style={{ color: 'var(--color-secondary)' }} />, title: 'Webseiten & Landingpages', sub: 'Ab 499 € · sofort buchbar', offset: 28 },
                  { icon: <Shield size={15} style={{ color: 'var(--color-primary)' }} />, title: 'DSGVO by Default', sub: 'Server in Nürnberg, DE', offset: 0 },
                  { icon: <Cpu size={15} style={{ color: 'var(--color-secondary)' }} />, title: '5+ Branchen in Entwicklung', sub: 'Handwerk · Beauty · Fitness', offset: 28 },
                ].map((card, i) => (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ x: 4, boxShadow: '0 8px 30px rgba(0,0,0,0.08)', borderColor: '#D0D0CC' }}
                    style={{ display: 'flex', alignItems: 'center', gap: '14px', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '10px', padding: '14px 18px', marginLeft: `${card.offset}px`, transition: 'border-color 0.2s', cursor: 'default' }}
                  >
                    <div style={{ width: '36px', height: '36px', background: 'rgba(37,99,235,0.06)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {card.icon}
                    </div>
                    <div>
                      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text)', margin: 0 }}>{card.title}</p>
                      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-text-subtle)', margin: 0 }}>{card.sub}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== TICKER ===== */}
      <Ticker />

      {/* ===== STATS ===== */}
      <Section style={{ background: 'var(--color-surface)', borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '72px 40px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0' }}>
          {STATS.map((s, i) => (
            <motion.div
              key={s.zahl}
              variants={fadeUp}
              style={{ padding: '0 32px', borderRight: i < STATS.length - 1 ? '1px solid var(--color-border)' : 'none', textAlign: 'center' }}
            >
              <p className="stat-number">{s.zahl}</p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '0.12em', color: 'var(--color-text-subtle)', margin: '10px 0 0', textTransform: 'uppercase' }}>{s.label}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ===== WARUM DRVN ===== */}
      <Section style={{ borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '100px 40px' }}>
          <motion.div variants={fadeUp} style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p className="mono-label" style={{ marginBottom: '16px' }}>Warum DRVN</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--color-text)', margin: '0 0 16px', fontStyle: 'italic', lineHeight: 1.1 }}>
              Keine Einheitslösung.
              <br />
              <span className="text-gradient">Software die passt.</span>
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', lineHeight: 1.7, margin: '0 auto', maxWidth: '520px' }}>
              Jede Branche funktioniert anders. Deshalb bauen wir keine generischen Tools —
              sondern Plattformen für Ihren Alltag.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            <FeatureCard icon={<Shield size={20} style={{ color: 'var(--color-primary)' }} />} titel="DSGVO-konform by Default" text="Datenschutz nach deutschem Standard — kein Aufpreis. Server bei Hetzner in Nürnberg." />
            <FeatureCard icon={<Zap size={20} style={{ color: 'var(--color-primary)' }} />} titel="In 30 Minuten live" text="Kein monatelanges Setup. Onboarding in 30 Minuten — Ihre Mitarbeiter starten sofort." />
            <FeatureCard icon={<Monitor size={20} style={{ color: 'var(--color-primary)' }} />} titel="Alles aus einer Hand" text="Von der Unternehmenswebseite bis zur komplexen SaaS-Plattform — vollständige Lösungen." />
          </div>

          <motion.div variants={fadeUp} style={{ textAlign: 'center', marginTop: '40px' }}>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} style={{ display: 'inline-block' }}>
              <Link to="/leistungen" className="btn-ghost">Alle Leistungen ansehen <ArrowRight size={14} /></Link>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* ===== PRODUKTE ===== */}
      <Section style={{ background: 'var(--color-surface-muted)', borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '100px 40px' }}>
          <motion.div variants={fadeUp} style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <p className="mono-label" style={{ marginBottom: '12px' }}>Unsere Produkte</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--color-text)', margin: 0, fontStyle: 'italic', lineHeight: 1.1 }}>
                Eine Lösung pro Branche.
              </h2>
            </div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link to="/branchen" className="btn-ghost">Alle Branchen <ArrowRight size={14} /></Link>
            </motion.div>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            <ProduktCard to="/produkte/serveflow" icon={<Zap size={17} style={{ color: '#fff' }} />} name="ServeFlow" tag="Live" desc="QR-Bestellung, Tischverwaltung und Reservierungen — das digitale Betriebssystem für Restaurants." highlight />
            <ProduktCard to="/leistungen/webseiten" icon={<Monitor size={17} style={{ color: 'var(--color-secondary)' }} />} name="Webseiten & Landingpages" tag="Live" desc="Professioneller Online-Auftritt — SEO-optimiert, modern, ab 499 € einmalig." />
            {BRANCHEN.slice(1, 4).map((b) => (
              <motion.div key={b.title} variants={fadeUp}>
                <div className="card-base" style={{ padding: '28px', opacity: 0.5, height: '100%' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                    <div style={{ width: '40px', height: '40px', background: 'var(--color-surface-muted)', border: '1px solid var(--color-border)', borderRadius: '8px' }} />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.1em', padding: '3px 8px', borderRadius: '4px', background: 'rgba(0,0,0,0.04)', color: 'var(--color-text-subtle)', border: '1px solid var(--color-border)' }}>
                      {b.status.toUpperCase()}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 700, color: 'var(--color-text)', margin: '0 0 8px' }}>{b.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.65, margin: 0 }}>{b.beschreibung}</p>
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
              <motion.h2
                variants={fadeUp}
                style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 60px)', fontWeight: 900, lineHeight: 1.0, letterSpacing: '-0.04em', color: 'var(--color-text)', margin: '0 0 24px', fontStyle: 'italic' }}
              >
                Ihr Betrieb.
                <br />
                <span className="text-gradient">Digital. In 30 Min.</span>
              </motion.h2>
              <motion.p variants={fadeUp} style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: 1.7, margin: '0 0 36px' }}>
                Erzählen Sie uns von Ihrem Unternehmen — wir melden uns innerhalb von 24 Stunden
                mit einem konkreten Vorschlag zurück.
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
                <motion.div
                  key={i}
                  variants={slideLeft}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', padding: '16px 0', borderBottom: i < 4 ? '1px solid var(--color-border)' : 'none' }}
                >
                  <CheckCircle2 size={17} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px' }} />
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.5 }}>{punkt}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </Section>
    </div>
  );
}
