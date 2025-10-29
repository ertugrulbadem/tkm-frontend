import Image from 'next/image'

function WorldBussines() {
  return (
    <div className='w-full h-full'>
      {/* Başlık */}
      <div className='p-5 space-y-5'>
        <p className='tracking-wide text-muted-foreground'>
          Makine ve sistemlerinizin global pazarlama hizmetleri sunuyoruz
        </p>
        <hr />
        <div className='flex items-end flex-wrap'>
          <p className='font-bold md:text-[50px] text-[30px] md:text-4xl sm:text-3xl uppercase'>
            ULUSLARARASI SATIŞ HİZMETLERİ
          </p>
          <div className='w-5 h-5 bg-blue-600 mb-[18px] ml-2'></div>
        </div>
      </div>

      {/* Dünya resmi ve yazılar */}
      <div className='w-full h-full relative'>
        <Image
          src="/images/world.png"
          alt="profesyonel kurulum"
          width={1000}
          height={1000}
          className="w-full h-auto relative"
        />

        {/* ELEVATÖR */}
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                        p-2 md:p-4  lg:p-5 bg-white rounded-2xl shadow-2xl border border-blue-600 
                        flex justify-center items-center text-xs sm:text-sm md:text-base lg:text-lg'>
          <p className='uppercase font-bold tracking-wider text-center'>ELEVATÖR</p>
        </div>

        {/* HAVA KİLİDİ */}
        <div className='absolute top-[10%] left-[15%] sm:top-[18%] sm:left-[22%] 
                        p-2 md:p-4 lg:p-5 bg-white rounded-2xl shadow-2xl border border-blue-600 
                        flex justify-center items-center text-xs sm:text-sm md:text-base lg:text-lg'>
          <p className='uppercase font-bold tracking-wider text-center'>HAVA KİLİDİ</p>
        </div>

        {/* PAKETLEME KANTARI */}
        <div className='absolute top-[10%] right-[15%] lg:top-[48%] lg:right-[22%] 
                        p-2 md:p-4 lg:p-5 bg-white rounded-2xl shadow-2xl border border-blue-600 
                        flex justify-center items-center text-xs sm:text-sm md:text-base lg:text-lg'>
          <p className='uppercase font-bold tracking-wider text-center'>PAKETLEME KANTARI</p>
        </div>

        {/* TAŞIMA SİSTEMİ */}
        <div className='absolute bottom-[10%] right-[15%] md:bottom-[18%] sm:right-[22%] 
                        p-2 md:p-4 lg:p-5 bg-white rounded-2xl shadow-2xl border border-blue-600 
                        flex justify-center items-center text-xs sm:text-sm md:text-base lg:text-lg'>
          <p className='uppercase font-bold tracking-wider text-center'>TAŞIMA SİSTEMİ</p>
        </div>
      </div>
    </div>
  )
}

export default WorldBussines
