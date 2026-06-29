<script setup lang="ts">
import { blue } from '@ant-design/colors'
import { Card, Layout, LayoutContent } from 'ant-design-vue/es'
import gsap from 'gsap'
import { onMounted, useTemplateRef } from 'vue'
import { RouterView } from 'vue-router'

const contentRef = useTemplateRef('content')



onMounted(() => {
  if (!contentRef.value) return
  gsap.from(contentRef.value, {
    opacity: 0,
    y: 24,
    duration: 0.5,
    ease: 'power2.out',
  })
})
</script>

<template>
  <Layout>
    <LayoutContent class="flex items-center justify-center h-screen">
      <Card>
        <RouterView />
      </Card>
    </LayoutContent>
  </Layout>
</template>
