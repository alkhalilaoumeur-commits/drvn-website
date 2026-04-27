import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight, ArrowUpRight, MapPin, Phone, Mail, Calendar,
  Star, Wine, Clock, Plus,
} from 'lucide-react';

// ═══════════════════════════════════════════════════════════════════════════
// Casa Lupo — modernes italienisches Bistro/Wine-Bar
// Stil: Editorial-Magazine, NICHT klassische Trattoria.
// Tannengrün + Off-White + Terracotta. Split-Hero, Bento-Grid, Floating-Quotes.
// ═══════════════════════════════════════════════════════════════════════════

const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,700;1,9..144,400;1,9..144,700&family=Inter:wght@300;400;500;600;700&display=swap');

.casa-lupo-page {
  /* Surface — moderne Bistro-Palette */
  --cl-bg: #F8F5F0;             /* off-white, leicht warm */
  --cl-fg: #0E0E0E;             /* fast-schwarz, präzise */
  --cl-paper: #FFFFFF;
  --cl-stone: #E8E2D5;          /* sand */
  --cl-stone-deep: #C9C0AE;
  --cl-fg-soft: #2A2A28;
  --cl-fg-mute: #6B6862;

  /* Brand — Forest + Terracotta */
  --cl-forest: #1F3A2E;         /* Tannengrün */
  --cl-forest-deep: #14271F;
  --cl-terra: #D2693C;          /* Terracotta */
  --cl-terra-soft: #E89270;
  --cl-saffron: #E8A53D;

  background: var(--cl-bg);
  color: var(--cl-fg);
  font-family: 'Inter', system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  letter-spacing: -0.011em;
}

.cl-display {
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 400;
  font-variation-settings: 'opsz' 144, 'SOFT' 50;
  letter-spacing: -0.025em;
}
.cl-display-italic {
  font-family: 'Fraunces', Georgia, serif;
  font-style: italic;
  font-weight: 400;
  letter-spacing: -0.02em;
}
.cl-mono { font-family: 'Inter', system-ui, sans-serif; }

/* Tag-Label (klein, eckig, Mono-Anmutung) */
.cl-tag {
  display: inline-block;
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  padding: 5px 10px;
  border: 1px solid currentColor;
  border-radius: 0;
}

/* Big Number Statement */
.cl-big-num {
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 400;
  font-variation-settings: 'opsz' 144, 'SOFT' 30;
  font-size: clamp(72px, 12vw, 160px);
  line-height: 0.85;
  letter-spacing: -0.05em;
}

/* Bento-Hover */
.cl-bento-card {
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}
.cl-bento-card:hover { transform: translateY(-4px); }

/* Polaroid-Frame (für Hero-Bild + Image-Stack) */
.cl-polaroid {
  background: var(--cl-paper);
  padding: 12px 12px 48px;
  box-shadow: 0 24px 48px -16px rgba(14,14,14,0.20), 0 8px 16px -8px rgba(14,14,14,0.10);
  position: relative;
}
.cl-polaroid::after {
  content: 'Casa Lupo · 2026';
  position: absolute;
  bottom: 14px;
  left: 0;
  right: 0;
  text-align: center;
  font-family: 'Fraunces', serif;
  font-style: italic;
  font-size: 13px;
  color: var(--cl-fg-mute);
}

/* Buttons */
.cl-btn-primary {
  background: var(--cl-fg);
  color: var(--cl-bg);
  padding: 16px 28px;
  border-radius: 0;
  font-weight: 500;
  font-size: 13px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}
.cl-btn-primary:hover { background: var(--cl-forest); }
.cl-btn-ghost {
  background: transparent;
  color: var(--cl-fg);
  padding: 16px 24px;
  border-radius: 0;
  font-weight: 500;
  font-size: 13px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  border: 1px solid var(--cl-fg);
  cursor: pointer;
  transition: all 0.3s ease;
}
.cl-btn-ghost:hover { background: var(--cl-fg); color: var(--cl-bg); }

/* Big-Type-Statement Strip */
.cl-strip {
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 400;
  font-variation-settings: 'opsz' 144;
  font-size: clamp(40px, 7vw, 96px);
  line-height: 1.0;
  letter-spacing: -0.04em;
  white-space: nowrap;
}

/* Pairing-Card */
.cl-pairing-card {
  border-top: 1px solid var(--cl-stone-deep);
  padding: 28px 0;
  display: grid;
  grid-template-columns: 80px 1fr auto;
  gap: 20px;
  align-items: baseline;
}

