import { type HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
}

export function Card({ hover = false, className = '', children, ...props }: CardProps) {
  return (
    <div
      className={`rounded-lg border border-border bg-white p-6 shadow-sm
        ${hover ? 'transition-shadow hover:shadow-md' : ''}
        ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
