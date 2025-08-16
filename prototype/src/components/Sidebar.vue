<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { HomeIcon, MapIcon, UsersIcon, UserGroupIcon, ShoppingBagIcon, CalendarIcon } from '@heroicons/vue/24/outline';

defineProps<{ open: boolean }>()
</script>

<template>
  <div
    :class="[
      'h-full bg-base-100 z-30 shadow-lg overflow-hidden transition-[width] duration-300',
      open ? 'w-58' : 'w-0'
    ]"
  >
    <ul v-if="open" class="menu text-base-content min-h-full w-full p-4">
      <li><RouterLink to="/" class="flex items-center gap-2"><HomeIcon class="size-5" />Feed</RouterLink></li>
      <li><RouterLink to="/map" class="flex items-center gap-2"><MapIcon class="size-5" />Map</RouterLink></li>
      <li><RouterLink to="/friends" class="flex items-center gap-2"><UsersIcon class="size-5" />Friends</RouterLink></li>
      <li><RouterLink to="/groups" class="flex items-center gap-2"><UserGroupIcon class="size-5" />Groups</RouterLink></li>
      <li><RouterLink to="/market" class="flex items-center gap-2"><ShoppingBagIcon class="size-5" />Market</RouterLink></li>
      <li><RouterLink to="/calendar" class="flex items-center gap-2"><CalendarIcon class="size-5" />Calendar</RouterLink></li>
    </ul>
  </div>
</template>
