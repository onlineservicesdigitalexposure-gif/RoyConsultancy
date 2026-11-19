import { COMPANY_INFO } from '../constants/company'

/**
 * Generates a direct WhatsApp link with a prefilled enquiry message.
 * Handles Indian 10-digit mobile numbers starting with '91' correctly.
 * @param {string} message - Prefilled message text
 * @param {string} [phone] - Optional phone number override
 * @returns {string} - WhatsApp wa.me URL
 */
export function getWhatsAppUrl(message, phone) {
  const rawPhone = phone || COMPANY_INFO.contact.rawPhone || COMPANY_INFO.contact.phone
  const digitsOnly = String(rawPhone).replace(/\D/g, '')

  let fullNumber = digitsOnly

  // Standard 10-digit Indian mobile number (e.g. 9163669113) -> requires country code 91
  if (digitsOnly.length === 10) {
    fullNumber = `91${digitsOnly}`
  } else if (digitsOnly.length === 11 && digitsOnly.startsWith('0')) {
    fullNumber = `91${digitsOnly.slice(1)}`
  }

  const encodedText = encodeURIComponent(message)
  return `https://wa.me/${fullNumber}?text=${encodedText}`
}
