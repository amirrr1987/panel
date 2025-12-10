<script setup lang="ts">
import TheButtonIcon from '@/components/TheButtonIcon.vue'
import { Tooltip, Divider, Tabs, TabPane } from 'ant-design-vue/es'
import { useTranslation } from 'i18next-vue'
import { useTabStore } from '@/stores/tab.store'
import { Icon } from '@iconify/vue'
import { useWindowSize } from '@vueuse/core'
import { useThemeStore } from '@/stores/theme.store'
import { computed } from 'vue'
import { theme as antTheme } from 'ant-design-vue/es'
const { token: antToken } = antTheme.useToken()
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


const backgroundColor = computed(() => {
  return antToken.value.colorBgLayout
})
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
      <template #rightExtra>
        <div class="min-w-fit">
          <Divider type="vertical" />
          <Tooltip
            :title="isFullContent ? t('fullContentExit') : t('fullContent')"
            placement="bottom"
          >
            <TheButtonIcon
              :icon="{
                icon: isFullContent ? 'mdi:fullscreen-exit' : 'mdi:fullscreen',
                class: 'text-primary text-base',
              }"
              @click="isFullContent = !isFullContent"
            />
          </Tooltip>
        </div>
      </template>
    </Tabs>
  </section>
</template>
<style lang="less">
.ant-tabs {
  .ant-tabs-nav {
    .ant-tabs-nav-wrap {
      .ant-tabs-nav-list {
        .ant-tabs-tab {
          color: #999999 !important;
          &.ant-tabs-tab-active {
            border-bottom-color: transparent !important;
            background: v-bind(backgroundColor) !important;
            border-bottom-color: v-bind(backgroundColor) !important;
          }
        }
      }
    }
  }
}
</style>
