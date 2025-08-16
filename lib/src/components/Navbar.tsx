import { Link } from 'react-router-dom'
import { Bars3Icon, FunnelIcon, BellIcon, ChatBubbleLeftRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

interface NavbarProps {
  onToggleSidebar: () => void
}

export default function Navbar({ onToggleSidebar }: NavbarProps) {
  return (
    <div className="navbar bg-base-100 shadow-lg flex z-20">
      <div className="flex-none">
        <button className="btn btn-square btn-ghost" onClick={onToggleSidebar}>
          <Bars3Icon className="h-5 w-5" />
        </button>
      </div>
      <div className="flex-none">
        <Link to="/" className="btn btn-ghost text-xl mx-2">Design System</Link>
      </div>
      <div className="flex-1 gap-2 flex">
        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        <button className="btn btn-ghost btn-square">
          <div className="indicator">
            <FunnelIcon className="h-6 w-6" />
          </div>
        </button>
        <div className="flex-1"></div>
        <div className="dropdown dropdown-start">
          <button tabIndex={0} type="button" className="btn btn-ghost">
            <div className="flex flex-row items-center">
              DE
              <ChevronDownIcon className="size-4 ml-2" />
            </div>
          </button>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm">
            <li><a>DE</a></li>
            <li><a>EN</a></li>
          </ul>
        </div>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <BellIcon className="h-5 w-5" />
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
        <Link to="/messages" className="btn btn-ghost btn-circle">
          <div className="indicator">
            <ChatBubbleLeftRightIcon className="size-6" />
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </Link>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="Avatar" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-50">
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/settings">Settings</Link></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}