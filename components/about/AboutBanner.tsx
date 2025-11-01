import Image from 'next/image'
import React from 'react'

function AboutBanner() {
  return (
      <section className="min-h-screen flex items-center justify-center bg-[#0b0c23] px-8 md:py-0 py-10">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Illustration */}
        <div className="flex justify-center">
        <div className='bg-white rounded-t-full flex items-center'>
          <Image
            src="/images/15763-removebg.png"
            alt="Factory Illustration"
            width={500}
            height={300}
            className="object-contain"
          />
          </div>
        </div>

        {/* Right Text Section */}
        <div className="space-y-8">
          <h1 className="text-xl md:text-3xl font-extrabold text-white leading-tight">
            1982&apos;de kurulan TKM Makine, taşıma-kaldırma, yem, gıda ve çeltik makineleri sektöründe kaliteden ödün vermeyen anlayışıyla sektörün öncüsü olmuştur. 
          </h1>
        </div>
      </div>
    </section>
  )
}

export default AboutBanner