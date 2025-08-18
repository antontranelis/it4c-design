import { useState } from 'react'

export default function SettingsPage() {
  const [notifications, setNotifications] = useState(true)
  const [darkMode, setDarkMode] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Settings saved:', { notifications, darkMode })
  }

  return (
    <div className="flex justify-center">
      <form className="space-y-4 max-w-md" onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Enable notifications</span>
            <input 
              type="checkbox" 
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
              className="toggle" 
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Dark mode</span>
            <input 
              type="checkbox" 
              checked={darkMode}
              onChange={(e) => setDarkMode(e.target.checked)}
              className="toggle" 
            />
          </label>
        </div>
        <button className="btn btn-primary btn-sm" type="submit">
          Save
        </button>
      </form>
    </div>
  )
}