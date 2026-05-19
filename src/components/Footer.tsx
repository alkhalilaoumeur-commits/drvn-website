import { Link } from 'react-router-dom'
import { BRAND } from '../lib/constants'

const COL_NAV = [
  { label: 'serveflow', href: '/serveflow' },
  { label: 'web',       href: '/web' },
  { label: 'ventures',  href: '/ventures' },
  { label: 'journal',   href: '/journal' },
  { label: 'kontakt',   href: '/kontakt' },
]

const COL_SERVEFLOW = [
  { label: 'Kostenlos testen', href: 'https://app.serve-flow.org/registrieren', external: true },
  { label: 'Anmelden',         href: 'https://app.serve-flow.org',              external: true },
  { label: 'Preise',           href: '/serveflow#preise',                       external: false },
  { label: 'Alle Features',    href: '/serveflow',                              external: false },
  { label: 'FAQ',              href: '/serveflow',                              external: false },
]

const COL_LEGAL = [
  { label: 'Impressum',   href: '/impressum' },
  { label: 'Datenschutz', href: '/datenschutz' },
]

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="max-w-site mx-auto px-6 md:px-10 lg:px-16 pt-14 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <p className="font-sans font-bold text-base text-primary mb-1">
              drvn<span className="text-signal">.</span>
            </p>
            <p className="font-sans text-sm text-secondary leading-relaxed max-w-xs mb-4">
              Werkstatt für digitale Produkte aus Stuttgart.
              Software, die wirklich funktioniert.
            </p>
            <a
              href={`mailto:${BRAND.email}`}
              className="font-mono text-xs text-muted hover:text-secondary transition-colors break-all"
            >
              {BRAND.email}
            </a>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted mb-4">Navigation</p>
            <ul className="space-y-2.5">
              {COL_NAV.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-sm text-secondary hover:text-primary transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted mb-4">ServeFlow</p>
            <ul className="space-y-2.5">
              {COL_SERVEFLOW.map((l) => (
                <li key={l.label}>
                  {l.external ? (
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-secondary hover:text-primary transition-colors"
                    >
                      {l.label}
                    </a>
                  ) : (
                    <Link to={l.href} className="text-sm text-secondary hover:text-primary transition-colors">
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted mb-4">Rechtliches</p>
            <ul className="space-y-2.5">
              {COL_LEGAL.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-sm text-secondary hover:text-primary transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted mt-4 leading-relaxed">{BRAND.ort}</p>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-mono text-xs text-muted">
              © {new Date().getFullYear()} drvn
            </span>
            <span className="font-mono text-xs text-muted">Einzelunternehmen · Stuttgart</span>
          </div>
          <span className="font-mono text-xs text-muted">{BRAND.version}</span>
        </div>
      </div>
    </footer>
  )
}
