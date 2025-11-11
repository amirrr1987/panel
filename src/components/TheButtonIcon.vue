<template>
  <Button type="text" class="inline-flex! items-center justify-center" :class="props.class">
    <template #icon v-if="props.icon">
      <Icon :icon="props.icon.icon" :class="props.icon.class" />
    </template>
  </Button>
</template>
<script setup lang="ts">
import { Button } from 'ant-design-vue/es'
import { Icon, type IconProps } from '@iconify/vue'
interface Icon extends IconProps {
  class?: string
}
interface Props {
  icon?: Icon
  class?: string
}
const props = withDefaults(defineProps<Props>(), {})
</script>