/* Floating Quote */
.cl-quote-card {
  background: var(--cl-paper);
  border: 1px solid var(--cl-stone);
  padding: 28px;
  position: relative;
}
.cl-quote-card::before {
  content: '"';
  position: absolute;
  top: 8px;
  left: 18px;
  font-family: 'Fraunces', serif;
  font-style: italic;
  font-size: 80px;
  line-height: 1;
  color: var(--cl-terra);
  opacity: 0.35;
}
`;

// Bilder von Unsplash (italienisches Bistro-Vibe)
const HERO_IMG = 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=80'; // Pasta-Schale auf Holz
const ATMOSPHERE_IMGS = {
  big: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80',     // Restaurant-Interior
  pasta: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=900&q=80',
  pizza: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=900&q=80',
  wine: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=900&q=80',
  bruschetta: 'https://images.unsplash.com/photo-1576402187878-974f70c890a5?w=900&q=80',
  tiramisu: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=900&q=80',
  chef: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=900&q=80',     // Pasta zubereiten
};

const MENU_BENTO = [
  {
    name: 'Tagliatelle al Tartufo',
    sub: 'mit schwarzem Sommertrüffel',
    preis: '24,50',
    img: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=900&q=80',
    size: 'big',
    region: 'Piemont',
  },
  {
    name: 'Spaghetti Vongole',
    preis: '19,80',
    img: ATMOSPHERE_IMGS.pasta,
    region: 'Sizilien',
  },
  {
    name: 'Bistecca Fiorentina',
    preis: '78,00',
    img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=900&q=80',
    region: 'Toskana · für Zwei',
  },
  {
    name: 'Bruschetta Pomodoro',
    preis: '8,90',
    img: ATMOSPHERE_IMGS.bruschetta,
    region: 'Lazio',
  },
  {
    name: 'Tiramisu della Casa',
    preis: '7,50',
    img: ATMOSPHERE_IMGS.tiramisu,
    region: 'Veneto',
  },
];

const PAIRINGS = [
  { jahr: '2019', name: 'Brunello di Montalcino · Banfi', region: 'Toskana', preis: '14,00' },
  { jahr: '2020', name: 'Barolo · Pio Cesare', region: 'Piemont', preis: '16,50' },
  { jahr: '2021', name: 'Chianti Classico · Ruffino', region: 'Toskana', preis: '9,80' },
  { jahr: '2022', name: 'Vermentino · Argiolas', region: 'Sardinien', preis: '8,50' },
];

const REVIEWS = [
  {
    text: 'Das Tagliatelle al Tartufo war ein Erlebnis. Service unaufdringlich aber präzise — wir bleiben Stammgäste.',
    autor: 'Maria K.',
    datum: 'vor 2 Wochen',
  },
  {
    text: 'Endlich ein italienisches Bistro das es ernst meint. Echte Carbonara, perfekter Espresso, Weinberatung Spitze.',
    autor: 'Thomas B.',
    datum: 'vor 1 Monat',
  },
  {
    text: 'Bistecca war auf den Punkt — innen rosa, außen Kruste. Der Brunello dazu eine Empfehlung des Hauses, beides Spitze.',
    autor: 'Christian H.',
    datum: 'vor 3 Wochen',
  },
  {
    text: 'Wir waren mit unseren Eltern da — sie haben das Tiramisu im Vergleich zu Italien gelobt. Das sagt alles.',
    autor: 'Anna R.',
    datum: 'vor 1 Woche',
  },
];

// ─── Helper-Komponenten ──────────────────────────────────────────────────
function FadeIn({ children, delay = 0, className = '' }: {
  children: React.ReactNode; delay?: number; className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Big-Type-Strip mit horizontalem Parallax
function BigStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const x = useTransform(scrollYProgress, [0, 1], ['10%', '-30%']);

  return (
    <section ref={ref} className="overflow-hidden py-24 lg:py-36" style={{ background: 'var(--cl-bg)' }}>
      <motion.div style={{ x }} className="cl-strip flex items-center gap-12 select-none">
        <span style={{ color: 'var(--cl-fg)' }}>Pasta fresca.</span>
        <span style={{ color: 'var(--cl-terra)', fontStyle: 'italic' }}>Vino vero.</span>
        <span style={{ color: 'var(--cl-forest)' }}>Cucina onesta.</span>
        <span style={{ color: 'var(--cl-fg)', fontStyle: 'italic' }}>Buon appetito.</span>
        <span style={{ color: 'var(--cl-terra)' }}>Pasta fresca.</span>
        <span style={{ color: 'var(--cl-fg-soft)', fontStyle: 'italic' }}>Vino vero.</span>
      </motion.div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// PAGE
// ═══════════════════════════════════════════════════════════════════════════

export default function BeispielCasaLupo() {
  useEffect(() => {
    const prev = document.body.style.background;
    document.body.style.background = '#F8F5F0';
    return () => { document.body.style.background = prev; };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      <div className="casa-lupo-page min-h-screen">

        {/* ─── Header (sticky, schlicht) ──────────────────────────────── */}
        <header className="sticky top-0 z-50" style={{ background: 'rgba(248,245,240,0.85)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderBottom: '1px solid var(--cl-stone)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
            <a href="#" className="flex items-center gap-1">
              <span className="cl-display text-xl tracking-tight">Casa</span>
              <span className="cl-display-italic text-xl" style={{ color: 'var(--cl-terra)' }}>Lupo</span>
            </a>
            <nav className="hidden md:flex items-center gap-9">
              {[
                { label: 'Carta', id: 'carta' },
                { label: 'Vini', id: 'vini' },
                { label: 'Casa', id: 'casa' },
                { label: 'Visitare', id: 'visitare' },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-[11px] font-semibold tracking-[0.18em] uppercase hover:text-[color:var(--cl-terra)] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <Link
                to="/leistungen/webseiten"
                className="hidden sm:inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.18em] uppercase opacity-50 hover:opacity-100 transition-opacity"
              >
                <ArrowRight size={11} className="rotate-180" /> DRVN-Beispiel
              </Link>
              <button className="cl-btn-primary text-[11px] px-5 py-2.5">
                Reservieren
              </button>
            </div>
          </div>
        </header>

        {/* ─── HERO: Split-Layout (Type links, Polaroid rechts) ─────────── */}
        <section className="relative px-6 lg:px-10 pt-20 lg:pt-28 pb-20 lg:pb-32">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-14 lg:gap-20 items-center">
            {/* Left: massive Editorial Type */}
            <div>
              <div className="flex items-center gap-3 mb-9">
                <span className="cl-tag" style={{ color: 'var(--cl-fg-mute)' }}>Stuttgart · 2014</span>
                <span className="text-[11px] font-medium tracking-[0.18em] uppercase" style={{ color: 'var(--cl-fg-mute)' }}>
                  Bistro &amp; Vineria
                </span>
              </div>
              <h1 className="cl-display text-[clamp(56px,9vw,156px)] leading-[0.85] tracking-[-0.04em]">
                Trattoria<br />
                <span className="cl-display-italic" style={{ color: 'var(--cl-terra)' }}>per davvero.</span>
              </h1>
              <p className="text-base lg:text-lg mt-10 max-w-md leading-[1.65]" style={{ color: 'var(--cl-fg-soft)' }}>
                Italienische Küche ohne Ländler-Klischee. Pasta morgens
                gemacht, Wein direkt vom Erzeuger, Service ohne Show.
                Mitten in Stuttgart.
              </p>
              <div className="flex flex-wrap gap-3 mt-10">
                <button className="cl-btn-primary">
                  <Calendar size={14} /> Tisch reservieren
                </button>
                <a href="#carta" className="cl-btn-ghost">Carta ansehen</a>
              </div>

              {/* Inline-Stats unter den Buttons (statt Badges) */}
              <div className="flex flex-wrap gap-x-10 gap-y-3 mt-12 pt-8" style={{ borderTop: '1px solid var(--cl-stone-deep)' }}>
                <div>
                  <div className="cl-display text-2xl">4,8 <span style={{ color: 'var(--cl-terra)' }}>★</span></div>
                  <div className="text-[10px] tracking-[0.2em] uppercase mt-1" style={{ color: 'var(--cl-fg-mute)' }}>412 Bewertungen</div>
                </div>
                <div>
                  <div className="cl-display text-2xl">11</div>
                  <div className="text-[10px] tracking-[0.2em] uppercase mt-1" style={{ color: 'var(--cl-fg-mute)' }}>Jahre Stuttgart</div>
                </div>
                <div>
                  <div className="cl-display text-2xl">68</div>
                  <div className="text-[10px] tracking-[0.2em] uppercase mt-1" style={{ color: 'var(--cl-fg-mute)' }}>Weine im Keller</div>
                </div>
              </div>
            </div>

            {/* Right: Polaroid mit Tape */}
            <div className="relative justify-self-center lg:justify-self-end">
              {/* Tape oben */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 w-24 h-7 rotate-2" style={{ background: 'rgba(232,165,61,0.55)', boxShadow: '0 1px 2px rgba(0,0,0,0.08)' }} />
              <motion.div
                initial={{ rotate: -3, opacity: 0, y: 30 }}
                animate={{ rotate: -3, opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                className="cl-polaroid w-[320px] sm:w-[400px] lg:w-[440px]"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={HERO_IMG} alt="" className="w-full h-full object-cover" />
                </div>
              </motion.div>
              {/* Floating Tag rechts unten */}
              <div className="absolute -bottom-2 -right-2 lg:-right-6 cl-tag rotate-3" style={{ background: 'var(--cl-forest)', color: 'var(--cl-bg)', borderColor: 'var(--cl-forest)' }}>
                Heute Aperitivo · 18 – 19 h
              </div>
            </div>
          </div>
        </section>

        {/* ─── BIG-TYPE-STRIP (Parallax) ──────────────────────────────── */}
        <BigStrip />

        {/* ─── CASA / About — Big-Number-Layout ────────────────────────── */}
        <section id="casa" className="relative" style={{ background: 'var(--cl-forest)', color: 'var(--cl-bg)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-36 grid lg:grid-cols-12 gap-10">
            <FadeIn className="lg:col-span-5">
              <span className="cl-tag" style={{ color: 'var(--cl-saffron)', borderColor: 'var(--cl-saffron)' }}>Casa</span>
              <h2 className="cl-display text-5xl lg:text-7xl mt-6 leading-[0.95]">
                Eine Familie.<br />
                <span className="cl-display-italic" style={{ color: 'var(--cl-terra-soft)' }}>Eine Speisekarte.</span>
              </h2>
              <p className="text-base lg:text-lg mt-7 leading-[1.7] opacity-85">
                Casa Lupo wurde 2014 von Giovanni Lupo gegründet — mit den Rezepten
                seiner Großmutter aus Lucca. Sein Vater betreibt heute noch dieselbe
                Pasteria, in der Giovanni das Handwerk gelernt hat.
              </p>
              <p className="text-base lg:text-lg mt-5 leading-[1.7] opacity-75">
                Wir machen Pasta jeden Morgen frisch — ohne Eier-Pulver, ohne Tiefkühl-Tricks.
                Olivenöl direkt aus dem Familien-Hain in Lucca, gepresst zwei Wochen vor Lieferung.
              </p>
              <button className="cl-btn-ghost mt-9" style={{ color: 'var(--cl-bg)', borderColor: 'var(--cl-bg)' }}>
                Unsere Geschichte
              </button>
            </FadeIn>

            {/* Right: 4 Big Numbers im 2x2-Grid */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-x-6 gap-y-12 self-center">
              {[
                { num: '24', label: 'Stunden Sugo-Reduktion' },
                { num: '11', label: 'Jahre familiengeführt' },
                { num: '68', label: 'Weine aus 14 Regionen' },
                { num: '4,8', label: 'Sterne · 412 Reviews' },
              ].map((s, i) => (
                <FadeIn key={s.label} delay={0.1 + i * 0.05}>
                  <div className="cl-big-num" style={{ color: 'var(--cl-saffron)' }}>{s.num}</div>
                  <div className="text-[11px] tracking-[0.2em] uppercase mt-3 opacity-70">{s.label}</div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ─── BENTO-GALLERY (statt Marquee) ──────────────────────────── */}
        <section className="px-6 lg:px-10 py-24 lg:py-32" style={{ background: 'var(--cl-bg)' }}>
          <div className="max-w-7xl mx-auto">
            <FadeIn className="flex items-end justify-between mb-12">
              <div>
                <span className="cl-tag" style={{ color: 'var(--cl-terra)', borderColor: 'var(--cl-terra)' }}>Atmosfera</span>
                <h2 className="cl-display text-4xl lg:text-6xl mt-5 leading-[0.95] max-w-xl">
                  Der Abend bei <span className="cl-display-italic" style={{ color: 'var(--cl-terra)' }}>uns.</span>
                </h2>
              </div>
              <p className="hidden md:block text-sm max-w-xs leading-[1.6] mb-2" style={{ color: 'var(--cl-fg-mute)' }}>
                Eichenholzstühle, weiße Tischwäsche, offene Küche. Plätze für 42 Gäste,
                ein langer Tisch für Familien.
              </p>
            </FadeIn>

            {/* Bento-Grid: 1 großer + 4 kleine, asymmetrisch */}
            <div className="grid grid-cols-12 gap-3 lg:gap-4 auto-rows-[180px] lg:auto-rows-[220px]">
              {/* Big - Restaurant Interior */}
              <div className="col-span-12 lg:col-span-7 row-span-2 cl-bento-card overflow-hidden">
                <img src={ATMOSPHERE_IMGS.big} alt="Casa Lupo Restaurant Interior" className="w-full h-full object-cover" />
              </div>
              {/* Top-Right: Wine */}
              <div className="col-span-6 lg:col-span-5 cl-bento-card overflow-hidden">
                <img src={ATMOSPHERE_IMGS.wine} alt="Wein" className="w-full h-full object-cover" />
              </div>
              {/* Middle-Right: Tiramisu */}
              <div className="col-span-6 lg:col-span-5 cl-bento-card overflow-hidden">
                <img src={ATMOSPHERE_IMGS.tiramisu} alt="Tiramisu" className="w-full h-full object-cover" />
              </div>
              {/* Bottom-Left: Bruschetta */}
              <div className="col-span-6 lg:col-span-4 cl-bento-card overflow-hidden">
                <img src={ATMOSPHERE_IMGS.bruschetta} alt="Bruschetta" className="w-full h-full object-cover" />
              </div>
              {/* Bottom-Mid: Pizza */}
              <div className="col-span-6 lg:col-span-4 cl-bento-card overflow-hidden">
                <img src={ATMOSPHERE_IMGS.pizza} alt="Pizza" className="w-full h-full object-cover" />
              </div>
              {/* Bottom-Right: Chef */}
              <div className="col-span-12 lg:col-span-4 cl-bento-card overflow-hidden">
                <img src={ATMOSPHERE_IMGS.chef} alt="Pasta-Zubereitung" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* ─── CARTA / Menu — Bento-Mix mit unterschiedlichen Größen ─── */}
        <section id="carta" className="px-6 lg:px-10 py-24 lg:py-32" style={{ background: 'var(--cl-stone)' }}>
          <div className="max-w-7xl mx-auto">
            <FadeIn className="grid lg:grid-cols-12 gap-8 mb-14 items-end">
              <div className="lg:col-span-7">
                <span className="cl-tag" style={{ color: 'var(--cl-forest)', borderColor: 'var(--cl-forest)' }}>Carta</span>
                <h2 className="cl-display text-5xl lg:text-7xl mt-5 leading-[0.95]">
                  Die Karte ändert<br />
                  sich <span className="cl-display-italic" style={{ color: 'var(--cl-terra)' }}>monatlich.</span>
                </h2>
              </div>
              <p className="lg:col-span-5 text-base lg:text-lg leading-[1.65]" style={{ color: 'var(--cl-fg-soft)' }}>
                Wir kochen mit dem was die Saison hergibt. Spargel im April,
                Trüffel im Oktober, Wild im November. Hier ein Auszug aus dem aktuellen Stand.
              </p>
            </FadeIn>

            {/* Bento Menu: 1 groß (links breit), 4 kleine */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5">
              {/* Big Card */}
              <article className="cl-bento-card lg:col-span-2 lg:row-span-2 group cursor-pointer relative overflow-hidden" style={{ background: 'var(--cl-paper)' }}>
                <div className="aspect-[16/10] lg:aspect-auto lg:h-full overflow-hidden relative">
                  <img src={MENU_BENTO[0].img} alt={MENU_BENTO[0].name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 40%, rgba(14,14,14,0.85) 100%)' }} />
                  <div className="absolute bottom-0 left-0 right-0 p-7 lg:p-9 text-white">
                    <span className="cl-tag mb-3" style={{ color: 'rgba(255,255,255,0.85)', borderColor: 'rgba(255,255,255,0.4)' }}>{MENU_BENTO[0].region}</span>
                    <h3 className="cl-display text-3xl lg:text-5xl leading-[1.0] mb-2">{MENU_BENTO[0].name}</h3>
                    <p className="cl-display-italic text-base lg:text-lg opacity-90 mb-5">{MENU_BENTO[0].sub}</p>
                    <div className="flex items-baseline justify-between pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.2)' }}>
                      <span className="cl-display text-3xl">{MENU_BENTO[0].preis} €</span>
                      <span className="text-[11px] font-semibold tracking-[0.18em] uppercase opacity-80 inline-flex items-center gap-1.5">
                        Bestellen <ArrowUpRight size={13} />
                      </span>
                    </div>
                  </div>
                </div>
              </article>

              {/* 4 Small Cards */}
              {MENU_BENTO.slice(1).map((g) => (
                <article key={g.name} className="cl-bento-card group cursor-pointer overflow-hidden" style={{ background: 'var(--cl-paper)' }}>
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={g.img} alt={g.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <div className="text-[10px] tracking-[0.2em] uppercase font-semibold mb-2" style={{ color: 'var(--cl-fg-mute)' }}>{g.region}</div>
                    <h3 className="cl-display text-xl leading-tight">{g.name}</h3>
                    <div className="flex items-baseline justify-between mt-3 pt-3" style={{ borderTop: '1px solid var(--cl-stone-deep)' }}>
                      <span className="cl-display text-lg" style={{ color: 'var(--cl-terra)' }}>{g.preis} €</span>
                      <Plus size={14} className="opacity-60" />
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <FadeIn delay={0.2} className="mt-12 flex justify-center">
              <button className="cl-btn-ghost">
                Vollständige Carta · 36 Gerichte
              </button>
            </FadeIn>
          </div>
        </section>

        {/* ─── VINI / Wine-Pairing-Section (NEU, gab es bei Quan-An nicht) ─ */}
        <section id="vini" className="px-6 lg:px-10 py-24 lg:py-32" style={{ background: 'var(--cl-bg)' }}>
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
            <FadeIn>
              <div className="flex items-center gap-3 mb-6">
                <Wine size={16} style={{ color: 'var(--cl-terra)' }} />
                <span className="cl-tag" style={{ color: 'var(--cl-terra)', borderColor: 'var(--cl-terra)' }}>Vini</span>
              </div>
              <h2 className="cl-display text-5xl lg:text-7xl leading-[0.95]">
                68 Weine aus<br />
                <span className="cl-display-italic" style={{ color: 'var(--cl-terra)' }}>14 Regionen.</span>
              </h2>
              <p className="text-base lg:text-lg mt-7 leading-[1.65]" style={{ color: 'var(--cl-fg-soft)' }}>
                Unsere Sommelière Lucia berät Sie persönlich. Wir führen Klassiker
                aus Toskana und Piemont — aber auch unentdeckte Schätze aus Friaul,
                Marken und Sardinien.
              </p>

              <div className="mt-9 inline-flex items-center gap-3 text-sm">
                <span style={{ color: 'var(--cl-fg-mute)' }}>Glas-Auswahl ab</span>
                <span className="cl-display text-2xl" style={{ color: 'var(--cl-terra)' }}>6,50 €</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="border-b" style={{ borderColor: 'var(--cl-stone-deep)' }}>
                {PAIRINGS.map((w) => (
                  <div key={w.name} className="cl-pairing-card group cursor-pointer">
                    <span className="cl-display-italic text-2xl" style={{ color: 'var(--cl-terra)' }}>{w.jahr}</span>
                    <div>
                      <div className="cl-display text-lg lg:text-xl leading-tight">{w.name}</div>
                      <div className="text-xs tracking-wider uppercase mt-1.5" style={{ color: 'var(--cl-fg-mute)' }}>{w.region}</div>
                    </div>
                    <span className="cl-display text-lg lg:text-xl" style={{ color: 'var(--cl-fg)' }}>{w.preis} €</span>
                  </div>
                ))}
              </div>
              <button className="cl-btn-ghost mt-9">Komplette Weinkarte</button>
            </FadeIn>
          </div>
        </section>

        {/* ─── REVIEWS / Floating Quote-Cards (light, masonry-ähnlich) ── */}
        <section className="px-6 lg:px-10 py-24 lg:py-32" style={{ background: 'var(--cl-stone)' }}>
          <div className="max-w-6xl mx-auto">
            <FadeIn className="flex items-end justify-between mb-12">
              <div>
                <span className="cl-tag" style={{ color: 'var(--cl-fg)', borderColor: 'var(--cl-fg)' }}>Ospiti</span>
                <h2 className="cl-display text-5xl lg:text-7xl mt-5 leading-[0.95]">
                  Was Gäste<br />
                  <span className="cl-display-italic" style={{ color: 'var(--cl-terra)' }}>sagen.</span>
                </h2>
              </div>
              <div className="hidden md:block text-right">
                <div className="cl-display text-5xl">4,8 <span style={{ color: 'var(--cl-saffron)' }}>★</span></div>
                <div className="text-[11px] tracking-[0.2em] uppercase mt-2" style={{ color: 'var(--cl-fg-mute)' }}>412 Google-Bewertungen</div>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
              {REVIEWS.map((r, i) => (
                <FadeIn key={r.autor} delay={i * 0.07}>
                  <div className="cl-quote-card h-full">
                    <div className="flex mb-4 mt-4 lg:mt-6">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} size={11} className="fill-current" style={{ color: 'var(--cl-saffron)' }} />
                      ))}
                    </div>
                    <p className="cl-display-italic text-base lg:text-lg leading-[1.4] mb-5" style={{ color: 'var(--cl-fg-soft)' }}>
                      {r.text}
                    </p>
                    <div className="text-[10px] tracking-[0.2em] uppercase pt-4" style={{ color: 'var(--cl-fg-mute)', borderTop: '1px solid var(--cl-stone-deep)' }}>
                      {r.autor} · {r.datum}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ─── VISITARE / Reservation + Map-Mockup ───────────────────── */}
        <section id="visitare" className="px-6 lg:px-10 py-24 lg:py-36" style={{ background: 'var(--cl-bg)' }}>
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-14 items-stretch">
            <FadeIn>
              <span className="cl-tag" style={{ color: 'var(--cl-forest)', borderColor: 'var(--cl-forest)' }}>Visitare</span>
              <h2 className="cl-display text-5xl lg:text-7xl mt-5 leading-[0.95]">
                Wir freuen uns<br />
                auf Ihren <span className="cl-display-italic" style={{ color: 'var(--cl-terra)' }}>Besuch.</span>
              </h2>
              <p className="text-base lg:text-lg mt-7 leading-[1.65] max-w-xl" style={{ color: 'var(--cl-fg-soft)' }}>
                Reservierungen sind in unter einer Minute online möglich.
                Tische ab 6 Personen bitte telefonisch — wir sprechen dann persönlich
                über Ihre Wünsche.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
                <div className="pt-6" style={{ borderTop: '1px solid var(--cl-stone-deep)' }}>
                  <div className="text-[10px] tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--cl-fg-mute)' }}>Adresse</div>
                  <div className="cl-display text-xl leading-tight">Königstraße 88</div>
                  <div className="text-sm mt-1" style={{ color: 'var(--cl-fg-soft)' }}>70173 Stuttgart-Mitte</div>
                </div>
                <div className="pt-6" style={{ borderTop: '1px solid var(--cl-stone-deep)' }}>
                  <div className="text-[10px] tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--cl-fg-mute)' }}>Öffnungszeiten</div>
                  <div className="cl-display text-xl leading-tight">12:00 – 23:00</div>
                  <div className="text-sm mt-1" style={{ color: 'var(--cl-fg-soft)' }}>Mo – Sa · So ab 17:30</div>
                </div>
                <div className="pt-6" style={{ borderTop: '1px solid var(--cl-stone-deep)' }}>
                  <div className="text-[10px] tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--cl-fg-mute)' }}>Telefon</div>
                  <div className="cl-display text-xl leading-tight">0711 234567</div>
                </div>
                <div className="pt-6" style={{ borderTop: '1px solid var(--cl-stone-deep)' }}>
                  <div className="text-[10px] tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--cl-fg-mute)' }}>E-Mail</div>
                  <div className="cl-display text-xl leading-tight">ciao@casalupo.de</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-10">
                <button className="cl-btn-primary">
                  <Calendar size={14} /> Online reservieren
                </button>
                <a href="tel:+497112345678" className="cl-btn-ghost">
                  <Phone size={14} /> Anrufen
                </a>
              </div>
            </FadeIn>

            {/* Map-Mockup (statt echter Karte) */}
            <FadeIn delay={0.15} className="relative">
              <div className="aspect-square lg:aspect-auto lg:h-full relative overflow-hidden" style={{ background: 'var(--cl-stone)' }}>
                {/* Stylized Map mit Streets */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none" preserveAspectRatio="xMidYMid slice">
                  <rect width="400" height="400" fill="#E8E2D5" />
                  {/* Streets */}
                  <g stroke="#FFFFFF" strokeWidth="14" strokeLinecap="round">
                    <line x1="-20" y1="120" x2="420" y2="180" />
                    <line x1="-20" y1="280" x2="420" y2="240" />
                    <line x1="100" y1="-20" x2="160" y2="420" />
                    <line x1="280" y1="-20" x2="240" y2="420" />
                  </g>
                  <g stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" opacity="0.7">
                    <line x1="0" y1="60" x2="400" y2="80" />
                    <line x1="0" y1="340" x2="400" y2="360" />
                    <line x1="40" y1="0" x2="60" y2="400" />
                    <line x1="350" y1="0" x2="370" y2="400" />
                  </g>
                  {/* Building blocks */}
                  <g fill="#D5CDB8" opacity="0.6">
                    <rect x="170" y="50" width="65" height="55" />
                    <rect x="245" y="50" width="40" height="55" />
                    <rect x="170" y="190" width="40" height="40" />
                    <rect x="290" y="190" width="50" height="50" />
                    <rect x="60" y="250" width="55" height="55" />
                    <rect x="190" y="250" width="45" height="55" />
                    <rect x="250" y="290" width="60" height="55" />
                  </g>
                  {/* Casa Lupo Pin */}
                  <g transform="translate(195, 195)">
                    <circle r="22" fill="#D2693C" opacity="0.18" />
                    <circle r="14" fill="#D2693C" opacity="0.30" />
                    <circle r="7" fill="#D2693C" />
                  </g>
                </svg>
                {/* Pin-Label */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[calc(50%+44px)] cl-tag" style={{ background: 'var(--cl-paper)', color: 'var(--cl-fg)', borderColor: 'var(--cl-fg)', boxShadow: '0 4px 12px rgba(0,0,0,0.12)' }}>
                  Casa Lupo
                </div>
              </div>
              {/* Footer-Info unter Map */}
              <div className="mt-4 flex items-center justify-between text-xs" style={{ color: 'var(--cl-fg-mute)' }}>
                <span className="inline-flex items-center gap-2">
                  <MapPin size={12} /> 2 Min vom Hauptbahnhof
                </span>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="hover:underline inline-flex items-center gap-1">
                  In Maps öffnen <ArrowUpRight size={11} />
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ─── Footer (3-spaltig, schlicht) ──────────────────────────── */}
        <footer className="px-6 lg:px-10 pt-20 pb-10" style={{ background: 'var(--cl-fg)', color: 'var(--cl-bg)' }}>
          <div className="max-w-7xl mx-auto">
            {/* Riesiger Schriftzug */}
            <div className="mb-16 pb-12" style={{ borderBottom: '1px solid rgba(248,245,240,0.15)' }}>
              <h3 className="cl-display text-[clamp(80px,16vw,260px)] leading-[0.85] tracking-[-0.05em]">
                Casa<br />
                <span className="cl-display-italic" style={{ color: 'var(--cl-terra)' }}>Lupo</span>
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
              <div>
                <div className="text-[10px] tracking-[0.2em] uppercase opacity-50 mb-4">Kontakt</div>
                <ul className="space-y-2.5 text-sm">
                  <li><MapPin size={11} className="inline mr-2" style={{ color: 'var(--cl-terra)' }} />Königstraße 88</li>
                  <li><Phone size={11} className="inline mr-2" style={{ color: 'var(--cl-terra)' }} />0711 234567</li>
                  <li><Mail size={11} className="inline mr-2" style={{ color: 'var(--cl-terra)' }} />ciao@casalupo.de</li>
                </ul>
              </div>

              <div>
                <div className="text-[10px] tracking-[0.2em] uppercase opacity-50 mb-4">Stadt</div>
                <div className="text-sm">70173 Stuttgart-Mitte</div>
                <div className="text-sm opacity-70 mt-1">2 Min Hauptbahnhof</div>
              </div>

              <div>
                <div className="text-[10px] tracking-[0.2em] uppercase opacity-50 mb-4">Öffnungszeiten</div>
                <ul className="space-y-1.5 text-sm">
                  <li className="flex justify-between"><span>Mo–Do</span><span className="opacity-70">12 – 22:30</span></li>
                  <li className="flex justify-between"><span>Fr–Sa</span><span className="opacity-70">12 – 23:00</span></li>
                  <li className="flex justify-between"><span>Sonntag</span><span className="opacity-70">17:30 – 22</span></li>
                </ul>
              </div>

              <div>
                <div className="text-[10px] tracking-[0.2em] uppercase opacity-50 mb-4">Folgen</div>
                <ul className="space-y-2 text-sm">
                  <li className="opacity-90 hover:opacity-100 cursor-pointer inline-flex items-center gap-1.5">
                    Instagram <ArrowUpRight size={11} />
                  </li>
                  <li className="opacity-90 hover:opacity-100 cursor-pointer inline-flex items-center gap-1.5">
                    Newsletter <ArrowUpRight size={11} />
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-3 pt-6" style={{ borderTop: '1px solid rgba(248,245,240,0.1)' }}>
              <div className="text-[10px] tracking-[0.2em] uppercase opacity-50 inline-flex items-center gap-2">
                <Clock size={11} />
                © 2026 Casa Lupo · Alle Rechte vorbehalten
              </div>
              <div className="text-[10px] tracking-[0.2em] uppercase opacity-50">
                Beispiel · gebaut von{' '}
                <Link to="/" className="opacity-100 hover:opacity-80 transition-opacity" style={{ color: 'var(--cl-terra)' }}>
                  DRVN
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
