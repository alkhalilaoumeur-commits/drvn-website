import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
  ArrowRight, ArrowUpRight, Check,
  UtensilsCrossed, Hammer, Sparkles, Dumbbell, Building2, Truck,
  QrCode, CalendarCheck, LayoutDashboard, Users, Clock,
} from 'lucide-react';
import SEO from '../components/SEO';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

function Section({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.section ref={ref} variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'} style={style}>
      {children}
    </motion.section>
  );
}

const ROADMAP = [
  {
    name: 'HandBase',
    branche: 'Handwerk & Bau',
    icon: <Hammer size={22} strokeWidth={1.5} />,
    desc: 'Auftragsmanagement, Zeiterfassung, digitale Rechnungen und mobile App für Monteure.',
    eta: 'Q3 2026',
    color: 'rgba(245,158,11,0.15)',
    border: 'rgba(245,158,11,0.25)',
    accent: '#F59E0B',
  },
  {
    name: 'BeautyBase',
    branche: 'Beauty & Kosmetik',
    icon: <Sparkles size={22} strokeWidth={1.5} />,
    desc: 'Online-Terminbuchung, digitale Kundenkartei, Produkt- und Behandlungsverwaltung.',
    eta: 'Q4 2026',
    color: 'rgba(236,72,153,0.12)',
    border: 'rgba(236,72,153,0.2)',
    accent: '#EC4899',
  },
  {
    name: 'CleanBase',
    branche: 'Reinigung',
    icon: <Building2 size={22} strokeWidth={1.5} />,
    desc: 'Einsatz- und Schichtplanung, Kundenverwaltung, Leistungserfassung für Reinigungsfirmen.',
    eta: 'Q1 2027',
    color: 'rgba(34,197,94,0.1)',
    border: 'rgba(34,197,94,0.2)',
    accent: '#22C55E',
  },
  {
    name: 'CaterBase',
    branche: 'Catering & Events',
    icon: <Truck size={22} strokeWidth={1.5} />,
    desc: 'Event-Planung, Angebotserstellung, Personaldisposition für Caterer und Eventgastronomie.',
    eta: 'Q2 2027',
    color: 'rgba(139,92,246,0.12)',
    border: 'rgba(139,92,246,0.2)',
    accent: '#8B5CF6',
  },
  {
    name: 'FitBase',
    branche: 'Fitness & Wellness',
    icon: <Dumbbell size={22} strokeWidth={1.5} />,
    desc: 'Mitgliederverwaltung, Kursplanung, Trainingspläne für Studios, Trainer und Vereine.',
    eta: 'Q3 2027',
    color: 'rgba(6,182,212,0.1)',
    border: 'rgba(6,182,212,0.2)',
    accent: '#06B6D4',
  },
];

const SERVEFLOW_FEATURES = [
  { icon: <QrCode size={14} />, label: 'QR-Bestellung' },
  { icon: <CalendarCheck size={14} />, label: 'Online-Reservierungen' },
  { icon: <LayoutDashboard size={14} />, label: 'Echtzeit-Dashboard' },
  { icon: <Users size={14} />, label: 'Mitarbeiterverwaltung' },
  { icon: <Clock size={14} />, label: 'Dienstplan' },
  { icon: <UtensilsCrossed size={14} />, label: 'Tischverwaltung' },
];

