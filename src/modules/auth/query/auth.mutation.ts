import { ref } from 'vue'
import { useMutation } from '@tanstack/vue-query'
import { useRouter } from 'vue-router'
import { useAuthService } from '../services/auth.service'
import { useAuthStore } from '../stores/auth.store'
import type { ILoginRequestDTO, IRefreshRequestDTO, IValidateTokenRequestDTO } from '@/api/data-contracts'
import { APP_ROUTE_NAME } from '@/core/types/app.const'
import type { AuthUser } from '../models/auth.model'


export const useAuthMutations = () => {
  const auth = useAuthService()
  const authStore = useAuthStore()
  const router = useRouter()

  const loginController = ref<AbortController | null>(null)
  const refreshController = ref<AbortController | null>(null)
  const validateController = ref<AbortController | null>(null)

  const login = useMutation({
    mutationFn: (req: ILoginRequestDTO) => {
      loginController.value?.abort()
      loginController.value = new AbortController()
      return auth.login(req)
    },
    onSuccess: (res) => {
      authStore.auth = res as unknown as AuthUser
      router.push({ name: APP_ROUTE_NAME.HOME })
    },
  })

  const refreshToken = useMutation({
    mutationFn: (req: IRefreshRequestDTO) => {
      refreshController.value?.abort()
      refreshController.value = new AbortController()
      return auth.refresh(req)
    },
  })

  const validateToken = useMutation({
    mutationFn: (req: IValidateTokenRequestDTO) => {
      validateController.value?.abort()
      validateController.value = new AbortController()
      return auth.validate(req.token!)
    },
  })




  return {
    login,
    refreshToken,
    validateToken,
  }
}