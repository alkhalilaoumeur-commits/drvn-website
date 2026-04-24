import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Zap, Monitor } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { NAVIGATION } from '../lib/constants';

const PRODUKTE = [
  { name: 'ServeFlow', beschreibung: 'Digitales Betriebssystem für Restaurants', href: '/produkte/serveflow', icon: <Zap size={14} className="text-primary" />, status: 'Live' },
  { name: 'Webseiten', beschreibung: 'Professionelle Webseiten & Landingpages', href: '/leistungen/webseiten', icon: <Monitor size={14} className="text-secondary" />, status: 'Live' },
];

export default function Navbar() {
  const [offen, setOffen] = useState(false);
  const [produkteOffen, setProdukteOffen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setProdukteOffen(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  useEffect(() => { setProdukteOffen(false); setOffen(false); }, [location.pathname]);

  return (
    <>
      {/* Scroll progress */}
      <motion.div
        className="scroll-progress"
        style={{ scaleX }}
      />

      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: 'rgba(250,250,247,0.88)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logo */}
          <Link to="/" style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 900, letterSpacing: '0.1em', color: 'var(--color-text)', textDecoration: 'none', fontStyle: 'italic' }}>
            DRVN
          </Link>

          {/* Desktop */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="hidden md:flex">
            <div ref={dropdownRef} style={{ position: 'relative' }}>
              <button
                onClick={() => setProdukteOffen(!produkteOffen)}
                style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', fontWeight: 500, background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', color: location.pathname.startsWith('/produkte') ? 'var(--color-primary)' : 'var(--color-text-muted)', transition: 'color 0.15s' }}
              >
                Produkte
                <motion.span animate={{ rotate: produkteOffen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown size={13} />
                </motion.span>
              </button>

              <AnimatePresence>
                {produkteOffen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                    style={{ position: 'absolute', top: 'calc(100% + 14px)', left: '50%', transform: 'translateX(-50%)', width: '280px', background: '#fff', border: '1px solid var(--color-border)', borderRadius: '10px', boxShadow: '0 16px 48px rgba(0,0,0,0.1)', overflow: 'hidden' }}
                  >
                    <div style={{ padding: '8px' }}>
                      {PRODUKTE.map((p) => (
                        <Link
                          key={p.href}
                          to={p.href}
                          style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 12px', borderRadius: '6px', textDecoration: 'none', transition: 'background 0.12s' }}
                          onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--color-bg)')}
                          onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                        >
                          <div style={{ width: '32px', height: '32px', background: 'rgba(37,99,235,0.07)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{p.icon}</div>
                          <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text)' }}>{p.name}</span>
                              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', letterSpacing: '0.1em', padding: '1px 6px', borderRadius: '3px', background: 'rgba(22,163,74,0.08)', color: '#16A34A', border: '1px solid rgba(22,163,74,0.2)' }}>LIVE</span>
                            </div>
                            <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', margin: 0 }}>{p.beschreibung}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div style={{ borderTop: '1px solid var(--color-border)', padding: '10px 20px' }}>
                      <p style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--color-text-subtle)', margin: 0 }}>
                        Weitere Branchen bald —{' '}
                        <Link to="/branchen" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>alle ansehen →</Link>
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {NAVIGATION.filter((i) => i.href !== '/').map((item) => (
              <Link
                key={item.href}
                to={item.href}
                style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', fontWeight: 500, textDecoration: 'none', color: location.pathname === item.href ? 'var(--color-text)' : 'var(--color-text-muted)', transition: 'color 0.15s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-text)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = location.pathname === item.href ? 'var(--color-text)' : 'var(--color-text-muted)')}
              >
                {item.label}
              </Link>
            ))}

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link to="/kontakt" className="btn-primary" style={{ padding: '0.5rem 1.2rem', fontSize: '0.8rem' }}>Kontakt</Link>
            </motion.div>
          </div>

          <button onClick={() => setOffen(!offen)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-muted)', display: 'none' }} className="md:!hidden !block">
            {offen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {offen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              style={{ overflow: 'hidden', background: '#fff', borderTop: '1px solid var(--color-border)' }}
            >
              <div style={{ padding: '16px 24px 20px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {PRODUKTE.map((p) => (
                  <Link key={p.href} to={p.href} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 0', textDecoration: 'none', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '0.9rem', borderBottom: '1px solid var(--color-border-light)' }}>
                    {p.name}
                    <span style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: '0.58rem', letterSpacing: '0.1em', padding: '1px 6px', borderRadius: '3px', background: 'rgba(22,163,74,0.08)', color: '#16A34A', border: '1px solid rgba(22,163,74,0.2)' }}>LIVE</span>
                  </Link>
                ))}
                <div style={{ borderTop: '1px solid var(--color-border)', marginTop: '8px', paddingTop: '12px' }}>
                  {NAVIGATION.filter((i) => i.href !== '/').map((item) => (
                    <Link key={item.href} to={item.href} style={{ display: 'block', padding: '10px 0', textDecoration: 'none', fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>{item.label}</Link>
                  ))}
                </div>
                <Link to="/kontakt" className="btn-primary" style={{ marginTop: '8px', justifyContent: 'center' }}>Kontakt</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
