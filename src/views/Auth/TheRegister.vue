<template>
  <Card class="w-full max-w-md">
    <Form layout="vertical" :model="registerData" @submit="onRegister">
      <FormItem
        :label="$t('username')"
        name="username"
        :rules="[
          { required: true, message: 'Please input your email' },
          { type: 'string', message: 'Please input a valid email' },
        ]"
      >
        <Input v-model:value="registerData.username" placeholder="Username">
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
          v-model:value="registerData.password"
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
      <FormItem>
        <Checkbox
          :checked="registerData.loginProvider === LoginProviderConstant.ACTIVE_DIRECTORY"
          @change="onLoginProviderChange"
        >
          {{ $t('activeDirectory') }}
        </Checkbox>
      </FormItem>
      <FormItem>
        <Button type="primary" html-type="submit" :loading="loading" block>
          {{ $t('register') }}
        </Button>
      </FormItem>
    </Form>
    <Divider />
    <Button type="link" block @click="router.push({ name: 'TheLogin' })">
      {{ $t('login') }}
    </Button>
  </Card>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Form, FormItem, Input, Button, Card, Divider, Checkbox } from 'ant-design-vue/es'
import { useAuthStore } from '@/stores/auth.store'
import type { ICreateUserActiveDirectoryRequest } from '@/interfaces/users.interface'
import { useRouter } from 'vue-router'
import {
  UserOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
} from '@ant-design/icons-vue'
import { LoginProviderConstant } from '@/constants'
import type { CheckboxChangeEvent } from 'ant-design-vue/es/checkbox/interface'
import { omit } from 'lodash-es'
const router = useRouter()
const authStore = useAuthStore()
const loading = ref(false)
const showPassword = ref(false)
const registerData = ref<ICreateUserActiveDirectoryRequest>({
  username: 'fw.super.admin1404@gmail.com',
  password: '@FremeWork#1404',
  confirmPassword: '@FremeWork#1404',
  loginProvider: LoginProviderConstant.ACTIVE_DIRECTORY,
})
const onLoginProviderChange = (event: CheckboxChangeEvent) => {
  console.log('🚀 ~ onLoginProviderChange ~ checked:', event.target.checked)
  if (event.target.checked) {
    registerData.value.loginProvider = LoginProviderConstant.ACTIVE_DIRECTORY
  } else {
    registerData.value.loginProvider = LoginProviderConstant.LOCAL
  }
}
const onRegister = async () => {
  try {
    loading.value = true
    await authStore.register(omit(registerData.value, 'confirmPassword'))
    authStore.logout()
    loading.value = false
  } catch (error) {
    loading.value = false
    console.error(error)
  }
}
</script>
<style lang="less"></style>
