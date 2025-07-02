<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Group {
  name: string
  description: string
  banner: string
}

const groups = ref<Group[]>([])

onMounted(async () => {
  try {
    const res = await fetch('/posts.json')
    if (res.ok) {
      const data = await res.json()
      groups.value = data.groups
    }
  } catch (err) {
    console.error('Failed to load groups', err)
  }
})

</script>

<template>
  <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    <div
      v-for="group in groups"
      :key="group.name"
      class="card bg-base-100 shadow-sm"
    >
      <figure>
        <img :src="group.banner" :alt="group.name" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{{ group.name }}</h2>
        <p>{{ group.description }}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-sm">Join</button>
        </div>
      </div>
    </div>
  </div>
</template>
