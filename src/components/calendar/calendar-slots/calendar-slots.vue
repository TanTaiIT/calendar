<template>
  <div class="calendar-slots" :style="{ width: `${props.timeSlotWidth}px` }">
    <div v-for="(slot, index) in calendarStore.timeSlots" class=" h-[20px] w-full bg-white border-1">
      <span>{{  }}</span>
    </div>

  </div>
</template>

<script setup lang="ts">
import { useCalendarStore } from '@/stores/calendar'
const props = defineProps({
  timeSlotWidth: {
    type: Number,
    default: 100
  }
})

const calendarStore = useCalendarStore()
</script>

<style lang="scss" scoped>
.calendar-slots {
  div {
    height: var(--time-slot-height);
  }
}
</style>
