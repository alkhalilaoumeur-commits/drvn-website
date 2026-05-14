import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { CtaSection } from './Startseite';
import { NEWS, ROADMAP } from '../lib/constants';
import { fadeUp, stagger, viewport, easeOut } from '../lib/animations';

type StatusKey = 'In Entwicklung' | 'Geplant' | 'Idee';

const STATUS_STYLES: Record<StatusKey, { color: string; bg: string; border: string }> = {
  'In Entwicklung': { color: '#FF4D00', bg: 'rgba(255,77,0,0.10)',  border: 'rgba(255,77,0,0.30)' },
  'Geplant':        { color: '#8A8780', bg: 'rgba(255,255,255,0.03)', border: 'var(--border-high)' },
  'Idee':           { color: '#60A5FA', bg: 'rgba(96,165,250,0.10)',  border: 'rgba(96,165,250,0.30)' },
};

const KATEGORIE_CLASS: Record<string, string> = {
  'ServeFlow': 'badge badge-accent',
  'drvn':      'badge',
  'Web':       'badge',
};

export default function NewsPage() {
  return (
    <>
      <SEO
        title="Neuigkeiten & Updates | drvn"
        description="Produkt-Updates, neue Features und Pläne aus dem drvn Studio. ServeFlow Releases, Web-Projekte und Roadmap für 2026."
        path="/news"
        breadcrumbs={[
          { name: 'Start', path: '/' },
          { name: 'News', path: '/news' },
        ]}
      />

      {/* ═══════════════════════════════════════════════════════════
          HERO (kompakt)
          ═══════════════════════════════════════════════════════════ */}
      <section style={{ position: 'relative', paddingTop: 144, paddingBottom: 80, overflow: 'hidden' }}>
        <div className="hero-glow" style={{ height: 440 }} />

        <div className="container-x" style={{ position: 'relative', zIndex: 1, maxWidth: 880 }}>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
            style={{ marginBottom: 24 }}
          >
            <span className="eyebrow">News & Updates</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.1 }}
            className="display-1"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
              margin: 0, marginBottom: 20,
            }}
          >
            Neuigkeiten <span style={{ color: 'var(--accent)' }}>& Updates</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.25 }}
            style={{
              fontFamily: 'var(--font-sans)', fontSize: '1.15rem',
              color: 'var(--text-secondary)', lineHeight: 1.55,
              margin: 0, maxWidth: '52ch',
            }}
          >
            Produkt-Updates, neue Features und Pläne aus dem drvn Studio.
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          NEWS GRID
          ═══════════════════════════════════════════════════════════ */}
      <section style={{ borderTop: '1px solid var(--border)' }} className="section-y">
        <div className="container-x">
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            style={{
              display: 'grid', gap: 16,
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            }}
          >
            {NEWS.map((n) => (
              <motion.article
                key={n.title}
                variants={fadeUp}
                whileHover={{ y: -3 }}
                className="card"
                style={{ padding: 32 }}
              >
                <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 18 }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
                    color: 'var(--text-muted)', letterSpacing: '0.06em',
                  }}>{n.datum}</span>
                  <span className={KATEGORIE_CLASS[n.kategorie] ?? 'badge'}>
                    {n.kategorie}
                  </span>
                </div>
                <h2 className="display-3" style={{ margin: 0, marginBottom: 14, fontSize: '1.3rem' }}>
                  {n.title}
                </h2>
                <p style={{
                  fontFamily: 'var(--font-sans)', fontSize: '0.98rem',
                  color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0, marginBottom: 24,
                }}>{n.text}</p>
                <button
                  type="button"
                  disabled
                  style={{
                    background: 'transparent', border: 'none', padding: 0, cursor: 'not-allowed',
                    fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 600,
                    color: 'var(--text-muted)',
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                  }}
                  title="Demnächst verfügbar"
                >
                  Mehr lesen — bald <ArrowRight size={13} />
                </button>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          ROADMAP
          ═══════════════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }} className="section-y">
        <div className="container-x" style={{ maxWidth: 880 }}>
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            style={{ marginBottom: 56 }}
          >
            <span className="eyebrow" style={{ marginBottom: 18 }}>Roadmap</span>
            <h2 className="display-1" style={{ margin: '14px 0 18px' }}>
              Was als nächstes kommt
            </h2>
            <p style={{
              fontFamily: 'var(--font-sans)', fontSize: '1.05rem',
              color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0, maxWidth: '46ch',
            }}>
              Konkrete Pläne. Keine Versprechen die wir nicht einlösen.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            style={{ position: 'relative', display: 'grid', gap: 8 }}
          >
            {/* Connecting line */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute', top: 16, bottom: 16, left: 24,
                width: 1, background: 'var(--border)',
              }}
            />

            {ROADMAP.map((r) => {
              const status = STATUS_STYLES[r.status as StatusKey];
              return (
                <motion.div
                  key={r.title}
                  variants={fadeUp}
                  style={{
                    position: 'relative', paddingLeft: 64, paddingTop: 14, paddingBottom: 14,
                  }}
                >
                  {/* Dot */}
                  <span
                    aria-hidden="true"
                    style={{
                      position: 'absolute', left: 16, top: 26,
                      width: 16, height: 16, borderRadius: 999,
                      background: 'var(--bg)',
                      border: `2px solid ${status.color}`,
                      boxShadow: r.status === 'In Entwicklung' ? `0 0 12px ${status.color}` : 'none',
                    }}
                  />
                  <div style={{
                    display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'center',
                    marginBottom: 8,
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: 500,
                      color: 'var(--text-muted)', letterSpacing: '0.04em',
                    }}>
                      {r.quartal}
                    </span>
                    <span style={{
                      fontFamily: 'var(--font-sans)', fontSize: '0.68rem', fontWeight: 600,
                      letterSpacing: '0.12em', textTransform: 'uppercase',
                      padding: '3px 10px', borderRadius: 999,
                      color: status.color,
                      background: status.bg,
                      border: `1px solid ${status.border}`,
                    }}>
                      {r.status}
                    </span>
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700,
                    color: 'var(--text-primary)', margin: 0, marginBottom: 4,
                    letterSpacing: '-0.018em',
                  }}>
                    {r.title}
                  </h3>
                  <p style={{
                    fontFamily: 'var(--font-sans)', fontSize: '0.95rem',
                    color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0,
                  }}>{r.text}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
