import { Link } from 'react-router-dom'
import { Clock, MapPin, MessageCircle, Calendar, ChevronRight, Droplets, Flame, Heart, Church } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { GoldDivider } from '@/components/ui/GoldDivider'
import { parish } from '@/data/contacts'
import { masses, confessions } from '@/data/schedules'
import { sacraments } from '@/data/sacraments'
import { calendarEmbedUrl } from '@/data/parish-info'

const sacramentIcons = [Droplets, Flame, Heart, Church]

const DAY_INDEX: Record<string, number> = {
  'Domingo': 0, 'Segunda-feira': 1, 'Terça-feira': 2,
  'Quarta-feira': 3, 'Quinta-feira': 4, 'Sexta-feira': 5, 'Sábado': 6,
}

function parseTime(t: string): number {
  const [h, m] = t.replace('h', ':').split(':').map(Number)
  return h * 60 + (m || 0)
}

function getNext<T extends { day: string; time: string }>(entries: T[]): T | undefined {
  const now = new Date()
  const currentDay = now.getDay()
  const currentMinutes = now.getHours() * 60 + now.getMinutes()
  const weekly = entries.filter(e => DAY_INDEX[e.day] !== undefined)
  if (!weekly.length) return undefined
  const sorted = weekly
    .map(e => {
      let diff = (DAY_INDEX[e.day] - currentDay + 7) % 7
      if (diff === 0 && parseTime(e.time) <= currentMinutes) diff = 7
      return { entry: e, sortKey: diff * 1440 + parseTime(e.time) }
    })
    .sort((a, b) => a.sortKey - b.sortKey)
  return sorted[0]?.entry
}

