import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Mail, MapPin, Clock, ArrowRight, ArrowUpRight, CheckCircle,
  QrCode, Code2, Zap,
} from 'lucide-react';
import SEO from '../components/SEO';
import { BRAND } from '../lib/constants';
import { track, Events } from '../lib/analytics';
import { viewport, easeOut } from '../lib/animations';

export default function KontaktPage() {
  return (
    <>
      <SEO
        title="Kontakt — drvn aus Stuttgart"
        description="drvn kontaktieren: kontakt@drvnautomatisations.com. Antwort innerhalb von 48 Stunden. Egal ob ServeFlow-Demo, Webprojekt oder Ventures-Anfrage."
        path="/kontakt"
        breadcrumbs={[
          { name: 'Start', path: '/' },
          { name: 'Kontakt', path: '/kontakt' },
        ]}
      />

      {/* ═══════════════════════════════════════════════════════════
          HERO (kompakt)
          ═══════════════════════════════════════════════════════════ */}
      <section style={{ position: 'relative', paddingTop: 144, paddingBottom: 64, overflow: 'hidden' }}>
        <div className="hero-glow" style={{ height: 480 }} />

        <div className="container-x" style={{ position: 'relative', zIndex: 1, maxWidth: 880 }}>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
            style={{ marginBottom: 24 }}
          >
            <span className="eyebrow">Kontakt</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.1 }}
            className="display-1"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
              margin: 0, marginBottom: 20,
            }}
          >
            Lass uns <span style={{ color: 'var(--accent)' }}>reden.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.25 }}
            style={{
              fontFamily: 'var(--font-sans)', fontSize: '1.2rem',
              color: 'var(--text-secondary)', lineHeight: 1.55,
              margin: 0, maxWidth: '52ch',
            }}
          >
            Egal ob Produkt-Demo, Webprojekt oder Venture-Anfrage — wir antworten schnell.
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          GRID — Infos & Formular
          ═══════════════════════════════════════════════════════════ */}
      <section style={{ borderTop: '1px solid var(--border)' }} className="section-y">
        <div className="container-x">
          <div className="contact-grid" style={{ display: 'grid', gap: 48 }}>
            {/* Links: Infos */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, ease: easeOut }}
              style={{ display: 'flex', flexDirection: 'column', gap: 28 }}
            >
              <div>
                <p className="eyebrow-muted" style={{ marginBottom: 18 }}>Direkt</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  <InfoRow
                    Icon={Mail}
                    label="E-Mail"
                    value={BRAND.email}
                    href={`mailto:${BRAND.email}`}
                  />
                  <InfoRow
                    Icon={Clock}
                    label="Antwortzeit"
                    value="Innerhalb von 48 Stunden"
                  />
                  <InfoRow
                    Icon={MapPin}
                    label="Standort"
                    value="Stuttgart, Deutschland 🇩🇪"
                  />
                </div>
              </div>

              <div style={{ paddingTop: 24, borderTop: '1px solid var(--border)' }}>
                <p className="eyebrow-muted" style={{ marginBottom: 18 }}>Quick Links</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <QuickLink to="/serveflow" Icon={QrCode} label="ServeFlow Demo" />
                  <QuickLink to="/web"       Icon={Code2}  label="Webprojekt starten" />
                  <QuickLink to="/ventures"  Icon={Zap}    label="Ventures anfragen" />
                </div>
              </div>
            </motion.div>

            {/* Rechts: Formular */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, ease: easeOut, delay: 0.1 }}
            >
              <KontaktForm />
            </motion.div>
          </div>
        </div>

        <style>{`
          @media (min-width: 900px) {
            .contact-grid {
              grid-template-columns: 1fr 1.6fr !important;
              gap: 72px !important;
            }
          }
        `}</style>
      </section>
    </>
  );
}

