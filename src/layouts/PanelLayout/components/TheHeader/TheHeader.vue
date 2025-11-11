<script setup lang="ts">
import TheButtonIcon from '@/components/TheButtonIcon.vue'
import { useThemeStore } from '@/stores/theme.store'
import { useFullscreen } from '@vueuse/core'
import { Button, Drawer, LayoutHeader, Tooltip } from 'ant-design-vue/es'
import { computed, ref, watch, nextTick } from 'vue'
import TheSettings from './components/TheSettings.vue'
import { useTourStore } from '@/stores/tour.store'
import { getElement } from '@/utils'
const open = ref(false)
const tourStore = useTourStore()
const themeStore = useThemeStore()

const placement = computed(() => {
  return themeStore.direction === 'rtl' ? 'left' : 'right'
})

const { isFullscreen, toggle } = useFullscreen()

watch(
  () => tourStore.current,
  async (newCurrent) => {
    if (newCurrent === 4 && tourStore.open) {
      await nextTick()
      open.value = true
      await new Promise((resolve) => setTimeout(resolve, 300))
    } else if (newCurrent !== 4 && open.value) {
      open.value = false
    }
  },
  { immediate: true },
)

watch(
  () => tourStore.open,
  (isOpen) => {
    if (!isOpen && open.value) {
      open.value = false
    }
  },
)
</script>

<template>
  <LayoutHeader class="flex items-center justify-between">
    <div></div>
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <Tooltip :title="$t('panelGuide')">
          <Button type="text" class="text-primary!" @click="tourStore.open = false">راهنمای پنل</Button>
        </Tooltip>

        <Tooltip :title="isFullscreen ? $t('fullScreenExit') : $t('fullscreen')">
          <TheButtonIcon
            class="bg-red-500"
            :icon="{
              icon: isFullscreen ? 'mdi:fullscreen-exit' : 'mdi:fullscreen',
              class: 'text-primary text-base',
            }"
            @click="toggle"
          />
        </Tooltip>

        <Tooltip :title="$t('settings')">
          <TheButtonIcon
            class="bg-red-500"
            :icon="{ icon: 'mdi:cog', class: 'text-primary text-base' }"
            @click="open = true"
          />
        </Tooltip>
        <Drawer
          v-model:open="open"
          :title="$t('settings')"
          :placement="placement"
          :ref="(el) => (tourStore.settingsRef = getElement(el) || undefined)"
        >
          <TheSettings />
        </Drawer>
      </div>
    </div>
  </LayoutHeader>
</template>
