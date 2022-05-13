import React from 'react'
import {CodeIgniter, Reactjs, Tailwindcss, Mongodb, Mysql, Expressjs, Bootsrtap, Nodejs } from './technologyIcons'

const Technology = () => {
  return (
    <>
        <p className='text-center text-3xl capitalize mb-2 font-vibes'>technology</p>
        <div className='flex justify-center grid-cols-4 gap-2'>
          <div className='text-[35px] p-2 border-gray-200 shadow-lg rounded-lg shadow- sm:text-[45px] md:text-[65px] lg:text-[75px] text-ci'>
            <CodeIgniter />
          </div>

          <div className='text-[35px] p-2 border-gray-200 shadow-lg rounded-lg shadow- sm:text-[45px] md:text-[65px] lg:text-[75px] text-mysql'>
            <Mysql />
          </div>

          <div className='text-[35px] p-2 border-gray-200 shadow-lg rounded-lg shadow- sm:text-[45px] md:text-[65px] lg:text-[75px] text-bs'>
            <Bootsrtap />
          </div>

          <div className='text-[35px] p-2 border-gray-200 shadow-lg rounded-lg shadow- sm:text-[45px] md:text-[65px] lg:text-[75px] text-mongodb'>
            <Mongodb />
          </div>
        </div>
        <div className='flex justify-center grid-cols-4 gap-2'>
          <div className='text-[35px] p-2 border-gray-200 shadow-lg rounded-lg shadow- sm:text-[45px] md:text-[65px] lg:text-[75px] text-black'>
            <Expressjs />
          </div>

          <div className='text-[35px] p-2 border-gray-200 shadow-lg rounded-lg shadow- sm:text-[45px] md:text-[65px] lg:text-[75px] text-reactjs'>
            <Reactjs />
          </div>

          <div className='text-[35px] p-2 border-gray-200 shadow-lg rounded-lg shadow- sm:text-[45px] md:text-[65px] lg:text-[75px] text-nodejs'>
            <Nodejs />
          </div>

          <div className='text-[35px] p-2 border-gray-200 shadow-lg rounded-lg sm:text-[45px] md:text-[65px] lg:text-[75px] text-tailwind'>
            <Tailwindcss />
          </div>
        </div>

    </>
  )
}

export default Technology