export default function Banner() {
  return (
    <section className="relative h-[100vh] flex flex-col lg:flex-row items-center justify-between  bg-[#0b0c23] text-white overflow-hidden">
      {/* Blur Parıltı */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent blur-[120px] pointer-events-none" />

      {/* Sol Alan */}
      <div className="relative z-10 max-w-xl lg:p-20 mt-26 my-16">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          FABRİKANIZIN GELECEĞİNİ
          <span className="inline-block mx-2 align-middle">
            <img
              src="/images/beltconveyor.jpg"
              alt="chair"
              className=" w-24 h-16 lg:w-52 w-30 md:h-20 object-cover rounded-full md:block hidden"
            />
          </span>
           <span className="text-yellow-400"> İNŞA EDİYORUZ</span>
        </h1>

        <p className="mt-6 text-gray-300">
          Yenilikçi makine çözümlerimizle fabrikanızın üretim kapasitesini artırıyor ve süreçlerinizi optimize ediyoruz. Uzman ekibimizle, verimli, sürdürülebilir ve geleceğe dönük çözümler sunuyoruz.
        </p>


      </div>

      {/* Sağ Görsel */}
      <div className="relative z-10 mt-12 md:mt-0 lg:w-1/2">
        <img
          src="/images/workman-wearing-hard-hat-working-with-metal-constructions-factory.jpg"
          alt="Furniture room"
          className=" shadow-lg w-full object-cover"
        />
      </div>
    </section>
  );
}
