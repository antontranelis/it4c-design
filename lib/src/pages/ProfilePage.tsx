import { useState, useEffect } from 'react'
import { User } from '../types'

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const loadUser = async () => {
      try {
        const baseUrl = (window as any).API_BASE_URL || ''
        const res = await fetch(`${baseUrl}/posts.json`)
        if (res.ok) {
          const data = await res.json()
          setUser(data.user || null)
        }
      } catch (err) {
        console.error('Failed to load user', err)
      }
    }

    loadUser()
  }, [])

  return (
    <div className="flex justify-center  p-4">
      {user && (
        <div className="card w-full max-w-md bg-base-100 shadow">
          <figure className="px-10 pt-10">
            <img src={user.avatar} alt={user.name} className="rounded-full w-32" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{user.name}</h2>
            <p>{user.bio}</p>
            <div className="card-actions">
              <button className="btn btn-sm">Follow</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}