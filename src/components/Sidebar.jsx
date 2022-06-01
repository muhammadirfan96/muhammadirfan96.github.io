import {FcHome, FcGallery, FcServices, FcPositiveDynamic, FcSms, FcBusinessman} from 'react-icons/fc'
import Scroll from '../positioning/index'

const Sidebar = () => {

  return (
      <>
        <a href='#' className='flex hover:bg-green-50 rounded mb-1 h-8 p-2'>
            <FcHome className='text-xl inline' /> 
            <p className='text-lg inline self-center ml-2'>home</p>
        </a>      
        <a onClick={Scroll} href='#creations' className='flex hover:bg-green-50 rounded mb-1 h-8 p-2'>
            <FcPositiveDynamic className='text-xl inline' /> 
            <p className='text-lg inline self-center ml-2'>creations</p>
        </a>       
        <a onClick={Scroll} href='#technology' className='flex hover:bg-green-50 rounded mb-1 h-8 p-2'>
            <FcServices className='text-xl inline' /> 
            <p className='text-lg inline self-center ml-2'>technology</p>
        </a>    
        <a onClick={Scroll} href='#gallery' className='flex hover:bg-green-50 rounded mb-1 h-8 p-2'>
            <FcGallery className='text-xl inline' /> 
            <p className='text-lg inline self-center ml-2'>gallery</p>
        </a>   
        <a onClick={Scroll} href='#contact' className='flex hover:bg-green-50 rounded mb-1 h-8 p-2'>
            <FcSms className='text-xl inline' /> 
            <p className='text-lg inline self-center ml-2'>contact</p>
        </a>     
        <a onClick={Scroll} href='#clients' className='flex hover:bg-green-50 rounded mb-1 h-8 p-2'>
            <FcBusinessman className='text-xl inline' /> 
            <p className='text-lg inline self-center ml-2'>clients</p>
        </a>
      </>
  )
}

export default Sidebar