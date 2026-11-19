import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  HeartHandshake,
  ShieldPlus,
  Car,
  MessageCircle,
  Building2,
  CheckCircle2,
  Info,
  ArrowUpRight,
} from 'lucide-react'
import { Container } from '../components/common/Container'
import { SectionHeading } from '../components/common/SectionHeading'
import { CompanyLogo } from '../components/common/CompanyLogo'
import { INSURANCE_PROVIDER_TABS } from '../data/insuranceData'
import { getWhatsAppUrl } from '../utils/whatsapp'
import { cn } from '../utils/cn'

const TAB_ICONS = {
  HeartHandshake: HeartHandshake,
  ShieldPlus: ShieldPlus,
  Car: Car,
}

export function InsuranceProvidersSection() {
  const [activeTabId, setActiveTabId] = useState(INSURANCE_PROVIDER_TABS[0].id)

  const activeTab =
    INSURANCE_PROVIDER_TABS.find((tab) => tab.id === activeTabId) ||
    INSURANCE_PROVIDER_TABS[0]

  return (
    <section
      id="insurance-providers"
      aria-label="Insurance Providers and Companies Network"
      className="relative py-2 sm:py-4 bg-surface border-b border-slate-200/80 overflow-hidden"
    >
      {/* Decorative ambient background accents */}
      <div
        className="absolute top-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="SUPPORTED INSURER NETWORK"
          title="Insurance"
          highlight="Providers"
          subtitle="Assistance Across Multiple Insurance Providers"
          align="center"
        />

        {/* ========================================================= */}
        {/* SEGMENTED CATEGORY TABS                                   */}
        {/* ========================================================= */}
        <div className="flex justify-center mb-4 sm:mb-5">
          <div
            role="tablist"
            aria-label="Insurance Provider Categories"
            className="inline-flex p-1.5 sm:p-2 rounded-2xl bg-surface-muted border border-slate-200/90 shadow-inner max-w-full overflow-x-auto"
          >
            {INSURANCE_PROVIDER_TABS.map((tab) => {
              const isActive = activeTabId === tab.id
              const TabIcon = TAB_ICONS[tab.icon] || Building2

              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${tab.id}`}
                  id={`tab-${tab.id}`}
                  onClick={() => setActiveTabId(tab.id)}
                  className={cn(
                    'relative flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-accent whitespace-nowrap',
                    isActive
                      ? 'text-primary shadow-sm'
                      : 'text-text-muted hover:text-text-main hover:bg-white/40'
                  )}
                >
                  {/* Sliding Active Pill Background with Framer Motion */}
                  {isActive && (
                    <motion.div
                      layoutId="active-provider-tab"
                      className="absolute inset-0 bg-white rounded-xl shadow-xs border border-slate-200/80"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      aria-hidden="true"
                    />
                  )}

                  <span className="relative z-10 flex items-center gap-2">
                    <TabIcon
                      className={cn(
                        'w-4 h-4 transition-colors',
                        isActive ? 'text-accent-dark' : 'text-slate-400'
                      )}
                    />
                    <span>{tab.label}</span>
                    <span
                      className={cn(
                        'px-2 py-0.5 rounded-full text-[10px] font-bold transition-colors',
                        isActive
                          ? 'bg-accent/20 text-accent-dark'
                          : 'bg-slate-200/70 text-slate-600'
                      )}
                    >
                      {tab.providers.length}
                    </span>
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Tab Description Context */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <p className="text-xs sm:text-sm text-text-muted">
            {activeTab.description}
          </p>
        </div>

        {/* ========================================================= */}
        {/* RESPONSIVE GRID OF CLEAN WHITE PROVIDER CARDS             */}
        {/* ========================================================= */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTabId}
            id={`panel-${activeTab.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeTab.id}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {activeTab.providers.map((provider, pIdx) => {
              const whatsappEnquiry = getWhatsAppUrl(
                `Hello Nilanjan Roy, I would like to enquire about policy options and claims assistance for ${provider.name} (${activeTab.label}) through ROY CONSULTANCY.`
              )

              return (
                <div
                  key={provider.id || pIdx}
                  className="group relative rounded-xl bg-white border border-slate-200/90 p-5 sm:p-6 shadow-2xs hover:shadow-lg hover:border-accent/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Subtle top gold accent on hover */}
                  <div className="absolute top-0 inset-x-0 h-0.5 bg-accent opacity-0 group-hover:opacity-100 transition-opacity rounded-t-xl" />

                  <div>
                    {/* Header: Authentic Company Brand Logo & Sector Type Badge */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      {/* Official Company Logo */}
                      <div className="h-10 w-auto max-w-[135px] flex items-center">
                        <CompanyLogo
                          providerId={provider.id}
                          name={provider.name}
                          className="h-9 w-auto max-w-[135px]"
                        />
                      </div>

                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-surface-muted text-text-muted border border-slate-200/60 shrink-0">
                        {provider.type}
                      </span>
                    </div>

                    {/* Brand Name & Legal Identity */}
                    <h3 className="font-heading text-lg font-bold text-primary group-hover:text-secondary-dark transition-colors leading-snug">
                      {provider.name}
                    </h3>
                    <p className="text-[11px] text-text-muted mt-1 leading-normal line-clamp-1">
                      {provider.fullName}
                    </p>

                    {/* Specialty / Advisory Focus */}
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-start gap-1.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                      <span className="leading-snug text-xs font-medium text-slate-600">
                        {provider.specialty}
                      </span>
                    </div>
                  </div>

                  {/* Card Action Link */}
                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <a
                      href={whatsappEnquiry}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-accent-dark transition-colors cursor-pointer"
                      aria-label={`Enquire about ${provider.name} on WhatsApp`}
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-accent" />
                      <span>Enquire Provider</span>
                    </a>

                    <a
                      href="#contact"
                      className="p-1 rounded-md text-slate-400 hover:text-primary hover:bg-slate-100 transition-colors"
                      title="Request local guidance in Kolkata"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              )
            })}
          </motion.div>
        </AnimatePresence>

        {/* ========================================================= */}
        {/* NON-AFFILIATION & TRADEMARK COMPLIANCE NOTICE             */}
        {/* ========================================================= */}
        <div className="mt-12 p-4 rounded-xl bg-surface-muted border border-slate-200/90 text-xs text-text-muted flex items-start gap-3">
          <Info className="w-4 h-4 text-accent shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Network Disclosure:</strong> ROY CONSULTANCY provides independent comparison,
            documentation, and policy selection assistance across these established insurance
            entities. All company names, brand marks, and corporate titles are registered trademarks
            of their respective insurer corporations. We do not imply exclusive partnerships or
            official endorsement unless expressly confirmed.
          </p>
        </div>
      </Container>
    </section>
  )
}
