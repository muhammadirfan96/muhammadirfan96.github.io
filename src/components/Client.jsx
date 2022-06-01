import irf from '../img/irf.jpg'
import { useEffect } from 'react'
import { getClients } from '../services/clients'

const Client = ({clients, setClients}) => {

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
                    <div key={client._id} className='flex sm:w-[47%] md:w-[33%] lg:w-[24%] mb-2 bg-white rounded-md shadow-md p-3 gap-1 items-center mx-2'>
                        <img src={irf} alt='gbr' className='rounded-full w-16' />
                        <div className='overflow-hidden'>
                            <p>{client.username}</p>
                            <p>{client.email}</p>
                        </div>
                    </div>
                )
            })
        }

        </div>
    </>
  )
}

export default Client