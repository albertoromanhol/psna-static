import { useState } from 'react'
import { Phone, MapPin } from 'lucide-react'
import { PageHero } from '@/components/ui/PageHero'
import { GoldDivider } from '@/components/ui/GoldDivider'
import { communities } from '@/data/communities'

export function Comunidades() {
  const [active, setActive] = useState(communities[0]?.id ?? '')
  const community = communities.find(c => c.id === active)

  return (
    <>
      <PageHero title="Comunidades" subtitle="Conheça nossas comunidades e seus coordenadores" />
      <section className="section-white">
        <div className="content-wrap">
          {/* Tab bar */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-border pb-4">
            {communities.map(c => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors
                  ${active === c.id
                    ? 'bg-primary text-white'
                    : 'border border-border text-ink hover:border-gold hover:text-primary'}`}
              >
                {c.name}
              </button>
            ))}
          </div>

          {community && (
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <h2 className="font-heading text-2xl font-semibold text-primary mb-2">{community.name}</h2>
                <GoldDivider className="mb-6 max-w-[3rem]" />
                {community.history.split('\n\n').map((p, i) => (
                  <p key={i} className="text-ink-muted leading-relaxed mb-3">{p}</p>
                ))}

                <div className="mt-6 rounded-lg border border-border bg-surface p-5 space-y-3">
                  <h3 className="font-heading text-base font-semibold text-primary">Coordenação</h3>
                  <p className="font-medium text-ink">{community.coordinator.name}</p>
                  <div className="flex flex-col gap-2 text-sm text-ink-muted">
                    <a href={`tel:${community.coordinator.phone.replace(/\D/g,'')}`}
                       className="flex items-center gap-2 hover:text-primary transition-colors">
                      <Phone size={14} /> {community.coordinator.phone}
                    </a>
                    <div className="flex items-start gap-2">
                      <MapPin size={14} className="mt-0.5 shrink-0" />
                      {community.mapsLink ? (
                        <a href={community.mapsLink} target="_blank" rel="noopener noreferrer"
                           className="hover:text-primary transition-colors">{community.address}</a>
                      ) : (
                        <span>{community.address}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden border border-border shadow-sm min-h-[300px] bg-surface
                              flex items-center justify-center">
                {community.mapsEmbed ? (
                  <iframe
                    src={community.mapsEmbed}
                    title={`Mapa — ${community.name}`}
                    className="w-full h-full min-h-[300px]"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  />
                ) : community.mapsLink ? (
                  <a href={community.mapsLink} target="_blank" rel="noopener noreferrer"
                     className="flex flex-col items-center gap-3 text-ink-muted hover:text-primary transition-colors p-10">
                    <MapPin size={36} />
                    <span className="text-sm">Ver no Google Maps</span>
                  </a>
                ) : (
                  <p className="text-sm text-ink-muted p-10 text-center">
                    Adicione o embed do Google Maps em{' '}
                    <code className="bg-border px-1 rounded text-xs">src/data/communities.ts</code>
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
