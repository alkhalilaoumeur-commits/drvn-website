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
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
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
      {/* Scroll progress */}
      <motion.div className="scroll-progress" style={{ scaleX }} />

      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
          background: scrolled ? 'rgba(8,8,10,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(18px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(18px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
          transition: 'background 0.3s, border-color 0.3s',
        }}
      >
        <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 40px', height: '72px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logo */}
          <Link to="/" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 900, letterSpacing: '0.08em', color: '#F4F4F6', textDecoration: 'none', fontStyle: 'italic' }}>
            DRVN<span style={{ color: '#3B82F6' }}>.</span>
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '36px' }} className="hidden md:flex">
            <div ref={dropdownRef} style={{ position: 'relative' }}>
              <button
                onClick={() => setProdukteOffen(!produkteOffen)}
                style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', fontWeight: 500, background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', color: location.pathname.startsWith('/produkte') ? '#F4F4F6' : 'rgba(255,255,255,0.55)', transition: 'color 0.15s' }}
              >
                Produkte
                <motion.span animate={{ rotate: produkteOffen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown size={13} />
                </motion.span>
              </button>

              <AnimatePresence>
                {produkteOffen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    style={{ position: 'absolute', top: 'calc(100% + 14px)', left: '50%', transform: 'translateX(-50%)', width: '300px', background: 'rgba(15,15,19,0.95)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '4px', boxShadow: '0 24px 60px rgba(0,0,0,0.5)', overflow: 'hidden' }}
                  >
                    <div style={{ padding: '8px' }}>
                      {PRODUKTE.map((p) => (
                        <Link
                          key={p.href}
                          to={p.href}
                          style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', borderRadius: '2px', textDecoration: 'none', transition: 'background 0.12s' }}
                          onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.04)')}
                          onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                        >
                          <div style={{ width: '34px', height: '34px', background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{p.icon}</div>
                          <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', fontWeight: 600, color: '#F4F4F6' }}>{p.name}</span>
                              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', letterSpacing: '0.1em', padding: '1px 5px', borderRadius: '2px', background: 'rgba(34,197,94,0.1)', color: '#22C55E', border: '1px solid rgba(34,197,94,0.25)' }}>LIVE</span>
                            </div>
                            <p style={{ fontSize: '0.74rem', color: 'rgba(255,255,255,0.45)', margin: 0 }}>{p.beschreibung}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '10px 20px' }}>
                      <p style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.35)', margin: 0, textTransform: 'uppercase' }}>
                        Weitere Branchen bald —{' '}
                        <Link to="/branchen" style={{ color: '#3B82F6', textDecoration: 'none' }}>alle ansehen →</Link>
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
                style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', fontWeight: 500, textDecoration: 'none', color: location.pathname === item.href ? '#F4F4F6' : 'rgba(255,255,255,0.55)', transition: 'color 0.15s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#F4F4F6')}
                onMouseLeave={(e) => (e.currentTarget.style.color = location.pathname === item.href ? '#F4F4F6' : 'rgba(255,255,255,0.55)')}
              >
                {item.label}
              </Link>
            ))}

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link to="/kontakt" className="btn-primary" style={{ padding: '0.55rem 1.25rem', fontSize: '0.8rem' }}>Kontakt →</Link>
            </motion.div>
          </div>

          <button onClick={() => setOffen(!offen)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#F4F4F6', display: 'none' }} className="md:!hidden !block">
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
              style={{ overflow: 'hidden', background: 'rgba(8,8,10,0.95)', backdropFilter: 'blur(16px)', borderTop: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div style={{ padding: '16px 24px 20px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {PRODUKTE.map((p) => (
                  <Link key={p.href} to={p.href} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 0', textDecoration: 'none', color: 'rgba(255,255,255,0.75)', fontFamily: 'var(--font-sans)', fontSize: '0.9rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    {p.name}
                    <span style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: '0.58rem', letterSpacing: '0.1em', padding: '1px 6px', borderRadius: '2px', background: 'rgba(34,197,94,0.1)', color: '#22C55E', border: '1px solid rgba(34,197,94,0.25)' }}>LIVE</span>
                  </Link>
                ))}
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '8px', paddingTop: '12px' }}>
                  {NAVIGATION.filter((i) => i.href !== '/').map((item) => (
                    <Link key={item.href} to={item.href} style={{ display: 'block', padding: '10px 0', textDecoration: 'none', fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)' }}>{item.label}</Link>
                  ))}
                </div>
                <Link to="/kontakt" className="btn-primary" style={{ marginTop: '12px', justifyContent: 'center' }}>Kontakt →</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
