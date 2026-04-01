import { Mail, Phone } from 'lucide-react'
import { PageHero } from '@/components/ui/PageHero'
import { GoldDivider } from '@/components/ui/GoldDivider'
import { clergy } from '@/data/clergy'

export function Clero() {
  return (
    <>
      <PageHero title="Clero" subtitle="Conheça os sacerdotes e diácono da paróquia" />
      <section className="section-white">
        <div className="content-wrap">
          <GoldDivider icon className="mb-12 max-w-xs mx-auto" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {clergy.map(member => (
              <div key={member.name}
                   className="flex flex-col items-center text-center rounded-xl border border-border
                              bg-white p-8 shadow-sm">
                <div className="mb-5 h-32 w-32 overflow-hidden rounded-full border-4 border-gold/30 bg-surface">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="h-full w-full object-cover object-top"
                    onError={(e) => {
                      const div = (e.target as HTMLImageElement).parentElement!
                      div.innerHTML = `<div class="h-full w-full flex items-center justify-center bg-surface text-ink-muted text-3xl font-heading font-bold">${member.name[0]}</div>`
                    }}
                  />
                </div>
                <p className="text-xs font-medium uppercase tracking-widest text-gold mb-1">{member.role}</p>
                <h3 className="font-heading text-xl font-semibold text-primary">{member.name}</h3>
                <GoldDivider className="my-4 max-w-[3rem]" />
                <p className="text-sm text-ink-muted leading-relaxed mb-4">{member.bio}</p>
                <div className="mt-auto flex flex-col gap-2 w-full">
                  {member.phone && (
                    <a href={`tel:${member.phone.replace(/\D/g,'')}`}
                       className="flex items-center justify-center gap-2 text-sm text-ink-muted hover:text-primary transition-colors">
                      <Phone size={14} /> {member.phone}
                    </a>
                  )}
                  {member.email && (
                    <a href={`mailto:${member.email}`}
                       className="flex items-center justify-center gap-2 text-sm text-ink-muted hover:text-primary transition-colors break-all">
                      <Mail size={14} /> {member.email}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
