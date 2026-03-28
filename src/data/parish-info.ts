// ============================================================
//  PARISH INFO — src/data/parish-info.ts
//  Static text content: history, patron saint, CPP, CAEP, coat of arms.
//  Use \n\n to separate paragraphs.
// ============================================================

// ── Parish history ───────────────────────────────────────────
// TODO: Replace with the real parish history
export const history = {
  title: 'História da Paróquia',
  text: `TODO: insira aqui a história completa da Paróquia Nossa Senhora Aparecida.

TODO: Quando foi fundada? Quem foram os primeiros sacerdotes? Como a comunidade cresceu?

TODO: Marcos importantes na história da paróquia.`,
  // Optional: a list of milestones for a timeline component
  milestones: [
    { year: 'TODO', event: 'Fundação da paróquia' },
    { year: 'TODO', event: 'Construção da Igreja Matriz' },
    // Add more milestones
  ],
  photo: '/church.jpeg',
}

// ── Patron saint ─────────────────────────────────────────────
export const patronSaint = {
  title:       'Nossa Senhora Aparecida',
  feast:       '12 de outubro',
  subtitle:    'Padroeira do Brasil',
  description: `Nossa Senhora Aparecida é a padroeira do Brasil. Sua imagem, uma pequena estatueta de argila negra, foi encontrada nas águas do Rio Paraíba do Sul em 1717 por três pescadores.

TODO: Continuar com a história e a devoção à Nossa Senhora Aparecida na paróquia.`,
  novenaUrl:   '', // TODO: link to novena PDF or external page
  photo:       '/images/nossa-senhora-aparecida.jpg', // TODO: add photo
}

// ── Coat of arms ─────────────────────────────────────────────
export const coatOfArms = {
  title:       'Brasão da Paróquia',
  image:       '/images/brasao.png', // TODO: add coat of arms image
  description: 'TODO: explicação dos elementos simbólicos do brasão da paróquia.',
}

// ── CPP ──────────────────────────────────────────────────────
export const cpp = {
  title:       'Conselho Pastoral Paroquial (CPP)',
  description: `O CPP é o órgão consultivo e deliberativo que assessora o pároco no governo pastoral da paróquia.

TODO: Descrever a composição, funcionamento e membros atuais do CPP.`,
  members: [
    // TODO: add CPP members
    // { name: 'Nome', role: 'Presidente' },
  ],
  contact: '', // TODO: contact for CPP
}

// ── CAEP ─────────────────────────────────────────────────────
export const caep = {
  title:       'Conselho de Assuntos Econômicos e Patrimoniais (CAEP)',
  description: `O CAEP é responsável por auxiliar o pároco na administração dos bens materiais e financeiros da paróquia.

TODO: Descrever a composição e os membros do CAEP.`,
  members: [
    // TODO: add CAEP members
    // { name: 'Nome', role: 'Tesoureiro' },
  ],
  contact: '', // TODO: contact for CAEP
}

// ── Social / newsletter ──────────────────────────────────────
// TODO: Add links to newsletters (PDFs or external links)
export const newsletters: { title: string; date: string; url: string }[] = [
  // { title: 'Informativo Paroquial — Março 2026', date: '2026-03-01', url: '/pdfs/informativo-marco-2026.pdf' },
]

// ── Liturgical links ─────────────────────────────────────────
export const liturgicalLinks = {
  description: 'Os Elos Litúrgicos são publicados mensalmente pela Diocese de Itabira–Coronel Fabriciano.',
  // Either a direct download URL or an external link to the Diocese site
  url: '', // TODO: add link to Diocese liturgical links page
  pdfUrl: '', // TODO: or add a local PDF path like '/pdfs/elos-liturgicos.pdf'
}

// ── Google Calendar ──────────────────────────────────────────
// TODO: Get the embed URL from Google Calendar → Settings → Integrate calendar → Embed code
export const calendarEmbedUrl = '' // paste the `src` attribute value from the <iframe> here
