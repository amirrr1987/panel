<script setup lang="ts">
import TheButtonIcon from '@/components/TheButtonIcon.vue'
import { Tooltip, Divider, Tabs, TabPane } from 'ant-design-vue/es'
import { useTranslation } from 'i18next-vue'
import { useTabStore } from '@/stores/tab.store'
import { Icon } from '@iconify/vue'
const isFullContent = defineModel<boolean>('isFullContent', { required: true })
const tabStore = useTabStore()
const { t } = useTranslation()
</script>

<template>
  <section class="flex items-center px-4 bg-gray-0 pt-2">
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
<style lang="less"></style>
