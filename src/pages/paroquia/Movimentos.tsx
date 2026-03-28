import { Phone, MessageCircle } from 'lucide-react'
import { PageHero } from '@/components/ui/PageHero'
import { GoldDivider } from '@/components/ui/GoldDivider'
import { movements } from '@/data/pastorals'

export function Movimentos() {
  return (
    <>
      <PageHero title="Movimentos e Serviços" subtitle="Grupos que animam nossa comunidade de fé" />
      <section className="section-white">
        <div className="content-wrap">
          <GoldDivider icon className="mb-12 max-w-xs mx-auto" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {movements.map(m => (
              <div key={m.id} className="rounded-lg border border-border bg-white p-6 shadow-sm
                                          transition-shadow hover:shadow-md">
                <h3 className="font-heading text-lg font-semibold text-primary mb-1">{m.name}</h3>
                <GoldDivider className="mb-3 max-w-[2rem]" />
                <p className="text-sm text-ink-muted leading-relaxed mb-4">{m.description}</p>
                <div className="mt-auto pt-3 border-t border-border space-y-1">
                  <p className="text-xs font-medium text-ink-muted uppercase tracking-wide">Coordenação</p>
                  <p className="text-sm font-medium text-ink">{m.coordinator.name}</p>
                  <a href={`tel:${m.coordinator.phone.replace(/\D/g,'')}`}
                     className="flex items-center gap-1.5 text-sm text-ink-muted hover:text-primary transition-colors">
                    <Phone size={13} /> {m.coordinator.phone}
                  </a>
                  {m.coordinator.whatsapp && (
                    <a href={`https://wa.me/${m.coordinator.whatsapp}`} target="_blank" rel="noopener noreferrer"
                       className="flex items-center gap-1.5 text-sm text-ink-muted hover:text-primary transition-colors">
                      <MessageCircle size={13} /> WhatsApp
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
