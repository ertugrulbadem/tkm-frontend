"use client";
import Image from "next/image";

export default function MissionVision() {
  return (
    <section className="w-full">
      {/* MISSION SECTION */}
      <div className="grid md:grid-cols-2">
        {/* Left Text */}
        <div className="bg-[#0A2A3E] text-white flex flex-col justify-center px-10 py-20">
          <div className="max-w-lg">
            <h2 className="text-5xl font-extrabold mb-6">
              Misyonumuz
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              TKM Makine olarak misyonumuz sonsuz,kaliteli ve çağın yeniliklerine uygun ürünler üretmek,müşteri memnuniyetini en üst düzeyde tutmak,kalite çıtasını sürekli yükseğe taşıyarak çalışanlarının güvenlik ve mesleki gelişimlerine tam destek sağlayan bir işyeri ortamı sağlamaktadır.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-[700px] md:h-auto">
          <Image
            src="/images/factory-worker-engineer-metal-processing-equipment-photo-with-depth-field.jpg"
            alt="Mission Image"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* VISION SECTION */}
      <div className="grid md:grid-cols-2">
        {/* Left Image */}
        <div className="relative h-[700px] md:h-auto order-2 md:order-1">
          <Image
            src="/images/technician-worker-cutting-metal-with-many-sharp-sparks-using-equipments-cat-iron.jpg"
            alt="Vision Image"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Text */}
        <div className="bg-[#0A2A3E] text-white flex flex-col justify-center px-10 py-20 order-1 md:order-2">
          <div className="max-w-lg ml-auto">
            <h2 className="text-5xl font-extrabold mb-6">
              Vizyonumuz
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Ekonomik faliyet politikasıyla sunulan üstün ürünlerde müşteri beklentilerini artarak karşılamayı amaç edinen TKM Makine aynı zamanda sektörün gelişiminde katkıda bulunan bir üretim anlayışıyla çalışmaktadır.Geniş servis ağı ile ürünlerin servis bakımlarını müşteriyi bekletmeden gerçekleştirmek ve bu alanda dünyanın tanıdığı bir marka olmak TKM’in vizyonunu tanımlamaktadır.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
