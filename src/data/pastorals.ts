// ============================================================
//  PASTORALS & MOVEMENTS — src/data/pastorals.ts
//  Edit descriptions and coordinator contacts here.
// ============================================================

export interface Ministry {
  id:          string
  name:        string
  description: string
  coordinator: {
    name:     string
    phone:    string
    whatsapp?: string
    email?:   string
  }
  photo?: string  // optional image in /public/images/pastorais/
}

// ── Pastorais ────────────────────────────────────────────────
// TODO: Fill in real pastoral names, descriptions, and coordinators
export const pastorals: Ministry[] = [
  {
    id:          'pastoral-catequese',
    name:        'Pastoral da Catequese',
    description: 'TODO: descrição da Pastoral da Catequese e seu trabalho na comunidade.',
    coordinator: {
      name:  'TODO: Nome',
      phone: '(31) 9 0000-0000',
    },
  },
  {
    id:          'pastoral-familia',
    name:        'Pastoral da Família',
    description: 'TODO: descrição da Pastoral da Família.',
    coordinator: {
      name:  'TODO: Nome',
      phone: '(31) 9 0000-0000',
    },
  },
  {
    id:          'pastoral-saude',
    name:        'Pastoral da Saúde',
    description: 'TODO: descrição da Pastoral da Saúde.',
    coordinator: {
      name:  'TODO: Nome',
      phone: '(31) 9 0000-0000',
    },
  },
  // Add more pastorals following the same structure
]

// ── Movimentos e Serviços ────────────────────────────────────
// TODO: Fill in real movement names, descriptions, and coordinators
export const movements: Ministry[] = [
  {
    id:          'encontro-casais',
    name:        'Encontro de Casais com Cristo (ECC)',
    description: 'TODO: descrição do ECC.',
    coordinator: {
      name:  'TODO: Nome',
      phone: '(31) 9 0000-0000',
    },
  },
  {
    id:          'legiao-maria',
    name:        'Legião de Maria',
    description: 'TODO: descrição da Legião de Maria.',
    coordinator: {
      name:  'TODO: Nome',
      phone: '(31) 9 0000-0000',
    },
  },
  // Add more movements following the same structure
]
