import { useState, useEffect } from 'react'
import { Item } from '../types'

export default function MarketPage() {
  const [items, setItems] = useState<Item[]>([])

  useEffect(() => {
    const loadItems = async () => {
      try {
        const baseUrl = (window as any).API_BASE_URL || ''
        const res = await fetch(`${baseUrl}/posts.json`)
        if (res.ok) {
          const data = await res.json()
          setItems(data.items || [])
        }
      } catch (err) {
        console.error('Failed to load items', err)
      }
    }

    loadItems()
  }, [])

  return (
    <div className="flex justify-center w-full">
      <div className="grid gap-4 max-w-6xl sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.name}
            className="card bg-base-100 shadow-sm"
          >
            <figure>
              <img src={item.image} alt={item.name} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.name}</h2>
              <p className="text-primary font-semibold">{item.price}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-sm">Buy</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}