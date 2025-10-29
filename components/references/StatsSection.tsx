"use client";
import Image from "next/image";

export default function StatsSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-start">
      {/* Left side - Image and text */}
      <div>
        <div className="overflow-hidden rounded-lg h-[420px]">
          <Image
            src="/images/engineer-while-using-device.jpg"
            alt="Worker"
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mt-8 text-gray-900 leading-snug">
          Köklü geçmişimiz ve siz değerli müşterilerimizin memnuniyeti, kalitemizin en büyük teminatıdır.
        </h2>

      </div>

      {/* Right side - Stats */}
      <div className="grid grid-cols-2 gap-6">
        {/* Years of experience */}
        <div className="bg-yellow-300 rounded-lg p-6 min-h-[300px] flex flex-col justify-between">
          
            <h3 className="font-semibold text-gray-900">Tecrübe</h3>
            
          <div>
            <div className="w-full flex justify-between items-center">
                <Image src={"images/experience-svgrepo-com.svg"} alt="experience" width={50} height={50}/>
                <p className="text-5xl font-bold mt-2">30+</p>
            </div>
          <p className="mt-3 text-gray-700 text-sm">
            Endüstriyel Üretim ve Teknolojide Liderlik Yılı
          </p>
          </div>
          
        </div>

        {/* Global locations */}
        <div className="bg-white rounded-lg p-6 shadow-sm min-h-[300px] flex flex-col justify-between">
          
            <h3 className="font-semibold text-gray-900">İnsan Kaynağı</h3>
          <div>
            <div className="w-full flex justify-between items-center">
                <Image src={"images/employee-group-svgrepo-com.svg"} alt="experience" width={50} height={50}/>
                <p className="text-5xl font-bold mt-2">100+</p>
            </div>
          <p className="mt-3 text-gray-700 text-sm">
            Projelerimizde Çalışan Doğrudan ve Dolaylı Çalışan
          </p>
          </div>
          
        </div>

        {/* Total employees */}
        <div className="bg-white rounded-lg p-6 shadow-sm min-h-[300px] flex flex-col justify-between">
          
            <h3 className="font-semibold text-gray-900">Küresel Varlık</h3>
          
           <div>
            <div className="w-full flex justify-between items-center">
                <Image src={"images/world-1-svgrepo-com.svg"} alt="experience" width={50} height={50}/>
                <p className="text-5xl font-bold mt-2">50+</p>
            </div>
          <p className="mt-3 text-gray-700 text-sm">
            En Az Bir Proje Gerçekleştirilen Ülke
          </p>
          </div>
          
        </div>

        {/* Annual revenue */}
        <div className="bg-blue-900 text-white rounded-lg p-6 min-h-[300px] flex flex-col justify-between">
          
            <h3 className="font-semibold">Finansal Güç</h3>
          
          <div>
            <div className="w-full flex justify-between items-center">
                <Image src={"images/money-bill-stack-svgrepo-com.svg"} alt="experience" width={50} height={50}/>
                <p className="text-5xl font-bold mt-2">15B</p>
            </div>
          <p className="mt-3 text-gray-300 text-sm">
            Tüm Zamanların Toplam Proje Değeri
          </p>
          </div>
        </div>
      </div>
    </section>
  );
}
