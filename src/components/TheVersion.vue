<template>
    <Tag class="text-primary! border-primary/40! bg-primary/5! select-none">
        {{ t('version') }} {{ version }}
    </Tag>
</template>
<script setup lang="ts">
import { Tag } from 'ant-design-vue/es'
import { version } from '#/package.json'
import { useTranslation } from 'i18next-vue'
const { t } = useTranslation()
</script>