import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { TourProps } from 'ant-design-vue'

export const useTourStore = defineStore('tour', () => {
  const open = ref<boolean>(false)

  const headerRef = ref<HTMLElement | undefined>(undefined)
  const siderRef = ref<HTMLElement | undefined>(undefined)
  const contentRef = ref<HTMLElement | undefined>(undefined)
  const settingsRef = ref<HTMLElement | undefined>(undefined)
  const tabbarRef = ref<HTMLElement | undefined>(undefined)
  const current = ref(0)

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
      nextButtonProps: {
        children: () => 'بعدی',
      },
      prevButtonProps: {
        children: () => 'قبلی',
      },
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
      nextButtonProps: {
        children: () => 'بعدی',
      },
      prevButtonProps: {
        children: () => 'قبلی',
      },
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
      nextButtonProps: {
        children: () => 'بعدی',
      },
      prevButtonProps: {
        children: () => 'قبلی',
      },
    },
    {
      title: 'تب بار',
      description: 'از این بخش می‌توانید به تب بار دسترسی پیدا کنید.',
      target: (() => tabbarRef.value || null) as
        | HTMLElement
        | (() => HTMLElement)
        | (() => null)
        | undefined,
      nextButtonProps: {
        children: () => 'بعدی',
      },
      prevButtonProps: {
        children: () => 'قبلی',
      },
    },
    {
      title: 'تنظیمات',
      description: 'در این قسمت می‌توانید تنظیمات پنل را تنظیم کنید.',
      target: (() => settingsRef.value || null) as
        | HTMLElement
        | (() => HTMLElement)
        | (() => null)
        | undefined,
      placement: 'center',
      nextButtonProps: {
        children: () => 'بعدی',
      },
      prevButtonProps: {
        children: () => 'بستن',
      },
    },
  ]

  const handleOpen = (val: boolean): void => {
    open.value = val
  }
  const onFinish = () => {
    handleOpen(false)
    current.value = 0
  }
  return {
    onFinish,
    open,
    headerRef,
    siderRef,
    contentRef,
    tabbarRef,
    settingsRef,
    current,
    steps,
    handleOpen,
  }
})
