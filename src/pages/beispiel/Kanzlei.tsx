import { useState, useRef, useEffect, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  AnimatePresence,
  type Variants,
} from 'framer-motion'
import {
  ArrowUpRight, ArrowRight, Mail, Phone, MapPin,
  Scale, Briefcase, Building2, ShieldCheck, FileText, Users,
  X, ChevronRight, Quote,
} from 'lucide-react'
import SEO from '../../components/SEO'

const PALETTE = {
  ink:       '#0F1E3D',
  inkDeep:   '#08122A',
  inkSoft:   '#1B2D52',
  paper:     '#F5F1E8',
  paperSoft: '#EDE6D3',
  gold:      '#C9A961',
  goldDark:  '#A88842',
  muted:     '#6B7B95',
  border:    'rgba(15,30,61,0.12)',
} as const

const TAETIGKEITSFELDER = [
  { icon: Briefcase,   titel: 'Wirtschaftsrecht',          text: 'Gesellschaftsrecht, Vertragsgestaltung, Unternehmensumstrukturierungen, Joint Ventures.', bereiche: ['M&A', 'Gesellschaftsverträge', 'Beteiligungen', 'Restrukturierung'], nr: '01' },
  { icon: Users,       titel: 'Arbeitsrecht',              text: 'Beratung von Arbeitgebern in allen kollektiv- und individualrechtlichen Fragestellungen.', bereiche: ['Kündigungsschutz', 'Betriebsverfassung', 'Tarifrecht', 'Compliance'], nr: '02' },
  { icon: Building2,   titel: 'Immobilienrecht',           text: 'Gewerbliche Immobilientransaktionen, Asset Deals, Mietverträge und Projektentwicklung.', bereiche: ['Asset Deals', 'Share Deals', 'Gewerbemiete', 'Projektentwicklung'], nr: '03' },
  { icon: ShieldCheck, titel: 'IT- und Datenschutzrecht',  text: 'IT-Verträge, DSGVO-Compliance, Lizenzgestaltung, Plattformökonomie und KI-Recht.', bereiche: ['DSGVO', 'IT-Verträge', 'Lizenzrecht', 'KI & Plattformen'], nr: '04' },
  { icon: Scale,       titel: 'Prozessführung',            text: 'Vertretung vor Zivil- und Arbeitsgerichten sowie in nationalen und internationalen Schiedsverfahren.', bereiche: ['Zivilprozess', 'Schiedsverfahren', 'Mediation', 'Vollstreckung'], nr: '05' },
  { icon: FileText,    titel: 'Steuerrecht',               text: 'Steuerliche Strukturierung von Transaktionen, Betriebsprüfungen und Steuerstrafrecht.', bereiche: ['Transaktionssteuer', 'Erbschaftsteuer', 'Betriebsprüfung', 'Steuerstrafrecht'], nr: '06' },
]

const PARTNER = [
  { name: 'Dr. Maximilian Voss',     rolle: 'Gründungspartner', fokus: 'Wirtschaftsrecht · M&A',         bio: 'Über 25 Jahre Erfahrung in der Beratung mittelständischer Familienunternehmen und internationaler Konzerne.', initialen: 'MV' },
  { name: 'Dr. Katharina Bergmann',  rolle: 'Partnerin',         fokus: 'Arbeits- & Compliance-Recht',    bio: 'Lehrbeauftragte an der LMU München. Spezialistin für arbeitsrechtliche Restrukturierungen.', initialen: 'KB' },
  { name: 'Friedrich Holzmann',      rolle: 'Partner',           fokus: 'Immobilien- & Bauwirtschaft',    bio: 'Vertraut zahlreiche Projektentwickler und institutionelle Investoren im DACH-Raum.', initialen: 'FH' },
  { name: 'Dr. Sophia Reinhardt',    rolle: 'Partnerin',         fokus: 'IT- & Datenschutzrecht',         bio: 'Promotion zum europäischen Datenschutzrecht. Externe Datenschutzbeauftragte mehrerer DAX-Konzerne.', initialen: 'SR' },
]

