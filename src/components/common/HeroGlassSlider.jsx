import React, { useState, useEffect, useCallback, memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import heroImg1 from '../../assets/images/HeroImage1.jpeg'
import heroImg2 from '../../assets/images/HeroImage2.jpeg'
import heroImg3 from '../../assets/images/HeroImage3.jpeg'
import heroImg4 from '../../assets/images/HeroImage4.jpeg'

const HERO_SLIDES = [
  {
    id: 1,
    image: heroImg1,
    alt: 'Roy Consultancy - Financial Advisory & Insurance Services in Kolkata',
  },
  {
    id: 2,
    image: heroImg2,
    alt: 'Insurance Solutions at Roy Consultancy Netaji Nagar Kolkata',
  },
  {
    id: 3,
    image: heroImg3,
    alt: 'Taxation, GST and Accounting Support by Roy Consultancy Kolkata',
  },
  {
    id: 4,
    image: heroImg4,
    alt: 'Consultant Nilanjan Roy - Roy Consultancy Netaji Nagar Kolkata',
  },
]

export const HeroGlassSlider = memo(function HeroGlassSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Preload all hero slide images into browser cache on mount for zero-latency transitions
  useEffect(() => {
    HERO_SLIDES.forEach((slide) => {
      const img = new Image()
      img.src = slide.image
    })
  }, [])

  // Auto-slide every 2 seconds (2s time interval between each image)
  useEffect(() => {
    if (isPaused) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)
    }, 2000)

    return () => clearInterval(timer)
  }, [isPaused])

  const handleSelectSlide = useCallback((idx) => {
    setCurrentSlide(idx)
  }, [])

  return (
    <div
      className="relative w-full max-w-md lg:max-w-none mx-auto select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Roy Consultancy Featured Image Showcase"
    >
      {/* Luxury Frame Ambient Glow */}
      <div
        className="absolute -inset-2.5 rounded-3xl bg-linear-to-tr from-accent/30 via-primary-light/40 to-accent/20 blur-xl opacity-75 pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Visual Glass Card Container */}
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-white/25 bg-white/10 backdrop-blur-xl shadow-2xl p-2 sm:p-2.5 transition-all">
        {/* Full View Aspect Ratio Frame - Only Visible Images (No Obscuring Tags or Dark Overlays) */}
        <div className="relative aspect-4/3 sm:aspect-16/11 lg:aspect-4/3 rounded-xl sm:rounded-2xl overflow-hidden bg-slate-950 shadow-inner">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentSlide}
              src={HERO_SLIDES[currentSlide].image}
              alt={HERO_SLIDES[currentSlide].alt}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.45, ease: 'easeInOut' }}
              className="w-full h-full object-cover object-center"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </AnimatePresence>
        </div>

        {/* Minimal Unobtrusive Glass Slide Navigation Dots (Placed cleanly below the image) */}
        <div className="pt-2.5 pb-1 flex items-center justify-center gap-2">
          {HERO_SLIDES.map((slide, idx) => {
            const isActive = currentSlide === idx
            return (
              <button
                key={slide.id}
                onClick={() => handleSelectSlide(idx)}
                aria-label={`View slide ${idx + 1} of ${HERO_SLIDES.length}`}
                aria-current={isActive ? 'true' : 'false'}
                className={`relative h-2 rounded-full transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  isActive
                    ? 'w-7 bg-accent shadow-sm shadow-accent/50'
                    : 'w-2 bg-white/40 hover:bg-white/80'
                }`}
              />
            )
          })}
        </div>
      </div>

      {/* Subtle Gold Corner Brand Accents */}
      <div
        className="absolute -bottom-3 -right-3 w-16 h-16 border-r-2 border-b-2 border-accent rounded-br-2xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -top-3 -left-3 w-16 h-16 border-l-2 border-t-2 border-accent rounded-tl-2xl pointer-events-none"
        aria-hidden="true"
      />
    </div>
  )
})
