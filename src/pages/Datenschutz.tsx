export default function Datenschutz() {
  return (
    <div className="pt-16">
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-bold mb-2">Datenschutzerklärung</h1>
        <p className="text-text-muted text-sm mb-10">Stand: April 2026</p>

        <div className="space-y-10 text-sm text-text-muted leading-relaxed">

          {/* 1. Verantwortlicher */}
          <div>
            <h2 className="text-base font-semibold text-text mb-3">1. Verantwortlicher</h2>
            <p>
              Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
            </p>
            <div className="mt-2 pl-4 border-l border-border">
              <p>Al-Khalil Aoumeur</p>
              <p>Egilolfstrasse 41</p>
              <p>70599 Stuttgart, Deutschland</p>
              <p>E-Mail: a.aoumeur@drvnautomatisations.com</p>
            </div>
          </div>

          {/* 2. Allgemein */}
          <div>
            <h2 className="text-base font-semibold text-text mb-3">2. Allgemeines zur Datenverarbeitung</h2>
            <p>
              Wir nehmen den Schutz Ihrer persönlichen Daten ernst. Diese Website verwendet keine
              Tracking-Cookies und kein verhaltensbasiertes Tracking. Wir verarbeiten
              personenbezogene Daten nur soweit dies zur Bereitstellung unserer Dienste notwendig
              ist und eine Rechtsgrundlage nach Art. 6 DSGVO vorliegt.
            </p>
          </div>

          {/* 3. Hosting */}
          <div>
            <h2 className="text-base font-semibold text-text mb-3">3. Hosting</h2>
            <p>
              Diese Website wird gehostet bei:
            </p>
            <div className="mt-2 pl-4 border-l border-border">
              <p className="font-medium text-text">Hetzner Online GmbH</p>
              <p>Industriestr. 25, 91710 Gunzenhausen, Deutschland</p>
              <p>
                <a
                  href="https://www.hetzner.com/de/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Datenschutzerklärung Hetzner
                </a>
              </p>
            </div>
            <p className="mt-3">
              Der Server-Standort ist Deutschland. Es findet kein Transfer personenbezogener
              Daten in Drittländer außerhalb der EU/EWR statt. Rechtsgrundlage: Art. 6 Abs. 1
              lit. f DSGVO (berechtigtes Interesse an der Bereitstellung der Website).
            </p>
          </div>

          {/* 4. Kontaktformular */}
          <div>
            <h2 className="text-base font-semibold text-text mb-3">4. Kontaktformular</h2>
            <p>
              Wenn Sie uns über unser Kontaktformular kontaktieren, werden folgende Daten
              verarbeitet:
            </p>
            <ul className="mt-2 ml-4 list-disc space-y-1">
              <li>Name</li>
              <li>E-Mail-Adresse</li>
              <li>Firma (optional)</li>
              <li>Ihre Nachricht</li>
            </ul>
            <p className="mt-3">
              <strong className="text-text">Zweck:</strong> Bearbeitung Ihrer Anfrage und
              Kontaktaufnahme.
            </p>
            <p className="mt-1">
              <strong className="text-text">Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO
              (vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
              Interesse).
            </p>
            <p className="mt-1">
              <strong className="text-text">Speicherdauer:</strong> Ihre Daten werden nach
              abschließender Bearbeitung Ihrer Anfrage gelöscht, sofern keine gesetzlichen
              Aufbewahrungspflichten bestehen.
            </p>
          </div>

          {/* 5. E-Mail-Versand / Resend */}
          <div>
            <h2 className="text-base font-semibold text-text mb-3">5. E-Mail-Versand (Resend)</h2>
            <p>
              Für den technischen Versand von E-Mails, die über das Kontaktformular ausgelöst
              werden, nutzen wir den Dienst Resend:
            </p>
            <div className="mt-2 pl-4 border-l border-border">
              <p className="font-medium text-text">Resend Inc.</p>
              <p>2261 Market Street #5039, San Francisco, CA 94114, USA</p>
              <p>
                <a
                  href="https://resend.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Datenschutzerklärung Resend
                </a>
              </p>
            </div>
            <p className="mt-3">
              Resend verarbeitet dabei Ihre E-Mail-Adresse und den Nachrichteninhalt zum Zweck
              der Zustellung. Da Resend ein US-amerikanisches Unternehmen ist, findet eine
              Übermittlung in die USA statt. Diese erfolgt auf Grundlage des EU-US Data Privacy
              Frameworks (Art. 45 DSGVO) sowie EU-Standardvertragsklauseln (Art. 46 Abs. 2
              lit. c DSGVO). Mit Resend wurde ein Auftragsverarbeitungsvertrag (DPA) gemäß
              Art. 28 DSGVO geschlossen.
            </p>
          </div>

          {/* 6. Analyse / Plausible */}
          <div>
            <h2 className="text-base font-semibold text-text mb-3">6. Website-Analyse (Plausible Analytics)</h2>
            <p>
              Diese Website nutzt Plausible Analytics — eine datenschutzfreundliche
              Analysesoftware ohne Cookies. Plausible speichert keine personenbezogenen Daten,
              keine IP-Adressen und setzt keine Cookies. Die Analyse-Instanz wird auf unserem
              eigenen Server in Deutschland betrieben. Es findet kein Transfer von Daten an
              Dritte statt.
            </p>
            <p className="mt-2">
              Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der
              Verbesserung unserer Website). Ein Cookie-Banner ist nicht erforderlich.
            </p>
          </div>

          {/* 7. Keine Cookies */}
          <div>
            <h2 className="text-base font-semibold text-text mb-3">7. Cookies</h2>
            <p>
              Diese Website verwendet keine Cookies. Es werden weder technisch notwendige noch
              optionale Cookies gesetzt.
            </p>
          </div>

          {/* 8. Rechte */}
          <div>
            <h2 className="text-base font-semibold text-text mb-3">8. Ihre Rechte als betroffene Person</h2>
            <p>Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:</p>
            <ul className="mt-2 ml-4 list-disc space-y-1">
              <li><strong className="text-text">Auskunftsrecht</strong> (Art. 15 DSGVO)</li>
              <li><strong className="text-text">Recht auf Berichtigung</strong> (Art. 16 DSGVO)</li>
              <li><strong className="text-text">Recht auf Löschung</strong> (Art. 17 DSGVO)</li>
              <li><strong className="text-text">Recht auf Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO)</li>
              <li><strong className="text-text">Recht auf Datenübertragbarkeit</strong> (Art. 20 DSGVO)</li>
              <li><strong className="text-text">Widerspruchsrecht</strong> (Art. 21 DSGVO)</li>
            </ul>
            <p className="mt-3">
              Zur Ausübung Ihrer Rechte wenden Sie sich bitte an: kontakt@drvnautomatisations.com
            </p>
          </div>

          {/* 9. Beschwerderecht */}
          <div>
            <h2 className="text-base font-semibold text-text mb-3">9. Beschwerderecht bei der Aufsichtsbehörde</h2>
            <p>
              Sie haben das Recht, sich bei der zuständigen Datenschutz-Aufsichtsbehörde zu
              beschweren (Art. 77 DSGVO):
            </p>
            <div className="mt-2 pl-4 border-l border-border">
              <p className="font-medium text-text">
                Landesbeauftragter für den Datenschutz und die Informationsfreiheit
                Baden-Württemberg (LfDI BW)
              </p>
              <p>Lautenschlagerstraße 20, 70173 Stuttgart</p>
              <p>poststelle@lfdi.bwl.de</p>
              <p>
                <a
                  href="https://www.baden-wuerttemberg.datenschutz.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  www.baden-wuerttemberg.datenschutz.de
                </a>
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
