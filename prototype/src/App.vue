<script setup lang="ts">
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'

const sidebarOpen = ref(false)
</script>

<template>
  <div class="flex h-screen overflow-hidden">
    <Sidebar :open="sidebarOpen" />
    <div class="flex flex-col flex-1 overflow-hidden">
      <Navbar @toggle-sidebar="sidebarOpen = !sidebarOpen" />
      <div
        :class="[
          'flex-1 bg-base-200 transition-all duration-300',
          sidebarOpen ? 'ml-64' : 'ml-0'
        ]"
      >
        <router-view />
      </div>
    </div>
  </div>
</template>

<style scoped>
:root {
  height: 100vh;
}
</style>