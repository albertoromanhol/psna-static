import { Download } from 'lucide-react'
import { PageHero } from '@/components/ui/PageHero'
import { GoldDivider } from '@/components/ui/GoldDivider'
import { Button } from '@/components/ui/Button'
import { feesInfo } from '@/data/sacraments'

export function Taxas() {
  return (
    <>
      <PageHero title={feesInfo.title} small />
      <section className="section-white">
        <div className="content-wrap max-w-2xl">
          <GoldDivider icon className="mb-8" />
          <p className="text-ink-muted mb-8">{feesInfo.description}</p>

          {feesInfo.downloadUrl && (
            <Button asChild variant="gold" className="mb-8">
              <a href={feesInfo.downloadUrl} download>
                <Download size={16} /> Baixar Tabela Completa (PDF)
              </a>
            </Button>
          )}

          <div className="rounded-lg border border-border overflow-hidden">
            <div className="bg-primary px-5 py-3">
              <p className="text-sm font-semibold text-white">Tabela de Taxas</p>
            </div>
            <div className="divide-y divide-border">
              {feesInfo.items.map((item, i) => (
                <div key={i} className="flex items-center justify-between px-5 py-3 bg-white hover:bg-surface transition-colors">
                  <span className="text-sm text-ink">{item.label}</span>
                  <span className="text-sm font-medium text-primary">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-6 text-xs text-ink-muted">
            * Valores estabelecidos pela Diocese de Itabira–Coronel Fabriciano. Sujeitos a alteração.
          </p>
        </div>
      </section>
    </>
  )
}
