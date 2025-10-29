import Image from "next/image"
import Link from "next/link"


function ProductList() {
  return (
    <div className="w-full h-full flex justify-center items-center px-10 mb-20">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                <div className="border w-full p-3 rounded-2xl cursor-pointer backdrop-blur-lg hover:shadow-xl">
                    <Link href="/products/123">
                    <Image src={"/images/beltconveyor.jpg"} alt="" width={200} height={200} className="rounded-2xl w-full h-[450px]"/>
                    <p className="mt-5 font-bold text-2xl">Belt Conveyor</p>
                    <p className="text-muted-foreground font-medium text-sm">Fabrikalarda malzemelerin hızlı, güvenli ve düzenli taşınmasını sağlar; üretim süreçlerinde verimlilik ve iş akışını optimize eder.</p>
                    </Link>
            </div>

            <div className="border w-full p-3 rounded-2xl cursor-pointer backdrop-blur-lg hover:shadow-xl">
                <Link href="/products/456">
                    <Image src={"/images/factory-workshop-interior-machines-glass-industry-background-process-production.jpg"} alt="" width={200} height={200} className="rounded-2xl w-full h-[450px]"/>
                    <p className="mt-5 font-bold text-2xl">Industrial Drill Machine</p>
                    <p className="text-muted-foreground font-medium text-sm">Metallerde ve diğer sert malzemelerde delme işlemlerini hassas ve hızlı şekilde gerçekleştirir, üretimde kalite ve doğruluk sağlar.</p>
                    </Link>
            </div>


            <div className="border w-full p-3 rounded-2xl cursor-pointer backdrop-blur-lg hover:shadow-xl">
                <Link href="/products/789">
                    <Image src={"/images/industrial-metal-drill-machine-metalworking-workshop.jpg"} alt="" width={200} height={200} className="rounded-2xl w-full h-[450px]"/>
                    <p className="mt-5 font-bold text-2xl">CNC Milling Machine</p>
                    <p className="text-muted-foreground font-medium text-sm">Metal ve plastik parçaları hassas şekilde işler; karmaşık şekiller ve yüksek doğrulukla üretim süreçlerini destekler.</p>
                    </Link>
            </div>
            <div className="border w-full p-3 rounded-2xl cursor-pointer backdrop-blur-lg hover:shadow-xl">
                    <Link href="/products/123">
                    <Image src={"/images/beltconveyor.jpg"} alt="" width={200} height={200} className="rounded-2xl w-full h-[450px]"/>
                    <p className="mt-5 font-bold text-2xl">Packaging Machine</p>
                    <p className="text-muted-foreground font-medium text-sm">Ürünlerin güvenli, hızlı ve düzgün şekilde paketlenmesini sağlar; üretim hattındaki zaman kaybını ve hataları minimize eder.</p>
                    </Link>
            </div>

            <div className="border w-full p-3 rounded-2xl cursor-pointer backdrop-blur-lg hover:shadow-xl">
                <Link href="/products/456">
                    <Image src={"/images/factory-workshop-interior-machines-glass-industry-background-process-production.jpg"} alt="" width={200} height={200} className="rounded-2xl w-full h-[450px]"/>
                    <p className="mt-5 font-bold text-2xl">Industrial Robot Arm</p>
                    <p className="text-muted-foreground font-medium text-sm">Otomasyon ile üretim hattında hız, verimlilik ve tekrar edilebilirlik sağlar; insan hatalarını ve maliyetleri azaltır.</p>
                    </Link>
            </div>


            <div className="border w-full p-3 rounded-2xl cursor-pointer backdrop-blur-lg hover:shadow-xl">
                <Link href="/products/789">
                    <Image src={"/images/industrial-metal-drill-machine-metalworking-workshop.jpg"} alt="" width={200} height={200} className="rounded-2xl w-full h-[450px]"/>
                    <p className="mt-5 font-bold text-2xl">Hydraulic Press</p>
                    <p className="text-muted-foreground font-medium text-sm">Malzemeleri presleyerek şekillendirir; yüksek basınç ve hassasiyetle üretim süreçlerinde dayanıklılık ve kalite sunar.</p>
                    </Link>
            </div>
        </div>
    </div>
  )
}

export default ProductList