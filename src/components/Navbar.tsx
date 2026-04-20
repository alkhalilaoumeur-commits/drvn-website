import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAVIGATION } from '../lib/constants';

export default function Navbar() {
  const [offen, setOffen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-[0.15em] text-text">
          DRVN
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {NAVIGATION.map((item) => (
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
          <div className="px-6 py-4 space-y-3">
            {NAVIGATION.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setOffen(false)}
                className={`block text-sm py-2 transition-colors ${
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
              onClick={() => setOffen(false)}
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
