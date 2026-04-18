import { Copy } from 'lucide-react'
import { useState } from 'react'
import { PageHero } from '@/components/ui/PageHero'
import { GoldDivider } from '@/components/ui/GoldDivider'
import { SectionHeader } from '@/components/ui/SectionHeader'

const PIX_KEY = '(31) 9 7147-0551'

export function Doacao() {
  const [copied, setCopied] = useState(false)

  function handleCopy() {
    navigator.clipboard.writeText(PIX_KEY).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <>
      <PageHero title="Doação" subtitle="Sua generosidade fortalece nossa missão de evangelizar" />

      <section className="section-white">
        <div className="content-wrap max-w-3xl">
          <GoldDivider icon className="mb-10 mx-auto" />

          {/* Intro text */}
          <p className="text-ink-muted leading-relaxed mb-4 text-center">
            Contribuir pelo site da paróquia é um gesto de fé e confiança. Sua doação é segura e
            transforma vidas, sustentando a evangelização e as obras de amor da Igreja. Seja
            instrumento de Deus: doe e ajude nossa missão a continuar frutificando!
          </p>
          <p className="text-ink-muted leading-relaxed mb-10 text-center">
            Sua doação via PIX é rápida, segura e realizada na hora!<br />
            Basta apontar a câmera para o QR Code abaixo ou utilizar a chave PIX (celular).
          </p>

          {/* QR Code + PIX Key */}
          <div className="grid gap-8 items-center sm:grid-cols-2 mb-10">
            {/* QR Code */}
            <div className="flex flex-col items-center gap-4">
              <SectionHeader title="QR Code" centered />
              <div className="rounded-xl border border-border bg-surface p-4 shadow-sm">
                <img src="/images/qr-code-pix.png" alt="QR Code PIX — Doação Paróquia"
                     className="w-48 h-48 object-contain mx-auto"
                     onError={(e) => {
                       const div = (e.target as HTMLImageElement).parentElement!
                       div.innerHTML = '<p class="text-ink-muted text-sm text-center p-10">QR Code</p>'
                     }} />
              </div>
            </div>

            {/* PIX Key */}
            <div className="flex flex-col items-center gap-4">
              <SectionHeader title="Chave PIX (Celular)" centered />
              <div className="rounded-xl border border-border bg-surface p-6 shadow-sm w-full text-center">
                <p className="font-heading text-2xl font-bold text-primary mb-4">{PIX_KEY}</p>
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-2 rounded-lg border border-border
                             bg-white px-4 py-2 text-sm font-medium text-ink shadow-sm
                             hover:border-gold hover:text-primary transition-all"
                >
                  <Copy size={15} />
                  {copied ? 'Copiado!' : 'Copiar chave'}
                </button>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="rounded-xl border border-gold/30 bg-gold/5 p-6 mb-8 text-center">
            <p className="text-ink font-medium mb-2">
              Fazendo a doação via chave PIX favor identificá-la como <strong>DOAÇÃO</strong>.
            </p>
            <p className="text-ink-muted text-sm">
              Antes de confirmar, confira os dados do favorecido.
            </p>
          </div>

          {/* Beneficiary details */}
          <div className="rounded-xl border border-border bg-surface p-6">
            <h3 className="font-heading text-lg font-semibold text-primary mb-4 text-center">
              Dados do Favorecido
            </h3>
            <ul className="space-y-2 text-sm text-ink-muted text-center">
              <li><span className="font-medium text-ink">Favorecido:</span> Paróquia Nossa Senhora Aparecida</li>
              <li><span className="font-medium text-ink">CNPJ:</span> 20.963.351/0039-88</li>
              <li><span className="font-medium text-ink">Banco:</span> SICOOB – CCLA Vale do Aço</li>
            </ul>
          </div>

          <p className="mt-8 text-center text-ink-muted italic">
            Sua generosidade fortalece nossa missão de evangelizar!
          </p>
        </div>
      </section>
    </>
  )
}
