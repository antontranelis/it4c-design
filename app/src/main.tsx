import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Set global API base URL for production
declare global {
  interface Window {
    API_BASE_URL: string
  }
}

if (import.meta.env.PROD) {
  window.API_BASE_URL = '/it4c-design/app'
} else {
  window.API_BASE_URL = ''
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
