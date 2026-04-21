import { Link } from 'react-router-dom';
import { NAVIGATION, BRAND } from '../lib/constants';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <p className="text-2xl font-bold tracking-[0.15em] text-text mb-3">DRVN</p>
            <p className="text-sm text-text-muted leading-relaxed">
              {BRAND.claim}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-sm font-semibold text-text mb-3">Navigation</p>
            <div className="space-y-2">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="block text-sm text-text-muted hover:text-text transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Kontakt */}
          <div>
            <p className="text-sm font-semibold text-text mb-3">Kontakt</p>
            <div className="space-y-2 text-sm text-text-muted">
              <p>{BRAND.email}</p>
              <p>Einzelunternehmen</p>
              <p>Stuttgart, Deutschland</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text-muted">
          <span>&copy; {new Date().getFullYear()} DRVN — Al-Khalil Aoumeur. Alle Rechte vorbehalten.</span>
          <div className="flex items-center gap-4">
            <Link to="/impressum" className="hover:text-text transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-text transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
