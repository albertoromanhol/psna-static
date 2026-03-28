import { Cross } from 'lucide-react'

interface GoldDividerProps {
  icon?: boolean
  className?: string
}

export function GoldDivider({ icon = false, className = '' }: GoldDividerProps) {
  if (!icon) return <span className={`gold-divider ${className}`} />

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span className="gold-divider flex-1" />
      <Cross className="text-gold shrink-0" size={16} />
      <span className="gold-divider flex-1" />
    </div>
  )
}
