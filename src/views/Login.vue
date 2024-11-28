<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useAuth } from '@/stores/useAuth'
import { useRouter } from 'vue-router';
import { useBase } from '@/composable/useBase';
export default defineComponent({
  setup() {
    //State
    const userId = ref('')
    const password = ref('')
    const { login } = useAuth()
    const router = useRouter()
    const { showAlert } = useBase()
    const onSubmit = async (e: Event): Promise<void> => {
      e.preventDefault()
      try {
        const payload = {
          userId: userId.value,
          password: password.value,
          solutionId: 3002
        }
        const response = await login(payload)

        if(response.data.isOK) {
          router.push({name: 'home'})
          return
        }

        // showAlert(response.data.errorMessages[0].errorMessage)
      } catch (error: any) {
        // showAlert(error.message || '')
        console.log('error', error)
      }
    }

    return {
      onSubmit,
      userId,
      password
    }
  }
})

</script>

<template>
  <div class="w-full h-full flex items-center justify-center">
    <form  @submit="onSubmit" class="h-full w-[40%] flex flex-col gap-10">
      <div>
        <h1 class="uppercase font-bold">Login</h1>
      </div>

      <div>
        <div class="flex gap-2 items-center mb-3">
          <label class="capitalize block w-[100px]">User name</label>
          <b-form-input class="outline-none" v-model="userId"/>
        </div>
        <div class="flex gap-2">
          <label class="capitalize block w-[100px]">Password</label>
          <b-form-input class="outline-none" v-model="password"/>
        </div>
      </div>

      <div class="w-full text-center">
        <b-button variant="primary" type="submit" @click="onSubmit">Submit</b-button>
      </div>
    </form>
  </div>
</template>
