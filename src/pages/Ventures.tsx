import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, X, CheckCircle, Cpu, Lightbulb, Handshake } from 'lucide-react';
import SEO from '../components/SEO';
import { track, Events } from '../lib/analytics';
import { fadeUp, staggerFast, wordReveal, stagger, viewport, easeOut } from '../lib/animations';

const HERO_LINE_1 = 'Spezifische Anfragen.'.split(' ');
const HERO_LINE_2 = 'Echte Zusammenarbeit.'.split(' ');

const PASST = [
  'Klare Vision und konkretes Ziel',
  'Budget vorhanden und realistisch',
  'Langfristiges Denken — kein Quick Fix',
  'Offene, direkte Kommunikation',
];

const PASST_NICHT = [
  'Kein Budget oder unrealistische Vorstellungen',
  'Unklar was eigentlich gebraucht wird',
  'Wunsch nach „schnell und billig"',
  'Kein Interesse an Qualität',
];

const VENTURES_BEDEUTET = [
  {
    icon: Cpu,
    title: 'Individuelle Software',
    text: 'Wenn keine Standardlösung passt. Wir bauen Custom-Systeme — vom Auth-Flow bis zum Multi-Tenant-Dashboard.',
  },
  {
    icon: Lightbulb,
    title: 'Technische Beratung',
    text: 'Architektur-Reviews, Stack-Entscheidungen, Code-Audits. Für interne Teams die einen erfahrenen Sparringspartner brauchen.',
  },
  {
    icon: Handshake,
    title: 'Langfristige Partnerschaft',
    text: 'Als externer Entwicklungspartner über Monate hinweg. Strategische Begleitung, nicht nur Tickets abarbeiten.',
  },
];

