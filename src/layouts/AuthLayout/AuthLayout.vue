<template>
  <Layout class="overflow-hidden h-screen">
    <LayoutContent class="flex items-center justify-center">
      <RouterView />
    </LayoutContent>
  </Layout>
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router'
import { Layout, LayoutContent } from 'ant-design-vue/es'
</script>
<style lang="less"></style>
