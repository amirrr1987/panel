import apiConfig from '#/public/config/api.config.json'
import { http } from '@/config/http.config'
import type { Result } from '@/interfaces/result.interface'
import type { ILoginRequest, ILoginResponse } from '@/interfaces/auth.interface'
import type { ICreateUserActiveDirectoryRequest, ICreateUserActiveDirectoryResponse } from '@/interfaces/users.interface'

export const useAuthService = () => {
  const login = async (reqBody: ILoginRequest): Promise<Result<ILoginResponse>> => {
    const response = await http.post<Result<ILoginResponse>>(apiConfig.Auth.V1.Login, reqBody)
    return response.data
  }
  const register = async (reqBody: ICreateUserActiveDirectoryRequest): Promise<Result<ICreateUserActiveDirectoryResponse>> => {
    const response = await http.post<Result<ICreateUserActiveDirectoryResponse>>(
      apiConfig.Users.V1.CreateUser,
      reqBody,
    )
    return response.data
  }

  return { login, register }
}
