<template>
  <LayoutSider v-model:collapsed="collapsed" collapsible>
    <TheMenu />
  </LayoutSider>
</template>
<script setup lang="ts">
import { LayoutSider } from 'ant-design-vue/es'
import { ref, computed } from 'vue'
import { useThemeStore } from '@/stores/theme.store'
import TheMenu from './components/TheMenu.vue'
const collapsed = ref(false)
const themeStore = useThemeStore()
const transform = computed(() => {
  if (themeStore.direction === 'rtl') {
    return 'rotate(180deg)'
  } else {
    return 'rotate(0deg)'
  }
})
</script>
<style>
.ant-layout .ant-layout-sider-trigger span svg {
  transform: v-bind(transform);
}
</style>
