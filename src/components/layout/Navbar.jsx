import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Phone, Calendar } from 'lucide-react'
import { NAV_LINKS } from '../../constants/navigation'
import { COMPANY_INFO } from '../../constants/company'
import { scrollToSection } from '../../utils/scroll'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { Container } from '../common/Container'
import { cn } from '../../utils/cn'

// Static reference to avoid recreating array and triggering IntersectionObserver recreation
const SECTION_IDS = NAV_LINKS.map((link) => link.id)

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  // Track active section via IntersectionObserver with static array reference
  const activeSection = useScrollSpy(SECTION_IDS, '-20% 0px -60% 0px')

  // Scroll listener for transparent -> solid white transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initialize on mount

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Keyboard accessibility: Close mobile drawer on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [mobileMenuOpen])

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  // Smooth navigation handler
  const handleNavClick = useCallback((id) => {
    setMobileMenuOpen(false)
    scrollToSection(id)
  }, [])

  return (
    <>
      <header
        role="banner"
        className={cn(
          'fixed top-0 inset-x-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white/95 text-text-main shadow-md shadow-slate-900/5 backdrop-blur-md py-3.5 border-b border-slate-200/80'
            : 'bg-transparent text-white py-5 sm:py-6 border-b border-white/10'
        )}
      >
        <Container className="flex items-center justify-between">
          {/* ========================================================= */}
          {/* LEFT: BRAND NAME & MINIMAL PROFESSIONAL LOGO             */}
          {/* ========================================================= */}
          <button
            onClick={() => handleNavClick('hero')}
            className="group flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg p-1 transition-transform active:scale-[0.98] cursor-pointer"
            aria-label="Roy Consultancy - Return to top"
          >
            {/* Minimal Geometric Financial Crest */}
            <div
              className={cn(
                'relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl transition-all duration-300 shadow-sm',
                isScrolled
                  ? 'bg-primary text-accent border border-primary/20 shadow-primary/10'
                  : 'bg-white/10 backdrop-blur-md text-accent border border-white/20'
              )}
            >
              {/* Minimalist Corporate Shield & Growth Bars SVG */}
              <svg
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 transition-transform duration-300 group-hover:scale-105"
                aria-hidden="true"
              >
                {/* Shield Outline */}
                <path
                  d="M16 3L6 7V15C6 21.5 10.3 27.5 16 29C21.7 27.5 26 21.5 26 15V7L16 3Z"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={isScrolled ? 'text-accent' : 'text-accent-light'}
                />
                {/* Ascending Financial Pillars */}
                <path
                  d="M11 18V19.5"
                  stroke={isScrolled ? '#FFFFFF' : '#FFFFFF'}
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M16 14V19.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="text-accent"
                />
                <path
                  d="M21 10.5V19.5"
                  stroke={isScrolled ? '#FFFFFF' : '#FFFFFF'}
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Typography */}
            <div className="flex flex-col">
              <span
                className={cn(
                  'font-heading text-lg sm:text-xl font-extrabold tracking-tight leading-tight transition-colors',
                  isScrolled ? 'text-primary' : 'text-white'
                )}
              >
                ROY <span className="text-accent font-extrabold">CONSULTANCY</span>
              </span>
              <span
                className={cn(
                  'text-[9px] sm:text-[10px] tracking-wider uppercase font-medium transition-colors',
                  isScrolled ? 'text-text-muted' : 'text-slate-300'
                )}
              >
                Financial & Advisory Services • Kolkata
              </span>
            </div>
          </button>

          {/* ========================================================= */}
          {/* CENTER / RIGHT: DESKTOP NAVIGATION LINKS                  */}
          {/* ========================================================= */}
          <nav
            role="navigation"
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-1 xl:gap-2"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(
                    'relative px-3.5 py-2 text-sm font-medium tracking-tight rounded-md transition-colors cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-accent',
                    isScrolled
                      ? isActive
                        ? 'text-primary font-semibold'
                        : 'text-text-muted hover:text-primary hover:bg-slate-100/70'
                      : isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-200 hover:text-white hover:bg-white/10'
                  )}
                >
                  <span>{link.label}</span>

                  {/* Elegant Accent Underline with Framer Motion layoutId */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-underline"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-accent rounded-full"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                      aria-hidden="true"
                    />
                  )}
                </button>
              )
            })}
          </nav>

          {/* ========================================================= */}
          {/* RIGHT: HIGHLIGHTED "GET CONSULTATION" CTA BUTTON           */}
          {/* ========================================================= */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('contact')}
              className={cn(
                'group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 shadow-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 active:scale-[0.98]',
                isScrolled
                  ? 'bg-primary text-white hover:bg-primary-light shadow-primary/20 border border-primary/20 hover:shadow-lg'
                  : 'bg-accent text-primary-dark font-bold hover:bg-accent-light shadow-accent/25 border border-accent/40 hover:shadow-lg'
              )}
            >
              <Calendar className="w-4 h-4 text-accent group-hover:rotate-12 transition-transform duration-200" />
              <span>Get Consultation</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* ========================================================= */}
          {/* MOBILE: ANIMATED HAMBURGER TOGGLE BUTTON                   */}
          {/* ========================================================= */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={cn(
              'lg:hidden relative p-2.5 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer',
              isScrolled
                ? 'text-primary hover:bg-slate-100'
                : 'text-white hover:bg-white/10'
            )}
            aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              {/* Top Bar */}
              <motion.span
                animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className={cn(
                  'w-6 h-0.5 rounded-full transition-colors block',
                  isScrolled ? 'bg-primary' : 'bg-white'
                )}
              />
              {/* Middle Bar */}
              <motion.span
                animate={mobileMenuOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
                className={cn(
                  'w-6 h-0.5 rounded-full transition-colors block',
                  isScrolled ? 'bg-primary' : 'bg-white'
                )}
              />
              {/* Bottom Bar */}
              <motion.span
                animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className={cn(
                  'w-6 h-0.5 rounded-full transition-colors block',
                  isScrolled ? 'bg-primary' : 'bg-white'
                )}
              />
            </div>
          </button>
        </Container>
      </header>

      {/* ========================================================= */}
      {/* MOBILE NAVIGATION DRAWER & BACKDROP                       */}
      {/* ========================================================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-40" id="mobile-navigation-drawer">
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-primary-dark/80 backdrop-blur-md"
              aria-hidden="true"
            />

            {/* Sliding Mobile Drawer */}
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-18 sm:top-20 inset-x-0 bg-white shadow-2xl border-b border-slate-200/90 rounded-b-2xl overflow-hidden max-h-[85vh] flex flex-col"
            >
              <div className="p-6 overflow-y-auto space-y-4">
                {/* Mobile Navigation Links */}
                <nav className="flex flex-col space-y-1">
                  {NAV_LINKS.map((link, idx) => {
                    const isActive = activeSection === link.id
                    return (
                      <motion.button
                        key={link.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.04 + 0.05 }}
                        onClick={() => handleNavClick(link.id)}
                        className={cn(
                          'flex items-center justify-between w-full px-4 py-3 rounded-xl text-base font-medium transition-all text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent',
                          isActive
                            ? 'bg-primary/5 text-primary font-bold border-l-4 border-accent'
                            : 'text-text-main hover:bg-slate-50 hover:text-primary'
                        )}
                      >
                        <span>{link.label}</span>
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-accent" />
                        )}
                      </motion.button>
                    )
                  })}
                </nav>

                {/* Mobile CTA & Quick Contacts */}
                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <button
                    onClick={() => handleNavClick('contact')}
                    className="w-full flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-accent text-primary-dark font-bold shadow-md shadow-accent/20 hover:bg-accent-light active:scale-[0.99] transition-all cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Get Free Consultation</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <div className="p-3.5 rounded-xl bg-surface-muted border border-slate-200/60 flex items-center justify-between text-xs text-text-muted">
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-accent" />
                      <span>Direct Advisory Line</span>
                    </div>
                    <a
                      href={`tel:${COMPANY_INFO.contact.rawPhone}`}
                      className="font-semibold text-primary hover:text-accent-dark transition-colors"
                    >
                      {COMPANY_INFO.contact.phone}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
