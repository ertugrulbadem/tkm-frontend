"use client";

import Image from "next/image";

const projects = [
  { id: 1, image: "/images/brands/torunlar.webp" },
  { id: 2, image: "/images/brands/Bim_(company)-Logo.wine.png" },
  { id: 3, image: "/images/brands/images.png" },
  { id: 4, image: "/images/brands/logo.png" },
  { id: 5, image: "/images/brands/KAANLAR-LOGO-e1595591826383.png" },
  { id: 6, image: "/images/brands/hünkar-400x225.jpg" },
];

export default function AutoScrollProjects() {
  return (
    <section className="relative w-full  py-16 overflow-hidden">
      <h2 className="text-4xl lg:text-5xl font-bold text-center text-black mb-10">
        Çalıştığımız <span className="text-yellow-400">Markalar</span>
      </h2>

      {/* Slider Container */}
      <div className="overflow-hidden">
        <div className="flex animate-scrollX gap-6 lg:gap-10">
          {projects.concat(projects).map((project, i) => (
            <div
              key={i}
              className="flex items-center gap-6 lg:gap-10 min-w-max"
            >
              <div className="relative w-52 h-32 lg:w-80 lg:h-52 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={project.image}
                  alt="Project"
                  fill
                  className="object-center rounded-lg"
                />
              </div>

              {/* Sarı Nokta */}
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Arka Plan Fade (isteğe bağlı görsel efekt) */}
      {/* <div className="pointer-events-none absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#062035] to-transparent"></div>
      <div className="pointer-events-none absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#062035] to-transparent"></div> */}
    </section>
  );
}
