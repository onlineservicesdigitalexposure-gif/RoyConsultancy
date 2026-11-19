import React from 'react'
import { motion } from 'framer-motion'
import {
  ShieldCheck,
  FileCheck2,
  Users,
  ArrowRight,
  PhoneCall,
  MapPin,
  ChevronDown,
} from 'lucide-react'
import { Container } from '../components/common/Container'
import { Button } from '../components/common/Button'
import { COMPANY_INFO } from '../constants/company'
import { scrollToSection } from '../utils/scroll'
import { HeroGlassSlider } from '../components/common/HeroGlassSlider'

export function HeroSection() {

  return (
    <section
      id="hero"
      aria-label="Welcome to Roy Consultancy"
      className="relative flex flex-col justify-center overflow-hidden bg-linear-to-b from-primary via-primary-dark to-secondary text-white pt-20 sm:pt-24 pb-4 sm:pb-6"
    >
      {/* ========================================================= */}
      {/* DECORATIVE BACKGROUND LIGHTING & GEOMETRIC ACCENTS        */}
      {/* ========================================================= */}
      <div
        className="absolute inset-0 opacity-12 bg-[radial-gradient(#c8a45d_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none"
        aria-hidden="true"
      />
      
      {/* Top right champagne gold ambient aura */}
      <div
        className="absolute -top-32 right-0 w-[520px] h-[520px] bg-accent/15 rounded-full blur-[110px] pointer-events-none"
        aria-hidden="true"
      />
      
      {/* Bottom left deep navy/slate aura */}
      <div
        className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-secondary-light/20 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle architectural geometric grid lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-5 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern id="hero-grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#C8A45D" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>

      {/* ========================================================= */}
      {/* MAIN CONTENT CONTAINER                                    */}
      {/* ========================================================= */}
      <Container className="relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* ======================================================= */}
          {/* GLASS SLIDER VISUAL (ON TOP ON MOBILE, RIGHT ON LG)     */}
          {/* ======================================================= */}
          <div className="order-1 lg:order-2 lg:col-span-5 xl:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              <HeroGlassSlider />
            </motion.div>
          </div>

          {/* ======================================================= */}
          {/* CONTENT SECTION (BELOW ON MOBILE, LEFT ON LG)           */}
          {/* ======================================================= */}
          <div className="order-2 lg:order-1 lg:col-span-7 xl:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            {/* Location & Firm Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-accent/40 text-xs sm:text-sm text-slate-200 shadow-xs">
                <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                <span className="font-medium text-slate-100">
                  {COMPANY_INFO.location.area}, {COMPANY_INFO.location.city}
                </span>
                <span className="text-accent/60">•</span>
                <span className="text-accent-light font-semibold">West Bengal</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.12] sm:leading-[1.12]"
            >
              Your Trusted Partner for{' '}
              <span className="gold-gradient-text block sm:inline">
                Insurance & Financial Solutions
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl font-sans"
            >
              From protecting what matters most to managing your financial and tax responsibilities,{' '}
              <strong className="text-white font-semibold">ROY CONSULTANCY</strong> provides
              reliable assistance for individuals, families and businesses.
            </motion.p>

            {/* Primary & Secondary Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <Button
                variant="accent"
                size="lg"
                href="#services"
                rightIcon={ArrowRight}
                className="w-full sm:w-auto font-bold tracking-wide"
              >
                Explore Our Services
              </Button>

              <Button
                variant="outlineGold"
                size="lg"
                href="#contact"
                leftIcon={PhoneCall}
                className="w-full sm:w-auto font-medium"
              >
                Contact Our Consultant
              </Button>
            </motion.div>

            {/* ===================================================== */}
            {/* AUTHENTIC TRUST INDICATORS (NO EXAGGERATED CLAIMS)    */}
            {/* ===================================================== */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6 sm:pt-8 border-t border-white/15"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
                {/* Trust 1: Insurance Assistance */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-accent/40 transition-colors">
                  <div className="p-2 rounded-lg bg-accent/20 text-accent shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-bold text-white leading-tight">
                      Insurance Assistance
                    </h3>
                    <p className="text-xs text-slate-300 mt-0.5 leading-snug">
                      Risk coverage & asset protection
                    </p>
                  </div>
                </div>

                {/* Trust 2: Tax & Accounting Support */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-accent/40 transition-colors">
                  <div className="p-2 rounded-lg bg-accent/20 text-accent shrink-0">
                    <FileCheck2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-bold text-white leading-tight">
                      Tax & Accounting Support
                    </h3>
                    <p className="text-xs text-slate-300 mt-0.5 leading-snug">
                      Regulatory & tax filing guidance
                    </p>
                  </div>
                </div>

                {/* Trust 3: Individual & Business Services */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-accent/40 transition-colors">
                  <div className="p-2 rounded-lg bg-accent/20 text-accent shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-bold text-white leading-tight">
                      Individual & Business Services
                    </h3>
                    <p className="text-xs text-slate-300 mt-0.5 leading-snug">
                      Tailored support across Kolkata
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>

      {/* ========================================================= */}
      {/* SUBTLE SCROLL-DOWN INDICATOR                              */}
      {/* ========================================================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="relative z-10 pt-4 sm:pt-3 flex justify-center"
      >
        <button
          onClick={() => scrollToSection('about')}
          className="group inline-flex flex-col items-center gap-1.5 text-xs text-slate-400 hover:text-accent transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-full p-2"
          aria-label="Scroll down to About section"
        >
          <span className="tracking-wider uppercase text-[11px] font-medium group-hover:text-accent-light transition-colors">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.8,
              ease: 'easeInOut',
            }}
          >
            <ChevronDown className="w-4 h-4 text-accent transition-transform group-hover:scale-110" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  )
}
