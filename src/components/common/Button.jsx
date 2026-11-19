import React from 'react'
import { scrollToSection } from '../../utils/scroll'
import { cn } from '../../utils/cn'

const VARIANTS = {
  primary:
    'bg-primary text-white hover:bg-primary-light shadow-md shadow-primary/20 border border-primary/20 hover:shadow-lg transition-all duration-200 active:scale-[0.98]',
  accent:
    'bg-accent text-primary-dark font-semibold hover:bg-accent-light shadow-md shadow-accent/25 border border-accent/40 hover:shadow-lg transition-all duration-200 active:scale-[0.98]',
  secondary:
    'bg-secondary text-white hover:bg-secondary-light shadow-sm border border-secondary/20 transition-all duration-200 active:scale-[0.98]',
  outline:
    'bg-transparent text-primary border border-primary/30 hover:bg-primary/5 hover:border-primary transition-all duration-200 active:scale-[0.98]',
  outlineGold:
    'bg-transparent text-accent-light border border-accent/50 hover:bg-accent/10 hover:border-accent transition-all duration-200 active:scale-[0.98]',
  ghost:
    'bg-transparent text-text-main hover:bg-slate-200/60 hover:text-primary transition-all duration-200',
  white:
    'bg-white text-primary hover:bg-slate-50 shadow-md shadow-black/10 border border-slate-100 transition-all duration-200 active:scale-[0.98]',
}

const SIZES = {
  sm: 'px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-md gap-1.5',
  md: 'px-5 py-2.5 text-sm sm:text-base font-medium rounded-lg gap-2',
  lg: 'px-7 py-3.5 text-base sm:text-lg font-semibold rounded-lg gap-2.5',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  onClick,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  disabled = false,
  type = 'button',
  ...props
}) {
  const handleClick = (e) => {
    if (disabled) {
      e.preventDefault()
      return
    }

    if (href && href.startsWith('#')) {
      e.preventDefault()
      scrollToSection(href)
    }

    if (onClick) {
      onClick(e)
    }
  }

  const baseClasses = cn(
    'inline-flex items-center justify-center cursor-pointer select-none text-center font-sans focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed',
    VARIANTS[variant] || VARIANTS.primary,
    SIZES[size] || SIZES.md,
    className
  )

  if (href && !disabled) {
    return (
      <a href={href} onClick={handleClick} className={baseClasses} {...props}>
        {LeftIcon && <LeftIcon className="h-4 w-4 shrink-0" />}
        <span>{children}</span>
        {RightIcon && <RightIcon className="h-4 w-4 shrink-0" />}
      </a>
    )
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      className={baseClasses}
      {...props}
    >
      {LeftIcon && <LeftIcon className="h-4 w-4 shrink-0" />}
      <span>{children}</span>
      {RightIcon && <RightIcon className="h-4 w-4 shrink-0" />}
    </button>
  )
}
