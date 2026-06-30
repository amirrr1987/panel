// import { useNProgress } from '@vueuse/integrations/useNProgress'
import { ref } from 'vue'
// import { useRouter } from 'vue-router'

// import { useAuthStore } from '../stores/auth.store'
import type { ILoginRequestDTO } from '@/api/data-contracts'
import { useAuthMutations } from '../query/auth.mutation'
export const useAuthLogin = () => {
  const { login } = useAuthMutations()
  // const router = useRouter()
  // const authStore = useAuthStore()
  // const nProgress = useNProgress()

  const form = ref<ILoginRequestDTO>({
    username: '',
    password: '',
    captchaId: '',
    captchaInput: '',
    isActiveDirectory: false,
  })




  return {
    form,
    ...login
  }
}