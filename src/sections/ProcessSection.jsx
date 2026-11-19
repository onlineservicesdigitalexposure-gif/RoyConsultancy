import React from 'react'
import { motion } from 'framer-motion'
import {
  FileSearch,
  UserCheck,
  FileCheck2,
  ShieldCheck,
  MessageCircle,
  PhoneCall,
} from 'lucide-react'
import { Container } from '../components/common/Container'
import { SectionHeading } from '../components/common/SectionHeading'
import { getWhatsAppUrl } from '../utils/whatsapp'

const PROCESS_STEPS = [
  {
    step: '01',
    name: 'Understand Your Requirements',
    description: 'Customers share their insurance or financial service needs.',
    icon: FileSearch,
    details: 'Initial discussion via phone, WhatsApp, or an in-person meeting in Netaji Nagar to understand your specific requirements.',
  },
  {
    step: '02',
    name: 'Consultation & Guidance',
    description: 'Discuss the applicable requirements and available options.',
    icon: UserCheck,
    details: 'Clear explanations of available policy types, filing thresholds, and documentation needs with complete transparency.',
  },
  {
    step: '03',
    name: 'Documentation Assistance',
    description: 'Help with the relevant documents and application process.',
    icon: FileCheck2,
    details: 'Structured support in preparing, organizing, and completing applications and compliance submissions accurately.',
  },
  {
    step: '04',
    name: 'Follow-up & Support',
    description: 'Provide appropriate follow-up and assistance.',
    icon: ShieldCheck,
    details: 'Post-submission tracking, policy dispatch follow-ups, renewal reminders, and ongoing query assistance.',
  },
]

export function ProcessSection() {
  const whatsappUrl = getWhatsAppUrl(
    'Hello Nilanjan Roy, I would like to get started with consultation for my insurance/financial service requirements.'
  )

  return (
    <section
      id="process"
      aria-label="Our Working Process"
      className="relative py-2 sm:py-4 bg-surface border-b border-slate-200/80 overflow-hidden"
    >
      {/* Decorative ambient background accents */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-accent/6 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="OUR PROCESS"
          title="Simple Steps."
          highlight="Reliable Assistance."
          subtitle="A clear, structured workflow designed to make insurance selection and financial documentation effortless."
          align="center"
        />

        {/* ========================================================= */}
        {/* DESKTOP TIMELINE (Horizontal)                             */}
        {/* ========================================================= */}
        <div className="hidden lg:block relative mt-6 mb-8">
          {/* Connecting Line Between Steps */}
          <div
            className="absolute top-14 left-16 right-16 h-0.5 bg-linear-to-r from-accent/30 via-primary/30 to-accent/40 -z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-4 gap-8 relative z-10">
            {PROCESS_STEPS.map((item, idx) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step Node Circle with Icon */}
                  <div className="relative mb-6">
                    <div className="w-28 h-28 rounded-full bg-white border-2 border-slate-200 shadow-md flex items-center justify-center group-hover:border-accent group-hover:shadow-lg transition-all duration-300">
                      <div className="w-20 h-20 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-accent transition-colors duration-300">
                        <Icon className="w-8 h-8" />
                      </div>
                    </div>

                    {/* Step Number Tag Pill */}
                    <div className="absolute -top-1 -right-1 px-2.5 py-0.5 rounded-full bg-accent text-primary-dark font-heading font-extrabold text-xs shadow-xs border border-white">
                      {item.step}
                    </div>
                  </div>

                  {/* Step Card Content */}
                  <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs group-hover:border-accent/40 group-hover:-translate-y-1 transition-all duration-300 w-full min-h-[220px] flex flex-col justify-between text-left">
                    <div>
                      <div className="text-[10px] font-bold text-accent-dark uppercase tracking-wider mb-1.5">
                        Step {item.step}
                      </div>
                      <h3 className="font-heading text-lg font-bold text-primary group-hover:text-secondary-dark transition-colors leading-snug">
                        {item.name}
                      </h3>
                      <p className="mt-2 text-xs text-text-muted leading-relaxed font-sans">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-600 leading-normal">
                      {item.details}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* MOBILE & TABLET TIMELINE (Vertical)                       */}
        {/* ========================================================= */}
        <div className="lg:hidden relative mt-8 mb-12 pl-4 sm:pl-6 space-y-8">
          {/* Vertical Connecting Line */}
          <div
            className="absolute top-6 bottom-6 left-9 sm:left-11 w-0.5 bg-linear-to-b from-accent via-primary to-accent/40 -z-0"
            aria-hidden="true"
          />

          {PROCESS_STEPS.map((item, idx) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative flex items-start gap-5 sm:gap-6 group"
              >
                {/* Vertical Node Indicator */}
                <div className="relative shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary text-accent border-2 border-white shadow-md flex items-center justify-center font-heading font-extrabold text-sm sm:text-base z-10 relative">
                    {item.step}
                  </div>
                </div>

                {/* Vertical Step Card */}
                <div className="flex-1 rounded-2xl bg-white border border-slate-200/90 p-5 sm:p-6 shadow-2xs hover:border-accent/40 transition-colors">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="p-1.5 rounded-lg bg-primary/10 text-primary shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-bold text-accent-dark uppercase tracking-wider">
                      Step {item.step}
                    </span>
                  </div>

                  <h3 className="font-heading text-base sm:text-lg font-bold text-primary">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-text-muted leading-relaxed">
                    {item.description}
                  </p>
                  <p className="mt-3 pt-2.5 border-t border-slate-100 text-xs text-slate-600">
                    {item.details}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* ========================================================= */}
        {/* BOTTOM ACTION CALLOUT BAR                                 */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-6 sm:mt-8 p-5 sm:p-6 rounded-2xl bg-linear-to-r from-primary via-primary-dark to-secondary text-white border border-accent/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-5"
        >
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-heading text-lg sm:text-xl font-bold text-white">
              Ready to Discuss Your Insurance or Documentation Needs?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Nilanjan Roy offers straightforward consultation and document review.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-accent text-primary-dark font-bold text-xs sm:text-sm shadow-md hover:bg-accent-light active:scale-[0.98] transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Connect on WhatsApp</span>
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm border border-white/20 transition-all cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-accent" />
              <span>Request Advisory Call</span>
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
