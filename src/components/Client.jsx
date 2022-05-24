import irf from '../img/irf.jpg'

const Client = () => {
  return (
    <>
        <p className='text-center text-3xl capitalize mb-2 font-vibes'>client</p>
        <div className='flex flex-col sm:flex-row sm:flex-wrap justify-center'>
            <div className='flex sm:w-[47%] md:w-[33%] lg:w-[24%] mb-2 bg-white rounded-md shadow-md p-3 gap-1 items-center mx-2'>
                <img src={irf} alt='gbr' className='rounded-full w-16' />
                <div className='overflow-hidden'>
                    <p>dummy</p>
                    <p>email.example@gmail.comdfvgbhbhjhyhuhjuyyyyyyyyyyyyyyyyyyyyyyy</p>
                </div>
            </div>
            <div className='flex sm:w-[47%] md:w-[33%] lg:w-[24%] mb-2 bg-white rounded-md shadow-md p-3 gap-1 items-center mx-2'>
                <img src={irf} alt='gbr' className='rounded-full w-16' />
                <div className='overflow-hidden'>
                    <p>dummy</p>
                    <p>email.example@gmail.com</p>
                </div>
            </div>
            <div className='flex sm:w-[47%] md:w-[33%] lg:w-[24%] mb-2 bg-white rounded-md shadow-md p-3 gap-1 items-center mx-2'>
                <img src={irf} alt='gbr' className='rounded-full w-16' />
                <div className='overflow-hidden'>
                    <p>dummy</p>
                    <p>email.example@gmail.com</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Client