import { PageHero } from '@/components/ui/PageHero'
import { Button } from '@/components/ui/Button'
import { GoldDivider } from '@/components/ui/GoldDivider'
import { patronSaint } from '@/data/parish-info'

export function Padroeira() {
  return (
    <>
      <PageHero title={patronSaint.title} subtitle={patronSaint.subtitle} image={patronSaint.photo} />
      <section className="section-white">
        <div className="content-wrap max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-widest text-gold mb-6">
            Festa: {patronSaint.feast}
          </p>
          <GoldDivider icon className="mb-10" />
          {patronSaint.description.split('\n\n').map((para, i) => (
            <p key={i} className="text-ink-muted leading-relaxed mb-4">{para}</p>
          ))}
          {patronSaint.novenaUrl && (
            <Button asChild variant="gold" className="mt-6">
              <a href={patronSaint.novenaUrl} target="_blank" rel="noopener noreferrer">
                Baixar Novena
              </a>
            </Button>
          )}
        </div>
      </section>
    </>
  )
}
