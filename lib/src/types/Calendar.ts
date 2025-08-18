export interface CalendarEvent {
  date: string
  title: string
  description: string
}

export interface CalendarDay {
  date: string
  isCurrentMonth?: boolean
  isToday?: boolean
  isSelected?: boolean
  events: CalendarEventWithId[]
}

export interface CalendarEventWithId {
  id: number
  name: string
  time: string
  datetime: string
  href: string
}