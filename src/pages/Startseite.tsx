import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ArrowUpRight, Shield, Zap, Code2, Headphones, Check,
  MessageCircle, Sparkles, Rocket, Minus, Plus, X as XIcon,
  Server, Pizza, Coffee, Salad, Wine,
} from 'lucide-react';
import {
  motion,
  AnimatePresence,
  useInView,
  useScroll,
  useTransform,
  type Variants,
} from 'framer-motion';
import SEO from '../components/SEO';

/* ============================================
   ANIMATION VARIANTS
============================================ */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

/* ============================================
   SECTION WRAPPER
============================================ */
function Section({ children, style = {}, id }: { children: React.ReactNode; style?: React.CSSProperties; id?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.section
      ref={ref}
      id={id}
      variants={stagger}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      style={style}
    >
      {children}
    </motion.section>
  );
}

/* ============================================
   DASHBOARD MOCKUP
============================================ */
function DashboardMockup() {
  return (
    <div className="dash-window" style={{ width: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '11px 14px', borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
        <div style={{ display: 'flex', gap: '6px' }}>
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', padding: '3px 12px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '6px' }}>
            serveflow.drvn.de/dashboard
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', minHeight: '480px' }}>
        <div style={{ borderRight: '1px solid rgba(255,255,255,0.06)', padding: '18px 10px', background: 'rgba(255,255,255,0.015)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', padding: '0 6px' }}>
            <div style={{ width: '22px', height: '22px', borderRadius: '6px', background: 'linear-gradient(135deg, #3B82F6, #06B6D4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Zap size={11} style={{ color: '#fff' }} />
            </div>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', fontWeight: 600, color: '#FAFAFA' }}>ServeFlow</span>
          </div>

          {[
            { label: 'Dashboard', active: true },
            { label: 'Bestellungen', badge: '12' },
            { label: 'Tische' },
            { label: 'Reservierungen', badge: '4' },
            { label: 'Personal' },
            { label: 'Berichte' },
            { label: 'Einstellungen' },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '6px 9px', borderRadius: '5px', marginBottom: '2px',
                background: item.active ? 'rgba(59,130,246,0.1)' : 'transparent',
                border: item.active ? '1px solid rgba(59,130,246,0.2)' : '1px solid transparent',
              }}
            >
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: item.active ? '#3B82F6' : 'rgba(255,255,255,0.6)', fontWeight: item.active ? 500 : 400 }}>
                {item.label}
              </span>
              {item.badge && (
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.7)', padding: '1px 5px', borderRadius: '3px' }}>
                  {item.badge}
                </span>
              )}
            </div>
          ))}
        </div>

        <div style={{ padding: '22px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
            <div>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.05em', textTransform: 'uppercase', margin: '0 0 4px' }}>Heute · 25. April</p>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', fontWeight: 600, color: '#FAFAFA', margin: 0, letterSpacing: '-0.02em' }}>Dashboard</h3>
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', padding: '4px 9px', background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.25)', color: '#22C55E', borderRadius: '5px', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
              <span className="pulse-dot" style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#22C55E' }} />
              Live
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginBottom: '18px' }}>
            {[
              { label: 'Umsatz heute', value: '€ 2.847', delta: '+12%', positive: true, spark: [4, 7, 5, 8, 6, 9, 11] },
              { label: 'Offene Tische', value: '8 / 24', delta: '33%', positive: null, spark: [3, 4, 6, 5, 7, 6, 8] },
              { label: 'Ø Bonwert', value: '€ 34,20', delta: '+4,80', positive: true, spark: [5, 6, 5, 7, 6, 8, 9] },
            ].map((m) => (
              <div key={m.label} style={{ padding: '12px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px' }}>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.03em', margin: '0 0 6px', textTransform: 'uppercase' }}>
                  {m.label}
                </p>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', fontWeight: 600, color: '#FAFAFA', letterSpacing: '-0.02em' }}>{m.value}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: m.positive === true ? '#22C55E' : 'rgba(255,255,255,0.5)' }}>
                    {m.delta}
                  </span>
                </div>
                <svg viewBox="0 0 70 18" style={{ width: '100%', height: '18px' }}>
                  <polyline
                    points={m.spark.map((v, i) => `${i * 11},${18 - v * 1.3}`).join(' ')}
                    fill="none"
                    stroke={m.positive === true ? '#22C55E' : '#3B82F6'}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.8"
                  />
                </svg>
              </div>
            ))}
          </div>

          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px', overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '50px 1fr 80px 80px 70px', padding: '9px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.015)' }}>
              {['Tisch', 'Bestellung', 'Zeit', 'Betrag', 'Status'].map((h) => (
                <span key={h} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 500 }}>
                  {h}
                </span>
              ))}
            </div>
            {[
              { tisch: '4', items: '2× Pizza, 1× Pasta', zeit: '19:24', betrag: '€ 47,50', status: 'Serviert', color: '#22C55E' },
              { tisch: '12', items: '1× Burger, 2× Cola', zeit: '19:18', betrag: '€ 32,80', status: 'Küche', color: '#F59E0B' },
              { tisch: '7', items: '3× Menü, 1× Wein', zeit: '19:11', betrag: '€ 89,40', status: 'Bezahlt', color: 'rgba(255,255,255,0.5)' },
              { tisch: '2', items: '1× Salat, 1× Wasser', zeit: '19:02', betrag: '€ 14,20', status: 'Bezahlt', color: 'rgba(255,255,255,0.5)' },
            ].map((row, i) => (
              <div
                key={i}
                style={{ display: 'grid', gridTemplateColumns: '50px 1fr 80px 80px 70px', padding: '10px 14px', borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.04)' : 'none', alignItems: 'center' }}
              >
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: '#3B82F6', fontWeight: 500 }}>#{row.tisch}</span>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.74rem', color: 'rgba(255,255,255,0.78)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{row.items}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)' }}>{row.zeit}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>{row.betrag}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.64rem', color: row.color, letterSpacing: '0.02em' }}>{row.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================
   PHONE MOCKUP — QR Bestellung (SVG Icons, no emojis)
============================================ */
function PhoneMockup() {
  const items = [
    { name: 'Margherita', price: '9,50', icon: <Pizza size={18} strokeWidth={1.5} style={{ color: '#F59E0B' }} />, qty: 2, active: true },
    { name: 'Carbonara', price: '12,00', icon: <Pizza size={18} strokeWidth={1.5} style={{ color: 'rgba(255,255,255,0.5)' }} /> },
    { name: 'Tiramisu', price: '6,50', icon: <Coffee size={18} strokeWidth={1.5} style={{ color: 'rgba(255,255,255,0.5)' }} /> },
    { name: 'Limonade', price: '3,80', icon: <Wine size={18} strokeWidth={1.5} style={{ color: 'rgba(255,255,255,0.5)' }} /> },
    { name: 'Caprese', price: '8,20', icon: <Salad size={18} strokeWidth={1.5} style={{ color: 'rgba(255,255,255,0.5)' }} /> },
  ];

  return (
    <div
      style={{
        width: '260px', height: '520px', borderRadius: '36px',
        background: 'linear-gradient(180deg, #1B1B20 0%, #0F0F12 100%)',
        border: '1px solid rgba(255,255,255,0.1)',
        padding: '10px',
        boxShadow: '0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.03) inset, 0 0 80px rgba(59,130,246,0.12)',
        position: 'relative',
      }}
    >
      <div style={{ position: 'absolute', top: '14px', left: '50%', transform: 'translateX(-50%)', width: '90px', height: '22px', background: '#0A0A0B', borderRadius: '100px', zIndex: 2 }} />

      <div style={{ width: '100%', height: '100%', background: '#0A0A0B', borderRadius: '28px', overflow: 'hidden', position: 'relative', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '18px 24px 8px', display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '0.64rem', color: '#FAFAFA', fontWeight: 600 }}>
          <span>19:24</span>
          <span style={{ width: '14px', height: '9px', background: '#FAFAFA', borderRadius: '2px', opacity: 0.8 }} />
        </div>

        <div style={{ padding: '16px 18px 12px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.56rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.08em', textTransform: 'uppercase', margin: '0 0 3px' }}>Tisch 4 · ServeFlow</p>
          <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 600, color: '#FAFAFA', margin: 0, letterSpacing: '-0.02em' }}>Ristorante Bella</h4>
        </div>

        <div style={{ flex: 1, padding: '12px', overflowY: 'hidden' }}>
          {items.slice(0, 4).map((item, i) => (
            <div
              key={item.name}
              style={{
                display: 'flex', alignItems: 'center', gap: '12px', padding: '10px',
                background: i === 0 ? 'rgba(59,130,246,0.08)' : 'rgba(255,255,255,0.02)',
                border: i === 0 ? '1px solid rgba(59,130,246,0.25)' : '1px solid rgba(255,255,255,0.04)',
                borderRadius: '10px', marginBottom: '7px',
              }}
            >
              <div style={{ width: '36px', height: '36px', background: i === 0 ? 'rgba(59,130,246,0.15)' : 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {item.icon}
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', fontWeight: 500, color: '#FAFAFA', margin: 0 }}>{item.name}</p>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'rgba(255,255,255,0.5)', margin: 0 }}>€ {item.price}</p>
              </div>
              {item.active ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(59,130,246,0.15)', padding: '3px 6px', borderRadius: '5px' }}>
                  <button aria-label="Anzahl reduzieren" style={{ width: '18px', height: '18px', borderRadius: '4px', background: 'rgba(255,255,255,0.06)', border: 'none', color: '#FAFAFA', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Minus size={10} strokeWidth={2.5} />
                  </button>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#3B82F6', fontWeight: 600, minWidth: '10px', textAlign: 'center' }}>{item.qty}</span>
                  <button aria-label="Anzahl erhöhen" style={{ width: '18px', height: '18px', borderRadius: '4px', background: '#3B82F6', border: 'none', color: '#fff', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Plus size={10} strokeWidth={2.5} />
                  </button>
                </div>
              ) : (
                <button aria-label="Hinzufügen" style={{ width: '24px', height: '24px', borderRadius: '6px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.8)', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Plus size={12} strokeWidth={2} />
                </button>
              )}
            </div>
          ))}
        </div>

        <div style={{ padding: '12px', borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.015)' }}>
          <button style={{ width: '100%', padding: '12px 14px', background: '#FAFAFA', color: '#0A0A0B', border: 'none', borderRadius: '10px', fontFamily: 'var(--font-sans)', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span>Jetzt bestellen</span>
            <span style={{ fontFamily: 'var(--font-mono)' }}>€ 19,00</span>
          </button>
        </div>
      </div>
    </div>
  );
}

/* ============================================
   BENTO VISUALS
============================================ */
function DSGVOVisual() {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      {/* Shield with rings */}
      <div style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '1px solid rgba(59,130,246,0.15)', width: '200px', height: '200px', top: '-100px', left: '-100px' }} />
        <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '1px solid rgba(59,130,246,0.1)', width: '280px', height: '280px', top: '-140px', left: '-140px' }} />
        <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '1px solid rgba(59,130,246,0.06)', width: '360px', height: '360px', top: '-180px', left: '-180px' }} />
        <div style={{
          width: '80px', height: '80px', borderRadius: '18px',
          background: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(6,182,212,0.12))',
          border: '1px solid rgba(59,130,246,0.35)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          position: 'relative', zIndex: 1,
        }}>
          <Shield size={34} strokeWidth={1.4} style={{ color: '#3B82F6' }} />
        </div>
      </div>
      {/* Floating labels */}
      {[
        { text: 'AES-256', top: '18%', left: '12%' },
        { text: 'Nürnberg, DE', top: '22%', right: '14%' },
        { text: 'ISO 27001', bottom: '24%', left: '16%' },
        { text: 'TLS 1.3', bottom: '20%', right: '18%' },
      ].map((l, i) => (
        <div
          key={l.text}
          style={{
            position: 'absolute',
            top: l.top,
            left: (l as { left?: string }).left,
            right: (l as { right?: string }).right,
            bottom: (l as { bottom?: string }).bottom,
            fontFamily: 'var(--font-mono)',
            fontSize: '0.66rem',
            padding: '4px 10px',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '6px',
            color: 'rgba(255,255,255,0.7)',
            letterSpacing: '0.02em',
            animation: `floatLabel ${6 + i}s ease-in-out infinite`,
            animationDelay: `${i * 0.8}s`,
          }}
        >
          {l.text}
        </div>
      ))}
    </div>
  );
}

function SpeedVisual() {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '24px' }}>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(56px, 6vw, 96px)', fontWeight: 700, letterSpacing: '-0.04em', color: '#FAFAFA', lineHeight: 1 }}>
        30<span style={{ fontSize: '0.4em', color: '#3B82F6', marginLeft: '6px' }}>min.</span>
      </div>
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '12px 0 0' }}>
        Ø GO-LIVE-ZEIT
      </p>
      {/* Progress bar */}
      <div style={{ width: '100%', maxWidth: '200px', height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px', marginTop: '20px', overflow: 'hidden' }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ height: '100%', background: 'linear-gradient(90deg, #3B82F6, #06B6D4)', borderRadius: '2px' }}
        />
      </div>
    </div>
  );
}

function ServerVisual() {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
      <div style={{ position: 'relative', width: '100%', maxWidth: '240px' }}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              padding: '12px 16px',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '8px',
              marginBottom: '8px',
            }}
          >
            <Server size={14} strokeWidth={1.6} style={{ color: '#3B82F6' }} />
            <div style={{ flex: 1 }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'rgba(255,255,255,0.7)', margin: 0 }}>
                node-0{i + 1}.drvn.de
              </p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'rgba(255,255,255,0.35)', margin: 0 }}>
                Nürnberg · FSN1
              </p>
            </div>
            <span className="pulse-dot" style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22C55E' }} />
          </div>
        ))}
      </div>
    </div>
  );
}

