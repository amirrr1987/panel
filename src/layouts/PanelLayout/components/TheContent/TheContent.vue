<script setup lang="ts">
import TheButtonIcon from '@/components/TheButtonIcon.vue'
import { LayoutContent, Tooltip } from 'ant-design-vue/es'
import { RouterView } from 'vue-router'
import { useTransitaion } from '@/composable/useTransitaion'
import ThePreloader from '@/components/ThePreloader.vue'
import { useLoading } from '@/composable/useLoading'
const { transition } = useTransitaion()
const isFullContent = defineModel<boolean>('isFullContent', { required: true })

const { isLoading } = useLoading()
</script>
<template>
  <LayoutContent class="overflow-x-hidden overflow-y-auto">
    <div class="flex items-center justify-between">
      <Tooltip :title="isFullContent ? $t('fullContentExit') : $t('fullContent')">
        <TheButtonIcon
          :icon="{
            icon: isFullContent ? 'mdi:fullscreen-exit' : 'mdi:fullscreen',
            class: 'text-primary text-base',
          }"
          @click="isFullContent = !isFullContent"
        />
      </Tooltip>
    </div>
    <div class="p-4 relative grid h-full">
      <ThePreloader v-if="isLoading" />
      <RouterView v-slot="{ Component }">
        <Transition
          :enter-active-class="transition?.enterActive"
          :leave-active-class="transition?.leaveActive"
          :enter-from-class="transition?.enterFrom"
          :leave-to-class="transition?.leaveTo"
        >
          <component :is="Component" />
        </Transition>
      </RouterView>
    </div>
  </LayoutContent>
</template>