const STANDORTE = [
  { stadt: 'München',   adresse: 'Maximilianstraße 28',    plz: '80539 München',    bild: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80' },
  { stadt: 'Frankfurt', adresse: 'Bockenheimer Anlage 14', plz: '60322 Frankfurt',  bild: 'https://images.unsplash.com/photo-1577086664693-894d8405334a?auto=format&fit=crop&w=1200&q=80' },
  { stadt: 'Berlin',    adresse: 'Friedrichstraße 200',    plz: '10117 Berlin',     bild: 'https://images.unsplash.com/photo-1587330979470-3595ac045ab0?auto=format&fit=crop&w=1200&q=80' },
]

const MANDANTEN = [
  'ATLAS HOLDING', 'KAUFMANN & CIE.', 'NORDLICHT AG',
  'KRONOS CAPITAL', 'WELLENBRECHER', 'HANSEATEN INVEST',
  'EICHENGRUND', 'SCHWARZWALD VENTURES',
]

const HERO_BILD = 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&w=2000&q=80'

export default function KanzleiVorschauPage() {
  const { scrollYProgress } = useScroll()
  const progressBarScale = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  return (
    <>
      <SEO
        title="Voss & Partner — Vorschau einer Kanzlei-Webseite | drvn"
        description="Beispiel-Webseite einer Wirtschaftskanzlei — gebaut von drvn."
        path="/beispiel/kanzlei"
      />

      <PreviewBanner />

      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-[55] origin-left"
        style={{ background: PALETTE.gold, scaleX: progressBarScale }}
      />

      <div
        className="font-sans antialiased relative"
        style={{ background: PALETTE.paper, color: PALETTE.ink, minHeight: '100vh' }}
      >
        <KanzleiNav />
        <Hero />
        <MandantenMarquee />
        <KennzahlenStrip />
        <TaetigkeitsfelderSticky />
        <UeberUnsZitat />
        <PartnerSection />
        <StandorteSection />
        <KontaktSection />
        <KanzleiFooter />
      </div>
    </>
  )
}

// ──────────────────────────────────────────────────────────
// PREVIEW BANNER
// ──────────────────────────────────────────────────────────

function PreviewBanner() {
  const [open, setOpen] = useState(true)
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-0 left-0 right-0 z-[60] backdrop-blur-md"
          style={{ background: 'rgba(15,30,61,0.92)', borderBottom: '1px solid rgba(201,169,97,0.3)' }}
        >
          <div className="max-w-7xl mx-auto px-5 py-2.5 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <motion.span
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="font-mono text-[10px] uppercase tracking-[0.16em] flex-shrink-0"
                style={{ color: PALETTE.gold }}
              >
                ● Vorschau
              </motion.span>
              <span className="hidden sm:inline text-xs text-white/80 truncate">
                Beispielseite — so könnte Ihre Kanzlei-Webseite aussehen. Gebaut von&nbsp;
                <Link to="/" className="underline decoration-dotted" style={{ color: PALETTE.gold }}>drvn</Link>.
              </span>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <Link
                to="/kontakt"
                className="text-[11px] font-semibold px-3 py-1.5 rounded-md text-white"
                style={{ background: PALETTE.gold }}
              >
                Eigene anfragen →
              </Link>
              <button onClick={() => setOpen(false)} className="text-white/60 hover:text-white p-1" aria-label="Banner schließen">
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// ──────────────────────────────────────────────────────────
// NAV
// ──────────────────────────────────────────────────────────

function KanzleiNav() {
  const { scrollY } = useScroll()
  const navBg = useTransform(scrollY, [0, 100], ['rgba(245,241,232,0)', 'rgba(245,241,232,0.95)'])
  const navBorder = useTransform(scrollY, [0, 100], ['rgba(15,30,61,0)', 'rgba(15,30,61,0.12)'])

  return (
    <motion.header
      className="fixed top-11 left-0 right-0 z-50 backdrop-blur-md"
      style={{ background: navBg, borderBottom: '1px solid', borderBottomColor: navBorder }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <motion.a
          href="#top"
          className="flex items-baseline gap-1.5"
          whileHover={{ letterSpacing: '0.02em' }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-2xl tracking-[-0.02em]"
            style={{ fontFamily: 'Georgia, serif', fontWeight: 700, color: PALETTE.ink }}>
            Voss
          </span>
          <span className="text-2xl" style={{ color: PALETTE.gold, fontFamily: 'Georgia, serif' }}>&</span>
          <span className="text-2xl tracking-[-0.02em]"
            style={{ fontFamily: 'Georgia, serif', fontWeight: 700, color: PALETTE.ink }}>
            Partner
          </span>
        </motion.a>

        <nav className="hidden md:flex items-center gap-8">
          {['Tätigkeitsfelder', 'Team', 'Standorte', 'Kontakt'].map((label) => (
            <NavLink key={label} href={`#${label.toLowerCase().replace('ä', 'ae')}`} label={label} />
          ))}
        </nav>

        <MagneticButton
          href="#kontakt"
          className="text-xs font-semibold uppercase tracking-[0.14em] px-5 py-3 border"
          style={{ color: PALETTE.ink, borderColor: PALETTE.ink }}
        >
          Mandat anfragen
        </MagneticButton>
      </div>
    </motion.header>
  )
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} className="relative text-sm group" style={{ color: PALETTE.ink, fontFamily: 'Georgia, serif' }}>
      {label}
      <motion.span
        className="absolute left-0 -bottom-1 h-px w-0 group-hover:w-full"
        style={{ background: PALETTE.gold }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      />
    </a>
  )
}

// ──────────────────────────────────────────────────────────
// MAGNETIC BUTTON — folgt der Maus
// ──────────────────────────────────────────────────────────

function MagneticButton({
  children, href, className, style, onClick,
}: { children: ReactNode; href?: string; className?: string; style?: React.CSSProperties; onClick?: () => void }) {
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 15, mass: 0.5 })
  const sy = useSpring(y, { stiffness: 200, damping: 15, mass: 0.5 })

  function handleMove(e: React.MouseEvent<HTMLAnchorElement>) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    x.set((e.clientX - cx) * 0.3)
    y.set((e.clientY - cy) * 0.3)
  }
  function handleLeave() { x.set(0); y.set(0) }

  return (
    <motion.a
      ref={ref}
      href={href}
      className={`inline-flex items-center gap-2 ${className ?? ''}`}
      style={{ ...style, x: sx, y: sy }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
    >
      {children}
    </motion.a>
  )
}

// ──────────────────────────────────────────────────────────
// HERO — Split-Text + Parallax-Bild
// ──────────────────────────────────────────────────────────

function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-15%'])
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  const headlineWords = [
    { text: 'Diskretion.', italic: false },
    { text: 'Substanz.',   italic: false },
    { text: 'Resultat.',   italic: true  },
  ]

  return (
    <section ref={ref} id="top" className="relative overflow-hidden min-h-[100vh] flex items-end pb-20 md:pb-28 pt-44">

      <motion.div className="absolute inset-0 z-0" style={{ y: imageY, scale: imageScale }}>
        <div className="absolute inset-0" style={{ background: PALETTE.inkDeep }} />
        <img
          src={HERO_BILD}
          alt=""
          className="w-full h-full object-cover opacity-40"
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, ${PALETTE.paper} 0%, transparent 15%, transparent 50%, ${PALETTE.paper} 100%)`,
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(${PALETTE.ink} 1px, transparent 1px), linear-gradient(90deg, ${PALETTE.ink} 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
        />
      </motion.div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-12 gap-8 items-end w-full"
        style={{ y: textY, opacity: textOpacity }}
      >
        <div className="col-span-12 lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-mono text-[10px] uppercase tracking-[0.2em] mb-8"
            style={{ color: PALETTE.gold }}
          >
            Wirtschaftskanzlei — München · Frankfurt · Berlin · Seit 1987
          </motion.p>

          <h1
            className="leading-[0.92] tracking-[-0.025em] mb-10"
            style={{
              fontFamily: 'Georgia, "Playfair Display", serif',
              fontWeight: 400,
              fontSize: 'clamp(3rem, 8vw, 7.5rem)',
              color: PALETTE.ink,
            }}
          >
            {headlineWords.map((w, i) => (
              <SplitWord key={w.text} text={w.text} italic={w.italic} delay={0.3 + i * 0.15} />
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.7 }}
            className="text-lg leading-[1.7] max-w-[52ch] mb-10"
            style={{ color: PALETTE.inkSoft }}
          >
            Wir beraten mittelständische Familienunternehmen, internationale Konzerne und Investoren
            im Wirtschafts-, Arbeits- und Immobilienrecht. Persönlich. Pragmatisch. Mit messbarem
            Ergebnis.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15, duration: 0.6 }}
            className="flex flex-wrap gap-3"
          >
            <MagneticButton
              href="#kontakt"
              className="text-sm font-semibold px-7 py-4 text-white"
              style={{ background: PALETTE.ink }}
            >
              Erstgespräch vereinbaren
              <ArrowUpRight className="w-4 h-4" />
            </MagneticButton>
            <MagneticButton
              href="#taetigkeitsfelder"
              className="text-sm font-semibold px-7 py-4 border"
              style={{ color: PALETTE.ink, borderColor: PALETTE.ink }}
            >
              Tätigkeitsfelder
              <ArrowRight className="w-4 h-4" />
            </MagneticButton>
          </motion.div>
        </div>

        <motion.aside
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="col-span-12 lg:col-span-4 lg:col-start-9 hidden lg:block"
        >
          <div
            className="backdrop-blur-md p-6 border"
            style={{
              background: 'rgba(245,241,232,0.85)',
              borderColor: PALETTE.border,
            }}
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] mb-5"
              style={{ color: PALETTE.muted }}>
              In Zahlen
            </p>
            <div className="space-y-4">
              <Kennzahl wert="38" einheit="Jahre" beschreibung="am Standort München" />
              <Kennzahl wert="42" einheit="Berufsträger" beschreibung="Anwälte, Notare, Steuerberater" />
              <Kennzahl wert="JUVE" einheit="empfohlen" beschreibung="Handbuch 2025" />
            </div>
          </div>
        </motion.aside>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[9px] uppercase tracking-[0.2em]" style={{ color: PALETTE.muted }}>
            Scrollen
          </span>
          <div className="w-px h-10" style={{ background: `linear-gradient(180deg, ${PALETTE.gold}, transparent)` }} />
        </div>
      </motion.div>
    </section>
  )
}

function SplitWord({ text, italic, delay }: { text: string; italic: boolean; delay: number }) {
  const letters = text.split('')
  return (
    <span className="inline-block mr-[0.15em]"
      style={{ fontStyle: italic ? 'italic' : 'normal', color: italic ? PALETTE.gold : PALETTE.ink }}>
      {letters.map((l, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: delay + i * 0.025,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {l === ' ' ? ' ' : l}
        </motion.span>
      ))}
      {/* line break for last char if needed via display */}
      <br />
    </span>
  )
}

function Kennzahl({ wert, einheit, beschreibung }: { wert: string; einheit: string; beschreibung: string }) {
  return (
    <div className="flex items-baseline gap-4">
      <span
        className="tabular-nums"
        style={{
          fontFamily: 'Georgia, serif',
          fontSize: '2.25rem',
          fontWeight: 400,
          color: PALETTE.ink,
          lineHeight: 1,
          minWidth: '4rem',
        }}
      >
        {wert}
      </span>
      <div>
        <p className="text-sm font-semibold" style={{ color: PALETTE.ink }}>{einheit}</p>
        <p className="text-xs" style={{ color: PALETTE.muted }}>{beschreibung}</p>
      </div>
    </div>
  )
}

// ──────────────────────────────────────────────────────────
// MARQUEE — Mandanten infinite scroll
// ──────────────────────────────────────────────────────────

function MandantenMarquee() {
  const loop = [...MANDANTEN, ...MANDANTEN]
  return (
    <section className="py-14 border-y overflow-hidden"
      style={{ borderColor: PALETTE.border, background: PALETTE.paperSoft }}>
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-center mb-10"
        style={{ color: PALETTE.muted }}>
        Vertretene Mandanten — Auswahl
      </p>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: `linear-gradient(90deg, ${PALETTE.paperSoft}, transparent)` }} />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: `linear-gradient(270deg, ${PALETTE.paperSoft}, transparent)` }} />
        <motion.div
          className="flex gap-16 whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 38, repeat: Infinity, ease: 'linear' }}
        >
          {loop.map((m, i) => (
            <span
              key={i}
              className="text-base tracking-[0.22em] opacity-50 flex-shrink-0"
              style={{ fontFamily: 'Georgia, serif', color: PALETTE.ink, fontWeight: 700 }}
            >
              {m}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ──────────────────────────────────────────────────────────
// KENNZAHLEN STRIP — Animated Counter
// ──────────────────────────────────────────────────────────

function KennzahlenStrip() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          <BigStat target={38} suffix=""    label="Jahre Erfahrung"      sub="seit 1987" />
          <BigStat target={42} suffix=""    label="Berufsträger"          sub="Anwälte · Notare · Steuerberater" />
          <BigStat target={3}  suffix=""    label="Standorte"             sub="München · Frankfurt · Berlin" />
          <BigStat target={97} suffix="%"   label="Mandantenbindung"      sub="erfasst über 5 Jahre" />
        </div>
      </div>
    </section>
  )
}

function BigStat({ target, suffix, label, sub }: { target: number; suffix: string; label: string; sub: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!ref.current) return
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          const duration = 1600
          const start = performance.now()
          const tick = (now: number) => {
            const elapsed = now - start
            const t = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - t, 3)
            setCount(Math.floor(target * eased))
            if (t < 1) requestAnimationFrame(tick)
            else setCount(target)
          }
          requestAnimationFrame(tick)
          obs.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [target])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-left"
    >
      <p className="tabular-nums leading-[0.9] mb-4"
        style={{
          fontFamily: 'Georgia, serif',
          fontSize: 'clamp(3rem, 5vw, 5rem)',
          fontWeight: 400,
          color: PALETTE.ink,
        }}
      >
        {count}{suffix}
      </p>
      <p className="text-sm font-semibold mb-1" style={{ color: PALETTE.ink }}>{label}</p>
      <p className="text-xs" style={{ color: PALETTE.muted }}>{sub}</p>
    </motion.div>
  )
}

// ──────────────────────────────────────────────────────────
// TÄTIGKEITSFELDER — Sticky Scroll Reveal
// ──────────────────────────────────────────────────────────

function TaetigkeitsfelderSticky() {
  return (
    <section id="taetigkeitsfelder" className="relative" style={{ background: PALETTE.paperSoft }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-24 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-12 gap-8 mb-20"
        >
          <div className="col-span-12 lg:col-span-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] mb-6"
              style={{ color: PALETTE.gold }}>
              Tätigkeitsfelder
            </p>
            <h2 className="leading-[1.05] tracking-[-0.02em]"
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: 'clamp(2rem, 4.5vw, 3.75rem)',
                fontWeight: 400,
                color: PALETTE.ink,
              }}>
              Sechs Felder.<br />
              <span style={{ fontStyle: 'italic', color: PALETTE.gold }}>Eine Haltung.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="text-base leading-[1.75] max-w-[48ch]" style={{ color: PALETTE.inkSoft }}>
              Wir verstehen uns als Berater an der Schnittstelle juristischer und unternehmerischer
              Fragen. Tiefenwissen in jedem Feld, kombiniert mit dem Blick aufs Ganze.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
        {TAETIGKEITSFELDER.map((f, i) => (
          <StickyFeldRow key={f.titel} feld={f} index={i} />
        ))}
      </div>
    </section>
  )
}

function StickyFeldRow({ feld, index }: { feld: typeof TAETIGKEITSFELDER[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['8%', '-8%'])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3])

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-12 gap-8 py-14 md:py-20 group"
      style={{
        borderTop: index === 0 ? `1px solid ${PALETTE.border}` : undefined,
        borderBottom: `1px solid ${PALETTE.border}`,
      }}
    >
      <motion.div className="col-span-12 md:col-span-2" style={{ y, opacity }}>
        <span className="font-mono text-sm tracking-[0.2em]" style={{ color: PALETTE.gold }}>
          {feld.nr}
        </span>
      </motion.div>

      <motion.div className="col-span-12 md:col-span-4" style={{ y, opacity }}>
        <feld.icon className="w-8 h-8 mb-5" style={{ color: PALETTE.gold, strokeWidth: 1.25 }} />
        <h3 className="leading-[1.1] tracking-[-0.01em]"
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            fontWeight: 400,
            color: PALETTE.ink,
          }}>
          {feld.titel}
        </h3>
      </motion.div>

      <motion.div className="col-span-12 md:col-span-6" style={{ y, opacity }}>
        <p className="text-base leading-[1.75] mb-6" style={{ color: PALETTE.inkSoft }}>
          {feld.text}
        </p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {feld.bereiche.map((b) => (
            <li key={b} className="flex items-center gap-2 text-sm"
              style={{ color: PALETTE.muted, fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
              <span className="w-1 h-1 rounded-full" style={{ background: PALETTE.gold }} />
              {b}
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  )
}

// ──────────────────────────────────────────────────────────
// ZITAT — Bold Statement Section
// ──────────────────────────────────────────────────────────

function UeberUnsZitat() {
  const wordsVariants: Variants = {
    hidden:  { opacity: 0, y: 12 },
    visible: (i: number) => ({
      opacity: 1, y: 0,
      transition: { delay: i * 0.04, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    }),
  }
  const zitat = '„Mandanten kommen wegen unserer juristischen Präzision. Sie bleiben, weil wir ihnen unternehmerisch mitdenken — und keine zwei Sätze schreiben, wo einer reicht."'
  const words = zitat.split(' ')

  return (
    <section className="py-28 md:py-40 relative overflow-hidden"
      style={{ background: PALETTE.ink, color: PALETTE.paper }}>
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 30%, ${PALETTE.gold} 0%, transparent 45%), radial-gradient(circle at 85% 75%, ${PALETTE.gold} 0%, transparent 45%)`,
        }}
      />
      <motion.div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
        transition={{ duration: 30, repeat: Infinity, repeatType: 'reverse' }}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '300px 300px',
        }}
      />
      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Quote className="w-14 h-14 mb-10" style={{ color: PALETTE.gold, strokeWidth: 1 }} />
        </motion.div>

        <blockquote
          className="leading-[1.25] tracking-[-0.015em]"
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(1.625rem, 3.5vw, 2.875rem)',
            fontWeight: 400,
          }}
        >
          {words.map((word, i) => {
            const isHighlight = ['unternehmerisch', 'mitdenken'].some(w => word.includes(w))
            return (
              <motion.span
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-15%' }}
                variants={wordsVariants}
                className="inline-block mr-[0.25em]"
                style={{
                  fontStyle: isHighlight ? 'italic' : 'normal',
                  color: isHighlight ? PALETTE.gold : 'inherit',
                }}
              >
                {word}
              </motion.span>
            )
          })}
        </blockquote>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12 flex items-center gap-4 pt-6"
          style={{ borderTop: `1px solid rgba(245,241,232,0.15)` }}
        >
          <div className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ background: PALETTE.gold, color: PALETTE.ink, fontFamily: 'Georgia, serif', fontWeight: 700 }}>
            MV
          </div>
          <div>
            <p className="text-sm font-semibold">Dr. Maximilian Voss</p>
            <p className="text-xs opacity-70" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
              Gründungspartner
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ──────────────────────────────────────────────────────────
// PARTNER — 3D Tilt Cards on Mouse
// ──────────────────────────────────────────────────────────

