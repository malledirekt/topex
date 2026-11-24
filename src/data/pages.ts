// Inhalte aller Unterseiten – hier Texte pflegen.
export type Section = { title?: string; text?: string; bullets?: string[] };
export type SubPage = {
  slug: string;
  nav: string;        // Label in der Navigation
  title: string;      // H1
  claim: string;      // Untertitel
  intro: string;      // Einleitungsabsatz
  image?: string;     // optionales Lead-Bild
  visual?: 'etikettiersysteme' | 'lasertechnik' | 'rfid' | 'etiketten'; // SVG-Grafik statt Foto
  gallery?: { src: string; caption: string }[];
  modules?: { title: string; img: string; text: string }[];
  certs?: { label: string; img: string; pdf: string }[];
  form?: 'reparatur'; // Formular auf der Seite einblenden
  sections: Section[];
};

/* ---------------- PRODUKTE ----------------
   Seit Nov. 2026 keine Produktseiten mehr: topex-systems bietet nur noch Service und Ersatzteile.
   Etiketten & Transferfolien laufen über die Partnerfirma Buday (Link in src/data/site.ts).
   Die früheren Produkt- und Unternehmensseiten liegen im Ordner _backup-vollsortiment-2026-11-19. */
export const productPages: SubPage[] = [];

