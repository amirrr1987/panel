import { ref, type Ref } from 'vue'

export interface ApiConfig {
  baseURL: string
  Auth: {
    V1: {
      Login: string
      Register: string
      ForgotPassword: string
      ResetPassword: string
    }
  }
  Users: {
    V1: {
      CreateUser: string
      GetAllUsers: string
    }
  }
  Roles: {
    V1: {
      GetRoles: string
    }
  }
}

const apiConfig: Ref<ApiConfig | null> = ref(null)
const isLoading = ref(false)
const error: Ref<Error | null> = ref(null)

let configPromise: Promise<ApiConfig> | null = null

/**
 * Load API configuration from public directory at runtime
 * This allows changing the config after build without rebuilding
 */
export async function loadApiConfig(): Promise<ApiConfig> {
  // Return cached promise if already loading
  if (configPromise) {
    return configPromise
  }

  // Return cached config if already loaded
  if (apiConfig.value) {
    return apiConfig.value
  }

  isLoading.value = true
  error.value = null

  configPromise = fetch('/config/api.config.json')
    .then(async (response) => {
      if (!response.ok) {
        throw new Error(`Failed to load API config: ${response.statusText}`)
      }
      const config = await response.json()
      apiConfig.value = config
      isLoading.value = false
      return config
    })
    .catch((err) => {
      error.value = err
      isLoading.value = false
      configPromise = null
      throw err
    })

  return configPromise
}

/**
 * Get the current API config (must be loaded first)
 */
export function getApiConfig(): ApiConfig {
  if (!apiConfig.value) {
    throw new Error('API config not loaded. Call loadApiConfig() first.')
  }
  return apiConfig.value
}

/**
 * Composable to use API config in components
 */
export function useApiConfig() {
  return {
    apiConfig,
    isLoading,
    error,
    loadApiConfig,
    getApiConfig,
  }
}
