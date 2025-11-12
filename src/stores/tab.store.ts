// stores/tab.store.ts
import { defineStore } from 'pinia'
import type { RouteLocationNormalized } from 'vue-router'
import { useStorage } from '@vueuse/core'
import { computed, watch } from 'vue'
import type { Ref } from 'vue'
import { useRoute } from 'vue-router'
import router from '@/router'
export const useTabStore = defineStore('tabs', () => {
  type Tab = { key: string; title: string; icon: string; closable: boolean }

  const tabs = useStorage<Tab[]>('tabs', [
    {
      key: 'TheDashboard',
      title: 'Home',
      icon: 'mdi:home',
      closable: true,
    },
    {
      key: 'ThePage',
      title: 'Page',
      icon: 'mdi:folder',
      closable: true,
    },
    {
      key: 'TheProfile',
      title: 'Profile',
      icon: 'mdi:user',
      closable: true,
    },
    {
      key: 'UsersList',
      title: 'Users',
      icon: 'mdi:users',
      closable: true,
    },
  ])

  const route = useRoute()
  const activeTab = computed(() => {
    return tabs.value.find((t) => t.key === route.name)?.key
  }) as Ref<string>

  const addTab = (route: RouteLocationNormalized) => {
    if (!tabs.value.find((t) => t.key === (route.name as string))) {
      const closable = tabs.value.length >= 1 ? true : false
      tabs.value.push({
        key: route.name as string,
        title: route.meta?.label as string,
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
    }
  }

  const setActiveTab = (key: string) => {
    router.push({ name: key })
  }

  return { tabs, addTab, removeTab, setActiveTab, activeTab }
})
