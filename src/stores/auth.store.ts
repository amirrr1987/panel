import type { LoginRequestBody, LoginResponseBody } from '@/interfaces/auth.interface'
import type { User } from '@/interfaces/user.interface'
import router from '@/router'
import { useAuthService } from '@/services/auth.service'
import { useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const authService = useAuthService()

  const user = useStorage<User>('user', {} as User)
  const loginData = useStorage<LoginResponseBody>('loginData', {} as LoginResponseBody)

  const login = async (reqBody: LoginRequestBody) => {
    const { data, isSuccess } = await authService.login(reqBody)
    if (isSuccess) {
      loginData.value = data
    }
  }

  const register = async (reqBody: User) => {
    const { data, isSuccess } = await authService.register(reqBody)
    if (isSuccess) {
      user.value = data
    }
  }
  const logout = () => {
    user.value = {} as User
    loginData.value = {} as LoginResponseBody
    localStorage.removeItem('token')
    router.push('/login')
  }
  return { user, loginData, login, register, logout }
})
