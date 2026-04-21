import { Link } from 'react-router-dom';
import {
  ArrowRight, Shield, Zap,
  Globe, Lock, CheckCircle2, ChevronRight,
  ClipboardList, Users, BarChart3, Smartphone,
} from 'lucide-react';
import { BRANCHEN } from '../lib/constants';

/* ===== Daten ===== */

const BRANCHEN_SCROLL = [
  'Gastronomie', 'Handwerk', 'Beauty', 'Fitness', 'Hotellerie', 'Support',
];

const PROBLEME = [
  { icon: <ClipboardList size={22} />, title: 'Bestellchaos beenden', link: '/branchen' },
  { icon: <Smartphone size={22} />, title: 'Eigene App starten', link: '/leistungen' },
  { icon: <Zap size={22} />, title: 'Prozesse automatisieren', link: '/leistungen' },
  { icon: <Users size={22} />, title: 'Kunden binden', link: '/leistungen' },
  { icon: <Shield size={22} />, title: 'DSGVO einhalten', link: '/kontakt' },
  { icon: <BarChart3 size={22} />, title: 'Echtzeit-Überblick', link: '/branchen' },
];

const ZUSATZ = [
  'Online-Reservierungen', 'Tischverwaltung', 'Personalplanung',
  'Kundenkartei', 'Automatische Rechnungen', 'WhatsApp-Integration',
];

const FEATURES = [
  { icon: <Shield size={24} />, title: 'DSGVO-konform', text: 'Datenschutz nach deutschen Standards — von Anfang an eingebaut.' },
  { icon: <Globe size={24} />, title: 'Made in Germany', text: 'Entwicklung, Hosting und Support — alles aus Deutschland.' },
  { icon: <Lock size={24} />, title: 'SSL-verschlüsselt', text: 'Alle Daten werden verschlüsselt übertragen und gespeichert.' },
  { icon: <Zap size={24} />, title: 'Sofort einsetzbar', text: 'Kein monatelanges Setup — in wenigen Minuten startklar.' },
];

const TRUST = [
  'DSGVO-konform', 'SSL-Verschlüsselung', 'Made in Germany', 'Persönlicher Support',
  'Regelmäßige Updates', '99,9% Uptime', 'Automatische Backups', 'Multi-Tenant',
];

/* ===== Terminal-Komponente ===== */

