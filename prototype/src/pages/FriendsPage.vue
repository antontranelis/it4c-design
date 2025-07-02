<script setup lang="ts">
import { ref, onMounted } from 'vue'
interface Friend {
  name: string
  avatar: string
  status: string
}

const friends = ref<Friend[]>([])

onMounted(async () => {
  try {
    const res = await fetch('/posts.json')
    if (res.ok) {
      const data = await res.json()
      friends.value = data.friends
    }
  } catch (err) {
    console.error('Failed to load friends', err)
  }
})
</script>

<template>
  <div class="">
    <ul class="space-y-2">
      <li
        v-for="friend in friends"
        :key="friend.name"
        class="flex items-center gap-4 rounded-box bg-base-100 p-3 shadow"
      >
        <img
          :src="friend.avatar"
          :alt="friend.name"
          class="h-12 w-12 rounded-full"
        />
        <div class="flex-1">
          <div class="font-semibold">{{ friend.name }}</div>
          <div class="text-sm opacity-60">{{ friend.status }}</div>
        </div>
        <button class="btn btn-sm">Message</button>
      </li>
    </ul>
  </div>
</template>
