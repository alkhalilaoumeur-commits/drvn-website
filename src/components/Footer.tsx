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
    <footer style={{ background: '#08080A', borderTop: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}>
      {/* Huge DRVN wordmark at top of footer */}
      <div style={{ padding: '80px 40px 40px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontWeight: 900,
              fontSize: 'clamp(120px, 22vw, 320px)',
              lineHeight: 0.85,
              letterSpacing: '-0.07em',
              margin: 0,
              background: 'linear-gradient(180deg, rgba(244,244,246,0.95) 0%, rgba(244,244,246,0.1) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            DRVN<span style={{ color: '#3B82F6', WebkitTextFillColor: '#3B82F6' }}>.</span>
          </motion.h2>
        </div>
      </div>

      {/* Main grid */}
      <div style={{ padding: '48px 40px', maxWidth: '1440px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '48px', marginBottom: '56px', paddingBottom: '48px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>

          {/* Brand */}
          <div>
            <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '1.4rem', fontWeight: 900, letterSpacing: '0.05em', color: '#F4F4F6', margin: '0 0 16px' }}>
              DRVN<span style={{ color: '#3B82F6' }}>.</span>
            </p>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, margin: '0 0 24px', maxWidth: '340px' }}>
              Branchenspezifische SaaS-Lösungen für den deutschen Mittelstand —
              DSGVO-konform, sofort einsetzbar, gebaut in Stuttgart.
            </p>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              {['DSGVO', 'SERVER DE', 'MADE IN GERMANY'].map((tag) => (
                <span
                  key={tag}
                  style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.12em', padding: '4px 10px', borderRadius: '2px', background: 'rgba(255,255,255,0.03)', color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="mono-label" style={{ marginBottom: '20px' }}>Navigation</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {LINKS.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.15s', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#F4F4F6')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <p className="mono-label" style={{ marginBottom: '20px' }}>Rechtliches</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {LEGAL.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.15s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#F4F4F6')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Kontakt */}
          <div>
            <p className="mono-label" style={{ marginBottom: '20px' }}>Kontakt</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'rgba(255,255,255,0.55)', margin: 0 }}>{BRAND.email}</p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'rgba(255,255,255,0.55)', margin: 0 }}>Stuttgart, DE</p>
              <motion.div whileHover={{ x: 3 }} style={{ display: 'inline-block', marginTop: '8px' }}>
                <Link to="/kontakt" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.12em', color: '#3B82F6', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  NACHRICHT SENDEN <ArrowUpRight size={11} />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            © {new Date().getFullYear()} DRVN · Ilias Al-Khalil · All rights reserved
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Built in Stuttgart 🇩🇪
          </span>
        </div>
      </div>
    </footer>
  );
}
