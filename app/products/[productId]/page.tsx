"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { CheckCircle2, ChevronLeft, ChevronRight, X } from "lucide-react";

function ProductId() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const gallery = [
    "/images/factory-workshop-interior-machines-glass-industry-background-process-production.jpg",
    "/images/industrial-metal-drill-machine-metalworking-workshop.jpg",
    "/images/beltconveyor.jpg",
  ];

  const openModal = (index: any) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const prevImage = () =>
    setCurrentIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));

  const nextImage = () =>
    setCurrentIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));

  // ESC ile kapatma
  useEffect(() => {
    const handleKey = (e: any) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="w-full">
      {/* HERO */}
      <section className="relative w-full h-[60vh] rounded-b-3xl overflow-hidden">
        <Image
          src="/images/beltconveyor.jpg"
          alt="Belt Conveyor"
          fill
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-5xl font-bold mb-3">Belt Conveyor Sistemi</h1>
          <p className="text-lg font-medium max-w-2xl">
            Endüstriyel taşıma çözümlerinde maksimum verimlilik ve dayanıklılık.
          </p>
        </div>
      </section>

      {/* TANITIM */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6">Genel Tanıtım</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          Belt Conveyor sistemleri, üretim hatlarında ve taşıma sistemlerinde
          kullanılan en verimli çözümlerden biridir. Ürünlerin veya malzemelerin
          sürekli olarak bir noktadan diğerine taşınmasını sağlar. Gövdesi
          paslanmaz çelikten üretilir ve uzun ömürlüdür.
        </p>
        <p className="text-gray-700 leading-relaxed text-lg mt-5">
          Motor, rulman ve bant bileşenleriyle birlikte sorunsuz çalışır.
          Otomasyon sistemlerine entegre edilebilir ve hız kontrolü sağlanabilir.
        </p>
      </section>

      {/* GÖRSEL GALERİ */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Görsel Galeri</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {gallery.map((src, i) => (
            <div
              key={i}
              className="relative w-full h-72 rounded-2xl overflow-hidden cursor-pointer group"
              onClick={() => openModal(i)}
            >
              <Image
                src={src}
                alt={`Gallery ${i + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      
      {/* AVANTAJLAR */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Belt Conveyor’un Avantajları
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Yüksek enerji verimliliği",
              "Düşük bakım maliyeti",
              "Otomasyon sistemlerine kolay entegrasyon",
              "Dayanıklı ve uzun ömürlü yapı",
              "Sessiz ve titreşimsiz çalışma",
              "Farklı kapasitelere göre özelleştirilebilir",
            ].map((text, i) => (
              <div key={i} className="flex items-start space-x-3">
                <CheckCircle2 className="text-green-400 mt-1" />
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEKNİK ÖZELLİKLER */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Teknik Özellikler
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
            {[
              {
                title: "Gövde Malzemesi",
                text: "Paslanmaz Çelik (304/316 kalite)",
              },
              {
                title: "Bant Genişliği",
                text: "300 mm - 1200 mm arası opsiyonel",
              },
              {
                title: "Taşıma Kapasitesi",
                text: "50 kg - 2000 kg / saat",
              },
              {
                title: "Motor Gücü",
                text: "0.75 kW - 3 kW",
              },
              {
                title: "Hız Kontrolü",
                text: "Frekans invertörü ile ayarlanabilir",
              },
              {
                title: "Çalışma Ortamı",
                text: "İç ve dış mekan uyumlu",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-2xl shadow-sm border flex flex-col items-center text-center hover:shadow-md transition"
              >
                <Image
                  src="/images/world-1-svgrepo-com.svg"
                  alt="icon"
                  width={50}
                  height={50}
                  className="mb-4"
                />
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* MODAL */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white hover:scale-110 transition"
          >
            <X size={32} />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-6 text-white hover:scale-110 transition"
          >
            <ChevronLeft size={40} />
          </button>

          <div className="relative w-[90%] md:w-[60%] h-[70vh] rounded-2xl overflow-hidden">
            <Image
              src={gallery[currentIndex]}
              alt="Expanded"
              fill
              className="object-contain"
            />
          </div>

          <button
            onClick={nextImage}
            className="absolute right-6 text-white hover:scale-110 transition"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}

    </div>
  );
}

export default ProductId;