function PartnerSection() {
  return (
    <section id="team" className="py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-3xl"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] mb-6" style={{ color: PALETTE.gold }}>
            Partner
          </p>
          <h2 className="leading-[1.05] tracking-[-0.02em]"
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(2rem, 4.5vw, 3.75rem)',
              fontWeight: 400,
              color: PALETTE.ink,
            }}>
            Vier Berufsträger.<br />
            <span style={{ fontStyle: 'italic', color: PALETTE.gold }}>Eine direkte Ansprechpartnerin.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PARTNER.map((p, i) => (
            <TiltCard key={p.name} index={i}>
              <PortraitAvatar initialen={p.initialen} />
              <div className="p-6 pt-7">
                <h3 className="mb-1 leading-tight"
                  style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '1.375rem',
                    fontWeight: 500,
                    color: PALETTE.ink,
                  }}>
                  {p.name}
                </h3>
                <p className="text-xs uppercase tracking-[0.12em] mb-2"
                  style={{ color: PALETTE.gold, fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                  {p.rolle}
                </p>
                <p className="text-sm mb-5 font-semibold" style={{ color: PALETTE.inkSoft }}>
                  {p.fokus}
                </p>
                <p className="text-xs leading-[1.7]" style={{ color: PALETTE.muted }}>
                  {p.bio}
                </p>
                <a href="#kontakt" className="mt-6 inline-flex items-center gap-1 text-xs font-semibold group/link"
                  style={{ color: PALETTE.ink }}>
                  Mandat anfragen
                  <ChevronRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}

function TiltCard({ children, index }: { children: ReactNode; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], ['7deg', '-7deg']), { stiffness: 150, damping: 15 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], ['-7deg', '7deg']), { stiffness: 150, damping: 15 })

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  function handleLeave() { x.set(0); y.set(0) }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ delay: index * 0.08, duration: 0.6 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        background: PALETTE.paper,
        border: `1px solid ${PALETTE.border}`,
      }}
      className="overflow-hidden"
    >
      {children}
    </motion.div>
  )
}

