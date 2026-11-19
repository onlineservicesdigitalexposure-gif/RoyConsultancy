/**
 * Utility for joining class names conditionally and cleanly.
 * @param  {...(string|undefined|null|boolean)} classes
 * @returns {string}
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}
