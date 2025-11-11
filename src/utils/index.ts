import type { ComponentPublicInstance } from "vue"

export const getElement = (el: Element | ComponentPublicInstance | null): HTMLElement | null => {
  if (!el) return null
  if (el instanceof HTMLElement) return el
  if (el instanceof Element) return el as HTMLElement
  // For Vue component instances, access $el property
  const domEl = (el as ComponentPublicInstance).$el
  return domEl instanceof HTMLElement ? domEl : null
}
