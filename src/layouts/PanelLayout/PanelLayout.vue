<script setup lang="ts">
import { Layout, Tour } from 'ant-design-vue/es'
import { ref } from 'vue'
import TheContent from './components/TheContent/TheContent.vue'
import TheFooter from './components/TheFooter/TheFooter.vue'
import TheHeader from './components/TheHeader/TheHeader.vue'
import TheSider from './components/TheSider/TheSider.vue'
import TheTabbar from './TheTabbar/TheTabbar.vue'
import { useTourStore } from '@/stores/tour.store'
import { useTranslation } from 'i18next-vue'
import { getElement } from '@/utils'
const isFullContent = ref(false)
const tourStore = useTourStore()
const { t } = useTranslation()
</script>

<template>
  <Layout class="h-screen">
    <Tour
      v-model:current="tourStore.current"
      :open="tourStore.open"
      :steps="tourStore.steps"
      @close="tourStore.onFinish"
      :mask="true"
    />
    <TheHeader
      :class="['app-header', { collapsed: isFullContent }]"
      :ref="(el) => (tourStore.headerRef = getElement(el) || undefined)"
    />
    <Layout>
      <TheSider
        :class="['app-sider', { collapsed: isFullContent }]"
        :ref="(el) => (tourStore.siderRef = getElement(el) || undefined)"
      />
      <Layout>
        <TheTabbar v-model:isFullContent="isFullContent" />
        <TheContent
          v-model:isFullContent="isFullContent"
          :ref="(el) => (tourStore.contentRef = getElement(el) || undefined)"
        />
        <TheFooter :ref="(el) => (tourStore.footerRef = getElement(el) || undefined)" />
      </Layout>
    </Layout>
  </Layout>
</template>

<style scoped>
.app-header {
  min-height: 64px;
  max-height: 64px;
  height: 64px;
  transition:
    min-height 400ms cubic-bezier(0.2, 0.8, 0.2, 1),
    max-height 400ms cubic-bezier(0.2, 0.8, 0.2, 1),
    height 400ms cubic-bezier(0.2, 0.8, 0.2, 1),
    opacity 400ms ease-in-out;
  will-change: min-height, max-height, height, opacity;
}
.app-header.collapsed {
  min-height: 0 !important;
  max-height: 0 !important;
  height: 0 !important;
  opacity: 0;
}

.app-sider {
  min-width: 200px;
  max-width: 200px;
  width: 200px;
  transition:
    min-width 400ms cubic-bezier(0.2, 0.8, 0.2, 1),
    max-width 400ms cubic-bezier(0.2, 0.8, 0.2, 1),
    width 400ms cubic-bezier(0.2, 0.8, 0.2, 1),
    opacity 400ms ease-in-out;
  will-change: min-width, max-width, width, opacity;
}
.app-sider.collapsed {
  min-width: 0 !important;
  max-width: 0 !important;
  width: 0 !important;
  opacity: 0;
}
</style>
