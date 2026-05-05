import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, MapPin, Zap, Target, Heart, Code2, ExternalLink } from 'lucide-react';
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

const WERTE = [
  {
    icon: <Target size={22} strokeWidth={1.6} />,
    title: 'Ehrlichkeit',
    text: 'Kein Angebotsmarathon, kein Kleingedrucktes. Wir sagen, was es kostet — und halten, was wir versprechen.',
  },
  {
    icon: <Zap size={22} strokeWidth={1.6} />,
    title: 'Einfachheit',
    text: 'Das beste System ist das, das keiner erklären muss. Jedes Produkt muss in 30 Minuten laufen — sonst ist es zu kompliziert.',
  },
  {
    icon: <Heart size={22} strokeWidth={1.6} />,
    title: 'Nähe',
    text: 'Wir sind nach dem Launch genauso erreichbar wie davor. Fester Ansprechpartner, Antwort in Stunden, nicht Tagen.',
  },
];

const ZAHLEN = [
  { n: '2024', label: 'Gegründet' },
  { n: 'Stuttgart', label: 'Heimat' },
  { n: '1', label: 'Produkt live' },
  { n: '6+', label: 'Branchen geplant' },
];

export default function UeberUns() {
  return (
    <div style={{ position: 'relative', background: 'transparent' }}>
      <SEO
        title="Über DRVN — Software aus Stuttgart | DRVN"
        description="DRVN ist ein Software-Unternehmen aus Stuttgart, gegründet von Ilias Al-Khalil Aoumeur. Wir bauen branchenspezifische SaaS-Lösungen für Gastronomie, Handwerk und Service-Betriebe in Deutschland."
        path="/ueber-uns"
        keywords="DRVN Stuttgart, Software Unternehmen Stuttgart, Ilias Al-Khalil Aoumeur, SaaS Stuttgart, Startup Stuttgart, Softwareentwicklung Stuttgart"
        breadcrumbs={[
          { name: 'Startseite', path: '/' },
          { name: 'Über uns', path: '/ueber-uns' },
        ]}
      />

      {/* ── HERO ── */}
      <section style={{ padding: '160px 32px 100px', maxWidth: '1240px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '32px', padding: '5px 14px 5px 10px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '100px' }}>
            <MapPin size={12} style={{ color: '#3B82F6' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.03em' }}>
              Stuttgart, Deutschland
            </span>
          </div>

          <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(44px, 6vw, 88px)', fontWeight: 700, lineHeight: 1.0, letterSpacing: '-0.035em', margin: '0 0 28px', color: '#FAFAFA', maxWidth: '900px' }}>
            Ein Gründer.<br />
            Eine Mission.{' '}
            <span style={{ background: 'linear-gradient(135deg, #3B82F6, #06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Software, die wirklich funktioniert.
            </span>
          </h1>

          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.15rem', lineHeight: 1.65, color: 'rgba(255,255,255,0.55)', maxWidth: '620px', margin: 0 }}>
            DRVN ist kein Konzern. Kein VC-gebackenes Startup. Kein anonymes SaaS aus den USA.
            Wir sind ein junges Unternehmen aus Stuttgart — und wir bauen Software, die Betriebe wirklich versteht.
          </p>
        </motion.div>
      </section>

      {/* ── GRÜNDER ── */}
      <Section style={{ padding: '0 32px 120px', maxWidth: '1240px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', alignItems: 'start' }}>
          {/* Portrait */}
          <motion.div variants={fadeUp} style={{ position: 'relative' }}>
            <div style={{
              width: '100%',
              aspectRatio: '4/5',
              borderRadius: '24px',
              background: 'linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(6,182,212,0.08) 100%)',
              border: '1px solid rgba(59,130,246,0.2)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              position: 'relative',
            }}>
              {/* Monogram placeholder */}
              <div style={{
                width: '120px', height: '120px', borderRadius: '50%',
                background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-sans)', fontSize: '2.5rem', fontWeight: 700, color: '#fff',
                letterSpacing: '-0.02em', marginBottom: '24px',
              }}>
                IA
              </div>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', fontWeight: 600, color: '#FAFAFA', margin: '0 0 4px', letterSpacing: '-0.02em' }}>
                Ilias Al-Khalil Aoumeur
              </p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.06em', textTransform: 'uppercase', margin: 0 }}>
                Gründer & CEO · Stuttgart
              </p>

              {/* Ambient glow */}
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.12) 0%, transparent 60%)', pointerEvents: 'none' }} />
            </div>

            {/* Badge */}
            <div style={{
              position: 'absolute', bottom: '-16px', right: '-16px',
              padding: '12px 20px',
              background: 'rgba(15,23,36,0.95)',
              border: '1px solid rgba(59,130,246,0.3)',
              borderRadius: '14px',
              backdropFilter: 'blur(12px)',
            }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.06em', textTransform: 'uppercase', margin: '0 0 4px' }}>Studiert an</p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 600, color: '#FAFAFA', margin: 0, letterSpacing: '-0.01em' }}>Uni Hohenheim</p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#3B82F6', margin: '2px 0 0', letterSpacing: '0.03em' }}>Wirtschaftsinformatik</p>
            </div>
          </motion.div>

          {/* Text */}
          <div>
            <motion.p variants={fadeUp} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#3B82F6', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 20px' }}>
              Die Geschichte
            </motion.p>

            <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(28px, 3vw, 44px)', fontWeight: 700, color: '#FAFAFA', letterSpacing: '-0.025em', lineHeight: 1.1, margin: '0 0 32px' }}>
              Warum ich DRVN gegründet habe.
            </motion.h2>

            {[
              'Ich habe gesehen, wie Restaurants und Handwerksbetriebe mit Stift, Papier und Excel kämpfen — während es längst bessere Lösungen geben müsste.',
              'Das Problem: Die meisten Softwareanbieter bauen ein Tool für alle. Zu generisch, zu teuer, zu kompliziert. Ein Restaurant braucht andere Abläufe als ein Salon. Beide brauchen andere Lösungen als ein Handwerksbetrieb.',
              'Also habe ich angefangen, selbst zu bauen. ServeFlow war das erste Produkt — ein komplettes Betriebssystem für Restaurants, das in 30 Minuten läuft und nicht mehr kostet als ein Mittagessen pro Tag.',
              'DRVN steht für das Versprechen, das ich jedem Kunden gebe: Software, die Ihre Branche wirklich versteht. Kein Kompromiss, kein Feature-Chaos, kein US-Cloud-Datenschutzproblem.',
            ].map((text, i) => (
              <motion.p key={i} variants={fadeUp} style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.62)', margin: '0 0 18px' }}>
                {text}
              </motion.p>
            ))}

            <motion.div variants={fadeUp} style={{ display: 'flex', gap: '12px', marginTop: '36px', flexWrap: 'wrap' }}>
              <Link to="/kontakt" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '11px 22px',
                background: 'linear-gradient(135deg, #3B82F6, #2563EB)',
                borderRadius: '10px', textDecoration: 'none',
                fontFamily: 'var(--font-sans)', fontSize: '0.88rem', fontWeight: 600, color: '#fff',
                boxShadow: '0 8px 24px rgba(59,130,246,0.25)',
              }}>
                Direkt schreiben <ArrowRight size={14} />
              </Link>
              <a href="mailto:kontakt@drvnautomatisations.com" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '11px 22px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '10px', textDecoration: 'none',
                fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'rgba(255,255,255,0.7)',
              }}>
                <ExternalLink size={13} />
                kontakt@drvnautomatisations.com
              </a>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* ── MISSION STATEMENT ── */}
      <Section style={{ padding: '0 32px 120px' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <motion.div variants={fadeUp} style={{
            padding: '80px 64px',
            background: 'linear-gradient(135deg, rgba(59,130,246,0.07) 0%, rgba(6,182,212,0.04) 100%)',
            border: '1px solid rgba(59,130,246,0.15)',
            borderRadius: '28px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', top: '-40%', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '400px', background: 'radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#3B82F6', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 24px', position: 'relative' }}>
              Unsere Mission
            </p>
            <blockquote style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(24px, 3.5vw, 48px)', fontWeight: 700, color: '#FAFAFA', letterSpacing: '-0.03em', lineHeight: 1.15, margin: '0 auto', maxWidth: '820px', position: 'relative' }}>
              "Jeder Betrieb in Deutschland verdient Software, die wirklich für ihn gebaut ist —
              nicht für einen anonymen Durchschnittskunden."
            </blockquote>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.04em', margin: '28px 0 0', position: 'relative' }}>
              — Ilias Al-Khalil Aoumeur, Gründer DRVN
            </p>
          </motion.div>
        </div>
      </Section>

      {/* ── ZAHLEN ── */}
      <Section style={{ padding: '0 32px 120px' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
            {ZAHLEN.map((z) => (
              <motion.div key={z.label} variants={fadeUp} style={{
                padding: '40px 28px',
                background: '#111113',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '16px',
                textAlign: 'center',
              }}>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em', margin: '0 0 8px', background: 'linear-gradient(135deg, #3B82F6, #06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {z.n}
                </p>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.08em', textTransform: 'uppercase', margin: 0 }}>
                  {z.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── WERTE ── */}
      <Section style={{ padding: '0 32px 120px' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <motion.div variants={fadeUp} style={{ marginBottom: '56px' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#3B82F6', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 16px' }}>
              Wofür wir stehen
            </p>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 700, color: '#FAFAFA', letterSpacing: '-0.03em', lineHeight: 1.1, margin: 0, maxWidth: '600px' }}>
              Drei Dinge,<br />
              <span style={{ color: 'rgba(255,255,255,0.35)' }}>die uns antreiben.</span>
            </h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            {WERTE.map((w, i) => (
              <motion.div key={w.title} variants={fadeUp} style={{
                padding: '40px 32px',
                background: '#111113',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '20px',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3B82F6', marginBottom: '24px' }}>
                  {w.icon}
                </div>
                <div style={{ position: 'absolute', top: '20px', right: '24px', fontFamily: 'var(--font-mono)', fontSize: '4rem', fontWeight: 700, color: 'rgba(255,255,255,0.03)', lineHeight: 1, userSelect: 'none' }}>
                  0{i + 1}
                </div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.25rem', fontWeight: 600, color: '#FAFAFA', letterSpacing: '-0.02em', margin: '0 0 12px' }}>
                  {w.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', lineHeight: 1.65, color: 'rgba(255,255,255,0.55)', margin: 0 }}>
                  {w.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── TECH-STACK ── */}
      <Section style={{ padding: '0 32px 120px' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <motion.div variants={fadeUp} style={{
            padding: '48px 56px',
            background: '#111113',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '20px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '48px',
            alignItems: 'center',
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <Code2 size={18} style={{ color: '#3B82F6' }} />
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#3B82F6', letterSpacing: '0.08em', textTransform: 'uppercase', margin: 0 }}>
                  Tech-Stack
                </p>
              </div>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.6rem', fontWeight: 700, color: '#FAFAFA', letterSpacing: '-0.025em', margin: '0 0 16px', lineHeight: 1.2 }}>
                Gebaut auf dem, was wirklich skaliert.
              </h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', lineHeight: 1.65, color: 'rgba(255,255,255,0.55)', margin: 0 }}>
                Kein WordPress, kein Low-Code-Baukastensystem. Jedes Produkt ist individuell gebaut — sauber, schnell und wartbar.
                TypeScript durch die gesamte Stack, PostgreSQL für Datenhaltung, React für die Frontend-Erfahrung.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
              {['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind', 'Hetzner Cloud'].map((tech) => (
                <div key={tech} style={{
                  padding: '12px 14px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '8px',
                  textAlign: 'center',
                }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'rgba(255,255,255,0.65)', letterSpacing: '0.02em' }}>
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ── CTA ── */}
      <Section style={{ padding: '0 32px 160px' }}>
        <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center' }}>
          <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 700, color: '#FAFAFA', letterSpacing: '-0.03em', lineHeight: 1.1, margin: '0 0 20px' }}>
            Gemeinsam mehr erreichen.
          </motion.h2>
          <motion.p variants={fadeUp} style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', lineHeight: 1.65, color: 'rgba(255,255,255,0.55)', margin: '0 auto 40px', maxWidth: '500px' }}>
            Ob Restaurant, Handwerksbetrieb oder Custom-Projekt — wir hören zu und machen ein konkretes Angebot.
          </motion.p>
          <motion.div variants={fadeUp} style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <Link to="/kontakt" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '14px 28px',
              background: 'linear-gradient(135deg, #3B82F6, #2563EB)',
              borderRadius: '12px', textDecoration: 'none',
              fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 600, color: '#fff',
              boxShadow: '0 10px 30px rgba(59,130,246,0.3)',
            }}>
              Gespräch vereinbaren <ArrowRight size={16} />
            </Link>
            <Link to="/produkte/serveflow" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '14px 28px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '12px', textDecoration: 'none',
              fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 500, color: 'rgba(255,255,255,0.75)',
            }}>
              ServeFlow ansehen
            </Link>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
