import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { LoginService, RegisterService, LogoutService } from '@/services/userService'
import { useStorage } from '@vueuse/core'
import { logService } from '@/services/LogService'

import type { User } from '@/interfaces/User'

export const useAuthStore = defineStore('auth', () => {
  // Variables reactivas y computados
  const user = ref({} as User)
  const token = useStorage('token', '')
  const isLoggedIn = computed(() => token.value !== '' && token.value !== undefined)

  // Funciones
  async function login(email: string, password: string) {
    try {
      const response = await LoginService(email, password)
      if (response.status === 200) {
        user.value = response.data
        token.value = user.value.token
      }
    } catch (error: any) {
      const errorMessage = 'Error during login'
      console.error(errorMessage, error)
      await logService.log('error', errorMessage, { error, email })
    }
  }

  async function register(email: string, password: string) {
    try {
      const response = await RegisterService(email, password)
      if (response.status === 200) {
        user.value = response.data
        token.value = user.value.token
      }
    } catch (error: any) {
      const errorMessage = 'Error during registration'
      console.error(errorMessage, error)
      await logService.log('error', errorMessage, { error, email })
    }
  }

  async function logout() {
    try {
      const response = await LogoutService()
      if (response.status === 200) {
        user.value = {} as User
        token.value = ''
      }
    } catch (error: any) {
      const errorMessage = 'Error during logout'
      console.error(errorMessage, error)
      await logService.log('error', errorMessage, { error })
    }
  }

  return { login, register, logout, isLoggedIn, token }
})
