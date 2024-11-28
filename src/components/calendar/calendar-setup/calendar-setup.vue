<template>
  <div class="">
    <calendar-dropdown :option="[]" :direction="'right'">
      <template #dropdown-head="{show}">
        <Button @click="show">Menu</Button>
      </template>
    </calendar-dropdown>
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/Button/Button.vue'
import calendarDropdown from '../calendar-dropdown/calendar-dropdown.vue';
</script>