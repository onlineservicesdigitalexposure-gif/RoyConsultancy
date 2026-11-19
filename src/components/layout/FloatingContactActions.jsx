import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Phone, ArrowUp } from 'lucide-react'
import { COMPANY_INFO } from '../../constants/company'
import { scrollToSection } from '../../utils/scroll'
import { getWhatsAppUrl } from '../../utils/whatsapp'

export function FloatingContactActions() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 350)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const whatsappUrl = getWhatsAppUrl(
    'Hello Nilanjan Roy, I am contacting you through ROY CONSULTANCY website for assistance.',
    COMPANY_INFO.contact.rawPhone
  )

  return (
    <aside
      aria-label="Quick contact actions"
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5 sm:gap-3 pointer-events-none"
    >
      {/* Back to Top Floating Button (Animated In/Out) */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            key="back-to-top"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2 }}
            onClick={() => scrollToSection('hero')}
            aria-label="Scroll back to top"
            className="pointer-events-auto p-2.5 sm:p-3 rounded-full bg-primary/95 text-accent hover:text-white hover:bg-primary border border-accent/40 shadow-lg shadow-black/15 backdrop-blur-md active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Action Cluster */}
      <div className="flex flex-col sm:flex-row items-end sm:items-center gap-2 pointer-events-auto">
        
        {/* Call Now Floating Button (Prominent on Mobile / Tablet) */}
        <motion.a
          href={`tel:${COMPANY_INFO.contact.rawPhone}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={`Call Nilanjan Roy at ${COMPANY_INFO.contact.phone}`}
          className="flex sm:hidden items-center gap-2 px-3.5 py-2.5 rounded-full bg-primary text-white border border-accent/40 shadow-xl shadow-black/20 text-xs font-bold transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent"
        >
          <div className="p-1 rounded-full bg-accent text-primary-dark">
            <Phone className="w-3 h-3" />
          </div>
          <span>Call Now</span>
        </motion.a>

        {/* WhatsApp Floating Button (All Screens) */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={`Chat on WhatsApp with Nilanjan Roy at ${COMPANY_INFO.contact.phone}`}
          className="group relative flex items-center gap-2 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 hover:bg-[#20bd5a] hover:shadow-2xl transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
        >
          {/* Subtle Ambient Pulse Ring */}
          <span
            className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping opacity-60 pointer-events-none -z-10"
            aria-hidden="true"
          />

          <MessageCircle className="w-5 h-5 sm:w-5 sm:h-5 fill-white shrink-0" />
          
          <span className="font-heading font-bold text-xs sm:text-sm tracking-wide hidden sm:inline">
            WhatsApp
          </span>
          <span className="font-heading font-bold text-xs tracking-wide sm:hidden">
            Chat
          </span>
        </motion.a>
      </div>
    </aside>
  )
}
