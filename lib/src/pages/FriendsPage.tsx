import { useState, useEffect } from 'react'

interface Friend {
  name: string
  avatar: string
  status: string
}

export default function FriendsPage() {
  const [friends, setFriends] = useState<Friend[]>([])

  useEffect(() => {
    const loadFriends = async () => {
      try {
        const baseUrl = (window as any).API_BASE_URL || ''
        const res = await fetch(`${baseUrl}/posts.json`)
        if (res.ok) {
          const data = await res.json()
          setFriends(data.friends || [])
        }
      } catch (err) {
        console.error('Failed to load friends', err)
      }
    }

    loadFriends()
  }, [])

  return (
    <div className="flex justify-center max-w-8xl w-full">
      <div className="max-w-6xl">
        <ul className="space-y-2">
          {friends.map((friend) => (
            <li
              key={friend.name}
              className="flex items-center gap-4 rounded-box bg-base-100 p-3 shadow"
            >
              <img
                src={friend.avatar}
                alt={friend.name}
                className="h-12 w-12 rounded-full"
              />
              <div className="flex-1">
                <div className="font-semibold">{friend.name}</div>
                <div className="text-sm opacity-60">{friend.status}</div>
              </div>
              <button className="btn btn-sm">Message</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}