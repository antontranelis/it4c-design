<template>
  <div class="navbar bg-base-100 shadow-lg flex z-20">
    <div class="flex-none">
      <!-- Toggle button for sidebar -->
      <button class="btn btn-square btn-ghost" @click="emit('toggle-sidebar')">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-5 w-5 stroke-current">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
    <div class="flex-none">
      <RouterLink to="/" class="btn btn-ghost text-xl mx-2">IT4C</RouterLink>
    </div>
    <div class="flex-1 gap-2 flex">
      <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
      <button class="btn btn-ghost btn-square ">
        <div class="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 56 56">
            <path fill="currentColor" d="M45.956 7a4 4 0 0 1 3.149 6.467l-13.38 17.075a4 4 0 0 0-.851 2.467v11.223a4 4 0 0 1-5.314 3.778l-5.479-1.906a4 4 0 0 1-2.686-3.778v-9.293a4 4 0 0 0-.878-2.5L6.877 13.5A4 4 0 0 1 10 7zm-2.055 4H12.082a1 1 0 0 0-.78 1.625L23.64 28.032a8 8 0 0 1 1.749 4.68l.006.321v8.582a1 1 0 0 0 .672.944l3.478 1.21a1 1 0 0 0 1.329-.944v-9.816a8 8 0 0 1 1.502-4.666l.2-.268l12.112-15.458A1 1 0 0 0 43.9 11" />
          </svg>
        </div>
      </button>
      <div class="flex-1"></div>
      <div class="dropdown dropdown-start">
        <button tabindex="0" type="button" class="btn btn-ghost">
          <div class="flex flex-row items-center">
            DE
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" class="size-4 ml-2" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </button>
        <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm">
          <li><a>DE</a></li>
          <li><a>EN</a></li>
        </ul>
      </div>
      <button class="btn btn-ghost btn-circle">
        <div class="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span class="badge badge-xs badge-primary indicator-item"></span>
        </div>
      </button>
      <RouterLink to="/messages" class="btn btn-ghost btn-circle">
        <div class="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
          </svg>
          <span class="badge badge-xs badge-primary indicator-item"></span>
        </div>
      </RouterLink>
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img alt="Avatar" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-50">
          <li><RouterLink to="/profile">Profile</RouterLink></li>
          <li><RouterLink to="/settings">Settings</RouterLink></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
const emit = defineEmits(['toggle-sidebar'])
</script>
