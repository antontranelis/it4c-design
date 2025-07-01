<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps<{ open: boolean }>()
</script>

<template>
  <div
    :class="[
      'h-full bg-base-100 z-30 shadow-lg overflow-hidden transition-[width] duration-300',
      open ? 'w-64' : 'w-0'
    ]"
  >
    <ul v-if="open" class="menu text-base-content min-h-full w-64 p-4">
      <li><RouterLink to="/">Feed</RouterLink></li>
      <li><RouterLink to="/map">Map</RouterLink></li>
      <li><RouterLink to="/friends">Friends</RouterLink></li>
      <li><RouterLink to="/groups">Groups</RouterLink></li>
      <li><RouterLink to="/market">Market</RouterLink></li>
      <li><RouterLink to="/calendar">Calendar</RouterLink></li>
    </ul>
  </div>
</template>
