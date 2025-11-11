<template>
  <ConfigProvider
    :theme="theme"
    :component-size="themeStore.componentSize"
    :direction="themeStore.direction"
    :locale="locale"
  >
    <AppAnt class="overflow-hidden">
      <RouterView />
    </AppAnt>
  </ConfigProvider>
</template>

<script setup lang="ts">
import { ConfigProvider, App as AppAnt } from 'ant-design-vue/es'
import { RouterView } from 'vue-router'
import { useThemeStore } from './stores/theme.store'
import IR from 'ant-design-vue/es/locale/fa_IR'
import EN from 'ant-design-vue/es/locale/en_US'
import { computed, onMounted } from 'vue'
import type { ThemeConfig } from 'ant-design-vue/es/config-provider/context'

const themeStore = useThemeStore()
const locale = computed(() => {
  return themeStore.language === 'fa' ? IR : EN
})

const theme = computed<ThemeConfig>(() => ({
  token: themeStore.token,
  components: themeStore.components,
  algorithm: themeStore.algorithm,
  hashed: themeStore.hashed,
  inherit: themeStore.inherit,
}))

const updateTheme = () => {
  document.documentElement.style.setProperty(
    '--color-primary',
    themeStore.token.colorPrimary || '#1890ff',
  )
}

onMounted(() => {
  updateTheme()
})
</script>
