# DRVN Website — Todos & Ideen
_Letzte Aktualisierung: 2026-04-23_

---

## 🔴 SOFORT — Conversion-kritisch (fehlt, kostet täglich Leads)

### 1. Problem-Section vor den Features einbauen
**Warum:** Besucher kaufen keine Features — sie kaufen Schmerzlinderung. Die Seite springt direkt zu Features ohne vorher den Schmerz zu adressieren. Conversion stirbt hier.

**Was konkret:**
- Section mit Titel: *"Kennen Sie das?"* oder *"So läuft es heute — und das kostet Sie täglich"*
- 3–4 konkrete Schmerz-Szenarien als Cards oder Liste:
  - "Gäste rufen an um zu reservieren — Sie tippen alles von Hand ein"
  - "Bestellungen kommen auf Zetteln — die Küche versteht sie nicht"
  - "Sie wissen am Abend nicht wie viel Sie heute verdient haben"
  - "Ihr bester Kellner plant Dienste per WhatsApp-Gruppe"
- Darunter direkt: *"ServeFlow löst das — in 30 Minuten."*
- Framework: PAS — Problem → Agitate → Solve
- [ ] Problem-Section zwischen Hero und Trust-Bar einfügen (`ServeFlow.tsx`)

---

### 2. Testimonials / Social Proof Section
**Warum:** 72% der B2B-Käufer lesen Bewertungen bevor sie kaufen. Aktuell: keine einzige. Das ist der stärkste Conversion-Killer auf der Seite.

**Was konkret:**
- 2–3 echte Zitate von Beta-Testern / frühen Kunden (auch Bekannte aus der Gastronomie)
- Format: Foto (oder Initialen-Avatar), Name, Restaurant, kurzes Zitat + konkrete Zahl
  - Beispiel: *"Seit ServeFlow sparen wir 6 Stunden pro Woche. Die Bestellzettel fehlen mir nicht."* — Marco R., Trattoria Bella, Stuttgart
- Sterne-Rating (5/5) prominent anzeigen
- Falls noch keine echten: "Beta-Tester gesucht" mit Gratis-Zugang für 3 Monate im Tausch gegen Testimonial
- [ ] Testimonials-Section nach Feature-Grid einbauen (`ServeFlow.tsx`)
- [ ] 3 Beta-Restaurants für Testimonials gewinnen (Cold Outreach / Netzwerk)

---

### 3. ROI-Kalkulator einbauen
**Warum:** Deutscher Mittelstand kauft auf Zahlen. "Spart Zeit" überzeugt nicht — "8,3h × 15€ × 52 = 6.468€/Jahr" schon.

**Was konkret:**
- Interaktiver Rechner mit 3 Eingabefeldern:
  - "Wie viele Tische hat Ihr Restaurant?" → Slider 5–100
  - "Wie viele Stunden verbringen Sie pro Woche mit manuellen Aufgaben?" → Slider 1–20
  - "Was kostet eine Arbeitsstunde in Ihrem Betrieb?" → Eingabe (Default: 15€)
- Ausgabe: *"Sie verlieren X€/Jahr durch manuelle Prozesse. ServeFlow kostet Sie Y€/Jahr."*
- CTA direkt unter dem Kalkulator
- [ ] `KostenRechner.tsx` Komponente bauen
- [ ] In ServeFlow-Seite zwischen Preisen und FAQ einbauen

---

### 4. "In 3 Schritten live" Onboarding-Visualisierung
**Warum:** "30 Minuten startklar" steht im Hero — aber wie? Unklarheit = kein Kauf. Zeigen was passiert.

**Was konkret:**
- Horizontale 3-Step Timeline:
  1. **Konto anlegen** (2 Min) — Firmenname, Email, Passwort
  2. **Speisekarte erstellen** (15 Min) — Kategorien, Gerichte, Preise
  3. **QR-Codes drucken** (5 Min) — Tische zuweisen, PDF herunterladen
- Unter jedem Schritt: Icons, kurze Erklärung, Zeit-Badge
- Optional: Animierter Fortschrittsbalken
- [ ] `OnboardingSchritte.tsx` Komponente bauen
- [ ] Nach Hero oder nach Features einbauen

