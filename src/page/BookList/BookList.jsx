import React, { useState } from 'react'
import Book from './Book/Book'
import BookData from '../../Data/BookData.json'
export default function BookList() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 8

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentBooks = BookData.slice(indexOfFirstItem, indexOfLastItem)

  const totalPages = Math.ceil(BookData.length / itemsPerPage)

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div className='bg-white py-6'>
      <div className='mx-auto max-w-7xl py-4'>
        <div className='col-start-2 col-span-4'>
          <div className='col-span-9'>
            <div className='mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4'>
              {currentBooks.map((book) => (
                <div className='col-span-1' key={book.id}>
                  <Book product={book} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center mt-4'>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-3 py-2 mx-1 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  )
}
