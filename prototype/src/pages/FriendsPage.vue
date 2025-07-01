<script setup lang="ts">
interface Friend {
  name: string
  avatar: string
  status: string
}

const friends: Friend[] = [
  {
    name: 'Alice',
    avatar: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp',
    status: 'online'
  },
  {
    name: 'Bob',
    avatar: 'https://img.daisyui.com/images/stock/photo-1506794778202-cad84cf45f1d.webp',
    status: 'offline'
  },
  {
    name: 'Charlie',
    avatar: 'https://img.daisyui.com/images/stock/photo-1529626455594-4ff0802cfb7e.webp',
    status: 'busy'
  }
]
</script>

<template>
  <div class="p-4">
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
