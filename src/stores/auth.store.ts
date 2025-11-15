import type { ILoginRequest, ILoginResponse } from '@/interfaces/auth.interface'
import type { ICreateUserActiveDirectoryRequest, ICreateUserActiveDirectoryResponse } from '@/interfaces/users.interface'
import router from '@/router'
import { useAuthService } from '@/services/auth.service'
import { useStorage } from '@vueuse/core'
import { jwtDecode } from 'jwt-decode'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const authService = useAuthService()

  const user = useStorage<ICreateUserActiveDirectoryResponse>('user', {} as ICreateUserActiveDirectoryResponse)
  const loginData = useStorage<ILoginResponse>('loginData', {} as ILoginResponse)

  const login = async (reqBody: ILoginRequest) => {
    const { data, isSuccess } = await authService.login(reqBody)
    if (isSuccess) {
      loginData.value = data
    }
  }

  const register = async (reqBody: ICreateUserActiveDirectoryRequest) => {
    const { data } = await authService.register(reqBody)
    return data
  }
  const logout = () => {
    user.value = {} as ICreateUserActiveDirectoryResponse
    loginData.value = {} as ILoginResponse
    localStorage.removeItem('token')
    router.push({ name: 'TheLogin' })
  }

  const isExpired = () => {
    if (loginData.value.access_token) {
      const decodedToken = jwtDecode(loginData.value.access_token)
      if (decodedToken.exp && typeof decodedToken.exp === 'number' && decodedToken.exp < Date.now() / 1000) {
        return true
      }
    }
    return false
  }
  return { user, loginData, login, register, logout, isExpired }
})
