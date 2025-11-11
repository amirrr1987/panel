<template>
  <Menu class="h-full" mode="inline" v-model:selectedKeys="selectedKeys">
    <MenuItem v-for="item in panelMenu" :key="item.name">
      <template #icon>
        <Icon :icon="item.icon" />
      </template>
      <RouterLink :to="item.to">{{ item.label }}</RouterLink>
    </MenuItem>
  </Menu>
</template>
<script setup lang="ts">
import { Menu, MenuItem } from 'ant-design-vue/es'
import { Icon } from '@iconify/vue'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { panelMenu } from '@/config/menu.config'
const selectedKeys = ref(['home'])
const route = useRoute()
onMounted(() => {
  selectedKeys.value = ['TheDashboard']
  const name = route.name
  if (name === 'TheDashboard') {
    selectedKeys.value = ['TheDashboard']
  } else if (name === 'ThePage') {
    selectedKeys.value = ['ThePage']
  }
})
</script>
