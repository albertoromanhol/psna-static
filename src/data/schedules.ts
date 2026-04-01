// ============================================================
//  SCHEDULES — src/data/schedules.ts
//  Update mass times and confession times here.
// ============================================================

export interface MassEntry {
  day:      string   // e.g. 'Domingo'
  time:     string   // e.g. '08h00'
  location: string   // e.g. 'Igreja Matriz' or community name
  note?:    string   // optional extra info
}

export interface ConfessionEntry {
  day:   string
  time:  string
  local: string
}

// ── Mass schedule ────────────────────────────────────────────
export const masses: MassEntry[] = [
  // Regular weekly masses
  { day: 'Quinta-feira', time: '19h30', location: 'Matriz Nossa Sra. Aparecida' },
  { day: 'Sexta-feira',  time: '06h30', location: 'Matriz Nossa Sra. Aparecida' },
  { day: 'Sábado',       time: '19h30', location: 'Com. Santo Antônio' },
  { day: 'Domingo',      time: '07h00', location: 'Matriz Nossa Sra. Aparecida' },
  { day: 'Domingo',      time: '07h00', location: 'Com. Santo Antônio' },
  { day: 'Domingo',      time: '08h30', location: 'Com. São José' },
  { day: 'Domingo',      time: '08h30', location: 'Com. Atos dos Apóstolos' },
  { day: 'Domingo',      time: '10h00', location: 'Matriz Nossa Sra. Aparecida' },
  { day: 'Domingo',      time: '10h00', location: 'Com. São João XXIII' },
  { day: 'Domingo',      time: '16h00', location: 'Com. Divina Providência' },
  { day: 'Domingo',      time: '18h00', location: 'Com. Atos dos Apóstolos' },
  { day: 'Domingo',      time: '19h30', location: 'Com. Nossa Sra. da Esperança' },
  { day: 'Domingo',      time: '19h30', location: 'Matriz Nossa Sra. Aparecida' },

  // Special / periodic masses
  { day: '1ª Sexta-feira do mês', time: '09h30', location: 'Lar Divina Providência' },
  { day: '1ª Sexta-feira do mês', time: '19h30', location: 'Matriz Nossa Sra. Aparecida, Com. Atos dos Apóstolos e Com. São João XXIII', note: 'Missa em honra ao Sagrado Coração de Jesus' },
  { day: '3º Sábado do mês',      time: '18h00', location: 'Matriz Nossa Sra. Aparecida', note: 'Missa em Ação de Graças pelos Dizimistas' },
  { day: 'Todo dia 12',           time: '12h00', location: 'Matriz Nossa Sra. Aparecida', note: 'Missa votiva mensal' },
]

// ── Confession schedule ──────────────────────────────────────
export const confessions: ConfessionEntry[] = [
  { day: 'Quarta-feira', time: '09h00', local: 'Secretaria Paroquial' },
  { day: 'Quarta-feira', time: '15h00', local: 'Secretaria Paroquial' },
  { day: 'Quinta-feira', time: '09h00', local: 'Secretaria Paroquial' },
  { day: 'Quinta-feira', time: '15h00', local: 'Secretaria Paroquial' },
]
