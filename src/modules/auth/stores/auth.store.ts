import { useStorage } from '@vueuse/core'
import { useJwt } from '@vueuse/integrations/useJwt'
import { defineStore } from 'pinia'
import { computed } from 'vue'

import { authService } from '../api/auth.service'
import { AUTH_STORAGE_KEY } from '../models/auth.const'
import { AuthStatus } from '../models/auth.enum'
import type { AuthSession, ILoginReq } from '../models/auth.type'
import { isTokenExpired } from '../utils/token.util'

export const useAuthStore = defineStore('auth', () => {
  const accessToken = useStorage(AUTH_STORAGE_KEY.ACCESS_TOKEN, '')
  const refreshToken = useStorage(AUTH_STORAGE_KEY.REFRESH_TOKEN, '')

  const { payload } = useJwt<{ exp?: number }>(() => accessToken.value)

  const isAuthenticated = computed(
    () =>
      Boolean(accessToken.value) &&
      Boolean(refreshToken.value) &&
      !isTokenExpired(payload.value?.exp),
  )

  const tokenExpiresAt = computed(() => payload.value?.exp)

  const status = computed(() =>
    isAuthenticated.value ? AuthStatus.Authenticated : AuthStatus.Unauthenticated,
  )

  function persistSession(session: AuthSession) {
    accessToken.value = session.accessToken
    refreshToken.value = session.refreshToken ?? ''
  }

  function clearSession() {
    accessToken.value = ''
    refreshToken.value = ''
  }

  async function login(credentials: ILoginReq) {
    const user = await authService.login(credentials)
    persistSession({
      accessToken: user.accessToken,
      refreshToken: user.refreshToken ?? '',
      tokenType: user.tokenType,
      expiresIn: user.expiresIn,
      refreshExpiresIn: user.refreshExpiresIn,
      status: AuthStatus.Authenticated,
    })
  }

  async function logout() {
    clearSession()
  }

  return {
    accessToken,
    refreshToken,
    tokenExpiresAt,
    isAuthenticated,
    status,
    login,
    logout,
    clearSession,
  }
})