export default function VenturesPage() {
  return (
    <>
      <SEO
        title="Ventures — Individuelle Softwareprojekte & Beratung | drvn"
        description="drvn Ventures: Strategische Software-Projekte, technische Beratung und langfristige Entwicklungspartnerschaften. Selektiv. Direkt. Auf Augenhöhe."
        path="/ventures"
        keywords="Custom Software, Software Entwicklung Stuttgart, technische Beratung, CTO Beratung, Entwicklungspartner, Individuelle Software DACH"
        breadcrumbs={[
          { name: 'Start', path: '/' },
          { name: 'Ventures', path: '/ventures' },
        ]}
      />

      {/* ═══════════════════════════════════════════════════════════
          HERO
          ═══════════════════════════════════════════════════════════ */}
      <section style={{ position: 'relative', paddingTop: 160, paddingBottom: 96, overflow: 'hidden' }}>
        <div className="hero-grid" />
        <div className="hero-glow" />

        <div className="container-x" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
            style={{ marginBottom: 28 }}
          >
            <span className="badge badge-accent">DRVN VENTURES</span>
          </motion.div>

          <motion.h1
            variants={staggerFast}
            initial="initial"
            animate="animate"
            className="display-hero"
            style={{ margin: 0, marginBottom: 24 }}
          >
            <span style={{ display: 'block' }}>
              {HERO_LINE_1.map((w, i) => (
                <motion.span key={i} variants={wordReveal} style={{ display: 'inline-block', marginRight: '0.28em' }}>
                  {w}
                </motion.span>
              ))}
            </span>
            <span style={{ display: 'block', color: 'var(--accent)' }}>
              {HERO_LINE_2.map((w, i) => (
                <motion.span key={i} variants={wordReveal} style={{ display: 'inline-block', marginRight: '0.28em' }}>
                  {w}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.5 }}
            style={{
              fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.05rem, 1.4vw, 1.3rem)',
              color: 'var(--text-secondary)', lineHeight: 1.55,
              maxWidth: '54ch', margin: '0 0 40px',
            }}
          >
            Wir nehmen eine begrenzte Anzahl strategischer Projekte an. Für Unternehmen die mehr wollen als eine Standard-Lösung.
          </motion.p>

          <motion.a
            href="#anfrage"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.65 }}
            className="btn-primary"
          >
            Anfrage einreichen <ArrowRight size={16} />
          </motion.a>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          WAS VENTURES BEDEUTET (Editorial)
          ═══════════════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }} className="section-y">
        <div className="container-x" style={{ maxWidth: 920 }}>
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            style={{ marginBottom: 64 }}
          >
            <span className="eyebrow" style={{ marginBottom: 18 }}>Was Ventures bedeutet</span>
            <h2 className="display-1" style={{ margin: '14px 0 0', maxWidth: '20ch' }}>
              Kein Standard-Beratungs-Paket.
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            style={{ display: 'grid', gap: 48 }}
          >
            {VENTURES_BEDEUTET.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  style={{
                    display: 'grid', gap: 32, alignItems: 'flex-start',
                  }}
                  className="venture-row"
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                    <div style={{
                      width: 48, height: 48, borderRadius: 12,
                      background: 'rgba(255, 77, 0, 0.1)',
                      border: '1px solid rgba(255, 77, 0, 0.25)',
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <Icon size={22} style={{ color: 'var(--accent)' }} />
                    </div>
                    <span style={{
                      fontFamily: 'var(--font-mono)', fontSize: '0.8rem',
                      color: 'var(--text-muted)', letterSpacing: '0.1em',
                    }}>
                      0{i + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="display-2" style={{ margin: 0, marginBottom: 14 }}>{item.title}</h3>
                    <p style={{
                      fontFamily: 'var(--font-sans)', fontSize: '1.1rem',
                      color: 'var(--text-secondary)', lineHeight: 1.65,
                      margin: 0, maxWidth: '60ch',
                    }}>{item.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <style>{`
          @media (min-width: 800px) {
            .venture-row {
              grid-template-columns: 200px 1fr !important;
              gap: 56px !important;
            }
          }
        `}</style>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FÜR WEN
          ═══════════════════════════════════════════════════════════ */}
      <section style={{ borderTop: '1px solid var(--border)' }} className="section-y">
        <div className="container-x">
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            style={{ maxWidth: '52rem', marginBottom: 56 }}
          >
            <span className="eyebrow" style={{ marginBottom: 18 }}>Passgenauigkeit</span>
            <h2 className="display-1" style={{ margin: '14px 0 0' }}>
              Für wen ist das gedacht?
            </h2>
          </motion.div>

          <div className="match-grid" style={{ display: 'grid', gap: 24 }}>
            {/* Passt */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={viewport}
              className="card"
              style={{
                padding: 32,
                borderColor: 'rgba(34, 197, 94, 0.25)',
                background: 'linear-gradient(180deg, rgba(34,197,94,0.04), transparent 60%), var(--surface)',
              }}
            >
              <p style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                color: 'var(--success)',
                fontFamily: 'var(--font-sans)', fontSize: '0.72rem',
                fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase',
                margin: 0, marginBottom: 24,
              }}>
                <Check size={14} strokeWidth={3} /> Das passt
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 14 }}>
                {PASST.map((item) => (
                  <li key={item} style={{
                    display: 'flex', alignItems: 'flex-start', gap: 12,
                    fontFamily: 'var(--font-sans)', fontSize: '1rem',
                    color: 'var(--text-primary)', lineHeight: 1.55,
                  }}>
                    <CheckCircle size={18} style={{ color: 'var(--success)', flexShrink: 0, marginTop: 2 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Passt nicht */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={viewport}
              transition={{ delay: 0.1 }}
              className="card"
              style={{ padding: 32 }}
            >
              <p style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-sans)', fontSize: '0.72rem',
                fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase',
                margin: 0, marginBottom: 24,
              }}>
                <X size={14} strokeWidth={3} /> Das passt nicht
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 14 }}>
                {PASST_NICHT.map((item) => (
                  <li key={item} style={{
                    display: 'flex', alignItems: 'flex-start', gap: 12,
                    fontFamily: 'var(--font-sans)', fontSize: '1rem',
                    color: 'var(--text-secondary)', lineHeight: 1.55,
                  }}>
                    <X size={18} style={{ color: 'var(--text-muted)', flexShrink: 0, marginTop: 2 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        <style>{`
          @media (min-width: 800px) {
            .match-grid { grid-template-columns: 1fr 1fr !important; }
          }
        `}</style>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          ANFRAGE-FORMULAR
          ═══════════════════════════════════════════════════════════ */}
      <section
        id="anfrage"
        style={{
          background: 'var(--surface)', borderTop: '1px solid var(--border)',
          position: 'relative', overflow: 'hidden',
        }}
        className="section-y"
      >
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 60% 70% at 50% 0%, rgba(255,77,0,0.06), transparent 60%)',
          pointerEvents: 'none',
        }} />

        <div className="container-x" style={{ position: 'relative', maxWidth: 760 }}>
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            style={{ textAlign: 'center', marginBottom: 48 }}
          >
            <span className="eyebrow" style={{ marginBottom: 18 }}>Anfrage</span>
            <h2 className="display-1" style={{ margin: '14px 0 14px' }}>
              Erzähl uns von deinem Projekt.
            </h2>
            <p style={{
              fontFamily: 'var(--font-sans)', fontSize: '1.05rem',
              color: 'var(--text-secondary)', lineHeight: 1.55,
              maxWidth: '46ch', marginInline: 'auto',
            }}>
              Wir antworten innerhalb von 48 Stunden — auch wenn es nicht passt.
            </p>
          </motion.div>

          <VenturesForm />
        </div>
      </section>
    </>
  );
}

