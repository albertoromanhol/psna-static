// ============================================================
//  CONTACTS — src/data/contacts.ts
//  Update this file whenever contact info changes.
// ============================================================

export const parish = {
  name:        'Paróquia Nossa Senhora Aparecida',
  shortName:   'PNSA',
  legalName:   'Diocese de Itabira',
  cnpj:        '20.963.351/0039-88',
  inscEstadual:'Isento',
  inscMunicipal:'2531-03',
  pastor:      'Pe. Marco José de Almeida',
  vicar:       'Pe. Nivaldo de Souza Aranda',
  diacono:     'Diác. Elias Pereira da Silva',

  address: {
    street:       'Rua Caetés, 495',
    neighborhood: 'Bairro Iguaçu',
    city:         'Ipatinga',
    state:        'MG',
    zip:          '35162-038',
    full:         'Rua Caetés, 495 — Bairro Iguaçu, Ipatinga/MG — CEP 35162-038',
    mapsEmbed:    'https://maps.google.com/maps?q=Rua+Caet%C3%A9s,495,Igua%C3%A7u,Ipatinga,MG&output=embed',
    mapsLink:     'https://maps.google.com/?q=Rua+Caetés+495+Iguaçu+Ipatinga+MG',
  },

  email:        'pnsaparecidaipatinga@dioceseitabira.org.br',

  phones: {
    general:       '(31) 3822-4420',
    pastorals:     '(31) 9 8978-3159',
    financial:     '(31) 9 7147-0551',
    whatsapp:      '(31) 9 8978-3159',
    communication: '(31) 9 9899-3276',
  },

  // WhatsApp click-to-chat link (number without spaces/dashes, with country code)
  whatsappUrl: 'https://wa.me/5531989783159',

  // WhatsApp Channel link — replace with the real channel link when created
  whatsappChannelUrl: '', // TODO: add WhatsApp Channel link when created

  social: {
    instagram: 'https://www.instagram.com/pnsa.ipatinga/',
    facebook:  'https://www.facebook.com/pnsa.ipatinga',
    youtube:   'https://www.youtube.com/@pnsa.ipatinga',
  },

  // Secretary office hours — update as needed
  secretaryHours: [
    { days: 'Segunda a Sexta', hours: '08h00 – 18h00' },
    { days: 'Sábado',          hours: 'Fechado' },
    { days: 'Domingo',         hours: 'Fechado' },
  ],
} as const