---

### 5. Sticky CTA in der Navbar
**Warum:** Wenn der Besucher scrollt und überzeugt ist — wo klickt er? Die Navbar hat keinen CTA-Button. Conversion-Verlust auf jedem Scroll-Level.

**Was konkret:**
- Navbar bekommt rechts einen Button: *"14 Tage kostenlos"* (blau, klein)
- Erst nach 200px Scroll sichtbar (Fade-in) — stört nicht im Hero-Bereich
- Auf Mobile: Floating Button unten rechts (nicht störend aber immer sichtbar)
- [ ] Sticky CTA in `Navbar.tsx` einbauen mit `useScrollY` Hook

---

### 6. Demo-Buchungs-Kalender statt nur Kontaktformular
**Warum:** "Kontakt aufnehmen" ist zu passiv. Gastronomen wollen keine E-Mail schreiben — sie wollen sofort sehen. Ein Buchungslink nimmt Reibung raus.

**Was konkret:**
- Calendly oder Cal.com (kostenlos) einbetten oder verlinken
- Text: *"Buchen Sie eine 20-Minuten Live-Demo — wir richten ServeFlow live für Ihr Restaurant ein"*
- Alternative: WhatsApp-Link `wa.me/49...` mit vorgeschriebenem Text: *"Hallo, ich möchte ServeFlow für mein Restaurant testen"*
- [ ] Kontakt-Seite um Demo-Buchungs-Option erweitern (`Kontakt.tsx`)
- [ ] WhatsApp-Direktlink in Kontakt + Footer einbauen

---

## 🟡 WICHTIG — Trust & Differenzierung

### 7. Konkurrenz-Vergleichstabelle
**Warum:** Gastronovi, Lightspeed, get-sides sind bekannte Namen. Besucher googeln immer "Vergleich". Wer den Vergleich selbst auf der eigenen Seite zeigt, kontrolliert die Wahrnehmung.

**Was konkret:**
- Tabelle: ServeFlow vs. Gastronovi vs. get-sides vs. "Excel/Zettel"
- Zeilen: Preis, DSGVO, Setup-Zeit, QR-Bestellung, Reservierungen, Support in DE, Vertragslaufzeit
- ServeFlow-Spalte immer grün — Konkurrenten realistisch (nicht lügen, aber Stärken betonen)
- Überschrift: *"Warum Restaurants zu ServeFlow wechseln"*
- [ ] Vergleichstabelle als neue Section in `ServeFlow.tsx` einbauen
- [ ] Konkurrenten-Daten recherchieren (Preisseiten von Gastronovi, get-sides)

---

### 8. "Geld-zurück-Garantie" oder Risiko-Umkehrung
**Warum:** Deutscher Mittelstand hat Angst vor Fehlkäufen. Risiko-Umkehrung ist eine der stärksten Conversion-Hebel.

**Was konkret:**
- 30-Tage Geld-zurück-Garantie einführen (wenn nicht zufrieden, volle Rückerstattung)
- Als Badge/Shield-Icon prominent auf der Preisseite
- Text: *"Wenn ServeFlow in den ersten 30 Tagen nicht das hält was wir versprechen — Geld zurück, keine Fragen."*
- [ ] Garantie-Badge in Preissektion einbauen
- [ ] AGB entsprechend formulieren (Ilias muss das juristisch freigeben)

---

### 9. Feature-Deep-Dives mit Screenshots
**Warum:** Feature-Karten mit Icon + 2 Sätzen überzeugen Power-User nicht. Wer ernsthaft evaluiert will sehen wie es aussieht.

**Was konkret:**
- Für die 3 wichtigsten Features (QR-Bestellung, Reservierung, Dashboard) je eine eigene Sektion:
  - Links: Feature-Beschreibung mit Bullet-Points was genau passiert
  - Rechts: Screenshot / Mockup der echten App
  - Abwechselnd (Bild links/rechts) für visuellen Rhythmus
- Screenshots aus der echten App machen (Staging-Demo)
- [ ] 3 Feature-Deep-Dive Sektionen in `ServeFlow.tsx` einbauen
- [ ] Screenshots von der Demo machen und als Assets speichern

