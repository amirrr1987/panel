<script setup lang="ts">
import { ConfigProvider } from 'ant-design-vue/es'
import { useSettingStore } from './stores/setting.store';

const setting = useSettingStore()
</script>

<template>
  <ConfigProvider
    :theme="setting.theme"
    :direction="setting.direction"
    :locale="setting.locale"
    :componentSize="setting.componentSize"
  >
    <RouterView />
  </ConfigProvider>
</template>
