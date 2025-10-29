import Image from 'next/image'
import React from 'react'

function BrandsCard({number, images, title, description}: {number: string, title: string,images: string, description: string}) {
  return (
    <div className="bg-white rounded-lg p-8 shadow-sm">
                <p className="text-gray-400 text-sm font-semibold mb-4">{number}.</p>
                <div className="rounded-md overflow-hidden mb-8">
                  <Image
                    src={images} // Görselini buraya koy (örnek: public/images/value-quality.jpg)
                    alt="Quality"
                    width={600}
                    height={400}
                    className="w-full h-[220px] object-contain"
                  />
                </div>
                <div className="border-t border-gray-200 pt-6 flex gap-8">
                  <h3 className="font-bold text-xl text-gray-900 w-1/3">{title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed w-2/3">
                    {description}
                  </p>
                </div>
              </div>
  )
}

export default BrandsCard