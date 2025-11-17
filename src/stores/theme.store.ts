import { reactive, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import { theme as antTheme } from 'ant-design-vue/es'
import type { AliasToken } from 'ant-design-vue/es/theme/internal'
import type { OverrideToken } from 'ant-design-vue/es/theme/interface'
import type { MappingAlgorithm, SizeType } from 'ant-design-vue/es/config-provider/context'
import { useStorage } from '@vueuse/core'
import { i18n } from '@/i18n'
import { colors } from '@/config/color.config'

export const useThemeStore = defineStore('theme', () => {
  const isDark = useStorage('isDark', false)
  const isCompact = useStorage('isCompact', false)
  const hashed = useStorage('hashed', false)
  const inherit = useStorage('inherit', false)
  const language = useStorage<'fa' | 'en'>('language', 'fa')
  const componentSize = useStorage<SizeType>('componentSize', 'middle')
  const direction = useStorage<'ltr' | 'rtl'>('direction', 'rtl')
  const transition = useStorage<string>('transition', 'fade')
  const token = useStorage<Partial<AliasToken>>('token', {
    colorPrimary: '#1677ff',
    fontFamily: 'Poppins, Vazirmatn, sans-serif',
    borderRadius: 6,
    fontSize: 14,
  })
  const { token: antToken } = antTheme.useToken()
  const components = reactive<Partial<OverrideToken>>({
    Layout: {
      get colorBgHeader() {
        return antToken.value.colorBgContainer
      },
      get colorBgTrigger() {
        return token.value.colorPrimary || '#1677ff'
      },
    },
  })

  const spacing = computed(() => {
    if (isCompact.value) {
      if (componentSize.value === 'small') return '0.19rem'
      if (componentSize.value === 'middle') return '0.21rem'
      if (componentSize.value === 'large') return '0.23rem'
    }
    if (!isCompact.value) {
      if (componentSize.value === 'small') return '0.23rem'
      if (componentSize.value === 'middle') return '0.25rem'
      if (componentSize.value === 'large') return '0.27rem'
    }
    return '8px'
  })

  const algorithm = computed<MappingAlgorithm[]>(() => {
    const result: MappingAlgorithm[] = []
    if (isDark.value) result.push(antTheme.darkAlgorithm)
    if (isCompact.value) result.push(antTheme.compactAlgorithm)
    return result
  })

  watch(
    () => language.value,
    (language) => {
      // i18n.changeLanguage(language)
      i18n.language = language
      document.documentElement.setAttribute('lang', language)
      document.documentElement.style.setProperty(
        '--font-family',
        language === 'fa' ? 'Vazirmatn, Poppins, sans-serif' : 'Poppins, Vazirmatn, sans-serif',
      )
      token.value.fontFamily =
        language === 'fa' ? 'Vazirmatn, Poppins, sans-serif' : 'Poppins, Vazirmatn, sans-serif'
    },
  )
  watch(
    () => direction.value,
    (direction) => {
      document.documentElement.setAttribute('dir', direction)
    },
  )
  watch(
    () => token.value.colorPrimary,
    (colorPrimary) => {
      const color = Object.values(colors).find((color) => color.hex === colorPrimary)
      if (color) {
        document.documentElement.style.setProperty('--color-primary', color.oklch)
      }
    },
    { immediate: true },
  )

  watch(
    () => token.value.borderRadius,
    (borderRadius) => {
      document.documentElement.style.setProperty('--radius-base', borderRadius + 'px')
    },
    { immediate: true },
  )

  watch(
    () => spacing.value,
    (spacing) => {
      document.documentElement.style.setProperty('--spacing', spacing)
      document.documentElement.style.setProperty(
        '--font-size',
        (token.value?.fontSize ?? 14) * 1.68 + 'px',
      )
    },
    { immediate: true },
  )
  watch(
    () => direction.value,
    (direction) => {
      document.documentElement.setAttribute('dir', direction)
    },
    { immediate: true },
  )
  const reset = () => {
    isDark.value = false
    isCompact.value = false
    hashed.value = false
    inherit.value = false
    componentSize.value = 'middle'
    direction.value = 'rtl'
    language.value = 'fa'
    token.value = {
      colorPrimary: '#1890ff',
      fontFamily: 'Poppins, Vazirmatn, sans-serif',
      borderRadius: 6,
      fontSize: 16,
    }
  }

  return {
    token,
    isDark,
    isCompact,
    hashed,
    inherit,
    componentSize,
    direction,
    language,
    transition,
    algorithm,
    components,
    spacing,
    reset,
  }
})
