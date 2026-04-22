import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Zap, Shield, Globe, Clock, Monitor } from 'lucide-react';
import { BRANCHEN } from '../lib/constants';
import SEO from '../components/SEO';

/* ===== Marquee Ticker ===== */
const TICKER = [
  { label: 'DSGVO-konform', dot: 'bg-primary' },
  { label: 'Server in Deutschland', dot: 'bg-secondary' },
  { label: 'In 30 Min. live', dot: 'bg-success' },
  { label: 'ServeFlow jetzt verfügbar', dot: 'bg-primary' },
  { label: 'Keine Setup-Kosten', dot: 'bg-secondary' },
  { label: 'Webseiten ab 499 €', dot: 'bg-success' },
  { label: 'Branchensoftware für KMU', dot: 'bg-primary' },
  { label: '100 % Made in Germany', dot: 'bg-secondary' },
];

function Marquee() {
  const items = [...TICKER, ...TICKER];
  return (
    <div className="border-y border-border overflow-hidden mask-edges py-3.5">
      <div className="flex animate-marquee whitespace-nowrap gap-10" style={{ width: 'max-content' }}>
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-2.5 text-sm text-text-muted">
            <span className={`w-1.5 h-1.5 rounded-full ${item.dot} opacity-70`} />
            {item.label}
          </span>
        ))}
      </div>
    </div>
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
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://drvnautomatisations.com/branchen',
            'query-input': 'required name=search_term_string',
          },
        }}
      />

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden">
        {/* Dot Grid Background */}
        <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

        {/* Animated Orbs */}
        <div className="absolute top-[-10%] left-[10%] w-[700px] h-[700px] bg-primary/8 rounded-full blur-[140px] pointer-events-none orb-animate" />
        <div className="absolute bottom-[-20%] right-[5%] w-[500px] h-[500px] bg-secondary/6 rounded-full blur-[120px] pointer-events-none orb-animate-slow" />
        <div className="absolute top-[30%] right-[20%] w-[300px] h-[300px] bg-primary/4 rounded-full blur-[100px] pointer-events-none orb-animate" style={{ animationDelay: '-6s' }} />

        <div className="max-w-5xl mx-auto px-6 pt-28 pb-24 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-surface/80 backdrop-blur-sm border border-border rounded-full px-4 py-1.5 text-xs text-text-muted mb-8 animate-fade-in-up">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
            Neu: ServeFlow für Gastronomie ist live
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.06] tracking-tight mb-6 animate-fade-in-up-delay-1">
            Software für<br />
            <span className="text-gradient">Ihre Branche.</span>
          </h1>

          <p className="text-text-muted text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed animate-fade-in-up-delay-2">
            DRVN entwickelt branchenspezifische SaaS-Lösungen —
            sofort einsetzbar, DSGVO-konform, gemacht für Deutschland.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-in-up-delay-3">
            <Link
              to="/produkte/serveflow"
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-7 py-3.5 rounded-xl transition-all glow-blue inline-flex items-center justify-center gap-2"
            >
              ServeFlow entdecken <ArrowRight size={17} />
            </Link>
            <Link
              to="/kontakt"
              className="border border-border-light hover:border-text-muted/40 bg-surface/50 backdrop-blur-sm text-text-muted hover:text-text font-medium px-7 py-3.5 rounded-xl transition-all inline-flex items-center justify-center gap-2"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>

      {/* ===== MARQUEE TICKER ===== */}
      <Marquee />

      {/* ===== WARUM DRVN ===== */}
      <section className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div data-animate="left">
              <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">Warum DRVN</p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-5">
                Keine Einheitslösung.<br />Software die passt.
              </h2>
              <p className="text-text-muted leading-relaxed mb-8">
                Jede Branche funktioniert anders. Deshalb bauen wir keine generischen Tools —
                sondern Plattformen die auf den Arbeitsalltag Ihrer Branche zugeschnitten sind.
              </p>
              <Link
                to="/leistungen"
                className="text-primary text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all"
              >
                Alle Leistungen <ArrowRight size={15} />
              </Link>
            </div>

            <div className="space-y-3" data-animate="right">
              {[
                { icon: <Shield size={17} />, titel: 'DSGVO-konform', text: 'Datenschutz nach deutschem Standard — kein Aufpreis, kein Nachdenken.' },
                { icon: <Globe size={17} />, titel: 'Server in Deutschland', text: 'Hetzner, Nürnberg. Ihre Daten verlassen die EU nicht.' },
                { icon: <Clock size={17} />, titel: 'Sofort einsetzbar', text: 'Kein monatelanges Setup. Die meisten Betriebe sind in 30 Minuten live.' },
                { icon: <Monitor size={17} />, titel: 'Webseiten & Landingpages', text: 'Moderner Online-Auftritt für Ihr Unternehmen — schnell gebaut, SEO-optimiert, ab 499 €.' },
              ].map((f, i) => (
                <div
                  key={f.titel}
                  className="flex items-start gap-4 p-5 bg-surface rounded-2xl border border-border card-hover"
                  data-animate-delay={String(i + 1)}
                >
                  <div className="w-9 h-9 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">{f.titel}</p>
                    <p className="text-text-muted text-sm leading-relaxed">{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRODUKTE ===== */}
      <section className="bg-surface border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="mb-12" data-animate>
            <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">Unsere Produkte</p>
            <h2 className="text-3xl md:text-4xl font-bold">Eine App pro Branche.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* ServeFlow — Gradient Border Highlight */}
            <Link
              to="/produkte/serveflow"
              className="group col-span-1 md:col-span-2 lg:col-span-1 gradient-border rounded-2xl p-6 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 card-hover"
              data-animate
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                  <Zap size={18} className="text-white" />
                </div>
                <span className="text-[11px] bg-success/10 text-success border border-success/20 rounded-full px-2.5 py-1 font-medium">
                  Live
                </span>
              </div>
              <h3 className="font-bold text-base mb-1">ServeFlow</h3>
              <p className="text-sm text-text-muted leading-relaxed mb-4">
                Das digitale Betriebssystem für Restaurants — QR-Bestellung, Tischverwaltung, Reservierungen.
              </p>
              <div className="flex items-center gap-1 text-primary text-xs font-medium group-hover:gap-2 transition-all">
                Mehr erfahren <ChevronRight size={13} />
              </div>
            </Link>

            {/* Weitere Branchen */}
            {BRANCHEN.slice(1).map((b, i) => (
              <div
                key={b.title}
                className="bg-bg rounded-2xl p-6 border border-border opacity-60 card-hover"
                data-animate
                data-animate-delay={String((i % 4) + 1)}
              >
                <div className="flex items-center justify-between mb-4">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bereit loszulegen?
          </h2>
          <p className="text-text-muted mb-8 max-w-md mx-auto leading-relaxed">
            Erzählen Sie uns von Ihrem Betrieb — wir melden uns innerhalb von 24 Stunden.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/kontakt"
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-7 py-3.5 rounded-xl transition-all glow-blue inline-flex items-center justify-center gap-2"
            >
              Kontakt aufnehmen <ArrowRight size={17} />
            </Link>
            <Link
              to="/produkte/serveflow"
              className="border border-border-light hover:border-text-muted/40 text-text-muted hover:text-text font-medium px-7 py-3.5 rounded-xl transition-all inline-flex items-center justify-center gap-2"
            >
              Produkte ansehen <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
