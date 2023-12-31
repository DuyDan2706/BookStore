
export default function Header() {

  return (
    <div className='bg-blue-200 pb-5 pt-2 text-white'>
      <div className='mx-auto max-w-7xl py-4'>
        <div className='flex justify-end'>
          <div className='cursor-pointer flex items-center py-1 hover:text-gray-300'>
            <div className='flex-shrink-0 ml-6 mr-2 h-6 w-6'>
              <img
                src='https://firebasestorage.googleapis.com/v0/b/subscriptionmilk.appspot.com/o/img%2FTD%20(2).png?alt=media&token=14f58401-fd62-4b6a-bf73-b6dcde64d9ad&_gl=1*191ikvn*_ga*NDI1NTcxNTI2LjE2Njg0MzU3MDI.*_ga_CW55HF8NVT*MTY4NTkzMDYzOC40MC4xLjE2ODU5MzA2NjEuMC4wLjA'
                alt='avatar'
                className='h-full w-full rounded-full object-cover'
              />
            </div>
            <div className='text-black'>Duy Đan</div>
          </div>
        </div>
        <div className='mt-4 grid grid-cols-12 items-end gap-4'>
          <div className='col-span-2'>
            <img
              className='h-14 lg:h-14 object-contain'
              src='https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/logo/fahasa_logo.png'
              alt='dan111'
            />
          </div>
          <form className='col-span-9'>
            <div className='flex rounded-sm bg-white p-1'>
              <input
                type='text'
                name='Search'
                className='flex-grow border-none bg-transparent px-3 py-2 text-black outline-none'
                placeholder='Tìm kiếm sản phẩm mong muốn...'
              ></input>
              <button className='flex-shrink-0 bg-orange-500 px-6 py-2 hover:opacity-70'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  className='h-6 w-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
