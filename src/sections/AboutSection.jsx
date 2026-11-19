import React from 'react'
import { motion } from 'framer-motion'
import {
  Shield,
  FileText,
  MapPin,
  CheckCircle2,
  ArrowRight,
  UserCheck,
} from 'lucide-react'
import { Container } from '../components/common/Container'
import { Button } from '../components/common/Button'
import { Badge } from '../components/common/Badge'
import { COMPANY_INFO } from '../constants/company'
import nilanjanRoyImg from '../assets/images/Nilanjan Roy.jpeg'

export function AboutSection() {
  return (
    <section
      id="about"
      aria-label="About Roy Consultancy"
      className="relative py-2 sm:py-4 bg-surface overflow-hidden border-b border-slate-200/70"
    >
      {/* Decorative ambient background accents */}
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* ======================================================= */}
          {/* LEFT COLUMN: BUSINESS & CONSULTANT VISUAL FRAME         */}
          {/* ======================================================= */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Subtle background glow */}
              <div
                className="absolute -inset-2 rounded-3xl bg-linear-to-tr from-primary/10 via-accent/20 to-secondary/10 blur-lg"
                aria-hidden="true"
              />

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xl">
                <div className="relative aspect-square sm:aspect-4/5 overflow-hidden bg-slate-100">
                  <img
                    src={nilanjanRoyImg}
                    alt="Nilanjan Roy - Proprietor and Financial Consultant at ROY CONSULTANCY Kolkata"
                    width="1024"
                    height="1024"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Subtle inner dark vignette for text contrast */}
                  <div className="absolute inset-0 bg-linear-to-t from-primary-dark/85 via-primary-dark/15 to-transparent" />
                </div>

                {/* Overlaid Location Badge for Netaji Nagar, Kolkata */}
                <div className="absolute top-4 left-4 right-4">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/90 backdrop-blur-md border border-accent/40 text-xs text-white shadow-md">
                    <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                    <span className="font-medium text-slate-100">
                      {COMPANY_INFO.location.street}, {COMPANY_INFO.location.area}
                    </span>
                  </div>
                </div>

                {/* Overlaid Profile Card for Nilanjan Roy */}
                <div className="absolute bottom-4 inset-x-4">
                  <div className="p-4 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="h-11 w-11 rounded-lg bg-primary text-accent flex items-center justify-center font-heading font-extrabold text-base shrink-0 shadow-xs">
                        NR
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-heading text-base font-bold text-primary truncate">
                            {COMPANY_INFO.founder}
                          </h3>
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-accent/20 text-accent-dark">
                            Proprietor
                          </span>
                        </div>
                        <p className="text-xs text-text-muted truncate mt-0.5">
                          Personal Guidance • {COMPANY_INFO.location.area}, Kolkata
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Accents */}
              <div
                className="absolute -bottom-3 -right-3 w-14 h-14 border-r-2 border-b-2 border-accent rounded-br-2xl pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="absolute -top-3 -left-3 w-14 h-14 border-l-2 border-t-2 border-accent rounded-tl-2xl pointer-events-none"
                aria-hidden="true"
              />
            </div>
          </motion.div>

          {/* ======================================================= */}
          {/* RIGHT COLUMN: ABOUT CONTENT, DIVISIONS & PROFILE        */}
          {/* ======================================================= */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-4 text-left"
          >
            {/* Header Badge */}
            <div className="flex items-center gap-2">
              <Badge variant="gold" size="md">
                About Our Firm
              </Badge>
              <span className="text-xs text-text-muted font-medium">
                • {COMPANY_INFO.location.landmark}
              </span>
            </div>

            {/* Main Section Headings */}
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-4xl font-extrabold text-primary tracking-tight">
                About <span className="gold-gradient-text">ROY CONSULTANCY</span>
              </h2>
              <p className="font-heading text-lg sm:text-xl font-semibold text-secondary-light mt-2">
                Guidance You Can Trust. Solutions You Can Rely On.
              </p>
            </div>

            {/* Structured Content Descriptions */}
            <div className="space-y-3.5 text-base text-text-muted leading-relaxed font-sans">
              <p>
                <strong className="text-text-main font-semibold">ROY CONSULTANCY</strong> is a
                professional consultancy providing assistance across Life, Health and General
                Insurance, along with Taxation, Accounting and Financial Compliance services.
              </p>

              <p>
                We aim to simplify complex financial and documentation processes by helping
                individuals, families and businesses understand their requirements and access
                suitable services.
              </p>

              <p className="text-slate-700 bg-surface-muted/60 p-3.5 rounded-lg border-l-4 border-accent text-sm leading-relaxed">
                Whether you are looking for insurance guidance, income tax filing, GST assistance,
                accounting support or business registration services, ROY CONSULTANCY is here to
                assist you.
              </p>
            </div>

            {/* ===================================================== */}
            {/* TWO DISTINCT OPERATIONAL DIVISIONS                    */}
            {/* ===================================================== */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              {/* Division 1: Insurance Consultancy */}
              <div className="p-4 rounded-xl border border-slate-200/90 bg-white shadow-xs hover:border-accent/50 transition-all duration-200">
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider font-bold text-accent-dark block">
                      Division I
                    </span>
                    <h3 className="font-heading text-base font-bold text-primary leading-tight">
                      Insurance Consultancy
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-text-muted leading-relaxed mb-3">
                  Comprehensive assistance across individual, family and commercial coverage:
                </p>
                <ul className="space-y-1.5 text-xs text-text-main">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                    <span>Life Insurance & Family Protection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                    <span>Health & Critical Medical Cover</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                    <span>General, Vehicle & Asset Insurance</span>
                  </li>
                </ul>
              </div>

              {/* Division 2: Tax & Financial Consultancy */}
              <div className="p-4 rounded-xl border border-slate-200/90 bg-white shadow-xs hover:border-accent/50 transition-all duration-200">
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider font-bold text-accent-dark block">
                      Division II
                    </span>
                    <h3 className="font-heading text-base font-bold text-primary leading-tight">
                      Tax & Financial Consultancy
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-text-muted leading-relaxed mb-3">
                  Systematic accounting, filing and statutory compliance support:
                </p>
                <ul className="space-y-1.5 text-xs text-text-main">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                    <span>Income Tax Filing (ITR Assistance)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                    <span>GST Registration & Monthly Returns</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                    <span>Accounting & Business Registration</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* ===================================================== */}
            {/* PROPRIETOR PROFILE NOTE FOR NILANJAN ROY              */}
            {/* ===================================================== */}
            <div className="p-4 rounded-xl bg-surface-muted border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary text-white shrink-0">
                  <UserCheck className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-heading text-sm font-bold text-primary">
                    Direct Consultation with {COMPANY_INFO.founder}
                  </h4>
                  <p className="text-xs text-text-muted mt-0.5">
                    Proprietor & Consultant • Dedicated client support in Netaji Nagar, Kolkata
                  </p>
                </div>
              </div>

              <Button
                variant="primary"
                size="sm"
                href="#contact"
                rightIcon={ArrowRight}
                className="shrink-0 w-full sm:w-auto text-xs"
              >
                Book Appointment
              </Button>
            </div>

            {/* Verification Address Footer */}
            <div className="pt-2 flex items-center gap-2 text-xs text-text-muted">
              <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
              <span>
                Office Address: <strong>{COMPANY_INFO.location.street}</strong>,{' '}
                {COMPANY_INFO.location.city} - {COMPANY_INFO.location.pinCode} ({COMPANY_INFO.location.landmark})
              </span>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
