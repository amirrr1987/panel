<script setup lang="ts">
import TheButtonIcon from '@/components/TheButtonIcon.vue'
import { LayoutContent, Tooltip, Divider, Tabs, TabPane } from 'ant-design-vue/es'
import { RouterView } from 'vue-router'
import ThePreloader from '@/components/ThePreloader.vue'
import { useLoading } from '@/composable/useLoading'
import { useThemeStore } from '@/stores/theme.store'
import TheTabbar from './TheTabbar.vue'
import { useTabStore } from '@/stores/tab.store'
import { Icon } from '@iconify/vue'
const isFullContent = defineModel<boolean>('isFullContent', { required: true })
const themeStore = useThemeStore()
const tabStore = useTabStore()
const { isLoading } = useLoading()
</script>
<template>
  <LayoutContent>
    <TheTabbar>
      <Tabs
        type="editable-card"
        hide-add
        v-model:activeKey="tabStore.activeTab"
        @change="(key) => tabStore.setActiveTab(key as string)"
        @edit="(key) => tabStore.removeTab(key as string)"
        class="flex-1"
      >
        <TabPane
          v-for="tab in tabStore.computedTabs"
          :key="tab.key"
          :tab-key="tab.key"
          :closable="tab.closable"
        >
          <template #tab>
            <div class="flex items-center gap-2">
              <Icon :icon="tab.icon" />
              {{ tab.title }}
            </div>
          </template>
        </TabPane>
      </Tabs>
      <div>
        <Divider type="vertical" />
        <Tooltip :title="isFullContent ? $t('fullContentExit') : $t('fullContent')" placement="bottom">
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
