import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAVIGATION } from '../lib/constants';

export default function Navbar() {
  const [offen, setOffen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOffen(false); }, [pathname]);

  const isActive = (href: string) => {
    if (href === '/serveflow') return pathname === '/serveflow' || pathname === '/produkte/serveflow';
    if (href === '/web') return pathname === '/web' || pathname === '/leistungen/webseiten' || pathname === '/leistungen';
    return pathname === href;
  };

  return (
    <motion.nav
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        background: scrolled ? 'rgba(10, 9, 6, 0.78)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(1.6)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(1.6)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'background 0.3s, border-color 0.3s, backdrop-filter 0.3s, padding 0.3s',
      }}
    >
      <div
        className="container-x"
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          height: scrolled ? 60 : 72,
          transition: 'height 0.3s ease',
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          aria-label="drvn Startseite"
          style={{
            display: 'inline-flex', alignItems: 'baseline', gap: 0, textDecoration: 'none',
            fontFamily: 'var(--font-display)', fontSize: '1.45rem', fontWeight: 800,
            letterSpacing: '-0.04em', lineHeight: 1,
          }}
        >
          <span className="wordmark-gradient">drvn</span>
          <span style={{ color: 'var(--accent)', fontSize: '0.55em', marginLeft: 2 }}>●</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex" style={{ alignItems: 'center', gap: 4 }}>
          {NAVIGATION.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                to={item.href}
                style={{
                  position: 'relative',
                  fontFamily: 'var(--font-sans)', fontSize: '0.92rem', fontWeight: 500,
                  textDecoration: 'none',
                  color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
                  padding: '8px 14px', borderRadius: 8,
                  transition: 'color 0.18s, background 0.18s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text-primary)'; }}
                onMouseLeave={(e) => { if (!active) e.currentTarget.style.color = 'var(--text-secondary)'; }}
              >
                {item.label}
                {active && (
                  <motion.span
                    layoutId="nav-dot"
                    style={{
                      position: 'absolute',
                      bottom: -2, left: '50%', transform: 'translateX(-50%)',
                      width: 4, height: 4, borderRadius: 999,
                      background: 'var(--accent)',
                    }}
                  />
                )}
              </Link>
            );
          })}

          <div style={{ width: 12 }} />

          <Link
            to="/kontakt"
            className="btn-primary"
            style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
          >
            Kontakt
            <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOffen((s) => !s)}
          aria-label={offen ? 'Menü schließen' : 'Menü öffnen'}
          className="md:!hidden"
          style={{
            display: 'inline-flex',
            background: 'transparent', border: '1px solid var(--border-high)',
            cursor: 'pointer', color: 'var(--text-primary)',
            padding: 9, borderRadius: 8,
          }}
        >
          {offen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {offen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{
              overflow: 'hidden',
              background: 'rgba(10, 9, 6, 0.96)',
              backdropFilter: 'blur(20px)',
              borderTop: '1px solid var(--border)',
            }}
          >
            <div className="container-x" style={{ padding: '20px 1.25rem 28px', display: 'flex', flexDirection: 'column', gap: 4 }}>
              {NAVIGATION.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '14px 0',
                    textDecoration: 'none',
                    color: isActive(item.href) ? 'var(--accent)' : 'var(--text-primary)',
                    fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700,
                    letterSpacing: '-0.02em',
                    borderBottom: '1px solid var(--border)',
                  }}
                >
                  {item.label}
                  <ArrowUpRight size={20} style={{ color: 'var(--text-muted)' }} />
                </Link>
              ))}
              <Link
                to="/kontakt"
                className="btn-primary"
                style={{ marginTop: 16, width: '100%', justifyContent: 'center' }}
              >
                Kontakt aufnehmen
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
