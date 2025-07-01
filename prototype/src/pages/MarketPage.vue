<script setup lang="ts">
interface Item {
  name: string
  price: string
  image: string
}

const items: Item[] = [
  {
    name: 'Mountain Bike',
    price: '$500',
    image: 'https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg'
  },
  {
    name: 'Coffee Maker',
    price: '$75',
    image: 'https://img.daisyui.com/images/stock/photo-1529626455594-4ff0802cfb7e.jpg'
  },
  {
    name: 'Headphones',
    price: '$120',
    image: 'https://img.daisyui.com/images/stock/photo-1508921912186-1d1a45ebb3c1.webp'
  }
]
</script>

<template>
  <div class="grid gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
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
