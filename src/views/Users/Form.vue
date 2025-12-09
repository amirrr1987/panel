<template>
  <Modal :open="open" @cancel="cancel" @ok="ok" title="Create User">
    <Form :model="user" @on-finish="onSubmit" layout="vertical">
      <FormItem
        :label="t('username')"
        name="username"
        :rules="[{ required: true, message: 'Please input your username' }]"
      >
        <Input v-model:value="user.username" placeholder="Username" />
      </FormItem>
      <FormItem
        :label="t('password')"
        name="password"
        :rules="[{ required: true, message: 'Please input your password' }]"
      >
        <Input v-model:value="user.password" placeholder="Password" />
      </FormItem>
    </Form>
  </Modal>
</template>
<script setup lang="ts">
import { Modal, Form, FormItem, Input } from 'ant-design-vue/es'
import { ref } from 'vue'
import { useTranslation } from 'i18next-vue'
import { useUserStore } from '@/stores/user.store'
import type { ICreateUserReqBody } from '@/interfaces/users.interface'
const userStore = useUserStore()
const isLoading = ref(false)
const { t } = useTranslation()

const open = defineModel<boolean>('open', { required: true })

const cancel = () => {
  open.value = false
}
const ok = () => {
  onSubmit()
}

const user = ref<ICreateUserReqBody>({
  username: '',
  password: '',
})
const onSubmit = async () => {
  try {
    isLoading.value = true
    await userStore.createUser(user.value)
    isLoading.value = false
  } catch (error) {
    console.error(error)
  } finally {
    open.value = false
  }
}
</script>
