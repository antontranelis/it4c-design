import { useState, useEffect } from 'react'

interface Message {
  from: 'me' | 'them'
  text: string
}

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [newMsg, setNewMsg] = useState('')

  useEffect(() => {
    const loadMessages = async () => {
      try {
        const baseUrl = (window as any).API_BASE_URL || ''
        const res = await fetch(`${baseUrl}/posts.json`)
        if (res.ok) {
          const data = await res.json()
          setMessages(data.messages || [])
        }
      } catch (err) {
        console.error('Failed to load messages', err)
      }
    }

    loadMessages()
  }, [])

  const handleSend = () => {
    if (!newMsg) return
    setMessages(prev => [...prev, { from: 'me', text: newMsg }])
    setNewMsg('')
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend()
    }
  }

  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="flex-1 overflow-y-auto space-y-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`chat ${msg.from === 'me' ? 'chat-end' : 'chat-start'}`}
          >
            <div className="chat-bubble">{msg.text}</div>
          </div>
        ))}
      </div>
      <div className="join">
        <input
          value={newMsg}
          onChange={(e) => setNewMsg(e.target.value)}
          type="text"
          placeholder="Type a message"
          className="input input-bordered join-item flex-1"
          onKeyPress={handleKeyPress}
        />
        <button className="btn join-item" onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  )
}