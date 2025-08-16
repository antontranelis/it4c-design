import { useState, useEffect } from 'react'
import { HeartIcon, ChatBubbleLeftRightIcon, HandThumbUpIcon, EyeIcon } from '@heroicons/react/24/outline'

interface Post {
  banner: string
  title: string
  text: string
  user: {
    username: string
    profile: string
  }
}

export default function Feed() {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const baseUrl = (window as any).API_BASE_URL || ''
        const res = await fetch(`${baseUrl}/posts.json`)
        if (res.ok) {
          const data = await res.json()
          setPosts(data.posts ?? data)
        } else {
          console.error('Failed to load posts')
        }
      } catch (err) {
        console.error('Failed to load posts', err)
      }
    }

    fetchPosts()
  }, [])

  return (
    <div id="posts-container" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl w-full">
      {posts.map((post) => (
        <div key={post.title} className="card bg-base-100 w-full shadow-sm">
          <figure>
            <img src={post.banner} alt={post.title} />
          </figure>
          <div className="card-body">
            <div className="flex items-center gap-2">
              <img src={post.user.profile} className="h-8 w-8 rounded-full" alt={post.user.username} />
              <div className="">{post.user.username}</div>
            </div>
            <h2 className="card-title">{post.title}</h2>
            <p>{post.text}</p>
            <div className="card-actions justify-center">
              <ul className="menu menu-horizontal">
                <li>
                  <a>
                    <HeartIcon className="size-6" />
                  </a>
                </li>
                <li>
                  <a>
                    <ChatBubbleLeftRightIcon className="size-6" />
                  </a>
                </li>
                <div className="indicator">
                  <span className="indicator-item badge badge-secondary">12</span>
                  <li>
                    <a>
                      <HandThumbUpIcon className="size-6" />
                    </a>
                  </li>
                </div>
                <div className="indicator">
                  <span className="indicator-item badge badge-secondary">4</span>
                  <li>
                    <a>
                      <EyeIcon className="size-6" />
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}