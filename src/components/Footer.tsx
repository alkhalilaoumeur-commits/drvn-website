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
    <footer style={{ background: '#0A0A0B', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '80px 32px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '48px', marginBottom: '64px' }}>

          {/* Brand */}
          <div>
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '2px', textDecoration: 'none', fontFamily: 'var(--font-sans)', fontSize: '1.05rem', fontWeight: 700, letterSpacing: '0.02em', color: '#FAFAFA', marginBottom: '20px' }}>
              DRVN<span style={{ color: '#3B82F6' }}>.</span>
            </Link>
            <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, margin: '0 0 28px', maxWidth: '300px' }}>
              Branchenspezifische SaaS-Lösungen für deutsche Unternehmen. DSGVO-konform, sofort einsetzbar, gebaut in Stuttgart.
            </p>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              {['DSGVO', 'SERVER DE', 'MADE IN GERMANY'].map((tag) => (
                <span
                  key={tag}
                  style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.06em', padding: '4px 9px', borderRadius: '4px', background: 'rgba(255,255,255,0.03)', color: 'rgba(255,255,255,0.45)', border: '1px solid rgba(255,255,255,0.06)', fontWeight: 500 }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="eyebrow-muted" style={{ marginBottom: '18px' }}>Navigation</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {LINKS.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.15s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FAFAFA')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <p className="eyebrow-muted" style={{ marginBottom: '18px' }}>Rechtliches</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {LEGAL.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.15s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FAFAFA')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Kontakt */}
          <div>
            <p className="eyebrow-muted" style={{ marginBottom: '18px' }}>Kontakt</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a href={`mailto:${BRAND.email}`} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.76rem', color: 'rgba(255,255,255,0.55)', textDecoration: 'none', transition: 'color 0.15s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#FAFAFA')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
              >
                {BRAND.email}
              </a>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.76rem', color: 'rgba(255,255,255,0.45)', margin: 0 }}>Stuttgart, Deutschland</p>
              <motion.div whileHover={{ x: 3 }} style={{ display: 'inline-block', marginTop: '8px' }}>
                <Link to="/kontakt" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.04em', color: '#3B82F6', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px', fontWeight: 500 }}>
                  Nachricht senden <ArrowUpRight size={11} />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Giant DRVN wordmark */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ overflow: 'hidden', marginBottom: '32px', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 700,
              fontSize: 'clamp(90px, 19vw, 280px)',
              lineHeight: 0.85,
              letterSpacing: '-0.055em',
              margin: 0,
              background: 'linear-gradient(180deg, rgba(250,250,250,0.1) 0%, rgba(250,250,250,0.02) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              whiteSpace: 'nowrap',
              textAlign: 'center',
            }}
          >
            DRVN<span style={{ color: 'rgba(59,130,246,0.3)', WebkitTextFillColor: 'rgba(59,130,246,0.3)' }}>.</span>
          </p>
        </motion.div>

        {/* Bottom bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.02em' }}>
            © {new Date().getFullYear()} DRVN · Ilias Al-Khalil
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.02em' }}>
            Built in Stuttgart, Germany
          </span>
        </div>
      </div>
    </footer>
  );
}
