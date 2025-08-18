import { useAppContext } from '../contexts/AppContext'

export default function FriendsPage() {
  const { getCurrentUserFriends, currentUser } = useAppContext()
  const friends = getCurrentUserFriends()

  if (!currentUser) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-lg">Loading...</div>
      </div>
    )
  }

  return (
    <div className="flex justify-center max-w-8xl w-full">
      <div className="max-w-6xl">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">
            {currentUser.name}'s Friends ({friends.length})
          </h1>
        </div>
        <ul className="space-y-2">
          {friends.map((friend) => (
            <li
              key={friend.id}
              className="flex items-center gap-4 rounded-box bg-base-100 p-3 shadow"
            >
              <img
                src={friend.avatar}
                alt={friend.name || friend.username}
                className="h-12 w-12 rounded-full"
              />
              <div className="flex-1">
                <div className="font-semibold">{friend.name || friend.username}</div>
                <div className="text-sm opacity-60">@{friend.username}</div>
                  {friend.bio && (
                  <div className="text-sm mt-1 text-gray-600">{friend.bio}</div>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <button className="btn btn-sm">Message</button>
              </div>
            </li>
          ))}
          {friends.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No friends yet. Start connecting with people!
            </div>
          )}
        </ul>
      </div>
    </div>
  )
}