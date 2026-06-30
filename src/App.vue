<script setup lang="ts">
import { ConfigProvider, Steps } from 'ant-design-vue/es'
import { useThemeStore } from '@/core/stores/theme.store';
import { ref } from 'vue';
import Card from 'ant-design-vue/es/card'
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
    <!-- <RouterView /> -->
    <div class="p-12">
      <Steps
        v-model:current="current"
        :items="[
          {
            title: 'اطلاعات طرح',
          },
          {
            title: 'اطلاعات مالی',
          },
          {
            title: 'تایید و انتشار',
          },
        ]"
      >

      </Steps>
      <template v-if="current === 0">
        <Card title="اطلاعات طرح">
          <h1>اطلاعات طرح</h1>
        </Card>
      </template>
      <template v-if="current === 1">
        <Card title="اطلاعات مالی">
          <h1>اطلاعات مالی</h1>
        </Card>
      </template>
      <template v-if="current === 2">
        <Card title="تایید و انتشار">
          <h1>تایید و انتشار</h1>
        </Card>
      </template>
    </div>
  </ConfigProvider>
</template>
