<script setup lang="ts">
import TheButtonIcon from '@/components/TheButtonIcon.vue'
import { LayoutContent, Tooltip } from 'ant-design-vue/es'
import { RouterView } from 'vue-router'
import ThePreloader from '@/components/ThePreloader.vue'
import { useLoading } from '@/composable/useLoading'
import { useThemeStore } from '@/stores/theme.store'
import TheTabbar from '../TheTabbar.vue'
const isFullContent = defineModel<boolean>('isFullContent', { required: true })
const themeStore = useThemeStore()
const { isLoading } = useLoading()
</script>
<template>
  <LayoutContent class="">
    <TheTabbar :height="38" class="flex items-center justify-between px-4">
      <div>sdf</div>
      <Tooltip :title="isFullContent ? $t('fullContentExit') : $t('fullContent')">
        <TheButtonIcon
          :icon="{
            icon: isFullContent ? 'mdi:fullscreen-exit' : 'mdi:fullscreen',
            class: 'text-primary text-base',
          }"
          @click="isFullContent = !isFullContent"
        />
      </Tooltip>
    </TheTabbar>
    <!-- <div
      class="flex items-center justify-between"
      :style="{ backgroundColor: themeStore?.components?.Layout?.colorBgHeader ?? '' }"
    >
    <div></div>

    </div> -->
    <div class="p-4 relative grid h-full overflow-x-hidden overflow-y-auto">
      <ThePreloader v-if="isLoading" />
      <Transition :name="themeStore.transition">
        <RouterView v-slot="{ Component }">
          <component :is="Component" />
        </RouterView>
      </Transition>
    </div>
  </LayoutContent>
</template>

<style>
[v-cloak] {
  display: none;
}
</style>
