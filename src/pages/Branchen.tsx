import { Link } from 'react-router-dom';
import { ArrowRight, UtensilsCrossed, Hammer, Sparkles, Dumbbell, Building2, MessageCircle } from 'lucide-react';
import { BRANCHEN } from '../lib/constants';

const ICON_MAP: Record<string, React.ReactNode> = {
  UtensilsCrossed: <UtensilsCrossed size={28} />,
  Hammer: <Hammer size={28} />,
  Sparkles: <Sparkles size={28} />,
  Dumbbell: <Dumbbell size={28} />,
  Building2: <Building2 size={28} />,
  MessageCircle: <MessageCircle size={28} />,
};

export default function Branchen() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">Branchen</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Software für <span className="text-gradient">Ihre Branche</span>
        </h1>
        <p className="text-text-muted text-lg max-w-2xl mx-auto">
          Jede Branche funktioniert anders. Deshalb bauen wir keine Einheitslösungen, sondern
          Software, die genau auf Ihren Arbeitsalltag zugeschnitten ist.
        </p>
      </section>

      {/* Branchen Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BRANCHEN.map((b) => (
            <div
              key={b.title}
              className={`bg-surface rounded-2xl p-8 border transition-all ${
                b.status === 'In Entwicklung'
                  ? 'border-primary/30 hover:border-primary/50'
                  : 'border-border hover:border-border-light'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  {ICON_MAP[b.icon]}
                </div>
                <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                  b.status === 'In Entwicklung'
                    ? 'bg-primary/10 text-primary'
                    : 'bg-white/5 text-text-muted'
                }`}>
                  {b.status}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{b.title}</h3>
              <p className="text-text-muted leading-relaxed mb-4">{b.beschreibung}</p>
              {b.status === 'In Entwicklung' && (
                <Link
                  to="/kontakt"
                  className="text-primary text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Mehr erfahren <ArrowRight size={14} />
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Eigene Branche */}
      <section className="bg-surface border-y border-border">
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ihre Branche ist nicht dabei?</h2>
          <p className="text-text-muted mb-6">
            Wir entwickeln auch individuelle Lösungen für andere Branchen.
            Erzählen Sie uns von Ihren Anforderungen.
          </p>
          <Link
            to="/kontakt"
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3.5 rounded-xl transition-all glow-blue inline-flex items-center gap-2"
          >
            Projekt anfragen <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
