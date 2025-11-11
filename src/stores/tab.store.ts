// stores/tab.store.ts
import { defineStore } from 'pinia'
import type { RouteLocationNormalized } from 'vue-router'
import { useStorage } from '@vueuse/core'

export const useTabStore = defineStore('tabs', () => {
  type Tab = { key: string; title: string; icon: string; closable: boolean }

  const tabs = useStorage<Tab[]>('tabs', [])

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
    // const idx = tabs.value.findIndex((t) => t.key === key)
    // if (idx === -1) return { nextKey: undefined }

    // const removed = tabs.value[idx]
    // if (!removed?.closable) return { nextKey: undefined }

    // tabs.value.splice(idx, 1)

    // const left = tabs.value[idx - 1]
    // const right = tabs.value[idx]
    // const root = tabs.value.find((t) => t.closable === false)
    // const next = left ?? right ?? root

    // if (tabs.value.length === 1) {
    //   tabs.value.map((t) => {
    //     t.closable = false
    //   })
    //   return { nextKey: undefined }
    // } else {
    //   tabs.value.map((t) => {
    //     t.closable = true
    //   })
    // }

    // return { nextKey: next?.key }
  }

  const resetTabs = () => {
    tabs.value = []
  }

  return { tabs, addTab, removeTab, resetTabs }
})
