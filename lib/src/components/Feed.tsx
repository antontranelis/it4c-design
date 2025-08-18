import { useState, useEffect } from 'react'
import Post from './Post'
import { Post as PostType } from '../types'

export default function Feed() {
  const [posts, setPosts] = useState<PostType[]>([])

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
      {posts.map((post, index) => (
        <Post 
          key={`${post.user.id}-${index}`} 
          post={post} 
        />
      ))}
      {posts.length === 0 && (
        <div className="col-span-full text-center py-8 text-gray-500">
          No posts yet. Start sharing your moments!
        </div>
      )}
    </div>
  )
}