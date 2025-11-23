<template>
  <LayoutSider v-model:collapsed="collapsed" collapsible>
    <TheMenu />
  </LayoutSider>
</template>
<script setup lang="ts">
import { LayoutSider } from 'ant-design-vue/es'
import { ref, computed, watch, onMounted } from 'vue'
import { useThemeStore } from '@/stores/theme.store'
import TheMenu from './components/TheMenu.vue'
import { useWindowSize } from '@vueuse/core'
const collapsed = ref(false)
const themeStore = useThemeStore()
const transform = computed(() => {
  if (themeStore.direction === 'rtl') {
    return 'rotate(180deg)'
  } else {
    return 'rotate(0deg)'
  }
})
const collapsedHandler = (newWidth: number) => {
  if (newWidth < 768) {
    collapsed.value = true
  } else {
    collapsed.value = false
  }
}
const { width } = useWindowSize()
watch(
  () => width.value,
  (newWidth) => collapsedHandler(newWidth),
)
onMounted(() => {
  collapsedHandler(width.value)
})
</script>
<style>
.ant-layout .ant-layout-sider-trigger span svg {
  transform: v-bind(transform);
}
</style>
