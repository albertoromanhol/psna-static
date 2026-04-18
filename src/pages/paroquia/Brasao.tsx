import { PageHero } from '@/components/ui/PageHero'
import { GoldDivider } from '@/components/ui/GoldDivider'
import { coatOfArms } from '@/data/parish-info'

export function Brasao() {
  return (
    <>
      <PageHero title="Identidade Visual Institucional" small />
      <section className="section-white">
        <div className="content-wrap max-w-2xl">
          <GoldDivider icon className="mb-10 mx-auto" />
          <div className="mx-auto mb-10 max-w-sm rounded-xl border border-border bg-surface p-8 shadow-sm">
            <img src={coatOfArms.image} alt={coatOfArms.title}
                 className="mx-auto max-h-72 w-auto"
                 onError={(e) => {
                   (e.target as HTMLImageElement).parentElement!.innerHTML =
                     '<p class="text-ink-muted text-sm py-12 text-center">Brasão a ser inserido</p>'
                 }} />
          </div>

          {'intro' in coatOfArms && (
            <p className="text-ink-muted leading-relaxed mb-8">{coatOfArms.intro}</p>
          )}

          {'sections' in coatOfArms && Array.isArray(coatOfArms.sections) && (
            <div className="space-y-6">
              {(coatOfArms.sections as { heading: string; text: string }[]).map((s) => (
                <div key={s.heading}>
                  <h3 className="font-heading text-base font-semibold text-primary mb-2">{s.heading}</h3>
                  <p className="text-ink-muted leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
