import { GoldDivider } from './GoldDivider'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean  // white text (for dark backgrounds)
}

export function SectionHeader({ title, subtitle, centered = true, light = false }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className={`font-heading text-3xl font-semibold mb-3 ${light ? 'text-white' : 'text-primary'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg mb-4 ${light ? 'text-white/80' : 'text-ink-muted'}`}>{subtitle}</p>
      )}
      <GoldDivider icon className={`${centered ? 'max-w-xs mx-auto' : 'max-w-xs'}`} />
    </div>
  )
}
