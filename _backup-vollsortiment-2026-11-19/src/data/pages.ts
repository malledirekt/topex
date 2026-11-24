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
  sections: Section[];
};

/* ---------------- PRODUKTE ---------------- */
export const productPages: SubPage[] = [
  {
    slug: 'etikettiersysteme',
    nav: 'Etikettiersysteme',
    title: 'Etikettiersysteme',
    claim: 'Das Etikett als Datenträger.',
    intro:
      'Unsere Etikettiersysteme sind die richtige Lösung, wenn es um zuverlässige, automatische Etikettierung in der Produktion geht. Von Druck- und Etikettiersystemen über Thermo-Transfer-Etikettiermaschinen bis zu Sonderspendern entwickeln und fertigen wir maßgeschneiderte Systeme für die industrielle Kennzeichnung von Bauteilen, Komponenten und Verpackungen.',
    modules: [
      { title: 'Druck- & Etikettiersysteme', img: '/img/mod-druck-etikettiersysteme.jpg', text: 'Thermo-Transfer-Systeme der Serie 7000 für Texte, Barcodes, 2D-Codes und Grafiken in bester Qualität.' },
      { title: 'Standard-Etikettenspender', img: '/img/mod-standard-spender.jpg', text: 'Vollautomatisch – vorbedruckte Etiketten und Funktionsstanzteile bis 160 mm Breite.' },
      { title: 'Sonder-Etikettenspender', img: '/img/homeslider-sonderspender-compact.jpg', text: 'Projektspezifische Spendesysteme für selbstklebende Funktionsbauteile.' },
      { title: 'Thermo-Transfer-Tischdrucker', img: '/img/mod-tischdrucker.jpg', text: 'Robuste Tischdrucksysteme bis 600 dpi – stand-alone oder integriert.' },
      { title: 'Rollenumwicklung & Prüfsystem', img: '/img/mod-rollenumwicklung.jpg', text: 'Rollenkonfektion, Umspulen und Code-Prüfung in einem System.' },
      { title: 'topex 100 Auf- & Abwickler', img: '/img/mod-auf-abwickler.jpg', text: 'Für große und schwere Etikettenrollen, mit motorischem Antrieb und Tänzersteuerung.' },
      { title: 'Sondermaschinen', img: '/img/mod-es-sondermaschinen.jpg', text: 'Kundenspezifische Etikettieranlagen mit Robotik, Prüf- und Zuführsystemen.' },
    ],
    sections: [
      {
        title: 'Ihre Vorteile',
        bullets: [
          'Höchste Präzision auch bei komplexen Materialien und kleinen Formaten',
          'Lagenunabhängige Integration in bestehende Anlagen',
          'Anbindung an SPS- und PC-Steuerungen',
          'Ausgelegt für Mehrschichtbetrieb im Industriealltag',
        ],
      },
    ],
  },
  {
    slug: 'lasertechnik',
    nav: 'Lasertechnik',
    title: 'Lasertechnik',
    claim: 'Mit Hightech zum perfekten Ergebnis.',
    intro:
      'Mit innovativer Lasertechnik entwickeln wir leistungsstarke Laserbeschriftungssysteme für höchste Anforderungen an Präzision, Beständigkeit und Flexibilität. Je nach Anwendung kommen Festkörper- oder CO₂-Laser zum Einsatz – ergänzt durch Automatisierungskonzepte wie Robotik, Prüfsysteme oder Rundschalttische.',
    modules: [
      { title: 'Laser-Folienstation 5640', img: '/img/mod-laser-5640.jpg', text: 'Kompaktes Stand-Alone-System zur Beschriftung von Folien und Etiketten – endlos oder vorgestanzt.' },
      { title: 'Serie 5000 Laserarbeitsstationen', img: '/img/mod-laser-5000.jpg', text: 'Wirtschaftlich und modular, mit Festkörper- oder CO₂-Laser – stand-alone oder in der Linie.' },
      { title: 'LM 5500 Laserfolienmodul', img: '/img/mod-laser-module.jpg', text: 'Folienbeschriftungsmodul zur Erweiterung der Serie 5000.' },
      { title: 'TM 5200 Typenschildmodul', img: '/img/mod-typenschild.jpg', text: 'Für Eloxal- und Edelstahl-Typenschilder, mit automatischer Magazinzuführung.' },
      { title: 'Laserschneiden', img: '/img/mod-laserschneiden.jpg', text: 'Automatisiertes Schneiden von Endlosfolien per CO₂-Laser – auch Konturschnitte.' },
      { title: 'Sondermaschinen', img: '/img/mod-laser-sonder.jpg', text: 'Kundenspezifische Laseranlagen mit individuellen Automatisierungskonzepten.' },
    ],
    sections: [
      {
        title: 'Beständig unter härtesten Bedingungen',
        text: 'Laserbeschriftete Folien und Etiketten erfüllen höchste Anforderungen an Beständigkeit gegen Chemikalien, Temperatur, Salzsprühnebel und mechanische Belastung – ideal für Automobil- und Industrieumfeld, von der Großserie bis zur Kleinserie.',
      },
    ],
  },
  {
    slug: 'rfid',
    nav: 'RFID-Kennzeichnung',
    title: 'RFID-Kennzeichnung',
    claim: 'Berührungslos identifizieren.',
    intro:
      'Mit unseren RFID-Systemen lassen sich Produkte, Werkstücke und Transportträger schnell, zuverlässig und fehlerfrei erfassen – ohne Sichtkontakt. Wir entwickeln RFID-Kennzeichnungssysteme mit hoher Verfügbarkeit, Robustheit und einfacher Integration.',
    modules: [
      { title: 'RFID-Etikettierlösungen', img: '/img/mod-rfid-etikettieren.jpg', text: 'Sichere Kennzeichnung und Identifikation von Teilen, Packstücken und Paletten.' },
      { title: 'RFID-Sonderlösungen', img: '/img/mod-rfid-sonder.jpg', text: 'Kundenspezifische Systeme für selbstklebende Smartlabels und RFID-Tags.' },
      { title: 'RFID Label – Produktion & Prüfung', img: '/img/mod-rfid-pruef.jpg', text: 'Konfektion, Veredelung und UID-Prüfung von Smartlabels.' },
    ],
    sections: [
      {
        title: 'Einsatzbereiche',
        bullets: [
          'Kennzeichnung von Paletten und Transportträgern',
          'Identifikation von Automotive-Teilen',
          'Nachverfolgbarkeit sicherheitsrelevanter Bauteile',
        ],
      },
      {
        title: 'Nahtlose Integration',
        text: 'Durch den Einbau einer RFID-Schreib-/Leseeinheit in den Thermo-Transfer-Druckkopf wird aus jedem topex-7000-System ein RFID-fähiges Kennzeichnungssystem – bestehende Prozesse bleiben erhalten.',
      },
    ],
  },
  {
    slug: 'etiketten-und-transferfolien',
    nav: 'Etiketten & Transferfolien',
    title: 'Etiketten & Transferfolien',
    claim: 'Alles, was Sie brauchen – in bester Qualität.',
    intro:
      'Die Anwendung entscheidet. Mit einem breiten Produktportfolio an Standard- und Sonderetiketten sowie Transferfolien begleiten wir Sie von der Bemusterung bis zur Serienbelieferung. Bestehende Artikel und Artikelstammdaten bleiben unverändert.',
    modules: [
      { title: 'Standardetiketten', img: '/img/mod-standardetiketten.jpg', text: 'Präzise gestanzte Blanko-Rollenware für prozesssichere, vollautomatische Verarbeitung.' },
      { title: 'Sonderetiketten', img: '/img/mod-sonderetiketten.jpg', text: 'Hochtemperatur-, UV- und chemikalienbeständig, mit Sicherheitsmerkmalen.' },
      { title: 'Funktionsetiketten', img: '/img/mod-funktionsetiketten.jpg', text: 'Selbstklebende Funktionsbauteile zur Optimierung von Fertigungsprozessen.' },
      { title: 'RFID-Etiketten / Smart Labels', img: '/img/mod-rfid-label.jpg', text: 'Mit integriertem Transponder – für Industrie, Pharma und Logistik.' },
      { title: 'Thermo-/Transferfolien', img: '/img/mod-transferfolien.jpg', text: 'Wachs, Wachs/Harz und Harz – optimal auf Etikett und Drucker abgestimmt.' },
    ],
    sections: [
      {
        title: 'Der topex-Etikettenscout',
        text: 'Gemeinsam qualifizieren wir die ideale Materialspezifikation für Ihre Kennzeichnungsaufgabe – egal ob selbstklebende Etiketten oder Funktionsbauteile, automatische oder manuelle Verarbeitung.',
      },
    ],
  },
];

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
    slug: 'workflow',
    nav: 'Workflow',
    title: 'Workflow',
    claim: 'Mit System zum Erfolg.',
    intro:
      'Von der ersten Idee bis zum After-Sales-Service begleitet Sie ein fester Ansprechpartner durch Ihr Projekt – strukturiert in vier Phasen.',
    sections: [
      { title: '01 Beratung', text: 'Wir analysieren Ihr Vorhaben, Ihre Linie und Ihre Anforderungen an die Kennzeichnung.' },
      { title: '02 Planung', text: 'Konzept, Konstruktion und Integration – auf Wunsch mit VR-Konstruktion.' },
      { title: '03 Produktion', text: 'Fertigung und Inbetriebnahme Ihres Systems – Made in Germany.' },
      { title: '04 Service', text: 'After-Sales-Service, Wartung und Verbrauchsmaterial aus einer Hand.' },
    ],
  },
  {
    slug: 'support',
    nav: 'Support',
    title: 'Support',
    claim: 'Für Sie da – auch nach der Inbetriebnahme.',
    intro:
      'Unser Support-Team unterstützt Sie bei Fragen rund um Betrieb, Wartung und Optimierung Ihrer Kennzeichnungssysteme. Schnell, kompetent und mit System-Know-how.',
    sections: [{ title: 'Unser Angebot', bullets: ['Technische Hotline und Fernunterstützung', 'Wartung und Instandhaltung', 'Ersatz- und Verschleißteile', 'Schulung Ihrer Mitarbeiter'] }],
  },
  {
    slug: 'produktabkuendigungen',
    nav: 'Produktabkündigungen',
    title: 'Produktabkündigungen',
    claim: 'Transparenz über den Produktlebenszyklus.',
    intro:
      'Hier informieren wir über abgekündigte Produkte und Nachfolgelösungen, damit Sie Ihre Anlagen langfristig planen und betreiben können.',
    sections: [{ title: 'Ihr Nutzen', bullets: ['Frühzeitige Information über Abkündigungen', 'Empfohlene Nachfolgeprodukte', 'Planungssicherheit für Ersatzteile', 'Beratung zur Migration'] }],
  },
  {
    slug: 'reparatur-anfrage',
    nav: 'Reparatur-Anfrage',
    title: 'Reparatur-Anfrage',
    claim: 'Schnelle Hilfe im Reparaturfall.',
    intro:
      'Ihr System benötigt eine Reparatur? Schildern Sie uns kurz das Problem – wir melden uns zeitnah mit dem weiteren Vorgehen.',
    sections: [{ title: 'So geht es', bullets: ['Anlagen- und Problembeschreibung übermitteln', 'Prüfung durch unsere Techniker', 'Angebot und Abstimmung', 'Reparatur und Rücksendung'] }],
  },
];

