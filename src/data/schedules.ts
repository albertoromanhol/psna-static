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
// TODO: Fill in the actual mass times provided by the parish
export const masses: MassEntry[] = [
  { day: 'Segunda-feira', time: '18h30', location: 'Igreja Matriz' },
  { day: 'Terça-feira',   time: '18h30', location: 'Igreja Matriz' },
  { day: 'Quarta-feira',  time: '07h00', location: 'Igreja Matriz' },
  { day: 'Quarta-feira',  time: '18h30', location: 'Igreja Matriz' },
  { day: 'Quinta-feira',  time: '18h30', location: 'Igreja Matriz' },
  { day: 'Sexta-feira',   time: '07h00', location: 'Igreja Matriz' },
  { day: 'Sexta-feira',   time: '18h30', location: 'Igreja Matriz' },
  { day: 'Sábado',        time: '07h00', location: 'Igreja Matriz' },
  { day: 'Sábado',        time: '17h00', location: 'Igreja Matriz', note: 'Missa vespertina' },
  { day: 'Domingo',       time: '07h00', location: 'Igreja Matriz' },
  { day: 'Domingo',       time: '09h00', location: 'Igreja Matriz' },
  { day: 'Domingo',       time: '11h00', location: 'Igreja Matriz' },
  { day: 'Domingo',       time: '18h00', location: 'Igreja Matriz' },
]

// ── Confession schedule ──────────────────────────────────────
// TODO: Fill in the actual confession times
export const confessions: ConfessionEntry[] = [
  { day: 'Sábado', time: '15h00 – 16h45', local: 'Igreja Matriz' },
  { day: 'Domingo', time: '30 min antes de cada missa', local: 'Igreja Matriz' },
]