function PortraitAvatar({ initialen }: { initialen: string }) {
  return (
    <div className="w-full aspect-[3/4] relative overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${PALETTE.ink} 0%, ${PALETTE.inkSoft} 100%)` }}>
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            `radial-gradient(circle at 30% 30%, ${PALETTE.gold}40, transparent 60%)`,
            `radial-gradient(circle at 70% 50%, ${PALETTE.gold}40, transparent 60%)`,
            `radial-gradient(circle at 40% 70%, ${PALETTE.gold}40, transparent 60%)`,
            `radial-gradient(circle at 30% 30%, ${PALETTE.gold}40, transparent 60%)`,
          ],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(${PALETTE.gold}22 1px, transparent 1px), linear-gradient(90deg, ${PALETTE.gold}22 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(3rem, 5vw, 4.5rem)',
            color: PALETTE.gold,
            fontWeight: 400,
            letterSpacing: '-0.05em',
          }}
        >
          {initialen}
        </span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: PALETTE.gold, opacity: 0.4 }} />
    </div>
  )
}

// ──────────────────────────────────────────────────────────
// STANDORTE — Hover Image Reveal
// ──────────────────────────────────────────────────────────

function StandorteSection() {
  return (
    <section id="standorte" className="py-28 md:py-36" style={{ background: PALETTE.paperSoft }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-3xl"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] mb-6" style={{ color: PALETTE.gold }}>
            Standorte
          </p>
          <h2 className="leading-[1.05] tracking-[-0.02em]"
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(2rem, 4.5vw, 3.75rem)',
              fontWeight: 400,
              color: PALETTE.ink,
            }}>
            Drei Städte. <span style={{ fontStyle: 'italic', color: PALETTE.gold }}>Ein Anspruch.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STANDORTE.map((s, i) => (
            <StandortKarte key={s.stadt} standort={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StandortKarte({ standort, index }: { standort: typeof STANDORTE[number]; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

  return (
    <motion.a
      ref={ref}
      href="#kontakt"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="overflow-hidden group cursor-pointer block"
      style={{ background: PALETTE.paper, border: `1px solid ${PALETTE.border}` }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.div className="absolute inset-0 -top-[10%] -bottom-[10%]" style={{ y: imageY }}>
          <img
            src={standort.bild}
            alt={`${standort.stadt} — Voss & Partner Standort`}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={(e) => {
              const img = e.target as HTMLImageElement
              img.style.display = 'none'
              img.parentElement!.style.background = `linear-gradient(135deg, ${PALETTE.ink}, ${PALETTE.inkSoft})`
            }}
          />
        </motion.div>
        <div className="absolute inset-0"
          style={{ background: `linear-gradient(180deg, transparent 40%, ${PALETTE.ink}dd 100%)` }} />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `linear-gradient(180deg, ${PALETTE.gold}15 0%, transparent 40%)` }} />
        <motion.p
          className="absolute bottom-5 left-6 z-10"
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(2rem, 3vw, 2.5rem)',
            color: PALETTE.paper,
            fontWeight: 400,
            lineHeight: 1,
          }}
          initial={{ y: 8 }}
          whileHover={{ y: 0 }}
        >
          {standort.stadt}
        </motion.p>
      </div>
      <div className="p-6 flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: PALETTE.gold }} />
          <div>
            <p className="text-sm" style={{ color: PALETTE.ink }}>{standort.adresse}</p>
            <p className="text-sm" style={{ color: PALETTE.muted }}>{standort.plz}</p>
          </div>
        </div>
        <ArrowUpRight className="w-4 h-4 mt-0.5 opacity-30 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
          style={{ color: PALETTE.gold }} />
      </div>
    </motion.a>
  )
}

// ──────────────────────────────────────────────────────────
// KONTAKT
// ──────────────────────────────────────────────────────────

function KontaktSection() {
  return (
    <section id="kontakt" className="py-28 md:py-36 relative overflow-hidden"
      style={{ background: PALETTE.ink, color: PALETTE.paper }}>
      <motion.div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
        transition={{ duration: 40, repeat: Infinity, repeatType: 'reverse' }}
        style={{
          backgroundImage: `radial-gradient(circle at 20% 20%, ${PALETTE.gold} 0%, transparent 50%), radial-gradient(circle at 80% 80%, ${PALETTE.gold} 0%, transparent 50%)`,
          backgroundSize: '120% 120%',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] mb-6" style={{ color: PALETTE.gold }}>
            Erstkontakt
          </p>
          <h2 className="leading-[1.05] tracking-[-0.02em] mb-8"
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
              fontWeight: 400,
            }}>
            Vertraulich. Kostenfrei. <span style={{ fontStyle: 'italic', color: PALETTE.gold }}>30 Minuten.</span>
          </h2>
          <p className="text-base leading-[1.75] mb-10 opacity-80" style={{ fontFamily: 'Georgia, serif' }}>
            Schildern Sie uns Ihr Anliegen. Wir beurteilen unverbindlich, ob und wie wir Sie
            sinnvoll begleiten können — diskret und ohne Verkaufsdruck.
          </p>
          <div className="space-y-5 pt-8" style={{ borderTop: '1px solid rgba(245,241,232,0.15)' }}>
            <KontaktZeile icon={Phone}  label="Telefon"   value="+49 (0) 89 244 197-0" />
            <KontaktZeile icon={Mail}   label="E-Mail"    value="kanzlei@voss-partner.de" />
            <KontaktZeile icon={MapPin} label="Hauptsitz" value="Maximilianstraße 28 · 80539 München" />
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-6 lg:col-start-7 space-y-5"
          onSubmit={(e) => { e.preventDefault(); alert('Vorschau — Formular ist nicht aktiv.') }}
        >
          <KanzleiInput label="Name" name="name" placeholder="Max Mustermann" />
          <KanzleiInput label="E-Mail" name="email" type="email" placeholder="max@firma.de" />
          <KanzleiInput label="Telefon (optional)" name="tel" placeholder="+49 (0) 89 …" />
          <KanzleiInput
            label="Ihr Anliegen"
            name="anliegen"
            as="textarea"
            placeholder="Bitte schildern Sie kurz, worum es geht. Wir behandeln alle Angaben streng vertraulich."
          />
          <p className="text-xs opacity-60 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
            Mit Absenden erklären Sie sich mit der vertraulichen Verarbeitung im Sinne unserer
            Datenschutzerklärung einverstanden.
          </p>
          <MagneticButton
            href="#"
            className="px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] cursor-pointer"
            style={{ background: PALETTE.gold, color: PALETTE.ink }}
            onClick={() => alert('Vorschau — Formular ist nicht aktiv.')}
          >
            Anfrage senden <ArrowUpRight className="w-4 h-4" />
          </MagneticButton>
        </motion.form>
      </div>
    </section>
  )
}

function KontaktZeile({ icon: Icon, label, value }: { icon: typeof Phone; label: string; value: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex items-start gap-4"
    >
      <Icon className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: PALETTE.gold }} />
      <div>
        <p className="font-mono text-[9px] uppercase tracking-[0.18em] opacity-60 mb-1">{label}</p>
        <p className="text-base" style={{ fontFamily: 'Georgia, serif' }}>{value}</p>
      </div>
    </motion.div>
  )
}

