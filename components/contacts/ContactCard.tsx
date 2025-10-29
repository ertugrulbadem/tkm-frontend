import Image from "next/image";

function ContactCard() {
  return (
    <div className="w-full z-10 mt-10 p-10 bg-white flex flex-col justify-center items-center">
      <p className="text-[30px] font-bold tracking-wide text-center">
        Hayalinizdeki Fabrikayı Kurmak için Bize Ulaşın
      </p>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mt-16 w-full">
        {/* ADRES */}
        <div className="md:border-r-2 border-gray-200 p-5 flex flex-col justify-start items-center space-y-5">
          <div className="h-[80px] flex justify-center items-start">
            <Image
              src={"/images/address-svgrepo-com.svg"}
              alt="Adress"
              width={80}
              height={50}
            />
          </div>
          <p className="text-[20px] font-bold tracking-wide">Adres</p>
          <p className="text-[14px] font-semibold tracking-wide text-center">
            Organize San. Böl. Pik Dökümcüler Sitesi
            <br />
            A2 Blok No: 14 İkitelli / İSTANBUL
          </p>
        </div>

        {/* TELEFON */}
        <div className="md:border-r-2 border-gray-200 p-5 flex flex-col justify-start items-center space-y-5">
          <div className="h-[80px] flex justify-center items-start">
            <Image
              src={"/images/phone-svgrepo-com.svg"}
              alt="Phone"
              width={80}
              height={50}
            />
          </div>
          <p className="text-[20px] font-bold tracking-wide">Telefon</p>
          <p className="text-[14px] font-semibold tracking-wide text-center">
            +90 (212) 485 20 99
            <br />+90 (212) 485 59 90
          </p>
        </div>

        {/* MAIL */}
        <div className="p-5 flex flex-col justify-start items-center space-y-5">
          <div className="h-[80px] flex justify-center items-start">
            <Image
              src={"/images/email-svgrepo-com.svg"}
              alt="Mail"
              width={80}
              height={50}
            />
          </div>
          <p className="text-[20px] font-bold tracking-wide">Mail</p>
          <p className="text-[14px] font-semibold tracking-wide text-center">
            info@tkmmakina.com.tr
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
