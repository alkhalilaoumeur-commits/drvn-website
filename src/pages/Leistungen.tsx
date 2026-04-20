import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Smartphone, Zap, Headphones, Code2, Workflow } from 'lucide-react';
import { LEISTUNGEN } from '../lib/constants';

const ICON_MAP: Record<string, React.ReactNode> = {
  Layers: <Layers size={32} />,
  Smartphone: <Smartphone size={32} />,
  Zap: <Zap size={32} />,
  Headphones: <Headphones size={32} />,
};

const PROZESS = [
  { schritt: '01', title: 'Analyse', text: 'Wir verstehen Ihre Prozesse, Engpässe und Ziele.' },
  { schritt: '02', title: 'Konzept', text: 'Gemeinsam definieren wir Funktionen und Prioritäten.' },
  { schritt: '03', title: 'Entwicklung', text: 'Wir bauen Ihre Lösung — schnell, iterativ, transparent.' },
  { schritt: '04', title: 'Launch & Support', text: 'Go-Live mit Einrichtung, Schulung und aktivem Support.' },
];

export default function Leistungen() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">Leistungen</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Von der Idee zur <span className="text-gradient">fertigen Lösung</span>
        </h1>
        <p className="text-text-muted text-lg max-w-2xl mx-auto">
          Ob fertige Branchenlösung oder individuelle Entwicklung — wir finden den richtigen Weg für Ihr Unternehmen.
        </p>
      </section>

      {/* Leistungen Detail */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {LEISTUNGEN.map((l) => (
            <div
              key={l.title}
              className="bg-surface rounded-2xl p-8 border border-border hover:border-primary/30 transition-all group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-5 group-hover:bg-primary/20 transition-colors">
                {ICON_MAP[l.icon]}
              </div>
              <h3 className="text-xl font-semibold mb-3">{l.title}</h3>
              <p className="text-text-muted leading-relaxed">{l.beschreibung}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Zusätzliche Services */}
      <section className="bg-surface border-y border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold">Zusätzliche Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-bg rounded-2xl p-7 border border-border">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mb-4">
                <Code2 size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Custom-Entwicklung</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Sie haben eine Idee, die über unsere Standardlösungen hinausgeht? Wir entwickeln
                individuelle Apps und Systeme nach Ihren Anforderungen.
              </p>
            </div>
            <div className="bg-bg rounded-2xl p-7 border border-border">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mb-4">
                <Workflow size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Workflow-Automatisierung</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Wiederkehrende Aufgaben kosten Zeit und Geld. Wir analysieren Ihre Abläufe und
                automatisieren, was automatisiert werden kann.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Unser Prozess */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">Unser Prozess</p>
          <h2 className="text-3xl font-bold">In 4 Schritten zur Lösung</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {PROZESS.map((p, i) => (
            <div key={p.schritt} className="text-center">
              <div className="text-3xl font-bold text-gradient mb-3">{p.schritt}</div>
              <h3 className="font-semibold mb-2">{p.title}</h3>
              <p className="text-text-muted text-sm">{p.text}</p>
              {i < PROZESS.length - 1 && (
                <div className="hidden md:block absolute" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface border-t border-border">
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Projekt besprechen?</h2>
          <p className="text-text-muted mb-6">
            Erzählen Sie uns von Ihrem Vorhaben — wir melden uns innerhalb von 24 Stunden.
          </p>
          <Link
            to="/kontakt"
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3.5 rounded-xl transition-all glow-blue inline-flex items-center gap-2"
          >
            Kontakt aufnehmen <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
