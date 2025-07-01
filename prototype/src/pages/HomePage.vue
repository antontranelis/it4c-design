<template>
  <div class="p-4 space-y-4">
    <div class="hero rounded-box bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-3xl font-bold">Welcome</h1>
          <p class="py-2">Check out the latest posts below.</p>
        </div>
      </div>
    </div>
    <div class="max-w-8xl w-full">
      <Feed />
    </div>
  </div>
</template>

<script setup lang="ts">
import Feed from '../components/Feed.vue'
</script>
