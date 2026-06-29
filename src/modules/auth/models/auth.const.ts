export const AUTH_API_VERSION = '1'
export const AUTH_ROUTE_NAME = {
  AUTH: 'auth',
  AUTH_LOGIN: 'auth.login',
  AUTH_REGISTER: 'auth.register',
} as const
export const AUTH_STORAGE_KEY = {
  ACCESS_TOKEN: 'auth.access_token',
  REFRESH_TOKEN: 'auth.refresh_token',
} as const