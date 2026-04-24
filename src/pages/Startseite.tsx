import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Zap, Shield, Monitor, Cpu, Globe } from 'lucide-react';
import { BRANCHEN } from '../lib/constants';
import SEO from '../components/SEO';

/* ===== Ticker ===== */
const TICKER = [
  'DSGVO-konform', 'Server in Nürnberg', 'In 30 Min. live',
  'ServeFlow verfügbar', 'Keine Setup-Kosten', 'Webseiten ab 499 €',
  'Branchensoftware für KMU', 'Made in Germany',
];

function Ticker() {
  const items = [...TICKER, ...TICKER, ...TICKER];
  return (
    <div
      style={{
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        padding: '14px 0',
        overflow: 'hidden',
      }}
      className="mask-edges"
    >
      <div className="animate-marquee" style={{ gap: '56px' }}>
        {items.map((item, i) => (
          <span
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              letterSpacing: '0.1em',
              color: 'var(--color-text-muted)',
              whiteSpace: 'nowrap',
            }}
          >
            <span
              style={{
                width: '3px',
                height: '3px',
                borderRadius: '50%',
                background: 'var(--color-primary)',
                opacity: 0.6,
                flexShrink: 0,
              }}
            />
            {item.toUpperCase()}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ===== Stats ===== */
const STATS = [
  { zahl: '30 Min.', label: 'bis zum Go-Live' },
  { zahl: '100%', label: 'DSGVO-konform' },
  { zahl: '5+', label: 'Branchen geplant' },
  { zahl: '24h', label: 'Antwortgarantie' },
];

/* ===== Produkt Card ===== */
function ProduktCard({
  to, icon, name, tag, desc, highlight = false,
}: {
  to: string; icon: React.ReactNode; name: string;
  tag: string; desc: string; highlight?: boolean;
}) {
  return (
    <Link
      to={to}
      data-animate
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '28px',
        background: highlight ? 'rgba(59,130,246,0.04)' : 'var(--color-surface)',
        border: highlight
          ? '1px solid rgba(59,130,246,0.25)'
          : '1px solid rgba(255,255,255,0.05)',
        borderRadius: '6px',
        textDecoration: 'none',
        transition: 'border-color 0.2s, transform 0.2s',
        position: 'relative',
        overflow: 'hidden',
      }}
      className="card-lift"
    >
      {highlight && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.6), transparent)',
          }}
        />
      )}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div
          style={{
            width: '38px',
            height: '38px',
            background: highlight ? 'rgba(59,130,246,0.15)' : 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {icon}
        </div>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.62rem',
            letterSpacing: '0.1em',
            padding: '3px 8px',
            borderRadius: '2px',
            background: tag === 'Live' ? 'rgba(34,197,94,0.08)' : 'rgba(255,255,255,0.04)',
            color: tag === 'Live' ? '#22C55E' : 'var(--color-text-muted)',
            border: tag === 'Live' ? '1px solid rgba(34,197,94,0.2)' : '1px solid rgba(255,255,255,0.06)',
          }}
        >
          {tag === 'Live' ? 'LIVE' : tag.toUpperCase()}
        </span>
      </div>
      <h3
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1rem',
          fontWeight: 700,
          color: 'var(--color-text)',
          margin: '0 0 8px',
        }}
      >
        {name}
      </h3>
      <p
        style={{
          fontSize: '0.85rem',
          color: 'var(--color-text-muted)',
          lineHeight: 1.65,
          margin: '0 0 20px',
          flex: 1,
        }}
      >
        {desc}
      </p>
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.72rem',
          letterSpacing: '0.08em',
          color: 'var(--color-primary)',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
        }}
      >
        MEHR ERFAHREN <ArrowUpRight size={11} />
      </span>
    </Link>
  );
}

/* ===== Feature Row ===== */
function FeatureRow({ icon, titel, text, delay }: { icon: React.ReactNode; titel: string; text: string; delay: string }) {
  return (
    <div
      data-animate
      data-animate-delay={delay}
      style={{
        display: 'flex',
        gap: '20px',
        padding: '28px 0',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
      }}
    >
      <div
        style={{
          width: '40px',
          height: '40px',
          background: 'rgba(59,130,246,0.08)',
          border: '1px solid rgba(59,130,246,0.12)',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          marginTop: '2px',
        }}
      >
        {icon}
      </div>
      <div>
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1rem',
            fontWeight: 700,
            color: 'var(--color-text)',
            margin: '0 0 6px',
          }}
        >
          {titel}
        </h3>
        <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.65, margin: 0 }}>
          {text}
        </p>
      </div>
    </div>
  );
}

