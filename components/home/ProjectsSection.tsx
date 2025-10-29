"use client";

import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Geleceğe Yön Veren Enerji Çözümleri",
    category: "Enerji",
    year: "2015",
    image: "/images/row-equipment-producing-metal-parts-works-photo-with-depth-field.jpg",
  },
  {
    id: 2,
    title: "Güçlü ve Dayanıklı Altyapılar",
    category: "İnşaat",
    year: "2018",
    image: "/images/big-steel-chromed-manufacture-machine-with-shafts-computer-control-panel-from-bellow.jpg",
  },
  {
    id: 3,
    title: "Endüstriyel Üretimde Yenilik",
    category: "Üretim",
    year: "2020",
    image: "/images/modern-operational-plant-equipment-assembly-line-producing-fiberglass-heavy-industry-machinery-metalworking-workshop-concept.jpg",
  },
  {
    id: 4,
    title: "Sürdürülebilir Tarım Çözümleri",
    category: "Tarım",
    year: "2022",
    image: "/images/factory-workshop-interior-machines-glass-industry-background-process-production.jpg",
  },
];

export default function ProjectsSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="flex flex-col lg:flex-row w-full min-h-screen bg-[#062035] text-white">
      {/* Sol Bilgi Alanı */}
      <div className="w-full lg:w-1/3 flex flex-col justify-center px-6 lg:pl-16 lg:pr-10 py-10">
        <p className="uppercase text-sm text-gray-400 tracking-wide mb-2">
          Uzmanlık Alanlarımız
        </p>
        <h2 className="text-5xl lg:text-6xl font-bold mb-6">
          Projeler<span className="text-yellow-400">.</span>
        </h2>
        <p className="text-base lg:text-lg text-gray-300 border-l-2 border-yellow-400 pl-4 mb-8">
          Üretim hatlarında sorunsuz, hızlı çözüm ve periyodik bakım hizmetleri ile, makinelerinizin en iyi performansını sağlıyoruz.
        </p>
        <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full flex items-center gap-2 hover:bg-yellow-300 transition-all w-fit">
          Referanslarımız →
        </button>
      </div>

      {/* Sağdaki Proje Görselleri */}
      <div className="flex flex-col lg:flex-row w-full lg:w-2/3 h-auto lg:h-screen">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`relative overflow-hidden transition-all duration-700 ease-in-out ${
              hovered === index ? "lg:flex-[4]" : "lg:flex-[1]"
            } w-full h-64 lg:h-auto mb-6 lg:mb-0`}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Görsel */}
            <Image
              src={project.image}
              alt={project.title}
              width={800}
              height={600}
              className={`w-full h-full object-cover rounded-lg lg:rounded-none transition-transform duration-700 lg:px-0 px-2 ${
                hovered === index ? "scale-110" : "scale-100"
              }`}
            />

            {/* Üstteki Bilgiler */}
            <div
              className={`absolute top-5 left-5 flex gap-3 text-sm font-medium transition-opacity duration-500 ${
                hovered === null || hovered === index
                  ? "opacity-100"
                  : "opacity-0"
              }`}
            >
              <span className="bg-white/20 backdrop-blur-md px-2 py-1 rounded">
                {project.category}
              </span>
              <span className="bg-white/20 backdrop-blur-md px-2 py-1 rounded">
                {project.year}
              </span>
            </div>

            {/* Alttaki Başlık */}
            {hovered === index && (
              <div className="absolute bottom-6 left-6">
                <p className="text-xl lg:text-2xl font-semibold drop-shadow-lg">
                  {project.title}
                </p>
              </div>
            )}

            {/* Numaralar */}
            <div className="absolute top-5 right-5 text-lg lg:text-2xl font-bold text-white/80">
              [{`0${index + 1}`}]
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
