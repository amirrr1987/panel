import axios, { type AxiosInstance } from 'axios'
import { getApiConfig } from '@/composable/useApiConfig'

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
