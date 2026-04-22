import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Zap, Monitor } from 'lucide-react';
import { NAVIGATION } from '../lib/constants';

const PRODUKTE = [
  {
    name: 'ServeFlow',
    beschreibung: 'Digitales Betriebssystem für Restaurants',
    href: '/produkte/serveflow',
    icon: <Zap size={16} className="text-primary" />,
    status: 'Live',
  },
  {
    name: 'Webseiten',
    beschreibung: 'Professionelle Webseiten & Landingpages',
    href: '/leistungen/webseiten',
    icon: <Monitor size={16} className="text-secondary" />,
    status: 'Live',
  },
];

export default function Navbar() {
  const [offen, setOffen] = useState(false);
  const [produkteOffen, setProdukteOffen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-[0.15em] text-text">
          DRVN
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {/* Produkte Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setProdukteOffen(!produkteOffen)}
              className={`flex items-center gap-1 text-sm transition-colors ${
                location.pathname.startsWith('/produkte')
                  ? 'text-primary font-medium'
                  : 'text-text-muted hover:text-text'
              }`}
            >
              Produkte
              <ChevronDown
                size={14}
                className={`transition-transform ${produkteOffen ? 'rotate-180' : ''}`}
              />
            </button>

            {produkteOffen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-surface border border-border rounded-2xl shadow-2xl overflow-hidden">
                <div className="p-2">
                  {PRODUKTE.map((p) => (
                    <Link
                      key={p.href}
                      to={p.href}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-bg transition-colors group"
                    >
                      <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        {p.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-text">{p.name}</span>
                          <span className={`text-[10px] rounded-full px-2 py-0.5 font-medium border ${p.status === 'Live' ? 'bg-success/10 text-success border-success/20' : 'bg-surface text-text-muted border-border'}`}>
                            {p.status}
                          </span>
                        </div>
                        <p className="text-xs text-text-muted truncate">{p.beschreibung}</p>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="border-t border-border px-4 py-3">
                  <p className="text-xs text-text-muted">
                    Weitere Branchen kommen bald —{' '}
                    <Link to="/branchen" className="text-primary hover:underline">
                      alle ansehen
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
              className={`text-sm transition-colors ${
                location.pathname === item.href
                  ? 'text-primary font-medium'
                  : 'text-text-muted hover:text-text'
              }`}
            >
              {item.label}
            </Link>
          ))}

          <Link
            to="/kontakt"
            className="bg-primary hover:bg-primary/90 text-white text-sm font-medium px-5 py-2 rounded-lg transition-all"
          >
            Kontakt
          </Link>
        </div>

        {/* Mobile Burger */}
        <button
          onClick={() => setOffen(!offen)}
          className="md:hidden text-text-muted hover:text-text transition-colors"
        >
          {offen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {offen && (
        <div className="md:hidden bg-surface border-b border-border">
          <div className="px-6 py-4 space-y-1">
            <p className="text-xs text-text-muted font-medium uppercase tracking-wider mb-2 pt-1">Produkte</p>
            {PRODUKTE.map((p) => (
              <Link
                key={p.href}
                to={p.href}
                className="flex items-center gap-3 py-2.5 text-sm text-text-muted hover:text-text transition-colors"
              >
                <div className="w-7 h-7 bg-primary/10 rounded-lg flex items-center justify-center">
                  {p.icon}
                </div>
                {p.name}
                <span className="text-[10px] bg-success/10 text-success border border-success/20 rounded-full px-2 py-0.5 ml-auto">
                  {p.status}
                </span>
              </Link>
            ))}

            <div className="border-t border-border my-2 pt-2">
              {NAVIGATION.filter((i) => i.href !== '/').map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`block text-sm py-2.5 transition-colors ${
                    location.pathname === item.href
                      ? 'text-primary font-medium'
                      : 'text-text-muted hover:text-text'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <Link
              to="/kontakt"
              className="block bg-primary hover:bg-primary/90 text-white text-sm font-medium px-5 py-2.5 rounded-lg text-center transition-all mt-2"
            >
              Kontakt
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
