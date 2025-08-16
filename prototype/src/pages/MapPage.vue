<template>
  <div class="h-full flex flex-col">
    <div class="card flex-1 bg-base-100 shadow">
      <div id="map" class="h-full w-full rounded-box"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import maplibregl, { Map } from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'

let map: Map

interface Location {
  id: number
  coordinates: [number, number]
  title: string
  description: string
}

const locations = ref<Location[]>([])

onMounted(async () => {
  // --- dein Fetch bleibt gleich ---
  try {
    const res = await fetch('/posts.json')
    if (res.ok) {
      const data = await res.json()
      locations.value = data.locations
    }
  } catch (err) {
    console.error('Failed to load locations', err)
  }

  map = new maplibregl.Map({
    container: 'map',
    style: 'https://api.maptiler.com/maps/basic-v2/style.json?key=SD4r2w2iq45jOTGJi0lm',
    center: [10.451526, 51.165691],
    zoom: 5
  })

  map.addControl(new maplibregl.NavigationControl(), 'top-right')

  map.on('load', () => {
    // Entferne Source und Layer für Clustering und Circles
    // -----------------------------------------------
    // map.addSource('places', { … })
    // map.addLayer({ id: 'clusters', … })
    // map.addLayer({ id: 'cluster-count', … })
    // map.addLayer({ id: 'unclustered-point', … })

    // Stattdessen: pro Location einen Marker anlegen
    locations.value.forEach((loc) => {
      // Optional: ein eigenes Icon-Element erstellen
      // const el = document.createElement('div')
      // el.className = 'marker'
      // el.style.backgroundImage = 'url(/marker-icon.png)'
      // el.style.width = '32px'; el.style.height = '32px'

      new maplibregl.Marker(/* el */)          // ohne Argument: Standard-Marker
        .setLngLat(loc.coordinates)
        .setPopup(
          new maplibregl.Popup({ offset: 25 })
            .setHTML(`<strong>${loc.title}</strong><p>${loc.description}</p>`)
        )
        .addTo(map)
    })

    map.on('mouseenter', 'clusters', () => {
      map.getCanvas().style.cursor = 'pointer'
    })
    map.on('mouseleave', 'clusters', () => {
      map.getCanvas().style.cursor = ''
    })
    map.on('mouseenter', 'unclustered-point', () => {
      map.getCanvas().style.cursor = 'pointer'
    })
    map.on('mouseleave', 'unclustered-point', () => {
      map.getCanvas().style.cursor = ''
    })
  })
})

onUnmounted(() => {
  if (map) {
    map.remove()
  }
})
</script>

<style scoped>
#map {
  min-height: 400px;
}
</style>
