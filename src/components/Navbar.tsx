import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Zap, Monitor } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { NAVIGATION } from '../lib/constants';

const PRODUKTE = [
  { name: 'ServeFlow', beschreibung: 'Digitales Betriebssystem für Restaurants', href: '/produkte/serveflow', icon: <Zap size={14} style={{ color: '#3B82F6' }} />, status: 'Live' },
  { name: 'Webseiten', beschreibung: 'Professionelle Webseiten & Landingpages', href: '/leistungen/webseiten', icon: <Monitor size={14} style={{ color: '#06B6D4' }} />, status: 'Live' },
];

export default function Navbar() {
  const [offen, setOffen] = useState(false);
  const [produkteOffen, setProdukteOffen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
      <motion.div className="scroll-progress" style={{ scaleX }} />

      <motion.nav
        initial={{ y: -12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
          background: scrolled ? 'rgba(10,10,11,0.72)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px) saturate(1.5)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px) saturate(1.5)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
          transition: 'background 0.3s, border-color 0.3s, backdrop-filter 0.3s',
        }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 32px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '2px', textDecoration: 'none', fontFamily: 'var(--font-sans)', fontSize: '1.05rem', fontWeight: 700, letterSpacing: '0.02em', color: '#FAFAFA' }}>
            DRVN<span style={{ color: '#3B82F6' }}>.</span>
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }} className="hidden md:flex">
            <div ref={dropdownRef} style={{ position: 'relative' }}>
              <button
                onClick={() => setProdukteOffen(!produkteOffen)}
                style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', fontWeight: 500, background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', color: location.pathname.startsWith('/produkte') ? '#FAFAFA' : 'rgba(255,255,255,0.58)', transition: 'color 0.15s', padding: '8px 14px', borderRadius: '6px' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#FAFAFA'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = location.pathname.startsWith('/produkte') ? '#FAFAFA' : 'rgba(255,255,255,0.58)'; e.currentTarget.style.background = 'transparent'; }}
              >
                Produkte
                <motion.span animate={{ rotate: produkteOffen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown size={13} />
                </motion.span>
              </button>

              <AnimatePresence>
                {produkteOffen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                    style={{ position: 'absolute', top: 'calc(100% + 10px)', left: '50%', transform: 'translateX(-50%)', width: '320px', background: 'rgba(17,17,19,0.95)', backdropFilter: 'blur(24px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', boxShadow: '0 24px 64px rgba(0,0,0,0.6)', overflow: 'hidden' }}
                  >
                    <div style={{ padding: '6px' }}>
                      {PRODUKTE.map((p) => (
                        <Link
                          key={p.href}
                          to={p.href}
                          style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', borderRadius: '6px', textDecoration: 'none', transition: 'background 0.12s' }}
                          onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.04)')}
                          onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                        >
                          <div style={{ width: '32px', height: '32px', background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{p.icon}</div>
                          <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', fontWeight: 500, color: '#FAFAFA', letterSpacing: '-0.011em' }}>{p.name}</span>
                              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.56rem', fontWeight: 500, padding: '1px 5px', borderRadius: '3px', background: 'rgba(34,197,94,0.1)', color: '#22C55E', border: '1px solid rgba(34,197,94,0.25)', letterSpacing: '0.05em' }}>LIVE</span>
                            </div>
                            <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', margin: 0, marginTop: '2px' }}>{p.beschreibung}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '10px 18px' }}>
                      <Link to="/branchen" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', letterSpacing: '0.02em' }}>
                        Alle Branchen ansehen →
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {NAVIGATION.filter((i) => i.href !== '/').map((item) => (
              <Link
                key={item.href}
                to={item.href}
                style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', fontWeight: 500, textDecoration: 'none', color: location.pathname === item.href ? '#FAFAFA' : 'rgba(255,255,255,0.58)', transition: 'color 0.15s, background 0.15s', padding: '8px 14px', borderRadius: '6px' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#FAFAFA'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = location.pathname === item.href ? '#FAFAFA' : 'rgba(255,255,255,0.58)'; e.currentTarget.style.background = 'transparent'; }}
              >
                {item.label}
              </Link>
            ))}

            <div style={{ width: '12px' }} />

            <Link to="/kontakt" className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
              Kontakt
            </Link>
          </div>

          <button onClick={() => setOffen(!offen)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#FAFAFA', display: 'none' }} className="md:!hidden !block">
            {offen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {offen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22 }}
              style={{ overflow: 'hidden', background: 'rgba(10,10,11,0.95)', backdropFilter: 'blur(16px)', borderTop: '1px solid rgba(255,255,255,0.05)' }}
            >
              <div style={{ padding: '12px 24px 20px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                {PRODUKTE.map((p) => (
                  <Link key={p.href} to={p.href} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 0', textDecoration: 'none', color: 'rgba(255,255,255,0.75)', fontFamily: 'var(--font-sans)', fontSize: '0.9rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    {p.name}
                    <span style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: '0.58rem', padding: '1px 6px', borderRadius: '3px', background: 'rgba(34,197,94,0.1)', color: '#22C55E', border: '1px solid rgba(34,197,94,0.25)' }}>LIVE</span>
                  </Link>
                ))}
                <div style={{ marginTop: '8px' }}>
                  {NAVIGATION.filter((i) => i.href !== '/').map((item) => (
                    <Link key={item.href} to={item.href} style={{ display: 'block', padding: '10px 0', textDecoration: 'none', fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)' }}>{item.label}</Link>
                  ))}
                </div>
                <Link to="/kontakt" className="btn-primary" style={{ marginTop: '12px', justifyContent: 'center' }}>Kontakt</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
