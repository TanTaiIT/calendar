<template>
  <div class="w-full h-full flex items-center justify-center gap-3">
    <b-button variant="primary" class="capitalize" @click="goToSales">Sales</b-button>
    <b-button variant="primary" class="capitalize" @click="goToBooking">Calendar</b-button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
// State
const router = useRouter()
// Methods
const goToSales = ():void => {
  router.push({ name: 'sales'})
}

const goToBooking = (): void => {
  router.push({ name: 'calendar'})
}

</script>

<style lang="scss" scoped>
button {
  width: 200px;
  height: 50px;
  text-transform: uppercase;
}

</style>