<template>
  <Card>
    <Table :columns="columns" :dataSource="users" :loading="isLoading">
      <template #bodyCell="{ column, record }">
        <template v-if="column.dataIndex === 'roles' && record.roles?.length > 0">
          <Tag v-for="role in record.roles" :key="role">{{ role }}</Tag>
        </template>
        <template v-if="column.dataIndex === 'claims'">
          <Tag v-for="claim in record.claims" :key="claim.type" :color="claim.color">{{
            claim.type
          }}</Tag>
        </template>
      </template>
    </Table>
  </Card>
</template>
<script setup lang="ts">
import { Card, Table, Tag } from 'ant-design-vue/es'
import { useUsersService } from '@/services/users.service'
import { onMounted, ref } from 'vue'
import type { UserDto } from '@/interfaces/users.interface'
import type { ColumnType } from 'ant-design-vue/es/table'
import { useTranslation } from 'i18next-vue'
const { getUsers } = useUsersService()
const users = ref<UserDto[]>([])
const isLoading = ref(false)
const error = ref<string | null>(null)
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
  const { data, isSuccess, message } = await getUsers()
  if (isSuccess) {
    users.value = data ?? ([] as UserDto[])
    console.log('🚀 ~ users.value:', users.value)
  } else {
    error.value = message
  }
  isLoading.value = false
})
</script>
