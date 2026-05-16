import { Link } from 'react-router-dom'
import { BRAND } from '../lib/constants'

const COL_NAV = [
  { label: 'serveflow', href: '/serveflow' },
  { label: 'web',       href: '/web' },
  { label: 'ventures',  href: '/ventures' },
  { label: 'journal',   href: '/journal' },
  { label: 'kontakt',   href: '/kontakt' },
]

const COL_LEGAL = [
  { label: 'Impressum',   href: '/impressum' },
  { label: 'Datenschutz', href: '/datenschutz' },
]

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="max-w-site mx-auto px-6 md:px-10 lg:px-16 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <p className="font-sans font-bold text-base text-primary mb-1">
              drvn<span className="text-signal">.</span>
            </p>
            <p className="font-sans text-sm text-secondary leading-relaxed max-w-xs">
              Werkstatt für digitale Produkte aus Stuttgart.
              Software, die wirklich funktioniert.
            </p>
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
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted mb-4">Kontakt</p>
            <a
              href={`mailto:${BRAND.email}`}
              className="block text-sm text-secondary hover:text-primary transition-colors mb-1 break-all"
            >
              {BRAND.email}
            </a>
            <p className="text-sm text-muted">{BRAND.ort}</p>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div className="flex items-center gap-5">
            <span className="font-mono text-xs text-muted">
              © {new Date().getFullYear()} drvn
            </span>
            {COL_LEGAL.map((l) => (
              <Link key={l.href} to={l.href} className="font-mono text-xs text-muted hover:text-secondary transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
          <span className="font-mono text-xs text-muted">{BRAND.version}</span>
        </div>
      </div>
    </footer>
  )
}
