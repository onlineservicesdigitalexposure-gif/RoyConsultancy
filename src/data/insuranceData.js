import lifeInsuranceImg from '../assets/images/Life Insurance.jpeg'
import healthInsuranceImg from '../assets/images/Health Insurance.jpeg'
import generalInsuranceImg from '../assets/images/General Insurance.jpeg'

/**
 * Insurance service categories and supported insurer networks.
 * Note: ROY CONSULTANCY assists clients with independent evaluation,
 * comparative premium assessment, and documentation guidance across these entities.
 */
export const INSURANCE_SERVICES = [
  {
    id: 'life-insurance',
    title: 'Life Insurance',
    eyebrow: 'Family & Financial Security',
    description:
      'Explore life insurance options designed to support financial protection and long-term family security.',
    icon: 'HeartHandshake',
    image: lifeInsuranceImg,
    imageAlt: 'Life Insurance Consultant Kolkata - Term life and savings insurance planning',
    companies: [
      'LIC',
      'Tata AIA Life Insurance',
      'Axis Max Life Insurance',
      'ICICI Prudential Life Insurance',
      'HDFC Life',
      'Bajaj Life Insurance',
    ],
    highlights: [
      'Term Life & Pure Protection Plans',
      'Guaranteed Savings & Endowment Policies',
      'Retirement & Pension Solutions',
    ],
    whatsappPrompt:
      'Hello Nilanjan Roy, I would like to enquire about Life Insurance options through ROY CONSULTANCY.',
  },
  {
    id: 'health-insurance',
    title: 'Health Insurance',
    eyebrow: 'Healthcare & Medical Cover',
    description:
      'Get assistance in exploring health insurance solutions for medical expenses, hospitalisation and healthcare protection.',
    icon: 'ShieldPlus',
    image: healthInsuranceImg,
    imageAlt: 'Health Insurance Assistance Kolkata - Mediclaim and family healthcare coverage',
    companies: [
      'Star Health',
      'Care Health Insurance',
      'HDFC ERGO Health',
      'Niva Bupa Health Insurance',
      'ICICI Lombard',
      'ManipalCigna',
      'Bajaj General Insurance',
      'Aditya Birla Health Insurance',
    ],
    highlights: [
      'Individual & Family Floater Covers',
      'Senior Citizen & Critical Illness Cover',
      'Cashless Network Hospital Guidance',
    ],
    whatsappPrompt:
      'Hello Nilanjan Roy, I would like to enquire about Health Insurance plans through ROY CONSULTANCY.',
  },
  {
    id: 'general-insurance',
    title: 'General Insurance',
    eyebrow: 'Vehicles & Asset Protection',
    description:
      'Explore insurance solutions for vehicles (car & bike) and other general insurance requirements in Kolkata.',
    icon: 'Car',
    image: generalInsuranceImg,
    imageAlt: 'Car and Bike Insurance in Kolkata - Two-wheeler and four-wheeler vehicle insurance assistance',
    companies: [
      'Tata AIG',
      'Bajaj General Insurance',
      'HDFC ERGO',
      'ICICI Lombard',
      'Digit Insurance',
    ],
    highlights: [
      'Two-Wheeler & Four-Wheeler (Car & Bike) Comprehensive',
      'Commercial Vehicle & Fleet Cover',
      'Third-Party & Zero-Depreciation Add-ons',
    ],
    whatsappPrompt:
      'Hello Nilanjan Roy, I would like to enquire about General & Vehicle Insurance through ROY CONSULTANCY.',
  },
]

/**
 * Detailed provider showcase catalog organized by category tabs.
 */
