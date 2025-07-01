<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Post {
  banner: string
  title: string
  text: string
  user: {
    username: string
    profile: string
  }
}

const posts = ref<Post[]>([])

onMounted(async () => {
  try {
    const res = await fetch('/posts.json')
    if (res.ok) {
      posts.value = await res.json()
    } else {
      console.error('Failed to load posts')
    }
  } catch (err) {
    console.error('Failed to load posts', err)
  }
})
</script>

<template>
  <div id="posts-container" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <div v-for="post in posts" :key="post.title" class="card bg-base-100 w-full shadow-sm">
      <figure>
        <img :src="post.banner" :alt="post.title" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{{ post.title }}</h2>
        <p>{{ post.text }}</p>
        <div class="card-actions justify-end">
          <div class="flex items-center gap-2">
            <img :src="post.user.profile" class="h-8 w-8 rounded-full" :alt="post.user.username" />
            <div class="badge badge-outline">{{ post.user.username }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
