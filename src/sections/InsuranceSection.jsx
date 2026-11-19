import React from 'react'
import { motion } from 'framer-motion'
import {
  HeartHandshake,
  ShieldPlus,
  Car,
  MessageCircle,
  CheckCircle2,
  Info,
  Shield,
  ArrowRight,
} from 'lucide-react'
import { Container } from '../components/common/Container'
import { SectionHeading } from '../components/common/SectionHeading'
import { INSURANCE_SERVICES } from '../data/insuranceData'
import { getWhatsAppUrl } from '../utils/whatsapp'

const ICON_MAP = {
  HeartHandshake: HeartHandshake,
  ShieldPlus: ShieldPlus,
  Car: Car,
}

export function InsuranceSection() {
  return (
    <section
      id="insurance"
      aria-label="Insurance Solutions for Every Stage of Life"
      className="relative py-2 sm:py-4 bg-background border-b border-slate-200/80 overflow-hidden"
    >
      {/* Decorative ambient background accents */}
      <div
        className="absolute top-10 right-10 w-96 h-96 bg-accent/8 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="PROTECTION & RISK MANAGEMENT"
          title="Insurance Solutions for Every"
          highlight="Stage of Life"
          subtitle="Explore insurance assistance across life, health and general insurance categories to help protect your family, health and valuable assets."
          align="center"
        />

        {/* 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {INSURANCE_SERVICES.map((service, index) => {
            const IconComponent = ICON_MAP[service.icon] || Shield
            const whatsappLink = getWhatsAppUrl(service.whatsappPrompt)

            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="group relative rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-accent/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Gold Top Accent Line */}
                <div className="absolute top-0 inset-x-0 h-1 bg-linear-to-r from-primary via-accent to-secondary opacity-80 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Visual Card Image Banner - Real Brand Photography */}
                  <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-900">
                    <img
                      src={service.image}
                      alt={service.imageAlt || `${service.title} consultation by Roy Consultancy in Kolkata`}
                      width="800"
                      height="500"
                      decoding="async"
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-primary-dark/90 via-primary-dark/20 to-transparent" />

                    {/* Floating Icon Badge */}
                    <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-white/95 text-primary backdrop-blur-md shadow-md border border-white/20">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>

                    {/* Category Eyebrow Pill */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                      <span className="text-xs font-semibold text-accent-light tracking-wide uppercase">
                        {service.eyebrow}
                      </span>
                    </div>
                  </div>

                  {/* Card Main Body */}
                  <div className="p-6 sm:p-7 space-y-5">
                    {/* Title & Description */}
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-primary group-hover:text-secondary transition-colors">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-sm text-text-muted leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Key Highlights */}
                    <div className="space-y-2 pt-1 border-t border-slate-100">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                        Core Coverage Scope
                      </span>
                      <ul className="space-y-1.5 text-xs text-text-main font-medium">
                        {service.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Supported Providers List (Text-based company names) */}
                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                          Assistance Across Entities
                        </span>
                        <span className="text-[10px] text-accent-dark font-semibold">
                          {service.companies.length} Leading Providers
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {service.companies.map((company, cIdx) => (
                          <span
                            key={cIdx}
                            className="inline-block px-2.5 py-1 rounded-md text-xs font-medium bg-surface-muted text-slate-700 border border-slate-200/80 hover:bg-white hover:border-accent/40 transition-colors"
                          >
                            {company}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-6 sm:p-7 pt-0 mt-auto">
                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
                    {/* Primary WhatsApp Enquiry CTA */}
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-[#25D366] text-white hover:bg-[#20bd5a] shadow-sm hover:shadow-md transition-all duration-200 active:scale-[0.98] cursor-pointer"
                      aria-label={`Enquire about ${service.title} on WhatsApp`}
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>Enquire Now</span>
                    </a>

                    {/* Secondary Direct Form Link */}
                    <a
                      href="#contact"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-1 px-3 py-2.5 rounded-lg text-xs font-semibold text-primary hover:text-accent-dark hover:bg-slate-100/70 transition-colors cursor-pointer"
                      title="Schedule local appointment in Netaji Nagar, Kolkata"
                    >
                      <span>Consult</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>

        {/* Regulatory & Advisory Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 p-4 rounded-xl bg-white border border-slate-200/80 text-xs text-text-muted flex items-start gap-3 shadow-2xs"
        >
          <Info className="w-4 h-4 text-accent shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Advisory Notice:</strong> ROY CONSULTANCY is an independent professional
            consultancy providing policy comparison, documentation support, and claim guidance in
            Kolkata. We do not claim exclusive partnerships, official representation or authorized
            agency status unless confirmed in writing. All company names, brand identifiers, and
            trademarks are the property of their respective insurer organizations.
          </p>
        </motion.div>
      </Container>
    </section>
  )
}
