"use client";
import Image from "next/image";

export default function AboutUsSection() {
  return (
    <section className="bg-white py-20 px-6 md:px-12 md:pb-52">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Images + Year */}
        <div className="relative flex flex-col items-center">
          <div className="relative w-full mt-16 lg:mt-28">
            {/* Year */}
            <div className="absolute -top-12 right-4 md:right-10 z-10 text-center">
              <h2 className="text-[80px] md:text-[120px] font-extrabold text-[#ff3c1c] leading-none">
                1982
              </h2>
              <p className="text-[#ff3c1c] uppercase tracking-wider font-semibold text-sm">
                Başladı
              </p>
            </div>

            {/* Main Image */}
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/images/beltconveyor.jpg"
                alt="Steel Material"
                width={600}
                height={600}
                className="md:w-[400px] h-[400px] md:h-[550px] object-cover"
                priority
              />
            </div>

            {/* Overlay Image */}
            <div className="absolute  top-1/2  left-1/2 transform -translate-x-1/2 md:-translate-x-1/3 translate-y-10 md:translate-y-0 rounded-lg overflow-hidden shadow-lg w-[70%] md:w-[350px]">
              <Image
                src="/images/factory-workshop-interior-machines-glass-industry-background-process-production.jpg"
                alt="Worker"
                width={400}
                height={600}
                className="w-full h-[250px] md:h-[400px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right side - Text content */}
        <div className="mt-24 lg:mt-0">
          <p className="uppercase tracking-wider text-sm font-semibold text-[#ff3c1c]">
            Hakkımızda
          </p>
          <h3 className="text-3xl md:text-5xl font-extrabold text-[#0b1a45] leading-tight mt-4">
            TKM <br />
            Taşıma Kaldırma Yem ve Gıda Sanayi Makineleri
          </h3>
          <p className="text-gray-600 mt-6 leading-relaxed">
            1982 Yılında kurulan TKM Taşıma Kaldırma Yem ve Gıda Sanayi
            Makineleri Tic.Ltd.Şti. Kurulduğu günden bugüne kadar kaliteli ürün
            ve hizmet anlayışından taviz vermeden sektöründe adından söz
            ettirmenin gururunu yaşamaktadır. Alanında uzman bir kadro ile;
            Taşıma kaldırma, Yem gıda ve çeltik makinelerinin üretimini
            gerçekleştirmektedir. Enerjik, dinamik, çağın yeniliklerine ayak
            uydurmayı bilen bir yapıya sahip olan TKM Makine, müşterilerine en
            iyisini sunmak için düne olduğu gibi yarına da yüksek başarı
            grafiğini sürdürmenin gayreti içinde olacaktır.
          </p>
        </div>
      </div>
    </section>
  );
}
