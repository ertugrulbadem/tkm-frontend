"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

const faqs = [
  {
    question: "Makine üretim süreçleriniz hangi aşamalardan oluşuyor?",
    answer: "Makine üretim sürecimiz, tasarım, prototip üretimi, malzeme seçimi, hassas işleme, montaj ve kalite kontrol aşamalarından oluşur. Son olarak üretim hattında test edilerek kullanıma hazır hale gelir."
  },
  {
    question: "Hangi sektörler için makine üretiyorsunuz?",
    answer: "İmalat, inşaat, tarım, enerji, gıda ve paketleme başta olmak üzere birçok sektöre özel makineler tasarlıyor ve üretiyoruz. Her sektörün operasyonel gereksinimleri göz önünde bulundurularak özelleştirilmiş çözümler sağlıyoruz."
  },
  {
    question: "Özel üretim makineleri tasarlıyor musunuz?",
    answer: "Evet, müşterilerimizin ihtiyaçlarına göre tamamen özelleştirilmiş makine çözümleri sunuyoruz. Üretim hattınızın özel gereksinimlerini analiz ederek en uygun teknolojiyi ve tasarımı belirliyoruz."
  },
  {
    question: "Üretim makinelerinizin garanti süresi ne kadar?",
    answer: "Tüm makinelerimiz için standart olarak 2 yıl garanti sağlıyoruz. Bu süre boyunca teknik arıza veya üretim kaynaklı sorunlarda bakım ve destek hizmeti sunuyoruz. Opsiyonel olarak uzatılmış garanti seçenekleri de mevcuttur."
  },
  {
    question: "Makine teslim süreleri ne kadar sürüyor?",
    answer: "Teslim süresi, projenin büyüklüğüne ve karmaşıklığına bağlı olarak değişir. Küçük ölçekli makineler genellikle 4–6 hafta içinde, büyük ve özelleştirilmiş projeler ise 4–6 ay sürebilir."
  },
  {
    question: "Üretimde hangi teknolojileri kullanıyorsunuz?",
    answer: "CNC makineleri, robotik otomasyon sistemleri, endüstriyel IoT çözümleri ve 3D tasarım teknolojilerini kullanıyoruz. Bu sayede üretim hızını artırıyor, hassasiyet ve kaliteyi maksimum seviyeye çıkarıyoruz."
  },
  {
    question: "Satış sonrası destek sağlıyor musunuz?",
    answer: "Evet, montaj, eğitim ve düzenli bakım hizmetleri sunuyoruz. Satış sonrası destek ekibimiz, herhangi bir sorun veya arıza durumunda hızlı ve etkin çözüm sağlar."
  },
  {
    question: "Fabrika verimliliğini artırmak için ne tür makineler öneriyorsunuz?",
    answer: "Otomasyon sistemleri, taşımacılık çözümleri, robotik kollar ve paketleme makineleri ile üretim süreçlerini optimize ediyoruz. Ayrıca enerji tasarrufu sağlayan ve bakım gereksinimi düşük makineler öneriyoruz."
  }
];

  return (
<section className="max-w-7xl mx-auto px-6 md:px-10 py-16 flex flex-col md:flex-row items-start gap-10">
  {/* Sol Görsel */}
  <div className="md:w-1/2 w-full relative">
    <div className="overflow-hidden rounded-2xl shadow-md">
      <Image
        src="/images/man-working-steel-fatory-equipment-steel-production.jpg"
        alt="FAQ Image"
        width={600}
        height={500}
        className="object-cover w-full h-full"
      />
    </div>
  </div>

  {/* Sağ Kısım */}
  <div className="md:w-1/2 w-full flex flex-col">
    {/* Başlık üstte */}
    <h2 className="text-3xl font-bold mb-8">Sıkça Sorulan Sorular</h2>

    {/* Sorular */}
    <div className="space-y-4">
      {faqs.map((item, index) => (
        <div
          key={index}
          className="border-b border-gray-200 pb-4 transition-all duration-200"
        >
          <button
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
            className="flex justify-between items-center w-full text-left text-lg font-medium text-gray-800 cursor-pointer hover:text-blue-600 transition-colors duration-200"
          >
            {item.question}
            <ChevronDown
              className={`transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
              size={20}
            />
          </button>

          <div
            className={`mt-2 text-gray-600 text-sm leading-relaxed transition-all duration-300 ${
              openIndex === index
                ? "opacity-100 max-h-40"
                : "opacity-0 max-h-0 overflow-hidden"
            }`}
          >
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}
