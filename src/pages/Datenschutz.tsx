import { Container } from '../components/Container'
import { Eyebrow } from '../components/Eyebrow'

function Block({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-hairline pt-6 pb-2">
      <div className="flex items-baseline gap-3 mb-3">
        <span className="font-mono text-xs text-muted">{num}</span>
        <h2 className="font-sans font-medium text-base text-ink">{title}</h2>
      </div>
      <div className="font-sans text-sm text-secondary leading-[1.7] space-y-3">{children}</div>
    </div>
  )
}

export default function Datenschutz() {
  return (
    <main>
      <section className="pt-40 md:pt-56 pb-12">
        <Container>
          <Eyebrow>Rechtliches</Eyebrow>
          <h1 className="font-sans font-light text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[1.08] tracking-[-0.02em] text-ink mb-2">
            Datenschutzerklärung
          </h1>
          <p className="font-mono text-xs text-muted">Stand: Mai 2026</p>
        </Container>
      </section>

      <section className="border-t border-hairline py-12 md:py-16">
        <Container>
          <div className="max-w-[64ch] space-y-0">
            <Block num="1." title="Verantwortlicher">
              <p>Al-Khalil Aoumeur · Egilolfstrasse 41 · 70599 Stuttgart · E-Mail: <a href="mailto:kontakt@drvnautomatisations.com" className="underline hover:text-signal transition-colors">kontakt@drvnautomatisations.com</a></p>
            </Block>

            <Block num="2." title="Allgemeines">
              <p>Diese Website verwendet keine Tracking-Cookies und kein verhaltensbasiertes Tracking. Wir verarbeiten personenbezogene Daten nur soweit dies zur Bereitstellung unserer Dienste notwendig ist und eine Rechtsgrundlage nach Art. 6 DSGVO vorliegt.</p>
            </Block>

            <Block num="3." title="Hosting">
              <p>Server bei <strong className="text-ink">Hetzner Online GmbH</strong>, Industriestr. 25, 91710 Gunzenhausen, Deutschland. Server-Standort Frankfurt, keine Drittlandübertragung. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.</p>
              <p><a href="https://www.hetzner.com/de/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline hover:text-signal transition-colors">Datenschutzerklärung Hetzner</a></p>
            </Block>

            <Block num="4." title="Kontaktformular">
              <p>Verarbeitet werden: Name, E-Mail, Nachricht. Zweck: Bearbeitung Ihrer Anfrage. Rechtsgrundlage: Art. 6 Abs. 1 lit. b/f DSGVO. Speicherdauer: bis zur abschließenden Bearbeitung.</p>
            </Block>

            <Block num="5." title="E-Mail-Versand (Resend)">
              <p>Für den Versand technischer E-Mails nutzen wir <strong className="text-ink">Resend Inc.</strong>, 2261 Market Street #5039, San Francisco, CA 94114, USA. Datenübertragung in die USA auf Basis EU-US Data Privacy Framework + Standardvertragsklauseln. AVV gemäß Art. 28 DSGVO geschlossen.</p>
              <p><a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline hover:text-signal transition-colors">Datenschutzerklärung Resend</a></p>
            </Block>

            <Block num="6." title="Analyse (Plausible Analytics)">
              <p>Diese Website nutzt Plausible Analytics — cookiefrei, keine personenbezogenen Daten, keine vollständigen IP-Adressen. Server in Frankfurt. Anbieter: Plausible Insights OÜ, Estland. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO. Kein Cookie-Banner erforderlich (§ 25 Abs. 2 Nr. 2 TTDSG).</p>
              <p><a href="https://plausible.io/data-policy" target="_blank" rel="noopener noreferrer" className="underline hover:text-signal transition-colors">plausible.io/data-policy</a></p>
            </Block>

            <Block num="7." title="Cookies">
              <p>Diese Website verwendet keine Cookies.</p>
            </Block>

            <Block num="8." title="Ihre Rechte">
              <p>Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung (Art. 18), Datenübertragbarkeit (Art. 20), Widerspruch (Art. 21 DSGVO).</p>
              <p>Kontakt: <a href="mailto:kontakt@drvnautomatisations.com" className="underline hover:text-signal transition-colors">kontakt@drvnautomatisations.com</a></p>
            </Block>

            <Block num="9." title="Aufsichtsbehörde">
              <p>LfDI Baden-Württemberg · Lautenschlagerstraße 20 · 70173 Stuttgart · <a href="https://www.baden-wuerttemberg.datenschutz.de" target="_blank" rel="noopener noreferrer" className="underline hover:text-signal transition-colors">www.baden-wuerttemberg.datenschutz.de</a></p>
            </Block>
          </div>
        </Container>
      </section>
    </main>
  )
}
