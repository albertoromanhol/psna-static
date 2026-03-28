import { PageHero } from '@/components/ui/PageHero'
import { GoldDivider } from '@/components/ui/GoldDivider'
import { coatOfArms } from '@/data/parish-info'

export function Brasao() {
  return (
    <>
      <PageHero title={coatOfArms.title} small />
      <section className="section-white">
        <div className="content-wrap max-w-2xl text-center">
          <GoldDivider icon className="mb-10" />
          <div className="mx-auto mb-8 max-w-sm rounded-xl border border-border bg-surface p-8 shadow-sm">
            <img src={coatOfArms.image} alt={coatOfArms.title}
                 className="mx-auto max-h-72 w-auto"
                 onError={(e) => {
                   (e.target as HTMLImageElement).parentElement!.innerHTML =
                     '<p class="text-ink-muted text-sm py-12">Brasão a ser inserido</p>'
                 }} />
          </div>
          <p className="text-ink-muted leading-relaxed">{coatOfArms.description}</p>
        </div>
      </section>
    </>
  )
}
