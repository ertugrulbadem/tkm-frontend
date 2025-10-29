import Image from "next/image";

function Services() {
  return (
    <div className="w-full py-10 lg:px-32 flex justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center gap-5">
        <div className="w-full flex lg:flex-row flex-col justify-between items-center p-5 space-x-10">
          <div className="">
            <p className="text-sm text-blue-600 font-semibold">TKM SERVİS</p>
            <h2 className="text-4xl font-bold tracking-wide">
              Sadece Makine Değil,{" "}
              <span className="text-blue-400">Tam Kapsamlı Çözüm </span>
              Sunuyoruz
            </h2>
          </div>
          <p className=" tracking-wide">En ileri teknoloji makineleri üretirken, satış sonrasında da yanınızdayız. Uzman teknisyen kadromuzla kurulum, bakım ve 7/24 teknik destek hizmeti sunuyoruz.</p>
        </div>
        <div className="w-full flex lg:flex-row flex-col justify-between items-center p-5 lg:space-x-10">
            <Image src="/images/engineer-working-with-airplane.jpg" alt="Belt Conveyor" width={400} height={200} className="rounded-lg shadow-2xl w-full lg:h-full h-[400px] object-center"/>
            <div className="grid md:grid-cols-2 grid-cols-1 lg:mt-0 mt-10 gap-10">
                <div className="w-full rounded-lg shadow-lg p-5 space-y-5 hover:border hover:border-blue-600">
                    <Image src={"/images/home-insta.svg"} alt="profesonel kurulum" width={20} height={20} className="w-20"/>
                    <p className="font-bold text-2xl tracking-wide">Profesyonel Kurulum</p>
                    <p className="text-sm text-muted-foreground">Makine ve sistemlerinizin maksimum verimle çalışması için uzman ekiplerimizle eksiksiz kurulum hizmeti.</p>
                </div>

                <div className="w-full rounded-lg shadow-lg p-5 space-y-5 hover:border hover:border-blue-600">
                    <Image src={"/images/maintenance-svgrepo-com.svg"} alt="Periyodik Bakım" width={20} height={20} className="w-20"/>
                    <p className="font-bold text-2xl tracking-wide">Periyodik Bakım</p>
                    <p className="text-sm text-muted-foreground">Önleyici bakım programlarımızla olası arızaları önceden engelliyor, makine ömrünü uzatıyoruz.</p>
                </div>
                
                <div className="w-full rounded-lg shadow-lg p-5 space-y-5 hover:border hover:border-blue-600">
                    <Image src={"/images/technical-support-worker-fix-repair-svgrepo-com.svg"} alt="Acil Teknik Destek" width={20} height={20} className="w-20"/>
                    <p className="font-bold text-2xl tracking-wide">Acil Teknik Destek</p>
                    <p className="text-sm text-muted-foreground">Olası sorunlarda 7/24 teknik destek ve hızlı müdahale ile üretim kaybınızı sıfıra indiriyoruz.</p>
                </div>

                <div className="w-full rounded-lg shadow-lg p-5 space-y-5 hover:border hover:border-blue-600">
                    <Image src={"/images/drilling-machine-drill-svgrepo-com.svg"} alt="Yedek Parça & Modernizasyon" width={20} height={20} className="w-20"/>
                    <p className="font-bold text-2xl tracking-wide">Yedek Parça & Modernizasyon</p>
                    <p className="text-sm text-muted-foreground">Orijinal yedek parçalar ve sistem iyileştirmeleri ile ekipmanlarınızı daima güncel tutuyoruz.</p>
                </div>
            </div>
        </div>

        

      </div>
    </div>
  );
}

export default Services;
