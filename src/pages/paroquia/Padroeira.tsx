import { PageHero } from '@/components/ui/PageHero'
import { Button } from '@/components/ui/Button'
import { GoldDivider } from '@/components/ui/GoldDivider'
import { patronSaint } from '@/data/parish-info'

export function Padroeira() {
  return (
    <>
      <PageHero title={patronSaint.title} subtitle={patronSaint.subtitle} />
      <section className="section-white">
        <div className="content-wrap grid gap-12 items-start lg:grid-cols-[auto_1fr]">
          {/* Full-body image */}
          <div className="mx-auto lg:mx-0 max-w-[220px] rounded-xl overflow-hidden shadow-md border border-border">
            <img src={patronSaint.photo} alt={patronSaint.title}
                 className="w-full h-auto object-contain"
                 onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
          </div>

          {/* Text content */}
          <div className="max-w-2xl">
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
        </div>
      </section>
    </>
  )
}
