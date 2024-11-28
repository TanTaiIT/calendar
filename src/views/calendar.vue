<template>
  <div class="w-full h-full flex bg-main-gray gap-2">
    <div class="">
      <side-bar />
    </div>

    <div class="flex-1 h-full">
      <calendar-schedule />
    </div>
  </div>
</template>
<script setup lang="ts">

import SideBar from './../components/SideBar/SideBar.vue';
import CalendarSchedule from '@/components/calendar/calendar-schedule/calendar-schedule.vue';
</script>