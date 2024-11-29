<template>
  <div class="p-2">
    <calendar-header/>

    <div class="mt-3 flex" >
      <opening-hour ref="openingHourRef"/>

      <div class="schedule flex flex-col flex-1 border-white h-full overflow-auto" ref="calendarRef">
        <div class="date bg-calendar-head text-center border-1 border-white text-white time">
          19/8/1999
        </div>

        <div class="flex bg-calendar-head text-white resource">
          <div class="w-full border-white border-1">
            resource 1
          </div>

          <div class="w-full border-white border-1">
            resource 2
          </div>

          <div class="w-full border-white border-1">
            resource 3
          </div>

          <div class="w-full border-white border-1">
            resource 4
          </div>
        </div>

        <div class="calendar-schedule" ref="calendarScheduleRef">
          <div class="flex">
            <div class="item">
              <calendar-slots :time-slot-width="timeSlotWidth" />
            </div>

            <div class="item">
              <calendar-slots :time-slot-width="timeSlotWidth" />
            </div>
            <div class="item">
              <calendar-slots :time-slot-width="timeSlotWidth" />
            </div>
            <div class="item">
              <calendar-slots :time-slot-width="timeSlotWidth" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import openingHour from './../opening-hour/opening-hour.vue'
import calendarSlots from '../calendar-slots/calendar-slots.vue';
import calendarHeader from '../calendar-header/calendar-header.vue';
import { ref, computed, onMounted, onBeforeMount } from 'vue'
import { allCalendarSetup } from '@/api/calendar.api'
import { useAuth } from '@/stores/useAuth';

const calendarScheduleRef = ref<HTMLElement | null>(null)
const openingHourRef = ref<InstanceType<typeof openingHour> | null>(null)
const calendarRef = ref<HTMLElement | null>(null)
const { shopInfo } = useAuth()
// Lifecycle
onMounted(() => {
  setPropertise()
})

onBeforeMount(() => {
  loadCalendarSetup()
})

const loadCalendarSetup = async() => {
  try {
    const response = await allCalendarSetup(600336)
  } catch (error) {
    
  } finally {

  }
}

const timeSlotWidth = computed(() => {
    const scheduleWidth = calendarScheduleRef.value?.getBoundingClientRect().width || 0

    const openingHourWidth = openingHourRef.value?.$el.getBoundingClientRect().width || 0


    return Math.floor(scheduleWidth / 4)
})

const setPropertise = () => {
  calendarRef.value?.style.setProperty('--times-slot-width', `${timeSlotWidth.value}px`)
}
</script>

<style lang="scss" scope>
.time {
  height: calc(var(--time-slot-height));
}
.resource-item {
  border: 1px solid white;
  text-align: center;
}

.resource {
  height: var(--time-slot-height);
  
}
</style>
