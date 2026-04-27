import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  ArrowRight, MapPin, Phone, Mail, Clock, Star,
  Leaf, Flame, ChevronRight, Wine,
} from 'lucide-react';

// ═══════════════════════════════════════════════════════════════════════════
// Casa Lupo — fiktive italienische Trattoria, Beispiel-Webseite für DRVN
// Stil: warmes Editorial, Burgunder + Olivgrün + Creme, Italic-Highlights,
// asymmetrische Sections, Glasmorphismus-Hero, Marquee, dunkles Review-Section.
//
// Inspiriert von der Quan-An-Seite die Ilias gebaut hat — gleicher Editorial-Vibe,
// aber italienisch interpretiert. Stand-alone Page (eigener Header/Footer).
// ═══════════════════════════════════════════════════════════════════════════

const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif&family=Cabin:wght@400;500;600;700&family=Inter:wght@300;400;500&display=swap');

.casa-lupo-page {
  /* Surface */
  --cl-bg: #FAF5EE;             /* warmes Creme */
  --cl-fg: #1F0F0A;             /* tiefes Burgunder-Schwarz */
  --cl-muted: #F0E7D5;
  --cl-muted-fg: #6E5440;
  --cl-card: #FFFCF6;
  --cl-border: #E5D7BC;

  /* Brand */
  --cl-primary: #7B1F2E;        /* tiefes Burgunder */
  --cl-secondary: #5C7142;      /* Olivgrün */
  --cl-accent: #C99B4A;         /* warmes Gold */
  --cl-terracotta: #C26544;

  /* Glass */
  --cl-glass-tint: rgba(31, 15, 10, 0.42);
  --cl-glass-border: rgba(201, 155, 74, 0.45);

  /* Shadows */
  --cl-shadow-sm: 0 1px 2px rgba(74, 30, 16, 0.06);
  --cl-shadow-md: 0 4px 12px rgba(74, 30, 16, 0.08), 0 2px 4px rgba(74, 30, 16, 0.05);
  --cl-shadow-lg: 0 12px 32px rgba(74, 30, 16, 0.10), 0 4px 8px rgba(74, 30, 16, 0.06);

  background: var(--cl-bg);
  color: var(--cl-fg);
  font-family: 'Inter', system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  letter-spacing: -0.005em;
}

.cl-display { font-family: 'Instrument Serif', Georgia, serif; font-weight: 400; letter-spacing: -0.02em; }
.cl-ui { font-family: 'Cabin', system-ui, sans-serif; }
.cl-body { font-family: 'Inter', system-ui, sans-serif; }

.cl-eyebrow {
  font-family: 'Cabin', system-ui, sans-serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--cl-primary);
  display: inline-flex;
  align-items: center;
  gap: 12px;
}
.cl-eyebrow::before {
  content: '';
  width: 36px;
  height: 1px;
  background: var(--cl-primary);
  opacity: 0.4;
}
.cl-section-num {
  color: var(--cl-accent);
  font-family: 'Instrument Serif', serif;
  font-size: 14px;
  font-style: italic;
  margin-right: 6px;
}

/* Drop-cap auf erstem Absatz */
.cl-drop-cap::first-letter {
  font-family: 'Instrument Serif', serif;
  font-size: 4.2em;
  float: left;
  line-height: 0.9;
  margin: 0.05em 0.1em 0 0;
  color: var(--cl-primary);
  font-style: italic;
}

/* Marquee */
@keyframes cl-marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
.cl-marquee { animation: cl-marquee 50s linear infinite; }

/* Glass-Pill für Hero-CTA */
.cl-glass-cta {
  background: var(--cl-glass-tint);
  border: 1px solid var(--cl-glass-border);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  color: #FFFCF6;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.cl-glass-cta:hover {
  background: rgba(201, 155, 74, 0.85);
  border-color: var(--cl-accent);
  transform: translateY(-1px);
}

