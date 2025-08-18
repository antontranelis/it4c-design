import { useState, useEffect } from 'react'
import { Group } from '../types'

export default function GroupsPage() {
  const [groups, setGroups] = useState<Group[]>([])

  useEffect(() => {
    const loadGroups = async () => {
      try {
        const baseUrl = (window as any).API_BASE_URL || ''
        const res = await fetch(`${baseUrl}/posts.json`)
        if (res.ok) {
          const data = await res.json()
          setGroups(data.groups || [])
        }
      } catch (err) {
        console.error('Failed to load groups', err)
      }
    }

    loadGroups()
  }, [])

  return (
    <div className="flex justify-center w-full">
      <div className="max-w-6xl">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <div
              key={group.name}
              className="card bg-base-100 shadow-sm"
            >
              <figure>
                <img src={group.banner} alt={group.name} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{group.name}</h2>
                <p>{group.description}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-sm">Join</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}