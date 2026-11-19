/**
 * Smoothly scrolls to an element by its ID, accounting for the sticky navbar height.
 * @param {string} targetId - ID of target element (with or without '#')
 * @param {number} [offset=80] - Top offset in pixels to clear fixed header
 */
export function scrollToSection(targetId, offset = 80) {
  const cleanId = targetId.startsWith('#') ? targetId.slice(1) : targetId
  const element = document.getElementById(cleanId)

  if (element) {
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })

    // Update URL hash without causing a default jump
    if (window.history.pushState) {
      window.history.pushState(null, '', `#${cleanId}`)
    }
  }
}