function CustomVisual() {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', width: '100%', maxWidth: '320px' }}>
        {[
          { label: 'Gastro', icon: <Pizza size={18} strokeWidth={1.5} />, active: true },
          { label: 'Handwerk', icon: <Code2 size={18} strokeWidth={1.5} /> },
          { label: 'Beauty', icon: <Sparkles size={18} strokeWidth={1.5} /> },
          { label: 'Reinigung', icon: <Shield size={18} strokeWidth={1.5} /> },
          { label: 'Catering', icon: <Headphones size={18} strokeWidth={1.5} /> },
          { label: 'Fitness', icon: <Zap size={18} strokeWidth={1.5} /> },
        ].map((b) => (
          <div
            key={b.label}
            style={{
              aspectRatio: '1',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px',
              background: b.active ? 'rgba(59,130,246,0.1)' : 'rgba(255,255,255,0.02)',
              border: `1px solid ${b.active ? 'rgba(59,130,246,0.3)' : 'rgba(255,255,255,0.06)'}`,
              borderRadius: '10px',
              color: b.active ? '#3B82F6' : 'rgba(255,255,255,0.5)',
            }}
          >
            {b.icon}
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.04em' }}>{b.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============================================
   BENTO CARD
============================================ */
function BentoCard({
  gridColumn,
  gridRow,
  eyebrow,
  title,
  description,
  visual,
  visualHeight = '220px',
}: {
  gridColumn: string;
  gridRow?: string;
  eyebrow: string;
  title: string;
  description: string;
  visual: React.ReactNode;
  visualHeight?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      style={{
        gridColumn, gridRow,
        position: 'relative',
        background: '#111113',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '16px',
        overflow: 'hidden',
        transition: 'border-color 0.25s, background 0.25s',
        display: 'flex', flexDirection: 'column',
      }}
      whileHover={{ borderColor: 'rgba(59,130,246,0.25)' }}
    >
      {/* Visual area */}
      <div style={{ position: 'relative', height: visualHeight, overflow: 'hidden', background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.06) 0%, transparent 70%)' }}>
        {visual}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, #111113)', pointerEvents: 'none' }} />
      </div>

      {/* Content */}
      <div style={{ padding: '28px', flex: 1 }}>
        <p className="eyebrow" style={{ marginBottom: '10px' }}>{eyebrow}</p>
        <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.4rem', fontWeight: 600, color: '#FAFAFA', letterSpacing: '-0.025em', margin: '0 0 12px', lineHeight: 1.15 }}>
          {title}
        </h3>
        <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, margin: 0 }}>
          {description}
        </p>
      </div>
    </motion.div>
  );
}

/* ============================================
   DATA
============================================ */
const STEPS = [
  { num: '01', icon: <MessageCircle size={18} strokeWidth={1.6} />, titel: 'Kennenlernen', text: 'Unverbindliches Erstgespräch. Wir hören zu, stellen die richtigen Fragen und verstehen Ihren Betrieb. Kostenlos, maximal 30 Minuten.' },
  { num: '02', icon: <Sparkles size={18} strokeWidth={1.6} />, titel: 'Setup', text: 'Wir richten alles ein: Software-Konfiguration, Daten-Import, Branding, Test-Durchläufe. Sie müssen keinen Finger rühren.' },
  { num: '03', icon: <Rocket size={18} strokeWidth={1.6} />, titel: 'Live gehen', text: 'Kurze Team-Einweisung, dann läuft der Betrieb. Wir bleiben im laufenden Support — fester Ansprechpartner, 24h Reaktion.' },
];

const TESTIMONIALS = [
  {
    quote: 'Samstagnachmittag eingerichtet, Sonntagabend erste Online-Bestellung. Unser alter Lieferant hat für dieselbe Sache drei Wochen gebraucht — und dreimal so viel gekostet.',
    name: 'Marco B.',
    role: 'Inhaber · Ristorante Bella, Stuttgart',
    initials: 'MB',
    stat: '3 Monate im Einsatz',
  },
  {
    quote: 'Endlich ein Tool, das auf Deutsch kommuniziert und versteht, wie ein Café funktioniert. Support antwortet wirklich innerhalb eines Tages — das war bei der letzten Agentur undenkbar.',
    name: 'Sabine K.',
    role: 'Geschäftsführerin · Café Linde, Tübingen',
    initials: 'SK',
    stat: '6 Monate im Einsatz',
  },
];

const FAQ = [
  { q: 'Wie lange dauert die Einrichtung wirklich?', a: 'Das Onboarding von ServeFlow dauert typischerweise 30 Minuten — inklusive Konto-Setup, Menü-Import und Erstellung des QR-Codes für die Tische. Custom-Projekte dauern 1–4 Wochen je nach Umfang. Sie bekommen vorher immer einen verbindlichen Zeitplan.' },
  { q: 'Was kostet das Ganze?', a: 'ServeFlow startet bei 29 €/Monat pro Standort, inklusive Updates, Hosting und Support. Webseiten und Landingpages auf Anfrage — individuell nach Umfang und Anforderung. Custom-Projekte werden nach Aufwand zum Festpreis kalkuliert — transparent, ohne versteckte Kosten.' },
  { q: 'Wo liegen meine Daten?', a: 'Ausschließlich auf deutschen Servern bei Hetzner in Nürnberg (FSN1-Rechenzentrum). Alle Verbindungen TLS 1.3-verschlüsselt, Backups täglich mit AES-256, keine Weitergabe an Dritte. DSGVO-konform nach aktuellem Stand.' },
  { q: 'Kann ich das Produkt vorher testen?', a: 'Ja. Nach dem unverbindlichen Erstgespräch bekommen Sie einen Demo-Zugang zu ServeFlow mit Musterdaten. Die ersten 30 Tage sind kostenfrei — ohne Kündigungsfrist, ohne Hakenkreuz im Kleingedruckten.' },
  { q: 'Was passiert, wenn ich wechseln möchte?', a: 'Alle Ihre Daten gehören Ihnen. Wir exportieren sie auf Wunsch jederzeit als CSV, JSON oder direkt in das Zielsystem. Keine Vendor-Lock-in-Tricks, keine Extra-Gebühren für den Export.' },
  { q: 'Bietet ihr auch individuelle Software an?', a: 'Ja. Neben unseren Standard-Produkten bauen wir Custom-Apps — von der Prozessautomatisierung bis zur kompletten Branchen-Plattform. Kontaktformular ausfüllen, kostenfreies Angebot, Umsetzung zum Festpreis.' },
];

const PRODUKTE = [
  { name: 'ServeFlow', desc: 'Digitales Betriebssystem für Restaurants — QR-Bestellung, Tischverwaltung, Reservierungen. Ab 29 €/Monat.', status: 'Live', branche: 'Gastronomie', href: '/produkte/serveflow' },
  { name: 'Webseiten', desc: 'SEO-optimierte Unternehmens-Websites und Landingpages. Lieferung in 5 Werktagen, Angebot nach Umfang.', status: 'Live', branche: 'Alle Branchen', href: '/leistungen/webseiten' },
  { name: 'HandBase', desc: 'Handwerker-SaaS — Auftragsmanagement, Zeiterfassung, digitale Rechnungen, mobile App für das Team.', status: 'Q3 2026', branche: 'Handwerk', href: '/branchen' },
  { name: 'BeautyBase', desc: 'Online-Terminbuchung, digitale Kundenkartei, Produkt- und Dienstleistungsverwaltung.', status: 'Q4 2026', branche: 'Beauty', href: '/branchen' },
  { name: 'CleanBase', desc: 'Einsatz- und Schichtplanung, Kundenverwaltung und Leistungserfassung für Reinigungsfirmen.', status: 'Q1 2027', branche: 'Reinigung', href: '/branchen' },
  { name: 'CaterBase', desc: 'Event-Planung, Angebotserstellung und Personaldisposition für Caterer und Event-Gastronomie.', status: 'Q2 2027', branche: 'Catering', href: '/branchen' },
];

const MARQUEE = ['DSGVO-konform', 'Server in Nürnberg', '30 Min Go-Live', 'Made in Germany', 'Branchensoftware', 'Custom SaaS', '24h Antwortzeit', 'Ohne Vendor Lock-in'];

const TRUST_LOGOS = [
  { name: 'Ristorante Bella', style: 'serif' },
  { name: 'Café Linde', style: 'sans' },
  { name: 'Steakhouse 07', style: 'mono' },
  { name: 'Zum Goldenen Hirsch', style: 'serif' },
  { name: 'Sushi Nori', style: 'sans' },
  { name: 'Brauhaus Stuttgart', style: 'mono' },
];

export default function Startseite() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0.5]);
  const heroY = useTransform(scrollY, [0, 400], [0, -40]);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div style={{ background: '#0A0A0B' }}>
      <SEO
        title="DRVN — Branchenspezifische SaaS-Lösungen für Deutschland"
        description="DRVN entwickelt digitale Plattformen für Gastronomie, Handwerk und mehr — DSGVO-konform, sofort einsetzbar, Server in Deutschland."
        path="/"
        keywords="SaaS Deutschland, Branchensoftware, Gastronomie Software, Handwerk Software, DSGVO-konform"
        schema={{ '@context': 'https://schema.org', '@type': 'WebSite', name: 'DRVN', url: 'https://drvnautomatisations.com' }}
      />

      {/* Inline keyframes for bento */}
      <style>{`
        @keyframes floatLabel {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}</style>

      {/* ============================================
          HERO
      ============================================ */}
      <section
        ref={heroRef}
        style={{ position: 'relative', paddingTop: '140px', paddingBottom: '80px', overflow: 'hidden' }}
      >
        <div className="hero-ambient" />

        <motion.div
          style={{ opacity: heroOpacity, y: heroY, position: 'relative', zIndex: 2, maxWidth: '1240px', margin: '0 auto', padding: '0 32px' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', justifyContent: 'center', marginBottom: '36px' }}
          >
            <Link
              to="/produkte/serveflow"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '5px 14px 5px 5px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '100px', textDecoration: 'none',
                transition: 'background 0.2s, border-color 0.2s',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
            >
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', padding: '3px 8px', background: 'rgba(34,197,94,0.12)', color: '#22C55E', border: '1px solid rgba(34,197,94,0.3)', borderRadius: '100px', letterSpacing: '0.04em', fontWeight: 500 }}>
                NEU
              </span>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', color: 'rgba(255,255,255,0.75)', fontWeight: 500 }}>
                ServeFlow für Gastronomie ist jetzt live
              </span>
              <ArrowRight size={12} style={{ color: 'rgba(255,255,255,0.5)' }} />
            </Link>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="display-1"
            style={{ textAlign: 'center', margin: '0 auto 24px', maxWidth: '960px' }}
          >
            Software, die für <span className="text-gradient">Ihre Branche</span>
            <br />
            gebaut ist<span style={{ color: '#3B82F6' }}>.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ textAlign: 'center', margin: '0 auto 44px', maxWidth: '600px', fontSize: '1.1rem', lineHeight: 1.55, color: 'rgba(255,255,255,0.6)', fontWeight: 400 }}
          >
            Keine generischen Tools. Keine US-Cloud. Kein Feature-Chaos.<br />
            Nur Software, die Ihren Betrieb wirklich versteht — gebaut in Stuttgart.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}
          >
            <Link to="/produkte/serveflow" className="btn-primary" style={{ cursor: 'pointer' }}>
              Produkte entdecken <ArrowRight size={15} />
            </Link>
            <Link to="/kontakt" className="btn-ghost" style={{ cursor: 'pointer' }}>
              30-Min-Demo buchen
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', maxWidth: '720px', margin: '64px auto 0' }}
          >
            {[
              { num: '30 Min.', label: 'bis Go-Live' },
              { num: '100%', label: 'DSGVO' },
              { num: '24h', label: 'Antwortzeit' },
              { num: '6+', label: 'Branchen' },
            ].map((m) => (
              <div key={m.label} style={{ textAlign: 'center', padding: '0 8px' }}>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.15rem', fontWeight: 600, color: '#FAFAFA', letterSpacing: '-0.02em', margin: '0 0 2px' }}>
                  {m.num}
                </p>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.04em', margin: 0, textTransform: 'uppercase' }}>
                  {m.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginTop: '96px', padding: '0 32px', position: 'relative', zIndex: 2, maxWidth: '1240px', margin: '96px auto 0' }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: '32px', alignItems: 'end' }}>
            <DashboardMockup />
            <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '16px' }}>
              <PhoneMockup />
            </div>
          </div>
        </motion.div>
      </section>

      {/* ============================================
          TRUST LOGOS
      ============================================ */}
      <Section style={{ padding: '80px 32px 60px', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.01)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <motion.p
            variants={fadeUp}
            style={{ textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 36px' }}
          >
            Im Einsatz bei Betrieben in ganz Deutschland
          </motion.p>
          <motion.div variants={fadeUp} style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '24px', alignItems: 'center' }}>
            {TRUST_LOGOS.map((logo) => (
              <div
                key={logo.name}
                style={{
                  textAlign: 'center',
                  fontFamily: logo.style === 'sans' ? 'var(--font-sans)' : 'var(--font-mono)',
                  fontStyle: logo.style === 'serif' ? 'italic' : 'normal',
                  fontSize: logo.style === 'mono' ? '0.78rem' : '0.92rem',
                  fontWeight: logo.style === 'sans' ? 700 : 500,
                  color: 'rgba(255,255,255,0.35)',
                  letterSpacing: logo.style === 'mono' ? '0.05em' : '-0.01em',
                  transition: 'color 0.2s',
                  cursor: 'default',
                  userSelect: 'none',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}
              >
                {logo.name}
              </div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ============================================
          MARQUEE
      ============================================ */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '18px 0', overflow: 'hidden', background: 'rgba(255,255,255,0.015)' }}>
        <div className="animate-marquee" style={{ display: 'flex', gap: '48px', whiteSpace: 'nowrap' }}>
          {[...MARQUEE, ...MARQUEE, ...MARQUEE, ...MARQUEE].map((item, i) => (
            <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'rgba(255,255,255,0.42)', letterSpacing: '0.02em' }}>
              {item}
              <span style={{ color: 'rgba(255,255,255,0.18)' }}>·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ============================================
          BENTO GRID FEATURES
      ============================================ */}
      <Section style={{ padding: '140px 32px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <motion.div variants={fadeUp} style={{ maxWidth: '680px', marginBottom: '64px' }}>
            <p className="eyebrow" style={{ marginBottom: '16px' }}>Warum DRVN</p>
            <h2 className="display-2" style={{ margin: '0 0 20px' }}>
              Kein Feature-Chaos.<br />
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>Nur was wirklich funktioniert.</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.58)', lineHeight: 1.65, margin: 0 }}>
              Vier konkrete Versprechen, die wir in jedem Projekt halten. Nicht aus der Marketing-Abteilung, sondern aus dem Alltag unserer Kunden.
            </p>
          </motion.div>

          {/* Bento 6-column grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '16px' }}>
            <BentoCard
              gridColumn="span 3"
              eyebrow="Compliance"
              title="DSGVO by Default."
              description="Alle Daten liegen auf deutschen Servern bei Hetzner in Nürnberg. TLS 1.3 verschlüsselt, AES-256 Backups, keine Drittanbieter-Cookies. Ohne Aufpreis, ohne Zusatzvertrag."
              visual={<DSGVOVisual />}
            />
            <BentoCard
              gridColumn="span 3"
              eyebrow="Geschwindigkeit"
              title="In 30 Minuten live."
              description="Kein wochenlanges Setup. Kontoerstellung, Konfiguration und erste Bestellung am selben Nachmittag. Ihre Mitarbeiter können sofort produktiv arbeiten."
              visual={<SpeedVisual />}
            />
            <BentoCard
              gridColumn="span 2"
              eyebrow="Infrastruktur"
              title="Server in Deutschland."
              description="Redundant im FSN1-Rechenzentrum Nürnberg. Tägliche Backups, 99.9% Uptime-SLA, Datenhoheit bleibt bei Ihnen."
              visual={<ServerVisual />}
            />
            <BentoCard
              gridColumn="span 4"
              eyebrow="Branchen"
              title="Eine Lösung pro Branche — nicht ein Tool für alle."
              description="Gastronomie funktioniert anders als Handwerk, Handwerk anders als Beauty. Jedes unserer Produkte ist für die jeweilige Branche designt — vom Wording über die Icons bis zu den Workflows. Kein Kompromiss, keine überladenen Menüs."
              visual={<CustomVisual />}
            />
          </div>
        </div>
      </Section>

      {/* ============================================
          HOW IT WORKS
      ============================================ */}
      <Section style={{ padding: '120px 32px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <motion.div variants={fadeUp} style={{ textAlign: 'center', marginBottom: '72px' }}>
            <p className="eyebrow" style={{ marginBottom: '16px' }}>So läuft es ab</p>
            <h2 className="display-2" style={{ margin: '0 auto 16px', maxWidth: '720px' }}>
              Von der ersten Nachricht<br />
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>zum Go-Live in 3 Schritten.</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.58)', lineHeight: 1.65, margin: '0 auto', maxWidth: '580px' }}>
              Kein Angebotsmarathon. Kein monatelanges Warten. Schnelle Entscheidungen, konkrete Ergebnisse.
            </p>
          </motion.div>

          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: '36px', left: '12%', right: '12%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.3) 20%, rgba(59,130,246,0.3) 80%, transparent)' }} />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', position: 'relative' }}>
              {STEPS.map((step) => (
                <motion.div key={step.num} variants={fadeUp} style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '72px', height: '72px', margin: '0 auto 24px',
                    background: '#0A0A0B', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '16px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative',
                  }}>
                    <div style={{ position: 'absolute', top: '-8px', right: '-8px', fontFamily: 'var(--font-mono)', fontSize: '0.58rem', padding: '3px 6px', background: 'rgba(59,130,246,0.15)', border: '1px solid rgba(59,130,246,0.3)', color: '#3B82F6', borderRadius: '4px', letterSpacing: '0.05em', fontWeight: 600 }}>
                      {step.num}
                    </div>
                    <div style={{ color: '#3B82F6' }}>{step.icon}</div>
                  </div>
                  <h3 className="display-3" style={{ fontSize: '1.4rem', margin: '0 0 12px' }}>{step.titel}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, margin: '0 auto', maxWidth: '320px' }}>{step.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ============================================
          COMPARISON
      ============================================ */}
      <Section style={{ padding: '120px 32px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <motion.div variants={fadeUp} style={{ marginBottom: '56px' }}>
            <p className="eyebrow" style={{ marginBottom: '16px' }}>Vergleich</p>
            <h2 className="display-2" style={{ margin: '0 0 16px' }}>
              DRVN im direkten Vergleich.
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.58)', lineHeight: 1.65, margin: 0, maxWidth: '560px' }}>
              Warum eine DRVN-Lösung und nicht US-SaaS oder die nächstbeste Agentur? Hier die ehrlichen Unterschiede.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', overflow: 'hidden', background: '#0D0D10' }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)' }}>
              <div style={{ padding: '20px 24px' }} />
              <div style={{ padding: '20px 24px', textAlign: 'center', borderLeft: '1px solid rgba(59,130,246,0.2)', background: 'rgba(59,130,246,0.05)', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-1px', left: '-1px', right: '-1px', height: '2px', background: 'linear-gradient(90deg, transparent, #3B82F6, transparent)' }} />
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 700, color: '#FAFAFA', margin: 0, letterSpacing: '-0.01em' }}>
                  DRVN<span style={{ color: '#3B82F6' }}>.</span>
                </p>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'rgba(255,255,255,0.5)', margin: '2px 0 0', letterSpacing: '0.05em' }}>EMPFOHLEN</p>
              </div>
              <div style={{ padding: '20px 24px', textAlign: 'center', borderLeft: '1px solid rgba(255,255,255,0.06)' }}>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 500, color: 'rgba(255,255,255,0.75)', margin: 0 }}>Generic SaaS</p>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'rgba(255,255,255,0.35)', margin: '2px 0 0', letterSpacing: '0.05em' }}>AUS DEN USA</p>
              </div>
              <div style={{ padding: '20px 24px', textAlign: 'center', borderLeft: '1px solid rgba(255,255,255,0.06)' }}>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 500, color: 'rgba(255,255,255,0.75)', margin: 0 }}>Custom-Agentur</p>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'rgba(255,255,255,0.35)', margin: '2px 0 0', letterSpacing: '0.05em' }}>EIGENENTWICKLUNG</p>
              </div>
            </div>

            {[
              { label: 'Startzeit', drvn: '30 Minuten', saas: '1–2 Tage', agency: '3–6 Monate' },
              { label: 'Kosten', drvn: 'ab 99 €/Monat', saas: 'ab 50 €/Monat', agency: 'ab 15.000 € einmalig' },
              { label: 'DSGVO-konform', drvn: true, saas: 'oft unklar', agency: true },
              { label: 'Server in DE', drvn: true, saas: false, agency: 'je nach Agentur' },
              { label: 'Branchenspezifisch', drvn: true, saas: false, agency: true },
              { label: 'Ohne Kündigungsfrist', drvn: true, saas: false, agency: 'n/a' },
              { label: 'Support auf Deutsch', drvn: true, saas: 'meist nein', agency: true },
            ].map((row, i, arr) => (
              <div
                key={row.label}
                style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}
              >
                <div style={{ padding: '18px 24px', fontFamily: 'var(--font-sans)', fontSize: '0.92rem', color: '#FAFAFA', fontWeight: 500 }}>
                  {row.label}
                </div>
                {[
                  { val: row.drvn, highlight: true },
                  { val: row.saas, highlight: false },
                  { val: row.agency, highlight: false },
                ].map((cell, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '18px 24px', textAlign: 'center',
                      borderLeft: cell.highlight ? '1px solid rgba(59,130,246,0.2)' : '1px solid rgba(255,255,255,0.05)',
                      background: cell.highlight ? 'rgba(59,130,246,0.03)' : 'transparent',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}
                  >
                    {cell.val === true ? (
                      <Check size={16} strokeWidth={2.5} style={{ color: cell.highlight ? '#3B82F6' : '#22C55E' }} />
                    ) : cell.val === false ? (
                      <XIcon size={16} strokeWidth={2.5} style={{ color: 'rgba(255,255,255,0.25)' }} />
                    ) : (
                      <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: cell.highlight ? '#FAFAFA' : 'rgba(255,255,255,0.55)', fontWeight: cell.highlight ? 500 : 400 }}>
                        {cell.val}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ============================================
          TESTIMONIALS
      ============================================ */}
      <Section style={{ padding: '120px 32px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <motion.div variants={fadeUp} style={{ marginBottom: '56px' }}>
            <p className="eyebrow" style={{ marginBottom: '16px' }}>Kundenstimmen</p>
            <h2 className="display-2" style={{ margin: 0 }}>
              Das sagen<br />
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>unsere Pilot-Kunden.</span>
            </h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
            {TESTIMONIALS.map((t) => (
              <motion.div key={t.name} variants={fadeUp} className="card" style={{ padding: '40px', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '32px', right: '32px', fontFamily: 'var(--font-mono)', fontSize: '0.62rem', padding: '3px 8px', background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', color: '#22C55E', borderRadius: '4px', letterSpacing: '0.05em' }}>
                  {t.stat}
                </div>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', color: '#FAFAFA', lineHeight: 1.55, margin: '0 0 28px', fontWeight: 400, letterSpacing: '-0.015em' }}>
                  „{t.quote}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(59,130,246,0.3), rgba(6,182,212,0.3))', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 600, color: '#FAFAFA' }}>
                    {t.initials}
                  </div>
                  <div>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: '#FAFAFA', margin: 0, fontWeight: 500 }}>{t.name}</p>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', margin: 0, letterSpacing: '0.02em' }}>{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ============================================
          PRODUKTE
      ============================================ */}
      <Section style={{ padding: '120px 32px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <motion.div variants={fadeUp} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '56px', flexWrap: 'wrap', gap: '24px' }}>
            <div style={{ maxWidth: '540px' }}>
              <p className="eyebrow" style={{ marginBottom: '16px' }}>Produkte</p>
              <h2 className="display-2" style={{ margin: 0 }}>
                Eine Lösung<br />
                <span style={{ color: 'rgba(255,255,255,0.4)' }}>pro Branche.</span>
              </h2>
            </div>
            <Link to="/branchen" className="btn-ghost" style={{ cursor: 'pointer' }}>
              Alle Branchen <ArrowRight size={14} />
            </Link>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
            {PRODUKTE.map((p) => (
              <motion.div key={p.name} variants={fadeUp}>
                <Link
                  to={p.href}
                  style={{
                    display: 'flex', flexDirection: 'column', padding: '28px',
                    background: '#111113', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '12px', textDecoration: 'none', height: '100%',
                    transition: 'background 0.2s, border-color 0.2s', cursor: 'pointer',
                    opacity: p.status === 'Live' ? 1 : 0.75,
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#16161A'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = '#111113'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                    <span className="eyebrow-muted">{p.branche}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', letterSpacing: '0.05em', padding: '2px 7px', borderRadius: '3px', background: p.status === 'Live' ? 'rgba(34,197,94,0.1)' : 'rgba(245,158,11,0.08)', color: p.status === 'Live' ? '#22C55E' : '#F59E0B', border: p.status === 'Live' ? '1px solid rgba(34,197,94,0.25)' : '1px solid rgba(245,158,11,0.2)', fontWeight: 500 }}>
                      {p.status.toUpperCase()}
                    </span>
                  </div>
                  <h3 className="display-3" style={{ margin: '0 0 10px', fontSize: '1.35rem', fontWeight: 600 }}>{p.name}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.55, margin: 0, flex: 1 }}>{p.desc}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '24px', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#3B82F6', letterSpacing: '0.02em' }}>
                    Mehr erfahren <ArrowUpRight size={12} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ============================================
          FAQ
      ============================================ */}
      <Section style={{ padding: '120px 32px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <motion.div variants={fadeUp} style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p className="eyebrow" style={{ marginBottom: '16px' }}>FAQ</p>
            <h2 className="display-2" style={{ margin: 0 }}>
              Häufige Fragen<br />
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>klar beantwortet.</span>
            </h2>
          </motion.div>

          <motion.div variants={fadeUp} style={{ border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', overflow: 'hidden', background: 'rgba(255,255,255,0.015)' }}>
            {FAQ.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={item.q} style={{ borderBottom: i < FAQ.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    style={{
                      width: '100%', padding: '22px 28px', background: 'transparent', border: 'none', cursor: 'pointer',
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', textAlign: 'left',
                      transition: 'background 0.15s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.02)')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                  >
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 500, color: '#FAFAFA', letterSpacing: '-0.015em' }}>
                      {item.q}
                    </span>
                    <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }} style={{ color: 'rgba(255,255,255,0.5)', flexShrink: 0 }}>
                      {isOpen ? <Minus size={17} strokeWidth={1.8} /> : <Plus size={17} strokeWidth={1.8} />}
                    </motion.div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div style={{ padding: '0 28px 22px', fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.65 }}>
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>

          <motion.p variants={fadeUp} style={{ textAlign: 'center', marginTop: '36px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)' }}>
            Noch Fragen?{' '}
            <Link to="/kontakt" style={{ color: '#3B82F6', textDecoration: 'none', fontWeight: 500, cursor: 'pointer' }}>
              Direkt kontaktieren →
            </Link>
          </motion.p>
        </div>
      </Section>

      {/* ============================================
          CTA
      ============================================ */}
      <Section style={{ padding: '140px 32px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-30%', left: '50%', transform: 'translateX(-50%)', width: '900px', height: '700px', background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.1) 0%, transparent 55%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <motion.p variants={fadeUp} className="eyebrow" style={{ marginBottom: '20px' }}>Starten Sie heute</motion.p>
          <motion.h2 variants={fadeUp} className="display-1" style={{ margin: '0 0 24px' }}>
            Bereit für Software,<br />
            <span className="text-gradient">die Ihre Branche versteht?</span>
          </motion.h2>
          <motion.p variants={fadeUp} style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.58)', lineHeight: 1.65, margin: '0 auto 44px', maxWidth: '520px' }}>
            30 Minuten Erstgespräch, 24 Stunden bis zum konkreten Angebot.
            Keine Verpflichtung, kein Kleingedrucktes.
          </motion.p>
          <motion.div variants={fadeUp} style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <Link to="/kontakt" className="btn-primary" style={{ cursor: 'pointer' }}>
              Projekt anfragen <ArrowRight size={15} />
            </Link>
            <Link to="/produkte/serveflow" className="btn-ghost" style={{ cursor: 'pointer' }}>
              ServeFlow ansehen
            </Link>
          </motion.div>
          <motion.div variants={fadeUp} style={{ marginTop: '64px', paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap' }}>
            {['Kostenlose Erstberatung', 'Angebot in 24 Stunden', 'DSGVO-konform', 'Kein Setup-Aufwand'].map((t) => (
              <span key={t} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)' }}>
                <Check size={13} strokeWidth={2.5} style={{ color: '#3B82F6', flexShrink: 0 }} />
                {t}
              </span>
            ))}
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
