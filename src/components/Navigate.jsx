import {FcHome, FcGallery, FcServices, FcPositiveDynamic, FcSms, FcBusinessman} from 'react-icons/fc'

const Navigate = () => {
    const setnavMobile = () => {
        const navMobile = document.querySelector('#navMobile')
        const first = document.querySelector('#first')
        const second = document.querySelector('#second')
        navMobile.classList.toggle('mb-12')
        first.classList.toggle('translate-x-2')
        second.classList.toggle('-translate-x-2')
    }

  return (
    <>
        <button onClick={setnavMobile} className='absolute right-0 -top-6 bg-green-500 px-3 rounded-tl-lg'>
            <span id='first' className='text-white font-extrabold inline-block rotate-45 mr-1 transition delay-500'>|</span>
            <span id='second' className='font-extrabold inline-block -rotate-45 ml-1 transition delay-500'>|</span>
        </button>
        <div id='navMobile' className='grid grid-cols-4 gap-2 p-2 h-14 transition-all'>
            <div className='bg-slate-200 rounded-md p-1 '>
                <FcHome className='text-lg mx-auto' />
                <p className='text-center text-xs'>home</p>
            </div>
            <div className='bg-slate-200 rounded-md p-1 '>
                <FcPositiveDynamic className='text-lg mx-auto' />
                <p className='text-center text-xs'>karya</p>
            </div>
            <div className='bg-slate-200 rounded-md p-1 '>
                <FcServices className='text-lg mx-auto' />
                <p className='text-center text-xs'>technology</p>
            </div>
            <div className='bg-slate-200 rounded-md p-1 '>
                <FcGallery className='text-lg mx-auto' />
                <p className='text-center text-xs'>gallery</p>
            </div>
            <div className='bg-slate-200 rounded-md p-1 '>
                <FcSms className='text-lg mx-auto' />
                <p className='text-center text-xs'>contact</p>
            </div>
            <div className='bg-slate-200 rounded-md p-1 '>
                <FcBusinessman className='text-lg mx-auto' />
                <p className='text-center text-xs'>client</p>
            </div>
        </div>
    </>
  )
}

export default Navigate