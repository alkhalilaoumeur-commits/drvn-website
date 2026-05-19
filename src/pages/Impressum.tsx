import { Container } from '../components/Container'
import { Eyebrow } from '../components/Eyebrow'

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-hairline pt-6 pb-2">
      <h2 className="font-sans font-medium text-base text-ink mb-3">{title}</h2>
      <div className="font-sans text-sm text-secondary leading-[1.7]">{children}</div>
    </div>
  )
}

export default function Impressum() {
  return (
    <main>
      <section className="pt-40 md:pt-56 pb-12">
        <Container>
          <Eyebrow>Rechtliches</Eyebrow>
          <h1 className="font-sans font-light text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[1.08] tracking-[-0.02em] text-ink">
            Impressum
          </h1>
        </Container>
      </section>

      <section className="border-t border-hairline py-12 md:py-16">
        <Container>
          <div className="max-w-[60ch] space-y-0">
            <Block title="Angaben gemäß § 5 TMG">
              <p>Al-Khalil Aoumeur</p>
              <p>Egilolfstrasse 41</p>
              <p>70599 Stuttgart</p>
              <p>Deutschland</p>
            </Block>

            <Block title="Kontakt">
              <p>Telefon: +49 176 20581564</p>
              <p>
                E-Mail:{' '}
                <a href="mailto:kontakt@drvnautomatisations.com" className="underline hover:text-signal transition-colors">
                  kontakt@drvnautomatisations.com
                </a>
              </p>
            </Block>

            <Block title="Umsatzsteuer-ID">
              <p>Keine Umsatzsteuer-Identifikationsnummer (Kleinunternehmer gemäß § 19 UStG).</p>
            </Block>

            <Block title="Verantwortlich für journalistisch-redaktionelle Inhalte nach § 18 Abs. 2 MStV">
              <p>Al-Khalil Aoumeur, Egilolfstrasse 41, 70599 Stuttgart</p>
            </Block>

            <Block title="Verbraucherstreitbeilegung / Universalschlichtungsstelle">
              <p>Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen (§ 36 VSBG).</p>
            </Block>

            <Block title="Haftung für Inhalte">
              <p>Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.</p>
            </Block>

            <Block title="Urheberrecht">
              <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des Autors.</p>
            </Block>
          </div>
        </Container>
      </section>
    </main>
  )
}
