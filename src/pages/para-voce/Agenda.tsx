import { Calendar } from 'lucide-react'
import { PageHero } from '@/components/ui/PageHero'
import { GoldDivider } from '@/components/ui/GoldDivider'
import { calendarEmbedUrl } from '@/data/parish-info'

export function Agenda() {
  return (
    <>
      <PageHero title="Agenda Paroquial" subtitle="Eventos, celebrações e encontros" />
      <section className="section-white">
        <div className="content-wrap">
          <GoldDivider icon className="mb-10 max-w-xs mx-auto" />

          {calendarEmbedUrl ? (
            <div className="rounded-xl overflow-hidden border border-border shadow-sm">
              <iframe
                src={calendarEmbedUrl}
                title="Agenda Paroquial"
                className="w-full"
                height="600"
                style={{ border: 0 }}
              />
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-border bg-surface p-14 text-center">
              <Calendar size={48} className="mx-auto text-ink-muted mb-4" />
              <p className="font-heading text-xl font-semibold text-primary mb-2">Agenda em breve</p>
              <p className="text-ink-muted text-sm max-w-md mx-auto">
                Configure o link do Google Calendar em{' '}
                <code className="bg-border px-1 rounded text-xs">src/data/parish-info.ts</code>{' '}
                (campo <code className="bg-border px-1 rounded text-xs">calendarEmbedUrl</code>).
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
