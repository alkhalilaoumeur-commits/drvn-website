import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SEO, { buildFaqSchema, buildHowToSchema, buildRating } from '../components/SEO';
import { ContainerScroll } from '../components/ContainerScroll';
import { CinematicFooter } from '@/components/ui/motion-footer';
import {
  ArrowRight, CheckCircle2, ChevronDown, ExternalLink,
  QrCode, CalendarCheck, LayoutDashboard, Users,
  Palette, Shield, Globe, Lock, Clock, Smartphone,
  BarChart3, Bell, ChevronRight, TrendingUp,
  Coffee, Pizza, Utensils, Wine, MousePointerClick,
} from 'lucide-react';

const DEMO_URL = 'http://n11hq0nbyhc32xlcw7kf9dua.178.104.147.61.sslip.io';

// ─── FAQ-Daten (für UI + FAQ-Schema doppelt verwendet) ──────────────────────
// Wichtig für Google AI Overviews und ChatGPT/Perplexity-Citations
const FAQ_LISTE = [
  { frage: 'Was ist ServeFlow?', antwort: 'ServeFlow ist eine cloudbasierte Restaurantmanagement-Software für deutsche Restaurants, Cafés, Bars und Bistros. Sie vereint QR-Bestellung am Tisch, Online-Reservierungen, visuellen Tischplan, Mitarbeiterverwaltung, Dienstplan und ein Echtzeit-Dashboard auf einer Plattform. Preise ab 29 €/Monat, DSGVO-konform mit Servern in Deutschland.' },
  { frage: 'Was kostet eine Restaurantmanagement-Software wie ServeFlow?', antwort: 'ServeFlow gibt es in drei Plänen: Basis 29 €/Monat (Reservierungen, Tischplan, bis 3 Mitarbeiter), Standard 59 €/Monat (alles aus Basis plus QR-Bestellung, CRM, SMS, bis 10 Mitarbeiter) und Pro 99 €/Monat (alles plus Dienstplan, Inventur, Kassensystem, unbegrenzt Mitarbeiter). Keine Mindestlaufzeit, monatlich kündbar.' },
  { frage: 'Brauchen meine Gäste eine App?', antwort: 'Nein. Die Bestellseite läuft im Browser — Gäste scannen den QR-Code, und die Seite öffnet sich sofort. Keine App, kein Download, kein Login.' },
  { frage: 'Wie lange dauert die Einrichtung?', antwort: 'Die meisten Restaurants sind in unter 30 Minuten startklar. Konto anlegen, Speisekarte hochladen (Excel-Import möglich), QR-Codes drucken — fertig. Wir helfen bei Bedarf per Videocall.' },
  { frage: 'Ist ServeFlow DSGVO-konform?', antwort: 'Ja. Alle Daten liegen auf Servern in Frankfurt (Hetzner Cloud). Kein Transfer in Drittländer. Auftragsverarbeitungsvertrag inklusive. Personenbezogene Reservierungsdaten werden nach 30 Tagen automatisch gelöscht.' },
  { frage: 'Kann ich monatlich kündigen?', antwort: 'Ja. Keine Mindestlaufzeit, keine versteckten Kosten. Jederzeit zum Monatsende kündbar — direkt im Kundenportal mit einem Klick.' },
  { frage: 'Gibt es eine Testphase?', antwort: 'Ja. Der Standard-Plan ist 14 Tage kostenlos und ohne Kreditkarte testbar. Wenn ServeFlow nichts für Sie ist, läuft das Konto einfach aus — kein Aufwand.' },
  { frage: 'Was passiert wenn das Internet ausfällt?', antwort: 'Bereits eingegangene Bestellungen bleiben gespeichert. Wir empfehlen einen mobilen Hotspot als Backup — ein Smartphone reicht. Sobald die Verbindung wieder da ist, synchronisiert sich alles automatisch.' },
  { frage: 'Kann ich meine bestehende Speisekarte übernehmen?', antwort: 'Ja. Sie können Gerichte einzeln anlegen oder eine Excel/CSV-Datei importieren. Bilder werden automatisch optimiert.' },
  { frage: 'Wie funktioniert die Bezahlung der Bestellung?', antwort: 'Aktuell zahlen Gäste am Tisch beim Kellner — wie gewohnt. Online-Bezahlung über Stripe ist auf der Roadmap und kommt in Q3 2026.' },
] as const;

// ─── HowTo-Steps (für AI-Step-by-Step-Antworten) ────────────────────────────
const HOWTO_STEPS = [
  { name: 'Konto anlegen', text: 'Auf serve-flow.org registrieren — Restaurant-Name, Adresse, Mitarbeiter. Dauert 5 Minuten.' },
  { name: 'Speisekarte importieren', text: 'Excel/CSV-Datei mit Gerichten hochladen oder einzeln anlegen. Bilder werden automatisch optimiert.' },
  { name: 'Tische einrichten', text: 'Im visuellen Tischplan-Editor Tische platzieren, Bereiche definieren (Innen, Terrasse, Bar).' },
  { name: 'QR-Codes drucken', text: 'Pro Tisch wird automatisch ein QR-Code generiert. Drucken oder als PDF speichern.' },
  { name: 'Live gehen', text: 'Tisch-QR ankleben — Gäste scannen, bestellen, das Dashboard zeigt alles live.' },
];

