import { Phone } from 'lucide-react'
import { PageHero } from '@/components/ui/PageHero'
import { GoldDivider } from '@/components/ui/GoldDivider'
import { sacraments } from '@/data/sacraments'

interface SacramentPageProps {
  id: string
}

export function SacramentPage({ id }: SacramentPageProps) {
  const s = sacraments.find(s => s.id === id)
  if (!s) return <div className="section-white content-wrap">Não encontrado.</div>

  return (
    <>
      <PageHero title={s.name} subtitle={s.subtitle} image={s.photo} />
      <section className="section-white">
        <div className="content-wrap max-w-3xl">
          <GoldDivider icon className="mb-10" />

          {/* Description */}
          <p className="text-ink-muted leading-relaxed text-lg mb-10">{s.description}</p>

          {/* Requirements */}
          <div className="mb-10">
            <h2 className="font-heading text-2xl font-semibold text-primary mb-5">Requisitos e Documentos</h2>
            <ul className="space-y-3">
              {s.requirements.map((req, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center
                                   rounded-full bg-gold text-white text-xs font-bold">{i + 1}</span>
                  <span className="text-ink-muted">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* How to register */}
          <div className="mb-10">
            <h2 className="font-heading text-2xl font-semibold text-primary mb-4">Como Solicitar</h2>
            <p className="text-ink-muted leading-relaxed">{s.howToRegister}</p>
          </div>

          {/* Contact */}
          {s.contact && (
            <div className="rounded-lg bg-surface border border-border px-6 py-5">
              <p className="font-heading text-base font-semibold text-primary mb-2">Mais informações</p>
              <div className="flex items-center gap-2 text-sm text-ink-muted">
                <Phone size={14} />
                <span>{s.contact}</span>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
