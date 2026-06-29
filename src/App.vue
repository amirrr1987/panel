<script setup lang="ts">
import { ConfigProvider } from 'ant-design-vue/es'
import { useAppSettingStore } from './stores/app-setting.store';

const appSetting = useAppSettingStore()
</script>

<template>
  <ConfigProvider
    :theme="appSetting.theme"
    :direction="appSetting.direction"
    :locale="appSetting.locale"
    :componentSize="appSetting.componentSize"
  >
    <RouterView />
  </ConfigProvider>
</template>
