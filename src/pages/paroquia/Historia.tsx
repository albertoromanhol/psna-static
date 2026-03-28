import { PageHero } from '@/components/ui/PageHero'
import { GoldDivider } from '@/components/ui/GoldDivider'
import { history } from '@/data/parish-info'

export function Historia() {
  return (
    <>
      <PageHero title={history.title} image={history.photo} />
      <section className="section-white">
        <div className="content-wrap max-w-3xl">
          <GoldDivider icon className="mb-10" />
          {history.text.split('\n\n').map((para, i) => (
            <p key={i} className="text-ink-muted leading-relaxed mb-4">{para}</p>
          ))}

          {history.milestones.length > 0 && (
            <>
              <h2 className="font-heading text-2xl font-semibold text-primary mt-12 mb-6">
                Marcos Históricos
              </h2>
              <ol className="relative border-l border-gold/40 space-y-6">
                {history.milestones.map((m, i) => (
                  <li key={i} className="ml-6">
                    <span className="absolute -left-3 flex h-6 w-6 items-center justify-center
                                     rounded-full bg-gold text-white text-xs font-bold">
                      {i + 1}
                    </span>
                    <p className="text-sm font-bold text-gold">{m.year}</p>
                    <p className="text-ink-muted">{m.event}</p>
                  </li>
                ))}
              </ol>
            </>
          )}
        </div>
      </section>
    </>
  )
}