/* ---------------- BRANCHEN ---------------- */
export const industryPages: SubPage[] = [
  {
    slug: 'automotive',
    nav: 'Automotive',
    title: 'Automotive',
    claim: 'Bauteil- und Typenschildkennzeichnung direkt in der Linie.',
    intro:
      'In der Automobilindustrie müssen Bauteile eindeutig, dauerhaft und prozesssicher gekennzeichnet werden. Wir liefern Etikettier-, Laser- und RFID-Systeme, die sich nahtlos in Fertigungs- und Montagelinien integrieren.',
    image: '/img/branche-karosserie.webp',
    gallery: [
      { src: '/img/Karosseriekennzeichnung_klein.jpg', caption: 'Karosseriekennzeichnung' },
      { src: '/img/branche-sensor.webp', caption: 'Sensor- & Steuergerätekennzeichnung' },
      { src: '/img/Kennzeichnung-Abstandsregeltempomat_klein.jpg', caption: 'Abstandsregeltempomat' },
    ],
    sections: [{ title: 'Typische Anwendungen', bullets: ['Karosseriekennzeichnung', 'Typenschildbeschriftung', 'Kennzeichnung von Sensoren und Steuergeräten', 'Rückverfolgbarkeit sicherheitsrelevanter Teile'] }],
  },
  {
    slug: 'e-mobilitaet',
    nav: 'E-Mobilität',
    title: 'E-Mobilität',
    claim: 'Rückverfolgbare Kennzeichnung von Batterie- und Antriebskomponenten.',
    intro:
      'Für Batteriezellen, Module und Antriebskomponenten ist eine lückenlose, beständige Kennzeichnung entscheidend. Unsere Systeme sorgen für sichere Identifikation über den gesamten Lebenszyklus.',
    sections: [{ title: 'Typische Anwendungen', bullets: ['Kennzeichnung von Batteriemodulen und -zellen', 'Beständige Laserbeschriftung', 'RFID-Tracking in der Produktion', 'Hochtemperaturbeständige Etiketten'] }],
  },
  {
    slug: 'industrieanwendungen',
    nav: 'Industrieanwendungen',
    title: 'Industrieanwendungen',
    claim: 'Systemlösungen für Fertigung und Montage.',
    intro:
      'Überall dort, wo in der Fertigung und Montage automatisiert gekennzeichnet wird, liefern wir das passende System – inklusive Integration und Verbrauchsmaterial aus einer Hand.',
    sections: [{ title: 'Typische Anwendungen', bullets: ['Automatisiertes Etikettieren in der Linie', 'Laserbeschriftung von Metall und Kunststoff', 'Sondermaschinen nach Anforderung', 'Anbindung an SPS- und PC-Steuerungen'] }],
  },
  {
    slug: 'pharma-diagnostik',
    nav: 'Pharma & Diagnostik',
    title: 'Pharma & Diagnostik',
    claim: 'Präzise, prozesssichere Kennzeichnung für sensible Produkte.',
    intro:
      'In Pharma und Diagnostik zählen Präzision, Nachvollziehbarkeit und Prozesssicherheit. Unsere Systeme kennzeichnen zuverlässig und erfüllen hohe Qualitätsanforderungen.',
    sections: [{ title: 'Typische Anwendungen', bullets: ['Kennzeichnung von Diagnostik-Verbrauchsmaterial', 'Serialisierung und Rückverfolgbarkeit', 'Funktionsetiketten und Smart Labels', 'Präzise Etikettierung kleiner Formate'] }],
  },
  {
    slug: 'logistik-verpackung',
    nav: 'Logistik & Verpackung',
    title: 'Logistik & Verpackung',
    claim: 'Etikettieren im Takt – zuverlässig und lesbar.',
    intro:
      'In Logistik und Verpackung müssen Packstücke, Paletten und Transportträger schnell und fehlerfrei gekennzeichnet werden. Unsere Etikettier- und RFID-Systeme halten den Takt.',
    image: '/img/branche-logistik.webp',
    sections: [{ title: 'Typische Anwendungen', bullets: ['Paletten- und Packstückkennzeichnung', 'RFID-Erfassung entlang der Lieferkette', 'Barcode- und 2D-Code-Etikettierung', 'Print-&-Apply-Lösungen'] }],
  },
  {
    slug: 'transport',
    image: '/img/transport.jpg',
    nav: 'Transport',
    title: 'Transport',
    claim: 'Robuste Kennzeichnung für raue Einsatzbedingungen.',
    intro:
      'Transport und Außeneinsatz stellen hohe Anforderungen an Beständigkeit. Wir liefern Kennzeichnungslösungen, die auch unter rauen Bedingungen dauerhaft lesbar bleiben.',
    sections: [{ title: 'Typische Anwendungen', bullets: ['Witterungsbeständige Etiketten', 'Laserbeschriftung für lange Lebensdauer', 'RFID für Transportträger', 'Beständigkeit gegen Chemikalien und Abrieb'] }],
  },
  {
    slug: 'defence',
    nav: 'Defence',
    title: 'Defence',
    claim: 'Dauerhafte, normgerechte Identifikation.',
    intro:
      'Im Defence-Bereich ist eine dauerhafte, normgerechte und fälschungssichere Kennzeichnung gefordert. Unsere Laser- und Etikettiersysteme erfüllen höchste Beständigkeitsanforderungen.',
    sections: [{ title: 'Typische Anwendungen', bullets: ['Normgerechte Typenschildbeschriftung', 'Fälschungssichere Kennzeichnung', 'Beständige Laserbeschriftung von Metall', 'Rückverfolgbarkeit kritischer Komponenten'] }],
  },
  {
    slug: 'erneuerbare-energien',
    nav: 'Erneuerbare Energien',
    title: 'Erneuerbare Energien',
    claim: 'Kennzeichnung für Komponenten mit langer Lebensdauer.',
    intro:
      'Komponenten für erneuerbare Energien sind über Jahrzehnte im Einsatz. Unsere beständigen Kennzeichnungslösungen bleiben über die gesamte Lebensdauer lesbar.',
    sections: [{ title: 'Typische Anwendungen', bullets: ['Kennzeichnung von Wechselrichtern und Modulen', 'UV- und witterungsbeständige Etiketten', 'Laserbeschriftung für Langlebigkeit', 'Rückverfolgbarkeit von Bauteilen'] }],
  },
];

