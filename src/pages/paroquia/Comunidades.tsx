import { useState } from 'react'
import { Phone, MapPin, MessageCircle } from 'lucide-react'
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
            <div>
              {community.photo && (
                <div className="rounded-xl overflow-hidden border border-border shadow-sm mb-6 aspect-video bg-surface flex items-center justify-center">
                  <img src={community.photo} alt={community.name}
                       className="w-full h-full object-contain" />
                </div>
              )}
              <h2 className="font-heading text-2xl font-semibold text-primary mb-2">{community.name}</h2>
              <GoldDivider className="mb-6 max-w-[3rem]" />
              {community.history.split('\n\n').map((p, i) => (
                <p key={i} className="text-ink-muted leading-relaxed mb-3">{p}</p>
              ))}

              <div className="mt-6 rounded-lg border border-border bg-surface p-5 space-y-4">
                <h3 className="font-heading text-base font-semibold text-primary">
                  Coordenação{community.coordinators.length > 1 ? ` (${community.coordinators.length})` : ''}
                </h3>
                {community.coordinators.map((c, i) => (
                  <div key={i} className="flex flex-col gap-1 text-sm text-ink-muted">
                    <p className="font-medium text-ink">{c.name}</p>
                    {c.phone && (
                      <a href={`tel:${c.phone.replace(/\D/g,'')}`}
                         className="flex items-center gap-2 hover:text-primary transition-colors">
                        <Phone size={14} /> {c.phone}
                      </a>
                    )}
                    {c.whatsapp && (
                      <a href={`https://wa.me/${c.whatsapp}`} target="_blank" rel="noopener noreferrer"
                         className="flex items-center gap-2 hover:text-primary transition-colors">
                        <MessageCircle size={14} /> WhatsApp
                      </a>
                    )}
                  </div>
                ))}
                <div className="flex items-start gap-2 text-sm text-ink-muted pt-1 border-t border-border">
                  <MapPin size={14} className="mt-0.5 shrink-0" />
                  {community.mapsLink ? (
                    <a href={community.mapsLink} target="_blank" rel="noopener noreferrer"
                       className="hover:text-primary transition-colors">{community.address}</a>
                  ) : (
                    <span>{community.address}</span>
                  )}
                </div>
              </div>

              {/* Map — full width below content */}
              {community.mapsEmbed ? (
                <div className="mt-8 rounded-xl overflow-hidden border border-border shadow-sm">
                  <iframe
                    src={community.mapsEmbed}
                    title={`Mapa — ${community.name}`}
                    className="w-full"
                    height="240"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              ) : community.mapsLink ? (
                <div className="mt-8 rounded-xl border border-border bg-surface p-6 flex items-center justify-center">
                  <a href={community.mapsLink} target="_blank" rel="noopener noreferrer"
                     className="flex items-center gap-2 text-sm text-ink-muted hover:text-primary transition-colors">
                    <MapPin size={18} />
                    <span>Ver no Google Maps</span>
                  </a>
                </div>
              ) : null}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
