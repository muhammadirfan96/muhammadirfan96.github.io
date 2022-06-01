import simokit from '../img/hasil-karya/simokit.jpeg'
import webpunagaya from '../img/hasil-karya/webpunagaya.jpeg'

const HasilKarya = () => {
    const data = [
        {
            key:1,
            gambar: webpunagaya,
            namaKarya: 'webpunagaya',
            ket: 'aplikasi berbasis web yang berfungsi untuk manajemen operasional PLTU PUNAGAYA 2 x 100 MW. Aplikasi ini dibangun menggunakan php native, mPDF, jQuery dan Bootstrap v.5'
        },
        {
            key:2,
            gambar: simokit,
            namaKarya: 'simokit',
            ket: 'aplikasi berbasis web yang berfungsi untuk manajemen operasional PLTU PUNAGAYA 2 x 100 MW. Aplikasi ini dibangun menggunakan framework CodeIgniter 4 dan library pendukung dintaranya yaitu mPDF, Sweet Alert 2, jQuery dan Bootstrap v.5'
        }
    ]

  return (
    <>
        <p className='text-center text-3xl capitalize mb-2 font-vibes'>creations</p>
        <div className='flex flex-col sm:flex-row sm:flex-wrap gap-2 justify-center'>
        {
            data.map(d => (               
                <div key={d.key} className='grid justify-items-center p-2 bg-white rounded-lg shadow-lg content-start sm:w-[45%]'>
                    <div className='w-full mb-2 border-b-2 border-green-500'>
                        <p className='text-center capitalize'>{d.namaKarya}</p>
                    </div>
                    <img src={d.gambar} className='mb-2' alt={d.gambar} />
                    <p className='text-sm text-justify'>{d.ket}</p>
                </div>
            ))
        }

        </div>

    </>
  )
}

export default HasilKarya