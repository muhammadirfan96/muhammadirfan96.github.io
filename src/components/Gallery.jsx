import React from 'react'

const Gallery = () => {
  return (
    <>
        <p className='text-center text-3xl capitalize mb-2 font-vibes'>gallery</p>
        <div className='flex flex-col sm:flex-row sm:flex-wrap justify-center gap-2 px-2'>
            <div className='bg-green-100 border-2 border-green-500 rounded-lg aspect-video sm:w-[48%] md:w-[33%] lg:w-[24%]'>
                <img src='' alt='img' />
            </div>
            <div className='bg-green-100 border-2 border-green-500 rounded-lg aspect-video sm:w-[48%] md:w-[33%] lg:w-[24%]'>
                <img src='' alt='img' />
            </div>
            <div className='bg-green-100 border-2 border-green-500 rounded-lg aspect-video sm:w-[48%] md:w-[33%] lg:w-[24%]'>
                <img src='' alt='img' />
            </div>
        </div>
    </>
  )
}

export default Gallery