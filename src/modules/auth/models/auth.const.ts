export const AUTH_API_VERSION = '1'
export const AUTH_ROUTE_NAME = {
  AUTH: 'auth',
  AUTH_LOGIN: 'auth.login',
  AUTH_REGISTER: 'auth.register',
} as const
export const AUTH_STORAGE_KEY = {
  ACCESS_TOKEN: 'a.an',
  REFRESH_TOKEN: 'a.rn',
} as const