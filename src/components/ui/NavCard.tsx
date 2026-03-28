import { Link } from 'react-router-dom'
import { type LucideIcon, ChevronRight } from 'lucide-react'

interface NavCardProps {
  title:       string
  description: string
  to:          string
  icon:        LucideIcon
}

export function NavCard({ title, description, to, icon: Icon }: NavCardProps) {
  return (
    <Link
      to={to}
      className="group flex flex-col gap-3 rounded-lg border border-border bg-white p-6 shadow-sm
                 transition-all hover:border-gold hover:shadow-md"
    >
      <div className="flex items-center justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-surface text-primary
                        transition-colors group-hover:bg-gold group-hover:text-white">
          <Icon size={22} />
        </div>
        <ChevronRight size={18} className="text-ink-muted transition-transform group-hover:translate-x-1" />
      </div>
      <div>
        <h3 className="font-heading text-lg font-semibold text-primary">{title}</h3>
        <p className="mt-1 text-sm text-ink-muted">{description}</p>
      </div>
    </Link>
  )
}
