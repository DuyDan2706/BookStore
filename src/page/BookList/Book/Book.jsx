/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'

export default function Book({ product }) {
  return (
    <div>
      <Link to={`/${product.id}`}>
        <div className='rounded-sm bg-white shadow transition-transform duration-100 hover:translate-y-[-0.0625rem] hover:shadow-sm'>
          <div className='relative w-full pt-[100%]'>
            <img className='absolute left-0 top-0 h-full w-full bg-white object-cover' src={product.img} alt='anh1' />
          </div>
          <div className='overflow-hidden p-2'>
            <div className='min-h-[1.75rem] text-sm line-clamp-2'>{product.title}</div>
            <div className='mt-3 flex items-center '>
              <div className='max-w-[50%] text-gray-500'>
                <span className='text-xl'>₫</span>
                <span className='text-xl'>{product.price}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
