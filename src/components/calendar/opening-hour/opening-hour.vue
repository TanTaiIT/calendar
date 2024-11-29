<template>
  <div class="w-[10%] h-full overflow-hidden ">
    <div class="bg-calendar-head">
      <span class="text-white p-3 block border-white border-2 opening-hour">Time</span>
    </div>

    <div class="">
      <div v-for="(timeslot, index) in calendarStore.timeSlots" class="border-white bg-gray-light text-center border-1 h-[30px]">
        <span>{{ timeslot.time }}</span>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { useCalendarStore } from '@/stores/calendar'

const calendarStore = useCalendarStore()

</script>

<style lang="scss" scoped> 
.opening-hour {
  height: calc(var(--time-slot-height) * 2);
}

</style>
