import axios, { AxiosError, type AxiosInstance, type InternalAxiosRequestConfig } from 'axios'
import { getApiConfig } from '@/composable/useApiConfig'
import router from '@/router'
import type { IResult } from '@/interfaces/result.interface'
import type { ILoginResBody } from '@/interfaces/auth.interface'
import { isoToTimestamp } from '@/utils/time.util'
import { useAuthService } from '@/services/auth.service'
import { getMessageApi } from '@/utils/message.util'
import { useTranslation } from 'i18next-vue'

let httpInstance: AxiosInstance | null = null

/**
 * Initialize HTTP client with runtime config
 * Must be called after loadApiConfig()
 */
export function initHttpClient(): AxiosInstance {
  if (httpInstance) {
    return httpInstance
  }
  const loginData = JSON.parse(localStorage.getItem('loginData') ?? '{}')
  const accessToken = loginData.access_token

  const apiConfig = getApiConfig()
  httpInstance = axios.create({
    baseURL: apiConfig.baseURL,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  })

  let isRefreshing = false
  let failedQueue: Array<{
    resolve: (value: string | null) => void
    reject: (reason?: Error) => void
  }> = []
  const processQueue = (error: Error | null, token: string | null = null) => {
    failedQueue.forEach((prom) => {
      if (error) {
        prom.reject(error)
      } else {
        prom.resolve(token)
      }
    })
    failedQueue = []
  }

  // Request interceptor - Add Authorization header dynamically
  httpInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const authData = JSON.parse(localStorage.getItem('auth') ?? '{}')
      const token = authData.access_token
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    },
  )

  // Response interceptor - Handle errors (e.g., 401 Unauthorized)
  httpInstance.interceptors.response.use(
    (response) => {
      return response
    },
    async (error: AxiosError<IResult<null>>) => {
      // error.response?.data.message
      if (error.response?.data.statusCode === 404) {
        localStorage.removeItem('auth')
        window.location.href = '/auth/login'
        return Promise.reject(error)
      }

      const originalRequest = error.config as InternalAxiosRequestConfig & {
        _retry?: boolean
      }

      if (error.response?.status === 401 && !originalRequest._retry) {
        if (isRefreshing) {
          // اگه یکی دیگه داره refresh می‌کنه، این درخواست منتظر بمونه
          return new Promise((resolve, reject) => {
            failedQueue.push({ resolve, reject })
          })
            .then((token) => {
              originalRequest.headers.Authorization = `Bearer ${token}`
              return http(originalRequest)
            })
            .catch((err) => Promise.reject(err))
        }

        originalRequest._retry = true
        isRefreshing = true

        try {
          const raw = localStorage.getItem('auth')
          if (!raw) throw new Error('No auth data')

          const auth: ILoginResBody = JSON.parse(raw)
          const now = Date.now()
          const refreshExpiresAt = isoToTimestamp(auth.refresh_expires_in)

          // اگه refresh token هم expire شده باشه
          if (!auth.refresh_token || now >= refreshExpiresAt) {
            throw new Error('Refresh token expired')
          }
          // فقط یک درخواست refresh
          const authService = useAuthService()
          const { data, isSuccess } = await authService.refreshToken({
            token: auth.access_token ?? '',
            refreshToken: auth.refresh_token,
          })
          if (!isSuccess) {
            throw new Error('Refresh failed - no access token')
          }

          // ذخیره توکن جدید
          localStorage.setItem('auth', JSON.stringify(data))

          // همه درخواست‌های منتظر رو با توکن جدید ادامه بده
          processQueue(null, data?.access_token)

          // درخواست اصلی رو دوباره بزن
          originalRequest.headers.Authorization = `Bearer ${data?.access_token}`
          return http(originalRequest)
        } catch (refreshError) {
          console.log('🚀 ~ refreshError:', refreshError)
          // اگه refresh کاملاً شکست → همه رو رد کن و برو لاگین
          processQueue(refreshError as Error | null)
          localStorage.removeItem('auth')
          window.location.href = '/auth/login' // یا emit event
          return Promise.reject(refreshError)
        } finally {
          isRefreshing = false
        }
      }

      // خطاهای دیگه (غیر 401)
      const { t } = useTranslation()
      const msg = error.response?.data?.message || t('serverError')
      if (msg && msg !== 'Unauthorized') {
        getMessageApi().error(msg)
      }

      return Promise.reject(error)
    },
    // (error) => {
    //   if (error.response?.status === 401) {
    //     // Clear login data and redirect to login page
    //     localStorage.removeItem('auth')
    //     router.push({ name: 'TheLogin' })
    //   }
    //   return Promise.reject(error)
    // },
  )

  return httpInstance
}

/**
 * Get HTTP client instance
 * Throws error if not initialized
 */
export function getHttpClient(): AxiosInstance {
  if (!httpInstance) {
    throw new Error('HTTP client not initialized. Call initHttpClient() after loadApiConfig().')
  }
  return httpInstance
}

// Export http for backward compatibility (will be initialized after config loads)
export const http = new Proxy({} as AxiosInstance, {
  get(_target, prop) {
    return getHttpClient()[prop as keyof AxiosInstance]
  },
})

export default http
