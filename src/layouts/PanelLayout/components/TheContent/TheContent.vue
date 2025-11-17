<script setup lang="ts">
import { LayoutContent } from 'ant-design-vue/es'
import { RouterView } from 'vue-router'
import ThePreloader from '@/components/ThePreloader.vue'
import { useLoading } from '@/composable/useLoading'
import { useThemeStore } from '@/stores/theme.store'

const themeStore = useThemeStore()
const { isLoading } = useLoading()
</script>
<template>
  <LayoutContent>
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
