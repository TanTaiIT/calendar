import { createReadHttp } from "@/server/http"
const readHttp = createReadHttp()

export const allCalendarSetup = async(payload: any) => {
  return await readHttp.post('bookings/Booking/AllCalendarSetups/Live', payload)
}