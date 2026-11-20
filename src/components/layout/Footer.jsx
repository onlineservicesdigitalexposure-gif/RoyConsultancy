import React, { useState } from 'react'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUp,
  Shield,
  FileText,
  Lock,
  ChevronRight,
} from 'lucide-react'
import { COMPANY_INFO } from '../../constants/company'
import { NAV_LINKS } from '../../constants/navigation'
import { scrollToSection } from '../../utils/scroll'
import { Container } from '../common/Container'
import { PolicyModal } from '../common/PolicyModal'
import { logoFull } from '../../assets/Roy Consultancy Growth Logo'

const INSURANCE_LINKS = [
  { label: 'Life Insurance Solutions', id: 'insurance' },
  { label: 'Health & Medical Cover', id: 'insurance' },
  { label: 'General & Motor Insurance', id: 'insurance' },
  { label: 'Senior Citizen Health Plans', id: 'insurance' },
  { label: 'Comprehensive Vehicle Cover', id: 'insurance' },
]

const TAX_FINANCIAL_LINKS = [
  { label: 'Income Tax Return (ITR) Filing', id: 'services' },
  { label: 'GST Registration & Return Filing', id: 'services' },
  { label: 'Accounting & Bookkeeping Services', id: 'services' },
  { label: 'ROC & Company Compliance', id: 'services' },
  { label: 'PF & ESIC Registration Support', id: 'services' },
  { label: 'Professional Tax (P-Tax) Services', id: 'services' },
  { label: 'Udyam MSME Registration', id: 'services' },
  { label: 'Digital Signature Certificate (DSC)', id: 'services' },
  { label: 'PAN Card Services', id: 'services' },
]

export function Footer() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalTab, setModalTab] = useState('disclaimer')

  const openModal = (tab) => {
    setModalTab(tab)
    setModalOpen(true)
  }

  return (
    <>
      <footer className="bg-primary-dark text-slate-300 border-t border-primary/60 pt-8 pb-6 sm:pt-10 sm:pb-8 relative z-10">
        <Container>
          {/* Main Footer 4-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 pb-6 border-b border-slate-800">
            
            {/* Column 1: Brand & Business Summary (lg:col-span-4) */}
            <div className="lg:col-span-4 space-y-4">
              {/* Official Roy Consultancy Original Full Logo on Crisp White Background */}
              <div className="inline-block bg-white rounded-2xl p-3 sm:p-4 shadow-xl shadow-black/25 border-2 border-accent/40 max-w-[260px] sm:max-w-[290px]">
                <img
                  src={logoFull}
                  alt="Roy Consultancy"
                  className="w-full h-auto object-contain block"
                />
              </div>

              <p className="text-sm text-slate-400 leading-relaxed font-sans">
                {COMPANY_INFO.shortDescription}
              </p>

              <div className="pt-2 flex items-center gap-2 text-xs text-accent-light">
                <Shield className="w-4 h-4 text-accent shrink-0" />
                <span>Confidentiality • Transparency • Reliable Guidance</span>
              </div>
            </div>

            {/* Column 2: Quick Navigation (lg:col-span-2) */}
            <div className="lg:col-span-2">
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase font-heading mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2.5 text-sm">
                {NAV_LINKS.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-slate-400 hover:text-accent transition-colors cursor-pointer text-left focus:outline-none flex items-center gap-1.5"
                    >
                      <ChevronRight className="w-3 h-3 text-accent/60" />
                      <span>{link.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Insurance & Financial Services (lg:col-span-3) */}
            <div className="lg:col-span-3 space-y-5">
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase font-heading mb-3">
                  Insurance Advisory
                </h3>
                <ul className="space-y-2 text-xs text-slate-400">
                  {INSURANCE_LINKS.map((item, idx) => (
                    <li key={idx}>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className="hover:text-accent transition-colors cursor-pointer text-left focus:outline-none flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0" />
                        <span>{item.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 border-t border-slate-800">
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase font-heading mb-3">
                  Tax & Compliance
                </h3>
                <ul className="space-y-2 text-xs text-slate-400">
                  {TAX_FINANCIAL_LINKS.slice(0, 5).map((item, idx) => (
                    <li key={idx}>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className="hover:text-accent transition-colors cursor-pointer text-left focus:outline-none flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0" />
                        <span>{item.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Column 4: Contact & Office (lg:col-span-3) */}
            <div className="lg:col-span-3 space-y-4">
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase font-heading mb-4">
                Office Information
              </h3>
              
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-400">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-200">{COMPANY_INFO.location.street},</p>
                  <p>{COMPANY_INFO.location.city} - {COMPANY_INFO.location.pinCode}</p>
                  <p className="text-accent-light text-[11px] mt-0.5">
                    Landmark: {COMPANY_INFO.location.landmark}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-400">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.contact.rawPhone}`}
                  className="hover:text-accent font-semibold text-slate-200 transition-colors"
                >
                  {COMPANY_INFO.contact.phone}
                </a>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-400">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.contact.email}`}
                  className="hover:text-accent transition-colors break-all"
                >
                  {COMPANY_INFO.contact.email}
                </a>
              </div>

              <div className="flex items-start gap-3 text-xs text-slate-400 pt-1 border-t border-slate-800">
                <Clock className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.contact.workingHours}</span>
              </div>
            </div>
          </div>

          {/* Professional Regulatory Disclaimer */}
          <div className="py-6 border-b border-slate-800 text-xs text-slate-400 leading-relaxed font-sans">
            <p className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 text-slate-400">
              <strong className="text-slate-300">Statutory Notice:</strong> "ROY CONSULTANCY
              provides assistance with insurance, taxation, accounting and related services.
              Insurance products are subject to the respective insurer's terms, conditions and
              eligibility requirements. Taxation, registration and compliance services are subject
              to applicable laws and regulations. Final approval and decisions rest with the
              relevant authorities or service providers."
            </p>
          </div>

          {/* Bottom Bar: Exact Copyright & Policy Links */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <p className="text-center sm:text-left">
              © 2026 {COMPANY_INFO.name}. Design &amp; developed by{' '}
              <a
                href="https://www.teamdeoskolkata.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-light underline underline-offset-2 transition-colors font-medium"
              >
                Digital Exposure Online Services
              </a>
            </p>

            {/* Privacy Policy & Disclaimer Modals */}
            <div className="flex items-center gap-5 text-xs">
              <button
                onClick={() => openModal('privacy')}
                className="hover:text-accent transition-colors cursor-pointer flex items-center gap-1 focus:outline-none"
              >
                <Lock className="w-3 h-3 text-accent" />
                <span>Privacy Policy</span>
              </button>

              <button
                onClick={() => openModal('disclaimer')}
                className="hover:text-accent transition-colors cursor-pointer flex items-center gap-1 focus:outline-none"
              >
                <FileText className="w-3 h-3 text-accent" />
                <span>Disclaimer</span>
              </button>

              <button
                onClick={() => scrollToSection('hero')}
                className="inline-flex items-center gap-1.5 text-accent-light hover:text-accent transition-colors cursor-pointer focus:outline-none pl-3 border-l border-slate-800"
                aria-label="Back to top"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </Container>
      </footer>

      {/* Interactive Policy & Disclaimer Modal */}
      <PolicyModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialTab={modalTab}
      />
    </>
  )
}