function KanzleiInput({
  label, name, type = 'text', placeholder, as,
}: { label: string; name: string; type?: string; placeholder?: string; as?: 'textarea' }) {
  const baseStyle = {
    background: 'transparent',
    color: PALETTE.paper,
    borderBottom: '1px solid rgba(245,241,232,0.3)',
    fontFamily: 'Georgia, serif',
  } as const
  return (
    <div>
      <label className="block font-mono text-[9px] uppercase tracking-[0.18em] opacity-60 mb-2">
        {label}
      </label>
      {as === 'textarea' ? (
        <textarea name={name} rows={4} placeholder={placeholder}
          className="w-full px-1 py-3 outline-none resize-none focus:border-current text-base"
          style={baseStyle} />
      ) : (
        <input name={name} type={type} placeholder={placeholder}
          className="w-full px-1 py-3 outline-none focus:border-current text-base"
          style={baseStyle} />
      )}
    </div>
  )
}

// ──────────────────────────────────────────────────────────
// FOOTER
// ──────────────────────────────────────────────────────────

function KanzleiFooter() {
  return (
    <footer className="py-12" style={{ background: PALETTE.inkDeep, color: PALETTE.paper, borderTop: '1px solid rgba(245,241,232,0.08)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs opacity-50" style={{ fontFamily: 'Georgia, serif' }}>
          © {new Date().getFullYear()} Voss & Partner Rechtsanwaltsgesellschaft mbH · München
        </p>
        <p className="text-[10px] uppercase tracking-[0.16em] opacity-50 font-mono">
          Vorschau — gebaut von <Link to="/" className="underline" style={{ color: PALETTE.gold }}>drvn</Link>
        </p>
      </div>
    </footer>
  )
}
