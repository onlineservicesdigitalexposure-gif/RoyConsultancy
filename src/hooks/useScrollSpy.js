import { useState, useEffect } from 'react'

/**
 * Hook to track which section is currently active in viewport using IntersectionObserver.
 * @param {string[]} sectionIds - Array of element IDs to observe
 * @param {string} [rootMargin='-25% 0px -65% 0px'] - Viewport boundary trigger window
 * @returns {string} - Active section ID
 */
export function useScrollSpy(sectionIds, rootMargin = '-25% 0px -65% 0px') {
  const [activeId, setActiveId] = useState(sectionIds[0] || '')

  useEffect(() => {
    if (!sectionIds || sectionIds.length === 0) return

    // Fallback handler for top-of-page and bottom-of-page edge cases
    const handleScrollEdge = () => {
      const scrollY = window.scrollY
      if (scrollY < 80) {
        setActiveId(sectionIds[0])
        return
      }

      // Check if user is scrolled to the very bottom of the page
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60

      if (isAtBottom && sectionIds.length > 0) {
        setActiveId(sectionIds[sectionIds.length - 1])
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        // Collect currently intersecting entries
        const intersecting = entries.filter((entry) => entry.isIntersecting)
        if (intersecting.length > 0) {
          // If multiple overlap, pick the one with highest intersection ratio or closest to top
          intersecting.sort((a, b) => b.intersectionRatio - a.intersectionRatio)
          setActiveId(intersecting[0].target.id)
        }
      },
      {
        root: null,
        rootMargin,
        threshold: [0, 0.2, 0.5, 0.8],
      }
    )

    // Observe all registered elements that exist in the DOM
    const observedElements = []
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) {
        observer.observe(el)
        observedElements.push(el)
      }
    })

    window.addEventListener('scroll', handleScrollEdge, { passive: true })
    handleScrollEdge()

    return () => {
      observedElements.forEach((el) => observer.unobserve(el))
      observer.disconnect()
      window.removeEventListener('scroll', handleScrollEdge)
    }
  }, [sectionIds, rootMargin])

  return activeId
}