---

### 10. Produziertes Demo-Video (Loom / Screen-Recording)
**Warum:** Video-Seiten konvertieren 80% besser. Eine 2-Min Screencast-Demo kostet 0€ und ist mächtiger als jeder Text.

**Was konkret:**
- Loom-Recording (kostenlos): 2–3 Minuten durch die App führen
  - "Das ist das Dashboard..." → "So scannt ein Gast den QR-Code..." → "So sieht die Küche die Bestellung..."
- Embed in die Seite (Section: "Sehen Sie 2 Minuten zu")
- Thumbnail mit Play-Button, dahinter Loom-Embed
- Nicht professionell muss es sein — echt und nahbar wirkt besser
- [ ] Loom-Demo aufnehmen (Ilias)
- [ ] Video-Embed Section in `ServeFlow.tsx` einbauen

---

### 11. "Founder-Notiz" Section
**Warum:** Deutsche kaufen von Menschen. Ilias als Gründer ist der stärkste Trust-Faktor. Eine kurze persönliche Nachricht schlägt jedes Marketing-Copy.

**Was konkret:**
- Kleiner Block, handschriftlicher Stil oder Foto + Zitat:
  - *"Ich habe ServeFlow gebaut weil ein Restaurantbesitzer aus meinem Netzwerk mir gezeigt hat wie er jeden Abend 2 Stunden mit Zettelwirtschaft verbringt. Das ist unnötig — und behebbar. — Ilias, Gründer von DRVN"*
- Unterschrift-Font oder Foto + Name + Rolle
- [ ] Founder-Section in `ServeFlow.tsx` einbauen (zwischen FAQ und Final-CTA)

---

## 🟢 SEO & Content — Langfristig wachsen

### 12. Eigene ServeFlow-Domain / Subdomain
**Warum:** SEO-Signal. `drvnautomatisations.com/produkte/serveflow` ist schwach. `serveflow.de` oder `app.serveflow.de` ist stärker für Branded Search.

**Was konkret:**
- `serveflow.de` kaufen (wenn verfügbar) → Landing Page direkt dort
- Oder: `serveflow.drvnautomatisations.com` als Subdomain mit separaten SEO-Signalen
- [ ] `serveflow.de` Verfügbarkeit prüfen (united-domains.de)
- [ ] Domain-Strategie entscheiden: eigene Domain vs. Subdomain

---

### 13. Programmatische SEO-Seiten: Städte × Feature
**Warum:** "Restaurant Software München" hat monatlich ~500 Suchanfragen. Niemand kämpft darum. Serveflow könnte 50+ Städteseiten in einem Tag generieren.

**Was konkret:**
- Template-Seite: `serveflow.de/restaurant-software/[stadt]`
- Städte: München, Berlin, Hamburg, Stuttgart, Köln, Frankfurt, Düsseldorf, Leipzig, Dresden, Nürnberg... (Top-50)
- Jede Seite: H1 mit Stadtname, lokale Signale ("beliebt in Bayern"), gleicher Inhalt + Stadtname als Variable
- Technisch: JSON-Array mit Städten → `getStaticPaths` in Next.js ODER einfache Route in React Router
- [ ] 50 Städte in `lib/staedte.ts` definieren
- [ ] Template-Seite `RestaurantSoftwareStadt.tsx` bauen
- [ ] Routes in `App.tsx` registrieren (`/restaurant-software/:stadt`)
- [ ] Sitemap.xml generieren und in Google Search Console einreichen

---

### 14. Blog / Content-Hub: 5 SEO-Artikel
**Warum:** Organischer Traffic compoundt. Jeder gute Artikel arbeitet 3 Jahre lang ohne Kosten.

**Ideen für erste 5 Artikel (hoher Suchvolumen, niedrige Konkurrenz):**
1. *"Kassensystem Restaurant: Was kostet es wirklich 2026?"* (informational, Vergleich)
2. *"QR-Code Speisekarte Restaurant: Vor- und Nachteile"* (Problem-aware Suche)
3. *"DSGVO für Restaurants: Was Gastronomen wissen müssen"* (Angst-Trigger, Lead-Magnet)
4. *"Tischreservierungssystem: Die 5 besten für kleine Restaurants"* (Commercial intent)
5. *"Digitale Speisekarte erstellen: Schritt-für-Schritt-Anleitung"* (How-to, Anfänger)

