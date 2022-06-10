import irf from '../img/irf.jpg'
import { useEffect } from 'react'
import { getClients } from '../services/clients'

const Client = ({clients, setClients, pages, handleClick, currentPage, pagination}) => {

    useEffect(() => {
        getClients(setClients)
    }, [])
    
  return (
    <>
        <p className='text-center text-3xl capitalize mb-2 font-vibes'>client</p>
        <div className='flex flex-col sm:flex-row sm:flex-wrap justify-center'>

        {
            clients.map(client => {
                return (
                    <>              
                    <div key={client._id} className=' sm:w-[47%] md:w-[33%] lg:w-[24%] mb-2 bg-white rounded-md shadow-md p-3 mx-2'>
                        <div className='flex gap-1 items-center'>
                            <img src={irf} alt='gbr' className='rounded-full w-16 border-2 border-green-500' />
                            <div className='w-full overflow-hidden'>
                                <p className=''>{client.username}</p>
                                <hr className='border border-green-500' />
                                <p className='text-sm'>{client.email}</p>
                            </div>
                        </div>
                        <p className='font-thin text-right text-[10px] text-slate-500'>join at: {client.join.since}</p>
                    </div>
                    </>             
                )
            })
        }

        </div>

        <ul className='text-center mt-2'>
            <li className={pagination.minPageNumberLimit <= 0 ? 'hidden' : 'inline-block'}>
                <button className='border-2 border-green-500 py-[1px] px-3 mx-1' onClick={pagination.handlePrevBtn}>&laquo;</button>
            </li>
        {
            pages.map(number => {
                if (number < pagination.maxPageNumberLimit + 1 && number > pagination.minPageNumberLimit) {
                    return(
                        <li className={currentPage == number ? 'bg-green-500 inline-block border-2 border-green-500 py-[1px] px-3 mx-1 cursor-pointer text-white' : 'inline-block border-2 border-green-500 py-[1px] px-3 mx-1 cursor-pointer'} key={number} id={number} onClick={handleClick}>
                            {number}
                        </li>
                    )
                } else {
                    return null
                }
            })
        }
            <li className={pagination.maxPageNumberLimit < pages.length ? 'inline-block' : 'hidden'}>
                <button className='border-2 border-green-500 py-[1px] px-3 mx-1' onClick={pagination.handleNextBtn}>&raquo;</button>
            </li>
        </ul>
        <p className='w-28 text-center rounded-sm mx-auto block p-1 bg-green-500 text-white mt-2'>total page : {pages.length}</p>

    </>
  )
}

export default Client