/* Buttons */
.cl-btn-primary {
  background: var(--cl-primary);
  color: #FFFCF6;
  padding: 14px 28px;
  border-radius: 999px;
  font-family: 'Cabin', system-ui, sans-serif;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.04em;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.25s ease;
  box-shadow: var(--cl-shadow-md);
  border: none;
  cursor: pointer;
}
.cl-btn-primary:hover {
  background: #5F1623;
  transform: translateY(-1px);
  box-shadow: var(--cl-shadow-lg);
}
.cl-btn-ghost {
  background: transparent;
  color: var(--cl-fg);
  padding: 14px 24px;
  border-radius: 999px;
  font-family: 'Cabin', system-ui, sans-serif;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.04em;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 1px solid var(--cl-border);
  transition: all 0.25s ease;
  cursor: pointer;
}
.cl-btn-ghost:hover {
  background: var(--cl-muted);
  border-color: var(--cl-fg);
}
`;

// Bilder von Unsplash (kostenlose Stock-Fotos für Demo)
const HERO_IMG = 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80';
const ATMOSPHERE_IMGS = [
  { src: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&q=80', alt: 'Spaghetti alle Vongole' },
  { src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80', alt: 'Pizza Margherita aus dem Holzofen' },
  { src: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&q=80', alt: 'Tagliatelle al Tartufo' },
  { src: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80', alt: 'Hausgemachtes Tiramisu' },
  { src: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&q=80', alt: 'Frisch gemachte Cannoli' },
  { src: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80', alt: 'Italienischer Wein-Cellar' },
  { src: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80', alt: 'Frische Pasta-Werkstatt' },
  { src: 'https://images.unsplash.com/photo-1576402187878-974f70c890a5?w=800&q=80', alt: 'Bruschetta al Pomodoro' },
];

// Menu-Highlights (3 Featured-Gerichte)
const MENU_HIGHLIGHTS = [
  {
    name: 'Tagliatelle al Tartufo',
    beschreibung: 'Hausgemachte Bandnudeln mit schwarzem Sommertrüffel aus den Apuanischen Alpen, Butter, 24-Monate Parmigiano Reggiano.',
    preis: '24,50',
    img: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=600&q=80',
    tag: 'Saisonal',
  },
  {
    name: 'Spaghetti alle Vongole',
    beschreibung: 'Spaghetti mit Venusmuscheln, Knoblauch, Petersilie, Weißwein und kaltgepresstem Olivenöl aus Sizilien.',
    preis: '19,80',
    img: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&q=80',
    tag: 'Klassiker',
  },
  {
    name: 'Bistecca alla Fiorentina',
    beschreibung: '1,2 kg T-Bone vom Chianina-Rind, drei Tage trocken gereift. Über offener Flamme gegrillt, Rosmarin, Meersalz, Zitrone.',
    preis: '78,00',
    img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80',
    tag: 'Für Zwei',
  },
];

const REVIEWS = [
  {
    text: 'Wie bei der Nonna in der Toskana. Die Tagliatelle sind ein Gedicht, der Service ist familiär ohne aufdringlich zu sein. Wir kommen wieder.',
    autor: 'Maria K.',
    quelle: 'Google',
    datum: 'vor 2 Wochen',
  },
  {
    text: 'Endlich ein italienisches Restaurant das es ernst meint. Echte Carbonara ohne Sahne, echte Pizza, echter Espresso. In Stuttgart Mangelware.',
    autor: 'Thomas B.',
    quelle: 'Google',
    datum: 'vor 1 Monat',
  },
  {
    text: 'Der Bistecca war perfekt — innen rosa, außen Kruste. Der Chianti dazu eine Empfehlung des Hauses, beides Spitze.',
    autor: 'Christian H.',
    quelle: 'Google',
    datum: 'vor 3 Wochen',
  },
];

// ─── Helper: scrolltriggered Fade-In ────────────────────────────────────────
function FadeIn({ children, delay = 0, className = '' }: {
  children: React.ReactNode; delay?: number; className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// PAGE
// ═══════════════════════════════════════════════════════════════════════════

export default function BeispielCasaLupo() {
  // Body-Background auf das Casa-Lupo-Creme setzen für Bereich außerhalb der Page
  useEffect(() => {
    const prev = document.body.style.background;
    document.body.style.background = '#FAF5EE';
    return () => { document.body.style.background = prev; };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      <div className="casa-lupo-page min-h-screen">
        {/* ─── Header ─────────────────────────────────────────────────── */}
        <header
          className="absolute top-0 left-0 right-0 z-50"
          style={{ padding: '20px 32px' }}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <span className="cl-display text-2xl text-white tracking-wide" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}>
                Casa <em style={{ color: '#C99B4A' }}>Lupo</em>
              </span>
            </a>

            {/* Nav (Desktop) */}
            <nav className="hidden md:flex items-center gap-8">
              {['Speisekarte', 'Geschichte', 'Galerie', 'Reservieren'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="cl-ui text-xs font-semibold tracking-[0.15em] uppercase text-white/80 hover:text-white transition-colors"
                  style={{ textShadow: '0 1px 6px rgba(0,0,0,0.4)' }}
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Demo-Banner: zurück zu DRVN */}
            <Link
              to="/leistungen/webseiten"
              className="cl-glass-cta cl-ui text-[11px] font-semibold tracking-[0.12em] uppercase px-4 py-2 rounded-full inline-flex items-center gap-2"
            >
              <ArrowRight size={12} className="rotate-180" /> DRVN-Beispiel
            </Link>
          </div>
        </header>

        {/* ─── Hero (Glass over Image) ────────────────────────────────── */}
        <section className="relative min-h-[100dvh] w-full overflow-hidden">
          {/* Background Image + Gradient */}
          <div className="absolute inset-0 z-0">
            <img
              src={HERO_IMG}
              alt=""
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(180deg, rgba(31,15,10,0.55) 0%, rgba(31,15,10,0.30) 40%, rgba(31,15,10,0.78) 100%)',
              }}
            />
          </div>

          {/* Hero-Content */}
          <div className="relative z-10 min-h-[100dvh] flex items-center px-6 lg:px-12">
            <div className="max-w-3xl">
              <span className="cl-eyebrow text-white/80 mb-6 inline-flex">
                <span className="cl-section-num">est. 2014</span>
                Trattoria · Stuttgart-Mitte
              </span>
              <h1 className="cl-display text-[clamp(48px,8vw,120px)] leading-[0.95] mt-2 text-white">
                La cucina<br />
                <em style={{ color: '#C99B4A', fontStyle: 'italic' }}>della famiglia.</em>
              </h1>
              <p className="cl-body text-white/85 text-lg lg:text-xl mt-7 max-w-xl leading-[1.6]">
                Echte italienische Küche aus der Toskana. Pasta von Hand,
                Brot aus dem Steinofen, Wein aus eigener Quelle.
              </p>

              <div className="flex flex-wrap gap-3 mt-10">
                <a href="#reservieren" className="cl-glass-cta cl-ui text-sm font-semibold uppercase tracking-[0.12em] px-7 py-4 rounded-full inline-flex items-center gap-2">
                  Tisch reservieren <ArrowRight size={14} />
                </a>
                <a href="#speisekarte" className="cl-ui text-sm font-semibold uppercase tracking-[0.12em] px-7 py-4 rounded-full inline-flex items-center gap-2 text-white/90 border border-white/20 hover:bg-white/10 transition-colors backdrop-blur-md">
                  Speisekarte
                </a>
              </div>

              {/* Quick-Info-Pills */}
              <div className="flex flex-wrap gap-x-8 gap-y-3 mt-10">
                {[
                  { icon: <MapPin size={13} />, text: 'Königstraße 88, Stuttgart' },
                  { icon: <Clock size={13} />, text: 'Mo–Sa, 12:00 – 23:00' },
                  { icon: <Star size={13} className="fill-current" />, text: '4,8 · 412 Bewertungen' },
                ].map((p) => (
                  <div key={p.text} className="flex items-center gap-2 text-white/75 cl-ui text-xs tracking-wider uppercase">
                    <span style={{ color: '#C99B4A' }}>{p.icon}</span>
                    {p.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── About ──────────────────────────────────────────────────── */}
        <section id="geschichte" className="px-6 py-24 lg:py-32" style={{ background: 'var(--cl-bg)' }}>
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn>
              <span className="cl-eyebrow"><span className="cl-section-num">01</span> Die Familie</span>
              <h2 className="cl-display text-4xl lg:text-6xl mt-5 leading-[1.05]">
                Toskana,<br />
                <em style={{ color: 'var(--cl-primary)', fontStyle: 'italic' }}>Großmutter</em>, Stuttgart.
              </h2>
              <p className="cl-body text-base lg:text-lg mt-7 leading-[1.7] cl-drop-cap" style={{ color: 'var(--cl-muted-fg)' }}>
                Casa Lupo wurde 2014 von Giovanni Lupo gegründet — mit den Rezepten seiner Großmutter
                aus Lucca. Sein Vater betreibt heute noch dieselbe Pasteria, in der Giovanni das Handwerk
                gelernt hat.
              </p>
              <p className="cl-body text-base lg:text-lg mt-5 leading-[1.7]" style={{ color: 'var(--cl-muted-fg)' }}>
                Wir machen Pasta jeden Morgen frisch — ohne Eier-Pulver, ohne Tiefkühl-Tricks.
                Unser Olivenöl kommt direkt aus dem Familien-Hain in Toskana, gepresst zwei Wochen
                vor Lieferung.
              </p>

              {/* Stats-Grid */}
              <dl className="grid grid-cols-3 gap-6 mt-12 pt-8" style={{ borderTop: '1px solid var(--cl-border)' }}>
                {[
                  { val: '4,8', sub: '412 Google-Bewertungen', accent: true },
                  { val: '11', sub: 'Jahre in Stuttgart' },
                  { val: '24h', sub: 'Sugo-Reduktion' },
                ].map((s) => (
                  <div key={s.sub}>
                    <dt className="cl-ui text-[10px] tracking-[0.2em] uppercase" style={{ color: 'var(--cl-muted-fg)' }}>
                      {s.sub.split(' ')[0] === '412' ? 'Bewertung' : s.sub.split(' ').slice(0, 2).join(' ')}
                    </dt>
                    <dd className="cl-display text-3xl mt-1">
                      {s.val} {s.accent && <span style={{ color: 'var(--cl-accent)' }}>★</span>}
                    </dd>
                    <p className="cl-body text-xs mt-1" style={{ color: 'var(--cl-muted-fg)' }}>{s.sub}</p>
                  </div>
                ))}
              </dl>
            </FadeIn>

            {/* Image-Stapel */}
            <FadeIn delay={0.15} className="relative h-[500px] lg:h-[640px]">
              <div className="absolute top-0 left-0 w-[68%] h-[78%] rounded-2xl overflow-hidden" style={{ boxShadow: 'var(--cl-shadow-lg)' }}>
                <img src={ATMOSPHERE_IMGS[6].src} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-0 right-0 w-[58%] h-[55%] rounded-2xl overflow-hidden border-4" style={{ borderColor: 'var(--cl-bg)', boxShadow: 'var(--cl-shadow-lg)' }}>
                <img src={ATMOSPHERE_IMGS[2].src} alt="" className="w-full h-full object-cover" />
              </div>
              {/* Akzent-Element */}
              <div className="absolute top-[20%] right-[8%] cl-display text-white text-[180px] leading-none italic select-none pointer-events-none" style={{ color: 'var(--cl-accent)', opacity: 0.18 }}>
                "
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ─── Atmosphere Marquee ─────────────────────────────────────── */}
        <section id="galerie" className="relative overflow-hidden py-20 lg:py-28" style={{ background: 'var(--cl-muted)' }}>
          <FadeIn className="text-center mb-12 px-6">
            <span className="cl-eyebrow"><span className="cl-section-num">02</span> Atmosphäre</span>
            <h2 className="cl-display text-4xl lg:text-6xl mt-5 leading-[1.05]">
              Bei uns am Tisch.
            </h2>
          </FadeIn>

          {/* Marquee 1: Links */}
          <div className="overflow-hidden">
            <div className="cl-marquee flex gap-5 w-max">
              {[...ATMOSPHERE_IMGS, ...ATMOSPHERE_IMGS].map((img, i) => (
                <div key={i} className="w-[280px] h-[200px] lg:w-[360px] lg:h-[260px] flex-shrink-0 rounded-xl overflow-hidden" style={{ boxShadow: 'var(--cl-shadow-md)' }}>
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          </div>

          {/* Marquee 2: Rechts (reverse) */}
          <div className="overflow-hidden mt-5">
            <div className="cl-marquee flex gap-5 w-max" style={{ animationDirection: 'reverse', animationDuration: '60s' }}>
              {[...ATMOSPHERE_IMGS.slice().reverse(), ...ATMOSPHERE_IMGS.slice().reverse()].map((img, i) => (
                <div key={i} className="w-[280px] h-[200px] lg:w-[360px] lg:h-[260px] flex-shrink-0 rounded-xl overflow-hidden" style={{ boxShadow: 'var(--cl-shadow-md)' }}>
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Menu-Highlights ───────────────────────────────────────── */}
        <section id="speisekarte" className="px-6 py-24 lg:py-32" style={{ background: 'var(--cl-bg)' }}>
          <div className="max-w-6xl mx-auto">
            <FadeIn className="max-w-2xl mb-14">
              <span className="cl-eyebrow"><span className="cl-section-num">03</span> Aus der Küche</span>
              <h2 className="cl-display text-4xl lg:text-6xl mt-5 leading-[1.05]">
                <em style={{ color: 'var(--cl-primary)', fontStyle: 'italic' }}>Ausgewählte</em><br />
                Gerichte.
              </h2>
              <p className="cl-body text-base lg:text-lg mt-6 leading-[1.7]" style={{ color: 'var(--cl-muted-fg)' }}>
                Drei Klassiker aus unserer Karte. Saisonal ergänzt — die volle Speisekarte
                erhalten Sie am Tisch oder online.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {MENU_HIGHLIGHTS.map((g, i) => (
                <FadeIn key={g.name} delay={i * 0.1}>
                  <article
                    className="rounded-2xl overflow-hidden h-full flex flex-col group cursor-pointer"
                    style={{ background: 'var(--cl-card)', boxShadow: 'var(--cl-shadow-md)', border: '1px solid var(--cl-border)' }}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src={g.img} alt={g.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <span className="cl-ui text-[10px] font-semibold tracking-[0.2em] uppercase mb-3 self-start px-2.5 py-1 rounded-full" style={{ background: 'var(--cl-accent)', color: 'var(--cl-fg)', opacity: 0.92 }}>
                        {g.tag}
                      </span>
                      <h3 className="cl-display text-2xl leading-tight mb-2">{g.name}</h3>
                      <p className="cl-body text-sm leading-[1.6] flex-1" style={{ color: 'var(--cl-muted-fg)' }}>{g.beschreibung}</p>
                      <div className="flex items-baseline justify-between mt-5 pt-5" style={{ borderTop: '1px solid var(--cl-border)' }}>
                        <span className="cl-display text-2xl" style={{ color: 'var(--cl-primary)' }}>{g.preis} €</span>
                        <span className="cl-ui text-[11px] font-semibold tracking-[0.15em] uppercase flex items-center gap-1" style={{ color: 'var(--cl-muted-fg)' }}>
                          Bestellen <ChevronRight size={11} />
                        </span>
                      </div>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.3} className="mt-12 flex justify-center">
              <button className="cl-btn-ghost">
                Vollständige Speisekarte ansehen <ArrowRight size={14} />
              </button>
            </FadeIn>
          </div>
        </section>

        {/* ─── Reviews (Dark Section) ─────────────────────────────────── */}
        <section id="bewertungen" className="relative px-6 py-28 lg:py-40 overflow-hidden" style={{ background: 'var(--cl-fg)', color: 'var(--cl-bg)' }}>
          {/* Dot pattern */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, var(--cl-accent) 1px, transparent 0)',
              backgroundSize: '32px 32px',
            }}
          />
          {/* Akzent-Schleife */}
          <svg className="pointer-events-none absolute -left-32 top-20 w-[600px]" style={{ color: 'var(--cl-accent)', opacity: 0.06 }} viewBox="0 0 460 154" fill="none">
            <path
              d="M-87.463 458.432C-102.118 348.092 -77.3418 238.841 -15.0744 188.274C57.4129 129.408 180.708 150.071 351.748 341.128C278.246 -374.233 633.954 380.602 548.123 42.7707"
              stroke="currentColor" strokeLinecap="round" strokeWidth="40"
            />
          </svg>

          <div className="relative max-w-6xl mx-auto">
            <FadeIn className="max-w-3xl">
              <span className="cl-eyebrow" style={{ color: 'var(--cl-accent)' }}>
                <span className="cl-section-num" style={{ color: 'var(--cl-accent)' }}>04</span>
                Was Gäste sagen
              </span>
              <h2 className="cl-display text-5xl lg:text-7xl mt-5 leading-[1.05]">
                <em style={{ color: 'var(--cl-accent)', fontStyle: 'italic' }}>4,8</em> von 5 Sternen.
              </h2>
              <p className="cl-body text-base lg:text-lg opacity-75 mt-6 leading-[1.7] max-w-xl">
                Über 412 Google-Bewertungen — und unsere Stammgäste, die jede Woche wiederkommen.
              </p>
            </FadeIn>

            {/* Featured Quote */}
            <FadeIn delay={0.15} className="mt-16 lg:mt-20">
              <div className="grid lg:grid-cols-12 gap-10 items-start">
                <div className="lg:col-span-8">
                  <div className="cl-display text-7xl leading-none mb-6" style={{ color: 'var(--cl-accent)', opacity: 0.5 }}>"</div>
                  <p className="cl-display text-2xl lg:text-4xl leading-[1.25] italic">
                    {REVIEWS[0].text}
                  </p>
                  <div className="flex items-center gap-3 mt-6">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="fill-current" style={{ color: 'var(--cl-accent)' }} />
                      ))}
                    </div>
                    <span className="cl-ui text-xs tracking-wider uppercase opacity-75">
                      {REVIEWS[0].autor} · {REVIEWS[0].quelle}
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-4 grid gap-5">
                  {REVIEWS.slice(1).map((r) => (
                    <div key={r.autor} className="rounded-xl p-5" style={{ border: '1px solid rgba(201,155,74,0.2)', background: 'rgba(255,252,246,0.04)' }}>
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={11} className="fill-current" style={{ color: 'var(--cl-accent)' }} />
                        ))}
                      </div>
                      <p className="cl-body text-sm leading-[1.55] opacity-90 mb-3">"{r.text}"</p>
                      <p className="cl-ui text-[10px] tracking-wider uppercase opacity-60">
                        {r.autor} · {r.datum}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ─── Reservation CTA ────────────────────────────────────────── */}
        <section id="reservieren" className="relative px-6 py-28 lg:py-36" style={{ background: 'var(--cl-bg)' }}>
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <span className="cl-eyebrow"><span className="cl-section-num">05</span> Buchen</span>
              <h2 className="cl-display text-5xl lg:text-7xl mt-5 leading-[1.05]">
                <em style={{ color: 'var(--cl-primary)', fontStyle: 'italic' }}>Andiamo</em><br />
                a tavola.
              </h2>
              <p className="cl-body text-base lg:text-lg mt-7 leading-[1.7] max-w-xl mx-auto" style={{ color: 'var(--cl-muted-fg)' }}>
                Reservieren Sie online — Bestätigung in unter einer Minute per E-Mail.
                Für größere Tische ab 6 Personen rufen Sie uns am liebsten direkt an.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-10">
                <button className="cl-btn-primary">
                  <Wine size={15} /> Tisch reservieren
                </button>
                <a href="tel:+497112345678" className="cl-btn-ghost">
                  <Phone size={14} /> 0711 234567
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ─── Footer ─────────────────────────────────────────────────── */}
        <footer className="px-6 py-16 lg:py-20" style={{ background: 'var(--cl-fg)', color: 'var(--cl-bg)' }}>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12 pb-12" style={{ borderBottom: '1px solid rgba(201,155,74,0.15)' }}>
              {/* Logo + Tagline */}
              <div className="md:col-span-2">
                <div className="cl-display text-3xl mb-3">
                  Casa <em style={{ color: 'var(--cl-accent)' }}>Lupo</em>
                </div>
                <p className="cl-body text-sm opacity-70 leading-[1.7] max-w-md">
                  Familiengeführte Trattoria in Stuttgart-Mitte.
                  Toskanische Küche, hausgemachte Pasta, italienisches Herz.
                </p>
              </div>

              {/* Kontakt */}
              <div>
                <h4 className="cl-ui text-[11px] font-semibold tracking-[0.2em] uppercase opacity-60 mb-4">Kontakt</h4>
                <ul className="space-y-2.5 cl-body text-sm">
                  <li className="flex items-start gap-2.5">
                    <MapPin size={13} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--cl-accent)' }} />
                    Königstraße 88<br />70173 Stuttgart
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Phone size={13} style={{ color: 'var(--cl-accent)' }} />
                    0711 234567
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Mail size={13} style={{ color: 'var(--cl-accent)' }} />
                    ciao@casalupo.de
                  </li>
                </ul>
              </div>

              {/* Öffnungszeiten */}
              <div>
                <h4 className="cl-ui text-[11px] font-semibold tracking-[0.2em] uppercase opacity-60 mb-4">Öffnungszeiten</h4>
                <ul className="space-y-2 cl-body text-sm">
                  <li className="flex justify-between"><span>Mo – Do</span><span className="opacity-70">12:00 – 22:30</span></li>
                  <li className="flex justify-between"><span>Fr – Sa</span><span className="opacity-70">12:00 – 23:00</span></li>
                  <li className="flex justify-between"><span>Sonntag</span><span className="opacity-70">17:30 – 22:00</span></li>
                </ul>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="cl-ui text-[10px] tracking-[0.2em] uppercase opacity-50">
                © 2026 Casa Lupo · Alle Rechte vorbehalten
              </p>
              <p className="cl-ui text-[10px] tracking-[0.2em] uppercase opacity-50 flex items-center gap-2">
                <Leaf size={11} style={{ color: 'var(--cl-secondary)' }} />
                Beispielwebseite gebaut von{' '}
                <Link to="/" className="opacity-100 hover:opacity-80 transition-opacity" style={{ color: 'var(--cl-accent)' }}>
                  DRVN
                </Link>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

// Suppress unused warnings — Flame import wird vielleicht noch genutzt
void Flame;
