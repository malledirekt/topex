// Zentrale Firmendaten – hier ändern, wirkt auf der ganzen Website.
export const site = {
  name: 'topex-systems',
  legalName: 'Buday GmbH',
  url: 'https://topex-systems.com',
  phone: '+49 7156 17645-0',
  phoneDisplay: '+49 (0)7156 17645-0',
  email: 'info@buday.com', // TODO: eigene Adresse für topex-systems?
  address: { street: 'Max-Eyth-Straße 6', zip: '71254', city: 'Ditzingen-Hirschlanden', country: 'DE' },
};

export const nav = [
  { label: 'Produkte', href: '/#produkte' },
  { label: 'Branchen', href: '/#branchen' },
  { label: 'Service', href: '/#service' },
  { label: 'Unternehmen', href: '/#unternehmen' },
  { label: 'Kontakt', href: '/#kontakt' },
];

export const products = [
  {
    no: '01',
    id: 'etikettiersysteme',
    img: '/img/prod-etikettiersysteme.webp',
    title: 'Etikettiersysteme',
    claim: 'Das Etikett als Datenträger.',
    text: 'Automatische Druck- und Etikettiersysteme im Thermo-Transfer-Verfahren – flexibel in Fertigungs- und Montagelinien integrierbar, angebunden an SPS- und PC-Steuerungen.',
    items: ['Druck- und Etikettiersysteme Serie 7000', 'Standard- und Sonder-Etikettenspender', 'Thermo-Transfer-Tischdrucker', 'Rollenumwicklung & Prüfsysteme', 'Etikettenauf- und -abwickler Serie 100', 'Sondermaschinen'],
  },
  {
    no: '02',
    id: 'lasertechnik',
    img: '/img/prod-lasertechnik.webp',
    title: 'Lasertechnik',
    claim: 'Mit Hightech zum perfekten Ergebnis.',
    text: 'Laserbeschriftung und Laserschneiden für maximale Präzision und Langlebigkeit – von der Folienstation bis zur kompletten Arbeitsstation.',
    items: ['Laser-Folienstation 5640', 'Laserarbeitsstationen Serie 5000', 'LM 5500 Laserfolienmodul', 'TM 5200 Typenschildmodul', 'Laserschneiden', 'Sondermaschinen'],
  },
  {
    no: '03',
    id: 'rfid',
    img: '',
    title: 'RFID-Kennzeichnung',
    claim: 'Berührungslos identifizieren.',
    text: 'RFID-Etikettierlösungen, die Bauteile eindeutig und automatisch identifizierbar machen – inklusive Produktions- und Prüfsystemen für RFID-Labels.',
    items: ['RFID-Etikettierlösungen', 'RFID-Sonderlösungen', 'Produktions- und Prüfsysteme für RFID-Labels'],
  },
  {
    no: '04',
    id: 'etiketten',
    img: '',
    title: 'Etiketten & Transferfolien',
    claim: 'Alles, was Sie brauchen – in bester Qualität.',
    text: 'Das passende Verbrauchsmaterial zu jedem System: robust, prozesssicher und auf Ihre Anwendung abgestimmt. Bestehende Artikel und Artikelstammdaten bleiben unverändert.',
    items: ['Standardetiketten', 'Sonderetiketten', 'Funktionsetiketten', 'RFID-Etiketten / Smart Labels', 'Thermo-Transferfolien'],
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
  { no: '01', title: 'Beratung', text: 'Wir analysieren Ihr Vorhaben, Ihre Linie und Ihre Anforderungen an die Kennzeichnung.' },
  { no: '02', title: 'Planung', text: 'Konzept, Konstruktion und Integration – auf Wunsch mit VR-Konstruktion.' },
  { no: '03', title: 'Produktion', text: 'Fertigung und Inbetriebnahme Ihres Systems – Made in Germany.' },
  { no: '04', title: 'Service', text: 'After-Sales-Service, Wartung und Verbrauchsmaterial aus einer Hand.' },
];
