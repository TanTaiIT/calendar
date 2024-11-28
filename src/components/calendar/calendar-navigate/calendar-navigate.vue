<template>
  <div class="flex items-center gap-2">
    <div class="flex gap-2 items-center">
      <Button variant="primary">Today</Button>
      <Button variant="primary"><</Button>
      <Button variant="primary">></Button>
    </div>
    <div class="bg-white rounded-md h-[38px] flex items-center justify-center p-2">
      11/3/2024
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/Button/Button.vue'
</script>

<style lang="scss" scoped>
</style>