function TerminalWindow({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-[#0D1117] border border-border rounded-2xl overflow-hidden shadow-2xl">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-[#161B22]">
        <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
        <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
        <div className="w-3 h-3 rounded-full bg-[#28C840]" />
        <span className="text-xs text-text-muted ml-2 font-mono">{title}</span>
      </div>
      <div className="p-6 font-mono text-sm leading-7">{children}</div>
    </div>
  );
}

/* ===== Page ===== */

export default function Startseite() {
  return (
    <div className="pt-16">

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/8 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-secondary/6 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 pt-24 pb-16 md:pt-36 md:pb-20 text-center relative">
          {/* Badge — wie ngrok's "New AI Gateway" */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-xs font-medium text-primary mb-8 animate-fade-in-up">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
            Neu: ServeFlow für Gastronomie
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 animate-fade-in-up-delay-1">
            Ihre Branche.<br />
            <span className="text-gradient">Eine Plattform.</span>
          </h1>

          <p className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up-delay-2">
            DRVN entwickelt branchenspezifische SaaS-Lösungen, die Ihre Prozesse
            digitalisieren und automatisieren — sofort einsetzbar, DSGVO-konform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-3">
            <Link
              to="/kontakt"
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3.5 rounded-xl transition-all glow-blue inline-flex items-center justify-center gap-2"
            >
              Kostenlos starten <ArrowRight size={18} />
            </Link>
            <Link
              to="/leistungen"
              className="border border-border-light hover:border-text-muted text-text font-medium px-8 py-3.5 rounded-xl transition-all inline-flex items-center justify-center"
            >
              Dokumentation lesen
            </Link>
          </div>
        </div>

        {/* Terminal — wie ngrok's Docker-Pull */}
        <div className="max-w-3xl mx-auto px-6 pb-20 animate-fade-in-up-delay-4">
          <TerminalWindow title="terminal">
            <p><span className="text-text-muted">$</span> <span className="text-text">npx create-serveflow</span></p>
            <p className="text-text-muted mt-3">Branche auswählen...</p>
            <p className="text-primary">→ Gastronomie</p>
            <p className="mt-3"><span className="text-success">✓</span> <span className="text-text-muted">Dashboard erstellt</span></p>
            <p><span className="text-success">✓</span> <span className="text-text-muted">Bestellsystem aktiviert</span></p>
            <p><span className="text-success">✓</span> <span className="text-text-muted">Tischverwaltung bereit</span></p>
            <p><span className="text-success">✓</span> <span className="text-text-muted">DSGVO-konform konfiguriert</span></p>
            <p className="mt-3">
              <span className="text-text-muted">$</span>{' '}
              <span className="text-secondary">Ihre App läuft auf</span>{' '}
              <span className="text-primary underline">https://demo.serveflow.de</span>
            </p>
          </TerminalWindow>
        </div>
      </section>

      {/* ===== BRANCHEN CAROUSEL — wie ngrok's Logo-Bar ===== */}
      <section className="border-y border-border py-8 overflow-hidden">
        <p className="text-center text-xs text-text-muted uppercase tracking-wider mb-6">
          Lösungen für jede Branche
        </p>
        <div className="relative mask-carousel">
          <div className="flex animate-scroll gap-16 whitespace-nowrap">
            {[...BRANCHEN_SCROLL, ...BRANCHEN_SCROLL, ...BRANCHEN_SCROLL, ...BRANCHEN_SCROLL].map((name, i) => (
              <span key={i} className="text-text-muted/30 text-lg font-semibold tracking-wide flex-shrink-0">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROBLEME — wie ngrok's "Problems We Solve" ===== */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">Anwendungsfälle</p>
          <h2 className="text-3xl md:text-4xl font-bold">Welches Problem lösen Sie?</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROBLEME.map((p) => (
            <Link
              key={p.title}
              to={p.link}
              className="group bg-surface rounded-2xl p-6 border border-border hover:border-primary/30 transition-all flex items-center gap-4"
            >
              <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors flex-shrink-0">
                {p.icon}
              </div>
              <span className="font-medium group-hover:text-primary transition-colors">{p.title}</span>
              <ChevronRight size={16} className="ml-auto text-text-muted group-hover:text-primary transition-colors" />
            </Link>
          ))}
        </div>

        {/* Zusatz — wie ngrok's "You may also need" */}
        <div className="mt-8 text-center">
          <p className="text-sm text-text-muted mb-3">Vielleicht brauchen Sie auch:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {ZUSATZ.map((z) => (
              <span
                key={z}
                className="text-xs bg-surface border border-border rounded-full px-3 py-1.5 text-text-muted hover:text-text hover:border-border-light transition-colors cursor-default"
              >
                {z}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 2-SPALTIG: PLATTFORM + CODE — wie ngrok's Traffic Policy Section ===== */}
      <section className="bg-surface border-y border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Links: Text */}
            <div>
              <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">Die Plattform</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Alles aus einer Hand.<br />
                <span className="text-gradient">Kein Flickwerk.</span>
              </h2>
              <p className="text-text-muted leading-relaxed mb-6">
                Jede DRVN-Lösung ist eine vollständige Plattform: Dashboard, Bestellsystem,
                Kundenverwaltung und Automatisierungen — alles integriert, nichts zusammengestückelt.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Echtzeit-Dashboard mit allen KPIs',
                  'Automatische Benachrichtigungen',
                  'Multi-Device — Desktop, Tablet, Handy',
                  'API-Schnittstellen für Ihre Tools',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 size={16} className="text-success flex-shrink-0" />
                    <span className="text-text-muted">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/leistungen"
                className="text-primary hover:text-primary/80 text-sm font-medium inline-flex items-center gap-1 transition-colors"
              >
                Alle Features entdecken <ArrowRight size={16} />
              </Link>
            </div>

            {/* Rechts: Config-Code — wie ngrok's CEL-Code */}
            <TerminalWindow title="serveflow.config.ts">
              <p>
                <span className="text-primary">export default</span>{' '}
                <span className="text-secondary">defineConfig</span>({'{'})
              </p>
              <p className="pl-4">
                <span className="text-text-muted">branche:</span>{' '}
                <span className="text-success">'gastronomie'</span>,
              </p>
              <p className="pl-4"><span className="text-text-muted">module:</span> {'{'}</p>
              <p className="pl-8">
                <span className="text-text-muted">bestellungen:</span>{' '}
                <span className="text-primary">true</span>,
              </p>
              <p className="pl-8">
                <span className="text-text-muted">reservierungen:</span>{' '}
                <span className="text-primary">true</span>,
              </p>
              <p className="pl-8">
                <span className="text-text-muted">tischverwaltung:</span>{' '}
                <span className="text-primary">true</span>,
              </p>
              <p className="pl-8">
                <span className="text-text-muted">personalplanung:</span>{' '}
                <span className="text-primary">false</span>,
              </p>
              <p className="pl-4">{'}'},</p>
              <p className="pl-4">
                <span className="text-text-muted">dsgvo:</span>{' '}
                <span className="text-primary">true</span>,
              </p>
              <p className="pl-4">
                <span className="text-text-muted">domain:</span>{' '}
                <span className="text-success">'mein-restaurant.de'</span>,
              </p>
              <p>{'}'});</p>
            </TerminalWindow>
          </div>
        </div>
      </section>

      {/* ===== FEATURE GRID — wie ngrok's 4-spaltig Security/Performance ===== */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">Sicherheit & Performance</p>
          <h2 className="text-3xl md:text-4xl font-bold">Enterprise-Standards. Startup-Preise.</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="bg-surface rounded-2xl p-6 border border-border hover:border-primary/30 transition-all group"
            >
              <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                {f.icon}
              </div>
              <h3 className="font-semibold mb-2">{f.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== BRANCHEN ===== */}
      <section className="bg-surface border-y border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">Branchenlösungen</p>
            <h2 className="text-3xl md:text-4xl font-bold">Eine App für Ihre Branche</h2>
            <p className="text-text-muted mt-3 max-w-xl mx-auto">
              Jede Branche hat eigene Anforderungen. Wir bauen Software, die genau darauf zugeschnitten ist.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BRANCHEN.map((b) => (
              <div
                key={b.title}
                className="bg-bg rounded-2xl p-6 border border-border hover:border-primary/30 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold">{b.title}</h3>
                  <span
                    className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                      b.status === 'In Entwicklung'
                        ? 'bg-primary/10 text-primary'
                        : 'bg-white/5 text-text-muted'
                    }`}
                  >
                    {b.status}
                  </span>
                </div>
                <p className="text-text-muted text-sm leading-relaxed">{b.beschreibung}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/branchen"
              className="text-primary hover:text-primary/80 text-sm font-medium inline-flex items-center gap-1 transition-colors"
            >
              Alle Branchen ansehen <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== TRUST BADGES — wie ngrok's Compliance Section ===== */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-surface border border-border rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold mb-2">Sicherheit & Vertrauen</h3>
            <p className="text-text-muted text-sm">Enterprise-Grade Infrastruktur für Ihr Unternehmen</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {TRUST.map((badge) => (
              <div key={badge} className="bg-bg rounded-xl p-4 border border-border text-center">
                <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center text-success mx-auto mb-2">
                  <CheckCircle2 size={16} />
                </div>
                <p className="text-xs font-medium text-text-muted">{badge}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA — wie ngrok's "You read the whole page" ===== */}
      <section className="relative overflow-hidden border-t border-border">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 py-24 text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sie haben bis hier gelesen.<br />
            <span className="text-gradient">Worauf warten Sie?</span>
          </h2>
          <p className="text-text-muted mb-8 max-w-lg mx-auto">
            Erzählen Sie uns von Ihrem Betrieb — wir finden die passende Lösung.
            Kostenlos und unverbindlich.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/kontakt"
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3.5 rounded-xl transition-all glow-blue inline-flex items-center justify-center gap-2"
            >
              Jetzt loslegen <ArrowRight size={18} />
            </Link>
            <Link
              to="/branchen"
              className="text-primary hover:text-primary/80 font-medium px-8 py-3.5 inline-flex items-center justify-center gap-1 transition-colors"
            >
              Preise ansehen <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
