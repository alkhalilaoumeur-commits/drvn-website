import { useState, useEffect } from 'react';
import { Phone, MessageCircle, X, Calendar, ChevronRight } from 'lucide-react';
import { track, Events } from '../lib/analytics';

const PHONE = '+4917620581564';
const WHATSAPP_NUM = '4917620581564';
const WHATSAPP_TEXT = encodeURIComponent('Hallo, ich interessiere mich für drvn. Können wir kurz sprechen?');
export const CALENDLY_BASE = 'https://calendly.com/drvnautomatisations';

declare global {
  interface Window {
    Calendly?: { initPopupWidget: (opts: { url: string; prefill?: { customAnswers?: { a1?: string } } }) => void };
  }
}

type Product = 'serveflow' | 'webseite' | 'andere';

function openCalendlyFor(product: Product) {
  const labels: Record<Product, string> = {
    serveflow: 'ServeFlow Demo (Restaurant-Software)',
    webseite: 'Webseite / Web-Projekt Demo',
    andere: 'Demo – Anderes Projekt',
  };
  track(Events.DEMO_PRODUKT_GEWAEHLT, { produkt: product });
  const url = CALENDLY_BASE;
  if (window.Calendly) {
    window.Calendly.initPopupWidget({
      url,
      prefill: { customAnswers: { a1: labels[product] } },
    });
  } else {
    window.open(url, '_blank');
  }
}

// Globaler Trigger für Hero-Button etc.
let _openModal: (() => void) | null = null;
export function openDemoModal() { _openModal?.(); }
export function openCalendly() { _openModal?.(); }

