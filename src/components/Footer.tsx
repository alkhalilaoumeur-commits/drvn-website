import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { BRAND } from '../lib/constants';

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
    <footer style={{ borderTop: '1px solid var(--color-border)', background: 'var(--color-surface)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 40px 48px' }}>

        {/* Main grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '64px', marginBottom: '56px', paddingBottom: '48px', borderBottom: '1px solid var(--color-border)' }}>

          {/* Brand */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 900, letterSpacing: '0.08em', color: 'var(--color-text)', margin: '0 0 12px', fontStyle: 'italic' }}
            >
              DRVN
            </motion.p>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.65, margin: '0 0 24px', maxWidth: '280px' }}>
              Branchenspezifische SaaS-Lösungen für den deutschen Mittelstand — DSGVO-konform, sofort einsetzbar.
            </p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {['DSGVO', 'Server DE', 'Made in Germany'].map((tag) => (
                <span
                  key={tag}
                  style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.1em', padding: '4px 10px', borderRadius: '4px', background: 'var(--color-bg)', color: 'var(--color-text-subtle)', border: '1px solid var(--color-border)' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.14em', color: 'var(--color-text-subtle)', textTransform: 'uppercase', margin: '0 0 20px' }}>
              Navigation
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {LINKS.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'var(--color-text-muted)', textDecoration: 'none', transition: 'color 0.15s' }}
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
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.14em', color: 'var(--color-text-subtle)', textTransform: 'uppercase', margin: '0 0 20px' }}>
              Kontakt
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--color-text-muted)', margin: 0 }}>{BRAND.email}</p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--color-text-muted)', margin: 0 }}>Stuttgart, Deutschland</p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--color-text-muted)', margin: 0 }}>Antwort in 24 Stunden</p>
              <motion.div whileHover={{ x: 2 }} style={{ display: 'inline-block' }}>
                <Link to="/kontakt" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.08em', color: 'var(--color-primary)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px', marginTop: '8px' }}>
                  NACHRICHT SENDEN <ArrowUpRight size={11} />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-text-subtle)', letterSpacing: '0.04em' }}>
            &copy; {new Date().getFullYear()} DRVN — Ilias Al-Khalil. Alle Rechte vorbehalten.
          </span>
          <div style={{ display: 'flex', gap: '24px' }}>
            {LEGAL.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-text-subtle)', textDecoration: 'none', letterSpacing: '0.04em', transition: 'color 0.15s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-subtle)')}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
