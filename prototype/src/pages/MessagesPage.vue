<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Message {
  from: 'me' | 'them'
  text: string
}

const messages = ref<Message[]>([])

onMounted(async () => {
  try {
    const res = await fetch('/posts.json')
    if (res.ok) {
      const data = await res.json()
      messages.value = data.messages
    }
  } catch (err) {
    console.error('Failed to load messages', err)
  }
})

const newMsg = ref('')

function send() {
  if (!newMsg.value) return
  messages.value.push({ from: 'me', text: newMsg.value })
  newMsg.value = ''
}
</script>

<template>
  <div class="p-4 flex flex-col gap-4 h-full">
    <div class="flex-1 overflow-y-auto space-y-2">
      <div
        v-for="(msg, i) in messages"
        :key="i"
        class="chat"
        :class="msg.from === 'me' ? 'chat-end' : 'chat-start'"
      >
        <div class="chat-bubble">{{ msg.text }}</div>
      </div>
    </div>
    <div class="join">
      <input
        v-model="newMsg"
        type="text"
        placeholder="Type a message"
        class="input input-bordered join-item flex-1"
        @keyup.enter="send"
      />
      <button class="btn join-item" @click="send">Send</button>
    </div>
  </div>
</template>
