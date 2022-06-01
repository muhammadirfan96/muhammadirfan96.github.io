import {FcHome, FcGallery, FcServices, FcPositiveDynamic, FcSms, FcBusinessman} from 'react-icons/fc'
import Scroll from '../positioning/index'

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
        <button onClick={setnavMobile} className='absolute right-0 -top-[28px] bg-green-500 pt-1 px-3 rounded-tl-lg'>
            <span id='first' className='border-2 border-white bg-white font-extrabold inline-block rotate-45 mr-[2px] transition delay-500 h-4'></span>
            <span id='second' className='border-2 border-black bg-black font-extrabold inline-block -rotate-45 ml-[2px] transition delay-500 h-4'></span>
        </button>
        <div id='navMobile' className='grid grid-cols-4 gap-2 p-2 h-14 transition-all'>
            <a href='#' className='bg-green-50 rounded-md p-1 '>
                <FcHome className='text-lg mx-auto' />
                <p className='text-center text-xs'>home</p>
            </a>
            <a onClick={Scroll} href='#creations' className='bg-green-50 rounded-md p-1 '>
                <FcPositiveDynamic className='text-lg mx-auto' />
                <p className='text-center text-xs'>creations</p>
            </a>
            <a onClick={Scroll} href='#technology' className='bg-green-50 rounded-md p-1 '>
                <FcServices className='text-lg mx-auto' />
                <p className='text-center text-xs'>technology</p>
            </a>
            <a onClick={Scroll} href='#gallery' className='bg-green-50 rounded-md p-1 '>
                <FcGallery className='text-lg mx-auto' />
                <p className='text-center text-xs'>gallery</p>
            </a>
            <a onClick={Scroll} href='#contact' className='bg-green-50 rounded-md p-1 '>
                <FcSms className='text-lg mx-auto' />
                <p className='text-center text-xs'>contact</p>
            </a>
            <a onClick={Scroll} href='#clients' className='bg-green-50 rounded-md p-1 '>
                <FcBusinessman className='text-lg mx-auto' />
                <p className='text-center text-xs'>clients</p>
            </a>
        </div>
    </>
  )
}

export default Navigate