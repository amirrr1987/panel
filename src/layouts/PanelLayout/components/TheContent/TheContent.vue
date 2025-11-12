<script setup lang="ts">
import TheButtonIcon from '@/components/TheButtonIcon.vue'
import { LayoutContent, Tooltip, Divider, Tabs, TabPane } from 'ant-design-vue/es'
import { RouterView } from 'vue-router'
import ThePreloader from '@/components/ThePreloader.vue'
import { useLoading } from '@/composable/useLoading'
import { useThemeStore } from '@/stores/theme.store'
import TheTabbar from '../TheTabbar.vue'
import { useTabStore } from '@/stores/tab.store'
const isFullContent = defineModel<boolean>('isFullContent', { required: true })
const themeStore = useThemeStore()
const tabStore = useTabStore()
const { isLoading } = useLoading()
</script>
<template>
  <LayoutContent>
    <TheTabbar>
      <div>
        <Tabs type="editable-card" hide-add>
          <TabPane
            v-for="tab in tabStore.tabs"
            :key="tab.key"
            :tab-key="tab.key"
            :tab="tab.title"
          />
        </Tabs>
      </div>
      <div>
        <Divider type="vertical" />
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
    </TheTabbar>

    <div class="relative grid h-full overflow-x-hidden overflow-y-auto">
      <div class="p-4">
        <ThePreloader v-if="isLoading" />
        <Transition :name="themeStore.transition">
          <RouterView v-slot="{ Component }">
            <component :is="Component" />
          </RouterView>
        </Transition>
      </div>
    </div>
  </LayoutContent>
</template>

<style lang="less">
[v-cloak] {
  display: none;
}
.ant-tabs .ant-tabs-tab {
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 12px 0;
  font-size: 14px;
  background: transparent;
  border: 0;
  outline: none;
  cursor: pointer;
}
.ant-tabs-top > .ant-tabs-nav {
  margin: 0 !important;
}
</style>
