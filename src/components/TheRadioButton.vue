<template>
  <RadioButton
    v-model:value="value"
    :style="{
      borderRadius: themeStore.token.borderRadius + 'px',
    }"
    class="aspect-square w-fit! h-fit! flex! justify-center items-center border-none!"
  >
    <slot />
  </RadioButton>
</template>
<script setup lang="ts">
import { RadioButton } from 'ant-design-vue/es'
import { useThemeStore } from '@/stores/theme.store'

const themeStore = useThemeStore()

const value = defineModel<string | number | boolean>('value', { required: true })
</script>
