import Image from 'next/image'
import React from 'react'

function ProductBanner() {
  return (
        <div className="relative">
      <Image
        src={"/images/factory-workshop-interior-machines-glass-production-background.jpg"}
        alt="contact"
        width={1920}
        height={500}
        className="w-full h-[80vh] object-cover"
      />
    
      {/* KARARTI (Overlay) */}
      <div className="absolute inset-0 bg-black/40" />
    
      {/* YAZI ALANI */}
      <div className="absolute bottom-30 left-20 z-10">
        <h1 className="text-white text-5xl font-bold">Ürünlerimiz</h1>
        <p className="text-white text-lg">
          Gelişmiş teknoloji ve yüksek kalite standartlarımızla ürettiğimiz makine ve ekipmanlarımız, farklı sektörlerin ihtiyaçlarına özel çözümler sunar.
        </p>
      </div>
    </div>
  )
}

export default ProductBanner