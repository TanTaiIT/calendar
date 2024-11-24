<script setup>
import { ref } from 'vue'
import { useAuth } from '@/stores/useAuth'

//State
const userId = ref('')
const password = ref('')
const { login } = useAuth()

const onSumit = async (e) => {
  e.preventDefault()
  try {
    const payload = {
      userId: userId.value,
      password: password.value
    }
    await login(payload)
  } catch (error) {
    console.log('error')
  }
}
</script>

<template>
  <div class="w-full h-full flex items-center justify-center">
    <form class="w-50 h-full flex flex-col gap-5" @submit="onSumit">
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
        <b-button variant="primary" type="submit">Submit</b-button>
      </div>
    </form>
  </div>
</template>
