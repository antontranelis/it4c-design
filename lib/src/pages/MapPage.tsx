import { useEffect, useRef, useState } from 'react'
import * as maplibregl from 'maplibre-gl'
import { Map } from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import { Location } from '../types'

export default function MapPage() {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<Map | null>(null)
  const [locations, setLocations] = useState<Location[]>([])

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const baseUrl = (window as any).API_BASE_URL || ''
        const res = await fetch(`${baseUrl}/posts.json`)
        if (res.ok) {
          const data = await res.json()
          setLocations(data.locations || [])
        }
      } catch (err) {
        console.error('Failed to load locations', err)
      }
    }

    fetchLocations()
  }, [])

  useEffect(() => {
    if (!mapContainer.current) return

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: 'https://api.maptiler.com/maps/basic-v2/style.json?key=SD4r2w2iq45jOTGJi0lm',
      center: [10.451526, 51.165691],
      zoom: 5
    })

    if (map.current) {
      map.current.addControl(new maplibregl.NavigationControl(), 'top-right')

      map.current.on('load', () => {
        locations.forEach((loc) => {
          if (map.current) {
            new maplibregl.Marker()
              .setLngLat(loc.coordinates)
              .setPopup(
                new maplibregl.Popup({ offset: 25 })
                  .setHTML(`<strong>${loc.title}</strong><p>${loc.description}</p>`)
              )
              .addTo(map.current)
          }
        })
      })
    }

    return () => {
      if (map.current) {
        map.current.remove()
      }
    }
  }, [locations])

  return (
    <div className="h-full flex flex-col">
      <div className="card flex-1 bg-base-100 shadow">
        <div ref={mapContainer} className="h-full w-full rounded-box" style={{ minHeight: '400px' }}></div>
      </div>
    </div>
  )
}