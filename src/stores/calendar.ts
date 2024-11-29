import { defineStore } from "pinia"
import { computed } from 'vue'
export const useCalendarStore = defineStore('calendar', () => {
  //state
  const timeSlots = computed(() => {
    return [
      { time: '00:00', height: 0 },
      { time: '01:00', height: 0 },
      { time: '02:00', height: 0 },
      { time: '03:00', height: 0 },
      { time: '04:00', height: 0 },
      { time: '05:00', height: 0 },
      { time: '06:00', height: 0 },
      { time: '07:00', height: 0 },
      { time: '08:00', height: 0 },
      { time: '09:00', height: 0 },
      { time: '10:00', height: 0 },
      { time: '11:00', height: 0 },
      { time: '12:00', height: 0 },
      { time: '13:00', height: 0 },
      { time: '14:00', height: 0 },
      { time: '15:00', height: 0 },
      { time: '16:00', height: 0 },
      { time: '17:00', height: 0 },
      { time: '18:00', height: 0 },
      { time: '19:00', height: 0 },
      { time: '20:00', height: 0 },
      { time: '21:00', height: 0 },
      { time: '22:00', height: 0 },
      { time: '23:00', height: 0 },
      { time: '24:00', height: 0 }
    ]
  })

  return {
    timeSlots
  }
})