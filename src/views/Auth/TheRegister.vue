<template>
  <Card>
    <Form layout="vertical" :model="registerData" @submit="onRegister">
      <FormItem
        :label="$t('username')"
        name="name"
        :rules="[
          { required: true, message: 'Please input your email' },
          { type: 'string', message: 'Please input a valid email' },
        ]"
      >
        <Input v-model:value="registerData.name" placeholder="Name" />
      </FormItem>
      <FormItem
        :label="$t('password')"
        name="email"
        :rules="[{ required: true, message: 'Please input your password' }]"
      >
        <Input v-model:value="registerData.password" placeholder="Password" />
      </FormItem>
      <FormItem>
        <Button type="primary" html-type="submit" :loading="loading">{{ $t('register') }}</Button>
      </FormItem>
    </Form>
  </Card>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Form, FormItem, Input, Button, Card } from 'ant-design-vue/es'
import { useAuthStore } from '@/stores/auth.store'
import type { User } from '@/interfaces/user.interface'
const authStore = useAuthStore()

const loading = ref(false)
const registerData = ref<User>({
  id: '',
  name: '',
  email: '',
  password: '',
  createdAt: new Date(),
  updatedAt: new Date(),
})
const onRegister = async () => {
  try {
    loading.value = true
    await authStore.register(registerData.value)
    console.log(authStore.user)
    loading.value = false
  } catch (error) {
    loading.value = false
    console.error(error)
  }
}
</script>
<style lang="less"></style>
