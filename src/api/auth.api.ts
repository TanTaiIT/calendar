import { createAggrHttp } from "@/server/http"
import type { userLoginPayload } from "@/types/store/auth.types"
const aggrHttp = createAggrHttp()
export const Login = async(country: string, payload: userLoginPayload) => {
  console.log('payload', payload)
  return await aggrHttp.post('/auth/login/Subscriber?' + country, payload)
}
