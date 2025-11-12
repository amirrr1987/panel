<template>
  <Card class="w-full max-w-md">
    <Form layout="vertical" :model="loginData" @submit="onLogin">
      <FormItem
        :label="$t('username')"
        name="username"
        :rules="[
          { required: true, message: 'Please input your email' },
          { type: 'string', message: 'Please input a valid email' },
        ]"
      >
        <Input v-model:value="loginData.username" placeholder="Username">
          <template #prefix>
            <UserOutlined />
          </template>
        </Input>
      </FormItem>
      <FormItem
        :label="$t('password')"
        name="password"
        :rules="[{ required: true, message: 'Please input your password' }]"
      >
        <Input
          :type="showPassword ? 'text' : 'password'"
          v-model:value="loginData.password"
          placeholder="Password"
        >
          <template #prefix>
            <LockOutlined />
          </template>
          <template #suffix>
            <EyeInvisibleOutlined v-if="showPassword" @click="showPassword = !showPassword" />
            <EyeOutlined v-else @click="showPassword = !showPassword" />
          </template>
        </Input>
      </FormItem>
      <FormItem> </FormItem>
      <FormItem>
        <Button type="primary" html-type="submit" :loading="loading" block>
          {{ $t('login') }}
        </Button>
      </FormItem>
    </Form>
    <Divider />

    <Button type="link" block @click="router.push({ name: 'TheRegister' })">
      {{ $t('register') }}
    </Button>
  </Card>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Form, FormItem, Input, Button, Card, Divider } from 'ant-design-vue/es'
import { useAuthStore } from '@/stores/auth.store'
import type { ILoginRequest } from '@/interfaces/auth.interface'
import { useRouter } from 'vue-router'
import {
  UserOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
} from '@ant-design/icons-vue'
const router = useRouter()
const authStore = useAuthStore()
const loading = ref(false)
const showPassword = ref(false)
const loginData = ref<ILoginRequest>({
  username: 'fw.super.admin1404@gmail.com',
  password: '@FremeWork#1404',
})
const onLogin = async () => {
  try {
    loading.value = true
    await authStore.login(loginData.value)
    console.log(authStore.loginData)
    router.push({ name: 'TheDashboard' })
    loading.value = false
  } catch (error) {
    loading.value = false
    console.error(error)
  }
}
</script>
<style lang="less"></style>
