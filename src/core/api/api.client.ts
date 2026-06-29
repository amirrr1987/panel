import { HttpClient } from '@/api/http-client'
import { AUTH_STORAGE_KEY } from '@/modules/auth/models/auth.const'
import { useStorage } from '@vueuse/core'

 const apiClient = new HttpClient({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? '',
})
apiClient.instance.interceptors.request.use((config) => {
  const accessToken = useStorage(AUTH_STORAGE_KEY.ACCESS_TOKEN, '')
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }
  return config
})
apiClient.instance.interceptors.response.use((response) => {
  const accessToken = useStorage(AUTH_STORAGE_KEY.ACCESS_TOKEN, '')
  if (accessToken) {
    response.headers.Authorization = `Bearer ${accessToken}`
  }
  return response.data
})

export { apiClient }