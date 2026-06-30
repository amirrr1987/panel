import { useMutation } from '@tanstack/vue-query'
import { useRouteQuery } from '@vueuse/router'
import { useNProgress } from '@vueuse/integrations/useNProgress'
import { computed, ref, watchEffect } from 'vue'
import { useRouter } from 'vue-router'

import type { LoginForm } from '../models/auth.type'
import { useAuthStore } from '../stores/auth.store'
import { normalizeBranchCode, parseAuthError } from '../utils/auth.util'

export function useAuthLogin() {
  const router = useRouter()
  const authStore = useAuthStore()
  const nProgress = useNProgress()
  const redirect = useRouteQuery('redirect', '/', {
    transform: {
      get: (value) => {
        if (Array.isArray(value)) return value[0] ?? '/'
        if (typeof value === 'string' && value) return value
        return '/'
      },
    },
  })

  const form = ref<LoginForm>({
    branchCode: '',
    username: '',
    password: '',
  })

  const {
    mutateAsync: submitLogin,
    isPending: submitting,
    error,
  } = useMutation({
    mutationFn: async () => {
      await authStore.login({
        ...form.value,
        branchCode: normalizeBranchCode(form.value.branchCode),
      })
      await router.push(redirect.value)
    },
  })

  watchEffect(() => {
    if (submitting.value) nProgress.start()
    else nProgress.done()
  })

  const errorMessage = computed(() => (error ? parseAuthError(error.value) : ''))

  async function submit() {
    await submitLogin()
  }

  return {
    form,
    submitting,
    errorMessage,
    submit,
  }
}
