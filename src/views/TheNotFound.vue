<template>
  <div
    class="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
  >
    <div class="text-center px-4 py-8">
      <Result
        status="404"
        :title="t('notFound.title') || '404'"
        :sub-title="t('notFound.description') || 'Sorry, the page you visited does not exist.'"
      >
        <template #icon>
          <div class="relative">
            <div
              class="text-[200px] font-bold text-gray-200 dark:text-gray-700 select-none leading-none"
            >
              404
            </div>
            <div class="absolute inset-0 flex items-center justify-center">
              <FrownOutlined class="text-6xl text-gray-400 dark:text-gray-600" />
            </div>
          </div>
        </template>
        <template #extra>
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button type="primary" size="large" @click="goHome" class="flex! items-center">
              <template #icon>
                <HomeOutlined />
              </template>
              <span class="ml-2">{{ t('notFound.goHome') || 'Go Home' }}</span>
            </Button>
            <Button size="large" @click="goBack" class="flex! items-center">
              <template #icon>
                <ArrowLeftOutlined />
              </template>
              <span class="ml-2">{{ t('notFound.goBack') || 'Go Back' }}</span>
            </Button>
          </div>
        </template>
      </Result>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Result, Button } from 'ant-design-vue/es'
import { HomeOutlined, ArrowLeftOutlined, FrownOutlined } from '@ant-design/icons-vue'
import { useTranslation } from 'i18next-vue'
import { useRouter } from 'vue-router'

const { t } = useTranslation()
const router = useRouter()

const goHome = () => {
  router.push({ name: 'TheDashboard' })
}

const goBack = () => {
  router.go(-1)
}
</script>
