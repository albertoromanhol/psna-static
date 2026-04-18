import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react'
import { PageHero } from '@/components/ui/PageHero'
import { GoldDivider } from '@/components/ui/GoldDivider'
import { FormBase } from '@/components/ui/FormBase'
import { parish } from '@/data/contacts'
import { formEndpoints } from '@/data/forms'

const fields = [
  { name: 'name',    label: 'Nome completo', type: 'text'    as const, required: true },
  { name: 'email',   label: 'E-mail',        type: 'email'   as const, required: true },
  { name: 'subject', label: 'Assunto',       type: 'text'    as const, required: true },
  { name: 'message', label: 'Mensagem',      type: 'textarea'as const, required: true, rows: 5 },
]

export function Contato() {
  return (
    <>
      <PageHero title="Contato" subtitle="Estamos aqui para você" />
      <section className="section-white">
        <div className="content-wrap grid gap-12 lg:grid-cols-2">

          {/* Left — form */}
          <div>
            <h2 className="font-heading text-2xl font-semibold text-primary mb-2">Fale Conosco</h2>
            <GoldDivider className="mb-8 max-w-[3rem]" />
            <FormBase
              endpointId={formEndpoints.contact}
              fields={fields}
              submitLabel="Enviar Mensagem"
              emailSubject="Fale Conosco"
            />
          </div>

          {/* Right — info */}
          <div className="space-y-8">
            <div>
              <h2 className="font-heading text-2xl font-semibold text-primary mb-2">Informações</h2>
              <GoldDivider className="mb-8 max-w-[3rem]" />
            </div>

            {/* Contact details */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="shrink-0 mt-0.5 text-gold" />
                <div>
                  <p className="text-sm font-medium text-ink">Endereço</p>
                  <a href={parish.address.mapsLink} target="_blank" rel="noopener noreferrer"
                     className="text-sm text-ink-muted hover:text-primary transition-colors">
                    {parish.address.full}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={18} className="shrink-0 mt-0.5 text-gold" />
                <div className="space-y-1">
                  <p className="text-sm font-medium text-ink">Telefones</p>
                  {[
                    { label: 'Geral',                    val: parish.phones.general },
                    { label: 'Pastorais',                val: parish.phones.pastorals },
                    { label: 'Financeiro',               val: parish.phones.financial },
                    { label: 'Pastoral da Comunicação',  val: parish.phones.communication },
                  ].map(p => (
                    <p key={p.label} className="text-sm text-ink-muted">
                      <span className="text-ink">{p.label}:</span>{' '}
                      <a href={`tel:${p.val.replace(/\D/g,'')}`}
                         className="hover:text-primary transition-colors">{p.val}</a>
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MessageCircle size={18} className="shrink-0 text-gold" />
                <div>
                  <p className="text-sm font-medium text-ink">WhatsApp Business</p>
                  <a href={parish.whatsappUrl} target="_blank" rel="noopener noreferrer"
                     className="text-sm text-ink-muted hover:text-primary transition-colors">
                    {parish.phones.whatsapp}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-gold" />
                <div>
                  <p className="text-sm font-medium text-ink">E-mail</p>
                  <a href={`mailto:${parish.email}`}
                     className="text-sm text-ink-muted hover:text-primary transition-colors break-all">
                    {parish.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Secretary hours */}
            <div className="rounded-lg border border-border bg-surface p-5">
              <div className="flex items-center gap-2 mb-3">
                <Clock size={16} className="text-gold" />
                <p className="font-heading font-semibold text-primary">Horário da Secretaria</p>
              </div>
              <ul className="space-y-1.5">
                {parish.secretaryHours.map(h => (
                  <li key={h.days} className="flex items-center justify-between text-sm">
                    <span className="text-ink font-medium">{h.days}</span>
                    <span className="text-ink-muted">{h.hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-border shadow-sm min-h-[240px] bg-surface
                            flex items-center justify-center">
              {parish.address.mapsEmbed ? (
                <iframe
                  src={parish.address.mapsEmbed}
                  title="Localização da Paróquia"
                  className="w-full min-h-[240px]"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              ) : (
                <a href={parish.address.mapsLink} target="_blank" rel="noopener noreferrer"
                   className="flex flex-col items-center gap-3 p-10 text-ink-muted hover:text-primary transition-colors">
                  <MapPin size={36} />
                  <span className="text-sm">Abrir no Google Maps</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
