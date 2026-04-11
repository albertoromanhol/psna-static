import { PageHero } from '@/components/ui/PageHero'
import { GoldDivider } from '@/components/ui/GoldDivider'
import { cpp, caep } from '@/data/parish-info'

interface CppCaepProps {
  type: 'cpp' | 'caep'
}

function MemberCard({ m }: { m: { name: string; role: string } }) {
  return (
    <li className="flex items-center gap-3 rounded-lg border border-border px-4 py-3">
      <div className="h-8 w-8 rounded-full bg-gold/20 flex items-center justify-center
                      font-heading font-bold text-gold text-sm shrink-0">{m.name[0]}</div>
      <div>
        <p className="font-medium text-ink text-sm">{m.name}</p>
        <p className="text-xs text-ink-muted">{m.role}</p>
      </div>
    </li>
  )
}

export function CppCaep({ type }: CppCaepProps) {
  const data = type === 'cpp' ? cpp : caep
  const groups = 'memberGroups' in data ? (data as typeof caep).memberGroups : null

  return (
    <>
      <PageHero title={data.title} small />
      <section className="section-white">
        <div className="content-wrap max-w-3xl">
          <GoldDivider icon className="mb-10" />
          {data.description.split('\n\n').map((p, i) => (
            <p key={i} className="text-ink-muted leading-relaxed mb-4">{p}</p>
          ))}

          {groups ? (
            groups.map(g => (
              <div key={g.groupTitle} className="mt-8">
                <h3 className="font-heading text-xl font-semibold text-primary mb-4">{g.groupTitle}</h3>
                <ul className="space-y-2">
                  {g.members.map((m, i) => <MemberCard key={i} m={m} />)}
                </ul>
              </div>
            ))
          ) : data.members.length > 0 ? (
            <>
              <h3 className="font-heading text-xl font-semibold text-primary mt-8 mb-4">Membros</h3>
              <ul className="space-y-2">
                {data.members.map((m, i) => <MemberCard key={i} m={m} />)}
              </ul>
            </>
          ) : null}
        </div>
      </section>
    </>
  )
}
