import { Link } from 'react-router-dom';
import { BRAND } from '../lib/constants';
import { ArrowUpRight } from 'lucide-react';

const LINKS = [
  { label: 'ServeFlow', href: '/produkte/serveflow' },
  { label: 'Leistungen', href: '/leistungen' },
  { label: 'Branchen', href: '/branchen' },
  { label: 'Über uns', href: '/ueber-uns' },
  { label: 'Kontakt', href: '/kontakt' },
];

const LEGAL = [
  { label: 'Impressum', href: '/impressum' },
  { label: 'Datenschutz', href: '/datenschutz' },
];

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 48px 48px' }}>

        {/* Top row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr',
            gap: '64px',
            marginBottom: '64px',
            paddingBottom: '48px',
            borderBottom: '1px solid rgba(255,255,255,0.04)',
          }}
        >
          {/* Brand */}
          <div>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.4rem',
                fontWeight: 800,
                letterSpacing: '0.2em',
                color: 'var(--color-text)',
                margin: '0 0 12px',
              }}
            >
              DRVN
            </p>
            <p
              style={{
                fontSize: '0.875rem',
                color: 'var(--color-text-muted)',
                lineHeight: 1.65,
                margin: '0 0 24px',
                maxWidth: '280px',
              }}
            >
              Branchenspezifische SaaS-Lösungen für den deutschen Mittelstand — DSGVO-konform, sofort einsetzbar.
            </p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {['DSGVO', 'Server DE', 'Made in Germany'].map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.62rem',
                    letterSpacing: '0.1em',
                    padding: '4px 10px',
                    borderRadius: '2px',
                    background: 'rgba(255,255,255,0.03)',
                    color: 'var(--color-text-muted)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  {tag.toUpperCase()}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                letterSpacing: '0.14em',
                color: 'var(--color-text-muted)',
                textTransform: 'uppercase',
                margin: '0 0 20px',
              }}
            >
              Navigation
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {LINKS.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.875rem',
                    color: 'var(--color-text-muted)',
                    textDecoration: 'none',
                    transition: 'color 0.15s',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-text)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Kontakt */}
          <div>
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                letterSpacing: '0.14em',
                color: 'var(--color-text-muted)',
                textTransform: 'uppercase',
                margin: '0 0 20px',
              }}
            >
              Kontakt
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--color-text-muted)', margin: 0 }}>
                {BRAND.email}
              </p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--color-text-muted)', margin: 0 }}>
                Stuttgart, Deutschland
              </p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--color-text-muted)', margin: 0 }}>
                Antwort in 24 Stunden
              </p>
              <Link
                to="/kontakt"
                style={{
                  marginTop: '8px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.08em',
                  color: 'var(--color-primary)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  transition: 'opacity 0.15s',
                }}
              >
                NACHRICHT SENDEN <ArrowUpRight size={11} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'var(--color-text-subtle)',
              letterSpacing: '0.05em',
            }}
          >
            &copy; {new Date().getFullYear()} DRVN — Ilias Al-Khalil. Alle Rechte vorbehalten.
          </span>
          <div style={{ display: 'flex', gap: '24px' }}>
            {LEGAL.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: 'var(--color-text-subtle)',
                  textDecoration: 'none',
                  letterSpacing: '0.05em',
                  transition: 'color 0.15s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-subtle)')}
              >
                {l.label.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
