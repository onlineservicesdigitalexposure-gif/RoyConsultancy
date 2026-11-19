import React from 'react'
import { Helmet } from 'react-helmet-async'
import { COMPANY_INFO, SITE_CONFIG } from '../../constants/company'
import { FAQ_ITEMS } from '../../data/faqData'

export function SEOHead({
  title,
  description,
  canonicalUrl,
  ogImage = '/og-image.jpg',
}) {
  const fullTitle = title || SITE_CONFIG.seoTitle
  const metaDesc = description || SITE_CONFIG.seoDescription
  const siteUrl = canonicalUrl || SITE_CONFIG.baseUrl || SITE_CONFIG.defaultCanonicalUrl
  const ogImageUrl = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`

  // Comprehensive JSON-LD @graph for LocalBusiness, FinancialService, and FAQPage
  const structuredDataGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      // 1. LocalBusiness / FinancialService Schema
      {
        '@type': ['FinancialService', 'LocalBusiness'],
        '@id': `${siteUrl}/#business`,
        name: COMPANY_INFO.name,
        legalName: COMPANY_INFO.legalName,
        url: siteUrl,
        logo: `${siteUrl}/favicon.svg`,
        image: ogImageUrl,
        telephone: COMPANY_INFO.contact.phone,
        email: COMPANY_INFO.contact.email,
        priceRange: '₹₹',
        description: metaDesc,
        founder: {
          '@type': 'Person',
          name: COMPANY_INFO.founder,
          jobTitle: COMPANY_INFO.designation,
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: COMPANY_INFO.location.street,
          addressLocality: COMPANY_INFO.location.city,
          addressRegion: COMPANY_INFO.location.state,
          postalCode: COMPANY_INFO.location.pinCode,
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: COMPANY_INFO.location.latitude,
          longitude: COMPANY_INFO.location.longitude,
        },
        hasMap: COMPANY_INFO.location.mapsUrl,
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
            ],
            opens: '09:30',
            closes: '18:30',
          },
        ],
        areaServed: [
          {
            '@type': 'AdministrativeArea',
            name: 'Netaji Nagar',
          },
          {
            '@type': 'City',
            name: 'Kolkata',
          },
          {
            '@type': 'AdministrativeArea',
            name: 'South Kolkata',
          },
          {
            '@type': 'AdministrativeArea',
            name: 'West Bengal',
          },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Insurance and Financial Consultancy Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Life Insurance Consultation',
                description:
                  'Assistance with term protection, savings, and retirement plans across LIC, Tata AIA, Max Life, HDFC Life, ICICI Pru, and Bajaj Life.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Health Insurance Assistance',
                description:
                  'Guidance for family floater, individual mediclaim, and senior citizen hospitalization coverage across Star Health, Care, HDFC ERGO, Niva Bupa, and ICICI Lombard.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Car and Bike Vehicle Insurance',
                description:
                  'Comprehensive and third-party motor insurance support for two-wheelers, four-wheelers, and commercial vehicles.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Income Tax Return (ITR) Filing',
                description:
                  'E-filing assistance for salaried individuals, traders, professionals, and small business owners in Kolkata.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'GST Registration and Return Filing Services',
                description:
                  'New GST registration, periodic monthly/quarterly returns (GSTR-1, GSTR-3B), and reconciliation support.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Accounting and Bookkeeping Services',
                description:
                  'Systematic ledger maintenance, balance sheet preparation, and statutory record management.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'ROC and Company Compliance',
                description:
                  'Annual filings, statutory document drafting, and corporate compliance assistance.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'PF and ESIC Registration & Compliance',
                description:
                  'Employee benefits documentation, monthly return generation, and compliance support.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Professional Tax (P-Tax) Services',
                description:
                  'Enrolment, registration, and monthly/annual tax challan payment assistance.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Digital Signature Certificate (DSC)',
                description:
                  'Class 3 DSC issuance assistance for e-filing, e-tendering, and GST portal compliance.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Udyam Registration Assistance',
                description:
                  'Government MSME registration support for small and medium enterprises.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'PAN Card Services',
                description:
                  'New individual and firm PAN application, correction, and update guidance.',
              },
            },
          ],
        },
      },

      // 2. FAQPage Schema for SERP Rich Snippets
      {
        '@type': 'FAQPage',
        '@id': `${siteUrl}/#faq`,
        mainEntity: FAQ_ITEMS.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },

      // 3. WebSite Schema
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: COMPANY_INFO.name,
        description: metaDesc,
        inLanguage: 'en-IN',
      },
    ],
  }

  return (
    <Helmet>
      {/* Primary HTML Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDesc} />
      <meta name="author" content={COMPANY_INFO.founder} />
      <meta name="keywords" content={SITE_CONFIG.primaryKeywords.join(', ')} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

      {/* Canonical URL */}
      <link rel="canonical" href={siteUrl} />

      {/* Local SEO Geographic Meta Tags */}
      <meta name="geo.region" content="IN-WB" />
      <meta name="geo.placename" content="Kolkata, Netaji Nagar" />
      <meta name="geo.position" content={`${COMPANY_INFO.location.latitude};${COMPANY_INFO.location.longitude}`} />
      <meta name="ICBM" content={`${COMPANY_INFO.location.latitude}, ${COMPANY_INFO.location.longitude}`} />

      {/* Open Graph / Social Sharing */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:site_name" content={COMPANY_INFO.name} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:image" content={ogImageUrl} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:image" content={ogImageUrl} />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(structuredDataGraph)}
      </script>
    </Helmet>
  )
}
