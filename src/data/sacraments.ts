// ============================================================
//  SACRAMENTS — src/data/sacraments.ts
//  Edit sacrament info, requirements, and fees here.
// ============================================================

export interface Sacrament {
  id:           string
  name:         string
  subtitle:     string
  description:  string          // spiritual explanation
  requirements: string[]        // bullet list of what's needed
  howToRegister:string          // paragraph explaining the process
  contact?:     string          // who to call / where to go
  photo?:       string          // /public/images/sacramentos/
}

export const sacraments: Sacrament[] = [
  {
    id:       'batizados',
    name:     'Batismo',
    subtitle: 'O primeiro sacramento da fé',
    description:
      'O Batismo é a porta de entrada para a vida cristã. Por ele, somos incorporados à Igreja e renascemos como filhos de Deus.',
    requirements: [
      'TODO: Documentos necessários (ex: certidão de nascimento)',
      'TODO: Participação no curso de preparação para pais e padrinhos',
      'TODO: Número de padrinhos e requisitos',
      'TODO: Outros requisitos da paróquia',
    ],
    howToRegister:
      'TODO: Explique como a família deve proceder para agendar o batismo — ex: comparecer à secretaria, documentos a apresentar, datas disponíveis.',
    contact: 'Secretaria Paroquial — (31) 3822-4420',
    photo:   '/images/sacramentos/batismo.jpg',
  },
  {
    id:       'eucaristia',
    name:     'Primeira Eucaristia',
    subtitle: 'O Pão da Vida',
    description:
      'A Primeira Eucaristia é o momento em que a criança recebe pela primeira vez o Corpo de Cristo, unindo-se plenamente à comunidade da Igreja.',
    requirements: [
      'TODO: Participação na catequese por período mínimo',
      'TODO: Participação nas celebrações dominicais',
      'TODO: Outros requisitos',
    ],
    howToRegister:
      'TODO: Processo de inscrição na catequese e preparação para a Primeira Eucaristia.',
    contact: 'Pastoral da Catequese — (31) 9 0000-0000',
    photo:   '/images/sacramentos/eucaristia.jpg',
  },
  {
    id:       'crisma',
    name:     'Crisma',
    subtitle: 'O dom do Espírito Santo',
    description:
      'A Crisma é o sacramento pelo qual o cristão recebe a plenitude do Espírito Santo, confirmando a fé recebida no Batismo.',
    requirements: [
      'TODO: Idade mínima / série escolar',
      'TODO: Ter recebido a Primeira Eucaristia',
      'TODO: Participação na catequese de Crisma',
      'TODO: Outros requisitos',
    ],
    howToRegister:
      'TODO: Como se inscrever para a catequese de Crisma, calendário, contato.',
    contact: 'Secretaria Paroquial — (31) 3822-4420',
    photo:   '/images/sacramentos/crisma.jpg',
  },
  {
    id:       'casamento',
    name:     'Matrimônio',
    subtitle: 'O sacramento do amor conjugal',
    description:
      'O Matrimônio é o sacramento pelo qual um homem e uma mulher se unem em aliança permanente, abençoada por Deus e pela Igreja.',
    requirements: [
      'TODO: Prazo mínimo de antecedência para marcar (ex: 6 meses)',
      'TODO: Participação no curso de noivos',
      'TODO: Documentos necessários (ex: certidão de batismo, certidão de nascimento)',
      'TODO: Outros requisitos canônicos',
    ],
    howToRegister:
      'TODO: Processo para agendar o casamento — comparecer à secretaria, apresentar documentos, inscrição no curso de noivos.',
    contact: 'Secretaria Paroquial — (31) 3822-4420',
    photo:   '/images/sacramentos/casamento.jpg',
  },
]

// ── Fees ─────────────────────────────────────────────────────
// TODO: Add the actual fee table provided by the Diocese
export const feesInfo = {
  title:       'Taxas, Espórtulas e Emolumentos',
  description: 'Os valores a seguir são estabelecidos pela Diocese de Itabira–Coronel Fabriciano.',
  // You can list fees as key-value pairs or as a downloadable PDF
  downloadUrl: '/pdfs/taxas-emolumentos.pdf', // TODO: add PDF to public/pdfs/
  items: [
    { label: 'Certidão de Batismo',    value: 'TODO: R$ --' },
    { label: 'Certidão de Casamento',  value: 'TODO: R$ --' },
    { label: 'Traslado de documentos', value: 'TODO: R$ --' },
    // Add more fee items
  ],
}
