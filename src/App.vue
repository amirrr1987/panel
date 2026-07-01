<script setup lang="ts">
import { ConfigProvider, Steps } from 'ant-design-vue/es'
import { useThemeStore } from '@/core/stores/theme.store';
import { ref } from 'vue';
import Card from 'ant-design-vue/es/card'
import TheBg from '@core/components/TheBg.vue'
const theme = useThemeStore()
const current = ref(0)
</script>

<template>
  <ConfigProvider
    :theme="theme.theme"
    :direction="theme.direction"
    :locale="theme.locale"
    :componentSize="theme.componentSize"
  >
    <RouterView />
    <TheBg />
  </ConfigProvider>
</template>
