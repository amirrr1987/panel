import { getApiConfig } from '@/composable/useApiConfig'
import { getHttpClient } from '@/config/http.config'
import type { IResult } from '@/interfaces/result.interface'
import type { IUser } from '@/interfaces/users.interface'

export const useUsersService = () => {
  const apiConfig = getApiConfig()
  const http = getHttpClient()
  const getUsers = async (): Promise<IUser.GetUsers.Response.Body> => {
    const { data } = await http.get<IResult<IUser.GetUsers.Response.Body>>(
      apiConfig.Users.V1.GetAllUsers,
    )
    return data.data ?? []
  }
  const createUser = async (
    reqBody: IUser.CreateUser.Request.Body,
  ): Promise<IUser.CreateUser.Response.Body> => {
    const { data } = await http.post<IResult<IUser.CreateUser.Response.Body>>(
      apiConfig.Users.V1.CreateUser,
      reqBody,
    )
    return data.data ?? false
  }

  return { getUsers, createUser }
}