**Umsetzung:**
- [ ] `Blog.tsx` Seite erstellen mit Liste aller Artikel
- [ ] `BlogArtikel.tsx` Template für einzelne Artikel
- [ ] Ersten Artikel schreiben: "Kassensystem Restaurant 2026" (1.500 Wörter)
- [ ] Blog-Link in Navbar und Footer einbauen

---

### 15. Lead-Magnet: DSGVO-Checkliste für Restaurants (PDF)
**Warum:** Gastronomen haben Angst vor DSGVO-Bußgeldern. Eine kostenlose Checkliste:
- Liefert sofortigen Wert → Vertrauen entsteht
- Baut Email-Liste auf → Follow-up möglich
- Positioniert ServeFlow als DSGVO-Experten

**Was konkret:**
- 1-seitige PDF: "DSGVO-Checkliste für Restaurants 2026" (10 Punkte)
- Hinter einem einfachen Formular: Name + Email → PDF-Download
- Follow-up-Email automatisch: "Übrigens — ServeFlow ist DSGVO-konform by design..."
- [ ] DSGVO-Checkliste als PDF erstellen
- [ ] Formular-Section auf ServeFlow-Seite oder eigene Landing Page

---

## 🔵 UX & Design — Seite polieren

### 16. Scroll-Animationen
**Warum:** Die Seite fühlt sich statisch an. Moderne SaaS-Seiten nutzen Fade-in on Scroll für Energie und Hochwertigkeit.

**Was konkret:**
- Framer Motion ist bereits in der App installiert
- Sections faden beim Reinscollen ein (`initial: opacity 0, y 20` → `animate: opacity 1, y 0`)
- Staggered Animation für Feature-Grid und Pricing-Cards
- [ ] Framer Motion `motion.div` auf alle Sections in `ServeFlow.tsx` anwenden

---

### 17. Mobile-Optimierung prüfen
**Warum:** 60–70% der Gastronomen schauen auf dem Handy. Dashboard-Mockup und Feature-Grid könnten auf Mobile zerbrechen.

**Was konkret:**
- Alle Breakpoints auf iPhone 14 (390px) testen
- Dashboard-Mockup auf Mobile kleiner/scrollbar machen
- Pricing-Grid: auf Mobile single-column sicherstellen
- Navbar: Hamburger-Menü funktioniert?
- [ ] Alle Sections auf 390px testen (Chrome DevTools)
- [ ] Mobile-Bugs fixen

---

### 18. Page Speed optimieren
**Warum:** Google bewertet Ladezeit. Mehr als 3 Sekunden → 40% Absprung.

**Was konkret:**
- Bilder als WebP, nicht PNG/JPG
- Lazy Loading für Screenshots und Mockups
- Fonts: `font-display: swap` sicherstellen
- Vite Bundle-Analyse: `vite-bundle-visualizer` ausführen
- [ ] Lighthouse-Check durchführen (`npx lighthouse URL`)
- [ ] Score über 90 bringen (Performance, SEO, Accessibility)

---

### 19. Mehrsprachigkeit: DE + EN Toggle
**Warum:** Internationale Restaurants in DE (Italiener, Griechen, Türken) sprechen oft kein perfektes Deutsch. Eine EN-Option öffnet 30% mehr Zielgruppe.

**Was konkret:**
- Einfache Implementierung: `i18next` + JSON-Dateien für DE/EN
- Toggle in der Navbar: 🇩🇪 / 🇬🇧
- Erstmal nur ServeFlow-Seite übersetzen (Landing Page)
- [ ] `i18next` installieren und konfigurieren
- [ ] Alle Texte in `de.json` extrahieren
- [ ] `en.json` übersetzen (kann Claude machen)

---

## 🟣 Marketing-Infrastruktur

### 20. Google Analytics 4 + Search Console
**Warum:** Ohne Tracking weißt du nicht woher Besucher kommen und welche Sections gelesen werden.

