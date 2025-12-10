<template>
  <Card class="" title="payments">
    <template #extra>

      <Button type="primary" ghost @click="open = true" icon="plus">sdf</Button>
      <PaymentForm v-model:open="open" />
    </template>

  </Card>
</template>
<script setup lang="ts">
import { Card, Button } from 'ant-design-vue/es'
import { ref } from 'vue'
import PaymentForm from './Form.vue'
const open = ref(false)
</script>
