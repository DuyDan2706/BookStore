/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable prettier/prettier */
import React from 'react'
import { useParams, NavLink } from 'react-router-dom'
import BookData from '../../Data/BookData.json'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Typography from '@mui/material/Typography'
import CommentSection from '../Comment/Comment'


export default function BookDetail() {
  const { id } = useParams()

  
  const book = BookData.find((item) => item.id === id)
  console.log('dan', book)
  return (
    <div className='bg-white py-6'>
      <div className='bg-white p-4 '>
        <div className='mx-auto max-w-7xl py-4'>
          <div className=' ml-2 -mt-2'>
            <Breadcrumbs className='mx-4 ' aria-label='breadcrumb'>
              <NavLink to='/' className='hover:underline'>
                Sách
              </NavLink>
              <Typography className='text-sm' color='text.primary'>
                Chi tiết sách
              </Typography>
            </Breadcrumbs>
          </div>
          <div className=' grid grid-cols-12 gap-9'>
            <div className='col-span-5'>
              <div className='relative w-full pt-[100%] shadow'>
                <img className='absolute left-0 top-0 h-full w-full bg-white object-cover' src={book.img} alt='dan' />
              </div>
            </div>
            <div className='col-span-7'>
              <h1 className='text-4xl font-medium uppercase '>{book.title}</h1>
              <div className='mt-8 grid grid-cols-2 items-center '>
                <div>
                  <span className='text-sm '>Tác giả:</span>
                  <span className='text-blue-400 mx-2'>{book.author}</span>
                </div>

                <div>
                  <span>Ngày xuất bản:</span>
                  <span className='text-blue-400 mx-2'>{book.publishedDate}</span>
                </div>
              </div>
              <div className='mt-8 flex items-center px-5 py-4'>
                <div className='ml-3 text-4xl font-medium text-orange-500'>₫{book.price}</div>
              </div>
              <div className='mt-8'>
                <div className=' bg-white'>
                  <div className=' p-4 capitalize text-slate-700 text-2xl'>Mô tả sản phẩm</div>
                  <div className='mx-4 mb-4 text-sm leading-loose'>
                    <span>{book.description}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-8 flex items-center px-5 py-2 '>
            <h1 className='text-4xl'>ĐÁNH GIÁ SẢN PHẨM</h1>
          </div>
          <CommentSection />
        </div>
      </div>
    </div>
  )
}
