import { transition, useStorage } from '@vueuse/core'
import type { Transition } from '@/types'
import { computed } from 'vue'
import { useThemeStore } from '@/stores/theme.store'
import { transitionConfig } from '@/config/transation.config'

export const useTransitaion = () => {
  const themeStore = useThemeStore()
  const transition = computed(() => {
    return transitionConfig.find((t) => t.name === themeStore.transition)
  })
  return {
    transition,
  }
}
