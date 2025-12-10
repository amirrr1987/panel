<template>
  <Menu
    v-model:selectedKeys="selectedKeys"
    :items="items"
    mode="inline"
    @select="handleSelect"
    :forceSubMenuRender="true"
  />
</template>
<script setup lang="ts">
import { Menu } from 'ant-design-vue/es'
import { getMenuItems } from '@/config/menu.config'
import { useRoute } from 'vue-router'
import { onMounted, ref, watch } from 'vue'
import router from '@/router'
import type { SelectInfo } from 'ant-design-vue/es/menu/src/interface'
const items = getMenuItems()
const route = useRoute()
const selectedKeys = ref<string[]>([route.name as string])
watch(
  () => route.name,
  (newName) => {
    selectedKeys.value = [newName as string]
  },
)
const handleSelect = (info: SelectInfo) => {
  router.push({ name: info.key as string })
}

onMounted(() => {
  router.push({ name: selectedKeys.value[0] })
})
</script>
