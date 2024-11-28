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
  const setRefreshTokenLocal = (refreshToken: string): void => {
    localStorage.setItem('refreshToken', refreshToken)
  }

  const setAccessTokenLocal = (accessToken: string): void => {
    localStorage.setItem('accessToken', accessToken)
  }
  const login = async(query: userLoginPayload) => {
    try {
      const payload = {
        userId: query.userId,
        password: query.password,
        solutionId: query.solutionId
      }
      const response = await Login(culture, payload)
      console.log('response', response)
      if(response.data.isOK) {
        userInfo.value = response.data.result.userAuthInfo
        shopInfo.value = response.data.result.shopBasicInfo
      }
      
      setRefreshTokenLocal(userInfo?.value?.refreshToken || '')
      setAccessTokenLocal(userInfo?.value?.authToken || '')

      return response

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
