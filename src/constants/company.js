/**
 * Centralized business metadata for Roy Consultancy.
 */
export const SITE_CONFIG = {
  // Production domain configuration: set VITE_SITE_URL in environment or update here once the official domain is registered.
  baseUrl: typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_SITE_URL
    ? import.meta.env.VITE_SITE_URL
    : '',
  defaultCanonicalUrl: 'https://royconsultancy.com', // Configurable production domain placeholder
  seoTitle: 'ROY CONSULTANCY | Insurance & Tax Consultant in Kolkata',
  seoDescription:
    'ROY CONSULTANCY, Netaji Nagar, Kolkata, offers Life, Health and General Insurance assistance, Income Tax Filing, GST, Accounting and Financial Consultancy Services.',
  primaryKeywords: [
    'Insurance Consultant in Netaji Nagar Kolkata',
    'Insurance Services in Kolkata',
    'Life Insurance Consultant Kolkata',
    'Health Insurance Assistance Kolkata',
    'Car Insurance in Kolkata',
    'Bike Insurance in Kolkata',
    'Tax Consultant in Kolkata',
    'GST Registration Services Kolkata',
    'Income Tax Filing Kolkata',
    'Accounting Services Kolkata',
    'Financial Consultant Netaji Nagar',
  ],
}

export const COMPANY_INFO = {
  name: 'ROY CONSULTANCY',
  legalName: 'ROY CONSULTANCY',
  founder: 'Nilanjan Roy',
  designation: 'Proprietor & Financial Consultant',
  location: {
    street: '6/49 Netaji Nagar',
    landmark: 'Near Netaji Nagar Post Office',
    area: 'Netaji Nagar',
    city: 'Kolkata',
    state: 'West Bengal',
    pinCode: '700092',
    country: 'India',
    fullAddress: '6/49 Netaji Nagar, Kolkata, West Bengal - 700092 (Near Netaji Nagar Post Office)',
    shortAddress: '6/49 Netaji Nagar, Kolkata - 700092',
    latitude: 22.4836,
    longitude: 88.3541,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=6%2F49+Netaji+Nagar+Kolkata+West+Bengal+700092',
    mapsEmbedUrl: 'https://maps.google.com/maps?q=Netaji+Nagar+Post+Office,+Kolkata,+West+Bengal+700092&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
  contact: {
    phone: '+91 91636 69113',
    rawPhone: '9163669113',
    email: 'nilanjan.roy7@gmail.com',
    workingHours: 'Monday – Saturday: 9:30 AM – 6:30 PM IST',
  },
  tagline: 'Your Trusted Partner for Insurance & Financial Solutions',
  shortDescription:
    'ROY CONSULTANCY is a professional consultancy in Netaji Nagar, Kolkata, providing assistance across Life, Health and General Insurance, along with Taxation, Accounting and Financial Compliance services.',
  trustPillars: [
    {
      id: 'insurance',
      title: 'Insurance Assistance',
      description: 'Life, Health, and General Insurance solutions tailored for your protection',
    },
    {
      id: 'tax',
      title: 'Tax & Accounting Support',
      description: 'Income tax filing, GST assistance, and organized accounting guidance',
    },
    {
      id: 'services',
      title: 'Individual & Business Services',
      description: 'Documentation and financial compliance support for families and enterprises',
    },
  ],
}