export function Home() {
  const nextMass = getNext(masses)
  const nextConfession = getNext(confessions)
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────── */}
      <section
        className="relative flex min-h-[600px] items-center justify-center text-center text-white"
        style={{
          backgroundImage: 'url(/church.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-primary/65" />

        <div className="relative z-10 max-w-2xl px-4 py-16">
          <p className="text-sm font-medium uppercase tracking-widest text-gold mb-3">
            Diocese de Itabira–Coronel Fabriciano
          </p>
          <h1 className="font-heading text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Paróquia Nossa<br />Senhora Aparecida
          </h1>
          <div className="mx-auto my-5 h-0.5 w-20 bg-gold" />
          <p className="text-lg text-white/85 mb-8">
            Bem-vindo à nossa comunidade de fé em Ipatinga/MG
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" variant="gold">
              <Link to="/para-voce/missas">Horário de Missas</Link>
            </Button>
            <Button asChild size="lg" variant="outline"
                    className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/contato">Fale Conosco</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Quick info bar ─────────────────────────────────── */}
      <section className="bg-gold px-4 py-4">
        <div className="content-wrap grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Clock,          label: 'Próxima Missa',   value: nextMass ? `${nextMass.day} · ${nextMass.time}` : 'Ver horários', to: '/para-voce/missas' },
            { icon: Clock,          label: 'Confissões',      value: nextConfession ? `${nextConfession.day} · ${nextConfession.time}` : 'Ver horários', to: '/para-voce/confissoes' },
            { icon: MessageCircle,  label: 'WhatsApp',        value: parish.phones.whatsapp, to: parish.whatsappUrl, external: true },
            { icon: MapPin,         label: 'Endereço',        value: `${parish.address.street}, ${parish.address.city}/${parish.address.state}`, to: parish.address.mapsLink, external: true },
          ].map(item => {
            const Icon = item.icon
            const inner = (
              <div className="flex items-center gap-3 text-white">
                <Icon size={20} className="shrink-0" />
                <div>
                  <p className="text-xs text-white/70 uppercase tracking-wide">{item.label}</p>
                  <p className="text-sm font-medium">{item.value}</p>
                </div>
              </div>
            )
            return item.external ? (
              <a key={item.label} href={item.to as string} target="_blank" rel="noopener noreferrer"
                 className="hover:opacity-80 transition-opacity">{inner}</a>
            ) : (
              <Link key={item.label} to={item.to as string} className="hover:opacity-80 transition-opacity">{inner}</Link>
            )
          })}
        </div>
      </section>

      {/* ── About the parish ───────────────────────────────── */}
      <section className="section-white">
        <div className="content-wrap grid gap-12 items-center lg:grid-cols-2">
          <div>
            <SectionHeader title="Nossa Paróquia" subtitle="Uma comunidade viva de fé" centered={false} />
            <p className="text-ink-muted leading-relaxed mb-4">
              {/* TODO: replace with a short paragraph from the parish */}
              A Paróquia Nossa Senhora Aparecida está situada no Bairro Iguaçu, em Ipatinga/MG.
              Comprometida com a evangelização e a pastoral, nossa comunidade reúne fiéis de diversos
              bairros em torno da fé, da esperança e da caridade.
            </p>
            <p className="text-ink-muted leading-relaxed mb-6">
              {/* TODO: second paragraph */}
              Sob a proteção de Nossa Senhora Aparecida, Padroeira do Brasil, buscamos ser sinal do
              amor de Deus em cada celebração, pastoral e serviço à comunidade.
            </p>
            <Button asChild variant="outline">
              <Link to="/paroquia/historia">Conheça nossa história <ChevronRight size={16} /></Link>
            </Button>
          </div>
          <div className="rounded-xl overflow-hidden shadow-md aspect-[4/3] bg-surface flex items-center justify-center">
            <img src="/church.jpeg" alt="Igreja Matriz — Paróquia Nossa Senhora Aparecida"
                 className="w-full h-full object-cover"
                 onError={(e) => {
                   const div = (e.target as HTMLImageElement).parentElement!
                   div.innerHTML = '<span class="text-ink-muted text-sm">Foto da Igreja</span>'
                 }} />
          </div>
        </div>
      </section>

      {/* ── Patron saint highlight ─────────────────────────── */}
      <section className="section-blue">
        <div className="content-wrap grid gap-10 items-center lg:grid-cols-2">
          <div className="rounded-xl overflow-hidden shadow-md aspect-square max-w-sm mx-auto bg-primary-light
                          flex items-center justify-center">
            <img src="/images/nossa-senhora.jpg" alt="Nossa Senhora Aparecida"
                 className="w-full h-full object-cover"
                 onError={(e) => {
                   const div = (e.target as HTMLImageElement).parentElement!
                   div.innerHTML = '<span class="text-white/50 text-sm">Imagem de Nossa Senhora</span>'
                 }} />
          </div>
          <div className="text-white">
            <p className="text-sm font-medium uppercase tracking-widest text-gold mb-2">12 de outubro</p>
            <h2 className="font-heading text-3xl font-bold mb-3">Nossa Senhora Aparecida</h2>
            <div className="h-0.5 w-16 bg-gold mb-5" />
            <p className="text-white/80 leading-relaxed mb-4">
              Padroeira do Brasil, Nossa Senhora Aparecida é a protetora especial de nossa paróquia.
              Sua imagem, encontrada nas águas do Rio Paraíba do Sul em 1717, é sinal da predilição
              de Maria pelo povo brasileiro.
            </p>
            <p className="text-white/80 leading-relaxed mb-6">
              {/* TODO: add more text about parish devotion */}
              Em nossa paróquia, celebramos com alegria sua festa e mantemos viva a devoção mariana
              em todas as comunidades.
            </p>
            <Button asChild variant="gold">
              <Link to="/paroquia/padroeira">Saiba mais <ChevronRight size={16} /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Sacraments grid ────────────────────────────────── */}
      <section className="section-warm">
        <div className="content-wrap">
          <SectionHeader title="Sacramentos" subtitle="Os sinais visíveis da graça de Deus" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sacraments.map((s, i) => {
              const Icon = sacramentIcons[i] ?? Heart
              return (
                <Link
                  key={s.id}
                  to={`/para-voce/sacramentos/${s.id}`}
                  className="group flex flex-col items-center text-center gap-3 rounded-lg border border-border
                             bg-white p-6 shadow-sm transition-all hover:border-gold hover:shadow-md"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-surface text-primary
                                  transition-colors group-hover:bg-gold group-hover:text-white">
                    <Icon size={26} />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-primary">{s.name}</h3>
                  <p className="text-sm text-ink-muted">{s.subtitle}</p>
                  <span className="mt-auto text-sm font-medium text-gold group-hover:underline">
                    Saiba mais →
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Agenda preview ─────────────────────────────────── */}
      <section className="section-white">
        <div className="content-wrap">
          <SectionHeader title="Agenda Paroquial" subtitle="Próximos eventos e celebrações" />
          {calendarEmbedUrl ? (
            <div className="rounded-xl overflow-hidden shadow-sm border border-border">
              <iframe
                src={calendarEmbedUrl}
                title="Agenda Paroquial"
                className="w-full"
                height="400"
                style={{ border: 0 }}
              />
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-border bg-surface p-10 text-center">
              <Calendar size={36} className="mx-auto text-ink-muted mb-3" />
              <p className="text-ink-muted">
                A agenda será exibida aqui. Configure o link do Google Calendar em{' '}
                <code className="text-sm bg-border px-1 rounded">src/data/parish-info.ts</code>.
              </p>
              <Button asChild variant="outline" className="mt-4">
                <Link to="/para-voce/agenda">Ver Agenda Completa</Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* ── Social media strip ─────────────────────────────── */}
      <section className="section-warm">
        <div className="content-wrap text-center">
          <SectionHeader title="Nossas Mídias Sociais" subtitle="Fique por dentro de tudo o que acontece" />
          <div className="flex flex-wrap justify-center gap-4">
            {parish.social.instagram && (
              <a href={parish.social.instagram} target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2.5
                            text-sm font-medium text-ink shadow-sm hover:border-gold hover:text-primary transition-all">
                Instagram · @pnsa.ipatinga
              </a>
            )}
            {parish.whatsappChannelUrl && (
              <a href={parish.whatsappChannelUrl} target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2.5
                            text-sm font-medium text-ink shadow-sm hover:border-gold hover:text-primary transition-all">
                Canal do WhatsApp
              </a>
            )}
            {parish.social.youtube && (
              <a href={parish.social.youtube} target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2.5
                            text-sm font-medium text-ink shadow-sm hover:border-gold hover:text-primary transition-all">
                YouTube
              </a>
            )}
            {parish.social.facebook && (
              <a href={parish.social.facebook} target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2.5
                            text-sm font-medium text-ink shadow-sm hover:border-gold hover:text-primary transition-all">
                Facebook
              </a>
            )}
          </div>
          <GoldDivider className="mt-10 max-w-xs mx-auto" />
        </div>
      </section>
    </>
  )
}
