import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, X } from 'lucide-react'

export function StickyCTA() {
  const [scrolled, setScrolled] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 400)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const visible = scrolled && !dismissed

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-surface/95 backdrop-blur-md"
        >
          <div className="max-w-[1280px] mx-auto px-4 sm:px-8 py-3 flex items-center gap-4">
            <p className="font-mono text-xs text-secondary hidden sm:block flex-1">
              Kostenlos 14 Tage testen —{' '}
              <span className="text-muted">keine Kreditkarte, kein Risiko.</span>
            </p>
            <p className="font-mono text-xs text-secondary sm:hidden flex-1">
              14 Tage kostenlos · kein Risiko
            </p>
            <a
              href="https://app.serve-flow.org/registrieren"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-signal hover:bg-signalHover
                text-white font-semibold text-sm px-5 py-2.5 rounded-lg
                transition-colors flex-shrink-0"
            >
              Jetzt starten <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={() => setDismissed(true)}
              aria-label="Schließen"
              className="p-1.5 text-muted hover:text-secondary transition-colors flex-shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
