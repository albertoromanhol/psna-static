import { PageHero } from '@/components/ui/PageHero'
import { GoldDivider } from '@/components/ui/GoldDivider'

export function Dizimistas() {
  return (
    <>
      <PageHero title="Seja um Dizimista" subtitle="Participe da missão da Igreja com fé e corresponsabilidade" />
      <section className="section-white">
        <div className="content-wrap max-w-2xl">
          <GoldDivider icon className="mb-10" />

          <div className="rounded-lg bg-surface border border-border p-6 text-sm text-ink-muted leading-relaxed mb-10">
            <p>
              O dízimo é uma forma de participar da missão da Igreja, contribuindo com 10% dos seus
              rendimentos para o sustento da paróquia, das obras de caridade e da evangelização. Ao se
              cadastrar como dizimista, você assume um compromisso de fé e corresponsabilidade com a
              comunidade.
            </p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <h2 className="font-heading text-xl font-semibold text-primary text-center">
              Cadastre-se pelo QR Code
            </h2>
            <p className="text-sm text-ink-muted text-center">
              Aponte a câmera do seu celular para o código abaixo para se cadastrar ou realizar sua
              contribuição de dizimista.
            </p>

            <div className="rounded-xl border border-border bg-white p-6 shadow-sm flex flex-col items-center gap-4">
              <img
                src="/images/qr-code-dizimistas.png"
                alt="QR Code para cadastro de dizimistas"
                className="w-64 h-64 object-contain"
                onError={(e) => {
                  const img = e.target as HTMLImageElement
                  const div = img.parentElement!
                  div.innerHTML =
                    '<div class="w-64 h-64 flex items-center justify-center bg-surface rounded-lg border border-dashed border-border"><span class="text-ink-muted text-sm text-center px-4">QR Code será exibido aqui.<br/>Adicione a imagem em<br/>/public/images/qr-code-dizimistas.png</span></div>'
                }}
              />
              <p className="text-xs text-ink-muted text-center">
                Escaneie o QR Code para acessar o formulário de cadastro
              </p>
            </div>
          </div>

          <GoldDivider className="mt-10" />

          <div className="mt-8 rounded-lg bg-surface border border-border p-6 text-sm text-ink-muted leading-relaxed">
            <p className="mb-2">
              <strong className="text-primary">Dúvidas?</strong> Entre em contato com a secretaria
              paroquial para mais informações sobre o programa de dizimistas.
            </p>
            <p>
              Sua contribuição faz a diferença na vida da nossa comunidade e no serviço ao próximo.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
