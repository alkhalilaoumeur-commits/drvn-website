import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import {
  ArrowRight, CheckCircle2, ChevronDown, Monitor,
  Smartphone, Search, Zap, Shield, Palette,
  Code2, Globe, ChevronRight,
} from 'lucide-react';

/* ===== Website Mockup ===== */
function WebsiteMockup() {
  return (
    <div className="bg-[#0D1117] border border-border rounded-2xl overflow-hidden shadow-2xl">
      {/* Browser Bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-[#161B22]">
        <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
        <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
        <div className="w-3 h-3 rounded-full bg-[#28C840]" />
        <div className="ml-3 flex-1 bg-[#0D1117] rounded-md px-3 py-1 text-[11px] text-text-muted font-mono flex items-center gap-1.5">
          <Globe size={10} className="text-green-400" />
          www.ihr-unternehmen.de
        </div>
      </div>
      {/* Website Content */}
      <div className="p-5 space-y-4">
        {/* Navbar */}
        <div className="flex items-center justify-between bg-[#161B22] rounded-xl px-4 py-2.5 border border-border">
          <div className="w-16 h-3 bg-primary/60 rounded-full" />
          <div className="flex gap-3">
            {['Start', 'Leistungen', 'Kontakt'].map((item) => (
              <div key={item} className="text-[10px] text-text-muted">{item}</div>
            ))}
          </div>
          <div className="bg-primary/80 rounded-lg px-3 py-1 text-[10px] text-white">Anfragen</div>
        </div>
        {/* Hero */}
        <div className="bg-[#161B22] rounded-xl p-4 border border-border">
          <div className="w-8 h-1.5 bg-primary/40 rounded-full mb-2" />
          <div className="w-48 h-5 bg-text/90 rounded-md mb-2" />
          <div className="w-36 h-5 bg-gradient-to-r from-primary/80 to-secondary/80 rounded-md mb-3" />
          <div className="w-full h-2 bg-text-muted/20 rounded-full mb-1" />
          <div className="w-4/5 h-2 bg-text-muted/20 rounded-full mb-4" />
          <div className="flex gap-2">
            <div className="bg-primary/80 rounded-lg px-4 py-1.5 text-[10px] text-white">Jetzt starten</div>
            <div className="border border-border rounded-lg px-4 py-1.5 text-[10px] text-text-muted">Mehr erfahren</div>
          </div>
        </div>
        {/* Feature Cards */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: 'Responsive', color: 'text-primary' },
            { label: 'SEO-ready', color: 'text-secondary' },
            { label: 'Schnell', color: 'text-green-400' },
          ].map((f) => (
            <div key={f.label} className="bg-[#161B22] rounded-xl p-3 border border-border text-center">
              <CheckCircle2 size={14} className={`${f.color} mx-auto mb-1`} />
              <p className={`text-[10px] font-medium ${f.color}`}>{f.label}</p>
            </div>
          ))}
        </div>
        {/* Google Score */}
        <div className="bg-[#161B22] rounded-xl p-3 border border-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Search size={12} className="text-text-muted" />
            <span className="text-[10px] text-text-muted">PageSpeed Score</span>
          </div>
          <div className="flex items-center gap-1.5">
            {[92, 96, 98].map((score, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-[11px] font-bold text-green-400">{score}</span>
                <span className="text-[8px] text-text-muted/60">{['Perf', 'SEO', 'Best'][i]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const FEATURES = [
  { icon: <Smartphone size={20} />, titel: 'Mobiloptimiert', text: 'Jede Seite ist auf allen Geräten perfekt lesbar — Smartphone, Tablet, Desktop.' },
  { icon: <Search size={20} />, titel: 'SEO-optimiert', text: 'Technische Grundlage für gute Google-Rankings: schnelle Ladezeiten, sauberer Code, Meta-Tags.' },
  { icon: <Zap size={20} />, titel: 'Hohe Ladegeschwindigkeit', text: 'Optimierte Assets, minimale Dateigrößen — Ihre Seite lädt in unter 2 Sekunden.' },
  { icon: <Shield size={20} />, titel: 'DSGVO & Impressum', text: 'Rechtlich korrekt von Anfang an — Impressum, Datenschutz, Cookie-Hinweis falls nötig.' },
  { icon: <Palette size={20} />, titel: 'Individuelles Design', text: 'Kein Template-Look. Jede Seite wird auf Ihre Marke, Farben und Zielgruppe abgestimmt.' },
  { icon: <Code2 size={20} />, titel: 'Sauberer Code', text: 'Kein WordPress-Ballast. Schlanker, wartbarer Code — leicht erweiterbar wenn Ihr Betrieb wächst.' },
];

const PROZESS = [
  { nr: '01', titel: 'Briefing', text: 'Sie erklären Ihr Unternehmen, Ihre Zielgruppe und Ihre Wünsche — per Formular oder Gespräch.' },
  { nr: '02', titel: 'Design', text: 'Wir zeigen Ihnen ein Konzept, passen es an Ihr Feedback an und geben Ihnen die Kontrolle.' },
  { nr: '03', titel: 'Entwicklung', text: 'Wir bauen die Seite — schnell, sauber, ohne versteckte Kosten.' },
  { nr: '04', titel: 'Launch', text: 'Ihre Seite geht live. Sie bekommen Domain-Einrichtung, Hosting-Empfehlung und Einweisung.' },
];

const FAQ = [
  {
    frage: 'Was kostet Hosting und Domain nach dem Launch?',
    antwort: 'Domain ca. 10–15 €/Jahr. Hosting je nach Anbieter 3–10 €/Monat. Wir empfehlen günstige, zuverlässige Anbieter und helfen beim Einrichten — das übernehmen Sie selbst oder wir erledigen es für Sie.',
  },
  {
    frage: 'Kann ich die Seite später selbst bearbeiten?',
    antwort: 'Ja, auf Wunsch bauen wir ein einfaches CMS (z. B. Sanity oder Contentful) ein, sodass Sie Texte und Bilder selbst aktualisieren können — ohne Programmierkenntnisse.',
  },
  {
    frage: 'Wie lange dauert die Entwicklung?',
    antwort: 'Starter-Seiten sind in 5–10 Werktagen fertig. Business-Projekte dauern 2–4 Wochen. Premium-Projekte besprechen wir individuell.',
  },
  {
    frage: 'Ich habe bereits eine Seite — kann ich wechseln?',
    antwort: 'Ja. Wir übernehmen Inhalte, Bilder und Texte von Ihrer alten Seite und bauen daraus etwas Neues. Migration ist im Paketpreis inbegriffen.',
  },
];

export default function Webseiten() {
  return (
    <div className="pt-16">
      <SEO
        title="Webseiten & Landingpages — Professioneller Online-Auftritt"
        description="DRVN erstellt moderne, schnelle und SEO-optimierte Webseiten für Unternehmen in Deutschland — responsiv, DSGVO-konform, individuelles Angebot nach Aufwand."
        path="/leistungen/webseiten"
        keywords="Webseite erstellen lassen, Webdesign Stuttgart, Landingpage erstellen, professionelle Webseite, SEO-optimiert, DSGVO-konform"
        schema={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Service',
              name: 'Webseiten & Landingpages',
              provider: { '@type': 'Organization', name: 'DRVN' },
              description: 'Professionelle Unternehmenswebseiten und Landingpages — responsiv, SEO-optimiert, DSGVO-konform.',
              areaServed: 'DE',
              offers: {
                '@type': 'Offer',
                priceCurrency: 'EUR',
                priceSpecification: {
                  '@type': 'PriceSpecification',
                  description: 'Individuelles Angebot nach Aufwand',
                },
              },
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://drvnautomatisations.com' },
                { '@type': 'ListItem', position: 2, name: 'Leistungen', item: 'https://drvnautomatisations.com/leistungen' },
                { '@type': 'ListItem', position: 3, name: 'Webseiten', item: 'https://drvnautomatisations.com/leistungen/webseiten' },
              ],
            },
          ],
        }}
      />

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/6 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 pt-20 pb-16 md:pt-28 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <div className="inline-flex items-center gap-2 bg-surface border border-border rounded-full px-3 py-1.5 text-xs text-text-muted mb-6">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                Eine DRVN Leistung
              </div>

              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Monitor size={22} className="text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Web<span className="text-gradient">seiten</span>
                </h1>
              </div>

              <p className="text-lg md:text-xl text-text-muted leading-relaxed mb-8">
                Professioneller Online-Auftritt für Ihr Unternehmen — modern, schnell, SEO-optimiert. Individuelles Angebot, in 5–10 Werktagen fertig.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {['Responsive', 'SEO-ready', 'DSGVO-konform', 'Auf Anfrage'].map((tag) => (
                  <span key={tag} className="flex items-center gap-1.5 text-xs text-text-muted bg-surface border border-border rounded-full px-3 py-1.5">
                    <CheckCircle2 size={11} className="text-primary" />
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/kontakt"
                  className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-xl transition-all glow-blue inline-flex items-center justify-center gap-2"
                >
                  Webseite anfragen <ArrowRight size={17} />
                </Link>
                <a
                  href="#preise"
                  className="border border-border-light hover:border-text-muted/40 text-text-muted hover:text-text font-medium px-6 py-3 rounded-xl transition-all inline-flex items-center justify-center gap-2"
                >
                  Preise ansehen <ChevronRight size={16} />
                </a>
              </div>
            </div>

            {/* Mockup */}
            <div className="hidden lg:block">
              <WebsiteMockup />
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">Was Sie bekommen</p>
            <h2 className="text-3xl md:text-4xl font-bold">Keine Abstriche beim Standard.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((f) => (
              <div key={f.titel} className="bg-surface rounded-2xl p-6 border border-border hover:border-primary/30 transition-all group">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                  {f.icon}
                </div>
                <h3 className="font-semibold mb-2">{f.titel}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BEISPIEL-SHOWCASE ===== */}
      <section className="border-t border-border bg-gradient-to-b from-bg via-surface/40 to-bg relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/8 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 py-24 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <div>
              <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">Live-Beispiel</p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-5">
                Sehen Sie es <span className="text-gradient">in Aktion.</span>
              </h2>
              <p className="text-text-muted leading-relaxed mb-8 text-lg">
                Wir haben für ein fiktives italienisches Restaurant in Stuttgart eine
                vollständige Webseite gebaut — Hero mit Glasmorphismus, asymmetrisches
                Editorial-Layout, Marquee-Galerie, Speisekarte, Bewertungen, Reservierungs-CTA.
                Genau so detailliert wie wir es auch für Sie umsetzen würden.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Eigenes Design-System (Farben, Fonts, Typografie)',
                  'Responsiv für Smartphone, Tablet, Desktop',
                  'Scroll-Animationen + Mikrointeraktionen',
                  'Lighthouse-Score 95+ für Performance & SEO',
                ].map((p) => (
                  <li key={p} className="flex items-center gap-3 text-sm text-text">
                    <CheckCircle2 size={15} className="text-primary flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/beispiel/casa-lupo"
                  className="bg-primary hover:bg-primary/90 text-white font-semibold px-7 py-3.5 rounded-xl transition-all glow-blue inline-flex items-center gap-2"
                >
                  Beispiel-Webseite öffnen <ChevronRight size={16} />
                </Link>
                <Link
                  to="/kontakt"
                  className="border border-border-light hover:border-primary/40 text-text font-medium px-7 py-3.5 rounded-xl transition-all inline-flex items-center gap-2"
                >
                  Eigenes Projekt besprechen
                </Link>
              </div>
            </div>

            {/* Visueller Anker — gefakter Browser-Frame mit Casa-Lupo-Preview */}
            <div className="relative">
              <Link
                to="/beispiel/casa-lupo"
                className="block group rounded-2xl overflow-hidden shadow-2xl border border-border hover:border-primary/40 transition-all"
                style={{ background: '#1F0F0A' }}
              >
                {/* Browser-Bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-[#16161A]">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                  <div className="ml-3 flex-1 bg-[#0D1117] rounded-md px-3 py-1 text-[11px] text-text-muted font-mono">
                    casa-lupo.de
                  </div>
                </div>
                {/* Mockup-Inhalt — Casa-Lupo-Hero-Snippet */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80"
                    alt="Casa Lupo Beispiel"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(180deg, rgba(31,15,10,0.50) 0%, rgba(31,15,10,0.30) 40%, rgba(31,15,10,0.85) 100%)',
                    }}
                  />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#C99B4A] mb-3">
                      ── Trattoria · Stuttgart-Mitte
                    </div>
                    <div
                      className="text-white text-3xl md:text-4xl leading-[0.95] mb-3"
                      style={{ fontFamily: "'Instrument Serif', Georgia, serif", letterSpacing: '-0.02em' }}
                    >
                      La cucina<br />
                      <em style={{ color: '#C99B4A', fontStyle: 'italic' }}>della famiglia.</em>
                    </div>
                    <div className="text-white/70 text-xs max-w-xs">
                      Echte italienische Küche aus der Toskana. Pasta von Hand,
                      Brot aus dem Steinofen.
                    </div>
                  </div>
                </div>
              </Link>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-bg border border-primary/30 text-primary text-[11px] font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full shadow-lg">
                Klicken zum Öffnen
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PREISE — schlicht, ein zentraler "Auf Anfrage"-Block ===== */}
      <section id="preise" className="border-t border-border bg-surface relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/8 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-3xl mx-auto px-6 py-24 lg:py-28 text-center relative">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-4">Preise</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-5">
            Auf <span className="text-gradient">Anfrage.</span>
          </h2>
          <p className="text-text-muted text-lg max-w-xl mx-auto leading-relaxed mb-10">
            Jedes Projekt ist anders. Wir kalkulieren nach Umfang und Anforderung —
            transparent, zum Festpreis, ohne versteckte Kosten. Erstgespräch und
            Angebot kostenlos.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <Link
              to="/kontakt"
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-xl transition-all glow-blue inline-flex items-center justify-center gap-2"
            >
              Angebot anfragen <ArrowRight size={16} />
            </Link>
            <Link
              to="/beispiel/casa-lupo"
              className="border border-border-light hover:border-primary/40 text-text font-medium px-8 py-4 rounded-xl transition-all inline-flex items-center justify-center gap-2"
            >
              Beispiel ansehen
            </Link>
          </div>

          {/* Trust-Badges unter dem CTA */}
          <div className="flex flex-wrap justify-center gap-6 pt-8 border-t border-border">
            {[
              'Festpreis pro Projekt',
              'Keine Mindestlaufzeit',
              'Hosting & Domain optional',
              'Zahlung nach Abnahme',
            ].map((t) => (
              <div key={t} className="flex items-center gap-2 text-xs text-text-muted">
                <CheckCircle2 size={13} className="text-primary" />
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROZESS ===== */}
      <section className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">Ablauf</p>
            <h2 className="text-3xl font-bold">In 4 Schritten zu Ihrer Webseite.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {PROZESS.map((p, i) => (
              <div key={p.nr} className="relative">
                {i < PROZESS.length - 1 && (
                  <div className="hidden md:block absolute top-5 left-full w-full h-px bg-border -translate-y-px z-0" style={{ width: 'calc(100% - 2.5rem)', left: '2.5rem' }} />
                )}
                <div className="relative z-10">
                  <div className="w-10 h-10 bg-primary/10 border border-primary/30 rounded-xl flex items-center justify-center text-primary text-sm font-bold mb-4">
                    {p.nr}
                  </div>
                  <h3 className="font-semibold mb-2">{p.titel}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="border-t border-border bg-surface">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Häufige Fragen</h2>
          </div>
          <div className="space-y-3">
            {FAQ.map((f) => (
              <details
                key={f.frage}
                className="group bg-bg border border-border rounded-2xl overflow-hidden"
              >
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none">
                  <span className="font-medium text-sm pr-4">{f.frage}</span>
                  <ChevronDown size={16} className="text-text-muted flex-shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-text-muted text-sm leading-relaxed">{f.antwort}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="border-t border-border">
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bereit für Ihren neuen <span className="text-gradient">Online-Auftritt?</span>
          </h2>
          <p className="text-text-muted mb-8 max-w-md mx-auto leading-relaxed">
            Erzählen Sie uns von Ihrem Unternehmen — wir melden uns innerhalb von 24 Stunden mit einem konkreten Angebot.
          </p>
          <Link
            to="/kontakt"
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3.5 rounded-xl transition-all glow-blue inline-flex items-center gap-2"
          >
            Webseite anfragen <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
