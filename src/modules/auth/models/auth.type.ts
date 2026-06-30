import type { ILoginRequestDTO, IRefreshRequestDTO, IValidateTokenRequestDTO } from '@/api/data-contracts'

import type { AUTH_ROUTE_NAME } from './auth.const'
import type { AUTH_STORAGE_KEY } from './auth.const'

export type IAUTH_ROUTE_NAME = (typeof AUTH_ROUTE_NAME)[keyof typeof AUTH_ROUTE_NAME]
export type IAUTH_STORAGE_KEY = (typeof AUTH_STORAGE_KEY)[keyof typeof AUTH_STORAGE_KEY]





/**
 * API Request & Response Types
 *
 * This section re-exports types for authentication-related API requests and responses.
 * These types are primarily imported from the server's data contracts and re-aliased
 * for consistent usage throughout the authentication module.
 *
 * @see ILoginRequestDTO, IRefreshRequestDTO, IValidateTokenRequestDTO in @/api/data-contracts
 *
 * Typical mappings:
 * - `ILoginReq` / `ILoginRes` for login endpoints
 * - `IRefreshTokenReq` / `IRefreshTokenRes` for token refresh endpoints
 * - `IValidateTokenReq` / `IValidateTokenRes` for token validation endpoints
 */

export type ILoginReq = ILoginRequestDTO
export type ILoginRes = ILoginRequestDTO

export type IRefreshTokenReq = IRefreshRequestDTO
export type IRefreshTokenRes = IRefreshRequestDTO

export type IValidateTokenReq = IValidateTokenRequestDTO
export type IValidateTokenRes = boolean



// export type LoginForm = ILoginReq
// export type AuthRouteName = IAUTH_ROUTE_NAME

