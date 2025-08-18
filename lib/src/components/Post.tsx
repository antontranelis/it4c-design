import { useState } from 'react'
import { HeartIcon, ChatBubbleLeftRightIcon, HandThumbUpIcon, EyeIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartIconSolid, HandThumbUpIcon as HandThumbUpIconSolid } from '@heroicons/react/24/solid'
import { Post as PostType } from '../types'

interface PostProps {
  post: PostType
  className?: string
}

export default function Post({ post, className = '' }: PostProps) {
  const [liked, setLiked] = useState(false)
  const [thumbsUp, setThumbsUp] = useState(false)
  const [likes, setLikes] = useState(Math.floor(Math.random() * 50) + 1)
  const [comments, setComments] = useState(Math.floor(Math.random() * 20) + 1)
  const [views, setViews] = useState(Math.floor(Math.random() * 100) + 10)

  const handleLike = () => {
    setLiked(!liked)
    setLikes(prev => liked ? prev - 1 : prev + 1)
  }

  const handleThumbsUp = () => {
    setThumbsUp(!thumbsUp)
  }

  return (
    <div className={`card bg-base-100 w-full shadow-sm ${className}`}>
      <figure>
        <img src={post.banner} alt={post.title} />
      </figure>
      <div className="card-body">
        <div className="flex items-center gap-2 mb-2">
          <img 
            src={post.user.avatar} 
            className="h-8 w-8 rounded-full" 
            alt={post.user.name || post.user.username} 
          />
          <div className="flex flex-col">
            <div className="font-medium text-sm">
              {post.user.name || post.user.username}
            </div>
            {post.user.name && (
              <div className="text-xs opacity-60">@{post.user.username}</div>
            )}
          </div>
        </div>
        <h2 className="card-title text-base">{post.title}</h2>
        <p className="text-sm">{post.text}</p>
        <div className="card-actions justify-center mt-4">
          <ul className="menu menu-horizontal">
            <li>
              <a onClick={handleLike} className="tooltip" data-tip="Like">
                {liked ? (
                  <HeartIconSolid className="w-6 h-6 text-red-500" />
                ) : (
                  <HeartIcon className="w-6 h-6" />
                )}
              </a>
            </li>
            <li>
              <a className="tooltip" data-tip="Comment">
                <ChatBubbleLeftRightIcon className="w-6 h-6" />
              </a>
            </li>
            <div className="indicator">
              <span className="indicator-item badge badge-secondary text-xs">
                {likes}
              </span>
              <li>
                <a onClick={handleThumbsUp} className="tooltip" data-tip="Thumbs up">
                  {thumbsUp ? (
                    <HandThumbUpIconSolid className="w-6 h-6 text-blue-500" />
                  ) : (
                    <HandThumbUpIcon className="w-6 h-6" />
                  )}
                </a>
              </li>
            </div>
            <div className="indicator">
              <span className="indicator-item badge badge-secondary text-xs">
                {views}
              </span>
              <li>
                <a className="tooltip" data-tip="Views">
                  <EyeIcon className="w-6 h-6" />
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}