import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ExternalLink,
  Send,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  User,
  AtSign,
} from 'lucide-react'
import { Container } from '../components/common/Container'
import { SectionHeading } from '../components/common/SectionHeading'
import { COMPANY_INFO } from '../constants/company'
import { getWhatsAppUrl } from '../utils/whatsapp'
import { cn } from '../utils/cn'

const SERVICE_OPTIONS = [
  { value: 'Insurance', label: 'Insurance (Life, Health & General)' },
  { value: 'Taxation', label: 'Taxation (Income Tax ITR & GST)' },
  { value: 'Accounting', label: 'Accounting & Business Compliance' },
  { value: 'Other', label: 'Other Financial / Documentation Guidance' },
]

export function ContactSection() {
  const [submittedData, setSubmittedData] = useState(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      service: 'Insurance',
      message: '',
    },
  })

  // Indian phone validation regex (accepts 10 digits starting with 6-9, or with +91 / 0 prefix)
  const validateIndianPhone = (value) => {
    const cleanNumber = value.replace(/[\s\-()]/g, '')
    const indianMobileRegex = /^(?:\+91|91|0)?[6-9]\d{9}$/
    return indianMobileRegex.test(cleanNumber) || 'Please enter a valid 10-digit Indian mobile number'
  }

  const onSubmit = (data) => {
    setSubmittedData(data)

    // Formulate prefilled WhatsApp message
    const formattedMessage = `*New Website Enquiry - ROY CONSULTANCY*
• *Name:* ${data.fullName.trim()}
• *Phone:* ${data.phone.trim()}
• *Email:* ${data.email.trim()}
• *Service Required:* ${data.service}
• *Message / Requirement:*
${data.message.trim()}`

    // Construct mailto link
    const mailtoSubject = encodeURIComponent(
      `Enquiry for ${data.service} - ${data.fullName.trim()}`
    )
    const mailtoBody = encodeURIComponent(
      `Dear Nilanjan Roy,\n\nI am contacting you through ROY CONSULTANCY website with the following details:\n\nFull Name: ${data.fullName.trim()}\nPhone: ${data.phone.trim()}\nEmail: ${data.email.trim()}\nService Required: ${data.service}\n\nMessage / Requirement:\n${data.message.trim()}\n\nLooking forward to your guidance.\n\nRegards,\n${data.fullName.trim()}`
    )

    // Automatically prompt WhatsApp or offer selection
    const waUrl = getWhatsAppUrl(formattedMessage, COMPANY_INFO.contact.rawPhone)
    const mailtoUrl = `mailto:${COMPANY_INFO.contact.email}?subject=${mailtoSubject}&body=${mailtoBody}`

    // Store in submitted state for instant user actions
    setSubmittedData({
      ...data,
      waUrl,
      mailtoUrl,
    })
  }

  const handleResetForm = () => {
    setSubmittedData(null)
    reset()
  }

  const generalWhatsAppUrl = getWhatsAppUrl(
    `Hello Nilanjan Roy, I would like to get in touch with ROY CONSULTANCY.`,
    COMPANY_INFO.contact.rawPhone
  )

  return (
    <section
      id="contact"
      aria-label="Contact ROY CONSULTANCY"
      className="relative py-2 sm:py-4 bg-surface border-t border-slate-200/80 overflow-hidden"
    >
      {/* Decorative ambient background accents */}
      <div
        className="absolute top-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-96 h-96 bg-accent/8 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="GET IN TOUCH"
          title="Let's Discuss Your"
          highlight="Requirements"
          subtitle="Connect with ROY CONSULTANCY for insurance, taxation and financial consultancy assistance."
          align="center"
        />

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start max-w-6xl mx-auto">
          
          {/* ======================================================= */}
          {/* LEFT COLUMN: CONTACT INFO & GOOGLE MAPS EMBED           */}
          {/* ======================================================= */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Contact Card */}
            <div className="rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-xs relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-linear-to-r from-primary via-accent to-secondary" />

              <div className="mb-6">
                <span className="text-[10px] font-bold uppercase tracking-wider text-accent-dark block">
                  Direct Office Communication
                </span>
                <h3 className="font-heading text-xl font-bold text-primary mt-1">
                  {COMPANY_INFO.name}
                </h3>
                <p className="text-xs text-text-muted mt-0.5">
                  Consultant: <strong className="text-text-main">{COMPANY_INFO.founder}</strong>
                </p>
              </div>

              {/* Contact Channels List */}
              <div className="space-y-4">
                {/* Phone Channel */}
                <div className="flex items-start gap-3.5">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase text-slate-400 block">
                      Phone Number
                    </span>
                    <a
                      href={`tel:${COMPANY_INFO.contact.rawPhone}`}
                      className="text-sm sm:text-base font-bold text-primary hover:text-accent-dark transition-colors block mt-0.5"
                    >
                      {COMPANY_INFO.contact.phone}
                    </a>
                    <span className="text-[11px] text-text-muted">Click to call directly</span>
                  </div>
                </div>

                {/* Email Channel */}
                <div className="flex items-start gap-3.5">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase text-slate-400 block">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${COMPANY_INFO.contact.email}`}
                      className="text-sm font-semibold text-primary hover:text-accent-dark transition-colors block mt-0.5 break-all"
                    >
                      {COMPANY_INFO.contact.email}
                    </a>
                    <span className="text-[11px] text-text-muted">Direct correspondence</span>
                  </div>
                </div>

                {/* Full Business Address */}
                <div className="flex items-start gap-3.5">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase text-slate-400 block">
                      Business Address
                    </span>
                    <p className="text-sm font-medium text-text-main mt-0.5 leading-snug">
                      {COMPANY_INFO.location.street}, {COMPANY_INFO.location.area},
                    </p>
                    <p className="text-xs text-text-muted">
                      {COMPANY_INFO.location.city}, {COMPANY_INFO.location.state} - {COMPANY_INFO.location.pinCode}
                    </p>
                    <p className="text-xs font-semibold text-accent-dark mt-1">
                      Landmark: {COMPANY_INFO.location.landmark}
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3.5 pt-2 border-t border-slate-100">
                  <div className="h-8 w-8 rounded-lg bg-surface-muted text-slate-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-accent-dark" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase text-slate-400 block">
                      Office Working Hours
                    </span>
                    <p className="text-xs font-medium text-text-main mt-0.5">
                      {COMPANY_INFO.contact.workingHours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons: WhatsApp & Google Maps Directions */}
              <div className="mt-6 pt-5 border-t border-slate-100 space-y-2.5">
                <a
                  href={generalWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow-xs hover:bg-[#20bd5a] hover:shadow-md transition-all active:scale-[0.98] cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href={COMPANY_INFO.location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-surface-muted hover:bg-slate-200/70 text-text-main font-semibold text-xs border border-slate-200/80 transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-accent-dark" />
                  <span>Get Google Maps Directions</span>
                  <ExternalLink className="w-3 h-3 text-slate-400 ml-0.5" />
                </a>
              </div>
            </div>
          </div>

          {/* ======================================================= */}
          {/* RIGHT COLUMN: REACT HOOK FORM WITH VERIFIED DISPATCH    */}
          {/* ======================================================= */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-xs relative">
              <div className="mb-6">
                <span className="text-[10px] font-bold uppercase tracking-wider text-accent-dark block">
                  Enquiry & Appointment Request
                </span>
                <h3 className="font-heading text-2xl font-bold text-primary mt-1">
                  Send Your Requirement
                </h3>
                <p className="text-xs sm:text-sm text-text-muted mt-1">
                  Fill in your details below. You will be able to dispatch your message directly via WhatsApp or Email.
                </p>
              </div>

              {/* SUCCESS STATE MODAL/CARD */}
              <AnimatePresence>
                {submittedData && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="p-6 rounded-2xl bg-surface-muted border-2 border-accent/60 shadow-lg space-y-4 mb-6"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-accent text-primary-dark shrink-0">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-heading text-lg font-bold text-primary">
                          Requirement Formatted Successfully!
                        </h4>
                        <p className="text-xs text-text-muted mt-0.5">
                          Since there is no database on this static site, choose your preferred method to deliver this message directly to Nilanjan Roy:
                        </p>
                      </div>
                    </div>

                    {/* Summary Card */}
                    <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs space-y-1.5 text-text-main">
                      <div>
                        <strong>Name:</strong> {submittedData.fullName}
                      </div>
                      <div>
                        <strong>Phone:</strong> {submittedData.phone}
                      </div>
                      <div>
                        <strong>Email:</strong> {submittedData.email}
                      </div>
                      <div>
                        <strong>Service:</strong> {submittedData.service}
                      </div>
                      <div className="pt-1 text-text-muted italic">
                        "{submittedData.message}"
                      </div>
                    </div>

                    {/* Immediate Dispatch Options */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      <a
                        href={submittedData.waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#25D366] text-white font-bold text-xs shadow-xs hover:bg-[#20bd5a] transition-all cursor-pointer"
                      >
                        <MessageCircle className="w-4 h-4 fill-white" />
                        <span>Send via WhatsApp Now</span>
                      </a>

                      <a
                        href={submittedData.mailtoUrl}
                        className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-primary text-white font-bold text-xs shadow-xs hover:bg-primary-light transition-all cursor-pointer"
                      >
                        <Mail className="w-4 h-4 text-accent" />
                        <span>Send via Email Client</span>
                      </a>
                    </div>

                    <div className="text-center pt-2">
                      <button
                        type="button"
                        onClick={handleResetForm}
                        className="inline-flex items-center gap-1.5 text-xs text-text-muted hover:text-primary transition-colors cursor-pointer"
                      >
                        <RefreshCw className="w-3 h-3" />
                        <span>Submit Another Enquiry</span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* FORM FIELDS */}
              {!submittedData && (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                  
                  {/* Full Name Field */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-bold text-primary uppercase tracking-wider mb-1.5"
                    >
                      Full Name *
                    </label>
                    <div className="relative">
                      <input
                        id="fullName"
                        type="text"
                        placeholder="e.g. Subhankar Ghosh"
                        {...register('fullName', {
                          required: 'Full name is required',
                          minLength: {
                            value: 2,
                            message: 'Name must be at least 2 characters',
                          },
                        })}
                        className={cn(
                          'w-full px-4 py-3 rounded-xl border text-sm transition-all bg-surface focus:outline-none focus:ring-2 focus:ring-accent',
                          errors.fullName
                            ? 'border-red-400 bg-red-50/30'
                            : 'border-slate-300 focus:border-accent'
                        )}
                      />
                      <User className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5 pointer-events-none" />
                    </div>
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.fullName.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone & Email Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone Number Field */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-bold text-primary uppercase tracking-wider mb-1.5"
                      >
                        Phone Number *
                      </label>
                      <div className="relative">
                        <input
                          id="phone"
                          type="tel"
                          placeholder="e.g. 9830012345"
                          {...register('phone', {
                            required: 'Phone number is required',
                            validate: validateIndianPhone,
                          })}
                          className={cn(
                            'w-full px-4 py-3 rounded-xl border text-sm transition-all bg-surface focus:outline-none focus:ring-2 focus:ring-accent',
                            errors.phone
                              ? 'border-red-400 bg-red-50/30'
                              : 'border-slate-300 focus:border-accent'
                          )}
                        />
                        <Phone className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5 pointer-events-none" />
                      </div>
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.phone.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Email Address Field */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-bold text-primary uppercase tracking-wider mb-1.5"
                      >
                        Email Address *
                      </label>
                      <div className="relative">
                        <input
                          id="email"
                          type="email"
                          placeholder="name@example.com"
                          {...register('email', {
                            required: 'Email address is required',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'Please enter a valid email address',
                            },
                          })}
                          className={cn(
                            'w-full px-4 py-3 rounded-xl border text-sm transition-all bg-surface focus:outline-none focus:ring-2 focus:ring-accent',
                            errors.email
                              ? 'border-red-400 bg-red-50/30'
                              : 'border-slate-300 focus:border-accent'
                          )}
                        />
                        <AtSign className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5 pointer-events-none" />
                      </div>
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.email.message}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Select Service Field */}
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-xs font-bold text-primary uppercase tracking-wider mb-1.5"
                    >
                      Select Service *
                    </label>
                    <select
                      id="service"
                      {...register('service', { required: 'Please select a service' })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm bg-surface focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                    >
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-bold text-primary uppercase tracking-wider mb-1.5"
                    >
                      Requirement Details *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Please specify your insurance, income tax, GST, or compliance requirements..."
                      {...register('message', {
                        required: 'Please describe your requirement',
                        minLength: {
                          value: 10,
                          message: 'Please provide at least 10 characters',
                        },
                      })}
                      className={cn(
                        'w-full px-4 py-3 rounded-xl border text-sm transition-all bg-surface focus:outline-none focus:ring-2 focus:ring-accent resize-none',
                        errors.message
                          ? 'border-red-400 bg-red-50/30'
                          : 'border-slate-300 focus:border-accent'
                      )}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.message.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submission Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-white font-bold text-sm tracking-wide shadow-md hover:bg-primary-light active:scale-[0.99] transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:opacity-50"
                    >
                      <Send className="w-4 h-4 text-accent" />
                      <span>Submit Enquiry</span>
                    </button>
                  </div>

                  {/* Form Submission Architecture Note */}
                  <div className="pt-2 text-center">
                    <p className="text-[11px] text-text-muted">
                      Direct transmission via WhatsApp or Email client without intermediary storage.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
