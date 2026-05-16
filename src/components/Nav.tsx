import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { X, Menu } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS } from '../lib/constants'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => { setOpen(false) }, [pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const isActive = (href: string) => {
    if (href === '/serveflow') return pathname === '/serveflow' || pathname === '/produkte/serveflow'
    if (href === '/web') return pathname === '/web' || pathname.startsWith('/leistungen')
    return pathname === href
  }

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-paper/80 backdrop-blur-md border-b border-hairline h-16">
        <div className="max-w-site mx-auto px-6 md:px-10 lg:px-16 h-full flex items-center justify-between">
          <Link
            to="/"
            className="font-sans font-bold text-base tracking-tight text-ink hover:text-ink transition-colors"
          >
            drvn
          </Link>

          <nav className="hidden md:flex items-center gap-7" aria-label="Hauptnavigation">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(l.href)
                    ? 'text-ink border-b border-ink pb-0.5'
                    : 'text-secondary hover:text-ink'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/kontakt"
              className="text-sm font-medium text-secondary hover:text-ink transition-colors ml-3"
            >
              kontakt <span className="font-mono">→</span>
            </Link>
          </nav>

          <button
            className="md:hidden text-ink p-1"
            onClick={() => setOpen((s) => !s)}
            aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-paper flex flex-col pt-16"
          >
            <nav className="flex flex-col px-6 pt-12 gap-2">
              {NAV_LINKS.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    to={l.href}
                    className="block text-[2.25rem] font-light text-ink tracking-tight leading-tight py-3 border-b border-hairline hover:text-secondary transition-colors"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  to="/kontakt"
                  className="block text-[2.25rem] font-light text-ink tracking-tight leading-tight py-3 hover:text-secondary transition-colors"
                >
                  kontakt
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
