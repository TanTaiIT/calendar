import { useAlert } from "@/stores/useAlert"
export function useBase() {
  // state
  const { setAlertVisible, setAlert } = useAlert()
  //actions
  const showAlert = (message: string): void => {
    setAlertVisible(true)
    setAlert(message)
  }
  
  return {
    showAlert
  }
}