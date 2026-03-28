import { Download, ExternalLink } from 'lucide-react'
import { PageHero } from '@/components/ui/PageHero'
import { GoldDivider } from '@/components/ui/GoldDivider'
import { Button } from '@/components/ui/Button'
import { liturgicalLinks } from '@/data/parish-info'

export function ElosLiturgicos() {
  return (
    <>
      <PageHero title="Elos Litúrgicos" subtitle="Guia para as celebrações do mês" small />
      <section className="section-white">
        <div className="content-wrap max-w-2xl text-center">
          <GoldDivider icon className="mb-10" />
          <p className="text-ink-muted leading-relaxed mb-8">{liturgicalLinks.description}</p>

          <div className="flex flex-wrap justify-center gap-4">
            {liturgicalLinks.pdfUrl ? (
              <Button asChild variant="gold" size="lg">
                <a href={liturgicalLinks.pdfUrl} download>
                  <Download size={18} /> Baixar PDF
                </a>
              </Button>
            ) : null}
            {liturgicalLinks.url ? (
              <Button asChild variant="outline" size="lg">
                <a href={liturgicalLinks.url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={18} /> Acessar no site da Diocese
                </a>
              </Button>
            ) : null}

            {!liturgicalLinks.pdfUrl && !liturgicalLinks.url && (
              <div className="rounded-lg border border-dashed border-border bg-surface p-10 w-full">
                <p className="text-ink-muted text-sm">
                  Link dos Elos Litúrgicos ainda não configurado. Edite{' '}
                  <code className="bg-border px-1 rounded text-xs">src/data/parish-info.ts</code>{' '}
                  para adicionar a URL ou o arquivo PDF.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
