import React from 'react'

const Gallery = () => {
  return (
    <>
        <p className='text-center text-3xl capitalize mb-2 font-vibes'>gallery</p>
        <div className='grid justify-items-center sm:grid-cols-3 gap-2'>
            <div className='border-2 border-green-500 rounded-lg aspect-video w-[95%]'>
                <img src='' alt='img' />
            </div>
            <div className='border-2 border-green-500 rounded-lg aspect-video w-[95%]'>
                <img src='' alt='img' />
            </div>
            <div className='border-2 border-green-500 rounded-lg aspect-video w-[95%]'>
                <img src='' alt='img' />
            </div>
        </div>
    </>
  )
}

export default Gallery