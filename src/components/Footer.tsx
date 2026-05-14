import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, MapPin } from 'lucide-react';
import { BRAND } from '../lib/constants';
import { viewport } from '../lib/animations';

const NAV = [
  { label: 'ServeFlow', href: '/serveflow' },
  { label: 'Web',       href: '/web' },
  { label: 'Ventures',  href: '/ventures' },
  { label: 'News',      href: '/news' },
  { label: 'Kontakt',   href: '/kontakt' },
];

const LEGAL = [
  { label: 'Impressum',  href: '/impressum' },
  { label: 'Datenschutz', href: '/datenschutz' },
];

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', background: 'var(--surface)' }}>
      <div className="container-x" style={{ paddingTop: 96, paddingBottom: 40 }}>

        <div
          style={{ display: 'grid', gap: 48, gridTemplateColumns: '1fr', marginBottom: 64 }}
          className="footer-grid"
        >
          {/* Brand */}
          <div style={{ maxWidth: 340 }}>
            <Link
              to="/"
              style={{
                display: 'inline-flex', alignItems: 'baseline',
                fontFamily: 'var(--font-display)', fontSize: '1.65rem', fontWeight: 800,
                letterSpacing: '-0.04em', textDecoration: 'none', marginBottom: 20,
              }}
            >
              <span className="wordmark-gradient">drvn</span>
              <span style={{ color: 'var(--accent)', fontSize: '0.55em', marginLeft: 2 }}>●</span>
            </Link>

            <p style={{
              fontFamily: 'var(--font-sans)', fontSize: '0.95rem',
              color: 'var(--text-secondary)', lineHeight: 1.6,
              margin: 0, marginBottom: 24,
            }}>
              Wir bauen Dinge die funktionieren. Digitale Produkte, Websites und Software — direkt aus Stuttgart in den DACH-Raum.
            </p>

            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {['DSGVO', 'SERVER DE', 'STUTTGART'].map((tag) => (
                <span key={tag} className="badge">{tag}</span>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="eyebrow-muted" style={{ marginBottom: 18 }}>Navigation</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {NAV.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  style={{
                    fontFamily: 'var(--font-sans)', fontSize: '0.95rem',
                    color: 'var(--text-secondary)', textDecoration: 'none',
                    transition: 'color 0.18s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <p className="eyebrow-muted" style={{ marginBottom: 18 }}>Rechtliches</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {LEGAL.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  style={{
                    fontFamily: 'var(--font-sans)', fontSize: '0.95rem',
                    color: 'var(--text-secondary)', textDecoration: 'none',
                    transition: 'color 0.18s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Kontakt */}
          <div>
            <p className="eyebrow-muted" style={{ marginBottom: 18 }}>Kontakt</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a
                href={`mailto:${BRAND.email}`}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  fontFamily: 'var(--font-sans)', fontSize: '0.92rem',
                  color: 'var(--text-secondary)', textDecoration: 'none',
                  transition: 'color 0.18s', wordBreak: 'break-all',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                <Mail size={14} style={{ flexShrink: 0 }} /> {BRAND.email}
              </a>
              <p style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                fontFamily: 'var(--font-sans)', fontSize: '0.92rem',
                color: 'var(--text-muted)', margin: 0,
              }}>
                <MapPin size={14} style={{ flexShrink: 0 }} /> {BRAND.ort}
              </p>
              <motion.div whileHover={{ x: 3 }} style={{ display: 'inline-block', marginTop: 8 }}>
                <Link
                  to="/kontakt"
                  style={{
                    fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 600,
                    color: 'var(--accent)', textDecoration: 'none',
                    display: 'inline-flex', alignItems: 'center', gap: 4,
                  }}
                >
                  Projekt starten <ArrowUpRight size={13} />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Giant wordmark */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ overflow: 'hidden', marginBottom: 28, paddingTop: 28, borderTop: '1px solid var(--border)' }}
        >
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(90px, 21vw, 320px)',
              lineHeight: 0.82,
              letterSpacing: '-0.06em',
              margin: 0,
              whiteSpace: 'nowrap',
              textAlign: 'center',
              userSelect: 'none',
            }}
            className="wordmark-fade"
            aria-hidden="true"
          >
            drvn●
          </p>
        </motion.div>

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            flexWrap: 'wrap', gap: 12,
            paddingTop: 24, borderTop: '1px solid var(--border)',
          }}
        >
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.02em' }}>
            © {new Date().getFullYear()} drvn · Al-Khalil Aoumeur
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.02em' }}>
            Made in Stuttgart 🇩🇪
          </span>
        </div>
      </div>

      <style>{`
        @media (min-width: 720px) {
          .footer-grid {
            grid-template-columns: 1.8fr 1fr 1fr 1.2fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
