import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Zap, Shield, Globe, Monitor, CheckCircle2 } from 'lucide-react';
import { BRANCHEN } from '../lib/constants';
import SEO from '../components/SEO';

/* ===== Marquee Ticker ===== */
const TICKER = [
  'DSGVO-konform', 'Server in Deutschland', 'In 30 Min. live',
  'ServeFlow jetzt verfügbar', 'Keine Setup-Kosten', 'Webseiten ab 499 €',
  'Branchensoftware für KMU', '100% Made in Germany',
];

function Marquee() {
  const items = [...TICKER, ...TICKER, ...TICKER];
  return (
    <div className="border-y border-border py-4 overflow-hidden mask-edges bg-surface/40">
      <div className="flex animate-marquee gap-12" style={{ width: 'max-content' }}>
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-3 text-sm font-medium text-text-muted whitespace-nowrap">
            <span className="w-1 h-1 rounded-full bg-primary/70 flex-shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ===== Stats ===== */
const STATS = [
  { zahl: '30 Min.', label: 'bis zum ersten Live-Betrieb' },
  { zahl: '100%', label: 'DSGVO-konform by Default' },
  { zahl: '5+', label: 'Branchen in Entwicklung' },
  { zahl: '24h', label: 'Antwortzeit garantiert' },
];

/* ===== Mini Product Card ===== */
function ProductCard({ to, icon, name, tag, desc, highlight = false }: {
  to: string; icon: React.ReactNode; name: string;
  tag: string; desc: string; highlight?: boolean;
}) {
  return (
    <Link
      to={to}
      className={`group flex flex-col p-6 rounded-2xl border transition-all duration-300 card-hover ${
        highlight
          ? 'gradient-border bg-bg shadow-lg shadow-primary/5'
          : 'bg-bg border-border hover:border-border-light'
      }`}
      data-animate
    >
      <div className="flex items-start justify-between mb-5">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
          highlight ? 'bg-gradient-to-br from-primary to-secondary' : 'bg-surface border border-border'
        }`}>
          {icon}
        </div>
        <span className={`text-[11px] rounded-full px-2.5 py-1 font-medium border ${
          tag === 'Live'
            ? 'bg-success/10 text-success border-success/20'
            : 'bg-surface text-text-muted border-border'
        }`}>{tag}</span>
      </div>
      <h3 className="font-bold text-base mb-1.5">{name}</h3>
      <p className="text-sm text-text-muted leading-relaxed flex-1">{desc}</p>
      <div className="flex items-center gap-1 text-primary text-xs font-medium mt-4 group-hover:gap-2 transition-all">
        Mehr erfahren <ChevronRight size={12} />
      </div>
    </Link>
  );
}

export default function Startseite() {
  return (
    <div className="pt-16">
      <SEO
        title="DRVN — Branchenspezifische SaaS-Lösungen für Deutschland"
        description="DRVN entwickelt digitale Plattformen für Gastronomie, Handwerk und mehr — DSGVO-konform, sofort einsetzbar, Server in Deutschland."
        path="/"
        keywords="SaaS Deutschland, Branchensoftware, Gastronomie Software, Handwerk Software, DSGVO-konform, digitale Transformation KMU"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'DRVN',
          url: 'https://drvnautomatisations.com',
        }}
      />

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
        <div className="absolute top-[-15%] left-[5%] w-[800px] h-[800px] bg-primary/7 rounded-full blur-[160px] pointer-events-none orb-animate" />
        <div className="absolute bottom-[-20%] right-[0%] w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[140px] pointer-events-none orb-animate-slow" />

        <div className="max-w-6xl mx-auto px-6 pt-24 pb-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Links: Text */}
            <div>
              <div className="inline-flex items-center gap-2 bg-surface/80 backdrop-blur-sm border border-border rounded-full px-4 py-1.5 text-xs text-text-muted mb-7 animate-fade-in-up">
                <span className="w-1.5 h-1.5 bg-success rounded-full animate-pulse" />
                ServeFlow für Gastronomie ist live
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-[1.06] tracking-tight mb-6 animate-fade-in-up-delay-1">
                Software die<br />
                <span className="text-gradient">wirklich passt.</span>
              </h1>

              <p className="text-text-muted text-lg leading-relaxed mb-8 max-w-lg animate-fade-in-up-delay-2">
                DRVN entwickelt branchenspezifische Lösungen für deutsche Unternehmen —
                DSGVO-konform, sofort einsetzbar, Server in Deutschland.
              </p>

              <ul className="space-y-2 mb-8 animate-fade-in-up-delay-3">
                {['Keine generischen Tools', 'In 30 Minuten live', 'Voller Support inklusive'].map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-text-muted">
                    <CheckCircle2 size={15} className="text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-up-delay-4">
                <Link
                  to="/produkte/serveflow"
                  className="bg-primary hover:bg-primary/90 text-white font-semibold px-7 py-3.5 rounded-xl transition-all glow-blue inline-flex items-center justify-center gap-2"
                >
                  Produkte entdecken <ArrowRight size={17} />
                </Link>
                <Link
                  to="/kontakt"
                  className="border border-border-light hover:border-text-muted/40 bg-surface/50 backdrop-blur-sm text-text-muted hover:text-text font-medium px-7 py-3.5 rounded-xl transition-all inline-flex items-center justify-center gap-2"
                >
                  Kontakt aufnehmen
                </Link>
              </div>
            </div>

            {/* Rechts: Feature Karten Stack */}
            <div className="hidden lg:flex flex-col gap-3 animate-fade-in-up-delay-2">
              {[
                { icon: <Zap size={16} className="text-white" />, color: 'bg-gradient-to-br from-primary to-secondary', title: 'ServeFlow', sub: 'Restaurant Software · Live' },
                { icon: <Monitor size={16} className="text-white" />, color: 'bg-gradient-to-br from-secondary to-primary', title: 'Webseiten & Landingpages', sub: 'Ab 499 € · Sofort buchbar' },
                { icon: <Shield size={16} className="text-primary" />, color: 'bg-primary/10', title: 'DSGVO by Default', sub: 'Server in Nürnberg, Deutschland' },
                { icon: <Globe size={16} className="text-secondary" />, color: 'bg-secondary/10', title: '5+ Branchen in Entwicklung', sub: 'Handwerk · Beauty · Fitness · Hotels' },
              ].map((card, i) => (
                <div
                  key={card.title}
                  className="flex items-center gap-4 bg-surface/80 backdrop-blur-sm border border-border rounded-2xl px-5 py-4 card-hover"
                  style={{ transform: `translateX(${i % 2 === 0 ? '0' : '24px'})` }}
                >
                  <div className={`w-9 h-9 ${card.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    {card.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{card.title}</p>
                    <p className="text-xs text-text-muted">{card.sub}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ===== MARQUEE ===== */}
      <Marquee />

      {/* ===== STATS ===== */}
      <section className="border-b border-border bg-surface">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((s, i) => (
              <div key={s.zahl} className="text-center" data-animate data-animate-delay={String(i + 1)}>
                <p className="text-3xl md:text-4xl font-bold text-gradient mb-1">{s.zahl}</p>
                <p className="text-text-muted text-sm leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WARUM DRVN ===== */}
      <section className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="text-center mb-14" data-animate>
            <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">Warum DRVN</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Keine Einheitslösung.<br />Software die passt.
            </h2>
            <p className="text-text-muted max-w-xl mx-auto leading-relaxed">
              Jede Branche funktioniert anders. Deshalb bauen wir keine generischen Tools —
              sondern Plattformen die auf Ihren Arbeitsalltag zugeschnitten sind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: <Shield size={22} />,
                titel: 'DSGVO-konform',
                text: 'Datenschutz nach deutschem Standard — kein Aufpreis, kein Nachdenken. Server bei Hetzner in Nürnberg.',
              },
              {
                icon: <Zap size={22} />,
                titel: 'Sofort einsetzbar',
                text: 'Kein monatelanges Setup. Onboarding in 30 Minuten — Ihre Mitarbeiter können direkt starten.',
              },
              {
                icon: <Monitor size={22} />,
                titel: 'Webseiten & Software',
                text: 'Von der einfachen Unternehmensseite bis zur komplexen SaaS-Plattform — alles aus einer Hand.',
              },
            ].map((f, i) => (
              <div
                key={f.titel}
                className="bg-surface rounded-2xl p-7 border border-border card-hover"
                data-animate
                data-animate-delay={String(i + 1)}
              >
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-5">
                  {f.icon}
                </div>
                <h3 className="font-bold mb-2">{f.titel}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10" data-animate>
            <Link
              to="/leistungen"
              className="text-primary text-sm font-medium inline-flex items-center gap-1.5 hover:gap-2.5 transition-all"
            >
              Alle Leistungen ansehen <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== PRODUKTE ===== */}
      <section className="border-b border-border bg-surface">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="mb-12" data-animate>
            <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">Unsere Produkte</p>
            <h2 className="text-3xl md:text-4xl font-bold">Eine Lösung pro Branche.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ProductCard
              to="/produkte/serveflow"
              icon={<Zap size={18} className="text-white" />}
              name="ServeFlow"
              tag="Live"
              desc="QR-Bestellung, Tischverwaltung und Reservierungen — das digitale Betriebssystem für Restaurants."
              highlight
            />
            <ProductCard
              to="/leistungen/webseiten"
              icon={<Monitor size={18} className="text-secondary" />}
              name="Webseiten & Landingpages"
              tag="Live"
              desc="Professioneller Online-Auftritt für Ihr Unternehmen — SEO-optimiert, ab 499 € einmalig."
            />
            {BRANCHEN.slice(1, 4).map((b) => (
              <div
                key={b.title}
                className="bg-bg rounded-2xl p-6 border border-border opacity-50"
                data-animate
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 bg-surface rounded-xl border border-border" />
                  <span className="text-[11px] bg-surface text-text-muted border border-border rounded-full px-2.5 py-1 font-medium">
                    {b.status}
                  </span>
                </div>
                <h3 className="font-bold text-base mb-1">{b.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{b.beschreibung}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section>
        <div className="max-w-3xl mx-auto px-6 py-28 text-center" data-animate>
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-4">Jetzt starten</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ihr Betrieb. Digital.<br />
            <span className="text-gradient">In 30 Minuten.</span>
          </h2>
          <p className="text-text-muted mb-10 max-w-md mx-auto leading-relaxed">
            Erzählen Sie uns von Ihrem Unternehmen — wir melden uns innerhalb von 24 Stunden mit einem konkreten Vorschlag.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/kontakt"
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-xl transition-all glow-blue inline-flex items-center justify-center gap-2 text-base"
            >
              Projekt anfragen <ArrowRight size={18} />
            </Link>
            <Link
              to="/produkte/serveflow"
              className="border border-border-light hover:border-text-muted/40 text-text-muted hover:text-text font-medium px-8 py-4 rounded-xl transition-all inline-flex items-center justify-center gap-2"
            >
              ServeFlow ansehen <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
