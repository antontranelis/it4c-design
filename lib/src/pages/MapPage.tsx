export default function MapPage() {
  return (
    <div className="h-full flex flex-col">
        <iframe 
          src="https://dev.utopia-map.org?embedded=true"
          className="h-full w-full"
          style={{ minHeight: '400px', border: 'none' }}
          title="Interactive Map"
        />
    </div>
  )
}