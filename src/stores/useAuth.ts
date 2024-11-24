import { defineStore } from "pinia"
import { ref } from 'vue'
import type { userInfoType, shopInfoType, userLoginPayload } from "@/types/store/auth.types"
import { Login } from "@/api/auth.api"
const culture = 'culture=en-US&ui-culture=en-US'
export const useAuth = defineStore('auth', () => {
  // State
  const userInfo = ref<userInfoType | null>(null)
  const shopInfo = ref<shopInfoType | null>(null)

  const refreshToken = ref<string>('')
  const accessToken = ref<string>('')

  // Actions
  const login = async(query: userLoginPayload) => {
    try {
      const payload = {
        userId: query.userId,
        password: query.password,
        solutionId: query.solutionId
      }
      const response = await Login(culture, payload)
      console.log('response', response)
    } catch (error) {
      throw error
    }
  }

  return {
    userInfo,
    shopInfo,
    refreshToken,
    accessToken,
    login
  }
})
