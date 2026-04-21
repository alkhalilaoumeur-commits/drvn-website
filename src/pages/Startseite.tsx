import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Zap, Shield, Globe, Clock } from 'lucide-react';
import { BRANCHEN } from '../lib/constants';
import SEO from '../components/SEO';

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
      <section className="max-w-5xl mx-auto px-6 pt-28 pb-24 text-center">
        <div className="inline-flex items-center gap-2 bg-surface border border-border rounded-full px-4 py-1.5 text-xs text-text-muted mb-8">
          <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
          Neu: ServeFlow für Gastronomie ist live
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight mb-6">
          Software für<br />
          <span className="text-gradient">Ihre Branche.</span>
        </h1>

        <p className="text-text-muted text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
          DRVN entwickelt branchenspezifische SaaS-Lösungen —
          sofort einsetzbar, DSGVO-konform, gemacht für Deutschland.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/produkte/serveflow"
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-7 py-3.5 rounded-xl transition-all glow-blue inline-flex items-center justify-center gap-2"
          >
            ServeFlow entdecken <ArrowRight size={17} />
          </Link>
          <Link
            to="/kontakt"
            className="border border-border-light hover:border-text-muted/40 text-text-muted hover:text-text font-medium px-7 py-3.5 rounded-xl transition-all inline-flex items-center justify-center gap-2"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </section>

      {/* ===== WARUM DRVN ===== */}
      <section className="border-t border-border">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
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

            <div className="space-y-4">
              {[
                { icon: <Shield size={18} />, titel: 'DSGVO-konform', text: 'Datenschutz nach deutschem Standard — kein Aufpreis, kein Nachdenken.' },
                { icon: <Globe size={18} />, titel: 'Server in Deutschland', text: 'Hetzner, Nürnberg. Ihre Daten verlassen die EU nicht.' },
                { icon: <Clock size={18} />, titel: 'Sofort einsetzbar', text: 'Kein monatelanges Setup. Die meisten Betriebe sind in 30 Minuten live.' },
              ].map((f) => (
                <div key={f.titel} className="flex items-start gap-4 p-5 bg-surface rounded-2xl border border-border">
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
      <section className="border-t border-border bg-surface">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="mb-12">
            <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">Unsere Produkte</p>
            <h2 className="text-3xl md:text-4xl font-bold">Eine App pro Branche.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* ServeFlow — Highlighted */}
            <Link
              to="/produkte/serveflow"
              className="group col-span-1 md:col-span-2 lg:col-span-1 bg-bg rounded-2xl p-6 border border-primary/25 hover:border-primary/50 transition-all"
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
            {BRANCHEN.slice(1).map((b) => (
              <div
                key={b.title}
                className="bg-bg rounded-2xl p-6 border border-border opacity-60"
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
      <section className="border-t border-border">
        <div className="max-w-3xl mx-auto px-6 py-28 text-center">
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
