import { Link } from 'react-router-dom';
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
    <footer className="border-t border-border">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <p className="text-xl font-bold tracking-[0.15em] text-text mb-3">DRVN</p>
            <p className="text-sm text-text-muted leading-relaxed max-w-xs">
              Branchenspezifische SaaS-Lösungen für den deutschen Mittelstand.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold text-text uppercase tracking-wider mb-4">Navigation</p>
            <div className="space-y-2.5">
              {LINKS.map((l) => (
                <Link key={l.href} to={l.href} className="block text-sm text-text-muted hover:text-text transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Kontakt */}
          <div>
            <p className="text-xs font-semibold text-text uppercase tracking-wider mb-4">Kontakt</p>
            <div className="space-y-2 text-sm text-text-muted">
              <p>{BRAND.email}</p>
              <p>Stuttgart, Deutschland</p>
              <p className="pt-1">Antwort in 24 Stunden</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text-muted">
          <span>&copy; {new Date().getFullYear()} DRVN — Al-Khalil Aoumeur. Alle Rechte vorbehalten.</span>
          <div className="flex items-center gap-5">
            {LEGAL.map((l) => (
              <Link key={l.href} to={l.href} className="hover:text-text transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
