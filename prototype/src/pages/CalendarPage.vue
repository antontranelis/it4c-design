<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Event {
  date: string
  title: string
  description: string
}

const events = ref<Event[]>([])

onMounted(async () => {
  try {
    const res = await fetch('/posts.json')
    if (res.ok) {
      const data = await res.json()
      events.value = data.events
    }
  } catch (err) {
    console.error('Failed to load events', err)
  }
})
</script>

<template>
  <div class="p-4 space-y-4">
    <div
      v-for="event in events"
      :key="event.date"
      class="collapse collapse-arrow bg-base-100 shadow"
    >
      <input type="checkbox" />
      <div class="collapse-title font-medium">
        {{ event.date }} - {{ event.title }}
      </div>
      <div class="collapse-content">
        <p>{{ event.description }}</p>
      </div>
    </div>
  </div>
</template>
