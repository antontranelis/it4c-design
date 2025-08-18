export interface User {
  id?: string
  username: string
  name?: string 
  avatar: string
  bio?: string
  status?: 'online' | 'offline' | 'busy' | 'away'
  friends?: string[]  // Array of user IDs instead of nested User objects
}