/* ---------------- UNTERNEHMEN ---------------- */
export const companyPages: SubPage[] = [
  {
    slug: 'portraet-philosophie',
    nav: 'Portrait & Philosophie',
    title: 'Portrait & Philosophie',
    claim: 'Hightech-Schmiede für industrielle Kennzeichnung.',
    intro:
      'Klein, aber fein: Statt Massenware entwickeln und fertigen wir hochwertige Systeme für die individuelle Teilekennzeichnung – mit dem Anspruch an Qualität, Präzision, Zuverlässigkeit und Langlebigkeit. Unser Maßstab: „Gut ist, was dem Kunden nützt.“',
    image: '/img/industrie-4-0.webp',
    sections: [{ title: 'Wofür wir stehen', bullets: ['Maßgeschneiderte System- und Sondermaschinen', 'Entwicklung und Fertigung – Made in Germany', 'Integration, System und Verbrauchsmaterial aus einer Hand', 'Vertriebs- und Servicepartner in Europa, China und den USA'] }],
  },
  {
    slug: 'industrie-4-0',
    image: '/img/industrie_4-0.jpg',
    nav: 'Industrie 4.0',
    title: 'Industrie 4.0',
    claim: 'Digitalisierung der Kennzeichnung.',
    intro:
      'Wir denken Kennzeichnung digital: von der VR-Konstruktion über die Digitalisierung der Kennzeichnungsinformationen bis zur vernetzten Anlage. So entstehen effiziente, transparente und zukunftssichere Prozesse.',
    sections: [{ title: 'Unsere Ansätze', bullets: ['VR-Konstruktion in der Projektierung', 'Digitalisierung der Kennzeichnungsdaten', 'Vernetzte, datengeführte Anlagen', 'Rückverfolgbarkeit über den gesamten Prozess'] }],
  },
  {
    slug: 'qualitaet-umwelt',
    nav: 'Qualität & Umwelt',
    certs: [
      { label: 'ISO 9001:2015', img: '/img/cert-iso-9001.jpg', pdf: '/downloads/cert-iso-9001.pdf' },
      { label: 'ISO 14001:2015', img: '/img/cert-iso-14001.jpg', pdf: '/downloads/cert-iso-14001.pdf' },
    ],
    title: 'Qualität & Umwelt',
    claim: 'Zertifizierte Verantwortung.',
    intro:
      'Qualität und Nachhaltigkeit sind fester Bestandteil unseres Handelns. Wir arbeiten nach zertifizierten Prozessen und achten auf einen verantwortungsvollen Umgang mit Ressourcen.',
    sections: [
      { title: 'Qualität', text: 'Zertifiziert nach ISO 9001:2015 – für nachvollziehbare, prozesssichere Qualität in Entwicklung, Fertigung und Service.' },
      { title: 'Umwelt & Nachhaltigkeit', text: 'Zertifiziert nach ISO 14001:2015 – wir reduzieren Umweltauswirkungen und setzen auf langlebige, ressourcenschonende Lösungen.' },
    ],
  },
  {
    slug: 'tisax',
    nav: 'TISAX®',
    certs: [
      { label: 'TISAX® Label', img: '/img/cert-tisax.jpg', pdf: '/downloads/cert-tisax.pdf' },
    ],
    title: 'TISAX® Zertifizierung',
    claim: 'Informationssicherheit auf Automotive-Niveau.',
    intro:
      'Mit der TISAX®-Zertifizierung weisen wir ein geprüftes Informationssicherheits-Managementsystem nach – die Grundlage für vertrauensvolle Zusammenarbeit, besonders in der Automobilindustrie.',
    sections: [{ title: 'Was das für Sie bedeutet', bullets: ['Geprüfter Umgang mit sensiblen Daten', 'Anerkannter Standard in der Automobilbranche', 'Sichere Zusammenarbeit in Projekten', 'Vertraulichkeit über den gesamten Prozess'] }],
  },
];

/* ---------------- NAVIGATION ---------------- */
export const mainNav = [
  { label: 'Home', href: '/', children: [] },
  { label: 'Produkte', href: '/produkte/etikettiersysteme/', children: productPages.map((p) => ({ label: p.nav, href: `/produkte/${p.slug}/` })) },
  { label: 'Branchen', href: '/branchen/automotive/', children: industryPages.map((p) => ({ label: p.nav, href: `/branchen/${p.slug}/` })) },
  { label: 'Service', href: '/service/workflow/', children: servicePages.map((p) => ({ label: p.nav, href: `/service/${p.slug}/` })) },
  { label: 'Unternehmen', href: '/unternehmen/portraet-philosophie/', children: companyPages.map((p) => ({ label: p.nav, href: `/unternehmen/${p.slug}/` })) },
  { label: 'Kontakt', href: '/#kontakt', children: [] },
];
