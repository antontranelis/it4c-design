<script setup lang="ts">
interface Event {
  date: string
  title: string
  description: string
}

const events: Event[] = [
  { date: '2024-06-10', title: 'Meetup', description: 'Local community gathering' },
  { date: '2024-06-15', title: 'Workshop', description: 'Vue.js basics' },
  { date: '2024-06-22', title: 'Hackathon', description: 'Build cool projects together' }
]
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
