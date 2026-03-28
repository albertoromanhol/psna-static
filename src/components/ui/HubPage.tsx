import { type LucideIcon } from 'lucide-react'
import { PageHero } from './PageHero'
import { NavCard } from './NavCard'

interface HubItem {
  title:       string
  description: string
  to:          string
  icon:        LucideIcon
}

interface HubPageProps {
  title:     string
  subtitle?: string
  image?:    string
  items:     HubItem[]
}

export function HubPage({ title, subtitle, image, items }: HubPageProps) {
  return (
    <>
      <PageHero title={title} subtitle={subtitle} image={image} />
      <section className="section-white">
        <div className="content-wrap">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map(item => (
              <NavCard key={item.to} {...item} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
