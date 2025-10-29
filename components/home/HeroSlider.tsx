// components/HeroSlider.tsx
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 1,
    title: "Taşıma Sistemi",
    subtitle: "01. Verimlilik için tasarlandı",
    desc: "Endüstriyel üretim hatlarınız için akıllı ve entegre taşıma çözümleri sunuyoruz. İş akışınızı optimize ediyoruz.",
    image: "/images/beltconveyor.jpg",
  },
  {
    id: 2,
    title: "BAND & KONVEYÖR SİSTEMLER",
    subtitle: "02. Üretiminizin omurgası",
    desc: "Yüksek kapasiteli ve dayanıklı bant konveyör sistemlerimizle kesintisiz üretim için güvenilir çözümler üretiyoruz.",
    image: "/images/beltconveyor.jpg",
  },
  {
    id: 3,
    title: "Kompleks Paketleme Sistemleri",
    subtitle: "03. Son dokunuş için mükemmellik",
    desc: "Ürünlerinizin değerine değer katan, tam otomatik ve kompleks paketleme çözümleri ile yanınızdayız.",
    image: "/images/beltconveyor.jpg",
  },
];

export default function HeroSlider() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  // Otomatik geçiş (20 saniye)
  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => {
      api.scrollNext();
    }, 40000);
    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="w-full h-[100vh] overflow-hidden bg-[#062035] relative">
      <Carousel setApi={setApi} className="h-full" opts={{ loop: true }}>
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="grid md:grid-cols-2 h-full">
                {/* Sol Metin Alanı */}
                <div className="flex flex-col justify-center pl-10 sm:pl-20 md:pl-28 lg:pl-40 text-white z-10 relative">
                  <p className="font-semibold text-white/90">{slide.subtitle}</p>
                  <h1 className="text-5xl sm:text-6xl font-light mt-2 leading-tight max-w-lg">
                    {slide.title}
                  </h1>
                  <p className="mt-5 text-white/80 max-w-md">{slide.desc}</p>

                  <div className="flex items-center gap-5 mt-8">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 py-5 text-lg">
                      Teklifi Al
                    </Button>
                    <Button
                      variant="outline"
                      className="border-white text-black rounded-full px-6 py-5 text-lg"
                    >
                      Ürünlerimiz
                    </Button>
                  </div>

                  {/* Alt Çizgi (Progress Bar) */}
                  <div className="mt-12 w-[220px] h-[4px] bg-white/30 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-orange-500 transition-all duration-700"
                      style={{
                        width: `${((current + 1) / slides.length) * 100}%`,
                      }}
                    />
                  </div>
                </div>

                {/* Sağ Görsel */}
                <div className="relative h-[100vh]">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover object-center md:object-right brightness-95"
                    priority
                  />
                  {/* Mobilde yazının okunabilirliği için koyuluk */}
                  <div className="absolute inset-0 md:hidden bg-black/30" />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Yazılı Navigasyon */}
        <div className="absolute bottom-10 right-20 flex items-center gap-8 text-white text-sm font-semibold tracking-wider z-20">
          <button
            onClick={() => api?.scrollPrev()}
            className="hover:text-orange-400 transition"
          >
            ← PREV
          </button>
          <button
            onClick={() => api?.scrollNext()}
            className="hover:text-orange-400 transition"
          >
            NEXT →
          </button>
        </div>
      </Carousel>
    </div>
  );
}
