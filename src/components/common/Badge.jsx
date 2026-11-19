import React from 'react'
import { cn } from '../../utils/cn'

const VARIANTS = {
  gold: 'bg-accent/15 text-accent-dark border border-accent/30',
  navy: 'bg-primary/10 text-primary border border-primary/20',
  white: 'bg-white/10 text-white border border-white/20 backdrop-blur-xs',
  subtle: 'bg-surface-muted text-text-muted border border-slate-200',
}

const SIZES = {
  sm: 'px-2.5 py-0.5 text-xs',
  md: 'px-3.5 py-1 text-xs sm:text-sm',
  lg: 'px-4 py-1.5 text-sm',
}

export function Badge({
  children,
  variant = 'gold',
  size = 'md',
  className = '',
  icon: Icon,
  ...props
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full font-semibold tracking-wide uppercase',
        VARIANTS[variant] || VARIANTS.gold,
        SIZES[size] || SIZES.md,
        className
      )}
      {...props}
    >
      {Icon && <Icon className="h-3.5 w-3.5 shrink-0" />}
      {children}
    </span>
  )
}
