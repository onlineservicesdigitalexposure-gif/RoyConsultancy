import React from 'react'
import { ErrorBoundary } from './components/common/ErrorBoundary'
import { SEOHead } from './components/seo/SEOHead'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { FloatingContactActions } from './components/layout/FloatingContactActions'
import { HeroSection } from './sections/HeroSection'
import { AboutSection } from './sections/AboutSection'
import { InsuranceSection } from './sections/InsuranceSection'
import { InsuranceProvidersSection } from './sections/InsuranceProvidersSection'
import { TaxAndFinancialServicesSection } from './sections/TaxAndFinancialServicesSection'
import { WhyChooseUsSection } from './sections/WhyChooseUsSection'
import { ProcessSection } from './sections/ProcessSection'
import { FAQSection } from './sections/FAQSection'
import { ContactSection } from './sections/ContactSection'

export default function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col bg-background text-text-main selection:bg-accent/20 selection:text-primary">
        {/* Dynamic SEO Head with OpenGraph & Schema */}
        <SEOHead />

        {/* Corporate Fixed Navigation */}
        <Navbar />

        <main className="flex-1">
          {/* SECTION: HERO (#hero) */}
          <HeroSection />

          {/* SECTION: ABOUT (#about) */}
          <AboutSection />

          {/* SECTION: INSURANCE (#insurance) */}
          <InsuranceSection />

          {/* SECTION: INSURANCE PROVIDERS SHOWCASE */}
          <InsuranceProvidersSection />

          {/* SECTION: TAX & FINANCIAL SERVICES (#services) */}
          <TaxAndFinancialServicesSection />

          {/* SECTION: WHY CHOOSE US (#why-us) */}
          <WhyChooseUsSection />

          {/* SECTION: OUR WORKING PROCESS (#process) */}
          <ProcessSection />

          {/* SECTION: FREQUENTLY ASKED QUESTIONS (#faq) */}
          <FAQSection />

          {/* SECTION: CONTACT (#contact) */}
          <ContactSection />
        </main>

        {/* Corporate Institutional Footer */}
        <Footer />

        {/* Floating Contact Actions (WhatsApp, Mobile Call, Back to Top) */}
        <FloatingContactActions />
      </div>
    </ErrorBoundary>
  )
}
