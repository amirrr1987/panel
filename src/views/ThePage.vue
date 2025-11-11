<template>
  <div>
    <h1>{{ t('page') }}</h1>
    <DatePicker />
  </div>
</template>
<script setup lang="ts">
import { DatePicker } from 'ant-design-vue/es'
import { useTranslation } from 'i18next-vue'
const { t } = useTranslation()
</script> 
