/* eslint-disable react/prop-types */
import React, { useState } from 'react'

// eslint-disable-next-line react/prop-types
function Comment({ comment }) {
  const [replies, setReplies] = useState([])
  const [replyContent, setReplyContent] = useState('')
  const [showReplyForm, setShowReplyForm] = useState(false)
  const day = new Date()

  const handleReplySubmit = (e) => {
    e.preventDefault()

    const newReply = {
      comment_id: replies.length + 1,
      user: 'Ẩn Danh', // Thay đổi tên người dùng tại đây
      content: replyContent,
      date: `${day.getDate()}/${day.getMonth() + 1}/${day.getFullYear()}`
    }

    setReplies([...replies, newReply])
    setReplyContent('')
    setShowReplyForm(false)
  }

  const toggleReplyForm = () => {
    setShowReplyForm(!showReplyForm)
  }

  return (
    <div className='max-w-4xl mx-auto px-4'>
      <div className='flex items-center'></div>
      <article className='p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900'>
        <footer className='flex justify-between items-center mb-2'>
          <div className='flex items-center'>
            <p className='inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white'>
              <img
                className='mr-2 w-6 h-6 rounded-full'
                src='https://flowbite.com/docs/images/people/profile-picture-2.jpg'
                alt='Michael Gough'
              />
              {comment.user}
            </p>
            <p className='text-sm text-gray-600 dark:text-gray-400'>
              <time dateTime='2022-02-08' title='February 8th, 2022'>
                {comment.date}
              </time>
            </p>
          </div>
          <button
            id='dropdownComment1Button'
            data-dropdown-toggle='dropdownComment1'
            className='inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            type='button'
          >
            <svg
              className='w-5 h-5'
              aria-hidden='true'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z'></path>
            </svg>
            <span className='sr-only'>Comment settings</span>
          </button>
          {/* Dropdown menu */}
        </footer>
        <p className='text-gray-500 dark:text-gray-400'> {comment.content}.</p>
        <div className='text-blue-400 ml-5'>
          {replies.map((reply) => (
            <Comment key={reply.comment_id} comment={reply} />
          ))}
        </div>
        <div className='flex items-center mt-4 space-x-4'>
          <button
            onClick={toggleReplyForm}
            type='button'
            className='flex items-center text-sm text-blue-500 hover:underline dark:text-white'
          >
            {showReplyForm ? (
              'Cancel Reply'
            ) : (
              <svg
                aria-hidden='true'
                className='mr-1 w-4 h-4'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
                />
              </svg>
            )}
          </button>
        </div>
      </article>
      {showReplyForm && (
        <form className='reply-form mt-4' onSubmit={handleReplySubmit}>
          <div className='flex items-center  py-2 px-4 mb-4'>
            <textarea
              id='reply'
              placeholder='Add a reply'
              rows={6}
              required
              value={replyContent}
              onChange={(e) => setReplyContent(e.target.value)}
              className='px-0 w-full border border-gray-300 rounded'
            />
          </div>
          <button type='submit' className='py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600'>
            Add Reply
          </button>
        </form>
      )}
    </div>
  )
}
export default Comment
