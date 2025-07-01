<script setup lang="ts">
const user = {
  name: 'John Doe',
  bio: 'Enthusiastic traveler and photographer.',
  avatar: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
}
</script>

<template>
  <div class="p-4 flex justify-center">
    <div class="card w-full max-w-md bg-base-100 shadow">
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
