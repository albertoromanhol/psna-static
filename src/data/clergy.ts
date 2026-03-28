// ============================================================
//  CLERGY — src/data/clergy.ts
//  Add/edit priests and deacons here.
//  Photos go in public/images/clergy/
// ============================================================

export interface ClegyMember {
  name:  string
  role:  string   // e.g. 'Pároco', 'Vigário', 'Diácono'
  photo: string   // path relative to /public, e.g. '/images/clergy/padre-marco.jpg'
  bio:   string
  email?: string
  phone?: string
}

// TODO: Add a real photo for each member in public/images/clergy/
// TODO: Fill in bios and contact details
export const clergy: ClegyMember[] = [
  {
    name:  'Pe. Marco José de Almeida',
    role:  'Pároco',
    photo: '/images/clergy/padre-marco.jpg', // TODO: add photo
    bio:   'TODO: breve biografia do pároco.',
    email: 'pnsaparecidaipatinga@dioceseitabira.org.br',
    phone: '(31) 3822-4420',
  },
  {
    name:  'TODO: Nome do Vigário',
    role:  'Vigário',
    photo: '/images/clergy/vigario.jpg', // TODO: add photo
    bio:   'TODO: breve biografia do vigário.',
  },
  {
    name:  'TODO: Nome do Diácono',
    role:  'Diácono',
    photo: '/images/clergy/diacono.jpg', // TODO: add photo
    bio:   'TODO: breve biografia do diácono.',
  },
]
