import { useState, useEffect } from 'react';
import { Phone, MessageCircle, X, Calendar } from 'lucide-react';

const PHONE = '+4917620581564';
const WHATSAPP_NUM = '4917620581564';
const WHATSAPP_TEXT = encodeURIComponent('Hallo, ich interessiere mich für DRVN. Können wir kurz sprechen?');
export const CALENDLY_URL = 'https://calendly.com/drvnautomatisations';

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void;
    };
  }
}

export function openCalendly() {
  if (window.Calendly) {
    window.Calendly.initPopupWidget({ url: CALENDLY_URL });
  } else {
    window.open(CALENDLY_URL, '_blank');
  }
}

export default function FloatingButtons() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    // Tooltip nach 3s kurz anzeigen
    const t2 = setTimeout(() => { setShowTooltip(true); }, 3000);
    const t3 = setTimeout(() => { setShowTooltip(false); }, 6000);
    return () => { clearTimeout(timer); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  if (!visible) return null;

  const btnBase: React.CSSProperties = {
    width: '48px', height: '48px', borderRadius: '50%', border: 'none',
    cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
    boxShadow: '0 4px 16px rgba(0,0,0,0.4)', transition: 'all 0.2s', flexShrink: 0,
  };

  return (
    <div style={{
      position: 'fixed', bottom: '24px', right: '24px', zIndex: 9999,
      display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '10px',
    }}>
      {/* Expanded sub-buttons */}
      {expanded && (
        <>
          {/* Calendly */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{
              background: 'rgba(10,10,11,0.92)', color: '#e2e8f0', fontSize: '12px', fontWeight: 600,
              padding: '5px 12px', borderRadius: '20px', whiteSpace: 'nowrap',
              border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)',
            }}>Demo buchen</span>
            <button
              onClick={() => { openCalendly(); setExpanded(false); }}
              style={{ ...btnBase, background: 'linear-gradient(135deg, #3b82f6, #06b6d4)' }}
              title="Demo buchen"
            >
              <Calendar size={20} color="white" />
            </button>
          </div>

          {/* WhatsApp */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{
              background: 'rgba(10,10,11,0.92)', color: '#e2e8f0', fontSize: '12px', fontWeight: 600,
              padding: '5px 12px', borderRadius: '20px', whiteSpace: 'nowrap',
              border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)',
            }}>WhatsApp schreiben</span>
            <a
              href={`https://wa.me/${WHATSAPP_NUM}?text=${WHATSAPP_TEXT}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setExpanded(false)}
              style={{ ...btnBase, background: '#25D366', textDecoration: 'none' }}
              title="WhatsApp"
            >
              <MessageCircle size={20} color="white" />
            </a>
          </div>

          {/* Anruf */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{
              background: 'rgba(10,10,11,0.92)', color: '#e2e8f0', fontSize: '12px', fontWeight: 600,
              padding: '5px 12px', borderRadius: '20px', whiteSpace: 'nowrap',
              border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)',
            }}>Direkt anrufen</span>
            <a
              href={`tel:${PHONE}`}
              onClick={() => setExpanded(false)}
              style={{ ...btnBase, background: '#10b981', textDecoration: 'none' }}
              title="Anrufen"
            >
              <Phone size={20} color="white" />
            </a>
          </div>
        </>
      )}

      {/* Tooltip */}
      {showTooltip && !expanded && (
        <div style={{
          background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
          color: 'white', fontSize: '12px', fontWeight: 700,
          padding: '6px 14px', borderRadius: '20px', whiteSpace: 'nowrap',
          boxShadow: '0 4px 16px rgba(59,130,246,0.4)',
          animation: 'fadeIn 0.3s ease',
        }}>
          Demo buchen — kostenlos 📅
        </div>
      )}

      {/* Main toggle button */}
      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          ...btnBase,
          width: '56px', height: '56px',
          background: expanded
            ? 'rgba(30,30,35,0.95)'
            : 'linear-gradient(135deg, #3b82f6, #06b6d4)',
          border: expanded ? '1px solid rgba(255,255,255,0.12)' : 'none',
          transform: expanded ? 'rotate(45deg)' : 'rotate(0deg)',
          boxShadow: expanded
            ? '0 4px 16px rgba(0,0,0,0.4)'
            : '0 6px 24px rgba(59,130,246,0.45)',
        }}
        title={expanded ? 'Schließen' : 'Kontakt / Demo buchen'}
        aria-label="Kontakt öffnen"
      >
        {expanded
          ? <X size={22} color="white" />
          : <MessageCircle size={22} color="white" />
        }
      </button>
    </div>
  );
}
