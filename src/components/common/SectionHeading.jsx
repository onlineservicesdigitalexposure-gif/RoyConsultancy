import React from 'react'
import { cn } from '../../utils/cn'
import { Badge } from './Badge'

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = 'center',
  theme = 'light',
  className = '',
}) {
  const isCenter = align === 'center'
  const isDark = theme === 'dark'

  return (
    <div
      className={cn(
        'max-w-3xl mb-4 sm:mb-6',
        isCenter ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {eyebrow && (
        <div className={cn('mb-1.5 sm:mb-2 flex', isCenter ? 'justify-center' : 'justify-start')}>
          <Badge variant={isDark ? 'gold' : 'gold'}>{eyebrow}</Badge>
        </div>
      )}

      <h2
        className={cn(
          'text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight',
          isDark ? 'text-white' : 'text-primary'
        )}
      >
        {title}{' '}
        {highlight && (
          <span className={cn(isDark ? 'gold-gradient-text' : 'text-accent-dark')}>
            {highlight}
          </span>
        )}
      </h2>

      {subtitle && (
        <p
          className={cn(
            'mt-2 text-sm sm:text-base leading-relaxed',
            isDark ? 'text-slate-300' : 'text-text-muted'
          )}
        >
          {subtitle}
        </p>
      )}

      {/* Subtle gold accent underline */}
      <div
        className={cn(
          'mt-3 flex items-center gap-2',
          isCenter ? 'justify-center' : 'justify-start'
        )}
      >
        <span className="h-0.5 w-12 bg-accent rounded-full"></span>
        <span className="h-1 w-2 bg-accent rounded-full"></span>
      </div>
    </div>
  )
}
