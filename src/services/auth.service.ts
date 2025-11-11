import apiConfig from '#/public/config/api.config.json'
import { http } from '@/config/http.config'
import type { Result } from '@/interfaces/result.interface'
import type { LoginRequestBody, LoginResponseBody } from '@/interfaces/auth.interface'
import type { User } from '@/interfaces/user.interface'

export const useAuthService = () => {
  const login = async (reqBody: LoginRequestBody): Promise<Result<LoginResponseBody>> => {
    const response = await http.post<Result<LoginResponseBody>>(apiConfig.Auth.V1.Login, reqBody)
    return response.data
  }
  const register = async (reqBody: User): Promise<Result<User>> => {
    const response = await http.post<Result<User>>(apiConfig.Users.V1.CreateUser, reqBody)
    return response.data
  }
  const forgotPassword = async (email: string) => {
    const response = await http.post(apiConfig.Auth.V1.ForgotPassword, { email })
    return response.data
  }
  const resetPassword = async (email: string, password: string) => {
    const response = await http.post(apiConfig.Auth.V1.ResetPassword, { email, password })
    return response.data
  }
  return { login, register, forgotPassword, resetPassword }
}
