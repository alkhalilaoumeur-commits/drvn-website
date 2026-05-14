import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { fadeUp, viewport, easeOut } from '../lib/animations';

export default function Impressum() {
  return (
    <>
      <SEO
        title="Impressum"
        description="Impressum der drvn Website gemäß § 5 TMG."
        path="/impressum"
        noindex={true}
      />

      {/* Hero */}
      <section style={{ position: 'relative', paddingTop: 144, paddingBottom: 56, overflow: 'hidden' }}>
        <div className="hero-glow" style={{ height: 320, opacity: 0.5 }} />
        <div className="container-x" style={{ position: 'relative', maxWidth: 720 }}>
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
            style={{ margin: 0 }}
          >
            Impressum
          </motion.h1>
        </div>
      </section>

      {/* Content */}
      <section style={{ borderTop: '1px solid var(--border)', paddingBottom: 96 }}>
        <div className="container-x" style={{ paddingTop: 64, maxWidth: 720 }}>
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            style={{
              display: 'grid', gap: 32,
              fontFamily: 'var(--font-sans)', fontSize: '0.98rem',
              color: 'var(--text-secondary)', lineHeight: 1.7,
            }}
          >
            <Block title="Angaben gemäß § 5 TMG">
              Al-Khalil Aoumeur<br />
              Egilolfstrasse 41<br />
              70599 Stuttgart<br />
              Deutschland
            </Block>

            <Block title="Kontakt">
              Telefon: +49 176 20581564<br />
              E-Mail:{' '}
              <a href="mailto:kontakt@drvnautomatisations.com" style={{ color: 'var(--accent)' }}>
                kontakt@drvnautomatisations.com
              </a>
            </Block>

            <Block title="Umsatzsteuer-ID">
              Keine Umsatzsteuer-Identifikationsnummer (Kleinunternehmer gemäß § 19 UStG).
            </Block>

            <Block title="Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV">
              Al-Khalil Aoumeur<br />
              Egilolfstrasse 41, 70599 Stuttgart
            </Block>

            <Block title="Streitschlichtung">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--accent)' }}
              >
                https://ec.europa.eu/consumers/odr/
              </a>. Unsere E-Mail-Adresse finden Sie oben im Impressum.<br /><br />
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </Block>

            <Block title="Haftung für Inhalte">
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </Block>

            <Block title="Haftung für Links">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </Block>

            <Block title="Urheberrecht">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </Block>
          </motion.div>
        </div>
      </section>
    </>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 style={{
        fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700,
        color: 'var(--text-primary)', margin: 0, marginBottom: 10,
        letterSpacing: '-0.018em',
      }}>
        {title}
      </h2>
      <div>{children}</div>
    </div>
  );
}
