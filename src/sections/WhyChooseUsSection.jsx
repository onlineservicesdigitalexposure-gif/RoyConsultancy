import React from 'react'
import { motion } from 'framer-motion'
import {
  Layers,
  UserCheck,
  MessageSquareQuote,
  PhoneCall,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'
import { Container } from '../components/common/Container'
import { SectionHeading } from '../components/common/SectionHeading'

const WHY_CHOOSE_US_FEATURES = [
  {
    id: 'multiple-services',
    stepNumber: '01',
    title: 'Multiple Service Categories',
    description: 'Insurance and financial consultancy services under one roof.',
    icon: Layers,
    details: [
      'Life, Health & General Insurance',
      'Income Tax & GST Compliance',
      'Company & Business Registrations',
    ],
  },
  {
    id: 'customer-focused',
    stepNumber: '02',
    title: 'Customer-Focused Guidance',
    description: 'Assistance based on individual requirements.',
    icon: UserCheck,
    details: [
      'Direct assessment of your situation',
      'No pushy or unsuitable product options',
      'Solutions suited for families and businesses',
    ],
  },
  {
    id: 'clear-communication',
    stepNumber: '03',
    title: 'Clear Communication',
    description: 'Simple explanations and transparent service information.',
    icon: MessageSquareQuote,
    details: [
      'Plain language, no confusing jargon',
      'Clear documentation checklists',
      'Transparent timeline expectations',
    ],
  },
  {
    id: 'convenient-assistance',
    stepNumber: '04',
    title: 'Convenient Assistance',
    description: 'Contact and enquiry support through phone and WhatsApp.',
    icon: PhoneCall,
    details: [
      'Fast enquiry response on WhatsApp',
      'Direct phone support with Nilanjan Roy',
      'Local Kolkata in-person meetings',
    ],
  },
]

export function WhyChooseUsSection() {
  return (
    <section
      id="why-us"
      aria-label="Why Choose ROY CONSULTANCY"
      className="relative py-2 sm:py-4 bg-background border-b border-slate-200/80 overflow-hidden"
    >
      {/* Decorative ambient background accents */}
      <div
        className="absolute top-1/3 left-10 w-80 h-80 bg-accent/8 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="CLIENT-CENTERED ADVISORY"
          title="Why Choose"
          highlight="ROY CONSULTANCY?"
          subtitle="Professional assistance, clear communication and a customer-focused approach for your insurance and financial service requirements."
          align="center"
        />

        {/* 4 Feature Cards Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch">
          {WHY_CHOOSE_US_FEATURES.map((feature, idx) => {
            const Icon = feature.icon

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-2xs hover:shadow-xl hover:border-accent/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Top gold accent line */}
                <div className="absolute top-0 inset-x-0 h-1 bg-linear-to-r from-primary via-accent to-secondary opacity-70 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Card Header: Monogram/Icon and Step Number */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-accent transition-colors duration-200 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="font-heading font-extrabold text-2xl text-slate-300 group-hover:text-accent-dark transition-colors select-none">
                      {feature.stepNumber}
                    </span>
                  </div>

                  {/* Feature Title */}
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-primary group-hover:text-secondary-dark transition-colors leading-snug">
                    {feature.title}
                  </h3>

                  {/* Feature Description */}
                  <p className="mt-2 text-sm text-text-muted leading-relaxed font-sans">
                    {feature.description}
                  </p>

                  {/* Detail Bullet Points */}
                  <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                    {feature.details.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Subtle Bottom Indicator */}
                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-text-muted">
                  <span className="font-medium text-[11px] text-accent-dark uppercase tracking-wider">
                    Core Commitment
                  </span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-primary hover:text-accent-dark font-semibold transition-colors"
                  >
                    <span>Enquire</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
