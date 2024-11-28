<template>
  <div class="p-2">
    <calendar-header/>

    <div class="mt-3 flex">
      <opening-hour/>

      <div class="schedule flex flex-col flex-1 border-white h-full overflow-auto">
        <div class="date bg-calendar-head text-center p-1 border-1 border-white text-white">
          19/8/1999
        </div>

        <div class="resource flex border-1 border-white text-white justify-between">
          <div class="resource w-full ">
            <span class="text-center block w-full bg-calendar-head">resource 1</span>
          </div>

          <div class="text-center block w-full bg-calendar-head">
            <span>resource 2</span>
          </div>

          <div class="text-center block w-full bg-calendar-head">
            <span>resource 3</span>
          </div>

          <div class="text-center block w-full bg-calendar-head">
            <span>resource 4</span>
          </div>
        </div>

        <div class="calendar-schedule">
          <div class="flex">
            <div class="item w-[177px]">
              <calendar-slots />
            </div>

            <div class="item w-[180px]">
              <calendar-slots />
            </div>
            <div class="item w-[180px]">
              <calendar-slots />
            </div>
            <div class="item w-[180px]">
              <calendar-slots />
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
</script>

<style lang="scss" scope>
.resource-item {
  border: 1px solid white;
  text-align: center;
}
</style>
