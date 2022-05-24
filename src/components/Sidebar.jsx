import {FcHome, FcGallery, FcServices, FcPositiveDynamic, FcSms, FcBusinessman} from 'react-icons/fc'

const Sidebar = () => {
  return (
      <>
        <a className='flex hover:bg-green-50 rounded mb-1 h-8 p-2'>
            <FcHome className='text-xl inline' /> 
            <p className='text-lg inline self-center ml-2'>home</p>
        </a>      
        <a className='flex hover:bg-green-50 rounded mb-1 h-8 p-2'>
            <FcPositiveDynamic className='text-xl inline' /> 
            <p className='text-lg inline self-center ml-2'>karya</p>
        </a>       
        <a className='flex hover:bg-green-50 rounded mb-1 h-8 p-2'>
            <FcServices className='text-xl inline' /> 
            <p className='text-lg inline self-center ml-2'>technology</p>
        </a>    
        <a className='flex hover:bg-green-50 rounded mb-1 h-8 p-2'>
            <FcGallery className='text-xl inline' /> 
            <p className='text-lg inline self-center ml-2'>gallery</p>
        </a>   
        <a className='flex hover:bg-green-50 rounded mb-1 h-8 p-2'>
            <FcSms className='text-xl inline' /> 
            <p className='text-lg inline self-center ml-2'>contact</p>
        </a>     
        <a className='flex hover:bg-green-50 rounded mb-1 h-8 p-2'>
            <FcBusinessman className='text-xl inline' /> 
            <p className='text-lg inline self-center ml-2'>client</p>
        </a>
      </>
  )
}

export default Sidebar