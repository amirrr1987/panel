// stores/tab.store.ts
import { defineStore } from 'pinia'
import type { RouteLocationNormalized } from 'vue-router'
import { useStorage } from '@vueuse/core'
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import router from '@/router'
export const useTabStore = defineStore('tabs', () => {
  type Tab = { key: string; label: string; icon: string; closable: boolean }

  const tabs = useStorage<Tab[]>('tabs', [])

  const computedTabs = computed(() => {
    if (tabs.value.length === 1) {
      return tabs.value.map((tab) => ({ ...tab, closable: false }))
    } else {
      return tabs.value.map((tab) => ({ ...tab, closable: true }))
    }
  })
  const route = useRoute()
  const activeTab = ref<string>((route.name as string) || 'TheDashboard')
  watch(
    () => route.name,
    (newName) => {
      activeTab.value = (newName as string) || 'TheDashboard'
    },
    { immediate: true, deep: true },
  )

  const addTab = (route: RouteLocationNormalized) => {
    if(route.name === 'TheLogin' || route.name === 'TheRegister') {
      return
    }
    if (!tabs.value.find((t) => t.key === (route.name as string))) {
      const closable = tabs.value.length >= 1 ? true : false
      tabs.value.push({
        key: route.name as string,
        label: route.meta?.label as string,
        icon: route.meta?.icon as string,
        closable: closable,
      })
    }
  }

  const removeTab = (key: string) => {
    if (tabs.value.length === 1) {
      return
    } else {
      tabs.value = tabs.value.filter((t) => t.key !== key)
      if (tabs.value.length > 0) {
        activeTab.value = tabs.value[tabs.value.length - 1]?.key ?? 'TheDashboard'
      } else {
        activeTab.value = 'TheDashboard'
      }
      router.push({ name: activeTab.value })
    }
  }
  const setActiveTab = (key: string) => {
    router.push({ name: key })
  }

  return { tabs, addTab, removeTab, setActiveTab, activeTab, computedTabs }
})
