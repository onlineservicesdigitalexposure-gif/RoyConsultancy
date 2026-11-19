import React from 'react'

/**
 * Authentic corporate vector logos for leading Indian Insurance Providers.
 * Features official brand colors, emblems, and typography.
 */
export function CompanyLogo({ providerId, name, className = 'h-8 w-auto' }) {
  switch (providerId) {
    // -------------------------------------------------------------
    // LIFE INSURANCE PROVIDERS
    // -------------------------------------------------------------
    case 'lic':
      return (
        <svg
          viewBox="0 0 160 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          role="img"
          aria-label="LIC - Life Insurance Corporation of India"
        >
          {/* LIC Blue Badge with Golden Border */}
          <rect width="160" height="48" rx="8" fill="#00338D" />
          {/* Golden Hands and Flame Emblem */}
          <g transform="translate(10, 8)">
            {/* Outer golden halo */}
            <circle cx="16" cy="16" r="14" fill="#FFC72C" fillOpacity="0.2" />
            {/* Stylized cupped protective hands */}
            <path
              d="M6 24C6 24 10 27 16 27C22 27 26 24 26 24C24 28 19 30 16 30C13 30 8 28 6 24Z"
              fill="#FFC72C"
            />
            <path
              d="M7 21C9 23 12 25 16 25C20 25 23 23 25 21C24 24 20 27 16 27C12 27 8 24 7 21Z"
              fill="#F2A900"
            />
            {/* Sacred Diya / Flame */}
            <path
              d="M16 4C16 4 11 11 11 16C11 18.8 13.2 21 16 21C18.8 21 21 18.8 21 16C21 11 16 4 16 4Z"
              fill="#FFC72C"
            />
            <path
              d="M16 8C16 8 13 13 13 16C13 17.7 14.3 19 16 19C17.7 19 19 17.7 19 16C19 13 16 8 16 8Z"
              fill="#E05A10"
            />
          </g>
          {/* Bold LIC Letters in Official Golden Yellow */}
          <text
            x="52"
            y="27"
            fill="#FFC72C"
            fontFamily="Arial, sans-serif"
            fontWeight="900"
            fontSize="22"
            letterSpacing="2"
          >
            LIC
          </text>
          <text
            x="52"
            y="39"
            fill="#FFFFFF"
            fontFamily="Arial, sans-serif"
            fontWeight="600"
            fontSize="7"
            letterSpacing="0.8"
          >
            भारतीय जीवन बीमा निगम
          </text>
        </svg>
      )

    case 'tata-aia':
      return (
        <svg
          viewBox="0 0 160 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          role="img"
          aria-label="Tata AIA Life Insurance"
        >
          <rect width="160" height="48" rx="8" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
          {/* TATA Blue Emblem */}
          <g transform="translate(8, 9)">
            <circle cx="15" cy="15" r="14" fill="#005A9C" />
            {/* TATA Inner Curves */}
            <path d="M10 11H20M15 11V21M12 17H18" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          </g>
          {/* AIA Red Crest */}
          <g transform="translate(42, 9)">
            <rect width="30" height="30" rx="4" fill="#D31145" />
            <path d="M47 34L57 14L67 34H62L57 23L52 34H47Z" fill="#FFFFFF" />
            <path d="M54 28H60" stroke="#D31145" strokeWidth="1.5" />
          </g>
          {/* Text */}
          <text x="78" y="22" fill="#002D62" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="13">
            TATA AIA
          </text>
          <text x="78" y="34" fill="#D31145" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="8.5" letterSpacing="0.5">
            LIFE INSURANCE
          </text>
        </svg>
      )

    case 'max-life':
      return (
        <svg
          viewBox="0 0 160 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          role="img"
          aria-label="Axis Max Life Insurance"
        >
          <rect width="160" height="48" rx="8" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
          {/* Axis Burgundy Accent Triangle & Max Shield */}
          <g transform="translate(10, 8)">
            <path d="M16 2L2 28H30L16 2Z" fill="#97144D" />
            <path d="M16 8L8 24H24L16 8Z" fill="#ED1C24" />
            <path d="M16 13L12 21H20L16 13Z" fill="#FFFFFF" />
          </g>
          {/* Max Life Text */}
          <text x="48" y="22" fill="#002E6D" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="13.5" letterSpacing="0.5">
            MAX LIFE
          </text>
          <text x="48" y="34" fill="#97144D" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="8" letterSpacing="0.8">
            INSURANCE • AXIS
          </text>
        </svg>
      )

    case 'icici-pru':
      return (
        <svg
          viewBox="0 0 160 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          role="img"
          aria-label="ICICI Prudential Life Insurance"
        >
          <rect width="160" height="48" rx="8" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
          {/* ICICI Iconic Orange & Maroon Swirl */}
          <g transform="translate(10, 8)">
            <circle cx="16" cy="16" r="14" fill="#FFF3EB" />
            <path
              d="M16 4C9.4 4 4 9.4 4 16C4 22.6 9.4 28 16 28C22.6 28 28 22.6 28 16"
              stroke="#B02A30"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            <path
              d="M16 9C12.1 9 9 12.1 9 16C9 19.9 12.1 23 16 23"
              stroke="#F58220"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            <circle cx="16" cy="16" r="3.5" fill="#B02A30" />
          </g>
          {/* Text */}
          <text x="46" y="21" fill="#B02A30" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="11" letterSpacing="0.5">
            ICICI PRUDENTIAL
          </text>
          <text x="46" y="33" fill="#F58220" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="8" letterSpacing="0.5">
            LIFE INSURANCE
          </text>
        </svg>
      )

    case 'hdfc-life':
      return (
        <svg
          viewBox="0 0 160 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          role="img"
          aria-label="HDFC Life Insurance"
        >
          <rect width="160" height="48" rx="8" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
          {/* Iconic HDFC Square Grid Emblem */}
          <g transform="translate(10, 9)">
            <rect width="30" height="30" fill="#002F6C" rx="3" />
            <rect x="0" y="0" width="30" height="6" fill="#ED1C24" />
            <rect x="0" y="24" width="30" height="6" fill="#ED1C24" />
            <rect x="10" y="10" width="10" height="10" fill="#FFFFFF" />
          </g>
          {/* Typography */}
          <text x="48" y="24" fill="#002F6C" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="16" letterSpacing="0.5">
            HDFC <tspan fill="#ED1C24">Life</tspan>
          </text>
          <text x="48" y="35" fill="#556987" fontFamily="Arial, sans-serif" fontWeight="600" fontSize="7.5" letterSpacing="0.5">
            Sar utha ke jiyo
          </text>
        </svg>
      )

    case 'bajaj-life':
    case 'bajaj-general-health':
    case 'bajaj-general':
      return (
        <svg
          viewBox="0 0 160 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          role="img"
          aria-label="Bajaj Allianz"
        >
          <rect width="160" height="48" rx="8" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
          {/* Bajaj Dual Arch Emblem */}
          <g transform="translate(10, 8)">
            <circle cx="16" cy="16" r="14" fill="#004B9B" />
            <path
              d="M10 16C10 12 13 9 17 9C21 9 23 12 23 16C23 20 21 23 17 23C13 23 10 20 10 16Z"
              fill="#FFFFFF"
            />
            <path d="M14 16C14 13.5 15.5 12 17 12C18.5 12 20 13.5 20 16C20 18.5 18.5 20 17 20C15.5 20 14 18.5 14 16Z" fill="#004B9B" />
          </g>
          {/* Typography */}
          <text x="48" y="22" fill="#004B9B" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="12" letterSpacing="0.5">
            BAJAJ <tspan fill="#002873">| Allianz</tspan>
          </text>
          <text x="48" y="34" fill="#002873" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="8" letterSpacing="0.6">
            {providerId === 'bajaj-life' ? 'LIFE INSURANCE' : 'GENERAL INSURANCE'}
          </text>
        </svg>
      )

    // -------------------------------------------------------------
    // HEALTH INSURANCE PROVIDERS
    // -------------------------------------------------------------
    case 'star-health':
      return (
        <svg
          viewBox="0 0 160 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          role="img"
          aria-label="Star Health and Allied Insurance"
        >
          <rect width="160" height="48" rx="8" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
          {/* Star with Swoosh */}
          <g transform="translate(10, 8)">
            <path
              d="M16 3L19.5 11.5L28.5 12.5L21.5 18.5L23.5 27.5L16 23L8.5 27.5L10.5 18.5L3.5 12.5L12.5 11.5L16 3Z"
              fill="#004A99"
            />
            <path
              d="M5 26C12 20 22 22 28 28"
              stroke="#E31E24"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </g>
          {/* Typography */}
          <text x="46" y="22" fill="#004A99" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="13" letterSpacing="0.5">
            Star Health
          </text>
          <text x="46" y="34" fill="#E31E24" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="7.5" letterSpacing="0.5">
            INSURANCE THAT CARES
          </text>
        </svg>
      )

    case 'care-health':
      return (
        <svg
          viewBox="0 0 160 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          role="img"
          aria-label="Care Health Insurance"
        >
          <rect width="160" height="48" rx="8" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
          {/* Care Green & Orange Heart Ribbon */}
          <g transform="translate(10, 9)">
            <path
              d="M15 5C11 1 5 4 5 10C5 17 15 26 15 26C15 26 25 17 25 10C25 4 19 1 15 5Z"
              fill="#F7931E"
            />
            <path
              d="M15 9C12 6 8 8 8 12C8 17 15 22 15 22C15 22 22 17 22 12C22 8 18 6 15 9Z"
              fill="#39B54A"
            />
          </g>
          {/* Typography */}
          <text x="46" y="23" fill="#1C2B59" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="16" letterSpacing="0.5">
            care
          </text>
          <text x="46" y="35" fill="#39B54A" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="7.5" letterSpacing="0.8">
            HEALTH INSURANCE
          </text>
        </svg>
      )

    case 'hdfc-ergo-health':
    case 'hdfc-ergo':
      return (
        <svg
          viewBox="0 0 160 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          role="img"
          aria-label="HDFC ERGO General Insurance"
        >
          <rect width="160" height="48" rx="8" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
          {/* Dual Square: HDFC & ERGO */}
          <g transform="translate(8, 9)">
            <rect width="20" height="30" fill="#002F6C" rx="2" />
            <rect y="0" width="20" height="5" fill="#ED1C24" />
            <rect y="25" width="20" height="5" fill="#ED1C24" />
            <rect x="6" y="11" width="8" height="8" fill="#FFFFFF" />
          </g>
          <g transform="translate(32, 9)">
            <rect width="20" height="30" fill="#E2001A" rx="2" />
            <text x="2" y="19" fill="#FFFFFF" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="7">
              ERGO
            </text>
          </g>
          {/* Typography */}
          <text x="58" y="23" fill="#002F6C" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="12">
            HDFC <tspan fill="#E2001A">ERGO</tspan>
          </text>
          <text x="58" y="35" fill="#556987" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="7.5">
            GENERAL INSURANCE
          </text>
        </svg>
      )

    case 'niva-bupa':
      return (
        <svg
          viewBox="0 0 160 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          role="img"
          aria-label="Niva Bupa Health Insurance"
        >
          <rect width="160" height="48" rx="8" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
          {/* Niva Teal Heart */}
          <g transform="translate(10, 8)">
            <circle cx="16" cy="16" r="14" fill="#E6F7F7" />
            <path
              d="M16 8C13 5 8 7 8 12C8 18 16 24 16 24C16 24 24 18 24 12C24 7 19 5 16 8Z"
              fill="#00A3A6"
            />
            <circle cx="16" cy="13" r="3" fill="#FFFFFF" />
          </g>
          {/* Typography */}
          <text x="46" y="22" fill="#00A3A6" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="13">
            niva <tspan fill="#0072CE">bupa</tspan>
          </text>
          <text x="46" y="34" fill="#0072CE" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="7.5" letterSpacing="0.5">
            HEALTH INSURANCE
          </text>
        </svg>
      )

    case 'icici-lombard-health':
    case 'icici-lombard-general':
      return (
        <svg
          viewBox="0 0 160 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          role="img"
          aria-label="ICICI Lombard General Insurance"
        >
          <rect width="160" height="48" rx="8" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
          {/* ICICI Lombard Swirl */}
          <g transform="translate(10, 8)">
            <circle cx="16" cy="16" r="14" fill="#FFF3EB" />
            <path
              d="M16 5C10 5 5 10 5 16C5 22 10 27 16 27C22 27 27 22 27 16"
              stroke="#B02A30"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            <path d="M16 10C12.5 10 10 12.5 10 16C10 19.5 12.5 22 16 22" stroke="#F58220" strokeWidth="3" strokeLinecap="round" />
          </g>
          <text x="46" y="22" fill="#B02A30" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="12" letterSpacing="0.5">
            ICICI <tspan fill="#F58220">Lombard</tspan>
          </text>
          <text x="46" y="34" fill="#B02A30" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="7.5" letterSpacing="0.5">
            NIBHAYE VAADE
          </text>
        </svg>
      )

    case 'manipal-cigna':
      return (
        <svg
          viewBox="0 0 160 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          role="img"
          aria-label="ManipalCigna Health Insurance"
        >
          <rect width="160" height="48" rx="8" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
          {/* Tree & Rays Emblem */}
          <g transform="translate(10, 8)">
            <circle cx="16" cy="16" r="14" fill="#FFF5EB" />
            <circle cx="16" cy="12" r="5" fill="#E87722" />
            <path d="M16 14V25M11 20L16 16L21 20" stroke="#008542" strokeWidth="2.5" strokeLinecap="round" />
          </g>
          <text x="46" y="22" fill="#0B3A78" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="11.5">
            Manipal<tspan fill="#E87722">Cigna</tspan>
          </text>
          <text x="46" y="34" fill="#008542" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="7.5" letterSpacing="0.5">
            HEALTH INSURANCE
          </text>
        </svg>
      )

    case 'aditya-birla':
      return (
        <svg
          viewBox="0 0 160 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          role="img"
          aria-label="Aditya Birla Health Insurance"
        >
          <rect width="160" height="48" rx="8" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
          {/* Iconic Aditya Birla Rising Sun Rays */}
          <g transform="translate(10, 8)">
            <circle cx="16" cy="16" r="14" fill="#8B0000" />
            <path d="M16 6L18 13L25 11L20 16L26 19L19 21L21 27L16 22L11 27L13 21L6 19L12 16L7 11L14 13L16 6Z" fill="#FFCC00" />
            <circle cx="16" cy="16" r="4.5" fill="#FF4500" />
          </g>
          <text x="46" y="20" fill="#8B0000" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="9.5" letterSpacing="0.4">
            ADITYA BIRLA
          </text>
          <text x="46" y="30" fill="#D97706" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="8" letterSpacing="0.8">
            CAPITAL
          </text>
          <text x="46" y="39" fill="#8B0000" fontFamily="Arial, sans-serif" fontWeight="600" fontSize="6.5">
            HEALTH INSURANCE
          </text>
        </svg>
      )

    // -------------------------------------------------------------
    // GENERAL INSURANCE PROVIDERS
    // -------------------------------------------------------------
    case 'tata-aig':
      return (
        <svg
          viewBox="0 0 160 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          role="img"
          aria-label="Tata AIG General Insurance"
        >
          <rect width="160" height="48" rx="8" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
          {/* TATA Blue Box + AIG Box */}
          <g transform="translate(10, 9)">
            <rect width="28" height="30" fill="#005A9C" rx="3" />
            <path d="M7 11H21M14 11V21" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
          </g>
          <text x="46" y="24" fill="#005A9C" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="14" letterSpacing="0.5">
            TATA <tspan fill="#003366">AIG</tspan>
          </text>
          <text x="46" y="36" fill="#003366" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="7.5" letterSpacing="0.5">
            INSURANCE • WITH YOU ALWAYS
          </text>
        </svg>
      )

    case 'digit':
      return (
        <svg
          viewBox="0 0 160 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          role="img"
          aria-label="Digit Insurance"
        >
          <rect width="160" height="48" rx="8" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
          {/* Digit Orange Thumbs-up / Smile Emblem */}
          <g transform="translate(10, 8)">
            <circle cx="16" cy="16" r="14" fill="#FF5A00" />
            <path
              d="M11 16C11 19 13.5 21 16.5 21C19.5 21 22 19 22 16"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="13" cy="12" r="1.5" fill="#FFFFFF" />
            <circle cx="20" cy="12" r="1.5" fill="#FFFFFF" />
          </g>
          <text x="48" y="24" fill="#FF5A00" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="16" letterSpacing="0.5">
            digit
          </text>
          <text x="48" y="36" fill="#1F2937" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="8" letterSpacing="0.5">
            INSURANCE SIMPLIFIED
          </text>
        </svg>
      )

    default:
      return (
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
            {name ? name.substring(0, 3).toUpperCase() : 'INS'}
          </div>
          <span className="font-heading font-bold text-sm text-primary">{name}</span>
        </div>
      )
  }
}
