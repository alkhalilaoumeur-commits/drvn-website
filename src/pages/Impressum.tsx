export default function Impressum() {
  return (
    <div className="pt-16">
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-bold mb-10">Impressum</h1>

        <div className="space-y-8 text-sm text-text-muted leading-relaxed">

          <div>
            <h2 className="text-base font-semibold text-text mb-2">Angaben gemäß § 5 TMG</h2>
            <p>Al-Khalil Aoumeur</p>
            <p>Egilolfstrasse 41</p>
            <p>70599 Stuttgart</p>
            <p>Deutschland</p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-text mb-2">Kontakt</h2>
            <p>Telefon: +49 176 20581564</p>
            <p>E-Mail: a.aoumeur@drvnautomatisations.com</p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-text mb-2">Umsatzsteuer-ID</h2>
            <p>
              Keine Umsatzsteuer-Identifikationsnummer (Kleinunternehmer gemäß § 19 UStG).
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-text mb-2">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p>Al-Khalil Aoumeur</p>
            <p>Egilolfstrasse 41, 70599 Stuttgart</p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-text mb-2">Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
              bereit:{' '}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              . Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
            <p className="mt-2">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-text mb-2">Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen
              Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir
              als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
              rechtswidrige Tätigkeit hinweisen.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-text mb-2">Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir
              keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine
              Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
              Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-text mb-2">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
              Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
              bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
