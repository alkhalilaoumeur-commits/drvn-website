import { useState } from 'react';
import { Mail, MapPin, Clock, Send } from 'lucide-react';
import { BRAND } from '../lib/constants';
import SEO from '../components/SEO';

export default function Kontakt() {
  const [formular, setFormular] = useState({
    name: '',
    email: '',
    firma: '',
    nachricht: '',
    typ: 'allgemein',
  });
  const [gesendet, setGesendet] = useState(false);
  const [laden, setLaden] = useState(false);
  const [fehler, setFehler] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLaden(true);
    setFehler('');
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/kontakt`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formular),
      });
      if (!res.ok) throw new Error();
      setGesendet(true);
    } catch {
      setFehler('Fehler beim Senden. Bitte versuche es erneut oder schreibe uns direkt.');
    } finally {
      setLaden(false);
    }
  }

  function aendern(feld: string, wert: string) {
    setFormular((prev) => ({ ...prev, [feld]: wert }));
  }

  return (
    <div className="pt-16">
      <SEO
        title="Kontakt — Projekt anfragen oder Frage stellen"
        description="Nehmen Sie Kontakt mit DRVN auf — Antwort innerhalb von 24 Stunden. Projekt besprechen, Demo anfragen oder allgemeine Frage stellen."
        path="/kontakt"
        keywords="DRVN Kontakt, Software Anfrage, SaaS Demo, Projekt besprechen Stuttgart"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'DRVN',
          email: 'kontakt@drvnautomatisations.com',
          url: 'https://drvnautomatisations.com',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Egilolfstrasse 41',
            addressLocality: 'Stuttgart',
            postalCode: '70599',
            addressCountry: 'DE',
          },
          areaServed: 'DE',
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            email: 'kontakt@drvnautomatisations.com',
            availableLanguage: 'German',
          },
        }}
      />
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">Kontakt</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Sprechen Sie <span className="text-gradient">mit uns</span>
        </h1>
        <p className="text-text-muted text-lg max-w-2xl mx-auto">
          Ob Frage, Projektidee oder Feedback — wir freuen uns auf Ihre Nachricht
          und melden uns innerhalb von 24 Stunden.
        </p>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Formular */}
          <div className="lg:col-span-3 bg-surface rounded-2xl p-8 border border-border">
            {gesendet ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center text-success mx-auto mb-4">
                  <Send size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Nachricht gesendet!</h3>
                <p className="text-text-muted">
                  Vielen Dank für Ihre Nachricht. Wir melden uns schnellstmöglich bei Ihnen.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-1.5">Anfrageart</label>
                  <select
                    value={formular.typ}
                    onChange={(e) => aendern('typ', e.target.value)}
                    className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-sm text-text focus:outline-none focus:border-primary/50 transition-colors"
                  >
                    <option value="allgemein">Allgemeine Anfrage</option>
                    <option value="projekt">Projekt besprechen</option>
                    <option value="custom">Custom-Entwicklung anfragen</option>
                    <option value="support">Support</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Name *</label>
                    <input
                      type="text"
                      required
                      value={formular.name}
                      onChange={(e) => aendern('name', e.target.value)}
                      placeholder="Ihr Name"
                      className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-sm text-text placeholder:text-text-muted/50 focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">E-Mail *</label>
                    <input
                      type="email"
                      required
                      value={formular.email}
                      onChange={(e) => aendern('email', e.target.value)}
                      placeholder="ihre@email.de"
                      className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-sm text-text placeholder:text-text-muted/50 focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5">Firma (optional)</label>
                  <input
                    type="text"
                    value={formular.firma}
                    onChange={(e) => aendern('firma', e.target.value)}
                    placeholder="Ihr Unternehmen"
                    className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-sm text-text placeholder:text-text-muted/50 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5">Nachricht *</label>
                  <textarea
                    required
                    rows={5}
                    value={formular.nachricht}
                    onChange={(e) => aendern('nachricht', e.target.value)}
                    placeholder="Beschreiben Sie Ihr Anliegen..."
                    className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-sm text-text placeholder:text-text-muted/50 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  />
                </div>

                {fehler && (
                  <p className="text-red-400 text-sm text-center">{fehler}</p>
                )}
                <button
                  type="submit"
                  disabled={laden}
                  className="w-full bg-primary hover:bg-primary/90 disabled:opacity-60 text-white font-semibold py-3.5 rounded-xl transition-all glow-blue flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  {laden ? 'Wird gesendet…' : 'Nachricht senden'}
                </button>
              </form>
            )}
          </div>

          {/* Kontakt-Info */}
          <div className="lg:col-span-2 space-y-5">
            <div className="bg-surface rounded-2xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="font-medium text-sm mb-1">E-Mail</p>
                  <p className="text-text-muted text-sm">{BRAND.email}</p>
                </div>
              </div>
            </div>

            <div className="bg-surface rounded-2xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="font-medium text-sm mb-1">Standort</p>
                  <p className="text-text-muted text-sm">Stuttgart, Deutschland</p>
                </div>
              </div>
            </div>

            <div className="bg-surface rounded-2xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                  <Clock size={18} />
                </div>
                <div>
                  <p className="font-medium text-sm mb-1">Reaktionszeit</p>
                  <p className="text-text-muted text-sm">Innerhalb von 24 Stunden</p>
                </div>
              </div>
            </div>

            <div className="bg-surface rounded-2xl p-6 border border-border">
              <p className="font-medium text-sm mb-2">FAQ</p>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-text-muted font-medium">Was kostet ein Projekt?</p>
                  <p className="text-text-muted/70">Abhängig vom Umfang. Wir erstellen Ihnen ein individuelles Angebot.</p>
                </div>
                <div>
                  <p className="text-text-muted font-medium">Wie lange dauert die Entwicklung?</p>
                  <p className="text-text-muted/70">Unsere SaaS-Lösungen sind sofort einsetzbar. Custom-Projekte besprechen wir individuell.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
