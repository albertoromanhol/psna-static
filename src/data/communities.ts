// ============================================================
//  COMMUNITIES — src/data/communities.ts
//  Add/edit parish communities here.
//  Each entry shows a tab on the Comunidades page.
// ============================================================

export interface Community {
  id:          string
  name:        string
  history:     string          // full text, can include \n for paragraphs
  coordinator: {
    name:    string
    phone:   string
    whatsapp?: string          // number with country code, e.g. '5531999999999'
  }
  address:     string          // human-readable address
  mapsEmbed?:  string          // Google Maps iframe src URL
  mapsLink?:   string          // Google Maps link
  photo?:      string          // path relative to /public
}

// TODO: Replace all placeholder data with real community info
export const communities: Community[] = [
  {
    id:      'matriz',
    name:    'Igreja Matriz — Nossa Senhora Aparecida',
    history: 'TODO: inserir história da comunidade da Igreja Matriz.',
    coordinator: {
      name:    'TODO: Nome do Coordenador',
      phone:   '(31) 9 0000-0000',
      whatsapp:'5531900000000',
    },
    address: 'Rua Caetés, 495 — Bairro Iguaçu, Ipatinga/MG',
    mapsLink:'https://maps.google.com/?q=Rua+Caetés+495+Iguaçu+Ipatinga+MG',
  },
  {
    id:      'comunidade-2',
    name:    'TODO: Nome da Comunidade 2',
    history: 'TODO: inserir história desta comunidade.',
    coordinator: {
      name:    'TODO: Nome do Coordenador',
      phone:   '(31) 9 0000-0000',
    },
    address: 'TODO: endereço',
  },
  // Add more communities following the same structure
]
