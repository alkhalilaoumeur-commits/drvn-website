import { Mail, Globe, MessageCircle } from 'lucide-react'

export default function Card() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{
      background: '#0A0906',
      fontFamily: "'DM Sans', Helvetica, sans-serif"
    }}>
      <div style={{ width: '100%', maxWidth: '400px' }}>

        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <span style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: '28px',
            letterSpacing: '6px',
            color: '#ffffff',
            textTransform: 'lowercase' as const
          }}>drvn</span>
          <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', letterSpacing: '2px', textTransform: 'uppercase' as const, marginTop: '4px' }}>
            Webentwicklung · Automatisierung
          </div>
        </div>

        {/* Card */}
        <div style={{
          background: '#141210',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '12px',
          padding: '32px',
          textAlign: 'center'
        }}>
          {/* Avatar placeholder */}
          <div style={{
            width: '72px', height: '72px',
            background: '#FF4D00',
            borderRadius: '50%',
            margin: '0 auto 20px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '28px', fontWeight: 800,
            fontFamily: "'Syne', sans-serif",
            color: 'white'
          }}>I</div>

          <div style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff', marginBottom: '4px', fontFamily: "'Syne', sans-serif" }}>
            Ilias Al-Khalil Aoumeur
          </div>
          <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', marginBottom: '28px' }}>
            Webentwicklung & Automatisierung · Stuttgart
          </div>

          {/* Links */}
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '12px' }}>

            <a href="https://wa.me/4917620581564" style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              background: '#1A1715', border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '8px', padding: '14px 16px',
              color: '#ffffff', textDecoration: 'none', fontSize: '14px', fontWeight: 500,
              transition: 'border-color 0.2s'
            }}>
              <MessageCircle size={18} color="#FF4D00" />
              <span>WhatsApp schreiben</span>
            </a>

            <a href="mailto:a.aoumeur@drvnautomatisations.com" style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              background: '#1A1715', border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '8px', padding: '14px 16px',
              color: '#ffffff', textDecoration: 'none', fontSize: '14px', fontWeight: 500
            }}>
              <Mail size={18} color="#FF4D00" />
              <span>a.aoumeur@drvnautomatisations.com</span>
            </a>

            <a href="https://drvnautomatisations.com" style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              background: '#FF4D00',
              borderRadius: '8px', padding: '14px 16px',
              color: '#ffffff', textDecoration: 'none', fontSize: '14px', fontWeight: 700
            }}>
              <Globe size={18} color="white" />
              <span>drvnautomatisations.com</span>
            </a>

          </div>
        </div>

        {/* Services */}
        <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          {['Webseiten ab 10€/Monat', 'Buchungssysteme', 'Restaurant-Software', 'KI-Automatisierung'].map(s => (
            <div key={s} style={{
              background: '#141210', border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '8px', padding: '12px',
              fontSize: '12px', color: 'rgba(255,255,255,0.5)', textAlign: 'center' as const
            }}>{s}</div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '24px', fontSize: '11px', color: 'rgba(255,255,255,0.2)' }}>
          Kostenlose Erstberatung · Kein Risiko
        </div>
      </div>
    </div>
  )
}
