import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, ArrowUpRight, ChevronDown,
  QrCode, Code2, Zap, CheckCircle, Sparkles, Calendar,
} from 'lucide-react';
import SEO from '../components/SEO';
import { BEREICHE, DIFF_STATS, NEWS, TRUST_STRIP } from '../lib/constants';
import { fadeUp, fadeIn, stagger, staggerFast, wordReveal, viewport, easeOut } from '../lib/animations';

const ICONS: Record<string, typeof QrCode> = { QrCode, Code2, Zap };

const HERO_LINE_1 = 'Wir bauen Dinge'.split(' ');
const HERO_LINE_2 = 'die funktionieren.'.split(' ');

export default function Startseite() {
  return (
    <>
      <SEO
        title="drvn — Wir bauen Dinge die funktionieren"
        description="drvn entwickelt digitale Produkte, Websites und Software für Unternehmen im DACH-Raum. Stuttgart. Direkt mit dem Entwickler. ServeFlow Restaurant-SaaS ab 29 €/Monat."
        path="/"
      />

      {/* ═══════════════════════════════════════════════════════════
          HERO
          ═══════════════════════════════════════════════════════════ */}
      <section
        style={{
          position: 'relative', minHeight: '100vh',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          overflow: 'hidden', paddingTop: 96, paddingBottom: 96,
        }}
      >
        <div className="hero-grid" />
        <div className="hero-glow" />

        <div className="container-x" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 32 }}
          >
            <span style={{
              width: 6, height: 6, borderRadius: 999, background: 'var(--accent)',
              boxShadow: '0 0 12px var(--accent)',
            }} className="pulse-dot" />
            <span className="eyebrow" style={{ color: 'var(--text-secondary)' }}>
              Studio aus Stuttgart · Open für Q4 2026
            </span>
          </motion.div>

          {/* Animated headline */}
          <motion.h1
            variants={staggerFast}
            initial="initial"
            animate="animate"
            className="display-hero"
            style={{ margin: 0, marginBottom: 24 }}
          >
            <span style={{ display: 'block' }}>
              {HERO_LINE_1.map((w, i) => (
                <motion.span
                  key={i}
                  variants={wordReveal}
                  style={{ display: 'inline-block', marginRight: '0.28em' }}
                >
                  {w}
                </motion.span>
              ))}
            </span>
            <span style={{ display: 'block', color: 'var(--accent)' }}>
              {HERO_LINE_2.map((w, i) => (
                <motion.span
                  key={i}
                  variants={wordReveal}
                  style={{ display: 'inline-block', marginRight: '0.28em' }}
                >
                  {w}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, ease: easeOut, delay: 0.5 }}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1.1rem, 1.5vw, 1.35rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.55, maxWidth: '52ch',
              margin: 0, marginBottom: 40,
            }}
          >
            drvn entwickelt digitale Produkte, Websites und Software für Unternehmen im DACH-Raum die wachsen wollen.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.65 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 56 }}
          >
            <Link to="/kontakt" className="btn-primary">
              Projekt starten
              <ArrowRight size={16} />
            </Link>
            <Link to="/serveflow" className="btn-outline">
              ServeFlow entdecken
              <ArrowUpRight size={16} />
            </Link>
          </motion.div>

          {/* Trust-Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'center' }}
          >
            {TRUST_STRIP.map((item, i) => (
              <div
                key={item}
                style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  fontFamily: 'var(--font-sans)', fontSize: '0.72rem',
                  fontWeight: 600, letterSpacing: '0.14em',
                  color: 'var(--text-muted)', textTransform: 'uppercase',
                }}
              >
                <span style={{ color: 'var(--accent)' }}>✦</span>
                {item}
                {i < TRUST_STRIP.length - 1 && (
                  <span style={{ width: 1, height: 12, background: 'var(--border)', marginLeft: 14 }} />
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          style={{
            position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
            color: 'var(--text-muted)', display: 'flex', flexDirection: 'column',
            alignItems: 'center', gap: 6,
          }}
        >
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.18em' }}>SCROLL</span>
          <ChevronDown size={14} className="animate-bounce-y" />
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2 — DREI BEREICHE
          ═══════════════════════════════════════════════════════════ */}
      <section style={{ position: 'relative', borderTop: '1px solid var(--border)' }} className="section-y">
        <div className="container-x">
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            style={{ maxWidth: '52rem', marginBottom: 64 }}
          >
            <span className="eyebrow" style={{ marginBottom: 18 }}>Leistungen</span>
            <h2 className="display-1" style={{ margin: '14px 0 18px' }}>
              Drei Bereiche.<br />
              <span style={{ color: 'var(--accent)' }}>Ein Anspruch.</span>
            </h2>
            <p style={{
              fontFamily: 'var(--font-sans)', fontSize: '1.1rem',
              color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0, maxWidth: '42ch',
            }}>
              Von SaaS-Produkten über Unternehmens-Websites bis zu individuellen Softwareprojekten.
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
            }}
          >
            {BEREICHE.map((b) => {
              const Icon = ICONS[b.icon] ?? QrCode;
              return (
                <motion.div key={b.title} variants={fadeUp}>
                  <Link
                    to={b.href}
                    style={{ display: 'block', textDecoration: 'none', height: '100%' }}
                  >
                    <motion.article
                      whileHover={{ y: -3 }}
                      transition={{ duration: 0.25, ease: easeOut }}
                      className="card"
                      style={{
                        height: '100%', padding: '32px 28px 28px',
                        position: 'relative', overflow: 'hidden',
                        borderTop: b.highlight ? '2px solid var(--accent)' : '1px solid var(--border)',
                      }}
                    >
                      {b.highlight && (
                        <div style={{
                          position: 'absolute', inset: 0,
                          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,77,0,0.08), transparent 60%)',
                          pointerEvents: 'none',
                        }} />
                      )}
                      <div style={{ position: 'relative' }}>
                        <div style={{
                          width: 44, height: 44, borderRadius: 12,
                          background: b.highlight ? 'rgba(255,77,0,0.12)' : 'var(--surface-high)',
                          border: '1px solid ' + (b.highlight ? 'rgba(255,77,0,0.3)' : 'var(--border-high)'),
                          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                          marginBottom: 24,
                        }}>
                          <Icon size={20} style={{ color: b.highlight ? 'var(--accent)' : 'var(--text-secondary)' }} />
                        </div>
                        <div style={{ marginBottom: 12 }}>
                          <span className={b.highlight ? 'badge badge-accent' : 'badge'}>
                            {b.badge}
                          </span>
                        </div>
                        <h3 className="display-3" style={{ margin: 0, marginBottom: 10 }}>{b.title}</h3>
                        <p style={{
                          fontFamily: 'var(--font-sans)', fontSize: '0.97rem',
                          color: 'var(--text-secondary)', lineHeight: 1.6,
                          margin: 0, marginBottom: 24,
                        }}>{b.text}</p>
                        <div style={{
                          display: 'inline-flex', alignItems: 'center', gap: 6,
                          fontFamily: 'var(--font-sans)', fontSize: '0.88rem', fontWeight: 600,
                          color: b.highlight ? 'var(--accent)' : 'var(--text-primary)',
                        }}>
                          {b.cta} <ArrowRight size={14} />
                        </div>
                      </div>
                    </motion.article>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3 — DIFFERENZIERUNG
          ═══════════════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }} className="section-y">
        <div className="container-x">
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            style={{ maxWidth: '52rem', marginBottom: 72 }}
          >
            <span className="eyebrow" style={{ marginBottom: 18 }}>Warum drvn</span>
            <h2 className="display-1" style={{ margin: '14px 0 18px' }}>
              Kein Agentur-Overhead.<br />
              <span style={{ color: 'var(--text-muted)' }}>Kein Bullshit.</span>
            </h2>
            <p style={{
              fontFamily: 'var(--font-sans)', fontSize: '1.1rem',
              color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0, maxWidth: '46ch',
            }}>
              Direkte Zusammenarbeit, klare Kommunikation, Code der langfristig wartbar ist.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            style={{
              display: 'grid', gap: 24,
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            }}
          >
            {DIFF_STATS.map((s) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                style={{
                  paddingTop: 24,
                  borderTop: '1px solid var(--border)',
                }}
              >
                <div className="display-1" style={{
                  fontSize: 'clamp(2.4rem, 4.5vw, 3.4rem)',
                  color: 'var(--accent)',
                  margin: 0, marginBottom: 16,
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                }}>
                  {s.value}
                </div>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.05rem', fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: 6,
                }}>
                  {s.label}
                </div>
                <p style={{
                  fontFamily: 'var(--font-sans)', fontSize: '0.92rem',
                  color: 'var(--text-secondary)', lineHeight: 1.55,
                  margin: 0,
                }}>{s.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4 — SERVEFLOW TEASER (asymmetric)
          ═══════════════════════════════════════════════════════════ */}
      <section style={{ borderTop: '1px solid var(--border)' }} className="section-y">
        <div className="container-x">
          <div
            style={{ display: 'grid', gap: 56, alignItems: 'center' }}
            className="teaser-grid"
          >
            {/* Left text */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={viewport}
            >
              <span className="eyebrow" style={{ marginBottom: 18 }}>Flagship Produkt</span>
              <h2 className="display-1" style={{ margin: '14px 0 22px' }}>
                ServeFlow — das<br />
                <span style={{ color: 'var(--accent)' }}>Bestellsystem</span> für<br />
                moderne Restaurants.
              </h2>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 36px', display: 'grid', gap: 14 }}>
                {[
                  'QR-Code Tischbestellung ohne App',
                  'Live-Reservierungsmanagement',
                  'Admin-Dashboard in Echtzeit',
                ].map((f) => (
                  <li key={f} style={{
                    display: 'flex', alignItems: 'flex-start', gap: 12,
                    fontFamily: 'var(--font-sans)', fontSize: '1.02rem',
                    color: 'var(--text-primary)',
                  }}>
                    <CheckCircle size={20} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 2 }} />
                    {f}
                  </li>
                ))}
              </ul>

              <Link to="/serveflow" className="btn-primary">
                ServeFlow entdecken <ArrowRight size={16} />
              </Link>
            </motion.div>

            {/* Right mockup */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.7, ease: easeOut }}
              style={{ position: 'relative' }}
            >
              <ServeFlowMockup />
            </motion.div>
          </div>
        </div>

        <style>{`
          @media (min-width: 900px) {
            .teaser-grid {
              grid-template-columns: 1.05fr 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5 — NEWS TEASER
          ═══════════════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }} className="section-y">
        <div className="container-x">
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            style={{
              display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between',
              alignItems: 'flex-end', gap: 24, marginBottom: 48,
            }}
          >
            <div style={{ maxWidth: '36rem' }}>
              <span className="eyebrow" style={{ marginBottom: 18 }}>Neuigkeiten</span>
              <h2 className="display-1" style={{ margin: '14px 0 0' }}>Was gerade passiert</h2>
            </div>
            <Link
              to="/news"
              style={{
                fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 600,
                color: 'var(--accent)', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: 6,
              }}
            >
              Alle Updates <ArrowUpRight size={16} />
            </Link>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            style={{
              display: 'grid', gap: 16,
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            }}
          >
            {NEWS.slice(0, 3).map((n) => (
              <motion.article
                key={n.title}
                variants={fadeUp}
                whileHover={{ y: -3 }}
                className="card"
                style={{ padding: 28 }}
              >
                <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 16 }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
                    color: 'var(--text-muted)', letterSpacing: '0.06em',
                  }}>{n.datum}</span>
                  <span className={n.kategorie === 'ServeFlow' ? 'badge badge-accent' : 'badge'}>
                    {n.kategorie}
                  </span>
                </div>
                <h3 className="display-3" style={{ margin: 0, marginBottom: 10 }}>{n.title}</h3>
                <p style={{
                  fontFamily: 'var(--font-sans)', fontSize: '0.92rem',
                  color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0,
                }}>{n.text}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 6 — KONTAKT CTA
          ═══════════════════════════════════════════════════════════ */}
      <CtaSection />
    </>
  );
}

/* ── ServeFlow Mockup ────────────────────────────────────────── */
function ServeFlowMockup() {
  return (
    <div className="mockup-window" style={{ aspectRatio: '4 / 3', position: 'relative' }}>
      {/* Window chrome */}
      <div style={{
        height: 36, padding: '0 14px',
        display: 'flex', alignItems: 'center', gap: 8,
        borderBottom: '1px solid var(--border)',
      }}>
        <span style={{ width: 10, height: 10, borderRadius: 999, background: '#3b3631' }} />
        <span style={{ width: 10, height: 10, borderRadius: 999, background: '#3b3631' }} />
        <span style={{ width: 10, height: 10, borderRadius: 999, background: '#3b3631' }} />
        <span style={{ flex: 1 }} />
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)' }}>
          serveflow.app/dashboard
        </span>
      </div>

      {/* Body grid */}
      <div style={{
        display: 'grid', gridTemplateColumns: '120px 1fr', height: 'calc(100% - 36px)',
      }}>
        {/* Sidebar */}
        <div style={{
          background: 'var(--surface)', borderRight: '1px solid var(--border)',
          padding: 14, display: 'flex', flexDirection: 'column', gap: 6,
        }}>
          {['Dashboard', 'Bestellungen', 'Reservierungen', 'Menü', 'Tische', 'Inventur'].map((s, i) => (
            <div key={s} style={{
              fontFamily: 'var(--font-sans)', fontSize: '0.66rem',
              padding: '6px 8px', borderRadius: 5,
              color: i === 1 ? 'var(--text-primary)' : 'var(--text-muted)',
              background: i === 1 ? 'rgba(255,77,0,0.1)' : 'transparent',
              borderLeft: i === 1 ? '2px solid var(--accent)' : '2px solid transparent',
            }}>
              {s}
            </div>
          ))}
        </div>

        {/* Main content */}
        <div style={{ padding: 16, overflow: 'hidden' }}>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            marginBottom: 16,
          }}>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                Bestellungen heute
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--text-muted)' }}>
                Live · 12 aktiv
              </div>
            </div>
            <span style={{
              width: 8, height: 8, borderRadius: 999, background: 'var(--success)',
            }} className="pulse-dot" />
          </div>

          {/* Order rows */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {[
              { tisch: '04', items: '2× Pizza Margherita, 1× Cola', mins: '2 Min', color: 'var(--accent)' },
              { tisch: '12', items: '1× Pasta, 1× Tiramisu',         mins: '5 Min', color: 'var(--accent-light)' },
              { tisch: '07', items: '3× Bruschetta, 2× Wein',         mins: '8 Min', color: 'var(--text-secondary)' },
              { tisch: '02', items: '1× Salat, 1× Wasser',            mins: '12 Min', color: 'var(--text-muted)' },
            ].map((o) => (
              <div key={o.tisch} style={{
                display: 'grid', gridTemplateColumns: '36px 1fr auto', gap: 10, alignItems: 'center',
                padding: '8px 10px',
                background: 'var(--bg)', border: '1px solid var(--border)',
                borderRadius: 6,
              }}>
                <div style={{
                  fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 700,
                  color: o.color,
                }}>T{o.tisch}</div>
                <div style={{
                  fontFamily: 'var(--font-sans)', fontSize: '0.66rem',
                  color: 'var(--text-secondary)', overflow: 'hidden',
                  textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                }}>{o.items}</div>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
                  color: 'var(--text-muted)',
                }}>{o.mins}</div>
              </div>
            ))}
          </div>

          {/* Stats row */}
          <div style={{
            marginTop: 12, paddingTop: 12, borderTop: '1px solid var(--border)',
            display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8,
          }}>
            {[
              { label: 'Umsatz', value: '€1.247' },
              { label: 'Gäste',  value: '42' },
              { label: 'Ø Tisch', value: '€34' },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'var(--text-muted)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  {s.label}
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {s.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Kontakt CTA Section (wiederverwendbar) ──────────────────── */
export function CtaSection() {
  return (
    <section style={{
      position: 'relative', overflow: 'hidden',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
    }} className="section-y">
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 60% 70% at 50% 50%, rgba(255,77,0,0.12), transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div className="container-x" style={{ position: 'relative', textAlign: 'center' }}>
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={viewport}
        >
          <Sparkles size={20} style={{ color: 'var(--accent)', margin: '0 auto 18px', display: 'block' }} />
          <h2 className="display-1" style={{
            margin: 0, marginBottom: 22,
            maxWidth: '20ch', marginInline: 'auto',
          }}>
            Bereit anzufangen?
          </h2>
          <p style={{
            fontFamily: 'var(--font-sans)', fontSize: '1.15rem',
            color: 'var(--text-secondary)', lineHeight: 1.55,
            maxWidth: '46ch', marginInline: 'auto', marginBottom: 36,
          }}>
            Erzähl uns von deinem Projekt. Wir melden uns innerhalb von 48 Stunden.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 12, marginBottom: 32 }}>
            <Link to="/kontakt" className="btn-primary" style={{ padding: '0.95rem 1.7rem', fontSize: '1rem' }}>
              <Calendar size={16} />
              Jetzt Kontakt aufnehmen
              <ArrowRight size={16} />
            </Link>
          </div>
          <motion.div
            variants={fadeIn}
            style={{
              display: 'inline-flex', flexWrap: 'wrap', gap: 24,
              fontFamily: 'var(--font-sans)', fontSize: '0.78rem',
              fontWeight: 600, letterSpacing: '0.12em',
              color: 'var(--text-muted)', textTransform: 'uppercase',
            }}
          >
            <span><span style={{ color: 'var(--accent)' }}>✦</span> Keine Verpflichtung</span>
            <span><span style={{ color: 'var(--accent)' }}>✦</span> Kostenlose Erstberatung</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
