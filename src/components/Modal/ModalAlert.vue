<script lang="ts" setup>
import { ref, watch, computed, defineProps } from 'vue'
import { useAlert } from '@/stores/useAlert';
const { alertVisible, alertData } = useAlert()


const props = defineProps({
  id: {
    type: String,
    default: ''
  }
})
//props
</script>

<template>
  <div>
    <b-modal
      :id="props.id"
      title="Alert"
    >
      <p>{{ alertData }}</p>
    </b-modal>
  </div>
</template>