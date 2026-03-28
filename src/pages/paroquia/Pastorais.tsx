import { Phone, MessageCircle } from 'lucide-react'
import { PageHero } from '@/components/ui/PageHero'
import { GoldDivider } from '@/components/ui/GoldDivider'
import { pastorals } from '@/data/pastorals'

export function Pastorais() {
  return (
    <>
      <PageHero title="Pastorais" subtitle="Ministérios que servem a comunidade com amor" />
      <section className="section-white">
        <div className="content-wrap">
          <GoldDivider icon className="mb-12 max-w-xs mx-auto" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pastorals.map(p => (
              <div key={p.id} className="rounded-lg border border-border bg-white p-6 shadow-sm
                                         transition-shadow hover:shadow-md">
                {p.photo && (
                  <img src={p.photo} alt={p.name}
                       className="mb-4 h-32 w-full rounded-md object-cover" />
                )}
                <h3 className="font-heading text-lg font-semibold text-primary mb-1">{p.name}</h3>
                <GoldDivider className="mb-3 max-w-[2rem]" />
                <p className="text-sm text-ink-muted leading-relaxed mb-4">{p.description}</p>
                <div className="mt-auto pt-3 border-t border-border space-y-1">
                  <p className="text-xs font-medium text-ink-muted uppercase tracking-wide">Coordenação</p>
                  <p className="text-sm font-medium text-ink">{p.coordinator.name}</p>
                  <a href={`tel:${p.coordinator.phone.replace(/\D/g,'')}`}
                     className="flex items-center gap-1.5 text-sm text-ink-muted hover:text-primary transition-colors">
                    <Phone size={13} /> {p.coordinator.phone}
                  </a>
                  {p.coordinator.whatsapp && (
                    <a href={`https://wa.me/${p.coordinator.whatsapp}`} target="_blank" rel="noopener noreferrer"
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
