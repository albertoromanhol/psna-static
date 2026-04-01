import { Clock, BookOpen, Link2, Calendar, Heart, Droplets, Newspaper, HandCoins } from 'lucide-react'
import { HubPage } from '@/components/ui/HubPage'

const items = [
  { to: '/para-voce/missas',          icon: Clock,     title: 'Horário de Missas',    description: 'Veja os horários de todas as missas semanais.' },
  { to: '/para-voce/confissoes',      icon: BookOpen,  title: 'Confissões',           description: 'Dias e horários para o sacramento da reconciliação.' },
  { to: '/para-voce/elos-liturgicos', icon: Link2,     title: 'Elos Litúrgicos',      description: 'Baixe os elos litúrgicos mensais da Diocese.' },
  { to: '/para-voce/agenda',          icon: Calendar,  title: 'Agenda Paroquial',     description: 'Próximos eventos, celebrações e encontros.' },
  { to: '/para-voce/sacramentos',     icon: Droplets,  title: 'Sacramentos',          description: 'Batismo, Eucaristia, Crisma, Casamento e mais.' },
  { to: '/para-voce/oracao',          icon: Heart,     title: 'Pedido de Oração',     description: 'Envie sua intenção de oração para a comunidade.' },
  { to: '/para-voce/noticias',        icon: Newspaper,   title: 'Enviar Notícia',       description: 'Compartilhe uma notícia com a paróquia.' },
  { to: '/para-voce/dizimistas',     icon: HandCoins,   title: 'Dízimo / Dizimistas',  description: 'Cadastre-se como dizimista via QR Code e apoie a missão da paróquia.' },
]

export function ParaVoceHub() {
  return (
    <HubPage
      title="Para Você"
      subtitle="Missas, sacramentos, agenda e muito mais"
      image="/images/para-voce-hero.jpg"
      items={items}
    />
  )
}
