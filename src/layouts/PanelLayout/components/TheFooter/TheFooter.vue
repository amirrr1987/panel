<script setup lang="ts">
import { LayoutFooter } from 'ant-design-vue/es'
import { version } from '#/package.json'
</script>

<template>
  <LayoutFooter>
    <div class="text-gray-500 flex items-center justify-start text-xs">
      <span>{{ $t('version') }} {{ version }}</span>
    </div>
  </LayoutFooter>
</template>
