import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle, MessageCircle, ArrowRight } from 'lucide-react'
import { Container } from '../components/common/Container'
import { SectionHeading } from '../components/common/SectionHeading'
import { FAQ_ITEMS } from '../data/faqData'
import { getWhatsAppUrl } from '../utils/whatsapp'
import { cn } from '../utils/cn'

export function FAQSection() {
  const [openId, setOpenId] = useState(FAQ_ITEMS[0].id)

  const toggleItem = (id) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  const generalWhatsappUrl = getWhatsAppUrl(
    'Hello Nilanjan Roy, I have a query regarding ROY CONSULTANCY services.'
  )

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions"
      className="relative py-2 sm:py-4 bg-background border-b border-slate-200/80 overflow-hidden"
    >
      {/* Decorative ambient background accents */}
      <div
        className="absolute top-1/3 right-10 w-80 h-80 bg-accent/6 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10 max-w-4xl">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="HELPFUL GUIDANCE"
          title="Frequently Asked"
          highlight="Questions"
          subtitle="Clear, verified answers regarding our insurance advisory, tax filing, and documentation support."
          align="center"
        />

        {/* ========================================================= */}
        {/* ACCESSIBLE ANIMATED ACCORDION LIST                        */}
        {/* ========================================================= */}
        <div className="space-y-3.5 sm:space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openId === item.id

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className={cn(
                  'rounded-2xl bg-white border transition-all duration-200 overflow-hidden',
                  isOpen
                    ? 'border-accent/60 shadow-md ring-1 ring-accent/20'
                    : 'border-slate-200/90 shadow-2xs hover:border-slate-300 hover:shadow-xs'
                )}
              >
                {/* Accordion Question Trigger Button */}
                <button
                  type="button"
                  id={`faq-question-${item.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  onClick={() => toggleItem(item.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <div className="flex items-center gap-3.5 sm:gap-4 pr-2">
                    <span
                      className={cn(
                        'w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center font-heading font-extrabold text-xs sm:text-sm shrink-0 transition-colors',
                        isOpen
                          ? 'bg-accent text-primary-dark'
                          : 'bg-primary/10 text-primary'
                      )}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </span>

                    <h3
                      className={cn(
                        'font-heading text-base sm:text-lg font-bold transition-colors leading-snug',
                        isOpen ? 'text-primary' : 'text-text-main hover:text-primary'
                      )}
                    >
                      {item.question}
                    </h3>
                  </div>

                  <div
                    className={cn(
                      'w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 shrink-0',
                      isOpen
                        ? 'bg-accent/20 text-accent-dark rotate-180'
                        : 'bg-slate-100 text-slate-500'
                    )}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Animated Accordion Answer Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${item.id}`}
                      role="region"
                      aria-labelledby={`faq-question-${item.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: 'easeInOut' }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-slate-100/90 text-sm sm:text-base text-text-muted leading-relaxed font-sans">
                        <p className="bg-surface-muted/60 p-4 rounded-xl border-l-3 border-accent text-slate-700">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Support Callout */}
        <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-accent/20 text-accent-dark shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading text-base font-bold text-primary">
                Have a Question Not Listed Here?
              </h4>
              <p className="text-xs text-text-muted mt-0.5">
                Nilanjan Roy is available directly to clarify any insurance or tax documentation question.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href={generalWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#25D366] text-white text-xs font-bold hover:bg-[#20bd5a] transition-all cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>Ask on WhatsApp</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-primary text-white text-xs font-semibold hover:bg-primary-light transition-all cursor-pointer"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
