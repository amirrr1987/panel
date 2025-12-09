<template>
  <Menu class="h-full" mode="inline" v-model:selectedKeys="menuNames">
    <MenuItem v-for="item in panelMenu" :key="item.name">
      <template #icon>
        <Icon :icon="item.icon" />
      </template>
      <RouterLink :to="item.to">{{ t(item.label) }}</RouterLink>
    </MenuItem>
  </Menu>
</template>
<script setup lang="ts">
import { Menu, MenuItem } from 'ant-design-vue/es'
import { Icon } from '@iconify/vue'
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { panelMenu } from '@/config/menu.config'
import { useTranslation } from 'i18next-vue'
const { t } = useTranslation()
const menuNames = ref(['TheDashboard'])
const route = useRoute()

const findMenuName = (name: string) => {
  return panelMenu.find((item) => item.name === name)
}
const setMenuKeys = (name: string) => {
  if (!name) {
    menuNames.value = []
  } else {
    menuNames.value = [name]
  }
}
onMounted(() => {
  const menuName = findMenuName(route.name as string)?.name || ''
  setMenuKeys(menuName)
})
watch(
  () => route.name,
  (newName) => setMenuKeys(newName as string),
)
</script>