/* ---------------- SERVICE ---------------- */
export const servicePages: SubPage[] = [
  {
    slug: 'support',
    nav: 'Support',
    title: 'Support',
    claim: 'Service, der überzeugt.',
    intro:
      'Unser Service-Team unterstützt Sie bei Störungen und bei allen Fragen rund um Betrieb, Wartung und Optimierung Ihrer Kennzeichnungssysteme – schnell, kompetent und mit System-Know-how.',
    sections: [
      { title: 'Unser Angebot', bullets: ['Technische Hotline und Fernunterstützung', 'Schnelle Reaktion bei Störungen und Ausfällen', 'Wartung und Instandhaltung', 'Reparatur eingesendeter Geräte'] },
      { title: 'Schulungen', text: 'Wartungs-, Software- und Anwenderschulungen machen Ihre Mitarbeiter fit für den sicheren Umgang mit der Anlage – auf Wunsch direkt bei Ihnen vor Ort.' },
      { title: 'Gerät defekt?', text: 'Nutzen Sie unsere Reparatur-Anfrage unter Service › Reparatur-Anfrage. Dort finden Sie auch die Hinweise zur Einsendung.' },
    ],
  },
  {
    slug: 'ersatzteile',
    nav: 'Ersatzteile',
    title: 'Ersatzteile',
    claim: 'Das passende Teil – weltweit geliefert.',
    intro:
      'Wir versorgen Ihre Bestandsanlagen mit Ersatz- und Verschleißteilen: für Drucker, Etikettenspender, Steuerungen und Lasersysteme. So bleibt Ihre Kennzeichnung langfristig verfügbar.',
    sections: [
      { title: 'Unser Angebot', bullets: ['Ersatz- und Verschleißteile für Drucker und Spender', 'Thermoleisten', 'Steuerungen und Komponenten', 'Ersatzteilvertrieb weltweit'] },
      { title: 'So fragen Sie an', text: 'Am schnellsten geht es mit den Angaben vom Typenschild: Gerätetyp, Seriennummer und – bei Teilen einer Anlage – die Anlagennummer. Wenn vorhanden, nennen Sie uns zusätzlich die Artikelnummer des Ersatzteils.' },
      { title: 'Abgekündigte Baureihen', text: 'Ist ein Teil nicht mehr lieferbar, beraten wir Sie zu Alternativen und zum Umbau Ihrer Anlage. Eine Übersicht finden Sie unter Service › Produktabkündigungen.' },
    ],
  },
  {
    slug: 'umbau-retrofit',
    nav: 'Umbau/Retrofit',
    title: 'Umbau von Bestandsanlagen',
    claim: 'Retrofit statt Neuanschaffung.',
    intro:
      'Ihre Anlage läuft, aber Komponenten sind abgekündigt oder die Anforderungen haben sich geändert? Wir bauen Bestandsanlagen um und bringen sie auf den aktuellen Stand – wirtschaftlich und mit möglichst kurzer Stillstandszeit.',
    sections: [
      { title: 'Typische Umbauten', bullets: ['Austausch abgekündigter Drucker und Steuerungen', 'Modernisierung von Steuerung und Komponenten', 'Anpassung an neue Produkte und Etikettenformate', 'Erweiterung bestehender Anlagen'] },
      { title: 'So gehen wir vor', bullets: ['Bestandsaufnahme Ihrer Anlage', 'Umbaukonzept und Angebot', 'Umbau und Wiederinbetriebnahme', 'Service und Ersatzteile für die umgebaute Anlage'] },
    ],
  },
  {
    slug: 'produktabkuendigungen',
    nav: 'Produktabkündigungen',
    title: 'Produktabkündigungen',
    claim: 'Abgekündigte Baureihen im Überblick.',
    intro:
      'Die folgenden Baureihen wurden abgekündigt und sind nicht mehr oder nur noch für begrenzte Zeit verfügbar. Bitte prüfen Sie anhand des Typenschilds, ob Ihre Drucker oder Steuerungen betroffen sind.',
    sections: [
      { title: 'Drucker', bullets: [
        'Druckerserie 1000: 1000/8, 1100/8, 1200/8, 1300/8, 1000/12, 1100/12, 1200/12, 1300/12',
        'Druckerserie 2000: 2000/8, 2100/8, 2200/8, 2500/8',
        'Druckerserie 3000: 3054, 3108, 3162',
        'Etikettenlichtschranke GS06 (für Druckerserien 1000 und 7000 sowie Spender)',
      ] },
      { title: 'Steuerungen', bullets: [
        '2200/8, 2200/12 HYC, 2400 HYC, 2500',
        '3000, 7000, 7100',
        'Spendersteuerung 50 ECO',
        'Spendersteuerung MC 100',
      ] },
      { title: 'Tischdrucker, Laser und Zubehör', bullets: [
        'Intermec: Serien 501, 601, PM4i, PF4i',
        'Zebra: Xi-Serie bis Serie 4, Z4M, Z6M, 26M, 105, ZM400, ZM600, ZT410, ZT420',
        'Laser: Trumpf TruMark 3020',
        'Rollenhandling: Laser LM5100',
        'Schrittmotor (Art.-Nr. K0003772)',
        '2D-Scankopf, Apertur 8,5 mm, ohne Linse (SK8.5; Art.-Nr. 4693 und 10006394)',
        'Vakuumschalter-Baugruppe alt (Art.-Nr. K0003063)',
        'Universal Robots Steuerungen CB1 bis CB3 (Ersatzteile für die Serie CB3 bis 2032)',
      ] },
      { title: 'Ihre Anlage ist betroffen?', text: 'Sprechen Sie uns an: Wir prüfen, welche Ersatzteile noch lieferbar sind, und beraten Sie persönlich zu Alternativen und zum Umbau Ihrer Bestandsanlage.' },
    ],
  },
  {
    slug: 'reparatur-anfrage',
    nav: 'Reparatur-Anfrage',
    title: 'Reparatur-Anfrage',
    claim: 'Einsendung zum Service oder zur Reparatur.',
    intro:
      'Ihr Gerät ist defekt oder soll gewartet werden? Füllen Sie das Formular aus – wir melden uns mit dem weiteren Vorgehen. Bitte beachten Sie die Hinweise zur Einsendung.',
    form: 'reparatur',
    sections: [
      { title: 'Hinweise zur Einsendung', bullets: [
        'Verbrauchsmaterial: Legen Sie ausreichend Original-Etiketten und ggf. Transferfolie sowie die Steuerung bei, damit wir Parameter einstellen und die Funktion vollständig testen können.',
        'Laser: Bei wassergekühlten CO₂-Lasern das Kühlrohr vorsichtig mit Druckluft trocknen und reinigen – das vermeidet Folgeschäden und höhere Reparaturkosten.',
        'Verpackung: Versenden Sie das Gerät in der Originalverpackung bzw. mit Montagerahmen, um Transportschäden zu vermeiden.',
        'Kosten: Die Überprüfung wird nach Aufwand berechnet. Nach der Prüfung erhalten Sie einen Kostenvoranschlag; bei Beauftragung der Reparatur wird die Prüfpauschale angerechnet.',
      ] },
      { title: 'Wo finde ich Serien- und Anlagennummer?', text: 'Die Seriennummer steht auf dem Typenschild der Komponente (Steuerung, Laser, Thermoleiste usw.). Die Anlagennummer ist die Nummer der Anlage, in der die Komponente verbaut ist.' },
    ],
  },
];

/* ---------------- UNTERNEHMEN ----------------
   Bereich "Unternehmen" wurde komplett entfernt (siehe Backup-Ordner). */
export const companyPages: SubPage[] = [];

/* ---------------- NAVIGATION ---------------- */
const svc = (slug: string) => servicePages.find((p) => p.slug === slug)!;
const link = (slug: string) => ({ label: svc(slug).nav, href: `/service/${slug}/` });
export const mainNav = [
  { label: 'Home', href: '/', children: [] },
  { ...link('support'), children: [] },
  { ...link('ersatzteile'), children: [] },
  { ...link('umbau-retrofit'), children: [] },
  { label: 'Service', href: '/service/produktabkuendigungen/', children: [link('produktabkuendigungen'), link('reparatur-anfrage')] },
  { label: 'Kontakt', href: '/#kontakt', children: [] },
];
