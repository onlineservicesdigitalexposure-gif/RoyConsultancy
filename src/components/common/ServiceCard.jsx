import React from 'react'
import {
  BookOpenCheck,
  FileCheck2,
  Building2,
  Users,
  Receipt,
  FileText,
  Layers,
  FileSpreadsheet,
  KeyRound,
  Briefcase,
  CreditCard,
  MessageCircle,
  CheckCircle2,
  ArrowRight,
  Shield,
} from 'lucide-react'
import { getWhatsAppUrl } from '../../utils/whatsapp'

const ICON_COMPONENTS = {
  BookOpenCheck,
  FileCheck2,
  Building2,
  Users,
  Receipt,
  FileText,
  Layers,
  FileSpreadsheet,
  KeyRound,
  Briefcase,
  CreditCard,
}

export function ServiceCard({ service, groupTitle }) {
  const Icon = ICON_COMPONENTS[service.icon] || Shield

  const whatsappMessage = `Hello Nilanjan Roy, I would like to enquire about ${service.name}${
    groupTitle ? ` (${groupTitle})` : ''
  } through ROY CONSULTANCY.`

  const whatsappLink = getWhatsAppUrl(whatsappMessage)

  return (
    <div className="group relative rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-2xs hover:shadow-xl hover:border-accent/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden">
      {/* Subtle top gold/navy accent line */}
      <div className="absolute top-0 inset-x-0 h-1 bg-linear-to-r from-primary via-accent to-secondary opacity-75 group-hover:opacity-100 transition-opacity" />

      <div>
        {/* Card Header: Icon & Target Audience Tag */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-accent transition-colors duration-200 shrink-0">
            <Icon className="w-6 h-6" />
          </div>

          {service.target && (
            <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-surface-muted text-text-muted border border-slate-200/70 text-right">
              {service.target}
            </span>
          )}
        </div>

        {/* Service Title */}
        <h3 className="font-heading text-lg sm:text-xl font-bold text-primary group-hover:text-secondary-dark transition-colors leading-snug">
          {service.name}
        </h3>

        {/* Service Description */}
        <p className="mt-2 text-sm text-text-muted leading-relaxed">
          {service.description}
        </p>

        {/* Highlights List */}
        {service.highlights && service.highlights.length > 0 && (
          <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5">
            {service.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                <span className="leading-snug">{highlight}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Action Footer */}
      <div className="mt-6 pt-4 border-t border-slate-100">
        <div className="flex flex-col sm:flex-row items-center gap-2.5">
          {/* Primary WhatsApp Enquiry CTA */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold bg-[#25D366] text-white hover:bg-[#20bd5a] shadow-xs hover:shadow-md transition-all duration-200 active:scale-[0.98] cursor-pointer"
            aria-label={`Enquire about ${service.name} on WhatsApp`}
          >
            <MessageCircle className="w-4 h-4 fill-white shrink-0" />
            <span>Enquire About This Service</span>
          </a>

          {/* Secondary Quick Consult Anchor Link */}
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center p-2.5 rounded-lg text-xs font-semibold text-primary hover:text-accent-dark hover:bg-slate-100/70 transition-colors cursor-pointer text-center"
            title="Book in-person appointment in Netaji Nagar, Kolkata"
          >
            <span>Consult</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </a>
        </div>
      </div>
    </div>
  )
}
