import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  ArrowRight, ArrowUpRight, Check, X, Plus, Minus,
  QrCode, Calendar, BarChart3,
} from 'lucide-react';
import SEO, { buildFaqSchema } from '../components/SEO';
import { CtaSection } from './Startseite';
import { PRICING, SERVEFLOW_FAQ } from '../lib/constants';
import { fadeUp, stagger, staggerFast, wordReveal, viewport, easeOut } from '../lib/animations';

const HERO_LINE_1 = 'Deine Gäste bestellen.'.split(' ');
const HERO_LINE_2 = 'Du entspannst.'.split(' ');

export default function ServeFlowPage() {
  const faqSchema = buildFaqSchema(SERVEFLOW_FAQ as unknown as { frage: string; antwort: string }[]);

  return (
    <>
      <SEO
        title="ServeFlow — Restaurant-Bestellsystem mit QR-Code | drvn"
        description="ServeFlow: QR-Bestellung, Reservierungen und Echtzeit-Dashboard für Restaurants im DACH-Raum. Ab 29 €/Monat. DSGVO-konform. Server in Deutschland."
        path="/serveflow"
        keywords="ServeFlow, Restaurantmanagement, QR Bestellung, Reservierungssystem, Restaurant Software, Gastronomie Software, DSGVO, Deutschland"
        schema={faqSchema}
        breadcrumbs={[
          { name: 'Start', path: '/' },
          { name: 'ServeFlow', path: '/serveflow' },
        ]}
      />

      {/* ═══════════════════════════════════════════════════════════
          HERO
          ═══════════════════════════════════════════════════════════ */}
      <section
        style={{
          position: 'relative', paddingTop: 160, paddingBottom: 96,
          overflow: 'hidden',
        }}
      >
        <div className="hero-grid" />
        <div className="hero-glow" />

        <div className="container-x" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 28 }}
          >
            <span className="badge badge-accent">SERVEFLOW · RESTAURANT SAAS</span>
          </motion.div>

          <motion.h1
            variants={staggerFast}
            initial="initial"
            animate="animate"
            className="display-hero"
            style={{ margin: 0, marginBottom: 24 }}
          >
            <span style={{ display: 'block' }}>
              {HERO_LINE_1.map((w, i) => (
                <motion.span key={i} variants={wordReveal} style={{ display: 'inline-block', marginRight: '0.28em' }}>
                  {w}
                </motion.span>
              ))}
            </span>
            <span style={{ display: 'block', color: 'var(--accent)' }}>
              {HERO_LINE_2.map((w, i) => (
                <motion.span key={i} variants={wordReveal} style={{ display: 'inline-block', marginRight: '0.28em' }}>
                  {w}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.5 }}
            style={{
              fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.05rem, 1.4vw, 1.3rem)',
              color: 'var(--text-secondary)', lineHeight: 1.55,
              maxWidth: '54ch', margin: '0 0 40px',
            }}
          >
            QR-Code Bestellsystem, Reservierungsmanagement und Echtzeit-Dashboard für Restaurants im DACH-Raum.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.65 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 56 }}
          >
            <a href="https://app.serve-flow.org" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Kostenlos starten <ArrowRight size={16} />
            </a>
            <Link to="/kontakt" className="btn-outline">
              Demo ansehen <ArrowUpRight size={16} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'center' }}
          >
            {['Keine Kreditkarte', 'Setup in 15 Min', 'DSGVO-konform', 'Monatlich kündbar'].map((item) => (
              <div key={item} style={{
                display: 'flex', alignItems: 'center', gap: 8,
                fontFamily: 'var(--font-sans)', fontSize: '0.72rem',
                fontWeight: 600, letterSpacing: '0.14em',
                color: 'var(--text-muted)', textTransform: 'uppercase',
              }}>
                <span style={{ color: 'var(--accent)' }}>✦</span>
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          PROBLEM / LÖSUNG
          ═══════════════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }} className="section-y">
        <div className="container-x">
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            style={{ maxWidth: '52rem', marginBottom: 64 }}
          >
            <span className="eyebrow" style={{ marginBottom: 18 }}>Problem & Lösung</span>
            <h2 className="display-1" style={{ margin: '14px 0 0' }}>
              Mehr Bestellungen.<br />
              <span style={{ color: 'var(--accent)' }}>Weniger Stress.</span>
            </h2>
          </motion.div>

          <div className="problem-grid" style={{ display: 'grid', gap: 24, alignItems: 'start' }}>
            {/* Problem */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={viewport}
              className="card"
              style={{ padding: 32 }}
            >
              <p className="eyebrow-muted" style={{ marginBottom: 18 }}>Das Problem</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 16 }}>
                {[
                  'Kellner laufen ständig zwischen Tischen und Küche hin und her',
                  'Bestellfehler beim Aufnehmen kosten Zeit und Geld',
                  'Kein Überblick über offene Tische, Reservierungen und Umsatz',
                ].map((p) => (
                  <li key={p} style={{
                    display: 'flex', alignItems: 'flex-start', gap: 12,
                    fontFamily: 'var(--font-sans)', fontSize: '1rem',
                    color: 'var(--text-secondary)', lineHeight: 1.55,
                  }}>
                    <div style={{
                      flexShrink: 0, marginTop: 2,
                      width: 22, height: 22, borderRadius: 999,
                      background: 'var(--surface-high)',
                      border: '1px solid var(--border-high)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <X size={12} style={{ color: 'var(--text-muted)' }} />
                    </div>
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Lösung */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={viewport}
              transition={{ delay: 0.1 }}
              className="card"
              style={{
                padding: 32,
                borderColor: 'rgba(255, 77, 0, 0.3)',
                background: 'linear-gradient(180deg, rgba(255,77,0,0.04), transparent 60%), var(--surface)',
              }}
            >
              <p className="eyebrow" style={{ marginBottom: 18 }}>Die Lösung</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 16 }}>
                {[
                  'Gäste bestellen selbst per QR-Code — direkt aus der Küche aktiviert',
                  'Bestellungen sind digital, eindeutig und nachvollziehbar',
                  'Live-Dashboard zeigt Tische, Umsatz, Reservierungen in Echtzeit',
                ].map((p) => (
                  <li key={p} style={{
                    display: 'flex', alignItems: 'flex-start', gap: 12,
                    fontFamily: 'var(--font-sans)', fontSize: '1rem',
                    color: 'var(--text-primary)', lineHeight: 1.55,
                  }}>
                    <div style={{
                      flexShrink: 0, marginTop: 2,
                      width: 22, height: 22, borderRadius: 999,
                      background: 'var(--accent)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Check size={12} strokeWidth={3} color="#fff" />
                    </div>
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        <style>{`
          @media (min-width: 800px) {
            .problem-grid { grid-template-columns: 1fr 1fr !important; }
          }
        `}</style>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          3 FEATURES (Apple Scroll)
          ═══════════════════════════════════════════════════════════ */}
      <FeatureBlock
        eyebrow="Feature 01"
        title="Kein Kellner für die Bestellung."
        text="QR-Code → Browser-Menü → direkt in die Küche. Keine App, läuft auf jedem Handy der letzten 7 Jahre."
        Icon={QrCode}
        flip={false}
      />
      <FeatureBlock
        eyebrow="Feature 02"
        title="Volles Haus. Volle Kontrolle."
        text="Online-Reservierungen mit automatischer Bestätigung via E-Mail und WhatsApp. Tischplan in Echtzeit, No-Show-Handling inklusive."
        Icon={Calendar}
        flip={true}
      />
      <FeatureBlock
        eyebrow="Feature 03"
        title="Alles auf einen Blick."
        text="Live-Bestellungen, Tages-Umsatz, Menüverwaltung, Schichtplanung — von überall erreichbar. Im Büro, daheim, am Strand."
        Icon={BarChart3}
        flip={false}
      />

      {/* ═══════════════════════════════════════════════════════════
          PRICING
          ═══════════════════════════════════════════════════════════ */}
      <section
        id="pricing"
        style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}
        className="section-y"
      >
        <div className="container-x">
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            style={{ textAlign: 'center', maxWidth: '40rem', margin: '0 auto 64px' }}
          >
            <span className="eyebrow" style={{ marginBottom: 18 }}>Preise</span>
            <h2 className="display-1" style={{ margin: '14px 0 18px' }}>
              Ehrliche Preise. Keine Überraschungen.
            </h2>
            <p style={{
              fontFamily: 'var(--font-sans)', fontSize: '1.05rem',
              color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0,
            }}>
              Monatlich kündbar. Alle Preise zzgl. MwSt.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            style={{
              display: 'grid', gap: 16,
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              maxWidth: 1100, marginInline: 'auto',
            }}
          >
            {PRICING.map((p) => (
              <motion.article
                key={p.name}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                style={{
                  background: p.highlighted ? 'var(--surface-high)' : 'var(--surface)',
                  border: p.highlighted ? '1px solid var(--accent)' : '1px solid var(--border)',
                  borderRadius: 20,
                  padding: '36px 28px 32px',
                  position: 'relative',
                  display: 'flex', flexDirection: 'column',
                  transition: 'transform 0.3s ease, border-color 0.3s',
                  boxShadow: p.highlighted ? '0 0 60px rgba(255, 77, 0, 0.15)' : 'none',
                }}
              >
                {p.highlighted && (
                  <span style={{
                    position: 'absolute', top: -12, left: 28,
                    background: 'var(--accent)', color: '#fff',
                    fontFamily: 'var(--font-sans)', fontSize: '0.7rem',
                    fontWeight: 700, letterSpacing: '0.14em',
                    padding: '5px 12px', borderRadius: 999,
                    textTransform: 'uppercase',
                  }}>
                    Beliebt
                  </span>
                )}
                <div style={{ marginBottom: 24 }}>
                  <h3 className="display-3" style={{ margin: 0, marginBottom: 6 }}>{p.name}</h3>
                  <p style={{
                    fontFamily: 'var(--font-sans)', fontSize: '0.88rem',
                    color: 'var(--text-secondary)', margin: 0,
                  }}>{p.tagline}</p>
                </div>

                <div style={{ marginBottom: 28, display: 'flex', alignItems: 'baseline', gap: 6 }}>
                  <span className="display-1" style={{
                    fontSize: 'clamp(2.4rem, 4vw, 3rem)',
                    color: p.highlighted ? 'var(--accent)' : 'var(--text-primary)',
                    margin: 0, lineHeight: 1,
                  }}>
                    €{p.price}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-sans)', fontSize: '0.95rem',
                    color: 'var(--text-muted)',
                  }}>
                    /Monat
                  </span>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12, marginBottom: 32 }}>
                  {p.features.map((f) => (
                    <li key={f} style={{
                      display: 'flex', alignItems: 'flex-start', gap: 10,
                      fontFamily: 'var(--font-sans)', fontSize: '0.95rem',
                      color: 'var(--text-secondary)', lineHeight: 1.5,
                    }}>
                      <Check size={16} strokeWidth={2.5} style={{
                        color: p.highlighted ? 'var(--accent)' : 'var(--text-secondary)',
                        flexShrink: 0, marginTop: 2,
                      }} />
                      {f}
                    </li>
                  ))}
                </ul>

                <div style={{ marginTop: 'auto' }}>
                  <Link
                    to="/kontakt"
                    className={p.highlighted ? 'btn-primary' : 'btn-outline'}
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    {p.cta} <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FAQ
          ═══════════════════════════════════════════════════════════ */}
      <section style={{ borderTop: '1px solid var(--border)' }} className="section-y">
        <div className="container-x" style={{ maxWidth: 880 }}>
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            style={{ textAlign: 'center', marginBottom: 56 }}
          >
            <span className="eyebrow" style={{ marginBottom: 18 }}>FAQ</span>
            <h2 className="display-1" style={{ margin: '14px 0 0' }}>
              Häufige Fragen
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            style={{ display: 'grid', gap: 8 }}
          >
            {SERVEFLOW_FAQ.map((f, i) => (
              <FaqItem key={i} {...f} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CTA
          ═══════════════════════════════════════════════════════════ */}
      <CtaSection />
    </>
  );
}

/* ── Reusable Feature Block ────────────────────────────────────── */
function FeatureBlock({
  eyebrow, title, text, Icon, flip,
}: {
  eyebrow: string;
  title: string;
  text: string;
  Icon: typeof QrCode;
  flip: boolean;
}) {
  return (
    <section style={{
      borderTop: '1px solid var(--border)',
      background: flip ? 'var(--bg)' : 'transparent',
    }} className="section-y">
      <div className="container-x">
        <div
          style={{
            display: 'grid', gap: 56, alignItems: 'center',
          }}
          className="feature-grid"
          data-flip={flip ? 'true' : 'false'}
        >
          <motion.div
            initial={{ opacity: 0, x: flip ? 32 : -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, ease: easeOut }}
            style={{ order: flip ? 2 : 1 }}
          >
            <span className="eyebrow" style={{ marginBottom: 18 }}>{eyebrow}</span>
            <h2 className="display-1" style={{ margin: '14px 0 22px', maxWidth: '14ch' }}>
              {title}
            </h2>
            <p style={{
              fontFamily: 'var(--font-sans)', fontSize: '1.1rem',
              color: 'var(--text-secondary)', lineHeight: 1.65,
              maxWidth: '48ch', margin: 0,
            }}>{text}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: flip ? -32 : 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, ease: easeOut }}
            style={{ order: flip ? 1 : 2 }}
          >
            <div
              className="mockup-window"
              style={{
                aspectRatio: '4 / 3',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'relative', overflow: 'hidden',
              }}
            >
              <div style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,77,0,0.18), transparent 70%)',
              }} />
              <div style={{
                position: 'relative', zIndex: 1,
                width: 84, height: 84, borderRadius: 18,
                background: 'rgba(255, 77, 0, 0.12)',
                border: '1px solid rgba(255, 77, 0, 0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 0 36px rgba(255, 77, 0, 0.25)',
              }}>
                <Icon size={36} style={{ color: 'var(--accent)' }} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .feature-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ── FAQ Item ──────────────────────────────────────────────────── */
function FaqItem({ frage, antwort, index }: { frage: string; antwort: string; index: number }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <motion.div
      variants={fadeUp}
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 12,
        overflow: 'hidden',
      }}
    >
      <button
        onClick={() => setOpen((s) => !s)}
        aria-expanded={open}
        style={{
          width: '100%', background: 'transparent', border: 'none', cursor: 'pointer',
          padding: '22px 24px', display: 'flex', alignItems: 'center', gap: 16,
          textAlign: 'left',
          fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 600,
          color: 'var(--text-primary)',
        }}
      >
        <span style={{ flex: 1 }}>{frage}</span>
        <span style={{
          width: 28, height: 28, flexShrink: 0,
          background: open ? 'var(--accent)' : 'var(--surface-high)',
          border: '1px solid ' + (open ? 'var(--accent)' : 'var(--border-high)'),
          borderRadius: 8,
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background 0.2s, border-color 0.2s',
        }}>
          {open ? <Minus size={14} color="#fff" /> : <Plus size={14} color="var(--text-secondary)" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: easeOut }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{
              padding: '0 24px 22px',
              fontFamily: 'var(--font-sans)', fontSize: '0.98rem',
              color: 'var(--text-secondary)', lineHeight: 1.65,
            }}>
              {antwort}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