/* ── Produkt-Auswahl-Modal ── */
function ProductModal({ onClose }: { onClose: () => void }) {
  const PRODUCTS = [
    {
      id: 'serveflow' as Product,
      icon: '🍽️',
      title: 'ServeFlow',
      sub: 'Restaurant-Software — digital bestellen, reservieren, verwalten',
      badge: 'Ab 29 €/Mo',
      badgeColor: '#FF4D00',
    },
    {
      id: 'webseite' as Product,
      icon: '🌐',
      title: 'Webseite / Web-Projekt',
      sub: 'Professionelle Unternehmenswebseite, Landingpage oder Web-App',
      badge: 'Individuell',
      badgeColor: '#FF7133',
    },
    {
      id: 'andere' as Product,
      icon: '📌',
      title: 'Anderes Projekt',
      sub: 'Andere Software-Lösung — du beschreibst kurz dein Anliegen im Calendly',
      badge: 'Auf Anfrage',
      badgeColor: '#FF2461',
    },
  ];

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 99999,
        background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(6px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '16px',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: 'var(--surface-high)', border: '1px solid var(--border-high)',
          borderRadius: '18px', padding: '28px', width: '100%', maxWidth: '480px',
          boxShadow: '0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,77,0,0.05)',
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
          <div>
            <div style={{ fontSize: '18px', fontWeight: 800, color: '#f1f5f9', marginBottom: '4px' }}>
              📅 Demo buchen
            </div>
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>
              Wähle für welches Produkt du eine Demo möchtest.<br />
              30 Minuten, kostenlos, kein Kleingedrucktes.
            </div>
          </div>
          <button
            onClick={onClose}
            style={{ background: 'rgba(255,255,255,0.06)', border: 'none', borderRadius: '8px', width: '32px', height: '32px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginLeft: '12px' }}
          >
            <X size={16} color="rgba(255,255,255,0.6)" />
          </button>
        </div>

        {/* Produkt-Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
          {PRODUCTS.map(p => (
            <button
              key={p.id}
              onClick={() => { onClose(); setTimeout(() => openCalendlyFor(p.id), 100); }}
              style={{
                display: 'flex', alignItems: 'center', gap: '14px',
                background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '12px', padding: '14px 16px', cursor: 'pointer',
                transition: 'all 0.15s', textAlign: 'left', width: '100%',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,77,0,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,77,0,0.3)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
            >
              <div style={{ fontSize: '26px', flexShrink: 0 }}>{p.icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '3px' }}>
                  <span style={{ fontSize: '14px', fontWeight: 700, color: '#f1f5f9' }}>{p.title}</span>
                  <span style={{ fontSize: '10px', fontWeight: 700, padding: '1px 7px', borderRadius: '10px', background: `${p.badgeColor}20`, color: p.badgeColor, border: `1px solid ${p.badgeColor}40` }}>{p.badge}</span>
                </div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.4 }}>{p.sub}</div>
              </div>
              <ChevronRight size={16} color="rgba(255,255,255,0.3)" style={{ flexShrink: 0 }} />
            </button>
          ))}
        </div>

        {/* Trennlinie + Hinweis */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '14px' }}>
          <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', lineHeight: 1.6 }}>
            💡 <strong style={{ color: 'rgba(255,255,255,0.5)' }}>Für individuelle Anfragen</strong> (maßgeschneiderte Projekte, Sonderlösungen oder spezifische Fragen) nutze stattdessen das{' '}
            <a href="/kontakt" style={{ color: '#FF4D00', textDecoration: 'none' }} onClick={onClose}>Kontaktformular</a> — wir melden uns innerhalb von 48 Stunden.
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Floating Bar (links, immer sichtbar) ── */
export default function FloatingButtons() {
  const [visible, setVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    _openModal = () => setModalOpen(true);
    const t = setTimeout(() => setVisible(true), 800);
    return () => { clearTimeout(t); _openModal = null; };
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Modal */}
      {modalOpen && <ProductModal onClose={() => setModalOpen(false)} />}

      {/* Floating Bar — LINKS */}
      <div style={{
        position: 'fixed', bottom: '24px', left: '24px', zIndex: 9998,
        display: 'flex', alignItems: 'center', gap: '8px',
        background: 'rgba(28, 26, 23, 0.92)',
        border: '1px solid var(--border-high)',
        borderRadius: '50px',
        padding: '8px 8px 8px 16px',
        backdropFilter: 'blur(16px)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.5), 0 0 24px rgba(255,77,0,0.08)',
      }}>
        {/* Demo buchen — primär */}
        <button
          onClick={() => { track(Events.DEMO_MODAL_OPENED, { source: 'floating' }); setModalOpen(true); }}
          style={{
            display: 'flex', alignItems: 'center', gap: '7px',
            background: 'linear-gradient(135deg, #FF4D00, #FF2461)',
            border: 'none', borderRadius: '40px',
            padding: '9px 16px', cursor: 'pointer',
            fontSize: '13px', fontWeight: 600, color: 'white',
            whiteSpace: 'nowrap', transition: 'opacity 0.15s, box-shadow 0.2s',
            fontFamily: 'var(--font-sans)',
          }}
          onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 24px rgba(255,77,0,0.4)'; }}
          onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; }}
        >
          <Calendar size={15} />
          Demo buchen
        </button>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${WHATSAPP_NUM}?text=${WHATSAPP_TEXT}`}
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp"
          onClick={() => track(Events.WHATSAPP_KLICK, { source: 'floating' })}
          style={{
            width: '38px', height: '38px', borderRadius: '50%',
            background: '#25D366', display: 'flex', alignItems: 'center',
            justifyContent: 'center', textDecoration: 'none', flexShrink: 0,
            transition: 'opacity 0.15s',
          }}
          onMouseEnter={e => { e.currentTarget.style.opacity = '0.85'; }}
          onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
        >
          <MessageCircle size={17} color="white" />
        </a>

        {/* Anrufen */}
        <a
          href={`tel:${PHONE}`}
          title="Direkt anrufen"
          onClick={() => track(Events.ANRUFEN_KLICK, { source: 'floating' })}
          style={{
            width: '38px', height: '38px', borderRadius: '50%',
            background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            textDecoration: 'none', flexShrink: 0, transition: 'all 0.15s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.14)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
        >
          <Phone size={16} color="rgba(255,255,255,0.8)" />
        </a>
      </div>
    </>
  );
}
