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
            <Icon
              icon="mdi:account"
              :style="{ fontSize: themeStore.token?.fontSize ?? 14 + 'px' }"
            />
          </template>
        </Input>
      </FormItem>
      <FormItem
        :label="$t('password')"
        name="password"
        :rules="[{ required: true, message: 'Please input your password' }]"
      >
        <Input v-model:value="loginData.password" placeholder="Password" />
      </FormItem>
      <FormItem>
        <Button type="primary" html-type="submit" :loading="loading" block>{{
          $t('login')
        }}</Button>
      </FormItem>
    </Form>
  </Card>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Form, FormItem, Input, Button, Card } from 'ant-design-vue/es'
import { useAuthStore } from '@/stores/auth.store'
import type { LoginRequestBody } from '@/interfaces/auth.interface'
import { Icon } from '@iconify/vue'
import { useThemeStore } from '@/stores/theme.store'
import { useRouter } from 'vue-router'
const router = useRouter()
const authStore = useAuthStore()
const themeStore = useThemeStore()
const loading = ref(false)
const loginData = ref<LoginRequestBody>({
  username: 'fw.super.admin1404@gmail.com',
  password: '@FremeWork#1404',
  grant_type: '',
  client_id: '',
  client_secret: '',
})
const onLogin = async () => {
  try {
    loading.value = true
    await authStore.login(loginData.value)
    console.log(authStore.loginData)
    router.push('/')
    loading.value = false
  } catch (error) {
    loading.value = false
    console.error(error)
  }
}
</script>
<style lang="less"></style>
