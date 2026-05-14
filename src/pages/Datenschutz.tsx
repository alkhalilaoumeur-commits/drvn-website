import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { fadeUp, viewport, easeOut } from '../lib/animations';

export default function Datenschutz() {
  return (
    <>
      <SEO
        title="Datenschutzerklärung"
        description="Datenschutzerklärung der drvn Website gemäß DSGVO."
        path="/datenschutz"
        noindex={true}
      />

      {/* Hero */}
      <section style={{ position: 'relative', paddingTop: 144, paddingBottom: 56, overflow: 'hidden' }}>
        <div className="hero-glow" style={{ height: 320, opacity: 0.5 }} />
        <div className="container-x" style={{ position: 'relative', maxWidth: 760 }}>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
            style={{ marginBottom: 18 }}
          >
            <span className="eyebrow">Rechtliches</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.1 }}
            className="display-1"
            style={{ margin: 0, marginBottom: 12 }}
          >
            Datenschutzerklärung
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.78rem',
              color: 'var(--text-muted)', letterSpacing: '0.06em',
              margin: 0, textTransform: 'uppercase',
            }}
          >
            Stand: Mai 2026
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section style={{ borderTop: '1px solid var(--border)', paddingBottom: 96 }}>
        <div className="container-x" style={{ paddingTop: 64, maxWidth: 760 }}>
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            style={{
              display: 'grid', gap: 36,
              fontFamily: 'var(--font-sans)', fontSize: '0.98rem',
              color: 'var(--text-secondary)', lineHeight: 1.7,
            }}
          >

            <Block num="1." title="Verantwortlicher">
              <p>Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:</p>
              <BoxedAddress>
                Al-Khalil Aoumeur<br />
                Egilolfstrasse 41<br />
                70599 Stuttgart, Deutschland<br />
                E-Mail:{' '}
                <a href="mailto:kontakt@drvnautomatisations.com" style={{ color: 'var(--accent)' }}>
                  kontakt@drvnautomatisations.com
                </a>
              </BoxedAddress>
            </Block>

            <Block num="2." title="Allgemeines zur Datenverarbeitung">
              <p>
                Wir nehmen den Schutz Ihrer persönlichen Daten ernst. Diese Website verwendet keine Tracking-Cookies und kein verhaltensbasiertes Tracking. Wir verarbeiten personenbezogene Daten nur soweit dies zur Bereitstellung unserer Dienste notwendig ist und eine Rechtsgrundlage nach Art. 6 DSGVO vorliegt.
              </p>
            </Block>

            <Block num="3." title="Hosting">
              <p>Diese Website wird gehostet bei:</p>
              <BoxedAddress>
                <strong style={{ color: 'var(--text-primary)' }}>Hetzner Online GmbH</strong><br />
                Industriestr. 25, 91710 Gunzenhausen, Deutschland<br />
                <a
                  href="https://www.hetzner.com/de/legal/privacy-policy"
                  target="_blank" rel="noopener noreferrer"
                  style={{ color: 'var(--accent)' }}
                >
                  Datenschutzerklärung Hetzner
                </a>
              </BoxedAddress>
              <p>
                Der Server-Standort ist Deutschland. Es findet kein Transfer personenbezogener Daten in Drittländer außerhalb der EU/EWR statt. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bereitstellung der Website).
              </p>
            </Block>

            <Block num="4." title="Kontaktformular">
              <p>Wenn Sie uns über unser Kontaktformular kontaktieren, werden folgende Daten verarbeitet:</p>
              <ul style={{ paddingLeft: 22, margin: '0 0 14px' }}>
                <li>Name</li>
                <li>E-Mail-Adresse</li>
                <li>Firma (optional)</li>
                <li>Ihre Nachricht</li>
              </ul>
              <p style={{ marginBottom: 6 }}>
                <strong style={{ color: 'var(--text-primary)' }}>Zweck:</strong> Bearbeitung Ihrer Anfrage und Kontaktaufnahme.
              </p>
              <p style={{ marginBottom: 6 }}>
                <strong style={{ color: 'var(--text-primary)' }}>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
              </p>
              <p style={{ marginBottom: 0 }}>
                <strong style={{ color: 'var(--text-primary)' }}>Speicherdauer:</strong> Ihre Daten werden nach abschließender Bearbeitung Ihrer Anfrage gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.
              </p>
            </Block>

            <Block num="5." title="E-Mail-Versand (Resend)">
              <p>Für den technischen Versand von E-Mails, die über das Kontaktformular ausgelöst werden, nutzen wir den Dienst Resend:</p>
              <BoxedAddress>
                <strong style={{ color: 'var(--text-primary)' }}>Resend Inc.</strong><br />
                2261 Market Street #5039, San Francisco, CA 94114, USA<br />
                <a
                  href="https://resend.com/legal/privacy-policy"
                  target="_blank" rel="noopener noreferrer"
                  style={{ color: 'var(--accent)' }}
                >
                  Datenschutzerklärung Resend
                </a>
              </BoxedAddress>
              <p>
                Resend verarbeitet dabei Ihre E-Mail-Adresse und den Nachrichteninhalt zum Zweck der Zustellung. Da Resend ein US-amerikanisches Unternehmen ist, findet eine Übermittlung in die USA statt. Diese erfolgt auf Grundlage des EU-US Data Privacy Frameworks (Art. 45 DSGVO) sowie EU-Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO). Mit Resend wurde ein Auftragsverarbeitungsvertrag (DPA) gemäß Art. 28 DSGVO geschlossen.
              </p>
            </Block>

            <Block num="6." title="Website-Analyse (Plausible Analytics)">
              <p>
                Diese Website nutzt Plausible Analytics — eine datenschutzfreundliche Analysesoftware ohne Cookies. Plausible speichert keine personenbezogenen Daten, keine vollständigen IP-Adressen und setzt keine Cookies. Die Server stehen ausschließlich in der Europäischen Union (Frankfurt am Main, Deutschland). Erfasst werden ausschließlich aggregierte, anonyme Nutzungsstatistiken (Seitenaufrufe, Verweildauer, Geräte-Typ, Land der Anfrage, Referrer). Eine Re-Identifikation einzelner Nutzer ist technisch ausgeschlossen.
              </p>
              <p style={{ marginTop: 12 }}>
                Anbieter: Plausible Insights OÜ, Västriku tn 2, 50403 Tartu, Estland. Mit dem Anbieter besteht ein Vertrag zur Auftragsverarbeitung gemäß Art. 28 DSGVO. Weitere Informationen zur Datenverarbeitung durch Plausible finden Sie unter{' '}
                <a href="https://plausible.io/data-policy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>
                  plausible.io/data-policy
                </a>.
              </p>
              <p style={{ marginTop: 12 }}>
                Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Verbesserung unserer Website). Da Plausible keine Cookies setzt und keine personenbezogenen Daten verarbeitet, ist ein Cookie-Banner nicht erforderlich (§ 25 Abs. 2 Nr. 2 TTDSG).
              </p>
            </Block>

            <Block num="7." title="Cookies">
              <p>
                Diese Website verwendet keine Cookies. Es werden weder technisch notwendige noch optionale Cookies gesetzt.
              </p>
            </Block>

            <Block num="8." title="Ihre Rechte als betroffene Person">
              <p>Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:</p>
              <ul style={{ paddingLeft: 22, margin: '0 0 14px' }}>
                <li><strong style={{ color: 'var(--text-primary)' }}>Auskunftsrecht</strong> (Art. 15 DSGVO)</li>
                <li><strong style={{ color: 'var(--text-primary)' }}>Recht auf Berichtigung</strong> (Art. 16 DSGVO)</li>
                <li><strong style={{ color: 'var(--text-primary)' }}>Recht auf Löschung</strong> (Art. 17 DSGVO)</li>
                <li><strong style={{ color: 'var(--text-primary)' }}>Recht auf Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO)</li>
                <li><strong style={{ color: 'var(--text-primary)' }}>Recht auf Datenübertragbarkeit</strong> (Art. 20 DSGVO)</li>
                <li><strong style={{ color: 'var(--text-primary)' }}>Widerspruchsrecht</strong> (Art. 21 DSGVO)</li>
              </ul>
              <p style={{ marginBottom: 0 }}>
                Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{' '}
                <a href="mailto:kontakt@drvnautomatisations.com" style={{ color: 'var(--accent)' }}>
                  kontakt@drvnautomatisations.com
                </a>
              </p>
            </Block>

            <Block num="9." title="Beschwerderecht bei der Aufsichtsbehörde">
              <p>Sie haben das Recht, sich bei der zuständigen Datenschutz-Aufsichtsbehörde zu beschweren (Art. 77 DSGVO):</p>
              <BoxedAddress>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Landesbeauftragter für den Datenschutz und die Informationsfreiheit Baden-Württemberg (LfDI BW)
                </strong><br />
                Lautenschlagerstraße 20, 70173 Stuttgart<br />
                <a href="mailto:poststelle@lfdi.bwl.de" style={{ color: 'var(--accent)' }}>poststelle@lfdi.bwl.de</a><br />
                <a
                  href="https://www.baden-wuerttemberg.datenschutz.de"
                  target="_blank" rel="noopener noreferrer"
                  style={{ color: 'var(--accent)' }}
                >
                  www.baden-wuerttemberg.datenschutz.de
                </a>
              </BoxedAddress>
            </Block>
          </motion.div>
        </div>
      </section>
    </>
  );
}

function Block({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 style={{
        fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700,
        color: 'var(--text-primary)', margin: 0, marginBottom: 14,
        letterSpacing: '-0.018em',
        display: 'flex', gap: 12, alignItems: 'baseline',
      }}>
        <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>{num}</span>
        <span>{title}</span>
      </h2>
      <div>{children}</div>
    </div>
  );
}

function BoxedAddress({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      padding: '14px 18px', margin: '12px 0',
      borderLeft: '2px solid var(--accent)',
      background: 'var(--surface)',
      borderRadius: '0 6px 6px 0',
      fontSize: '0.95rem', lineHeight: 1.6,
    }}>
      {children}
    </div>
  );
}
