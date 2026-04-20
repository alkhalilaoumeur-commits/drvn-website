import { Link } from 'react-router-dom';
import { ArrowRight, Target, Heart, Rocket } from 'lucide-react';

const WERTE = [
  {
    icon: <Target size={24} />,
    title: 'Fokus auf Ergebnisse',
    text: 'Keine unnötigen Features, kein Overengineering. Wir bauen, was Sie wirklich brauchen.',
  },
  {
    icon: <Heart size={24} />,
    title: 'Kundennähe',
    text: 'Wir verstehen Ihr Geschäft und sind auch nach dem Launch für Sie da — mit aktivem Support.',
  },
  {
    icon: <Rocket size={24} />,
    title: 'Innovation',
    text: 'Moderne Technologien, schnelle Umsetzung, automatisierte Prozesse — immer am Puls der Zeit.',
  },
];

export default function UeberUns() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">Über uns</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Wir sind <span className="text-gradient">DRVN</span>
        </h1>
        <p className="text-text-muted text-lg max-w-2xl mx-auto">
          Ein junges Unternehmen aus Stuttgart, das Software baut, die den Arbeitsalltag
          von Unternehmen spürbar verbessert.
        </p>
      </section>

      {/* Story */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="bg-surface rounded-2xl p-8 md:p-10 border border-border">
          <h2 className="text-2xl font-bold mb-4">Unsere Geschichte</h2>
          <div className="space-y-4 text-text-muted leading-relaxed">
            <p>
              DRVN entstand aus einer einfachen Beobachtung: Viele kleine und mittlere Unternehmen
              arbeiten noch mit Stift, Papier und Excel — obwohl es längst bessere Möglichkeiten gibt.
            </p>
            <p>
              Das Problem? Die meisten Softwarelösungen am Markt sind entweder zu teuer, zu kompliziert
              oder nicht auf die spezifische Branche zugeschnitten. Ein Restaurant braucht andere Tools
              als ein Friseursalon — und beide brauchen etwas anderes als ein Handwerksbetrieb.
            </p>
            <p>
              Deshalb bauen wir bei DRVN branchenspezifische Software, die genau auf den Arbeitsalltag
              unserer Kunden zugeschnitten ist. Bezahlbar, modern und mit persönlichem Support.
            </p>
          </div>
        </div>
      </section>

      {/* Werte */}
      <section className="bg-surface border-y border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold">Unsere Werte</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {WERTE.map((w) => (
              <div key={w.title} className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-4">
                  {w.icon}
                </div>
                <h3 className="font-semibold mb-2">{w.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zahlen */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { zahl: '2026', label: 'Gegründet' },
            { zahl: 'Stuttgart', label: 'Standort' },
            { zahl: '6+', label: 'Branchen geplant' },
            { zahl: '100%', label: 'Kundenfokus' },
          ].map((z) => (
            <div key={z.label} className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-gradient">{z.zahl}</p>
              <p className="text-text-muted text-sm mt-1">{z.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface border-t border-border">
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Zusammenarbeiten?</h2>
          <p className="text-text-muted mb-6">
            Wir freuen uns, von Ihrem Projekt zu hören. Schreiben Sie uns — wir melden uns schnell.
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