/* ── Info Row ─────────────────────────────────────────────────── */
function InfoRow({
  Icon, label, value, href,
}: {
  Icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const Wrapper: any = href ? 'a' : 'div';
  const wrapperProps = href ? { href } : {};
  return (
    <Wrapper
      {...wrapperProps}
      style={{
        display: 'flex', alignItems: 'flex-start', gap: 14,
        textDecoration: 'none',
        padding: 4,
        borderRadius: 8,
        transition: 'transform 0.2s',
      }}
    >
      <div style={{
        width: 38, height: 38, borderRadius: 10,
        background: 'var(--surface-high)',
        border: '1px solid var(--border-high)',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}>
        <Icon size={16} style={{ color: 'var(--accent)' }} />
      </div>
      <div>
        <div style={{
          fontFamily: 'var(--font-sans)', fontSize: '0.72rem',
          fontWeight: 600, letterSpacing: '0.12em',
          color: 'var(--text-muted)', textTransform: 'uppercase',
          marginBottom: 4,
        }}>{label}</div>
        <div style={{
          fontFamily: 'var(--font-sans)', fontSize: '0.98rem',
          color: 'var(--text-primary)', wordBreak: 'break-word',
        }}>{value}</div>
      </div>
    </Wrapper>
  );
}

/* ── Quick Link ───────────────────────────────────────────────── */
function QuickLink({
  to, Icon, label,
}: {
  to: string;
  Icon: typeof QrCode;
  label: string;
}) {
  return (
    <Link
      to={to}
      style={{
        display: 'flex', alignItems: 'center', gap: 12,
        padding: '12px 14px', borderRadius: 10,
        textDecoration: 'none',
        background: 'transparent',
        border: '1px solid transparent',
        transition: 'background 0.18s, border-color 0.18s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'var(--surface)';
        e.currentTarget.style.borderColor = 'var(--border-high)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'transparent';
        e.currentTarget.style.borderColor = 'transparent';
      }}
    >
      <Icon size={16} style={{ color: 'var(--accent)', flexShrink: 0 }} />
      <span style={{
        flex: 1, fontFamily: 'var(--font-sans)', fontSize: '0.95rem',
        color: 'var(--text-primary)',
      }}>{label}</span>
      <ArrowUpRight size={14} style={{ color: 'var(--text-muted)' }} />
    </Link>
  );
}

/* ── Kontakt Formular ─────────────────────────────────────────── */
function KontaktForm() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const data = new FormData(e.currentTarget);
    track(Events.KONTAKT_FORM_SUBMITTED, {
      source: 'kontakt-page',
      betreff: String(data.get('betreff') || 'allgemein'),
    });
    // Build mailto fallback so message reaches us even without backend
    const name = String(data.get('name') || '');
    const email = String(data.get('email') || '');
    const betreff = String(data.get('betreff') || 'Anfrage');
    const message = String(data.get('message') || '');
    const subject = encodeURIComponent(`[${betreff}] Kontaktanfrage von ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nE-Mail: ${email}\n\n${message}\n\n— gesendet über drvnautomatisations.com/kontakt`
    );
    setTimeout(() => {
      window.open(`mailto:${BRAND.email}?subject=${subject}&body=${body}`, '_self');
      setSubmitting(false);
      setSent(true);
    }, 500);
  }

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: easeOut }}
        className="card"
        style={{
          padding: 48, textAlign: 'center',
          borderColor: 'rgba(34, 197, 94, 0.3)',
          background: 'linear-gradient(180deg, rgba(34,197,94,0.05), transparent 60%), var(--surface)',
        }}
      >
        <CheckCircle size={56} style={{ color: 'var(--success)', margin: '0 auto 20px', display: 'block' }} />
        <h3 className="display-2" style={{ margin: 0, marginBottom: 12 }}>
          Gesendet!
        </h3>
        <p style={{
          fontFamily: 'var(--font-sans)', fontSize: '1rem',
          color: 'var(--text-secondary)', lineHeight: 1.55,
          maxWidth: '40ch', marginInline: 'auto',
        }}>
          Wir melden uns bald. Falls dein Mail-Programm nicht geöffnet hat, schreib direkt an{' '}
          <a href={`mailto:${BRAND.email}`} style={{ color: 'var(--accent)' }}>{BRAND.email}</a>.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="card"
      style={{ padding: 36 }}
    >
      <div style={{ display: 'grid', gap: 20 }}>
        <div className="contact-form-row">
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
          <span className="field-label">Betreff *</span>
          <select className="field" name="betreff" required defaultValue="">
            <option value="" disabled>Wähle einen Bereich</option>
            <option value="serveflow">ServeFlow / Restaurant-Software</option>
            <option value="web">Webprojekt / Website</option>
            <option value="ventures">Ventures / Individuelle Software</option>
            <option value="andere">Andere Anfrage</option>
          </select>
        </label>

        <label>
          <span className="field-label">Nachricht *</span>
          <textarea
            className="field"
            name="message"
            rows={5}
            required
            placeholder="Worum geht es? Was sollen wir wissen?"
            style={{ resize: 'vertical', minHeight: 140, fontFamily: 'var(--font-sans)' }}
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
          {submitting ? 'Wird gesendet…' : 'Nachricht senden'}
          {!submitting && <ArrowRight size={16} />}
        </button>
      </div>

      <p style={{
        marginTop: 20, marginBottom: 0,
        fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
        color: 'var(--text-muted)', textAlign: 'center', lineHeight: 1.5,
      }}>
        Mit dem Absenden stimmst du unserer <Link to="/datenschutz" style={{ color: 'var(--accent)' }}>Datenschutzerklärung</Link> zu.
      </p>

      <style>{`
        .contact-form-row { display: grid; gap: 20px; }
        @media (min-width: 600px) {
          .contact-form-row { grid-template-columns: 1fr 1fr; }
        }
      `}</style>
    </form>
  );
}
