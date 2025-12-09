import type { ILoginReqBody, ILoginResBody } from '@/interfaces/auth.interface'
import type {
  ICreateUserActiveDirectoryRequest,
  ICreateUserActiveDirectoryResponse,
} from '@/interfaces/users.interface'
import router from '@/router'
import { useAuthService } from '@/services/auth.service'
import { useStorage } from '@vueuse/core'
import { jwtDecode } from 'jwt-decode'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const authService = useAuthService()

  const authData = useStorage<ILoginResBody>('auth', {} as ILoginResBody)

  const login = async (reqBody: ILoginReqBody) => {
    const { data, isSuccess } = await authService.login(reqBody)
    if (isSuccess) {
      authData.value = data
    }
  }

  const logout = () => {
    authData.value = {} as ILoginResBody
    localStorage.removeItem('auth')
    router.push({ name: 'TheLogin' })
  }

  const isExpired = () => {
    if (authData.value.access_token) {
      const decodedToken = jwtDecode(authData.value.access_token)
      if (
        decodedToken.exp &&
        typeof decodedToken.exp === 'number' &&
        decodedToken.exp < Date.now() / 1000
      ) {
        return true
      }
    }
    return false
  }
  return { authData, login, logout, isExpired }
})
