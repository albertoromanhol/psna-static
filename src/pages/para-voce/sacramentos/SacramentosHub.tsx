import { Droplets, Flame, Heart, Church, FileText } from 'lucide-react'
import { HubPage } from '@/components/ui/HubPage'

const items = [
  { to: '/para-voce/sacramentos/batizados',  icon: Droplets,  title: 'Batismo',          description: 'O primeiro sacramento da fé cristã.' },
  { to: '/para-voce/sacramentos/eucaristia', icon: Flame,     title: 'Primeira Eucaristia', description: 'O Pão da Vida.' },
  { to: '/para-voce/sacramentos/crisma',     icon: Heart,     title: 'Crisma',           description: 'O dom do Espírito Santo.' },
  { to: '/para-voce/sacramentos/casamento',  icon: Church,     title: 'Matrimônio',       description: 'O sacramento do amor conjugal.' },
  { to: '/para-voce/sacramentos/taxas',      icon: FileText,  title: 'Taxas e Emolumentos', description: 'Tabela de taxas e certidões.' },
]

export function SacramentosHub() {
  return (
    <HubPage
      title="Sacramentos"
      subtitle="Os sinais visíveis da graça de Deus"
      items={items}
    />
  )
}
