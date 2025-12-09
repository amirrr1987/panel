<script setup lang="ts">
import TheButtonIcon from '@/components/TheButtonIcon.vue'
import { Tooltip, Divider, Tabs, TabPane } from 'ant-design-vue/es'
import { useTranslation } from 'i18next-vue'
import { useTabStore } from '@/stores/tab.store'
import { Icon } from '@iconify/vue'
import { useWindowSize } from '@vueuse/core'
const isFullContent = defineModel<boolean>('isFullContent', { required: true })
const tabStore = useTabStore()
const { t } = useTranslation()

const props = withDefaults(
  defineProps<{
    collapsed: boolean
  }>(),
  {
    collapsed: false,
  },
)
const { width } = useWindowSize()
</script>

<template>
  <section
    class="px-4 bg-gray-0 pt-2 flex items-center justify-between"
    :class="{ 'overflow-x-scroll': !props.collapsed && width < 768 }"
  >
    <Tabs
      type="editable-card"
      hide-add
      v-model:activeKey="tabStore.activeTab"
      @change="(key) => tabStore.setActiveTab(key as string)"
      @edit="(key) => tabStore.removeTab(key as string)"
      class="md:max-w-none md:flex-1"
      :class="{ 'max-w-50': props.collapsed && width > 768 }"
    >
      <TabPane
        v-for="tab in tabStore.computedTabs"
        :key="tab.key"
        :tab-key="tab.key"
        :closable="tab.closable"
      >
        <template #tab>
          <Tooltip :title="t(tab.label)">
            <div class="flex items-center justify-center gap-2">
              <Icon :icon="tab.icon" />
              <template v-if="width > 768 && !props.collapsed">{{ t(tab.label) }}</template>
            </div>
          </Tooltip>
        </template>
      </TabPane>
    </Tabs>
    <div class="min-w-fit">
      <Divider type="vertical" />
      <Tooltip :title="isFullContent ? t('fullContentExit') : t('fullContent')" placement="bottom">
        <TheButtonIcon
          :icon="{
            icon: isFullContent ? 'mdi:fullscreen-exit' : 'mdi:fullscreen',
            class: 'text-primary text-base',
          }"
          @click="isFullContent = !isFullContent"
        />
      </Tooltip>
    </div>
  </section>
</template>
<style lang="less">
.ant-tabs-dropdown-menu-title-content {
  justify-content: space-between;
  display: flex;
}
.ant-tabs-rtl.ant-tabs-card.ant-tabs-top >.ant-tabs-nav .ant-tabs-tab+.ant-tabs-tab {
  border-bottom-color: transparent !important;

}
.ant-tabs-card > .ant-tabs-nav .ant-tabs-tab-active {
  background: #f5f5f5;
  border-right-color: var(--color-gray-300) !important;
  border-top-color: var(--color-gray-300) !important;
  border-left-color: var(--color-gray-300) !important;
  border-bottom-color: transparent !important;
}
.ant-tabs-top >.ant-tabs-nav::before{
  border-bottom-color: transparent !important;

}
</style>
