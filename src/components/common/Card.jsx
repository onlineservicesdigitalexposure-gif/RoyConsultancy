import React from 'react'
import { cn } from '../../utils/cn'

export function Card({
  children,
  className = '',
  hoverEffect = true,
  accentTop = false,
  glass = false,
  as: Component = 'div',
  ...props
}) {
  return (
    <Component
      className={cn(
        'relative rounded-xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-xs transition-all duration-300',
        hoverEffect && 'hover:-translate-y-1 hover:shadow-lg hover:border-accent/40',
        accentTop && 'before:absolute before:inset-x-0 before:top-0 before:h-1 before:rounded-t-xl before:bg-linear-to-r before:from-primary before:via-accent before:to-primary',
        glass && 'bg-white/90 backdrop-blur-md',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
