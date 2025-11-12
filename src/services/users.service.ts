import { getApiConfig } from '@/composable/useApiConfig'
import { getHttpClient } from '@/config/http.config'
import type { Result } from '@/interfaces/result.interface'
import type { UserDto } from '@/interfaces/users.interface'

export const useUsersService = () => {
  const getUsers = async (): Promise<Result<UserDto[]>> => {
    const apiConfig = getApiConfig()
    const http = getHttpClient()
    const response = await http.get<Result<UserDto[]>>(apiConfig.Users.V1.GetAllUsers)
    return response.data
  }

  return { getUsers }
}
