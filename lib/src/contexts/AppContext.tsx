import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { User } from '../types'

interface AppContextType {
  currentUser: User | null
  users: User[]
  getCurrentUserFriends: () => User[]
  getUserById: (id: string) => User | undefined
  setCurrentUserId: (id: string) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

interface AppProviderProps {
  children: ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  const [users, setUsers] = useState<User[]>([])
  const [currentUserId, setCurrentUserId] = useState<string>('current_user')
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  // Load data from API
  useEffect(() => {
    const loadData = async () => {
      try {
        const baseUrl = (window as any).API_BASE_URL || ''
        const url = `${baseUrl}/posts.json`
        
        const res = await fetch(url)
        
        if (res.ok) {
          const data = await res.json()
          setUsers(data.users || [])
          if (data.currentUserId) {
            setCurrentUserId(data.currentUserId)
          }
        }
      } catch (err) {
        console.error('AppProvider: Error loading data:', err)
      }
    }

    loadData()
  }, [])

  // Update current user when users or currentUserId changes
  useEffect(() => {
    if (users.length > 0) {
      const user = users.find(u => u.id === currentUserId)
      setCurrentUser(user || null)
    }
  }, [users, currentUserId])

  const getUserById = (id: string): User | undefined => {
    return users.find(user => user.id === id)
  }

  const getCurrentUserFriends = (): User[] => {
    if (!currentUser?.friends) return []
    
    // friends is array of user IDs, resolve to User objects
    return currentUser.friends
      .map(friendId => getUserById(friendId))
      .filter((user): user is User => user !== undefined)
  }

  const value: AppContextType = {
    currentUser,
    users,
    getCurrentUserFriends,
    getUserById,
    setCurrentUserId: (id: string) => setCurrentUserId(id)
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext(): AppContextType {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider')
  }
  return context
}