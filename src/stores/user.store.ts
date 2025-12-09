import type { ICreateUserReqBody, UserDto } from '@/interfaces/users.interface'
import { useUsersService } from '@/services/users.service'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const usersService = useUsersService()

  const users = ref<UserDto[]>([])

  const getUsers = async () => {
    try {
      users.value = await usersService.getUsers()
    } catch (error) {
      console.log('🚀 ~ error:', error)
    }
  }

  const createUser = async (reqBody: ICreateUserReqBody) => {
    try {
      await usersService.createUser(reqBody)
    } catch (error) {
      console.log('🚀 ~ error:', error)
    }
  }

  return { users, getUsers, createUser }
})
