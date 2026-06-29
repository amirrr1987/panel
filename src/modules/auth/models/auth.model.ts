export interface AuthUser {
  accessToken: string
  userId?: number
  fullName?: string
  refreshToken?: string
  tokenType?: string
  expiresIn?: string
  refreshExpiresIn?: string
}
