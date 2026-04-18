import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Instagram, Facebook, Youtube, MessageCircle } from 'lucide-react'
import { parish } from '@/data/contacts'

const paroquiaLinks = [
  { to: '/paroquia/historia',    label: 'História' },
  { to: '/paroquia/padroeira',   label: 'Padroeira' },
  { to: '/paroquia/clero',       label: 'Clero' },
  { to: '/paroquia/brasao',      label: 'Identidade Visual' },
  { to: '/paroquia/comunidades', label: 'Comunidades' },
  { to: '/paroquia/cpp',         label: 'CPP' },
  { to: '/paroquia/caep',        label: 'CAEP' },
  { to: '/paroquia/pastorais',   label: 'Pastorais' },
  { to: '/paroquia/movimentos',  label: 'Movimentos e Serviços' },
]

const paraVoceLinks = [
  { to: '/para-voce/missas',          label: 'Horário de Missas' },
  { to: '/para-voce/confissoes',      label: 'Horário das Confissões' },
  { to: '/para-voce/elos-liturgicos', label: 'Elos Litúrgicos' },
  { to: '/para-voce/agenda',          label: 'Agenda Paroquial' },
  { to: '/para-voce/sacramentos',     label: 'Sacramentos' },
  { to: '/para-voce/oracao',          label: 'Pedido de Oração' },
  { to: '/para-voce/noticias',        label: 'Enviar Notícia' },
]

function DropdownMenu({ links }: { links: { to: string; label: string }[] }) {
  return (
    <div className="absolute top-full left-0 z-50 mt-1 w-56 rounded-lg border border-border
                    bg-white py-1 shadow-lg opacity-0 invisible group-hover:opacity-100
                    group-hover:visible transition-all duration-150">
      {links.map(l => (
        <NavLink
          key={l.to}
          to={l.to}
          className={({ isActive }) =>
            `block px-4 py-2 text-sm hover:bg-surface hover:text-primary transition-colors
             ${isActive ? 'text-primary font-medium' : 'text-ink'}`
          }
        >
          {l.label}
        </NavLink>
      ))}
    </div>
  )
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSection, setMobileSection] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-white/95 backdrop-blur">
      {/* Social top bar */}
      <div className="bg-primary px-4 py-1.5">
        <div className="content-wrap flex items-center justify-end gap-4">
          {parish.social.instagram && (
            <a href={parish.social.instagram} target="_blank" rel="noopener noreferrer"
               aria-label="Instagram" className="text-white/80 hover:text-white transition-colors">
              <Instagram size={15} />
            </a>
          )}
          {parish.social.facebook && (
            <a href={parish.social.facebook} target="_blank" rel="noopener noreferrer"
               aria-label="Facebook" className="text-white/80 hover:text-white transition-colors">
              <Facebook size={15} />
            </a>
          )}
          {parish.social.youtube && (
            <a href={parish.social.youtube} target="_blank" rel="noopener noreferrer"
               aria-label="YouTube" className="text-white/80 hover:text-white transition-colors">
              <Youtube size={15} />
            </a>
          )}
          <a href={parish.whatsappUrl} target="_blank" rel="noopener noreferrer"
             aria-label="WhatsApp" className="text-white/80 hover:text-white transition-colors">
            <MessageCircle size={15} />
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="px-4">
        <div className="content-wrap flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.jpeg" alt={parish.name} className="h-10 w-auto"
                 onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
            <span className="font-heading text-lg font-semibold text-primary leading-tight hidden sm:block">
              {parish.shortName}<br />
              <span className="text-xs font-body font-normal text-ink-muted">Ipatinga/MG</span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1">
            <li>
              <NavLink to="/"
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium rounded-md transition-colors
                   ${isActive ? 'text-primary' : 'text-ink hover:text-primary hover:bg-surface'}`
                }
                end
              >
                Início
              </NavLink>
            </li>

            <li className="group relative">
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-ink
                                 hover:text-primary hover:bg-surface rounded-md transition-colors">
                Paróquia
              </button>
              <DropdownMenu links={paroquiaLinks} />
            </li>

            <li className="group relative">
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-ink
                                 hover:text-primary hover:bg-surface rounded-md transition-colors">
                Para Você
              </button>
              <DropdownMenu links={paraVoceLinks} />
            </li>

            <li>
              <NavLink to="/doacao"
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium rounded-md transition-colors
                   ${isActive ? 'text-primary' : 'text-ink hover:text-primary hover:bg-surface'}`
                }
              >
                Doação
              </NavLink>
            </li>

            <li>
              <NavLink to="/midias-sociais"
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium rounded-md transition-colors
                   ${isActive ? 'text-primary' : 'text-ink hover:text-primary hover:bg-surface'}`
                }
              >
                Mídias Sociais
              </NavLink>
            </li>

            <li>
              <NavLink to="/contato"
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium rounded-md transition-colors
                   ${isActive ? 'text-primary' : 'text-ink hover:text-primary hover:bg-surface'}`
                }
              >
                Contato
              </NavLink>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-md text-ink hover:bg-surface"
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-white px-4 pb-4">
          <ul className="space-y-1 pt-2">
            <li>
              <NavLink to="/" onClick={() => setMobileOpen(false)}
                className="block rounded-md px-3 py-2 text-sm font-medium text-ink hover:bg-surface"
                end
              >
                Início
              </NavLink>
            </li>

            {/* Paróquia accordion */}
            <li>
              <button
                className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-ink hover:bg-surface"
                onClick={() => setMobileSection(s => s === 'paroquia' ? null : 'paroquia')}
              >
                Paróquia <span>{mobileSection === 'paroquia' ? '−' : '+'}</span>
              </button>
              {mobileSection === 'paroquia' && (
                <ul className="ml-4 mt-1 space-y-1">
                  {paroquiaLinks.map(l => (
                    <li key={l.to}>
                      <NavLink to={l.to} onClick={() => setMobileOpen(false)}
                        className="block rounded-md px-3 py-1.5 text-sm text-ink-muted hover:bg-surface hover:text-primary"
                      >
                        {l.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Para Você accordion */}
            <li>
              <button
                className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-ink hover:bg-surface"
                onClick={() => setMobileSection(s => s === 'paravoce' ? null : 'paravoce')}
              >
                Para Você <span>{mobileSection === 'paravoce' ? '−' : '+'}</span>
              </button>
              {mobileSection === 'paravoce' && (
                <ul className="ml-4 mt-1 space-y-1">
                  {paraVoceLinks.map(l => (
                    <li key={l.to}>
                      <NavLink to={l.to} onClick={() => setMobileOpen(false)}
                        className="block rounded-md px-3 py-1.5 text-sm text-ink-muted hover:bg-surface hover:text-primary"
                      >
                        {l.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <NavLink to="/doacao" onClick={() => setMobileOpen(false)}
                className="block rounded-md px-3 py-2 text-sm font-medium text-ink hover:bg-surface"
              >
                Doação
              </NavLink>
            </li>
            <li>
              <NavLink to="/midias-sociais" onClick={() => setMobileOpen(false)}
                className="block rounded-md px-3 py-2 text-sm font-medium text-ink hover:bg-surface"
              >
                Mídias Sociais
              </NavLink>
            </li>
            <li>
              <NavLink to="/contato" onClick={() => setMobileOpen(false)}
                className="block rounded-md px-3 py-2 text-sm font-medium text-ink hover:bg-surface"
              >
                Contato
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
