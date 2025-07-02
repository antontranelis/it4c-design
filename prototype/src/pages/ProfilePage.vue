<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface User {
  name: string
  bio: string
  avatar: string
}

const user = ref<User | null>(null)

onMounted(async () => {
  try {
    const res = await fetch('/posts.json')
    if (res.ok) {
      const data = await res.json()
      user.value = data.user
    }
  } catch (err) {
    console.error('Failed to load user', err)
  }
})

</script>

<template>
  <div class="flex justify-center">
    <div v-if="user" class="card w-full max-w-md bg-base-100 shadow">
      <figure class="px-10 pt-10">
        <img :src="user.avatar" :alt="user.name" class="rounded-full w-32" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{{ user.name }}</h2>
        <p>{{ user.bio }}</p>
        <div class="card-actions">
          <button class="btn btn-sm">Follow</button>
        </div>
      </div>
    </div>
  </div>
</template>
