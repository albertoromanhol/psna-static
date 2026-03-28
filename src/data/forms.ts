// ============================================================
//  FORMS CONFIG — src/data/forms.ts
//  Formspree endpoint IDs for each form.
//  1. Go to https://formspree.io and create a free account.
//  2. Create a new form for each endpoint below.
//  3. Paste the form ID (e.g. 'xpwzgkdo') in each field.
// ============================================================

export const formEndpoints = {
  // "Fale Conosco" contact form on /contato
  contact: '', // TODO: e.g. 'xpwzgkdo'

  // Prayer request form on /para-voce/oracao
  prayer: '', // TODO: e.g. 'xpwzgkdo'

  // News submission form on /para-voce/noticias
  news: '', // TODO: e.g. 'xpwzgkdo'
}

// Base Formspree URL — do not change
export const formspreeBase = 'https://formspree.io/f/'