export default function Startseite() {
  return (
    <div>
      <SEO
        title="DRVN — Branchenspezifische SaaS-Lösungen für Deutschland"
        description="DRVN entwickelt digitale Plattformen für Gastronomie, Handwerk und mehr — DSGVO-konform, sofort einsetzbar, Server in Deutschland."
        path="/"
        keywords="SaaS Deutschland, Branchensoftware, Gastronomie Software, Handwerk Software, DSGVO-konform, digitale Transformation KMU"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'DRVN',
          url: 'https://drvnautomatisations.com',
        }}
      />

      {/* ===== HERO ===== */}
      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          overflow: 'hidden',
          paddingTop: '68px',
        }}
        className="blueprint-grid"
      >
        {/* Single blue glow */}
        <div
          className="glow-orb"
          style={{
            width: '700px',
            height: '700px',
            background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)',
            top: '-15%',
            right: '-10%',
          }}
        />
        <div
          className="glow-orb"
          style={{
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 70%)',
            bottom: '10%',
            left: '-5%',
          }}
        />

        {/* Diagonal accent line */}
        <svg
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            opacity: 0.06,
          }}
          preserveAspectRatio="none"
        >
          <line x1="65%" y1="0%" x2="100%" y2="100%" stroke="#3B82F6" strokeWidth="1" />
          <line x1="70%" y1="0%" x2="100%" y2="80%" stroke="#06B6D4" strokeWidth="0.5" />
        </svg>

        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '80px 48px 100px',
            width: '100%',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Status badge */}
          <div
            className="anim-0"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '2px',
              padding: '6px 14px',
              marginBottom: '40px',
            }}
          >
            <span
              className="animate-pulse"
              style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22C55E', flexShrink: 0 }}
            />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                letterSpacing: '0.12em',
                color: 'var(--color-text-muted)',
              }}
            >
              SERVEFLOW FÜR GASTRONOMIE IST JETZT LIVE
            </span>
          </div>

          {/* Massive headline */}
          <h1
            className="anim-1"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(52px, 8.5vw, 130px)',
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: '-0.04em',
              color: 'var(--color-text)',
              margin: '0 0 8px',
              maxWidth: '900px',
            }}
          >
            Software
          </h1>
          <h1
            className="anim-2"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(52px, 8.5vw, 130px)',
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: '-0.04em',
              margin: '0 0 40px',
              background: 'linear-gradient(125deg, #3B82F6 0%, #06B6D4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            die wirklich passt.
          </h1>

          {/* Animated underline */}
          <div
            className="anim-line"
            style={{
              height: '1px',
              background: 'linear-gradient(to right, rgba(59,130,246,0.6), rgba(6,182,212,0.3), transparent)',
              maxWidth: '600px',
              marginBottom: '40px',
            }}
          />

          {/* Subtext + CTAs */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '32px',
              maxWidth: '560px',
            }}
          >
            <p
              className="anim-3"
              style={{
                fontSize: '1.1rem',
                color: 'var(--color-text-muted)',
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              DRVN entwickelt branchenspezifische Lösungen für deutsche Unternehmen —
              DSGVO-konform, sofort einsetzbar, Server in Deutschland.
            </p>

            <div className="anim-4" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link to="/produkte/serveflow" className="btn-primary">
                Produkte entdecken <ArrowRight size={15} />
              </Link>
              <Link to="/kontakt" className="btn-ghost">
                Kontakt aufnehmen
              </Link>
            </div>
          </div>

          {/* Right side: floating tech cards */}
          <div
            className="anim-3"
            style={{
              position: 'absolute',
              right: '48px',
              top: '50%',
              transform: 'translateY(-50%)',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              width: '260px',
            }}
          >
            {[
              { icon: <Zap size={14} style={{ color: '#3B82F6' }} />, title: 'ServeFlow', sub: 'Restaurant Software', tag: 'LIVE', offset: 0 },
              { icon: <Monitor size={14} style={{ color: '#06B6D4' }} />, title: 'Webseiten', sub: 'Ab 499 € — sofort buchbar', tag: 'LIVE', offset: 24 },
              { icon: <Shield size={14} style={{ color: '#3B82F6' }} />, title: 'DSGVO by Default', sub: 'Server in Nürnberg, DE', tag: 'AKTIV', offset: 0 },
              { icon: <Globe size={14} style={{ color: '#06B6D4' }} />, title: '5+ Branchen', sub: 'Handwerk · Beauty · Fitness', tag: 'BALD', offset: 24 },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '4px',
                  padding: '12px 16px',
                  marginLeft: `${card.offset}px`,
                  backdropFilter: 'blur(8px)',
                }}
                className="card-lift"
              >
                <div
                  style={{
                    width: '30px',
                    height: '30px',
                    background: 'rgba(59,130,246,0.08)',
                    borderRadius: '3px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {card.icon}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text)', margin: 0 }}>
                    {card.title}
                  </p>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-text-muted)', margin: 0 }}>
                    {card.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TICKER ===== */}
      <Ticker />

      {/* ===== STATS ===== */}
      <section
        style={{
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          background: 'var(--color-surface)',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '64px 48px',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '0',
          }}
        >
          {STATS.map((s, i) => (
            <div
              key={s.zahl}
              data-animate
              data-animate-delay={String(i + 1)}
              style={{
                padding: '0 32px',
                borderRight: i < STATS.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                textAlign: i === 0 ? 'left' : 'center',
              }}
            >
              <p className="stat-number">{s.zahl}</p>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.1em',
                  color: 'var(--color-text-muted)',
                  margin: '8px 0 0',
                  textTransform: 'uppercase',
                }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== WARUM DRVN ===== */}
      <section style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '100px 48px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'start',
          }}
        >
          {/* Left: heading */}
          <div data-animate style={{ position: 'sticky', top: '100px' }}>
            <p className="mono-label" style={{ marginBottom: '16px' }}>Warum DRVN</p>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(32px, 4vw, 52px)',
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                color: 'var(--color-text)',
                margin: '0 0 24px',
              }}
            >
              Keine Einheitslösung.
              <br />
              <span
                style={{
                  background: 'linear-gradient(125deg, #3B82F6, #06B6D4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Software die passt.
              </span>
            </h2>
            <p
              style={{
                fontSize: '0.95rem',
                color: 'var(--color-text-muted)',
                lineHeight: 1.7,
                margin: '0 0 32px',
              }}
            >
              Jede Branche funktioniert anders. Deshalb bauen wir keine generischen Tools —
              sondern Plattformen, die auf Ihren Arbeitsalltag zugeschnitten sind.
            </p>
            <Link to="/leistungen" className="btn-ghost" style={{ display: 'inline-flex' }}>
              Alle Leistungen <ArrowRight size={14} />
            </Link>
          </div>

          {/* Right: feature list */}
          <div>
            <FeatureRow
              icon={<Shield size={18} style={{ color: '#3B82F6' }} />}
              titel="DSGVO-konform by Default"
              text="Datenschutz nach deutschem Standard — kein Aufpreis, kein Nachdenken. Alle Daten liegen auf Hetzner-Servern in Nürnberg."
              delay="1"
            />
            <FeatureRow
              icon={<Zap size={18} style={{ color: '#3B82F6' }} />}
              titel="In 30 Minuten live"
              text="Kein monatelanges Setup. Onboarding in 30 Minuten — Ihre Mitarbeiter können sofort starten."
              delay="2"
            />
            <FeatureRow
              icon={<Cpu size={18} style={{ color: '#3B82F6' }} />}
              titel="Prozesse automatisiert"
              text="Wiederkehrende Aufgaben übernimmt die Software. Sie konzentrieren sich auf Ihr Kerngeschäft."
              delay="3"
            />
            <FeatureRow
              icon={<Monitor size={18} style={{ color: '#3B82F6' }} />}
              titel="Alles aus einer Hand"
              text="Von der Unternehmenswebseite bis zur komplexen SaaS-Plattform — DRVN liefert vollständige Lösungen."
              delay="4"
            />
          </div>
        </div>
      </section>

      {/* ===== PRODUKTE ===== */}
      <section
        style={{
          background: 'var(--color-surface)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '100px 48px' }}>
          <div
            data-animate
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              marginBottom: '48px',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <div>
              <p className="mono-label" style={{ marginBottom: '12px' }}>Unsere Produkte</p>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(28px, 3.5vw, 44px)',
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  color: 'var(--color-text)',
                  margin: 0,
                  lineHeight: 1.1,
                }}
              >
                Eine Lösung pro Branche.
              </h2>
            </div>
            <Link to="/branchen" className="btn-ghost" style={{ display: 'inline-flex' }}>
              Alle Branchen <ArrowRight size={14} />
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '16px',
            }}
          >
            <ProduktCard
              to="/produkte/serveflow"
              icon={<Zap size={16} style={{ color: '#3B82F6' }} />}
              name="ServeFlow"
              tag="Live"
              desc="QR-Bestellung, Tischverwaltung und Reservierungen — das digitale Betriebssystem für Restaurants."
              highlight
            />
            <ProduktCard
              to="/leistungen/webseiten"
              icon={<Monitor size={16} style={{ color: '#06B6D4' }} />}
              name="Webseiten & Landingpages"
              tag="Live"
              desc="Professioneller Online-Auftritt — SEO-optimiert, modern, ab 499 € einmalig."
            />
            {BRANCHEN.slice(1, 4).map((b) => (
              <div
                key={b.title}
                data-animate
                style={{
                  padding: '28px',
                  background: 'rgba(255,255,255,0.01)',
                  border: '1px solid rgba(255,255,255,0.04)',
                  borderRadius: '6px',
                  opacity: 0.45,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '20px',
                  }}
                >
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.05)',
                      borderRadius: '4px',
                    }}
                  />
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.62rem',
                      letterSpacing: '0.1em',
                      padding: '3px 8px',
                      borderRadius: '2px',
                      background: 'rgba(255,255,255,0.03)',
                      color: 'var(--color-text-muted)',
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    {b.status.toUpperCase()}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'var(--color-text)',
                    margin: '0 0 8px',
                  }}
                >
                  {b.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.65, margin: 0 }}>
                  {b.beschreibung}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '120px 48px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center',
          }}
        >
          <div data-animate>
            <p className="mono-label" style={{ marginBottom: '16px' }}>Jetzt starten</p>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(32px, 4vw, 56px)',
                fontWeight: 800,
                lineHeight: 1.0,
                letterSpacing: '-0.04em',
                color: 'var(--color-text)',
                margin: '0 0 24px',
              }}
            >
              Ihr Betrieb.
              <br />
              <span
                style={{
                  background: 'linear-gradient(125deg, #3B82F6, #06B6D4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Digital. In 30 Min.
              </span>
            </h2>
            <p
              style={{
                fontSize: '0.95rem',
                color: 'var(--color-text-muted)',
                lineHeight: 1.7,
                margin: '0 0 36px',
              }}
            >
              Erzählen Sie uns von Ihrem Unternehmen — wir melden uns innerhalb von 24 Stunden
              mit einem konkreten Vorschlag.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link to="/kontakt" className="btn-primary">
                Projekt anfragen <ArrowRight size={15} />
              </Link>
              <Link to="/produkte/serveflow" className="btn-ghost">
                ServeFlow ansehen
              </Link>
            </div>
          </div>

          {/* Right: mini checklist */}
          <div data-animate data-animate-delay="2">
            {[
              'Persönliche Beratung — kostenlos und unverbindlich',
              'Konkretes Angebot innerhalb von 24 Stunden',
              'Kein Setup-Aufwand — wir übernehmen alles',
              'DSGVO-konform von Anfang an',
              'Aktiver Support nach Go-Live inklusive',
            ].map((punkt, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '14px',
                  padding: '16px 0',
                  borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    color: 'var(--color-primary)',
                    marginTop: '2px',
                    flexShrink: 0,
                    letterSpacing: '0.05em',
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--color-text-muted)',
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  {punkt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
