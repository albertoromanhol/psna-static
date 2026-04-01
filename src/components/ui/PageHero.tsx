interface PageHeroProps {
  title:     string
  subtitle?: string
  image?:    string
  small?:    boolean
}

export function PageHero({ title, subtitle, image, small = false }: PageHeroProps) {
  return (
    <div
      className={`relative flex items-center justify-center text-center text-white
                  ${small ? 'min-h-[200px]' : 'min-h-[300px]'}`}
      style={image ? { backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined}
    >
      {/* Overlay */}
      <div className={`absolute inset-0 ${image ? 'bg-primary/70' : 'bg-primary'}`} />

<div className="relative z-10 px-4 py-10">
        <h1 className="font-heading text-3xl font-bold md:text-4xl">{title}</h1>
        {subtitle && <p className="mt-3 text-lg text-white/80 max-w-xl mx-auto">{subtitle}</p>}
        {/* Gold accent bar */}
        <div className="mt-4 mx-auto h-0.5 w-16 bg-gold" />
      </div>
    </div>
  )
}
