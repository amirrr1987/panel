import { useStorage } from '@vueuse/core'
import { useJwt } from '@vueuse/integrations/useJwt'
import { defineStore } from 'pinia'

import { AUTH_STORAGE_KEY } from '../models/auth.const'
import type { AuthUser } from '../models/auth.model'
import { generateName } from '@/utils'
import { computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const accessToken = useStorage(AUTH_STORAGE_KEY.ACCESS_TOKEN, '')
  const refreshToken = useStorage(AUTH_STORAGE_KEY.REFRESH_TOKEN, '')
  const auth = useStorage<AuthUser | null>(generateName('auth'), null)
  const _jwt = useJwt(accessToken)
  const isAuthenticated = computed(() => _jwt.payload.value?.exp && _jwt.payload.value.exp > Date.now() / 1000)
  // jwt.payload.value.


  

  return {
    accessToken,
    refreshToken,
    auth,
    isAuthenticated
  }
})
