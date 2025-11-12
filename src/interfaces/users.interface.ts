import type { LoginProviderEnum } from '@/enums'

export interface ClaimDto {
  type: string;
  value: string;
  valueType?: string | null;
  issuer?: string | null;
}

export interface UserDto {
  id?: string | null
  username?: string | null
  roles?: string[]
  claims?: ClaimDto[]
}

export interface ICreateUserActiveDirectoryRequest {
  username: string
  password: string
  loginProvider: LoginProviderEnum
}
export interface ICreateUserActiveDirectoryResponse {
  isSuccess: boolean
}
