import { Link } from 'react-router-dom'
import { 
  HomeIcon, 
  MapIcon, 
  UsersIcon, 
  UserGroupIcon, 
  ShoppingBagIcon, 
  CalendarIcon 
} from '@heroicons/react/24/outline'

interface SidebarProps {
  open: boolean
}

export default function Sidebar({ open }: SidebarProps) {
  return (
    <div
      className={`h-full bg-base-100 z-30 shadow-lg overflow-hidden transition-[width] duration-300 ${
        open ? 'w-64' : 'w-0'
      }`}
    >
      {open && (
        <ul className="menu text-base-content min-h-full w-full p-4">
          <li>
            <Link to="/" className="flex items-center gap-2">
              <HomeIcon className="size-5" />
              Feed
            </Link>
          </li>
          <li>
            <Link to="/map" className="flex items-center gap-2">
              <MapIcon className="size-5" />
              Map
            </Link>
          </li>
          <li>
            <Link to="/friends" className="flex items-center gap-2">
              <UsersIcon className="size-5" />
              Friends
            </Link>
          </li>
          <li>
            <Link to="/groups" className="flex items-center gap-2">
              <UserGroupIcon className="size-5" />
              Groups
            </Link>
          </li>
          <li>
            <Link to="/market" className="flex items-center gap-2">
              <ShoppingBagIcon className="size-5" />
              Market
            </Link>
          </li>
          <li>
            <Link to="/calendar" className="flex items-center gap-2">
              <CalendarIcon className="size-5" />
              Calendar
            </Link>
          </li>
        </ul>
      )}
    </div>
  )
}