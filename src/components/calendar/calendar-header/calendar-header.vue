<template>
  <div class="flex justify-between items-center p-2">
    <div class="">
      <calendar-dropdown :option="[]" :direction="'none'">
        <template #dropdown-head="{show}">
          <span class="bg-white p-3 block w-[200px] rounded-sm" @click="show" >All</span>
        </template>
      </calendar-dropdown>
    </div>

    <div class="">
      <calendar-navigate />
    </div>

    <div class="calendar-actions text-right inline-block">
      <calendar-setup />
    </div>
    
  </div>
</template>

<script setup lang="ts">
import calendarNavigate from '@/components/calendar/calendar-navigate/calendar-navigate.vue'
import calendarDropdown from '../calendar-dropdown/calendar-dropdown.vue'
import calendarSetup from '../calendar-setup/calendar-setup.vue'
</script>