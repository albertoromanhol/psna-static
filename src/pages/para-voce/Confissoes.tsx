import { PageHero } from '@/components/ui/PageHero'
import { GoldDivider } from '@/components/ui/GoldDivider'
import { confessions } from '@/data/schedules'

export function Confissoes() {
  return (
    <>
      <PageHero title="Horário das Confissões" subtitle="O sacramento da reconciliação e da misericórdia" />
      <section className="section-white">
        <div className="content-wrap max-w-2xl">
          <GoldDivider icon className="mb-10" />

          <div className="space-y-4 mb-10">
            {confessions.map((c, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center sm:justify-between
                                       rounded-lg border border-border bg-white px-6 py-4 shadow-sm">
                <div>
                  <p className="font-heading font-semibold text-primary">{c.day}</p>
                  <p className="text-sm text-ink-muted">{c.local}</p>
                </div>
                <span className="mt-2 sm:mt-0 text-gold font-medium">{c.time}</span>
              </div>
            ))}
          </div>

          <div className="rounded-lg bg-surface border border-border p-6 text-sm text-ink-muted leading-relaxed">
            <p className="mb-2">
              <strong className="text-primary">Confissões individuais</strong> também podem ser agendadas
              diretamente com o pároco ou vigário.
            </p>
            <p>
              Para grupos (turmas de catequese, encontros de casais, etc.), entre em contato com a
              secretaria paroquial.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
