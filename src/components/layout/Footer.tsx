import { Link } from 'react-router-dom'
import { Instagram, Facebook, Youtube, MessageCircle, MapPin, Phone, Mail } from 'lucide-react'
import { parish } from '@/data/contacts'
import { GoldDivider } from '@/components/ui/GoldDivider'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white">
      <div className="content-wrap px-4 pt-14 pb-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Col 1 — identity */}
          <div>
            <img src="/images/nossa-senhora.jpg" alt="Nossa Senhora Aparecida"
                 className="h-16 w-16 rounded-full object-cover mb-4 border-2 border-gold/40"
                 onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
            <h3 className="font-heading text-lg font-semibold leading-snug mb-2">{parish.name}</h3>
            <p className="text-sm text-white/70">Diocese de Itabira–Coronel Fabriciano</p>
            <p className="text-sm text-white/70 mt-1">CNPJ: {parish.cnpj}</p>

            <div className="flex gap-3 mt-5">
              {parish.social.instagram && (
                <a href={parish.social.instagram} target="_blank" rel="noopener noreferrer"
                   aria-label="Instagram" className="text-white/70 hover:text-gold transition-colors">
                  <Instagram size={18} />
                </a>
              )}
              {parish.social.facebook && (
                <a href={parish.social.facebook} target="_blank" rel="noopener noreferrer"
                   aria-label="Facebook" className="text-white/70 hover:text-gold transition-colors">
                  <Facebook size={18} />
                </a>
              )}
              {parish.social.youtube && (
                <a href={parish.social.youtube} target="_blank" rel="noopener noreferrer"
                   aria-label="YouTube" className="text-white/70 hover:text-gold transition-colors">
                  <Youtube size={18} />
                </a>
              )}
              <a href={parish.whatsappUrl} target="_blank" rel="noopener noreferrer"
                 aria-label="WhatsApp" className="text-white/70 hover:text-gold transition-colors">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Col 2 — links */}
          <div>
            <h4 className="font-heading text-base font-semibold mb-4 text-gold">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-white/80">
              {[
                { to: '/para-voce/missas',       label: 'Horário de Missas' },
                { to: '/para-voce/confissoes',   label: 'Confissões' },
                { to: '/para-voce/sacramentos',  label: 'Sacramentos' },
                { to: '/para-voce/agenda',        label: 'Agenda Paroquial' },
                { to: '/para-voce/oracao',        label: 'Pedido de Oração' },
                { to: '/paroquia/pastorais',      label: 'Pastorais' },
                { to: '/paroquia/privacidade',    label: 'Política de Privacidade' },
              ].map(l => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-gold transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — contact */}
          <div>
            <h4 className="font-heading text-base font-semibold mb-4 text-gold">Contato</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <MapPin size={15} className="shrink-0 mt-0.5 text-gold" />
                <span>{parish.address.full}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={15} className="shrink-0 text-gold" />
                <a href={`tel:${parish.phones.general.replace(/\D/g,'')}`}
                   className="hover:text-gold transition-colors">{parish.phones.general}</a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle size={15} className="shrink-0 text-gold" />
                <a href={parish.whatsappUrl} target="_blank" rel="noopener noreferrer"
                   className="hover:text-gold transition-colors">{parish.phones.whatsapp}</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={15} className="shrink-0 text-gold" />
                <a href={`mailto:${parish.email}`}
                   className="hover:text-gold transition-colors break-all">{parish.email}</a>
              </li>
            </ul>
          </div>

          {/* Col 4 — secretary hours */}
          <div>
            <h4 className="font-heading text-base font-semibold mb-4 text-gold">Secretaria</h4>
            <ul className="space-y-2 text-sm text-white/80">
              {parish.secretaryHours.map(h => (
                <li key={h.days}>
                  <span className="text-white font-medium">{h.days}</span>
                  <br />{h.hours}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <GoldDivider className="my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-white/50">
          <p>© {year} {parish.name}. Todos os direitos reservados.</p>
          <Link to="/paroquia/privacidade" className="hover:text-gold transition-colors">
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  )
}
