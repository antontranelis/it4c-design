<template>
  <div class="drawer-side shadow-lg">
    <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
    <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
      <li><RouterLink to="/">Feed</RouterLink></li>
      <li><RouterLink to="/map">Map</RouterLink></li>
      <li><RouterLink to="/friends">Friends</RouterLink></li>
      <li><RouterLink to="/groups">Groups</RouterLink></li>
      <li><RouterLink to="/market">Market</RouterLink></li>
      <li><RouterLink to="/calendar">Calendar</RouterLink></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
