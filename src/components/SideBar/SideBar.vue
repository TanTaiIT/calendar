<template>
  <div class="p-2 flex gap-2 flex-col h-full">
  <div class="sidebar p-2 text-center bg-main-gray">
    <div class="">
      <VueDatePicker v-model="value" inline auto-apply class="w-full flex-none"/>
    </div>

    <div class="mt-10">
      <div class="flex items-center justify-between">
        <h3 class="font-semibold">Waiting List</h3>
        <div class="flex items-center gap-2">
          <Button variant="primary" size="sm">+</Button>
          <Button variant="primary" size="sm">-</Button>
        </div>
      </div>
    </div>

  </div>

  <div class="bg-white h-full w-full flex-1">
    
  </div>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from './../Button/Button.vue'
import VueDatePicker from '@vuepic/vue-datepicker';

const value = ref<string>('')
</script>