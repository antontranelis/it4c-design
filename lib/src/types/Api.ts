import { Post } from './Post'
import { Group } from './Group'
import { Item } from './Item'
import { CalendarEvent } from './Calendar'
import { Message } from './Message'
import { User } from './User'
import { Location } from './Location'

export interface ApiData {
  posts: Post[]
  friends: User[]  // Keep for backwards compatibility
  users: User[]    // New main users array
  groups: Group[]
  items: Item[]
  events: CalendarEvent[]
  messages: Message[]
  currentUserId: string
  locations: Location[]
}