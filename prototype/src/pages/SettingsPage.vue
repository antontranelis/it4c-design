<script setup lang="ts">
import { ref } from 'vue'

const notifications = ref(true)
const darkMode = ref(false)
</script>

<template>
  <form class="space-y-4 max-w-md">
    <div class="form-control">
      <label class="label cursor-pointer">
        <span class="label-text">Enable notifications</span>
        <input type="checkbox" v-model="notifications" class="toggle" />
      </label>
    </div>
    <div class="form-control">
      <label class="label cursor-pointer">
        <span class="label-text">Dark mode</span>
        <input type="checkbox" v-model="darkMode" class="toggle" />
      </label>
    </div>
    <button class="btn btn-primary btn-sm" type="submit">Save</button>
  </form>
</template>
