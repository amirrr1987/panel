<script setup lang="ts">
import Layout, { LayoutContent } from 'ant-design-vue/es/layout'
import Card from 'ant-design-vue/es/card'
import { RouterView, } from 'vue-router'
import { TypographyTitle } from 'ant-design-vue';
import TheLogo from '@core/components/TheLogo.vue';

</script>
<template>
  <Layout class="auth-layout">
    <LayoutContent class="flex items-center justify-center h-screen">
      <Card class="w-full max-w-md">
        <template #title>
          <TheLogo class="mx-auto fill-primary w-60 h-60 object-contain p-4" />
          <TypographyTitle class="text-center" :level="5" content="سامانه نظارت بر طرح های بانک کشاورزی" />
        </template>
        <RouterView />
      </Card>
    </LayoutContent>
  </Layout>
</template>
<style>
.auth-layout {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1422 800'%3E%3Cdefs%3E%3ClinearGradient id='oooscillate-grad' x1='50%25' y1='0%25' x2='50%25' y2='100%25'%3E%3Cstop stop-color='hsl(206, 75%25, 49%25)' stop-opacity='1' offset='0%25'/%3E%3Cstop stop-color='hsl(331, 90%25, 56%25)' stop-opacity='1' offset='100%25'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg stroke-width='2' stroke='url(%23oooscillate-grad)' fill='none' stroke-linecap='round'%3E%3Cpath d='M 0 572 Q 355.5 -100 711 400 Q 1066.5 900 1422 572' opacity='0.18'/%3E%3Cpath d='M 0 550 Q 355.5 -100 711 400 Q 1066.5 900 1422 550' opacity='0.80'/%3E%3Cpath d='M 0 528 Q 355.5 -100 711 400 Q 1066.5 900 1422 528' opacity='0.27'/%3E%3Cpath d='M 0 506 Q 355.5 -100 711 400 Q 1066.5 900 1422 506' opacity='0.92'/%3E%3Cpath d='M 0 484 Q 355.5 -100 711 400 Q 1066.5 900 1422 484' opacity='0.13'/%3E%3Cpath d='M 0 462 Q 355.5 -100 711 400 Q 1066.5 900 1422 462' opacity='0.89'/%3E%3Cpath d='M 0 440 Q 355.5 -100 711 400 Q 1066.5 900 1422 440' opacity='0.32'/%3E%3Cpath d='M 0 418 Q 355.5 -100 711 400 Q 1066.5 900 1422 418' opacity='0.16'/%3E%3Cpath d='M 0 396 Q 355.5 -100 711 400 Q 1066.5 900 1422 396' opacity='0.25'/%3E%3Cpath d='M 0 374 Q 355.5 -100 711 400 Q 1066.5 900 1422 374' opacity='0.72'/%3E%3Cpath d='M 0 352 Q 355.5 -100 711 400 Q 1066.5 900 1422 352' opacity='0.89'/%3E%3Cpath d='M 0 330 Q 355.5 -100 711 400 Q 1066.5 900 1422 330' opacity='0.14'/%3E%3Cpath d='M 0 308 Q 355.5 -100 711 400 Q 1066.5 900 1422 308' opacity='0.77'/%3E%3Cpath d='M 0 286 Q 355.5 -100 711 400 Q 1066.5 900 1422 286' opacity='0.84'/%3E%3Cpath d='M 0 264 Q 355.5 -100 711 400 Q 1066.5 900 1422 264' opacity='0.43'/%3E%3Cpath d='M 0 242 Q 355.5 -100 711 400 Q 1066.5 900 1422 242' opacity='0.61'/%3E%3Cpath d='M 0 220 Q 355.5 -100 711 400 Q 1066.5 900 1422 220' opacity='0.75'/%3E%3Cpath d='M 0 198 Q 355.5 -100 711 400 Q 1066.5 900 1422 198' opacity='0.81'/%3E%3Cpath d='M 0 176 Q 355.5 -100 711 400 Q 1066.5 900 1422 176' opacity='0.54'/%3E%3Cpath d='M 0 154 Q 355.5 -100 711 400 Q 1066.5 900 1422 154' opacity='0.37'/%3E%3Cpath d='M 0 132 Q 355.5 -100 711 400 Q 1066.5 900 1422 132' opacity='0.29'/%3E%3Cpath d='M 0 110 Q 355.5 -100 711 400 Q 1066.5 900 1422 110' opacity='0.42'/%3E%3Cpath d='M 0 88 Q 355.5 -100 711 400 Q 1066.5 900 1422 88' opacity='0.96'/%3E%3Cpath d='M 0 66 Q 355.5 -100 711 400 Q 1066.5 900 1422 66' opacity='0.21'/%3E%3Cpath d='M 0 44 Q 355.5 -100 711 400 Q 1066.5 900 1422 44' opacity='0.36'/%3E%3C/g%3E%3C/svg%3E");
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
}
</style>