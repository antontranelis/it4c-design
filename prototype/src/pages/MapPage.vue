<template>
  <div class="p-4 h-full flex flex-col">
    <div class="card flex-1 bg-base-100 shadow">
      <div id="map" class="h-full w-full rounded-box"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import maplibregl, { Map } from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'

let map: Map

interface Location {
  id: number
  coordinates: [number, number]
  title: string
  description: string
}

const locations: Location[] = [
  { id: 1, coordinates: [13.404954, 52.520008], title: 'Berlin', description: 'Berlin is the capital of Germany' },
  { id: 2, coordinates: [11.581981, 48.135125], title: 'Munich', description: 'Munich is a city in Bavaria' },
  { id: 3, coordinates: [9.993682, 53.551086], title: 'Hamburg', description: 'Hamburg is a port city' },
  { id: 4, coordinates: [8.682127, 50.110924], title: 'Frankfurt', description: 'Frankfurt is a financial hub' },
  { id: 5, coordinates: [6.960279, 50.937531], title: 'Cologne', description: 'Cologne is famous for its cathedral' }
]

const geojson = {
  type: 'FeatureCollection',
  features: locations.map((l) => ({
    type: 'Feature',
    properties: {
      id: l.id,
      title: l.title,
      description: l.description
    },
    geometry: {
      type: 'Point',
      coordinates: l.coordinates
    }
  }))
}

onMounted(() => {
  map = new maplibregl.Map({
    container: 'map',
    style: 'https://demotiles.maplibre.org/style.json',
    center: [10.451526, 51.165691],
    zoom: 5
  })

  map.addControl(new maplibregl.NavigationControl(), 'top-right')

  map.on('load', () => {
    map.addSource('places', {
      type: 'geojson',
      data: geojson as any,
      cluster: true,
      clusterMaxZoom: 14,
      clusterRadius: 50
    })

    map.addLayer({
      id: 'clusters',
      type: 'circle',
      source: 'places',
      filter: ['has', 'point_count'],
      paint: {
        'circle-color': '#3b82f6',
        'circle-radius': [
          'step',
          ['get', 'point_count'],
          15,
          10,
          20,
          30,
          25
        ]
      }
    })

    map.addLayer({
      id: 'cluster-count',
      type: 'symbol',
      source: 'places',
      filter: ['has', 'point_count'],
      layout: {
        'text-field': '{point_count_abbreviated}',
        'text-font': ['Open Sans Bold'],
        'text-size': 12
      },
      paint: {
        'text-color': '#ffffff'
      }
    })

    map.addLayer({
      id: 'unclustered-point',
      type: 'circle',
      source: 'places',
      filter: ['!', ['has', 'point_count']],
      paint: {
        'circle-color': '#f87171',
        'circle-radius': 8,
        'circle-stroke-width': 1,
        'circle-stroke-color': '#fff'
      }
    })
  })

  map.on('click', 'clusters', (e) => {
    const features = map.queryRenderedFeatures(e.point, { layers: ['clusters'] })
    const clusterId = (features[0].properties as any).cluster_id as number
    if (clusterId === undefined || clusterId === null) return
    ;(map.getSource('places') as maplibregl.GeoJSONSource).getClusterExpansionZoom(
      clusterId,
      (err, zoom) => {
        if (err || zoom == null) return
        map.easeTo({ center: (features[0].geometry as any).coordinates, zoom })
      }
    )
  })

  map.on('mouseenter', 'clusters', () => {
    map.getCanvas().style.cursor = 'pointer'
  })
  map.on('mouseleave', 'clusters', () => {
    map.getCanvas().style.cursor = ''
  })

  map.on('click', 'unclustered-point', (e) => {
    const coordinates = (e.features![0].geometry as any).coordinates.slice()
    const { title, description } = e.features![0].properties as any
    new maplibregl.Popup()
      .setLngLat(coordinates)
      .setHTML(`<strong>${title}</strong><br/>${description}`)
      .addTo(map)
  })

  map.on('mouseenter', 'unclustered-point', () => {
    map.getCanvas().style.cursor = 'pointer'
  })
  map.on('mouseleave', 'unclustered-point', () => {
    map.getCanvas().style.cursor = ''
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
