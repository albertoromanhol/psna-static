import { PageHero } from '@/components/ui/PageHero'
import { GoldDivider } from '@/components/ui/GoldDivider'
import { FormBase } from '@/components/ui/FormBase'
import { formEndpoints } from '@/data/forms'

const fields = [
  { name: 'name',    label: 'Seu nome',    type: 'text'     as const, required: true },
  { name: 'contact', label: 'Contato (telefone ou e-mail)', type: 'text' as const, required: true },
  { name: 'title',   label: 'Título da notícia', type: 'text' as const, required: true, placeholder: 'Resumo em uma linha' },
  { name: 'message', label: 'Texto da notícia',  type: 'textarea' as const, required: true,
    placeholder: 'Descreva o evento, celebração ou informação que deseja compartilhar...', rows: 6 },
]

export function Noticias() {
  return (
    <>
      <PageHero title="Enviar Notícia" subtitle="Compartilhe com a paróquia" small />
      <section className="section-white">
        <div className="content-wrap max-w-2xl">
          <GoldDivider icon className="mb-10" />
          <p className="text-ink-muted leading-relaxed mb-8">
            Quer divulgar um evento, uma conquista da comunidade ou uma informação importante?
            Preencha o formulário e nossa equipe de comunicação entrará em contato.
          </p>
          <FormBase
            endpointId={formEndpoints.news}
            fields={fields}
            submitLabel="Enviar Notícia"
            successMessage="Notícia recebida! Nossa equipe de comunicação irá analisá-la."
            emailSubject="Enviar Notícias"
          />
        </div>
      </section>
    </>
  )
}
