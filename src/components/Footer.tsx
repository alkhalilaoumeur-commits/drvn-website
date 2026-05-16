import { Link } from 'react-router-dom'
import { BRAND } from '../lib/constants'

const COL_VERZEICHNIS = [
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
    <footer className="border-t border-hairline pt-16 pb-10 mt-auto">
      <div className="max-w-site mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          {/* Brand */}
          <div>
            <p className="font-sans font-medium text-base text-ink mb-2">{BRAND.name}</p>
            <p className="font-sans text-sm text-secondary leading-relaxed">
              {BRAND.tagline}<br />
              {BRAND.ort}
            </p>
          </div>

          {/* Verzeichnis */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted mb-4">Verzeichnis</p>
            <ul className="space-y-2">
              {COL_VERZEICHNIS.map((l) => (
                <li key={l.href}>
                  <Link
                    to={l.href}
                    className="font-sans text-sm text-secondary hover:text-ink transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted mb-4">Kontakt</p>
            <a
              href={`mailto:${BRAND.email}`}
              className="block font-sans text-sm text-secondary hover:text-ink transition-colors mb-1"
            >
              {BRAND.email}
            </a>
            <p className="font-sans text-sm text-secondary">Stuttgart, Deutschland</p>
          </div>
        </div>

        <div className="border-t border-hairline pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div className="flex items-center gap-6">
            <span className="font-mono text-xs text-muted">
              © {new Date().getFullYear()} drvn
            </span>
            {COL_LEGAL.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className="font-mono text-xs text-muted hover:text-secondary transition-colors"
              >
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
