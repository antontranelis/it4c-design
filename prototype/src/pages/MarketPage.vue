<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Item {
  name: string
  price: string
  image: string
}

const items = ref<Item[]>([])

onMounted(async () => {
  try {
    const res = await fetch('/posts.json')
    if (res.ok) {
      const data = await res.json()
      items.value = data.items
    }
  } catch (err) {
    console.error('Failed to load items', err)
  }
})

</script>

<template>
  <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    <div
      v-for="item in items"
      :key="item.name"
      class="card bg-base-100 shadow-sm"
    >
      <figure><img :src="item.image" :alt="item.name" /></figure>
      <div class="card-body">
        <h2 class="card-title">{{ item.name }}</h2>
        <p class="text-primary font-semibold">{{ item.price }}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-sm">Buy</button>
        </div>
      </div>
    </div>
  </div>
</template>
