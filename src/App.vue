<script setup lang="ts">
import { watch } from 'vue';
import ModalAlert from './components/Modal/ModalAlert.vue';
import { useAlert } from './stores/useAlert';

const alertData = useAlert()

console.log('alert data', alertData.alertVisible)
watch(() => alertData.alertVisible, (newVal) => {
  if(newVal) {

  }
})
</script>

<template>
  <ModalAlert/>
  <RouterView />
</template>

<style scoped>
</style>