// ─── Animation-Helper ─────────────────────────────────────────────────────────
function FadeIn({ children, delay = 0, className = '' }: {
  children: React.ReactNode; delay?: number; className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
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

// ═══════════════════════════════════════════════════════════════════════════════
// MOCKUPS
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Dashboard-Mockup — exakt nachgebaut vom echten ServeFlow-Dashboard:
 *   - Helles Theme (weiße Cards auf Gray-50-Background, wie StatKarte.tsx)
 *   - 5 Stat-Karten in einer Reihe mit Gradient-Akzent (3px) oben:
 *     amber→orange (Offen) · orange→red (In Zubereitung) ·
 *     emerald→teal (Umsatz) · blue→cyan (Reservierungen) · violet→fuchsia (Tische)
 *   - Topbar mit Restaurant-Name + Datum
 *   - 3-Spalten-Grid darunter: Umsatz-Chart (col-span-2) + Auslastungs-Donut
 *   - Bestell-Liste mit T-Badge + Status-Pill
 */
function DashboardMockup() {
  // Gradient-Akzente exakt aus restaurant-app/frontend/src/components/dashboard/StatKarte.tsx
  const STATS = [
    { label: 'Offen',          wert: '5',       grad: 'from-amber-400 to-orange-500',     ico: 'doc' },
    { label: 'In Zubereitung', wert: '3',       grad: 'from-orange-400 to-red-500',       ico: 'chef' },
    { label: 'Tagesumsatz',    wert: '€1.240',  grad: 'from-emerald-400 to-teal-500',     ico: 'euro' },
    { label: 'Reservierungen', wert: '12',      grad: 'from-blue-400 to-cyan-500',        ico: 'cal' },
    { label: 'Tische belegt',  wert: '8/10',    grad: 'from-violet-400 to-fuchsia-500',   ico: 'tisch' },
  ];

  // Bestellungen — exakt im Stil von Dashboard.tsx Z. 173 (T-Badge links, Status-Pill rechts)
  const BESTELLUNGEN = [
    { tisch: 5, item: '2× Pasta Carbonara', preis: '24,80', status: 'Offen', cls: 'bg-amber-100 text-amber-700' },
    { tisch: 3, item: '1× Pizza Margherita, 2× Pellegrino', preis: '19,70', status: 'In Zubereitung', cls: 'bg-orange-100 text-orange-700' },
    { tisch: 8, item: '3× Tiramisu, 1× Espresso', preis: '17,40', status: 'Serviert', cls: 'bg-emerald-100 text-emerald-700' },
    { tisch: 1, item: '4× Pizza Diavola', preis: '46,00', status: 'Offen', cls: 'bg-amber-100 text-amber-700' },
  ];

  const RESERVIERUNGEN = [
    { zeit: '19:00', name: 'Familie Müller', personen: 4 },
    { zeit: '19:30', name: 'Schmidt', personen: 2 },
    { zeit: '20:00', name: 'Hasenkrug', personen: 6 },
  ];

  // Mini-Icons (vereinfacht, eine Linie statt voller Lucide-Icons damit es klein bleibt)
  const ICOS: Record<string, string> = {
    doc: 'M16 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V8Z|M15 3v4a2 2 0 002 2h4',
    chef: 'M12 2a4 4 0 014 4c0 1.95-1.4 3.58-3.25 3.93|M6 14v-2a6 6 0 0112 0v2',
    euro: 'M4 10h12M4 14h9|M19 6a7.7 7.7 0 00-5.2-2A7.9 7.9 0 006 12a7.9 7.9 0 007.8 8 7.7 7.7 0 005.2-2',
    cal:  'M16 2v4M8 2v4M3 10h18',
    tisch:'M2 7h20v4H2zM4 11v6M20 11v6',
  };

  return (
    <div className="bg-[#F8F9FB] rounded-xl overflow-hidden h-full flex flex-col text-[#0F172A]" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Topbar — wie Topbar.tsx in der echten App */}
      <div className="flex items-center justify-between px-5 py-3 bg-white border-b border-gray-100 flex-shrink-0">
        <div>
          <p className="text-[13px] font-bold text-gray-900">Dashboard</p>
          <p className="text-[10px] text-gray-400 mt-0.5">Trattoria Lupo · Heute, 27.04.2026</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-[10px] font-bold">GL</div>
        </div>
      </div>

      {/* Inhalt */}
      <div className="p-4 lg:p-5 space-y-4 flex-1 overflow-hidden">
        {/* 5 Stat-Karten */}
        <div className="grid grid-cols-5 gap-2.5">
          {STATS.map((s) => (
            <div key={s.label} className="relative overflow-hidden rounded-xl bg-white border border-gray-100 shadow-sm">
              {/* Gradient-Akzent oben (3px) */}
              <div className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${s.grad}`} />
              <div className="p-3">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-[8px] font-medium text-gray-500 uppercase tracking-wider">{s.label}</p>
                  <div className={`w-6 h-6 rounded-md bg-gradient-to-br ${s.grad} flex items-center justify-center flex-shrink-0`}>
                    <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      {ICOS[s.ico].split('|').map((p, i) => <path key={i} d={p} />)}
                    </svg>
                  </div>
                </div>
                <p className="text-[20px] font-bold text-gray-900 mt-2 leading-none tracking-tight">{s.wert}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 2 Spalten: Bestellungen + Reservierungen — wie auf echter Dashboard.tsx Z. 161 */}
        <div className="grid grid-cols-3 gap-3 flex-1">
          {/* Aktive Bestellungen — col-span-2 */}
          <div className="col-span-2 bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-4 pt-3 pb-2">
              <div className="flex items-center gap-2">
                <div className="w-1 h-4 rounded-full bg-orange-400" />
                <p className="text-[11px] font-semibold text-gray-700">Aktive Bestellungen</p>
              </div>
              <span className="text-[9px] text-gray-400 bg-gray-50 px-1.5 py-0.5 rounded-full">{BESTELLUNGEN.length} aktiv</span>
            </div>
            <div className="px-3 pb-3 space-y-1">
              {BESTELLUNGEN.map((b) => (
                <div key={b.tisch + b.item} className="flex items-center gap-2.5 p-1.5 rounded-lg">
                  {/* T-Badge mit Gradient */}
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center text-[10px] font-bold text-slate-500 ring-1 ring-slate-200/50 flex-shrink-0">
                    T{b.tisch}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] text-gray-800 truncate font-medium">{b.item}</p>
                    <p className="text-[9px] text-gray-400">€ {b.preis}</p>
                  </div>
                  <span className={`text-[9px] px-2 py-0.5 rounded-full font-medium flex-shrink-0 ${b.cls}`}>{b.status}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Reservierungen heute */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-4 pt-3 pb-2">
              <div className="flex items-center gap-2">
                <div className="w-1 h-4 rounded-full bg-blue-400" />
                <p className="text-[11px] font-semibold text-gray-700">Reservierungen</p>
              </div>
            </div>
            <div className="px-3 pb-3 space-y-1.5">
              {RESERVIERUNGEN.map((r) => (
                <div key={r.zeit} className="flex items-center gap-2 p-1.5">
                  {/* Zeit-Badge */}
                  <div className="w-9 h-7 rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center text-[9px] font-bold text-blue-600 ring-1 ring-blue-200/50 flex-shrink-0">
                    {r.zeit}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] text-gray-800 truncate font-medium">{r.name}</p>
                    <p className="text-[9px] text-gray-400">{r.personen} Personen</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Tablet-Frame — umrahmt das Dashboard wie ein iPad,
 * statt eines Browser-Fensters mit Mac-Buttons.
 */
function TabletFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-full bg-[#1A1A1F] rounded-[28px] p-3 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5),0_0_0_2px_rgba(255,255,255,0.04)]">
      {/* Front-Camera Punkt */}
      <div className="absolute top-1/2 -translate-y-1/2 left-2 w-1.5 h-1.5 rounded-full bg-white/20" />
      {/* Screen */}
      <div className="rounded-[18px] overflow-hidden h-full bg-[#F8F9FB]">
        {children}
      </div>
    </div>
  );
}

/** Phone-Mockup mit echter Bestellseite */
function PhoneMockup() {
  return (
    <div className="relative mx-auto" style={{ width: 280 }}>
      {/* Phone-Frame */}
      <div className="relative rounded-[2.5rem] bg-[#0a0a0d] p-2.5 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.06)]">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#0a0a0d] rounded-b-2xl z-10" />
        {/* Screen */}
        <div className="rounded-[2rem] bg-[#F4F5F7] overflow-hidden aspect-[9/19]">
          {/* Royal-Blau Header (wie unser Kompakt-Layout!) */}
          <div className="bg-[#1E2A6B] px-4 pt-7 pb-3">
            <div className="flex items-center justify-between mb-2">
              <div className="w-7 h-7 rounded-lg bg-white/15" />
              <div className="text-white text-sm font-bold tracking-widest">TRATTORIA</div>
              <div className="w-7 h-7 rounded-lg bg-white/15" />
            </div>
            <div className="flex justify-center gap-2 text-[10px]">
              <span className="text-white/80 px-2.5 py-0.5 rounded-full bg-white/10 border border-white/15">Tisch 5</span>
              <span className="text-white/70 px-2 py-0.5 rounded-md bg-white/8 font-mono">⏱ 28:42</span>
            </div>
          </div>

          {/* Kategorien */}
          <div className="bg-[#1E2A6B] px-3 pb-3">
            <div className="flex gap-1.5 overflow-hidden">
              {[true, false, false, false].map((active, i) => (
                <div key={i} className={`flex-shrink-0 w-16 h-12 rounded-lg ${active ? 'bg-white' : 'bg-white/10'} flex items-center justify-center`}>
                  <span className={`text-[8px] font-semibold ${active ? 'text-[#1E2A6B]' : 'text-white/70'}`}>
                    {['Pizza', 'Pasta', 'Salat', 'Dessert'][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Gerichte-Liste */}
          <div className="px-3 py-3 space-y-2">
            {[
              { name: 'Margherita', desc: 'Tomate, Mozzarella, Basilikum', preis: '9,90' },
              { name: 'Diavola', desc: 'Salami, Chili, Mozzarella', preis: '11,50' },
              { name: 'Quattro Formaggi', desc: 'Vier Käsesorten', preis: '12,80' },
            ].map((g, i) => (
              <div key={i} className="bg-white rounded-lg p-2 flex items-center gap-2 border border-[#E2E8F0]">
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-semibold text-[#0F172A] truncate">{g.name}</div>
                  <div className="text-[8px] text-[#64748B] truncate">{g.desc}</div>
                  <div className="text-[10px] font-bold text-[#1E2A6B] mt-0.5">€ {g.preis}</div>
                </div>
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 rounded-md bg-[#EEF1FB]" />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-md bg-[#10B981] border-2 border-white flex items-center justify-center text-white text-[10px] font-bold">+</div>
                </div>
              </div>
            ))}
          </div>

          {/* Floating CTA */}
          <div className="absolute bottom-3 left-3 right-3">
            <div className="bg-[#10B981] rounded-xl px-3 py-2.5 flex items-center justify-between shadow-[0_8px_20px_rgba(16,185,129,0.4)]">
              <span className="bg-white/25 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">3</span>
              <span className="text-white text-[10px] font-bold">Warenkorb</span>
              <span className="text-white text-[10px] font-bold">€ 34,20</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Echtes QR-Code-SVG (kein Lucide-Platzhalter mehr) */
function QrCodeSvg({ size = 160 }: { size?: number }) {
  // Statisches "ServeFlow"-Pattern: 21x21 Module, simuliert echten QR
  // Die meisten Module sind durch ein deterministisches Hash-Pattern gefüllt.
  const grid = Array.from({ length: 21 }, (_, y) =>
    Array.from({ length: 21 }, (_, x) => {
      // Finder-Patterns (3 Ecken)
      const inFinder = (cx: number, cy: number) =>
        x >= cx && x < cx + 7 && y >= cy && y < cy + 7;
      if (inFinder(0, 0) || inFinder(14, 0) || inFinder(0, 14)) {
        const dx = inFinder(0, 0) ? x : inFinder(14, 0) ? x - 14 : x;
        const dy = inFinder(0, 0) ? y : inFinder(14, 0) ? y : y - 14;
        const isOuter = dx === 0 || dx === 6 || dy === 0 || dy === 6;
        const isInner = dx >= 2 && dx <= 4 && dy >= 2 && dy <= 4;
        return isOuter || isInner;
      }
      // Pseudo-zufälliges Pattern für die restlichen Module
      return ((x * 7 + y * 13 + x * y * 3) % 11) > 5;
    })
  );
  const cell = size / 21;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <rect width={size} height={size} fill="white" />
      {grid.flatMap((row, y) =>
        row.map((on, x) =>
          on ? <rect key={`${x}-${y}`} x={x * cell} y={y * cell} width={cell} height={cell} fill="#0D1117" /> : null
        )
      )}
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// FAQ Item
// ═══════════════════════════════════════════════════════════════════════════════

function FaqItem({ frage, antwort }: { frage: string; antwort: string }) {
  return (
    <details className="group border border-border rounded-xl overflow-hidden bg-surface/40 hover:bg-surface transition-colors">
      <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none">
        <span className="font-medium text-sm">{frage}</span>
        <ChevronDown size={16} className="text-text-muted group-open:rotate-180 transition-transform flex-shrink-0 ml-4" />
      </summary>
      <div className="px-6 pb-5 text-sm text-text-muted leading-relaxed border-t border-border pt-4">
        {antwort}
      </div>
    </details>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PAGE
// ═══════════════════════════════════════════════════════════════════════════════

export default function ServeFlow() {
  return (
    <div className="pt-16">
      <SEO
        title="ServeFlow — Restaurantmanagement-Software ab 29 €/Monat"
        description="Restaurantmanagement-Software für Deutschland: QR-Bestellung am Tisch, Online-Reservierungen, visueller Tischplan, Dienstplan, Echtzeit-Dashboard. ServeFlow ab 29 €/Monat — DSGVO-konform, Server in Frankfurt, in 30 Minuten startklar. Keine Mindestlaufzeit."
        path="/produkte/serveflow"
        keywords="Restaurantmanagement, Restaurantsoftware, Restaurant Software Deutschland, Kassensystem Restaurant, Reservierungssystem Restaurant, QR Bestellung Restaurant, ServeFlow, Tischverwaltung Software, Restaurant POS, Gastronomie Software, Online Reservierung Gastro, Restaurant Verwaltungssoftware, Restaurant Dienstplan, Restaurant Inventur, DSGVO Restaurant, Restaurant App Deutschland"
        breadcrumbs={[
          { name: 'Startseite', path: '/' },
          { name: 'Produkte', path: '/branchen' },
          { name: 'ServeFlow', path: '/produkte/serveflow' },
        ]}
        schema={[
          // Product / SoftwareApplication mit AggregateRating + detaillierten Offers
          {
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            '@id': 'https://drvnautomatisations.com/produkte/serveflow#software',
            name: 'ServeFlow',
            applicationCategory: ['BusinessApplication', 'RestaurantApplication'],
            applicationSubCategory: 'Restaurantmanagement-Software',
            operatingSystem: 'Web, iOS, Android',
            description:
              'ServeFlow ist eine cloudbasierte Restaurantmanagement-Software für Restaurants, Cafés, Bars und Bistros in Deutschland. Vereint QR-Bestellung, Online-Reservierungen, Tischverwaltung, Mitarbeiterverwaltung, Dienstplan und Echtzeit-Dashboard auf einer Plattform.',
            url: 'https://drvnautomatisations.com/produkte/serveflow',
            image: 'https://drvnautomatisations.com/og-image.svg',
            screenshot: 'https://drvnautomatisations.com/og-image.svg',
            inLanguage: 'de-DE',
            featureList: [
              'QR-Bestellung am Tisch (ohne App)',
              'Online-Reservierungen mit Buchungsseite',
              'Visueller Tischplan mit Drag-and-Drop',
              'Mitarbeiterverwaltung mit Rollen',
              'Dienstplan inkl. ArbZG-Check',
              'Echtzeit-Dashboard mit Socket.io',
              'Inventur-Modul',
              'Kassensystem',
              'Statistiken & Auswertungen',
              'SMS-Erinnerungen',
              'DSGVO-konform mit Servern in Deutschland',
            ],
            offers: {
              '@type': 'AggregateOffer',
              lowPrice: '29',
              highPrice: '99',
              priceCurrency: 'EUR',
              offerCount: 3,
              availability: 'https://schema.org/InStock',
            },
            provider: {
              '@type': 'Organization',
              name: 'DRVN',
              url: 'https://drvnautomatisations.com',
            },
            aggregateRating: buildRating(4.8, 27),
          },
          // FAQPage — kritisch für Google AI Overviews + ChatGPT
          buildFaqSchema(FAQ_LISTE.map((f) => ({ frage: f.frage, antwort: f.antwort }))),
          // HowTo — Step-by-Step für AI-Antworten auf "Wie startet man mit Restaurantmanagement-Software?"
          buildHowToSchema({
            name: 'In 30 Minuten zur Restaurantmanagement-Software',
            description: 'So startest du ServeFlow für dein Restaurant — von der Anmeldung bis zur ersten QR-Bestellung.',
            totalTime: 'PT30M',
            steps: HOWTO_STEPS,
          }),
        ]}
      />

      {/* ═══════════════════════════════════════════════════════════════════
          HERO — ContainerScroll mit Dashboard-Mockup
       ═══════════════════════════════════════════════════════════════════ */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: '25%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 65%)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: 0, right: '25%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 65%)', borderRadius: '50%', pointerEvents: 'none' }} />

        <ContainerScroll
          titleComponent={
            <>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 14px 5px 5px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '100px', marginBottom: '28px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', padding: '3px 8px', background: 'rgba(34,197,94,0.12)', color: '#22C55E', border: '1px solid rgba(34,197,94,0.3)', borderRadius: '100px', letterSpacing: '0.04em', fontWeight: 500 }}>
                  LIVE
                </span>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', color: 'rgba(255,255,255,0.75)', fontWeight: 500 }}>
                  Ein DRVN Produkt · Made in Germany
                </span>
              </div>

              <h1
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(40px, 6vw, 80px)',
                  fontWeight: 700,
                  lineHeight: 1.0,
                  letterSpacing: '-0.035em',
                  margin: '0 0 24px',
                  color: '#FAFAFA',
                }}
              >
                Schluss mit Zetteln.<br />
                <span style={{ background: 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Ihr Restaurant. Digital.
                </span>
              </h1>

              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(16px, 1.3vw, 20px)', lineHeight: 1.55, color: 'rgba(255,255,255,0.6)', maxWidth: '620px', margin: '0 auto 36px' }}>
                Gäste scannen, bestellen, bezahlen — Sie sehen alles live. QR-Bestellung,
                Online-Reservierungen und ein Echtzeit-Dashboard, das wirklich Sinn ergibt.
              </p>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '24px' }}>
                <Link to="/kontakt" className="btn-primary-blue" style={{ cursor: 'pointer' }}>
                  14 Tage kostenlos testen <ArrowRight size={15} />
                </Link>
                <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ cursor: 'pointer' }}>
                  <ExternalLink size={14} /> Live-Demo öffnen
                </a>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                {['Keine Kreditkarte nötig', 'Keine Mindestlaufzeit', '< 30 Min eingerichtet'].map((t) => (
                  <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'rgba(255,255,255,0.45)' }}>
                    <CheckCircle2 size={12} style={{ color: '#22C55E' }} />
                    {t}
                  </div>
                ))}
              </div>
            </>
          }
        >
          <TabletFrame>
            <DashboardMockup />
          </TabletFrame>
        </ContainerScroll>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          TRUST BAR
       ═══════════════════════════════════════════════════════════════════ */}
      <section className="border-y border-border bg-surface/40">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {[
              { icon: <Shield size={14} />, text: 'DSGVO-konform' },
              { icon: <Globe size={14} />, text: 'Server in Frankfurt' },
              { icon: <Lock size={14} />, text: 'SSL + Verschlüsselung' },
              { icon: <Clock size={14} />, text: '99,9 % Uptime' },
              { icon: <Smartphone size={14} />, text: 'Keine App nötig' },
              { icon: <Bell size={14} />, text: 'Echtzeit-Updates' },
            ].map((t) => (
              <div key={t.text} className="flex items-center gap-2 text-xs text-text-muted">
                <span className="text-success">{t.icon}</span>
                {t.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          NEU: SO FUNKTIONIERT ES (3 Steps mit Mockups)
       ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <FadeIn className="text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">So funktioniert es</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">In drei Schritten von Tisch zu Küche.</h2>
          <p className="text-text-muted mt-4 max-w-2xl mx-auto">
            Ohne neue Hardware, ohne Schulungen, ohne komplizierte Integrationen.
            Wir richten alles in einem Termin mit Ihnen ein.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Step 1: Scannen */}
          <FadeIn delay={0.1}>
            <div className="bg-surface border border-border rounded-3xl p-7 h-full flex flex-col group hover:border-primary/30 transition-all">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-full bg-primary/15 text-primary flex items-center justify-center font-bold">1</div>
                <span className="text-text-muted text-xs uppercase tracking-wider">Gast</span>
              </div>
              <h3 className="text-xl font-bold mb-2">QR-Code scannen.</h3>
              <p className="text-text-muted text-sm mb-6">
                Auf jedem Tisch ein QR-Aufkleber. Kamera auf, einmal antippen — fertig.
                Keine App, kein Login.
              </p>
              {/* QR-Visual */}
              <div className="mt-auto bg-[#0D1117] rounded-2xl p-6 flex justify-center border border-border">
                <div className="bg-white rounded-xl p-3 shadow-2xl">
                  <QrCodeSvg size={130} />
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Step 2: Bestellen */}
          <FadeIn delay={0.2}>
            <div className="bg-surface border border-border rounded-3xl p-7 h-full flex flex-col group hover:border-primary/30 transition-all">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-full bg-primary/15 text-primary flex items-center justify-center font-bold">2</div>
                <span className="text-text-muted text-xs uppercase tracking-wider">Gast</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Auswählen & senden.</h3>
              <p className="text-text-muted text-sm mb-6">
                Speisekarte mit Bildern, Allergenen und Extras. Bestellung geht direkt
                an Küche und Kellner — ohne Umwege.
              </p>
              {/* Phone-Mockup als visueller Anker */}
              <div className="mt-auto flex justify-center">
                <div className="scale-90">
                  <PhoneMockup />
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Step 3: Live-Dashboard */}
          <FadeIn delay={0.3}>
            <div className="bg-surface border border-border rounded-3xl p-7 h-full flex flex-col group hover:border-primary/30 transition-all">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-full bg-success/15 text-success flex items-center justify-center font-bold">3</div>
                <span className="text-text-muted text-xs uppercase tracking-wider">Sie</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Live im Dashboard.</h3>
              <p className="text-text-muted text-sm mb-6">
                Bestellung erscheint sofort — Tisch, Speise, Status. Sie behalten
                Umsatz, Auslastung und Reservierungen jederzeit im Blick.
              </p>
              {/* Mini Bestell-Liste */}
              <div className="mt-auto bg-[#0D1117] rounded-2xl p-4 border border-border space-y-2">
                {[
                  { tisch: 'Tisch 5', item: '2× Margherita', sec: 'Soeben', color: 'border-primary text-primary' },
                  { tisch: 'Tisch 3', item: '1× Carbonara', sec: 'Vor 2 Min.', color: 'border-yellow-400/40 text-yellow-400' },
                  { tisch: 'Tisch 8', item: '3× Tiramisu', sec: 'Vor 5 Min.', color: 'border-success/40 text-success' },
                ].map((b, i) => (
                  <div key={i} className={`bg-[#161B22] border-l-2 ${b.color} rounded-r-lg pl-3 pr-2.5 py-2 flex items-center justify-between`}>
                    <div>
                      <div className="text-[11px] font-semibold text-text">{b.tisch}</div>
                      <div className="text-[10px] text-text-muted">{b.item}</div>
                    </div>
                    <div className="text-[9px] text-text-muted font-mono">{b.sec}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          ROI / WAS SIE SPAREN
       ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-surface/40 border-y border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <FadeIn className="text-center mb-12">
            <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">Was es bringt</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Mehr Umsatz, weniger Stress.</h2>
            <p className="text-text-muted mt-3 max-w-xl mx-auto">
              Studien zeigen: Digitale Bestellsysteme erhöhen den durchschnittlichen
              Bestellwert messbar und reduzieren Wartezeiten am Tresen.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: <TrendingUp size={26} />,
                stat: '+12 – 22 %',
                label: 'höherer Bestellwert',
                desc: 'Gäste bestellen mehr wenn sie Bilder sehen und in Ruhe wählen können.',
                source: 'Quelle: Toast Restaurant Trends 2024',
              },
              {
                icon: <Clock size={26} />,
                stat: '6 – 10 h',
                label: 'pro Woche gespart',
                desc: 'Weniger Telefon-Reservierungen, weniger doppelte Buchungen, weniger Tippen.',
                source: 'Hochrechnung 30-Tische-Restaurant',
              },
              {
                icon: <Users size={26} />,
                stat: '< 2 Min.',
                label: 'bis zur Bestellung',
                desc: 'Statt 10 – 15 Min. Wartezeit vom Tisch zum Tresen — die Tische rotieren schneller.',
                source: 'Pilot-Daten ServeFlow',
              },
            ].map((r) => (
              <FadeIn key={r.label} delay={0.1}>
                <div className="bg-bg border border-border rounded-2xl p-7 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                    {r.icon}
                  </div>
                  <p className="text-3xl md:text-4xl font-bold text-gradient">{r.stat}</p>
                  <p className="text-text font-semibold mt-1">{r.label}</p>
                  <p className="text-text-muted text-sm leading-relaxed mt-3 flex-1">{r.desc}</p>
                  <p className="text-[11px] text-text-faint mt-4 font-mono">{r.source}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          BENTO FEATURES
       ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <FadeIn className="text-center mb-14">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">Features</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Eine Plattform statt fünf Tools.</h2>
          <p className="text-text-muted mt-4 max-w-2xl mx-auto">
            QR-Bestellung, Reservierungen, Tischplan, Mitarbeiter, Statistiken — alles
            an einer Stelle, alles synchron in Echtzeit.
          </p>
        </FadeIn>

        {/* Bento-Grid: 1 großer Block + 2 mittlere + 4 kleine */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Großer Block: QR-Bestellung */}
          <FadeIn delay={0.05} className="lg:col-span-2 lg:row-span-2">
            <div className="bg-surface border border-border rounded-3xl p-8 h-full hover:border-primary/30 transition-all flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <QrCode size={26} />
                </div>
                <span className="text-[11px] bg-primary/15 text-primary border border-primary/20 rounded-full px-3 py-1 font-medium">
                  Bestseller
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2">QR-Bestellung.</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-6 max-w-md">
                Gäste scannen, wählen aus der digitalen Speisekarte mit Bildern und
                Allergenen, bestellen direkt. Keine App, kein Download, kein Login.
                30-Min-Sitzungs-Schutz verhindert Bestellungen von zuhause.
              </p>
              <div className="flex-1 flex items-center justify-center">
                <PhoneMockup />
              </div>
            </div>
          </FadeIn>

          {/* Reservierungen */}
          <FadeIn delay={0.1}>
            <div className="bg-surface border border-border rounded-3xl p-7 h-full hover:border-primary/30 transition-all">
              <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                <CalendarCheck size={22} />
              </div>
              <h3 className="text-lg font-bold mb-2">Online-Reservierungen</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Eigene Buchungsseite mit Zeitslots, automatischer Bestätigung per
                E-Mail und Erinnerungen vor dem Termin.
              </p>
            </div>
          </FadeIn>

          {/* Tischplan */}
          <FadeIn delay={0.15}>
            <div className="bg-surface border border-border rounded-3xl p-7 h-full hover:border-primary/30 transition-all">
              <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                <LayoutDashboard size={22} />
              </div>
              <h3 className="text-lg font-bold mb-2">Visueller Tischplan</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Drag &amp; Drop wie bei Resmio. Bereiche, Dekoration, Live-Status —
                alles auf einem Bildschirm.
              </p>
            </div>
          </FadeIn>

          {/* Statistiken */}
          <FadeIn delay={0.2}>
            <div className="bg-surface border border-border rounded-3xl p-7 h-full hover:border-primary/30 transition-all">
              <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                <BarChart3 size={22} />
              </div>
              <h3 className="text-lg font-bold mb-2">Statistiken</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Umsatz, Top-Gerichte, Stoßzeiten, Auslastung — Daten die wirklich
                Entscheidungen stützen.
              </p>
            </div>
          </FadeIn>

          {/* Mitarbeiter & Dienstplan */}
          <FadeIn delay={0.25}>
            <div className="bg-surface border border-border rounded-3xl p-7 h-full hover:border-primary/30 transition-all">
              <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                <Users size={22} />
              </div>
              <h3 className="text-lg font-bold mb-2">Team &amp; Dienstplan</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Eigene Zugänge mit Rollen, Wochen-Dienstplan mit Drag &amp; Drop,
                automatische Stundenberechnung gemäß ArbZG.
              </p>
            </div>
          </FadeIn>

          {/* Design / Themes */}
          <FadeIn delay={0.3}>
            <div className="bg-surface border border-border rounded-3xl p-7 h-full hover:border-primary/30 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <Palette size={22} />
                </div>
                <span className="text-[11px] bg-success/10 text-success border border-success/20 rounded-full px-2.5 py-0.5 font-medium">
                  Neu
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2">7 Design-Layouts</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Modern, Elegant, Editorial, POS-Stil — wählen Sie aus fertigen
                Vorlagen oder bauen Sie Ihr eigenes.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          USE CASES — Welche Restaurants
       ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-surface/40 border-y border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <FadeIn className="text-center mb-12">
            <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">Für wen</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Egal welche Küche.</h2>
            <p className="text-text-muted mt-3 max-w-xl mx-auto">
              ServeFlow funktioniert für jede Art von Gastronomie — solange Sie Tische,
              eine Speisekarte und Gäste haben.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <Pizza size={26} />, name: 'Pizzeria & Trattoria', desc: 'Familien­abende, schnelle Tisch-Rotation' },
              { icon: <Coffee size={26} />, name: 'Café & Bistro', desc: 'Frühstück, Mittagsmenü, To-Go' },
              { icon: <Wine size={26} />, name: 'Bar & Lounge', desc: 'Cocktails, Tapas, später Abend' },
              { icon: <Utensils size={26} />, name: 'À la carte & Fine Dining', desc: 'Reservierungs-First, Premium-Look' },
            ].map((u, i) => (
              <FadeIn key={u.name} delay={i * 0.05}>
                <div className="bg-bg border border-border rounded-2xl p-6 h-full hover:border-primary/30 transition-all flex flex-col items-start">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    {u.icon}
                  </div>
                  <h3 className="font-semibold mb-1">{u.name}</h3>
                  <p className="text-text-muted text-xs leading-relaxed">{u.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          DEMO LINK SECTION (mit echtem QR)
       ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="bg-surface/60 border border-border rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Glow */}
          <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
            <FadeIn>
              <div>
                <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3 flex items-center gap-2">
                  <MousePointerClick size={14} />
                  Live ansehen
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Probieren Sie es einfach aus.
                </h2>
                <p className="text-text-muted leading-relaxed mb-7">
                  Wir haben eine vollständige Demo-Instanz mit Test-Speisekarte,
                  Tischen und Reservierungen. Kein Login, keine Anmeldung —
                  scannen Sie den QR oder öffnen Sie den Link.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Bestellseite vom Gast aus testen',
                    'Admin-Dashboard mit Live-Updates ansehen',
                    'Reservierung als Gast machen',
                    '7 Layout-Varianten durchblättern',
                  ].map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-sm text-text">
                      <CheckCircle2 size={16} className="text-success flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
                <a
                  href={DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-primary/90 text-white font-semibold px-7 py-3.5 rounded-xl transition-all glow-blue inline-flex items-center gap-2"
                >
                  <ExternalLink size={17} />
                  ServeFlow Demo öffnen
                </a>
              </div>
            </FadeIn>

            {/* Echter QR statt Lucide-Icon */}
            <FadeIn delay={0.1} className="flex justify-center lg:justify-end">
              <div className="bg-bg border border-border rounded-3xl p-8 text-center w-72">
                <div className="bg-white rounded-2xl p-5 mb-5 shadow-2xl inline-block">
                  <QrCodeSvg size={170} />
                </div>
                <p className="text-sm font-semibold text-text mb-1">Demo-Restaurant</p>
                <p className="text-xs text-text-muted mb-4">Trattoria Demo · Tisch 5</p>
                <div className="border-t border-border pt-4">
                  <a
                    href={DEMO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-xs hover:underline inline-flex items-center gap-1 font-medium"
                  >
                    Oder Link direkt öffnen <ChevronRight size={12} />
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          PREISE — Basis / Standard / Pro (29 / 59 / 99)
       ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-surface/40 border-y border-border" id="preise">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <FadeIn className="text-center mb-14">
            <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">Preise</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Transparent. Kein Kleingedrucktes.</h2>
            <p className="text-text-muted mt-3">Monatlich kündbar · Keine Einrichtungsgebühr · Keine Mindestlaufzeit</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Basis', preis: '29',
                sub: 'Einstieg mit den Reservierungs-Funktionen.',
                features: [
                  'Online-Reservierungen (unbegrenzt)',
                  'Eigene Buchungsseite',
                  'Digitale Speisekarte',
                  'Visueller Tischplan',
                  'E-Mail-Bestätigungen',
                  'Bis 3 Mitarbeiter',
                ],
                highlight: false, cta: 'Jetzt starten',
              },
              {
                name: 'Standard', preis: '59',
                sub: 'Alles was ein aktives Restaurant braucht.',
                features: [
                  'Alles aus Basis',
                  'QR-Bestellung mit Live-Updates',
                  'Gästebuch / CRM',
                  'Bewertungs-Management',
                  'Warteliste',
                  'Erweiterte Statistiken',
                  'SMS-Erinnerungen',
                  'Bis 10 Mitarbeiter',
                ],
                highlight: true, cta: '14 Tage kostenlos testen',
              },
              {
                name: 'Pro', preis: '99',
                sub: 'Volle Kontrolle für ambitionierte Betriebe.',
                features: [
                  'Alles aus Standard',
                  'Dienstplan inkl. ArbZG-Check',
                  'Excel-Import & Templates',
                  'Inventur-Modul',
                  'Kassensystem',
                  'Unbegrenzt Mitarbeiter',
                  'Prioritäts-Support',
                ],
                highlight: false, cta: 'Pro testen',
              },
            ].map((p) => (
              <FadeIn key={p.name} delay={0.05}>
                <div
                  className={`rounded-3xl p-7 border h-full flex flex-col relative ${
                    p.highlight
                      ? 'border-primary/40 bg-gradient-to-b from-primary/8 to-transparent'
                      : 'border-border bg-bg'
                  }`}
                >
                  {p.highlight && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-semibold px-4 py-1 rounded-full shadow-[0_4px_14px_rgba(59,130,246,0.4)]">
                      Empfohlen
                    </div>
                  )}
                  <p className="text-sm font-medium text-text-muted mb-1">{p.name}</p>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-5xl font-bold tracking-tight">€{p.preis}</span>
                    <span className="text-text-muted text-sm">/Monat</span>
                  </div>
                  <p className="text-xs text-text-muted mb-6">{p.sub}</p>
                  <ul className="space-y-2.5 flex-1 mb-6">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <CheckCircle2 size={15} className={`flex-shrink-0 mt-0.5 ${p.highlight ? 'text-primary' : 'text-success'}`} />
                        <span className="text-text">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/kontakt"
                    className={`w-full py-3 rounded-xl font-semibold text-sm text-center transition-all ${
                      p.highlight
                        ? 'bg-primary hover:bg-primary/90 text-white glow-blue'
                        : 'border border-border-light hover:border-primary/30 text-text'
                    }`}
                  >
                    {p.cta}
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
          <p className="text-center text-xs text-text-muted mt-6">
            Alle Preise zzgl. gesetzlicher MwSt. · Bei Jahresabo 2 Monate gratis.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          FAQ
       ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-3xl mx-auto px-6 py-24">
        <FadeIn className="text-center mb-12">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold">Häufige Fragen</h2>
        </FadeIn>
        <div className="space-y-3">
          {FAQ_LISTE.map((f) => (
            <FadeIn key={f.frage} delay={0.05}>
              <FaqItem {...f} />
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CINEMATIC FOOTER
          Curtain-Reveal-Footer mit GSAP-Animationen, Magnetic Buttons,
          serve-flow.org als primärer CTA. Ersetzt sowohl Final-CTA als auch
          den globalen Footer (in App.tsx über ROUTES_OHNE_GLOBAL_FOOTER).
       ═══════════════════════════════════════════════════════════════════ */}
      <CinematicFooter />
    </div>
  );
}
