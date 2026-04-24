import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Zap, Monitor } from 'lucide-react';
import { NAVIGATION } from '../lib/constants';

const PRODUKTE = [
  {
    name: 'ServeFlow',
    beschreibung: 'Digitales Betriebssystem für Restaurants',
    href: '/produkte/serveflow',
    icon: <Zap size={14} className="text-primary" />,
    status: 'Live',
  },
  {
    name: 'Webseiten',
    beschreibung: 'Professionelle Webseiten & Landingpages',
    href: '/leistungen/webseiten',
    icon: <Monitor size={14} className="text-secondary" />,
    status: 'Live',
  },
];

export default function Navbar() {
  const [offen, setOffen] = useState(false);
  const [produkteOffen, setProdukteOffen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProdukteOffen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setProdukteOffen(false);
    setOffen(false);
  }, [location.pathname]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(6,6,9,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-[68px] flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.35rem',
            fontWeight: 800,
            letterSpacing: '0.2em',
            color: 'var(--color-text)',
            textDecoration: 'none',
          }}
        >
          DRVN
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {/* Produkte Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setProdukteOffen(!produkteOffen)}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.875rem',
                fontWeight: 500,
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: location.pathname.startsWith('/produkte')
                  ? 'var(--color-primary)'
                  : 'var(--color-text-muted)',
                transition: 'color 0.15s',
                padding: '4px 0',
              }}
            >
              Produkte
              <ChevronDown
                size={13}
                style={{
                  transform: produkteOffen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s',
                }}
              />
            </button>

            {produkteOffen && (
              <div
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 14px)',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '280px',
                  background: 'var(--color-surface)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '6px',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                  overflow: 'hidden',
                }}
              >
                <div style={{ padding: '8px' }}>
                  {PRODUKTE.map((p) => (
                    <Link
                      key={p.href}
                      to={p.href}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '10px 12px',
                        borderRadius: '4px',
                        textDecoration: 'none',
                        transition: 'background 0.15s',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.04)')}
                      onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                    >
                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          background: 'rgba(59,130,246,0.08)',
                          borderRadius: '4px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        {p.icon}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text)', fontFamily: 'var(--font-display)' }}>
                            {p.name}
                          </span>
                          <span
                            style={{
                              fontSize: '0.6rem',
                              fontFamily: 'var(--font-mono)',
                              letterSpacing: '0.08em',
                              padding: '1px 6px',
                              borderRadius: '2px',
                              background: 'rgba(34,197,94,0.1)',
                              color: '#22C55E',
                              border: '1px solid rgba(34,197,94,0.2)',
                            }}
                          >
                            LIVE
                          </span>
                        </div>
                        <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', margin: 0 }}>
                          {p.beschreibung}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
                <div
                  style={{
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    padding: '10px 20px',
                  }}
                >
                  <p style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', margin: 0, fontFamily: 'var(--font-mono)' }}>
                    Weitere Branchen kommen bald —{' '}
                    <Link to="/branchen" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>
                      alle ansehen →
                    </Link>
                  </p>
                </div>
              </div>
            )}
          </div>

          {NAVIGATION.filter((i) => i.href !== '/').map((item) => (
            <Link
              key={item.href}
              to={item.href}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.875rem',
                fontWeight: 500,
                textDecoration: 'none',
                color: location.pathname === item.href
                  ? 'var(--color-text)'
                  : 'var(--color-text-muted)',
                transition: 'color 0.15s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-text)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = location.pathname === item.href ? 'var(--color-text)' : 'var(--color-text-muted)')}
            >
              {item.label}
            </Link>
          ))}

          <Link to="/kontakt" className="btn-primary" style={{ padding: '0.55rem 1.25rem', fontSize: '0.8rem' }}>
            Kontakt
          </Link>
        </div>

        {/* Mobile Burger */}
        <button
          onClick={() => setOffen(!offen)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--color-text-muted)',
            padding: '4px',
            display: 'none',
          }}
          className="md:!hidden !block"
        >
          {offen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {offen && (
        <div
          style={{
            background: 'var(--color-bg)',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
          }}
        >
          <div style={{ padding: '16px 24px 20px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <p className="mono-label" style={{ marginBottom: '8px', marginTop: '4px' }}>Produkte</p>
            {PRODUKTE.map((p) => (
              <Link
                key={p.href}
                to={p.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '10px 0',
                  textDecoration: 'none',
                  color: 'var(--color-text-muted)',
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.9rem',
                  borderBottom: '1px solid rgba(255,255,255,0.04)',
                }}
              >
                {p.name}
                <span
                  style={{
                    marginLeft: 'auto',
                    fontSize: '0.6rem',
                    fontFamily: 'var(--font-mono)',
                    padding: '1px 6px',
                    borderRadius: '2px',
                    background: 'rgba(34,197,94,0.1)',
                    color: '#22C55E',
                    border: '1px solid rgba(34,197,94,0.2)',
                  }}
                >
                  LIVE
                </span>
              </Link>
            ))}

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '8px', paddingTop: '12px' }}>
              {NAVIGATION.filter((i) => i.href !== '/').map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  style={{
                    display: 'block',
                    padding: '10px 0',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.9rem',
                    color: location.pathname === item.href ? 'var(--color-text)' : 'var(--color-text-muted)',
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <Link to="/kontakt" className="btn-primary" style={{ marginTop: '8px', justifyContent: 'center' }}>
              Kontakt
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
