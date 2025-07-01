<script setup lang="ts">
interface Group {
  name: string
  description: string
  banner: string
}

const groups: Group[] = [
  {
    name: 'Hiking Club',
    description: 'Join us for weekly adventures in nature.',
    banner: 'https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg'
  },
  {
    name: 'Book Lovers',
    description: 'Discuss your favourite reads with others.',
    banner: 'https://img.daisyui.com/images/stock/photo-1523475496153-3d6cc2959a31.webp'
  },
  {
    name: 'Cooking Fans',
    description: 'Share and learn new recipes every week.',
    banner: 'https://img.daisyui.com/images/stock/photo-1508921912186-1d1a45ebb3c1.webp'
  }
]
</script>

<template>
  <div class="grid gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
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
