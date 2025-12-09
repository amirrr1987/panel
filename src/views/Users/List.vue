<template>
  <Card title="Users List">
    <template #extra>
      <Button type="primary" ghost @click="open = true" icon="plus">sdf</Button>
      <UserForm v-model:open="open" />
      <!-- <TheButtonIcon icon="mdi:plus" @click="router.push({ name: 'UsersForm' })" /> -->
    </template>
    <Table :columns="columns" :dataSource="userStore.users" :loading="isLoading">
      <template #bodyCell="{ column, record }">
        <template v-if="column.dataIndex === 'roles' && record.roles?.length > 0">
          <Tag v-for="role in record.roles" :key="role">{{ role }}</Tag>
        </template>
        <template v-if="column.dataIndex === 'claims'">
          <Tag v-for="claim in record.claims" :key="claim.type" :color="claim.color">
            {{ claim.type }}
          </Tag>
        </template>
      </template>
    </Table>
  </Card>
</template>
<script setup lang="ts">
import { Card, Table, Tag, Button } from 'ant-design-vue/es'
import { onMounted, ref } from 'vue'
import type { ColumnType } from 'ant-design-vue/es/table'
import { useTranslation } from 'i18next-vue'
import { useUserStore } from '@/stores/user.store'
import UserForm from './Form.vue'
const userStore = useUserStore()
const isLoading = ref(false)
const open = ref(false)

const { t } = useTranslation()
const columns = ref<ColumnType[]>([
  {
    title: t('id'),
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: t('username'),
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: t('roles'),
    dataIndex: 'roles',
    key: 'roles',
  },
  {
    title: t('claims'),
    dataIndex: 'claims',
    key: 'claims',
  },
])

onMounted(async () => {
  isLoading.value = true
  await userStore.getUsers()
  isLoading.value = false
})
</script>
