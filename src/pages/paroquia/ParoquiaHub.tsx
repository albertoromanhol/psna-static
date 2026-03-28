import {
  BookOpen, Star, Users, Shield, MapPin,
  Users2, BookMarked, Heart, Scroll, Lock,
} from 'lucide-react'
import { HubPage } from '@/components/ui/HubPage'

const items = [
  { to: '/paroquia/historia',    icon: BookOpen,   title: 'História',             description: 'Conheça a trajetória da nossa paróquia.' },
  { to: '/paroquia/padroeira',   icon: Star,       title: 'Padroeira',            description: 'Nossa Senhora Aparecida, Padroeira do Brasil.' },
  { to: '/paroquia/clero',       icon: Users,      title: 'Clero',                description: 'Conheça o pároco, vigário e diácono.' },
  { to: '/paroquia/brasao',      icon: Shield,     title: 'Brasão',               description: 'O brasão e os símbolos da paróquia.' },
  { to: '/paroquia/comunidades', icon: MapPin,     title: 'Comunidades',          description: 'Nossas comunidades espalhadas pelo bairro.' },
  { to: '/paroquia/cpp',         icon: Users2,     title: 'CPP',                  description: 'Conselho Pastoral Paroquial.' },
  { to: '/paroquia/caep',        icon: BookMarked, title: 'CAEP',                 description: 'Conselho de Assuntos Econômicos e Patrimoniais.' },
  { to: '/paroquia/pastorais',   icon: Heart,      title: 'Pastorais',            description: 'Pastorais ativas e seus coordenadores.' },
  { to: '/paroquia/movimentos',  icon: Scroll,     title: 'Movimentos e Serviços',description: 'Grupos e serviços na paróquia.' },
  { to: '/paroquia/privacidade', icon: Lock,       title: 'Política de Privacidade', description: 'Como tratamos seus dados pessoais (LGPD).' },
]

export function ParoquiaHub() {
  return (
    <HubPage
      title="Nossa Paróquia"
      subtitle="Conheça a história, o clero, as comunidades e muito mais"
      image="/images/paroquia-hero.jpg"
      items={items}
    />
  )
}
