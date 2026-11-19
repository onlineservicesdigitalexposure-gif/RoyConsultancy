import React, { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ShieldCheck, Lock, AlertCircle } from 'lucide-react'
import { COMPANY_INFO } from '../../constants/company'

export function PolicyModal({ isOpen, onClose, initialTab = 'disclaimer' }) {
  const [selectedTab, setSelectedTab] = useState(null)
  const activeTab = selectedTab || initialTab

  const handleClose = useCallback(() => {
    setSelectedTab(null)
    onClose()
  }, [onClose])

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, handleClose])

  // Prevent background scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="policy-modal-title"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="absolute inset-0 bg-primary-dark/80 backdrop-blur-sm"
          aria-hidden="true"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[85vh] z-10"
        >
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between bg-surface-muted">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-primary text-accent flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 id="policy-modal-title" className="font-heading text-lg font-bold text-primary">
                  Legal & Compliance Information
                </h3>
                <p className="text-xs text-text-muted">
                  {COMPANY_INFO.name} • {COMPANY_INFO.location.city}, West Bengal
                </p>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="p-2 rounded-lg text-slate-400 hover:text-primary hover:bg-slate-200/60 transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Tab Selector */}
          <div className="flex border-b border-slate-200 px-6 pt-3 gap-6 text-sm font-semibold">
            <button
              onClick={() => setSelectedTab('disclaimer')}
              className={`pb-3 border-b-2 transition-colors cursor-pointer flex items-center gap-2 ${
                activeTab === 'disclaimer'
                  ? 'border-accent text-primary font-bold'
                  : 'border-transparent text-text-muted hover:text-primary'
              }`}
            >
              <AlertCircle className="w-4 h-4 text-accent" />
              <span>Professional Disclaimer</span>
            </button>

            <button
              onClick={() => setSelectedTab('privacy')}
              className={`pb-3 border-b-2 transition-colors cursor-pointer flex items-center gap-2 ${
                activeTab === 'privacy'
                  ? 'border-accent text-primary font-bold'
                  : 'border-transparent text-text-muted hover:text-primary'
              }`}
            >
              <Lock className="w-4 h-4 text-accent" />
              <span>Privacy Policy</span>
            </button>
          </div>

          {/* Modal Content Body */}
          <div className="p-6 overflow-y-auto space-y-4 text-sm text-text-muted leading-relaxed font-sans">
            {activeTab === 'disclaimer' ? (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-amber-950 font-medium text-xs sm:text-sm leading-relaxed">
                  "ROY CONSULTANCY provides assistance with insurance, taxation, accounting and
                  related services. Insurance products are subject to the respective insurer's
                  terms, conditions and eligibility requirements. Taxation, registration and
                  compliance services are subject to applicable laws and regulations. Final approval
                  and decisions rest with the relevant authorities or service providers."
                </div>

                <div className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <h4 className="font-heading font-bold text-primary text-sm">
                    Scope of Services
                  </h4>
                  <p>
                    ROY CONSULTANCY operates as an independent consultancy assisting clients with
                    comparative evaluation, document organization, and filing support across
                    recognized insurance entities, the Income Tax Department, the GST portal, the
                    Ministry of Corporate Affairs (MCA), and other statutory authorities.
                  </p>
                  <p>
                    All brand names, insurer trademarks, and official government identifiers are the
                    exclusive property of their respective statutory bodies or corporations. We do
                    not imply official endorsement or exclusive partnerships unless confirmed in
                    writing.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-primary font-semibold text-xs sm:text-sm">
                  Client Confidentiality & Data Protection Protocol
                </div>

                <p>
                  At <strong>ROY CONSULTANCY</strong>, we treat all client personal, financial, and
                  tax records with strict fiduciary confidentiality.
                </p>

                <ul className="space-y-2 text-xs sm:text-sm list-disc pl-5">
                  <li>
                    <strong>No Unsolicited Sharing:</strong> Your personal information, PAN, Aadhaar,
                    phone number, or business records are never sold, rented, or shared with
                    unauthorized third parties.
                  </li>
                  <li>
                    <strong>Purpose-Bound Use:</strong> Data provided during consultation is used
                    strictly for preparing your agreed insurance policy, tax return, or regulatory
                    documentation.
                  </li>
                  <li>
                    <strong>Static Website Privacy:</strong> This website does not use tracking
                    cookies, third-party analytics trackers, or hidden user-profiling scripts.
                  </li>
                </ul>

                <p className="text-xs text-text-muted pt-2 border-t border-slate-100">
                  For privacy queries or document deletion requests, please contact Nilanjan Roy
                  directly at{' '}
                  <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-primary font-semibold underline">
                    {COMPANY_INFO.contact.email}
                  </a>.
                </p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-4 sm:p-5 border-t border-slate-100 bg-surface-muted flex items-center justify-between">
            <span className="text-xs text-text-muted">
              © 2026 {COMPANY_INFO.name}. All Rights Reserved.
            </span>
            <button
              onClick={handleClose}
              className="px-4 py-2 rounded-lg bg-primary text-white text-xs font-semibold hover:bg-primary-light transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
