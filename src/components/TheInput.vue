<template>
  <div class="flex gap-2 p-12">
    <Input v-model:value="myValue" />
    <Input v-model:value="myValue2" />
  </div>
</template>
<script setup lang="ts">
import { Input } from 'ant-design-vue/es'

const myValue = defineModel<string>('amir-input', { required: true })
const myValue2 = defineModel<string>('amir-input2', { default: '' })
</script>
