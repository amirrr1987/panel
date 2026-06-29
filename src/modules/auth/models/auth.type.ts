import type { ILoginRequestDTO } from '@/api/data-contracts'

import type { AuthStatus } from './auth.enum'
import type { AuthUser } from './auth.model'
import type { AUTH_ROUTE_NAME } from './auth.const'
import type { AUTH_STORAGE_KEY } from './auth.const'

export type IAUTH_ROUTE_NAME = (typeof AUTH_ROUTE_NAME)[keyof typeof AUTH_ROUTE_NAME]
export type IAUTH_STORAGE_KEY = (typeof AUTH_STORAGE_KEY)[keyof typeof AUTH_STORAGE_KEY]



export type ILoginReq = ILoginRequestDTO
export type LoginForm = ILoginReq
export type AuthRouteName = IAUTH_ROUTE_NAME

export type AuthSession = Pick<
  AuthUser,
  'accessToken' | 'refreshToken' | 'tokenType' | 'expiresIn' | 'refreshExpiresIn'
> & {
  status: AuthStatus
}
