<template>
  <div class="calendar-dropdown">
    <div class="relative">
      <slot name="dropdown-head" class="cursor-pointer" :show="show"/>
    </div>

    <slot name="dropdown-body">
      <div class="">
        <ul class="pl-0 absolute bg-white w-[200px] dropdown-list" :class="direction" v-if="visible">
          <li>All</li>
          <li>All (exclue off)</li>
          <li>resource 1</li>
          <li>resource 2</li>
          <li>resource 3</li>
        </ul>
    </div>
    </slot>
    
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { computed } from 'vue'

type dropdownType = {
  option: [],
  direction: 'left' | 'right' | 'none'
}
const props = defineProps<dropdownType>()

const visible = ref(false)
const direction = computed(() => {
  return {
    'left-0': props.direction === 'left',
    'right-0': props.direction === 'right'
  }
})

// LiftCycle
onMounted(() => {
  document.addEventListener('click', (e) => {
    const dropdownEl = document.querySelector('.dropdown-list')
    if(!dropdownEl?.classList.contains((e.target as Element).className)) {
      console.log('herrerererererere')
    }

  })
})

// Computed

// Methods
const show = ():void => {
  visible.value = !visible.value
}

const hide = ():void => {
  visible.value = false
}
</script>

<style lang="scss" scoped>
li {
  border-top: 1px solid #e5e5e5;
  padding: 5px;
}

.dropdown-enter-from {
  transform: translateY(-100px);
}
.dropdown-enter-active {
  transform: translateY(100px);

}

.dropdown-enter-active, .dropdown-leave-active {
  transition: all 2s ease;
}
</style>