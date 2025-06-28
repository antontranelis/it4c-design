<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'
</script>

<template>
  <div class="drawer">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content bg-base-200">
      <Navbar />
      <router-view />
    </div>
    <Sidebar />
  </div>
</template>

<style scoped>
:root {
  height: 100vh;
}
</style>