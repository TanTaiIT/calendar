import { defineStore } from "pinia"
import { ref, watch } from 'vue'
export const useAlert = defineStore('alert', () => {
  //state
  const alertData = ref<string>('')
  const alertVisible = ref<boolean>(false)

  //actions
  const setAlert = (alert: string): void => {
    alertData.value = alert
  }

  const setAlertVisible = (visible: boolean): void => {
    alertVisible.value = visible
  }

  // watch(alertVisible, (newvalue) => {
  //   if(newvalue) {

  //   }
  // })

  return {
    setAlert,
    alertData,
    alertVisible,
    setAlertVisible
  }
})