**Was konkret:**
- Google Analytics 4: kostenloses Tracking-Script einbinden
- Google Search Console: Domain verifizieren, Sitemap einreichen
- Goal: Klick auf "14 Tage kostenlos" als Conversion tracken
- [ ] GA4 Property anlegen und Script-Tag einbinden
- [ ] Search Console einrichten + Sitemap.xml generieren

---

### 21. Cookie-Banner (DSGVO-Pflicht!)
**Warum:** Ohne Cookie-Banner und Datenschutzerklärung drohen Abmahnungen. GA4 ist ohne Einwilligung in DE illegal.

**Was konkret:**
- Einfacher Cookie-Banner: "Diese Seite verwendet Cookies für Analytics."
- Zwei Buttons: "Akzeptieren" + "Ablehnen"
- GA4 nur laden wenn akzeptiert
- [ ] `CookieBanner.tsx` Komponente bauen
- [ ] In `App.tsx` einbinden
- [ ] GA4 hinter Cookie-Einwilligung schalten

---

### 22. Open Graph / Social Preview Tags
**Warum:** Wenn jemand den Link in WhatsApp oder LinkedIn teilt — sieht er eine Vorschau. Aktuell wahrscheinlich: leeres Bild + falscher Titel.

**Was konkret:**
- `og:title`, `og:description`, `og:image` (1200×630px Bild erstellen)
- Für ServeFlow: eigenes Preview-Bild mit Screenshot + Logo
- [ ] OG-Tags in `SEO.tsx` Komponente erweitern
- [ ] Preview-Bild `serveflow-og.png` erstellen (Figma oder Canva)

---

### 23. Exit-Intent Popup (optional, aber effektiv)
**Warum:** 95% verlassen die Seite ohne Kontakt. Exit-Intent fängt 5–10% davon auf.

**Was konkret:**
- Wenn Maus nach oben bewegt (= Tab schließen absicht) → kleines Modal
- Text: *"Kurz bevor Sie gehen — 14 Tage kostenlos, keine Kreditkarte."*
- Oder: Lead-Magnet anbieten: *"Gratis: DSGVO-Checkliste für Restaurants"*
- [ ] Exit-Intent Hook bauen (`useExitIntent.ts`)
- [ ] Modal Komponente bauen (`ExitIntentModal.tsx`)

---

## Prioritäten-Matrix (Reihenfolge für Umsetzung)

| Priorität | Task | Aufwand | Impact |
|---|---|---|---|
| 🔴 1 | Problem-Section einbauen | 1h | Hoch |
| 🔴 2 | Sticky CTA Navbar | 30min | Hoch |
| 🔴 3 | Onboarding-Schritte visualisieren | 1h | Hoch |
| 🔴 4 | Testimonials (auch Beta-Zitate) | 2h | Sehr hoch |
| 🔴 5 | ROI-Kalkulator | 3h | Sehr hoch |
| 🟡 6 | Feature Deep-Dives mit Screenshots | 4h | Hoch |
| 🟡 7 | Loom Demo-Video aufnehmen | 30min | Sehr hoch |
| 🟡 8 | Konkurrenz-Vergleichstabelle | 2h | Mittel |
| 🟡 9 | Garantie-Badge Preissektion | 30min | Mittel |
| 🟡 10 | Founder-Notiz Section | 30min | Hoch |
| 🟢 11 | Scroll-Animationen | 1h | Mittel |
| 🟢 12 | Mobile-Optimierung prüfen | 2h | Hoch |
| 🟢 13 | GA4 + Search Console | 1h | Mittel |
| 🟢 14 | Cookie-Banner | 2h | Pflicht |
| 🟢 15 | OG-Tags + Preview-Bild | 1h | Mittel |
| 🔵 16 | Blog: erster Artikel | 4h | Langfristig hoch |
| 🔵 17 | Städte-SEO-Seiten | 3h | Langfristig hoch |
| 🔵 18 | Lead-Magnet DSGVO-PDF | 2h | Mittel |
| 🔵 19 | Demo-Buchungs-Kalender | 1h | Mittel |
| 🔵 20 | Exit-Intent Popup | 2h | Mittel |
