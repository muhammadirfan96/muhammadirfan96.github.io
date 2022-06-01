import { useState } from 'react'
// import { useForm } from 'react-hook-form'
import {FaWhatsappSquare, FaFacebookSquare, FaInstagramSquare, FaTwitterSquare} from 'react-icons/fa'
import { addClient, getClients } from '../services/clients'
import Client from './Client'

const Contact = () => {

    // const {register, handleSubmit} = useForm()

    const [inputs, setInputs] = useState({})
    const [clients, setClients] = useState([])

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setInputs(values => ({...values, [name]: value}))
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        addClient(inputs)
        setInputs({})
        getClients(setClients)
    }
    
  return (
    <>
        <p className='text-center text-3xl capitalize mb-2 font-vibes'>contact</p>
        <div className='grid md:grid-cols-2 gap-4 justify-items-center sm:w-[90%] md:w-[80%] lg:w-[75%] mx-auto'>
            <div className='bg-white p-4 shadow-lg rounded-lg w-full'>
                <p className='border-b-2 border-green-500 mb-3'>join with me</p>
                <form onSubmit={handleSubmit}>
                    <label className='mb-3' htmlFor='username'>username</label>
                    <input className='mb-3 block bg-green-50 ring-1 focus:ring-2 ring-green-300 focus:outline-none focus:ring-green-500 px-2 py-1 rounded-md w-full' id='username' required
                    type='text'
                    name='username'
                    value={inputs.username || ''}
                    onChange={handleChange}
                    />
                    <label className='mb-3' htmlFor='email'>email</label>
                    <input className='mb-3 block bg-green-50 ring-1 focus:ring-2 ring-green-300 focus:outline-none focus:ring-green-500 px-2 py-1 rounded-md w-full' id='email' required
                    type='text'
                    name='email'
                    value={inputs.email || ''}
                    onChange={handleChange}
                    />
                    <button className='mb-3 bg-green-500 focus:ring-2 focus:ring-green-700 py-1 w-full rounded-md text-white' type='submit'>join</button>
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
            <Client clients={clients} setClients={setClients} />
        </div>  
    </>
  )
}

export default Contact