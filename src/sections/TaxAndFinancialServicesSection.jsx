import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BookOpenCheck,
  FileText,
  Briefcase,
  Info,
  Layers,
} from 'lucide-react'
import { Container } from '../components/common/Container'
import { SectionHeading } from '../components/common/SectionHeading'
import { ServiceCard } from '../components/common/ServiceCard'
import { FINANCIAL_SERVICE_GROUPS } from '../data/financialServices'
import { cn } from '../utils/cn'

const GROUP_HEADER_ICONS = {
  'accounting-compliance': BookOpenCheck,
  'taxation-services': FileText,
  'business-documentation': Briefcase,
}

const FILTER_TABS = [
  { id: 'all', label: 'All Services', count: 11 },
  ...FINANCIAL_SERVICE_GROUPS.map((g) => ({
    id: g.id,
    label: g.title,
    count: g.services.length,
  })),
]

export function TaxAndFinancialServicesSection() {
  const [selectedFilter, setSelectedFilter] = useState('all')

  const visibleGroups =
    selectedFilter === 'all'
      ? FINANCIAL_SERVICE_GROUPS
      : FINANCIAL_SERVICE_GROUPS.filter((g) => g.id === selectedFilter)

  return (
    <section
      id="services"
      aria-label="Taxation, Accounting & Business Compliance Services"
      className="relative py-2 sm:py-4 bg-surface border-b border-slate-200/80 overflow-hidden"
    >
      {/* Decorative ambient background accents */}
      <div
        className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/8 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="TAX & FINANCIAL CONSULTANCY"
          title="Taxation, Accounting &"
          highlight="Business Compliance"
          subtitle="Practical Assistance for Individuals, Professionals and Businesses"
          align="center"
        />

        {/* ========================================================= */}
        {/* FILTER CONTROLS                                           */}
        {/* ========================================================= */}
        <div className="flex justify-center mb-4 sm:mb-5">
          <div
            role="tablist"
            aria-label="Filter Services by Group"
            className="inline-flex p-1.5 rounded-2xl bg-surface-muted border border-slate-200/90 shadow-inner max-w-full overflow-x-auto"
          >
            {FILTER_TABS.map((tab) => {
              const isActive = selectedFilter === tab.id
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedFilter(tab.id)}
                  className={cn(
                    'relative px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-accent whitespace-nowrap',
                    isActive
                      ? 'text-primary shadow-xs'
                      : 'text-text-muted hover:text-text-main hover:bg-white/40'
                  )}
                >
                  {/* Sliding active pill indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="active-services-filter"
                      className="absolute inset-0 bg-white rounded-xl shadow-xs border border-slate-200/80"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      aria-hidden="true"
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <span>{tab.label}</span>
                    <span
                      className={cn(
                        'px-2 py-0.5 rounded-full text-[10px] font-bold transition-colors',
                        isActive
                          ? 'bg-accent/20 text-accent-dark'
                          : 'bg-slate-200/70 text-slate-600'
                      )}
                    >
                      {tab.count}
                    </span>
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* 3 VISUALLY DISTINCT SERVICE GROUPS                        */}
        {/* ========================================================= */}
        <div className="space-y-16 sm:space-y-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedFilter}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-16 sm:space-y-20"
            >
              {visibleGroups.map((group) => {
                const GroupIcon = GROUP_HEADER_ICONS[group.id] || Layers

                return (
                  <div
                    key={group.id}
                    className="space-y-8"
                  >
                    {/* Visually Distinct Group Header Banner */}
                    <div className="p-6 sm:p-7 rounded-2xl bg-linear-to-r from-primary via-primary-dark to-secondary text-white border border-accent/30 shadow-md relative overflow-hidden">
                      <div
                        className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-2xl pointer-events-none"
                        aria-hidden="true"
                      />

                      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-start sm:items-center gap-4">
                          <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl bg-white/10 backdrop-blur-md border border-accent/40 text-accent flex items-center justify-center shrink-0 shadow-inner">
                            <GroupIcon className="w-6 h-6 sm:w-7 sm:h-7" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2.5">
                              <span className="px-2.5 py-0.5 rounded-full bg-accent/20 border border-accent/40 text-[10px] font-bold text-accent uppercase tracking-wider">
                                {group.eyebrow}
                              </span>
                              <span className="text-xs text-slate-300">
                                {group.services.length} Specialized Practices
                              </span>
                            </div>
                            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mt-1">
                              {group.title}
                            </h3>
                          </div>
                        </div>

                        <p className="text-xs sm:text-sm text-slate-300 max-w-md leading-relaxed md:text-right">
                          {group.description}
                        </p>
                      </div>
                    </div>

                    {/* Responsive Service Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                      {group.services.map((service) => (
                        <ServiceCard
                          key={service.id}
                          service={service}
                          groupTitle={group.title}
                        />
                      ))}
                    </div>
                  </div>
                )
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ========================================================= */}
        {/* COMPLIANCE & TRANSPARENCY NOTICE                          */}
        {/* ========================================================= */}
        <div className="mt-16 p-5 rounded-2xl bg-surface-muted border border-slate-200/90 text-xs text-text-muted shadow-2xs">
          <div className="flex items-start gap-3.5">
            <Info className="w-5 h-5 text-accent shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="font-heading font-bold text-primary text-sm">
                Compliance & Advisory Disclaimer
              </h4>
              <p className="leading-relaxed">
                ROY CONSULTANCY provides practical assistance, documentation support, and
                administrative guidance for taxation filing, accounting maintenance, and business
                registration. We do not make claims of statutory certification or professional
                qualifications that have not been provided. All services are performed in accordance
                with statutory compliance norms and client-provided records.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
