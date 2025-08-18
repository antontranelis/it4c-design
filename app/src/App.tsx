import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {
  Navbar,
  Sidebar,
  HomePage,
  MapPage,
  FriendsPage,
  GroupsPage,
  MarketPage,
  CalendarPage,
  ProfilePage,
  SettingsPage,
  MessagesPage,
  AppProvider
} from '@it4c-design/components'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const basename = import.meta.env.PROD ? '/it4c-design/app' : ''

  return (
    <AppProvider>
      <Router basename={basename}>
        <div className="flex h-screen overflow-hidden">
          <div className="flex flex-col flex-1 overflow-hidden">
            <Navbar onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
            <div className="flex h-full">
              <Sidebar open={sidebarOpen} />
              <div className="flex-1 bg-base-200 transition-all duration-300 overflow-auto p-4">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/map" element={<MapPage />} />
                  <Route path="/friends" element={<FriendsPage />} />
                  <Route path="/groups" element={<GroupsPage />} />
                  <Route path="/market" element={<MarketPage />} />
                  <Route path="/calendar" element={<CalendarPage />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/settings" element={<SettingsPage />} />
                  <Route path="/messages" element={<MessagesPage />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </AppProvider>
  )
}

export default App
