import {FaWhatsappSquare, FaFacebookSquare, FaInstagramSquare, FaTwitterSquare} from 'react-icons/fa'

const Contact = () => {
  return (
    <>
        <p className='text-center text-3xl capitalize mb-2 font-vibes'>contact</p>
        <div className='grid md:grid-cols-2 gap-4 justify-items-center sm:w-[90%] md:w-[80%] lg:w-[75%] mx-auto'>
            <div className='bg-white p-4 shadow-lg rounded-lg w-full'>
                <p className='border-b-2 border-green-500 mb-3'>join with me</p>
                <form>
                    <label className='mb-3' htmlFor='username'>username</label>
                    <input className='mb-3 block bg-slate-100 py-1 rounded-md w-full' type='text' id='username' />
                    <label className='mb-3' htmlFor='email'>email</label>
                    <input className='mb-3 block bg-slate-100 py-1 rounded-md w-full' type='text' id='email' />
                    <button className='mb-3 bg-green-500 py-1 w-full rounded-md text-white' type='button'>join</button>
                </form>
            </div>
            <div className='p-4 w-full'>
                <p className='border-b-2 border-green-500 mb-3'>social media</p>
                <a className='flex group w-56 h-10 overflow-hidden'>
                    <FaWhatsappSquare className='text-green-400 text-4xl group-hover:text-[33px] transition-all inline' />
                    <p className='ml-2 self-center group-hover:text-lg transition-all inline'>082302173682</p>
                </a>
                <a className='flex group w-56 h-10 overflow-hidden'>
                    <FaInstagramSquare className='text-red-500 text-4xl group-hover:text-[33px] transition-all inline' />
                    <p className='ml-2 self-center group-hover:text-lg transition-all inline'>muhammadirfan121314</p>
                </a>
                <a className='flex group w-56 h-10'>
                    <FaFacebookSquare className='text-blue-700 text-4xl group-hover:text-[33px] transition-all inline' />
                    <p className='ml-2 self-center group-hover:text-lg transition-all inline'>Muhammad Irfan</p>
                </a>
                <a className='flex group w-56 h-10'>
                    <FaTwitterSquare className='text-sky-400 text-4xl group-hover:text-[33px] transition-all inline' />
                    <p className='ml-2 self-center group-hover:text-lg transition-all inline'>@irfan28063856</p>
                </a>
            </div>
        </div>
    </>
  )
}

export default Contact