export default function Branchen() {
  return (
    <div style={{ position: 'relative', background: 'transparent' }}>
      <SEO
        title="Branchen — Software für Gastronomie, Handwerk & mehr | DRVN"
        description="DRVN entwickelt spezialisierte SaaS-Lösungen für Gastronomie (ServeFlow live), Handwerk, Beauty, Reinigung, Catering und Fitness — branchenspezifisch, DSGVO-konform, Server in Deutschland."
        path="/branchen"
        keywords="Gastronomie Software, Handwerk Software, Restaurantmanagementsystem, Beauty Software, Fitness Software, Reinigung Software, Branchenlösung Deutschland, SaaS Stuttgart"
        breadcrumbs={[
          { name: 'Startseite', path: '/' },
          { name: 'Branchen', path: '/branchen' },
        ]}
      />

      {/* ── HERO ── */}
      <section style={{ padding: '160px 32px 80px', maxWidth: '1240px', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#3B82F6', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 20px' }}>
            Branchen
          </p>
          <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(44px, 6vw, 88px)', fontWeight: 700, lineHeight: 1.0, letterSpacing: '-0.035em', margin: '0 0 24px', color: '#FAFAFA', maxWidth: '900px' }}>
            Eine Plattform<br />
            <span style={{ background: 'linear-gradient(135deg, #3B82F6, #06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              pro Branche.
            </span>
          </h1>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', lineHeight: 1.65, color: 'rgba(255,255,255,0.55)', maxWidth: '580px', margin: 0 }}>
            Jede Branche hat andere Abläufe. Deshalb bauen wir keine Einheitslösung —
            sondern Software, die Ihren Alltag wirklich kennt.
          </p>
        </motion.div>
      </section>

      {/* ── SERVEFLOW — LIVE PRODUKT ── */}
      <Section style={{ padding: '0 32px 80px', maxWidth: '1240px', margin: '0 auto' }}>
        <motion.div variants={fadeUp} style={{
          position: 'relative',
          borderRadius: '28px',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, rgba(59,130,246,0.1) 0%, rgba(6,182,212,0.05) 100%)',
          border: '1px solid rgba(59,130,246,0.25)',
          padding: '64px',
        }}>
          {/* Glow */}
          <div style={{ position: 'absolute', top: '-30%', right: '-10%', width: '600px', height: '600px', background: 'radial-gradient(ellipse, rgba(59,130,246,0.12) 0%, transparent 60%)', pointerEvents: 'none' }} />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center', position: 'relative', zIndex: 1 }}>
            {/* Left: Info */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 12px 4px 8px', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: '100px', marginBottom: '28px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22C55E', display: 'inline-block' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#22C55E', letterSpacing: '0.06em', fontWeight: 600, textTransform: 'uppercase' }}>
                  Live · Jetzt verfügbar
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'linear-gradient(135deg, #3B82F6, #06B6D4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <UtensilsCrossed size={24} style={{ color: '#fff' }} />
                </div>
                <div>
                  <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: '2rem', fontWeight: 700, color: '#FAFAFA', letterSpacing: '-0.03em', margin: 0, lineHeight: 1 }}>
                    ServeFlow
                  </h2>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.05em', margin: '4px 0 0', textTransform: 'uppercase' }}>
                    Gastronomie
                  </p>
                </div>
              </div>

              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', lineHeight: 1.65, color: 'rgba(255,255,255,0.65)', margin: '0 0 32px' }}>
                Digitales Betriebssystem für Restaurants, Cafés und Bars.
                QR-Bestellung, Reservierungen, Tischverwaltung, Dienstplan — alles auf einer Plattform.
                In 30 Minuten startklar.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '40px' }}>
                {SERVEFLOW_FEATURES.map((f) => (
                  <div key={f.label} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'rgba(255,255,255,0.7)' }}>
                    <span style={{ color: '#3B82F6', flexShrink: 0 }}>{f.icon}</span>
                    {f.label}
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
                <Link to="/produkte/serveflow" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '13px 24px',
                  background: 'linear-gradient(135deg, #3B82F6, #2563EB)',
                  borderRadius: '11px', textDecoration: 'none',
                  fontFamily: 'var(--font-sans)', fontSize: '0.9rem', fontWeight: 600, color: '#fff',
                  boxShadow: '0 8px 24px rgba(59,130,246,0.3)',
                }}>
                  ServeFlow entdecken <ArrowRight size={15} />
                </Link>
                <Link to="/kontakt" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)',
                  textDecoration: 'none', letterSpacing: '0.02em',
                }}>
                  Demo anfragen <ArrowUpRight size={12} />
                </Link>
              </div>
            </div>

            {/* Right: Pricing */}
            <div>
              <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', overflow: 'hidden', backdropFilter: 'blur(12px)' }}>
                {/* Header */}
                <div style={{ padding: '24px 28px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.08em', textTransform: 'uppercase', margin: '0 0 8px' }}>
                    Pricing
                  </p>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', margin: 0 }}>
                    Monatlich kündbar · Keine Mindestlaufzeit
                  </p>
                </div>
                {/* Plans */}
                {[
                  { name: 'Basis', price: '29', features: ['Reservierungen', 'Tischplan', 'Bis 3 Mitarbeiter'] },
                  { name: 'Standard', price: '59', features: ['+ QR-Bestellung', '+ CRM + SMS', 'Bis 10 Mitarbeiter'], highlight: true },
                  { name: 'Pro', price: '99', features: ['+ Dienstplan + Inventur', '+ Kassensystem', 'Unbegrenzt Mitarbeiter'] },
                ].map((plan) => (
                  <div key={plan.name} style={{
                    padding: '20px 28px',
                    borderBottom: '1px solid rgba(255,255,255,0.04)',
                    background: plan.highlight ? 'rgba(59,130,246,0.06)' : 'transparent',
                    borderLeft: plan.highlight ? '2px solid rgba(59,130,246,0.4)' : '2px solid transparent',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                      <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', fontWeight: plan.highlight ? 600 : 400, color: plan.highlight ? '#FAFAFA' : 'rgba(255,255,255,0.65)' }}>
                        {plan.name}
                      </span>
                      <span style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', fontWeight: 700, color: plan.highlight ? '#3B82F6' : 'rgba(255,255,255,0.6)', letterSpacing: '-0.02em' }}>
                        {plan.price} €<span style={{ fontSize: '0.65rem', fontWeight: 400, color: 'rgba(255,255,255,0.35)', letterSpacing: 0 }}>/Mo</span>
                      </span>
                    </div>
                    {plan.features.map((f) => (
                      <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                        <Check size={11} style={{ color: plan.highlight ? '#3B82F6' : 'rgba(255,255,255,0.25)', flexShrink: 0 }} />
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.02em' }}>{f}</span>
                      </div>
                    ))}
                  </div>
                ))}
                <div style={{ padding: '20px 28px' }}>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.04em', margin: 0, textAlign: 'center' }}>
                    14 Tage kostenlos · Keine Kreditkarte nötig
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* ── ROADMAP ── */}
      <Section style={{ padding: '0 32px 120px', maxWidth: '1240px', margin: '0 auto' }}>
        <motion.div variants={fadeUp} style={{ marginBottom: '56px' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#3B82F6', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 16px' }}>
            Roadmap 2026 – 2027
          </p>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 700, color: '#FAFAFA', letterSpacing: '-0.03em', lineHeight: 1.1, margin: '0 0 16px', maxWidth: '680px' }}>
            Fünf weitere Produkte.<br />
            <span style={{ color: 'rgba(255,255,255,0.35)' }}>Alle in Entwicklung.</span>
          </h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', lineHeight: 1.65, color: 'rgba(255,255,255,0.5)', margin: 0, maxWidth: '520px' }}>
            Jedes Produkt wird erst entwickelt, wenn die Branche validiert ist.
            Interesse an einem frühen Zugang? Schreiben Sie uns.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '16px' }}>
          {ROADMAP.slice(0, 3).map((p) => (
            <motion.div key={p.name} variants={fadeUp} style={{
              padding: '32px 28px',
              background: p.color,
              border: `1px solid ${p.border}`,
              borderRadius: '20px',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '11px', background: `${p.accent}20`, border: `1px solid ${p.accent}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: p.accent }}>
                  {p.icon}
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.06em', padding: '4px 10px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>
                  {p.eta}
                </span>
              </div>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.06em', textTransform: 'uppercase', margin: '0 0 6px' }}>
                {p.branche}
              </p>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.3rem', fontWeight: 700, color: '#FAFAFA', letterSpacing: '-0.02em', margin: '0 0 12px', lineHeight: 1.1 }}>
                {p.name}
              </h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.86rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.55)', margin: 0 }}>
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          {ROADMAP.slice(3).map((p) => (
            <motion.div key={p.name} variants={fadeUp} style={{
              padding: '32px 28px',
              background: p.color,
              border: `1px solid ${p.border}`,
              borderRadius: '20px',
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '11px', background: `${p.accent}20`, border: `1px solid ${p.accent}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: p.accent }}>
                  {p.icon}
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.06em', padding: '4px 10px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>
                  {p.eta}
                </span>
              </div>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.06em', textTransform: 'uppercase', margin: '0 0 6px' }}>
                {p.branche}
              </p>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.3rem', fontWeight: 700, color: '#FAFAFA', letterSpacing: '-0.02em', margin: '0 0 12px', lineHeight: 1.1 }}>
                {p.name}
              </h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.86rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.55)', margin: 0 }}>
                {p.desc}
              </p>
            </motion.div>
          ))}

          {/* Early Access Card */}
          <motion.div variants={fadeUp} style={{
            padding: '32px 28px',
            background: 'rgba(255,255,255,0.02)',
            border: '1px dashed rgba(255,255,255,0.12)',
            borderRadius: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            gap: '16px',
          }}>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', fontWeight: 500, color: 'rgba(255,255,255,0.5)', margin: 0 }}>
              Ihre Branche fehlt?
            </p>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.35)', margin: 0, maxWidth: '220px' }}>
              Wir bauen Custom-Lösungen auch außerhalb der Roadmap — auf Anfrage.
            </p>
            <Link to="/kontakt" style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              padding: '10px 18px',
              background: 'rgba(59,130,246,0.1)',
              border: '1px solid rgba(59,130,246,0.25)',
              borderRadius: '8px', textDecoration: 'none',
              fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#3B82F6', letterSpacing: '0.02em',
            }}>
              Anfrage stellen <ArrowRight size={12} />
            </Link>
          </motion.div>
        </div>
      </Section>

      {/* ── CTA ── */}
      <Section style={{ padding: '0 32px 160px' }}>
        <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center' }}>
          <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 700, color: '#FAFAFA', letterSpacing: '-0.03em', lineHeight: 1.1, margin: '0 0 20px' }}>
            Mit ServeFlow starten.
          </motion.h2>
          <motion.p variants={fadeUp} style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', lineHeight: 1.65, color: 'rgba(255,255,255,0.55)', margin: '0 auto 40px', maxWidth: '500px' }}>
            Das einzige live-Produkt im Portfolio — jetzt schon in Restaurants in Deutschland im Einsatz.
          </motion.p>
          <motion.div variants={fadeUp} style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <Link to="/produkte/serveflow" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '14px 28px',
              background: 'linear-gradient(135deg, #3B82F6, #2563EB)',
              borderRadius: '12px', textDecoration: 'none',
              fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 600, color: '#fff',
              boxShadow: '0 10px 30px rgba(59,130,246,0.3)',
            }}>
              ServeFlow ansehen <ArrowRight size={16} />
            </Link>
            <Link to="/kontakt" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '14px 28px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '12px', textDecoration: 'none',
              fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 500, color: 'rgba(255,255,255,0.75)',
            }}>
              Demo anfragen
            </Link>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
