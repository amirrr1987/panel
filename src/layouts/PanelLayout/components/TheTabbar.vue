<script setup lang="ts">
import type { CSSProperties } from 'vue'

import { computed } from 'vue'

interface Props {
  /**
   * 高度
   */
  height: number
}

const props = withDefaults(defineProps<Props>(), {})

const style = computed((): CSSProperties => {
  const { height } = props
  return {
    height: `${height}px`,
  }
})
</script>

<template>
  <section :style="style" class="border-gray-200 bg-white flex w-full border-b border-t border-t-gray-200 transition-all">
    <slot></slot>
  </section>
</template>
