import { PageHero } from '@/components/ui/PageHero'
import { GoldDivider } from '@/components/ui/GoldDivider'
import { masses } from '@/data/schedules'

// Days in display order
const DAY_ORDER = ['Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado','Domingo']

// Group masses by day
const grouped = DAY_ORDER.map(day => ({
  day,
  entries: masses.filter(m => m.day === day),
})).filter(g => g.entries.length > 0)

export function Missas() {
  return (
    <>
      <PageHero title="Horário de Missas" subtitle="Venha celebrar conosco" />
      <section className="section-white">
        <div className="content-wrap max-w-3xl">
          <GoldDivider icon className="mb-10" />
          <p className="text-sm text-ink-muted mb-8">
            Os horários podem sofrer alterações em datas festivas. Acompanhe nossa agenda e redes sociais.
            {/* TODO: add a note if there are masses in communities */}
          </p>

          <div className="space-y-4">
            {grouped.map(({ day, entries }) => (
              <div key={day} className="rounded-lg border border-border overflow-hidden">
                <div className="bg-primary px-5 py-3">
                  <h3 className="font-heading text-base font-semibold text-white">{day}</h3>
                </div>
                <div className="divide-y divide-border">
                  {entries.map((m, i) => (
                    <div key={i} className="flex items-center justify-between px-5 py-3 bg-white hover:bg-surface transition-colors">
                      <div>
                        <span className="font-medium text-primary">{m.time}</span>
                        {m.note && <span className="ml-2 text-xs text-ink-muted">· {m.note}</span>}
                      </div>
                      <span className="text-sm text-ink-muted">{m.location}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-lg bg-gold/10 border border-gold/30 px-5 py-4 text-sm text-ink-muted">
            <strong className="text-primary">Observação:</strong> Para missas nas comunidades, consulte os
            coordenadores ou a secretaria paroquial.
          </div>
        </div>
      </section>
    </>
  )
}
