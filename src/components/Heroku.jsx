import irf from '../img/irf.jpg'

const Heroku = () => {
  return (
    <>
      <div className='grid justify-items-center sm:grid-cols-2 gap-4'>
        <div className='bg-blue-800 rounded-full w-40 h-40 border-2 sm:w-[60%] sm:h-40 sm:rounded-none sm:rounded-tl-full sm:order-last sm:justify-self-end border-green-500 bg-center bg-cover md:w-[60%] md:h-48 md:rounded-l-full md:border-y-2' style={{backgroundImage: `url(${irf})`}}>
        </div>
        <div className='bg-green-50 text-center sm:text-left sm:ml-2 mx-2 p-2 rounded-md self-center'>
          Halo!, nama saya <span className='text-base text-blue-700 font-semibold uppercase'>muhammad irfan</span>, saya adalah seorang freelancer web deleveloper. <span className='text-red-700 text-base capitalize font-semibold'>belajar giat tak kenal lelah</span>
        </div>
      </div>
    </>
  )
}

export default Heroku