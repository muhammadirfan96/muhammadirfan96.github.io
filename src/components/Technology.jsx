import {CodeIgniter, Reactjs, Tailwindcss, Mongodb, Mysql, Expressjs, Bootsrtap, Nodejs } from './technologyIcons'

const Technology = () => {
  return (
    <>
        <p className='text-center text-3xl capitalize mb-2 font-vibes'>technology</p>
        <div className='flex justify-center gap-2'>
          <div className='text-3xl sm:text-4xl p-2 shadow-md rounded-md text-ci'>
            <CodeIgniter />
          </div>

          <div className='text-3xl sm:text-4xl p-2 shadow-md rounded-md text-mysql'>
            <Mysql />
          </div>

          <div className='text-3xl sm:text-4xl p-2 shadow-md rounded-md text-bs'>
            <Bootsrtap />
          </div>

          <div className='text-3xl sm:text-4xl p-2 shadow-md rounded-md text-mongodb'>
            <Mongodb />
          </div>
        </div>
        <div className='flex justify-center gap-2'>  
          <div className='text-3xl sm:text-4xl p-2 shadow-md rounded-md text-black'>
            <Expressjs />
          </div>

          <div className='text-3xl sm:text-4xl p-2 shadow-md rounded-md text-reactjs'>
            <Reactjs />
          </div>

          <div className='text-3xl sm:text-4xl p-2 shadow-md rounded-md text-nodejs'>
            <Nodejs />
          </div>

          <div className='text-3xl sm:text-4xl p-2 shadow-md rounded-md text-tailwind'>
            <Tailwindcss />
          </div>
        </div>

    </>
  )
}

export default Technology