/* ── Ventures Anfrage-Formular ─────────────────────────────────── */
function VenturesForm() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    track(Events.KONTAKT_FORM_SUBMITTED, {
      source: 'ventures-form',
      budget: String(data.get('budget') || 'nicht-angegeben'),
    });
    // Simulate API call. In production: POST to backend.
    setTimeout(() => {
      setSubmitting(false);
      setSent(true);
    }, 600);
  }

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: easeOut }}
        className="card"
        style={{
          padding: 40, textAlign: 'center',
          borderColor: 'rgba(34, 197, 94, 0.3)',
          background: 'linear-gradient(180deg, rgba(34,197,94,0.05), transparent 60%), var(--surface)',
        }}
      >
        <CheckCircle size={48} style={{ color: 'var(--success)', margin: '0 auto 20px', display: 'block' }} />
        <h3 className="display-2" style={{ margin: 0, marginBottom: 12 }}>
          Anfrage erhalten.
        </h3>
        <p style={{
          fontFamily: 'var(--font-sans)', fontSize: '1rem',
          color: 'var(--text-secondary)', lineHeight: 1.55,
          maxWidth: '40ch', marginInline: 'auto',
        }}>
          Wir melden uns innerhalb von 48 Stunden mit einer Einschätzung und nächsten Schritten.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={onSubmit}
      variants={fadeUp}
      initial="initial"
      whileInView="animate"
      viewport={viewport}
      className="card"
      style={{ padding: 36 }}
    >
      <div style={{ display: 'grid', gap: 20 }}>
        <div className="form-row">
          <label>
            <span className="field-label">Name *</span>
            <input className="field" type="text" name="name" required autoComplete="name" />
          </label>
          <label>
            <span className="field-label">E-Mail *</span>
            <input className="field" type="email" name="email" required autoComplete="email" />
          </label>
        </div>

        <label>
          <span className="field-label">Unternehmen</span>
          <input className="field" type="text" name="company" autoComplete="organization" />
        </label>

        <label>
          <span className="field-label">Budget *</span>
          <select className="field" name="budget" required defaultValue="">
            <option value="" disabled>Wähle einen Bereich</option>
            <option value="under-5k">Unter 5.000 €</option>
            <option value="5-15k">5.000 € – 15.000 €</option>
            <option value="15-50k">15.000 € – 50.000 €</option>
            <option value="50k+">50.000 € +</option>
          </select>
        </label>

        <label>
          <span className="field-label">Projektbeschreibung *</span>
          <textarea
            className="field"
            name="message"
            rows={5}
            required
            placeholder="Was willst du bauen? Welches Problem löst du?"
            style={{ resize: 'vertical', minHeight: 120, fontFamily: 'var(--font-sans)' }}
          />
        </label>

        <button
          type="submit"
          disabled={submitting}
          className="btn-primary"
          style={{
            width: '100%', justifyContent: 'center',
            padding: '0.95rem 1.5rem', fontSize: '1rem',
            opacity: submitting ? 0.6 : 1,
            cursor: submitting ? 'wait' : 'pointer',
          }}
        >
          {submitting ? 'Wird gesendet…' : 'Anfrage absenden'}
          {!submitting && <ArrowRight size={16} />}
        </button>
      </div>

      <p style={{
        marginTop: 20, marginBottom: 0,
        fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
        color: 'var(--text-muted)', textAlign: 'center', lineHeight: 1.5,
      }}>
        Mit dem Absenden stimmst du unserer <a href="/datenschutz" style={{ color: 'var(--accent)' }}>Datenschutzerklärung</a> zu.
      </p>

      <style>{`
        .form-row {
          display: grid; gap: 20px;
        }
        @media (min-width: 600px) {
          .form-row { grid-template-columns: 1fr 1fr; }
        }
      `}</style>
    </motion.form>
  );
}
