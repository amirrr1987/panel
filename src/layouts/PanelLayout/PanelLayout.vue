<script setup lang="ts">
import { Layout, Tour } from 'ant-design-vue/es'
import { ref } from 'vue'
import TheContent from './components/TheContent/TheContent.vue'
import TheHeader from './components/TheHeader/TheHeader.vue'
import TheSider from './components/TheSider/TheSider.vue'
import TheTabbar from './components/TheTabbar/TheTabbar.vue'
import { useTourStore } from '@/stores/tour.store'
import { getElement } from '@/utils'

const isFullContent = ref(false)
const tourStore = useTourStore()
const collapsed = ref(false)
</script>

<template>
  <Layout class="h-screen">
    <Tour
      v-model:current="tourStore.current"
      :open="tourStore.open"
      :steps="tourStore.steps"
      @close="tourStore.onFinish"

    />
    <TheHeader
      :class="['app-header', { collapsed: isFullContent }]"
      :ref="(el) => (tourStore.headerRef = getElement(el) || undefined)"
    />
    <Layout>
      <TheSider
        v-model:collapsed="collapsed"
        :class="['app-sider', { collapsed: isFullContent }]"
        :ref="(el) => (tourStore.siderRef = getElement(el) || undefined)"
      />
      <Layout>
        <TheTabbar
          v-model:isFullContent="isFullContent"
          :collapsed="collapsed"
          :ref="(el) => (tourStore.tabbarRef = getElement(el) || undefined)"
        />
        <TheContent
          v-model:isFullContent="isFullContent"
          :ref="(el) => (tourStore.contentRef = getElement(el) || undefined)"
        />
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
