import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Set global API base URL for production
if (import.meta.env.PROD) {
  (window as any).API_BASE_URL = '/it4c-design/app'
} else {
  (window as any).API_BASE_URL = ''
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
