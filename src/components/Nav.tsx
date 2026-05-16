import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { X, Menu } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS } from '../lib/constants'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => { setOpen(false) }, [pathname])
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    fn()
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
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
      <motion.header
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 w-full z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(9,9,11,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px) saturate(1.5)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(39,39,42,0.8)' : '1px solid transparent',
        }}
      >
        <div className="max-w-site mx-auto px-6 md:px-10 lg:px-16 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="font-sans font-bold text-base tracking-tight text-primary hover:text-primary transition-colors"
          >
            drvn<span className="text-signal">.</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1" aria-label="Hauptnavigation">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive(l.href)
                    ? 'text-primary bg-elevated'
                    : 'text-secondary hover:text-primary hover:bg-surface'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <div className="w-px h-5 bg-border mx-2" />
            <Link
              to="/kontakt"
              className="ml-1 px-4 py-2 text-sm font-semibold text-white bg-signal hover:bg-signalHover rounded-lg transition-colors"
            >
              Kontakt
            </Link>
          </nav>

          <button
            className="md:hidden text-primary p-2 rounded-md hover:bg-surface transition-colors"
            onClick={() => setOpen((s) => !s)}
            aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-xl flex flex-col pt-16"
          >
            <nav className="flex flex-col px-6 pt-8 gap-1">
              {NAV_LINKS.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    to={l.href}
                    className="flex items-center justify-between py-4 border-b border-border text-2xl font-bold text-primary hover:text-signal transition-colors"
                  >
                    <span>{l.label}</span>
                    <span className="text-muted text-base">→</span>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="pt-6"
              >
                <Link
                  to="/kontakt"
                  className="block w-full text-center bg-signal hover:bg-signalHover text-white font-semibold py-4 rounded-xl transition-colors text-lg"
                >
                  Projekt starten
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
