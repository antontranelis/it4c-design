import { useState, useEffect } from 'react'
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, ClockIcon, EllipsisHorizontalIcon } from '@heroicons/react/20/solid'
import { CalendarDay } from '../types'

type Day = CalendarDay

export default function CalendarPage() {
  const [days, setDays] = useState<Day[]>([])
  const [selectedDay, setSelectedDay] = useState<Day | undefined>(undefined)
  const [showViewMenu, setShowViewMenu] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  useEffect(() => {
    const loadCalendarData = async () => {
      try {
        const baseUrl = (window as any).API_BASE_URL || ''
        const res = await fetch(`${baseUrl}/posts.json`)
        if (!res.ok) return

        const data = await res.json()
        const ev = Array.isArray(data.events) ? data.events : []

        let year: number, month: number
        if (ev.length > 0) {
          const [y, m] = ev[0].date.split('-').map((v: string) => parseInt(v, 10))
          year = y
          month = m - 1
        } else {
          const now = new Date()
          year = now.getFullYear()
          month = now.getMonth()
        }

        const firstOfMonth = new Date(year, month, 1)
        const offset = (firstOfMonth.getDay() + 6) % 7
        const startDate = new Date(year, month, 1 - offset)

        const arr: Day[] = []
        for (let i = 0; i < 42; i++) {
          const d = new Date(startDate)
          d.setDate(startDate.getDate() + i)
          const iso = d.toISOString().split('T')[0]
          const events = ev
            .filter((e: any) => e.date === iso)
            .map((e: any, idx: number) => ({
              id: idx + 1,
              name: e.title,
              time: '',
              datetime: `${e.date}T00:00`,
              href: '#',
            }))

          arr.push({
            date: iso,
            isCurrentMonth: d.getMonth() === month,
            isToday: iso === new Date().toISOString().split('T')[0],
            events,
          })
        }

        const firstEventDate = ev[0]?.date
        if (firstEventDate) {
          const d = arr.find((day) => day.date === firstEventDate)
          if (d) {
            d.isSelected = true
            setSelectedDay(d)
          }
        } else {
          setSelectedDay(arr.find((day) => day.isToday))
        }

        setDays(arr)
      } catch (err) {
        console.error('Failed to load events', err)
      }
    }

    loadCalendarData()
  }, [])

  return (
    <div className="flex justify-center w-full p-4">
      <div className="lg:flex lg:h-full lg:flex-col max-w-6xl">
        <header className="flex items-center justify-between border-b border-gray-200 px-6 py-4 lg:flex-none">
          <h1 className="text-base font-semibold text-gray-900">
            <time dateTime="2022-01">January 2022</time>
          </h1>
          <div className="flex items-center">
            <div className="relative flex items-center rounded-md bg-white shadow-sm md:items-stretch">
              <button
                type="button"
                className="flex h-9 w-12 items-center justify-center rounded-l-md border-y border-l border-gray-300 pr-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pr-0 md:hover:bg-gray-50"
              >
                <span className="sr-only">Previous month</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="hidden border-y border-gray-300 px-3.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:relative md:block"
              >
                Today
              </button>
              <span className="relative -mx-px h-5 w-px bg-gray-300 md:hidden" />
              <button
                type="button"
                className="flex h-9 w-12 items-center justify-center rounded-r-md border-y border-r border-gray-300 pl-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pl-0 md:hover:bg-gray-50"
              >
                <span className="sr-only">Next month</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden md:ml-4 md:flex md:items-center">
              <div className="relative">
                <button
                  type="button"
                  className="flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
                  onClick={() => setShowViewMenu(!showViewMenu)}
                >
                  Month view
                  <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                </button>
                {showViewMenu && (
                  <div className="absolute right-0 z-10 mt-3 w-36 origin-top-right overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black/5">
                    <div className="py-1">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Day view</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Week view</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Month view</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Year view</a>
                    </div>
                  </div>
                )}
              </div>
              <div className="ml-6 h-6 w-px bg-gray-300" />
              <button
                type="button"
                className="ml-6 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Add event
              </button>
            </div>
            <div className="relative ml-6 md:hidden">
              <button
                className="-mx-2 flex items-center rounded-full border border-transparent p-2 text-gray-400 hover:text-gray-500"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                <span className="sr-only">Open menu</span>
                <EllipsisHorizontalIcon className="h-5 w-5" aria-hidden="true" />
              </button>
              {showMobileMenu && (
                <div className="absolute right-0 z-10 mt-3 w-36 origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black/5">
                  <div className="py-1">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Create event</a>
                  </div>
                  <div className="py-1">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Go to today</a>
                  </div>
                  <div className="py-1">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Day view</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Week view</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Month view</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Year view</a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>
        <div className="shadow-sm ring-1 ring-black/5 lg:flex lg:flex-auto lg:flex-col">
          <div className="grid grid-cols-7 gap-px border-b border-gray-300 bg-gray-200 text-center text-xs font-semibold text-gray-700 lg:flex-none">
            <div className="bg-white py-2">M<span className="sr-only sm:not-sr-only">on</span></div>
            <div className="bg-white py-2">T<span className="sr-only sm:not-sr-only">ue</span></div>
            <div className="bg-white py-2">W<span className="sr-only sm:not-sr-only">ed</span></div>
            <div className="bg-white py-2">T<span className="sr-only sm:not-sr-only">hu</span></div>
            <div className="bg-white py-2">F<span className="sr-only sm:not-sr-only">ri</span></div>
            <div className="bg-white py-2">S<span className="sr-only sm:not-sr-only">at</span></div>
            <div className="bg-white py-2">S<span className="sr-only sm:not-sr-only">un</span></div>
          </div>
          <div className="flex bg-gray-200 text-xs text-gray-700 lg:flex-auto">
            <div className="hidden w-full lg:grid lg:grid-cols-7 lg:grid-rows-6 lg:gap-px">
              {days.map((day) => (
                <div
                  key={day.date}
                  className={`${day.isCurrentMonth ? 'bg-white' : 'bg-gray-50 text-gray-500'} relative px-3 py-2`}
                >
                  <time
                    dateTime={day.date}
                    className={day.isToday ? 'flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white' : undefined}
                  >
                    {day.date.split('-').pop()?.replace(/^0/, '')}
                  </time>
                  {day.events.length > 0 && (
                    <ol className="mt-2">
                      {day.events.slice(0, 2).map((event) => (
                        <li key={event.id}>
                          <a href={event.href} className="group flex">
                            <p className="flex-auto truncate font-medium text-gray-900 group-hover:text-indigo-600">
                              {event.name}
                            </p>
                            <time
                              dateTime={event.datetime}
                              className="ml-3 hidden flex-none text-gray-500 group-hover:text-indigo-600 xl:block"
                            >
                              {event.time}
                            </time>
                          </a>
                        </li>
                      ))}
                      {day.events.length > 2 && (
                        <li className="text-gray-500">+ {day.events.length - 2} more</li>
                      )}
                    </ol>
                  )}
                </div>
              ))}
            </div>
            <div className="isolate grid w-full grid-cols-7 grid-rows-6 gap-px lg:hidden">
              {days.map((day) => (
                <button
                  key={day.date}
                  type="button"
                  className={`${day.isCurrentMonth ? 'bg-white' : 'bg-gray-50'} ${
                    (day.isSelected || day.isToday) && 'font-semibold'
                  } ${day.isSelected && 'text-white'} ${
                    !day.isSelected && day.isToday && 'text-indigo-600'
                  } ${
                    !day.isSelected && day.isCurrentMonth && !day.isToday && 'text-gray-900'
                  } ${
                    !day.isSelected && !day.isCurrentMonth && !day.isToday && 'text-gray-500'
                  } flex h-14 flex-col px-3 py-2 hover:bg-gray-100 focus:z-10`}
                >
                  <time
                    dateTime={day.date}
                    className={`${day.isSelected && 'flex h-6 w-6 items-center justify-center rounded-full'} ${
                      day.isSelected && day.isToday && 'bg-indigo-600'
                    } ${day.isSelected && !day.isToday && 'bg-gray-900'} ml-auto`}
                  >
                    {day.date.split('-').pop()?.replace(/^0/, '')}
                  </time>
                  <span className="sr-only">{day.events.length} events</span>
                  {day.events.length > 0 && (
                    <span className="-mx-0.5 mt-auto flex flex-wrap-reverse">
                      {day.events.map((event) => (
                        <span
                          key={event.id}
                          className="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"
                        />
                      ))}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
        {selectedDay?.events && selectedDay.events.length > 0 && (
          <div className="px-4 py-10 sm:px-6 lg:hidden">
            <ol className="divide-y divide-gray-100 overflow-hidden rounded-lg bg-white text-sm shadow-sm ring-1 ring-black/5">
              {selectedDay.events.map((event) => (
                <li
                  key={event.id}
                  className="group flex p-4 pr-6 focus-within:bg-gray-50 hover:bg-gray-50"
                >
                  <div className="flex-auto">
                    <p className="font-semibold text-gray-900">{event.name}</p>
                    <time dateTime={event.datetime} className="mt-2 flex items-center text-gray-700">
                      <ClockIcon className="mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                      {event.time}
                    </time>
                  </div>
                  <a
                    href={event.href}
                    className="ml-6 flex-none self-center rounded-md bg-white px-3 py-2 font-semibold text-gray-900 opacity-0 shadow-sm ring-1 ring-gray-300 ring-inset group-hover:opacity-100 hover:ring-gray-400 focus:opacity-100"
                  >
                    Edit<span className="sr-only">, {event.name}</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </div>
  )
}