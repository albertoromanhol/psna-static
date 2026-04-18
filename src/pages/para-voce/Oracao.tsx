import { PageHero } from '@/components/ui/PageHero'
import { GoldDivider } from '@/components/ui/GoldDivider'
import { FormBase } from '@/components/ui/FormBase'
import { formEndpoints } from '@/data/forms'

const fields = [
  { name: 'name',      label: 'Seu nome',           type: 'text'     as const, required: true,  placeholder: 'Como podemos te chamar?' },
  { name: 'intention', label: 'Tipo de intenção',   type: 'select'   as const, required: true,
    options: [
      { value: 'saude',        label: 'Saúde' },
      { value: 'familia',      label: 'Família' },
      { value: 'trabalho',     label: 'Trabalho' },
      { value: 'gratidao',     label: 'Ação de graças' },
      { value: 'falecimento',  label: 'Falecimento' },
      { value: 'outro',        label: 'Outro' },
    ],
  },
  { name: 'message',   label: 'Sua intenção de oração', type: 'textarea' as const, required: true,
    placeholder: 'Compartilhe sua intenção com a comunidade...', rows: 5 },
  { name: 'email',     label: 'E-mail (opcional — se desejar retorno)', type: 'email' as const, placeholder: 'seu@email.com' },
]

export function Oracao() {
  return (
    <>
      <PageHero title="Pedido de Oração" subtitle="Sua intenção será acolhida com amor pela nossa comunidade" />
      <section className="section-white">
        <div className="content-wrap max-w-2xl">
          <GoldDivider icon className="mb-10" />
          <p className="text-ink-muted leading-relaxed mb-8">
            Envie sua intenção de oração e ela será levada à comunidade e ao altar durante as celebrações.
            Seus dados são tratados com total sigilo e respeito à sua privacidade.
          </p>
          <FormBase
            endpointId={formEndpoints.prayer}
            fields={fields}
            submitLabel="Enviar Pedido de Oração"
            successMessage="Sua intenção foi recebida! Você estará em nossas orações."
            emailSubject="Pedido de Oração"
          />
        </div>
      </section>
    </>
  )
}
