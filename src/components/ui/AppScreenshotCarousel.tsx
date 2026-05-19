import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SCREENS = [
  {
    src:   '/screenshots/dashboard.png',
    label: 'Dashboard',
    url:   'app.serve-flow.org/dashboard',
  },
  {
    src:   '/screenshots/bestellungen.png',
    label: 'Bestellungen',
    url:   'app.serve-flow.org/bestellungen',
  },
  {
    src:   '/screenshots/speisekarte.png',
    label: 'Speisekarte',
    url:   'app.serve-flow.org/speisekarte',
  },
  {
    src:   '/screenshots/tischplan.png',
    label: 'Tischplan',
    url:   'app.serve-flow.org/tischplan',
  },
  {
    src:   '/screenshots/statistiken.png',
    label: 'Statistiken',
    url:   'app.serve-flow.org/statistiken',
  },
  {
    src:   '/screenshots/reservierungen.png',
    label: 'Reservierungen',
    url:   'app.serve-flow.org/reservierungen',
  },
  {
    src:   '/screenshots/mitarbeiter.png',
    label: 'Mitarbeiter',
    url:   'app.serve-flow.org/mitarbeiter',
  },
]

export function AppScreenshotCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((i) => (i + 1) % SCREENS.length)
    }, 2800)
    return () => clearInterval(t)
  }, [])

  const screen = SCREENS[current]

  return (
    <div className="relative w-full overflow-hidden rounded-xl" style={{ background: '#0A0906' }}>
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/10 bg-white/5">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 flex justify-center">
          <motion.span
            key={screen.url}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-mono text-[10px] text-white/40 bg-white/5 border border-white/10
              px-3 py-0.5 rounded-md"
          >
            {screen.url}
          </motion.span>
        </div>
        {/* Tab indicators */}
        <div className="flex gap-1">
          {SCREENS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                i === current ? 'bg-signal' : 'bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Screen content */}
      <div className="relative" style={{ aspectRatio: '16/9' }}>
        <AnimatePresence mode="wait">
          <motion.img
            key={screen.src}
            src={screen.src}
            alt={`ServeFlow ${screen.label}`}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        </AnimatePresence>

        {/* Bottom label */}
        <div className="absolute bottom-0 left-0 right-0 h-12
          bg-gradient-to-t from-black/50 to-transparent
          flex items-end px-4 py-2">
          <motion.span
            key={screen.label}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-[10px] uppercase tracking-[0.1em] text-white/70"
          >
            {screen.label}
          </motion.span>
        </div>
      </div>

      {/* Klickbare Tab-Leiste */}
      <div className="flex items-center gap-1 px-4 py-2.5 border-t border-white/10 bg-white/5 overflow-x-auto scrollbar-none">
        {SCREENS.map((s, i) => (
          <button
            key={s.label}
            onClick={() => setCurrent(i)}
            className={`font-mono text-[10px] uppercase tracking-[0.08em] whitespace-nowrap px-2.5 py-1 rounded transition-colors flex-shrink-0 ${
              i === current
                ? 'text-signal bg-signal/10'
                : 'text-muted hover:text-secondary'
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>
    </div>
  )
}
