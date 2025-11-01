"use client";
import BrandsCard from "./BrandsCard";

const data = [
    {
        number: "01",
        images: "/images/brands/Bim_(company)-Logo.wine.png",
        title: "Bim",
        description: "Türkiye'nin önde gelen perakende zinciri BIM için yüksek verimli ve dayanıklı makineler üretiyoruz. Operasyonel sürekliliklerine değer katmaktan gurur duyuyoruz."
    },
    {
        number: "02",
        images: "/images/brands/hünkar-400x225.jpg",
        title: "Hünkar",
        description: "Türkiye'nin önde gelen perakende zinciri BIM için yüksek verimli ve dayanıklı makineler üretiyoruz. Operasyonel sürekliliklerine değer katmaktan gurur duyuyoruz."
    },
    {
        number: "03",
        images: "/images/brands/KAANLAR-LOGO-e1595591826383.png",
        title: "Kaanlar",
        description: "Türkiye'nin önde gelen perakende zinciri BIM için yüksek verimli ve dayanıklı makineler üretiyoruz. Operasyonel sürekliliklerine değer katmaktan gurur duyuyoruz."
    },
    {
        number: "04",
        images: "/images/brands/torunlar.webp",
        title: "Torunlar Gıda",
        description: "Türkiye'nin önde gelen perakende zinciri BIM için yüksek verimli ve dayanıklı makineler üretiyoruz. Operasyonel sürekliliklerine değer katmaktan gurur duyuyoruz."
    },
    {
        number: "05",
        images: "/images/brands/images.png",
        title: "Tiryaki Gıda",
        description: "Türkiye'nin önde gelen perakende zinciri BIM için yüksek verimli ve dayanıklı makineler üretiyoruz. Operasyonel sürekliliklerine değer katmaktan gurur duyuyoruz."
    },
]

export default function BrandsSections() {
  return (
    <section className="bg-[#f6f9fc] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Üst başlık kısmı */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-200 pb-10">
          <div>
            <p className="text-xs font-semibold text-gray-500 tracking-wider mb-3 uppercase">
              Güvenİn ve Kalİtenİn Somut Kanıtı
            </p>
            <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">
              Referanslar<span className="text-yellow-400">.</span>
            </h2>
          </div>

          <p className="mt-6 md:mt-0 md:w-1/2 text-gray-800 border-l-4 border-yellow-400 pl-4 text-lg leading-relaxed">
            Yıllara dayanan mühendislik tecrübemiz ve uzmanlığımız, dünyanın dört bir yanındaki sektör liderleri tarafından tercih ediliyor. Birlikte çalıştığımız her değerli firma, kalite anlayışımızın ve söz verdiğimiz çözümleri teslim etme kararlılığımızın bir yansımasıdır.
          </p>
        </div>

        {/* Kartlar */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mt-16">
          {/* 01. Quality */}
          {data.map((item, index) => (
              <BrandsCard number={item.number} images={item.images} title={item.title} description={item.description} key={index}/>
          ))}

        </div>
      </div>
    </section>
  );
}
