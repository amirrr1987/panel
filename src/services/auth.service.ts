import { getApiConfig } from '@/composable/useApiConfig'
import { getHttpClient } from '@/config/http.config'
import type { IResult } from '@/interfaces/result.interface'
import type { ILoginReqBody, ILoginResBody, IRefreshTokenReqBody, IRefreshTokenResBody } from '@/interfaces/auth.interface'

export const useAuthService = () => {
  const apiConfig = getApiConfig()
  const http = getHttpClient()
  const login = async (reqBody: ILoginReqBody): Promise<IResult<ILoginResBody>> => {
    const response = await http.post<IResult<ILoginResBody>>(apiConfig.Auth.V1.Login, reqBody)
    return response.data
  }

  const refreshToken = async (reqBody: IRefreshTokenReqBody): Promise<IResult<IRefreshTokenResBody>> => {
    const response = await http.post<IResult<IRefreshTokenResBody>>(
      apiConfig.Auth.V1.RefreshToken,
      reqBody,
    )
    return response.data
  }

  return { login, refreshToken }
}
