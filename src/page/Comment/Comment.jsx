import React, { useState } from 'react'
import Comment from './CommentForm'

function CommentSection() {
  const [commentContent, setCommentContent] = useState('')
  const [comments, setComments] = useState([
    {
      comment_id: 1,
      user: 'Ẩn Danh',
      content: 'This is the first comment.',
      date: '1/11/2023',
      userAvatar: 'https://flowbite.com/docs/images/people/profile-picture-2.jpg',
      username: 'Michael Gough',
      commentDate: 'February 8th, 2022',
      replies: []
    },

    {
      comment_id: 2,
      user: 'Ẩn Danh',
      content: 'I agree with Alice.',
      date: '04/05/2023',
      userAvatar: 'https://flowbite.com/docs/images/people/profile-picture-2.jpg',
      username: 'Alice',
      commentDate: 'April 5th, 2023',
      replies: []
    }
  ])

  const handleCommentSubmit = (e) => {
    e.preventDefault()

    const newComment = {
      comment_id: comments.length + 1,
      user: 'John', // Thay đổi tên người dùng tại đây
      content: commentContent,
      replies: []
    }

    setComments([...comments, newComment])
    setCommentContent('')
  }

  return (
    <div className='max-w-2xl mx-auto px-4'>
      <div>
        {comments.map((comment) => (
          <Comment key={comment.comment_id} comment={comment} />
        ))}
      </div>

      <form className='mb-6' onSubmit={handleCommentSubmit}>
        <div className='py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700'>
          <label htmlFor='comment' className='sr-only'>
            Your comment
          </label>
          <textarea
            id='comment'
            rows={6}
            className='px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800'
            placeholder='Write a comment...'
            required
            value={commentContent}
            onChange={(e) => setCommentContent(e.target.value)}
          />
        </div>
        <button type='submit' className='py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600'>
          comment
        </button>
      </form>
    </div>
  )
}

export default CommentSection
