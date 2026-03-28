import { Slot } from '@radix-ui/react-slot'
import { type ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'gold'
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
}

const variants = {
  primary: 'bg-primary text-white hover:bg-primary-light focus-visible:ring-primary',
  outline: 'border border-primary text-primary hover:bg-primary hover:text-white focus-visible:ring-primary',
  ghost:   'text-primary hover:bg-surface focus-visible:ring-primary',
  gold:    'bg-gold text-white hover:bg-gold-dark focus-visible:ring-gold',
}

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3 text-base',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', asChild = false, className = '', ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        ref={ref}
        className={`inline-flex items-center justify-center gap-2 rounded-lg font-body font-medium
          transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
          disabled:pointer-events-none disabled:opacity-50
          ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'
