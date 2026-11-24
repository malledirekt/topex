// Zentrale Firmendaten – hier ändern, wirkt auf der ganzen Website.
export const site = {
  name: 'topex-systems',
  legalName: 'Buday GmbH',
  url: 'https://topex-systems.com',
  phone: '+49 7156 17645-0',
  phoneDisplay: '+49 (0)7156 17645-0',
  email: 'info@topex.de', // Ersatzteile & Service
  address: { street: 'Max-Eyth-Straße 6', zip: '71254', city: 'Ditzingen-Hirschlanden', country: 'DE' },
};

// Partnerfirma für Etiketten & Verbrauchsmaterial
export const partner = { name: 'Buday GmbH', url: 'https://www.buday.com/' };

// Leistungen auf der Startseite (Detailtexte der Unterseiten: src/data/pages.ts)
export const services = [
  {
    no: '01',
    id: 'support',
    href: '/service/support/',
    img: '/img/7000er-serie.jpg',
    title: 'Support',
    claim: 'Für Sie da – auch nach der Inbetriebnahme.',
    text: 'Schnelle Hilfe bei Störungen und Fragen rund um Betrieb, Wartung und Instandhaltung Ihrer Kennzeichnungssysteme.',
    items: ['Technische Hotline & Fernunterstützung', 'Wartung und Instandhaltung', 'Reparatur-Service', 'Schulungen'],
    cta: 'Mehr erfahren',
    external: false,
  },
  {
    no: '02',
    id: 'ersatzteile',
    href: '/service/ersatzteile/',
    img: '/img/mod-druck-etikettiersysteme.jpg',
    title: 'Ersatzteile',
    claim: 'Das passende Teil – weltweit geliefert.',
    text: 'Ersatz- und Verschleißteile für Drucker, Spender, Steuerungen und Lasersysteme – damit Ihre Anlage zuverlässig weiterläuft.',
    items: ['Ersatz- und Verschleißteile', 'Thermoleisten', 'Steuerungen & Komponenten', 'Versand weltweit'],
    cta: 'Mehr erfahren',
    external: false,
  },
  {
    no: '03',
    id: 'umbau',
    href: '/service/umbau-retrofit/',
    img: '/img/mod-es-sondermaschinen.jpg',
    title: 'Umbau von Bestandsanlagen',
    claim: 'Retrofit statt Neuanschaffung.',
    text: 'Wir bringen bestehende Anlagen auf den aktuellen Stand – vom Austausch abgekündigter Komponenten bis zur Anpassung an neue Anforderungen.',
    items: ['Modernisierung / Retrofit', 'Ersatz abgekündigter Komponenten', 'Anpassung an neue Produkte & Formate', 'Beratung zur Umrüstung'],
    cta: 'Mehr erfahren',
    external: false,
  },
  {
    no: '04',
    id: 'etiketten',
    href: partner.url,
    img: '/img/mod-standardetiketten.jpg',
    title: 'Etiketten & Transferfolien',
    claim: 'Jetzt bei unserer Partnerfirma Buday.',
    text: 'Etiketten und Verbrauchsmaterial liefert ab sofort unsere Partnerfirma, die Buday GmbH. Bestehende Artikel und Artikelstammdaten bleiben unverändert.',
    items: ['Standardetiketten', 'Sonderetiketten', 'Funktionsetiketten', 'RFID-Etiketten / Smart Labels', 'Thermo-Transferfolien'],
    cta: 'Zu Buday',
    external: true,
  },
];

export const industries = [
  { title: 'Automotive', text: 'Bauteil- und Typenschildkennzeichnung direkt in der Linie.' },
  { title: 'E-Mobilität', text: 'Rückverfolgbare Kennzeichnung von Batterie- und Antriebskomponenten.' },
  { title: 'Industrieanwendungen', text: 'Systemlösungen für Fertigung und Montage.' },
  { title: 'Pharma & Diagnostik', text: 'Präzise, prozesssichere Kennzeichnung für sensible Produkte.' },
  { title: 'Logistik & Verpackung', text: 'Etikettieren im Takt – zuverlässig und lesbar.' },
  { title: 'Transport', text: 'Robuste Kennzeichnung für raue Einsatzbedingungen.' },
  { title: 'Defence', text: 'Dauerhafte, normgerechte Identifikation.' },
  { title: 'Erneuerbare Energien', text: 'Kennzeichnung für Komponenten mit langer Lebensdauer.' },
];

export const workflow = [
  { no: '01', title: 'Beratung', text: 'Wir analysieren Ihre Anlage und Ihre Anforderungen an die Kennzeichnung.' },
  { no: '02', title: 'Planung', text: 'Konzept, Konstruktion und Integration für Umbau und Modernisierung.' },
  { no: '03', title: 'Service', text: 'After-Sales-Service, Wartung und Ersatzteile.' },
];
