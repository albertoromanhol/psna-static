import { Instagram, Facebook, Youtube, MessageCircle, FileText } from 'lucide-react'
import { PageHero } from '@/components/ui/PageHero'
import { GoldDivider } from '@/components/ui/GoldDivider'
import { parish } from '@/data/contacts'
import { newsletters } from '@/data/parish-info'

const channels = [
  {
    id: 'instagram',
    icon: Instagram,
    name: 'Instagram',
    handle: '@pnsa.ipatinga',
    description: 'Fotos e vídeos das celebrações, pastorais e eventos da paróquia.',
    url: parish.social.instagram,
    cta: 'Seguir no Instagram',
    color: 'bg-gradient-to-br from-purple-500 to-pink-500',
  },
  {
    id: 'whatsapp',
    icon: MessageCircle,
    name: 'Canal do WhatsApp',
    handle: 'PNSA Ipatinga',
    description: 'Receba avisos e informações diretamente no seu WhatsApp.',
    url: parish.whatsappChannelUrl,
    cta: 'Entrar no Canal',
    color: 'bg-green-500',
  },
  {
    id: 'facebook',
    icon: Facebook,
    name: 'Facebook',
    handle: 'Paróquia Nossa Senhora Aparecida',
    description: 'Acompanhe transmissões ao vivo, eventos e publicações.',
    url: parish.social.facebook,
    cta: 'Curtir no Facebook',
    color: 'bg-blue-600',
  },
  {
    id: 'youtube',
    icon: Youtube,
    name: 'YouTube',
    handle: 'PNSA Ipatinga',
    description: 'Missas transmitidas ao vivo e gravações de celebrações especiais.',
    url: parish.social.youtube,
    cta: 'Inscrever no YouTube',
    color: 'bg-red-600',
  },
]

export function MidiasSociais() {
  return (
    <>
      <PageHero title="Mídias Sociais" subtitle="Fique conectado com a paróquia" />
      <section className="section-white">
        <div className="content-wrap">
          <GoldDivider icon className="mb-12 max-w-xs mx-auto" />

          <div className="grid gap-6 sm:grid-cols-2">
            {channels.map(ch => {
              const Icon = ch.icon
              const active = Boolean(ch.url)
              return (
                <div key={ch.id} className={`rounded-xl border overflow-hidden shadow-sm
                                             ${active ? 'border-border' : 'border-dashed border-border opacity-60'}`}>
                  <div className={`${ch.color} px-6 py-5 flex items-center gap-4`}>
                    <Icon size={32} className="text-white shrink-0" />
                    <div className="text-white">
                      <p className="font-heading text-lg font-semibold">{ch.name}</p>
                      <p className="text-sm text-white/80">{ch.handle}</p>
                    </div>
                  </div>
                  <div className="bg-white px-6 py-5">
                    <p className="text-sm text-ink-muted mb-4">{ch.description}</p>
                    {active ? (
                      <a href={ch.url!} target="_blank" rel="noopener noreferrer"
                         className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2
                                    text-sm font-medium text-ink hover:border-gold hover:text-primary transition-colors">
                        {ch.cta}
                      </a>
                    ) : (
                      <p className="text-xs text-ink-muted italic">Link em breve</p>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Newsletters */}
          {newsletters.length > 0 && (
            <div className="mt-14">
              <h2 className="font-heading text-2xl font-semibold text-primary mb-6">Informativo Paroquial</h2>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {newsletters.map(n => (
                  <a key={n.url} href={n.url} target="_blank" rel="noopener noreferrer"
                     className="flex items-center gap-3 rounded-lg border border-border bg-white p-4
                                shadow-sm hover:border-gold hover:shadow-md transition-all">
                    <FileText size={20} className="text-gold shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-ink">{n.title}</p>
                      <p className="text-xs text-ink-muted">{n.date}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