export const INSURANCE_PROVIDER_TABS = [
  {
    id: 'life',
    label: 'Life Insurance',
    icon: 'HeartHandshake',
    description: 'Assisting with life term protection, endowment savings, and guaranteed family financial security.',
    providers: [
      {
        id: 'lic',
        name: 'LIC',
        fullName: 'Life Insurance Corporation of India',
        type: 'Public Sector',
        specialty: 'Endowment & Sovereign Backed Policies',
      },
      {
        id: 'tata-aia',
        name: 'Tata AIA Life Insurance',
        fullName: 'Tata AIA Life Insurance Co. Ltd.',
        type: 'Private Sector',
        specialty: 'Term Protection & Wealth Plans',
      },
      {
        id: 'max-life',
        name: 'Axis Max Life Insurance',
        fullName: 'Max Life Insurance Co. Ltd.',
        type: 'Private Sector',
        specialty: 'Comprehensive Term & Critical Rider',
      },
      {
        id: 'icici-pru',
        name: 'ICICI Prudential Life Insurance',
        fullName: 'ICICI Prudential Life Insurance Co. Ltd.',
        type: 'Private Sector',
        specialty: 'Term Cover, Annuity & Pension',
      },
      {
        id: 'hdfc-life',
        name: 'HDFC Life',
        fullName: 'HDFC Life Insurance Co. Ltd.',
        type: 'Private Sector',
        specialty: 'Protection, Savings & Child Plans',
      },
      {
        id: 'bajaj-life',
        name: 'Bajaj Life Insurance',
        fullName: 'Bajaj Allianz Life Insurance Co. Ltd.',
        type: 'Private Sector',
        specialty: 'Term Assurance & Value Savings',
      },
    ],
  },
  {
    id: 'health',
    label: 'Health Insurance',
    icon: 'ShieldPlus',
    description: 'Guidance across individual, family floater, critical illness and senior citizen medical coverage.',
    providers: [
      {
        id: 'star-health',
        name: 'Star Health',
        fullName: 'Star Health & Allied Insurance Co. Ltd.',
        type: 'Standalone Health',
        specialty: 'Individual & Senior Citizen Floater',
      },
      {
        id: 'care-health',
        name: 'Care Health Insurance',
        fullName: 'Care Health Insurance Ltd.',
        type: 'Standalone Health',
        specialty: 'Hospitalization & Critical Care',
      },
      {
        id: 'hdfc-ergo-health',
        name: 'HDFC ERGO Health',
        fullName: 'HDFC ERGO General Insurance Co. Ltd.',
        type: 'General & Health',
        specialty: 'Cashless Network & Family Health',
      },
      {
        id: 'niva-bupa',
        name: 'Niva Bupa Health Insurance',
        fullName: 'Niva Bupa Health Insurance Co. Ltd.',
        type: 'Standalone Health',
        specialty: 'ReAssure & Comprehensive Floater',
      },
      {
        id: 'icici-lombard-health',
        name: 'ICICI Lombard',
        fullName: 'ICICI Lombard General Insurance Co. Ltd.',
        type: 'General & Health',
        specialty: 'Complete Health Insurance Plans',
      },
      {
        id: 'manipal-cigna',
        name: 'ManipalCigna',
        fullName: 'ManipalCigna Health Insurance Co. Ltd.',
        type: 'Standalone Health',
        specialty: 'ProHealth & Lifestyle Medical Plans',
      },
      {
        id: 'bajaj-general-health',
        name: 'Bajaj General Insurance',
        fullName: 'Bajaj Allianz General Insurance Co. Ltd.',
        type: 'General & Health',
        specialty: 'Health Guard & Medical Protection',
      },
      {
        id: 'aditya-birla',
        name: 'Aditya Birla Health Insurance',
        fullName: 'Aditya Birla Health Insurance Co. Ltd.',
        type: 'Standalone Health',
        specialty: 'Activ Health & Wellness Benefit Plans',
      },
    ],
  },
  {
    id: 'general',
    label: 'General Insurance',
    icon: 'Car',
    description: 'Vehicle, commercial property, plant, and asset protection assistance.',
    providers: [
      {
        id: 'tata-aig',
        name: 'Tata AIG',
        fullName: 'Tata AIG General Insurance Co. Ltd.',
        type: 'General & Motor',
        specialty: 'Four-Wheeler & Two-Wheeler Comprehensive',
      },
      {
        id: 'bajaj-general',
        name: 'Bajaj General Insurance',
        fullName: 'Bajaj Allianz General Insurance Co. Ltd.',
        type: 'General & Motor',
        specialty: 'DriveSmart Motor & Commercial Cover',
      },
      {
        id: 'hdfc-ergo',
        name: 'HDFC ERGO',
        fullName: 'HDFC ERGO General Insurance Co. Ltd.',
        type: 'General & Motor',
        specialty: 'Instant Paperless Motor & Asset Cover',
      },
      {
        id: 'icici-lombard-general',
        name: 'ICICI Lombard',
        fullName: 'ICICI Lombard General Insurance Co. Ltd.',
        type: 'General & Motor',
        specialty: 'Motor Comprehensive & Zero-Dep Cover',
      },
      {
        id: 'digit',
        name: 'Digit Insurance',
        fullName: 'Go Digit General Insurance Ltd.',
        type: 'General & Motor',
        specialty: 'Simplified Claims & Digital Motor Cover',
      },
    ],
  },
]
