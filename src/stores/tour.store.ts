import { useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { createVNode } from 'vue'
import type { TourProps } from 'ant-design-vue'
import { useThemeStore } from './theme.store'

const themeStore = useThemeStore()

export const useTourStore = defineStore('tour', () => {
  const open = ref<boolean>(false)

  const headerRef = ref<HTMLElement | undefined>(undefined)
  const siderRef = ref<HTMLElement | undefined>(undefined)
  const contentRef = ref<HTMLElement | undefined>(undefined)
  const footerRef = ref<HTMLElement | undefined>(undefined)
  const settingsRef = ref<HTMLElement | undefined>(undefined)
  const current = ref(3)

  const steps: TourProps['steps'] = [
    {
      title: 'هدر داشبورد',
      description:
        'در این قسمت اطلاعات کلی داشبورد را مشاهده می‌کنید و می‌توانید به تنظیمات، اعلان‌ها و خروج دسترسی داشته باشید.',
      target: (() => headerRef.value || null) as
        | HTMLElement
        | (() => HTMLElement)
        | (() => null)
        | undefined,
    },
    {
      title: 'منوی کناری',
      description: 'از این بخش می‌توانید به منوهای مختلف پنل مدیریتی دسترسی پیدا کنید.',
      target: (() => siderRef.value || null) as
        | HTMLElement
        | (() => HTMLElement)
        | (() => null)
        | undefined,
      placement: 'right',
    },
    {
      title: 'محتوای اصلی',
      description:
        'اینجا محتوای اصلی نمایش داده می‌شود. شما می‌توانید اطلاعات، جدول‌ها و سایر امکانات را در این بخش مدیریت کنید.',
      target: (() => contentRef.value || null) as
        | HTMLElement
        | (() => HTMLElement)
        | (() => null)
        | undefined,
      placement: 'top',
    },
    {
      title: 'فوتر',
      description: 'در فوتر اطلاعات تکمیلی یا راهنمای سریع قرار دارد.',
      target: (() => footerRef.value || null) as
        | HTMLElement
        | (() => HTMLElement)
        | (() => null)
        | undefined,
      placement: 'top',
    },
    {
      title: 'تنظیمات',
      description: 'در این قسمت می‌توانید تنظیمات پنل را تنظیم کنید.',
      target: (() => settingsRef.value || null) as
        | HTMLElement
        | (() => HTMLElement)
        | (() => null)
        | undefined,
    },
  ]

  const handleOpen = (val: boolean): void => {
    open.value = val
  }
  const onFinish = ()=>{
    handleOpen(false)
    current.value = 0
  }
  return {
    onFinish,
    open,
    headerRef,
    siderRef,
    contentRef,
    footerRef,
    settingsRef,
    current,
    steps,
    handleOpen,
  }
})
