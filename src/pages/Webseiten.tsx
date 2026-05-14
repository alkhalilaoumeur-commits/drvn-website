import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, ArrowUpRight,
  Layout, Globe, ShoppingBag, Database, Shield, Wrench,
} from 'lucide-react';
import SEO from '../components/SEO';
import { CtaSection } from './Startseite';
import { WEB_SERVICES, WEB_PROCESS, WEB_STACK } from '../lib/constants';
import { fadeUp, stagger, staggerFast, wordReveal, viewport, easeOut } from '../lib/animations';

const ICONS: Record<string, typeof Layout> = {
  Layout, Globe, ShoppingBag, Database, Shield, Wrench,
};

const HERO_LINE_1 = 'Websites die'.split(' ');
const HERO_LINE_2 = 'Ergebnisse liefern.'.split(' ');

export default function WebPage() {
  return (
    <>
      <SEO
        title="Webentwicklung Stuttgart — Websites & Web-Apps | drvn"
        description="Maßgeschneiderte Websites und Web-Apps für Unternehmen im DACH-Raum. React, TypeScript, modernes Tooling. DSGVO-konform, schnell, sauberer Code."
        path="/web"
        keywords="Webentwicklung Stuttgart, Webdesign, Web-App, Landing Page, Corporate Website, E-Commerce, SaaS Entwicklung, React Stuttgart"
        breadcrumbs={[
          { name: 'Start', path: '/' },
          { name: 'Web', path: '/web' },
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
            <span className="badge badge-accent">WEBENTWICKLUNG</span>
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
            Maßgeschneiderte Websites und Web-Apps für Unternehmen im DACH-Raum. Konzept, Design, Code — alles aus einer Hand.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.65 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}
          >
            <Link to="/kontakt" className="btn-primary">
              Projekt besprechen <ArrowRight size={16} />
            </Link>
            <a href="#services" className="btn-outline">
              Leistungen ansehen <ArrowUpRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          6 SERVICES (2x3 Grid)
          ═══════════════════════════════════════════════════════════ */}
      <section
        id="services"
        style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}
        className="section-y"
      >
        <div className="container-x">
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            style={{ maxWidth: '52rem', marginBottom: 56 }}
          >
            <span className="eyebrow" style={{ marginBottom: 18 }}>Services</span>
            <h2 className="display-1" style={{ margin: '14px 0 0' }}>
              Was wir bauen.
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            style={{
              display: 'grid', gap: 16,
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            }}
          >
            {WEB_SERVICES.map((s) => {
              const Icon = ICONS[s.icon] ?? Layout;
              return (
                <motion.article
                  key={s.title}
                  variants={fadeUp}
                  whileHover={{ y: -3 }}
                  className="card"
                  style={{ padding: 28 }}
                >
                  <div style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: 'var(--surface-high)',
                    border: '1px solid var(--border-high)',
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 22,
                  }}>
                    <Icon size={18} style={{ color: 'var(--accent)' }} />
                  </div>
                  <h3 className="display-3" style={{ margin: 0, marginBottom: 10, fontSize: '1.15rem' }}>
                    {s.title}
                  </h3>
                  <p style={{
                    fontFamily: 'var(--font-sans)', fontSize: '0.95rem',
                    color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0,
                  }}>{s.text}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          4-STEP PROZESS
          ═══════════════════════════════════════════════════════════ */}
      <section style={{ borderTop: '1px solid var(--border)' }} className="section-y">
        <div className="container-x">
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            style={{ maxWidth: '52rem', marginBottom: 72 }}
          >
            <span className="eyebrow" style={{ marginBottom: 18 }}>Prozess</span>
            <h2 className="display-1" style={{ margin: '14px 0 18px' }}>
              Vier Schritte. <span style={{ color: 'var(--accent)' }}>Kein Bullshit.</span>
            </h2>
            <p style={{
              fontFamily: 'var(--font-sans)', fontSize: '1.1rem',
              color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0, maxWidth: '46ch',
            }}>
              Klar definiert, transparent, mit wöchentlichem Fortschritt den du siehst.
            </p>
          </motion.div>

          <div className="process-grid" style={{
            display: 'grid', gap: 32, position: 'relative',
          }}>
            {/* Connecting line */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute', top: 36, left: 0, right: 0,
                height: 1,
                background: 'linear-gradient(90deg, transparent, var(--border-high) 12%, var(--border-high) 88%, transparent)',
                display: 'none',
              }}
              className="process-line"
            />

            {WEB_PROCESS.map((p, i) => (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, ease: easeOut, delay: i * 0.08 }}
                style={{ position: 'relative' }}
              >
                <div style={{
                  width: 72, height: 72, borderRadius: 999,
                  background: 'var(--bg)',
                  border: '1px solid var(--border-high)',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 24, position: 'relative', zIndex: 1,
                  fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800,
                  color: 'var(--accent)',
                  letterSpacing: '-0.02em',
                }}>
                  {p.num}
                </div>
                <h3 className="display-3" style={{ margin: 0, marginBottom: 10, fontSize: '1.4rem' }}>
                  {p.title}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-sans)', fontSize: '0.98rem',
                  color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0,
                }}>{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <style>{`
          @media (min-width: 900px) {
            .process-grid {
              grid-template-columns: repeat(4, 1fr) !important;
              gap: 40px !important;
            }
            .process-line {
              display: block !important;
            }
          }
        `}</style>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          TECH STACK
          ═══════════════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }} className="section-y">
        <div className="container-x">
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            style={{ maxWidth: '52rem', marginBottom: 56 }}
          >
            <span className="eyebrow" style={{ marginBottom: 18 }}>Tech Stack</span>
            <h2 className="display-1" style={{ margin: '14px 0 18px' }}>
              Moderner Stack.<br />
              <span style={{ color: 'var(--accent)' }}>Wartbarer Code.</span>
            </h2>
            <p style={{
              fontFamily: 'var(--font-sans)', fontSize: '1.1rem',
              color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0, maxWidth: '46ch',
            }}>
              Wir nutzen bewährte, langfristig wartbare Technologien — keine Bleeding-Edge-Experimente auf deinen Kosten.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}
          >
            {WEB_STACK.map((tech) => (
              <motion.span
                key={tech}
                variants={fadeUp}
                whileHover={{ y: -2, borderColor: 'var(--accent)' }}
                style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.92rem',
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                  background: 'var(--bg)',
                  border: '1px solid var(--border-high)',
                  padding: '10px 18px',
                  borderRadius: 999,
                  transition: 'border-color 0.2s',
                  cursor: 'default',
                }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
