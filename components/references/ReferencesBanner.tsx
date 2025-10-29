import Image from "next/image"

function ReferencesBanner() {
  return (
    <div className="relative">
        <Image src={"/images/worker-operating-industrial-machine-metal-workshop.jpg"} alt="references-banner" width={1920} height={500} className={"w-full h-[80vh] object-center relative"}/>
        <h1 className="absolute text-white top-2/3 left-1/2 -translate-1/2 font-bold tracking-wide text-[60px]">Referanslar</h1>
    </div>
  )
}

export default ReferencesBanner