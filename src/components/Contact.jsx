import { useState } from 'react'
import { useForm } from 'react-hook-form'
import {FaWhatsappSquare, FaFacebookSquare, FaInstagramSquare, FaTwitterSquare} from 'react-icons/fa'
import { addClient, getClients } from '../services/clients'
import Client from './Client'

const Contact = () => {

    const [clients, setClients] = useState([])

    // pagination
    const [currentPage, setcurrentPage] = useState(1)
    const [itemsPerPage, setitemsPerPage] = useState(6)

    const [pageNumberLimit, setpageNumberLimit] = useState(3)
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(3)
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0)

    const handleClick = (e) => {
        setcurrentPage(Number(e.target.id))
    }

    const pages = []
    for (let i = 1; i <= Math.ceil(clients.length / itemsPerPage); i++) {
        pages.push(i)     
    }

    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = clients.slice(indexOfFirstItem, indexOfLastItem)

    const handleNextBtn = () => {
        setcurrentPage(currentPage + 1)
        if (currentPage + 1 > maxPageNumberLimit) {
            setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit)
            setminPageNumberLimit(minPageNumberLimit + pageNumberLimit)
        }
    }
    
    const handlePrevBtn = () => {
        setcurrentPage(currentPage - 1)
        if ((currentPage - 1) % pageNumberLimit == 0) {
            setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit)
            setminPageNumberLimit(minPageNumberLimit - pageNumberLimit)          
        }
    }

    const pagination = {pageNumberLimit, maxPageNumberLimit, minPageNumberLimit, handleNextBtn, handlePrevBtn}

    //end pagination

    const {register, handleSubmit, formState: {errors, isSubmitting}, reset} = useForm()
    const onSubmit = async data => {      
        await addClient(data).then(getClients(setClients))  
        reset()
    }
    
  return (
    <>
        <p className='text-center text-3xl capitalize mb-2 font-vibes'>contact</p>
        <div className='grid md:grid-cols-2 gap-4 justify-items-center sm:w-[90%] md:w-[80%] lg:w-[75%] mx-auto'>
            <div className='bg-white p-4 shadow-lg rounded-lg w-full'>
                <p className='border-b-2 border-green-500 mb-3'>join with me</p>
                <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                    <label className='' htmlFor='username'>username</label>
                    <input className='block bg-green-50 ring-1 focus:ring-2 ring-green-300 focus:outline-none focus:ring-green-500 px-2 py-1 rounded-md w-full' id='username'
                    
                    { ...register('username',
                        {
                            required: true,
                            minLength: 3,
                            maxLength: 20
                        })
                    }
                    />

                    <p className='text-xs font-extralight text-red-500 mt-1'>
                        { errors.username?.type==='required' && 'username is required' }
                        { errors.username?.type==='minLength' && 'too few characters' }
                        { errors.username?.type==='maxLength' && 'too many characters' }
                    </p>

                    <label className='' htmlFor='email'>email</label>
                    <input className='block bg-green-50 ring-1 focus:ring-2 ring-green-300 focus:outline-none focus:ring-green-500 px-2 py-1 rounded-md w-full' id='email'
                    
                    { ...register('email',
                        {
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                        })
                    }
                    />
                    <p className='text-xs font-extralight text-red-500 mt-1'>
                        { errors.email?.type==='required' && 'email is required' }
                        { errors.email?.type==='pattern' && 'invalid email address' }
                    </p>

                    <button className='disabled:bg-slate-400 mt-2 bg-green-500 focus:ring-2 focus:ring-green-700 py-1 w-full rounded-md text-white' type='submit' disabled={ isSubmitting }>join</button>
                </form>
            </div>
            <div className='p-4 w-full'>
                <p className='border-b-2 border-green-500 mb-3'>social media</p>
                <a href="https://wa.me/+6282302173682?text=halo,%20selamat%20datang" target="_blank" className='flex group w-56 h-10 overflow-hidden'>
                    <FaWhatsappSquare className='text-green-400 text-4xl group-hover:text-[33px] transition-all inline' />
                    <p className='ml-2 self-center group-hover:text-lg transition-all inline'>082302173682</p>
                </a>
                <a href="https://www.instagram.com/muhammadirfan121314/" target="_blank"
                 className='flex group w-56 h-10 overflow-hidden'>
                    <FaInstagramSquare className='text-red-500 text-4xl group-hover:text-[33px] transition-all inline' />
                    <p className='ml-2 self-center group-hover:text-lg transition-all inline'>muhammadirfan121314</p>
                </a>
                <a href="https://web.facebook.com/profile.php?id=100009498567639" target="_blank" className='flex group w-56 h-10'>
                    <FaFacebookSquare className='text-blue-700 text-4xl group-hover:text-[33px] transition-all inline' />
                    <p className='ml-2 self-center group-hover:text-lg transition-all inline'>Muhammad Irfan</p>
                </a>
                <a href='https://twitter.com/irfan28063856' target="_blank" className='flex group w-56 h-10'>
                    <FaTwitterSquare className='text-sky-400 text-4xl group-hover:text-[33px] transition-all inline' />
                    <p className='ml-2 self-center group-hover:text-lg transition-all inline'>@irfan28063856</p>
                </a>
            </div>
        </div>

        <div id='clients' className="bg-green-50 pt-2 mt-4 pb-20">
            <Client clients={currentItems} setClients={setClients} pages={pages} handleClick={handleClick} currentPage={currentPage} pagination={pagination} />
        </div>  
    </>
  )
}

export default Contact